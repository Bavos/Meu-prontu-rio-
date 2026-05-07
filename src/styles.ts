import type {CSSProperties} from 'react';

export const colors = {
  blue: '#4A90E2',
  teal: '#42D6C5',
  green: '#3DD598',
  white: '#FFFFFF',
  light: '#F5F5F5',
  dark: '#2D2D2D',
  gray: '#6B6B6B',
};

export const fontStack = 'Poppins, Nunito, Montserrat, Arial, sans-serif';

export const fullScreen: CSSProperties = {
  width: 1080,
  height: 1920,
  position: 'relative',
  overflow: 'hidden',
  fontFamily: fontStack,
};
