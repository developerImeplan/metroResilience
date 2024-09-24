// types.ts

import { ReactNode } from "react";

// region General
export type Sizing = '1' | '2' | '3' | '4' | '5' | '10' | '0' | '1/3';
export type FontSizes = 'xs' | 
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

// region ICmText
export interface CmTextProps {
  align?: 'center' | 'start';
  children?: ReactNode;
  color?: 'white' | 'black';
  variant?: FontSizes;
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
  content?: ReactNode;
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
  onClick: () => void;
}

export interface CoverDropdownItemProps {
  children: ReactNode
}

// region CmSubtitle
export interface CmSubtitleProps {
  text: string;
}

// region CoverMenuItem
export interface CoverMenuItemProps {
  text: string;
  link: string;
}

export interface CoverMenuSectionProps {
  title: string;
  items: CoverMenuItemProps[];
  margins?: boolean;
  width?: Sizing;
}

// region CmCoverVideo
export interface CmVideoProps {
  url: string;
};

export interface CmCoverVideoProps {
  showFooter?: boolean;
  video: string;
  title: string;
  children?: ReactNode;
}

export interface CmCoverVideoFooterProps {
  image: string;
  title: string;
}

// region CmBoldText
export interface CmBoldTextProps {
  color?: string;
  children: string;
  size?: FontSizes;
  className?: string;
}

// region ERInfoItem
export interface ERInfoItemProps {
  title: string;
  children: ReactNode | ReactNode[];
  margins?: boolean;
}

// region CmBanner
export interface CmBannerProps {
  text: string;
}

// region ERCountItem
export interface ERCountItemProps {
  number: string;
  title: string;
  marginRight?: boolean;
}

// region CmImageCarrousel
export interface CmImageCarouselProps {
  images: string[];
} 

// region ERCoundAndDescription
export interface ERCountAndDescriptionProps {
  bgColor: string;
  number: string;
  title: string;
  description: string;
  examples: string;
  mr?: string;
  ml?: string;
}

// region ERProsperarIconDesc
export interface ERProsperarIconDescProps {
  icon: string;
  children: ReactNode;
  margins?: boolean;
}

// region CmQuote
export interface CmQuoteProps {
  color?: 'customBlueLighter' | 'customGreen';
  img: string;
  title: string;
  text: string;
}

// region ERDowload
export interface ERDowloadProps {
  img: string;
  title: string;
  doc: string;
  marginR?: boolean;
}

// region CmDropdown
export interface CmDropdownProps {
  titleComponent: ReactNode,
  children: ReactNode,
}

// region DropdownItem
export interface DropdownItemProps {
  title: string;
  children: ReactNode | ReactNode[];
  margins?: boolean;
}