// ! Important
import 'styled-components/native';

import { COLORS, FONTS, SIZES } from '@constants';

/* Custom type for styled-components/native DefaultTheme */
declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof COLORS;
    fonts: typeof FONTS;
    sizes: typeof SIZES;
  }
}
