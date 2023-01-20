import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

type RootStackParamList = {
  [NavigationName.AUTH]: undefined;
} & AuthNavigationRootStackParamList;

type AuthNavigationRootStackParamList = {
  [NavigationAuthName.LOG_IN]: undefined;
  [NavigationAuthName.SIGN_UP]: undefined;
  [NavigationAuthName.COUNTRY_CODE_SELECTION]: undefined;
};

export enum NavigationName {
  AUTH = 'Auth',
}

export enum NavigationAuthName {
  LOG_IN = 'LogIn',
  SIGN_UP = 'SignUp',
  COUNTRY_CODE_SELECTION = 'CountryCodeSelection',
}
