// types.ts

// region ICmText
export interface CmTextProps {
  align?: 'center' | 'start';
  children?: React.ReactNode;
  color?: 'white' | 'black';
  variant?: 
    'xs' | 
    'sm' | 
    'base' |
    'lg' |
    'xl' |
    '2xl' |
    '3xl' |
    '4xl' |
    '5xl' |
    '6xl' | 
    '7xl' |
    '8xl' |
    '9xl';
  fontWeight?: 
    'thin' | 
    'light' | 
    'extralight' | 
    'normal' | 
    'medium' | 
    'semibold' | 
    'bold'
};

// region CoverTitle
export interface CoverTitleTextProps {
  text: string;
}

// region CmImage
export interface CmImageProps {
  src: string;
  className?: string;
  width?: number;
  height?: number;
}

// region CoverPartner
export interface CoverPartnerProps {
  title?: string;
  src: string;
  url: string;
}