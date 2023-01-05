import React, { FC, useState, useRef } from 'react';
import { TextInputProps, useWindowDimensions, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  AnimatedFormLabelContainer,
  AnimatedFormLabel,
  FormFieldAdditionalLabel,
  FormFieldInput,
  FormItemContainer,
  FormFieldInputContainer,
  AnimatedSecureTextButtonContainer,
  SecureTextButton,
} from '@components';
import { SIZES, FONTS, COLORS } from '@constants';
import EyeIcon from '@assets/images/eye.svg';
import ClosedEyeIcon from '@assets/images/closedEye.svg';

interface Props extends TextInputProps {
  labelText: string;
  additionalLabelText?: string;
  onAdditionalLabelPress?: () => void;
  isPasswordInput?: boolean;
}

export const FormField: FC<Props> = ({
  labelText,
  additionalLabelText,
  onAdditionalLabelPress,
  isPasswordInput,
  ...props
}) => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const [secureText, setSecureText] = useState(props.secureTextEntry);
  const changeSecureText = () => setSecureText(!secureText);

  const animationState = { start: 0, end: 1 };
  const animationSpeed = { fast: 125, slow: 250 };
  const animationValue = useRef({
    additionalLabel: new Animated.Value(animationState.start),
    label: new Animated.Value(animationState.start),
    secureTextButton: new Animated.Value(animationState.start),
  }).current;

  const manageAnimation = (
    animatedValue: Animated.Value | Animated.ValueXY,
    isStart: boolean,
    duration: number,
  ) => {
    Animated.timing(animatedValue, {
      toValue: isStart ? animationState.end : animationState.start,
      duration,
      useNativeDriver: false,
    }).start();
  };

  const inputRange = Object.values(animationState);
  const additionalLabelBackground = animationValue.additionalLabel.interpolate({
    inputRange,
    outputRange: [COLORS.white, COLORS.polar],
  });
  const labelTopPosition = animationValue.label.interpolate({
    inputRange,
    outputRange: [FONTS.sizes.sm, -FONTS.sizes.sm], // label fontSize
  });
  const labelFontSize = animationValue.label.interpolate({
    inputRange,
    outputRange: [FONTS.sizes.lg, FONTS.sizes.sm], // [TextInput fontSize, label fontSize]
  });
  const secureTextButtonScale = animationValue.secureTextButton.interpolate({
    inputRange,
    outputRange: [1, 0.9],
  });

  return (
    <FormItemContainer>
      <AnimatedFormLabelContainer
        pointerEvents="none"
        style={{ top: labelTopPosition }}
      >
        <AnimatedFormLabel
          style={{ includeFontPadding: false, fontSize: labelFontSize }}
        >
          {labelText}
        </AnimatedFormLabel>
      </AnimatedFormLabelContainer>
      <FormFieldInputContainer>
        <FormFieldInput
          {...props}
          secureTextEntry={secureText}
          onFocus={() =>
            manageAnimation(animationValue.label, true, animationSpeed.slow)
          }
          onBlur={
            props.value
              ? undefined
              : () =>
                  manageAnimation(
                    animationValue.label,
                    false,
                    animationSpeed.fast,
                  )
          }
          style={{
            width: isPasswordInput
              ? (width - insets.left - insets.right) * 0.85 - SIZES['3xl'] // (width of the whole screen - SafeAreaView insets) * 85% (85% * Screen width = Form content width) - SIZES['3xl'] (width of the icon) = width of the input - width of the icon
              : '100%', // default width
            includeFontPadding: false, // android font padding
            paddingHorizontal: 0, // text padding
          }}
        />
        {isPasswordInput && (
          <AnimatedSecureTextButtonContainer
            style={{ transform: [{ scale: secureTextButtonScale }] }}
          >
            <SecureTextButton
              onPress={changeSecureText}
              onPressIn={() =>
                manageAnimation(
                  animationValue.secureTextButton,
                  true,
                  animationSpeed.fast,
                )
              }
              onPressOut={() =>
                manageAnimation(
                  animationValue.secureTextButton,
                  false,
                  animationSpeed.fast,
                )
              }
            >
              {secureText ? <ClosedEyeIcon /> : <EyeIcon />}
            </SecureTextButton>
          </AnimatedSecureTextButtonContainer>
        )}
      </FormFieldInputContainer>
      {additionalLabelText && (
        <FormFieldAdditionalLabel
          onPress={onAdditionalLabelPress}
          onPressIn={() =>
            manageAnimation(
              animationValue.additionalLabel,
              true,
              animationSpeed.fast,
            )
          }
          onPressOut={() =>
            manageAnimation(
              animationValue.additionalLabel,
              false,
              animationSpeed.fast,
            )
          }
          suppressHighlighting={true}
          style={{ backgroundColor: additionalLabelBackground }}
        >
          {additionalLabelText}
        </FormFieldAdditionalLabel>
      )}
    </FormItemContainer>
  );
};
