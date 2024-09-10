// types.ts
export interface ICmText {
  children?: React.ReactNode;
  variant?: keyof ITextVariants;
}

interface ITextVariants {
  textXs: 'text-xs';
  textSm: 'text-sm';
  textBase: 'text-base';
  textLg: 'text-lg';
  textXl: 'text-xl';
  text2Xl: 'text-2xl';
  text3Xl: 'text-3xl';
  text4Xl: 'text-4xl';
  text5Xl: 'text-5xl';
  text6Xl: 'text-6xl';
  text7Xl: 'text-7xl';
  text8Xl: 'text-8xl';
  text9Xl: 'text-9xl';
}

export const variantClasses: ITextVariants = {
  textXs: 'text-xs',
  textSm: 'text-sm',
  textBase: 'text-base',
  textLg: 'text-lg',
  textXl: 'text-xl',
  text2Xl: 'text-2xl',
  text3Xl: 'text-3xl',
  text4Xl: 'text-4xl',
  text5Xl: 'text-5xl',
  text6Xl: 'text-6xl',
  text7Xl: 'text-7xl',
  text8Xl: 'text-8xl',
  text9Xl: 'text-9xl',
};
