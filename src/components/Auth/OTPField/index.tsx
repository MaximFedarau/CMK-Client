import React, { useRef, useState, FC } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';

import {
  FormItemContainer,
  FormLabel,
  AuthOTPFieldInputContainer,
  OTPFieldInput,
} from '@components';

import { styles } from './styles';

interface Props {
  value: string[];
  onChange(value: string[]): void;
  disabled?: boolean;
  allowPasting?: boolean;
}

export const AuthOTPField: FC<Props> = ({
  value,
  onChange,
  disabled = false,
  allowPasting = false,
}) => {
  const INPUTS_QUANTITY = value.length;
  const inputRefs = useRef<TextInput[]>([]); // handle inputs
  const [focusStates, setFocusStates] = useState<boolean[]>(
    new Array(INPUTS_QUANTITY).fill(false),
  ); // handle inputs focused/unfocused state

  const handleChange = (text: string, index: number) => {
    if (text.length === 1) {
      const modifiedValue = value.map((data, dataIndex) =>
        dataIndex === index ? text : data,
      );
      onChange(modifiedValue);
      return inputRefs?.current[index + 1]?.focus();
    }

    if (text.length > 1) {
      if (value[index] !== '') text = text.slice(1); // if current TextInput has text, then we want to replace it, so we "cut off" the old text

      const newValue = (
        text.length > INPUTS_QUANTITY
          ? text.slice(0, INPUTS_QUANTITY - index)
          : text
      ).split('');

      const modifiedValue = value.map(
        (item, valueIndex) =>
          valueIndex >= index ? newValue[valueIndex - index] || item : item, // newValue[valueIndex - index] can possibly be undefined, when we, for example, updating first TextInput with new value
      );

      onChange(modifiedValue);
      return inputRefs?.current[
        index + newValue.length > INPUTS_QUANTITY - 1
          ? INPUTS_QUANTITY - 1
          : index + newValue.length
      ]?.focus(); // make next TextInput focused
    }
  };

  const handleBackspace = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    const {
      nativeEvent: { key },
    } = event;

    if (key !== 'Backspace') return;

    // if current TextInput is empty, then delete value of the previous one and make it focused
    if (!value[index]) {
      const modifiedValue = value.map((data, dataIndex) =>
        dataIndex === index - 1 ? '' : data,
      );
      onChange(modifiedValue);
      return inputRefs?.current[index - 1]?.focus();
    }

    // if current TextInput is not empty, then just delete its value
    const modifiedValue = value.map((data, dataIndex) =>
      dataIndex === index ? '' : data,
    );
    onChange(modifiedValue);
  };

  const handleFocus = (index: number, isFocused: boolean) => {
    const newFocusStatus = isFocused ? false : true;
    const newFocusStates = focusStates.map((item, itemIndex) =>
      itemIndex === index ? newFocusStatus : item,
    );
    setFocusStates(newFocusStates);
  };

  return (
    <FormItemContainer>
      <FormLabel>Code</FormLabel>
      <AuthOTPFieldInputContainer>
        {value.map((item, index) => (
          <OTPFieldInput
            ref={(ref) => {
              if (ref && !inputRefs.current.includes(ref)) {
                inputRefs.current = [...inputRefs.current, ref];
              }
            }}
            selection={{ start: 1, end: 1 }} // this does not allow to move cursor
            caretHidden={!allowPasting}
            contextMenuHidden={!allowPasting}
            value={item}
            key={index}
            editable={!disabled}
            focused={focusStates[index]}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            autoComplete="sms-otp"
            textAlign="center"
            style={styles.oneTimePasswordText}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(event) => handleBackspace(event, index)}
            onFocus={() => handleFocus(index, false)}
            onBlur={() => handleFocus(index, true)}
          />
        ))}
      </AuthOTPFieldInputContainer>
    </FormItemContainer>
  );
};
