// types.ts

// region ICmText
export interface CmTextProps {
  align?: 'center';
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
    '9xl'
};

// region CoverTitle
export interface CoverTitleTextProps {
  text: string;
}