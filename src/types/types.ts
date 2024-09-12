// types.ts

// region General
export type Sizing = '1' | '2' | '3' | '4' | '5' | '10' | '0';

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

// region CoverDropdown

export interface CoverDropdownProps {
  content?: React.ReactNode;
  extraStyles?: string;
  padding?: Sizing;
  paddingR?: Sizing;
  paddingL?: Sizing;
  margin?: Sizing;
  marginR?: Sizing;
  marginL?: Sizing;
  specialContent?: boolean;
  title: string;
  width?: '1/2' | 'full';
}

export interface CoverDropdownHeaderProps {
  title: string;
}

export interface CoverDropdownItemProps {
  children: React.ReactNode
}