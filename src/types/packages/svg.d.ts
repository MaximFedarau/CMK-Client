// react-native-svg
declare module '*.svg' {
  import React, { FC } from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: FC<SvgProps>;
  export default content;
}
