import React, { FC, useState, useRef } from 'react';
import { TextInputProps, useWindowDimensions, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  AnimatedFormLabelContainer,
  AnimatedFormLabel,
  FormFieldAdditionalLabel,
  FormFieldInput,
  FormFieldContainer,
  FormFieldInputContainer,
  SecureTextButton,
} from '@components';
import { SIZES, FONTS } from '@constants';
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

  const animationState = {
    start: 0,
    end: 1,
  };
  const animationValue = useRef(
    new Animated.Value(animationState.start),
  ).current;

  const startLabelAnimation = () => {
    Animated.timing(animationValue, {
      toValue: animationState.end,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };
  const endLabelAnimation = () => {
    Animated.timing(animationValue, {
      toValue: animationState.start,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const inputRange = Object.values(animationState);
  const labelTopPosition = animationValue.interpolate({
    inputRange,
    outputRange: [FONTS.sizes.sm, -FONTS.sizes.sm], // label fontSize
  });
  const labelFontSize = animationValue.interpolate({
    inputRange,
    outputRange: [FONTS.sizes.lg, FONTS.sizes.sm], // [TextInput fontSize, label fontSize]
  });

  return (
    <FormFieldContainer>
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
          onFocus={startLabelAnimation}
          onBlur={props.value ? undefined : endLabelAnimation}
          style={{
            width: isPasswordInput
              ? (width - insets.left - insets.right) * 0.85 - SIZES['3xl'] // (width of the whole screen - SafeAreaView insets) * 85% (85% * Screen width = Form content width) - SIZES['3xl'] (width of the icon) = width of the input - width of the icon
              : '100%', // default width
            includeFontPadding: false, // android font padding
            paddingHorizontal: 0, // text padding
          }}
        />
        {isPasswordInput && (
          <SecureTextButton onPress={changeSecureText}>
            {secureText ? <ClosedEyeIcon /> : <EyeIcon />}
          </SecureTextButton>
        )}
      </FormFieldInputContainer>
      {additionalLabelText && (
        <FormFieldAdditionalLabel onPress={onAdditionalLabelPress}>
          {additionalLabelText}
        </FormFieldAdditionalLabel>
      )}
    </FormFieldContainer>
  );
};
