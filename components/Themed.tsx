import * as React from 'react';
import { Button as DefaultButton, ButtonProps as DefaultButtonProps, StyleProp, Text as DefaultText, View as DefaultView, ViewStyle } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export const defaultFontFamily = 'Montserrat_400Regular';
export const boldFontFamily = 'Montserrat_700Bold';

export const defaultLight = '#2958E5';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  fontFamily?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, lightColor = defaultLight, darkColor, fontFamily = defaultFontFamily, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color, fontFamily }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export type ExtendedButtonProps = DefaultButtonProps & {
  style?: StyleProp<ViewStyle>;
  shadow?: boolean;
}
export function Button(props: ExtendedButtonProps) {
  const { style, shadow = true, ...otherProps } = props;
  const shadowStyle: StyleProp<ViewStyle> = { shadowColor: 'black', shadowOffset: { height: 4, width: 2 }, shadowOpacity: 0.2, shadowRadius: 5};
  const derivedStyles = shadow ? [style, shadowStyle] : style;
  return <View style={derivedStyles}>
    <DefaultButton {...otherProps}/>
  </View>;
}