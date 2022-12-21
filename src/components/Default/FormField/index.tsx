import React, { FC, useState } from 'react';
import { TextInputProps, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  FormLabel,
  FormFieldAdditionalLabel,
  FormFieldInput,
  FormFieldContainer,
  FormFieldInputContainer,
  SecureTextButton,
} from '@components';
import { SIZES } from '@constants/theme';
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

  return (
    <FormFieldContainer>
      <FormLabel>{labelText}</FormLabel>
      <FormFieldInputContainer>
        <FormFieldInput
          {...props}
          secureTextEntry={secureText}
          style={{
            width: isPasswordInput
              ? (width - insets.left - insets.right) * 0.85 - SIZES['3xl'] // (width of the whole screen - SafeAreaView insets) * 85% (85% * Screen width = Form content width) - SIZES['3xl'] (width of the icon) = width of the input - width of the icon
              : '100%', // default width
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
