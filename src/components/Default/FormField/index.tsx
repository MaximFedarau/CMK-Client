import React, { FC, useState, useRef } from 'react';
import { TextInputProps, useWindowDimensions, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  AnimatedFormLabelContainer,
  AnimatedFormLabel,
  FormFieldInput,
  FormItemContainer,
  FormFieldInputContainer,
  AnimatedSecureTextButtonContainer,
  SecureTextButton,
  FormLabel,
  AdditionalLabelButton,
} from '@components';
import { SIZES, FONTS, COLORS, ANIMATION_SPEED } from '@constants';
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
  const animationValue = useRef({
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
        <AnimatedFormLabel style={{ fontSize: labelFontSize }}>
          {labelText}
        </AnimatedFormLabel>
      </AnimatedFormLabelContainer>
      <FormFieldInputContainer>
        <FormFieldInput
          {...props}
          secureTextEntry={secureText}
          onFocus={() =>
            manageAnimation(animationValue.label, true, ANIMATION_SPEED.medium)
          }
          onBlur={
            props.value
              ? undefined
              : () =>
                  manageAnimation(
                    animationValue.label,
                    false,
                    ANIMATION_SPEED.medium,
                  )
          }
          style={{
            width: isPasswordInput
              ? (width - insets.left - insets.right) * 0.85 - SIZES['3xl'] // (width of the whole screen - SafeAreaView insets) * 85% (85% * Screen width = Form content width) - SIZES['3xl'] (width of the icon) = width of the input - width of the icon
              : '100%', // default width
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
                  ANIMATION_SPEED.fast,
                )
              }
              onPressOut={() =>
                manageAnimation(
                  animationValue.secureTextButton,
                  false,
                  ANIMATION_SPEED.fast,
                )
              }
            >
              {secureText ? <ClosedEyeIcon /> : <EyeIcon />}
            </SecureTextButton>
          </AnimatedSecureTextButtonContainer>
        )}
      </FormFieldInputContainer>
      {additionalLabelText && (
        <AdditionalLabelButton
          style={({ pressed }) => pressed && { backgroundColor: COLORS.polar }}
          onPress={onAdditionalLabelPress}
        >
          <FormLabel>{additionalLabelText}</FormLabel>
        </AdditionalLabelButton>
      )}
    </FormItemContainer>
  );
};
