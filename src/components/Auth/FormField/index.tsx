import React, { FC, useState } from 'react';
import { TextInputProps, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  AuthInputLabel,
  AuthInput,
  AuthInputContainer,
  AuthInputContentContainer,
  SecureTextButton,
} from '@components';
import { SIZES } from '@constants/theme';
import EyeIcon from '@assets/images/eye.svg';
import ClosedEyeIcon from '@assets/images/closedEye.svg';

interface Props extends TextInputProps {
  labelText: string;
  isPasswordInput?: boolean;
}

export const FormField: FC<Props> = ({
  labelText,
  isPasswordInput,
  ...props
}) => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const [secureText, setSecureText] = useState(props.secureTextEntry);

  const changeSecureText = () => setSecureText(!secureText);

  return (
    <AuthInputContainer>
      <AuthInputLabel>{labelText}</AuthInputLabel>
      <AuthInputContentContainer>
        <AuthInput
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
      </AuthInputContentContainer>
    </AuthInputContainer>
  );
};
