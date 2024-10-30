import { SlSocialInstagram } from 'react-icons/sl';
import { assets } from '../assets';

import { CmHeaderProps, CmIconSNProps, CoverPartnerProps, ERAdaptarseIconsTextProps, ERCountAndDescriptionProps, ERPillProps, ERQueEsIconProps, MenuKey } from "../types";
import { RiFacebookLine, RiTwitterXLine } from 'react-icons/ri';
import { FaYoutube } from 'react-icons/fa';

export const COVER_TITLE_TEXTS: string[] = [
  'La clave',
  'para el futuro de',
  'nuestas ciudades'
];

export const CM_PARTNERS_LOGOS: string[] = [
  assets.financeEU,
  assets.ambW,
  assets.imeplanW
];

export const MENU_PREFIXES: Record<MenuKey, string> = {
  HOME: '/',
  ER: '/estrategia-de-resiliencia',
  PV: '/puntos-verdes',
  GP: '/guia-politica'
};


export const CM_HEADER_ITEMS: CmHeaderProps[] = [
  {
    link: MENU_PREFIXES.ER,
    text: "Estrategia de Resiliencia",
    logo: assets.erLogo
  },
  {
    link: MENU_PREFIXES.PV,
    text: "Puntos Verdes",
    logo: assets.pvLogo
  },
  {
    link: MENU_PREFIXES.GP,
    text: "Guía Política de Gobernanza",
    logo: assets.gpLogo
  },
];

export const COVER_PARTNERS: CoverPartnerProps[] = [
  { src: assets.financeEUColor, url: 'https://european-union.europa.eu/index_es' },
  {
    title: 'Representando al AMB',
    src: assets.ambC,
    url: 'https://www.amb.cat/s/home.html'
  },
  {
    title: 'Representando al AMG',
    src: assets.imeplanC,
    url: 'https://www.imeplan.mx/'
  },
];

export const VIDEOS = { 
  coverVideo: assets.videoCover 
}

export const ER_COVER_LOGOS: string[] = [
  assets.ambW,
  assets.imeplanW,
  assets.resilientCity,
];

export const ER_QUE_ES_ICONS: ERQueEsIconProps[] = [
  {
    icon: assets.movilidad,
    title: "Asentamientos irregulares o movilidad deficiente",
    textSide: 'left',
  },
  {
    icon: assets.inundaciones,
    title: "Inundaciones, sequías o incendios",
    textSide: 'right',
  },
]

export const ER_IMAGES_CARROUSEL: string[] = [
  assets.carrusel1,
  assets.carrusel2,
  assets.carrusel3,
  assets.carrusel4,
  assets.carrusel5,
  assets.carrusel6,
  assets.carrusel7,
  // assets.carrusel8,
  assets.carrusel9,
  assets.carrusel10,
  assets.carrusel11,
];

export const ER_ADAPTARSE_ICONS_TEXT: ERAdaptarseIconsTextProps[] = [
  {
    icon: assets.adaptarseIcon1,
    text: "Complejidad del territorio metropolitano"
  },
  {
    icon: assets.adaptarseIcon2,
    text: "Gestión integral de la movilidad"
  },
  {
    icon: assets.adaptarseIcon3,
    text: "Gestión de los servicios públicos"
  },
  {
    icon: assets.adaptarseIcon4,
    text: "Gestión de los recursos hídricos"
  },
];

export const ER_COUNTS_AND_DESCRIPTIONS: ERCountAndDescriptionProps[] = [
  {
    number: '157',
    title: 'Impactos agudos',
    description: 'Eventos repentinos y bruscos, de origen natural o humano, que amenazan o afectan a la metrópoli.',
    examples: 'Ejemplo: Incendios y sequías.',
    bgColor: 'customBlueLighter',
    mr: '5'
  },
  {
    number: '198',
    title: 'Tensiones crónicas',
    description: 'Situaciones o condiciones que debilitan la estructura de la ciudad de forma diaria o cíclica.',
    examples: 'Ejemplo: Asentamientos irregulares y movilidad.',
    bgColor: '[#5f93a5]',
    ml: '5'
  },
];

export const ER_PILLS: ERPillProps[] = [
  {
    bg:   assets.adaptarsePill1,
    text: ""
  },
  {
    bg:   assets.adaptarsePill2,
    text: ""
  },
  {
    bg:   assets.adaptarsePill3,
    text: ""
  },
  {
    bg:   assets.adaptarsePill4,
    text: ""
  },
];

export const CM_ICONS_SN: CmIconSNProps[] = [
  {
    icon: RiFacebookLine,
    url: ''
  },
  {
    icon: RiTwitterXLine,
    url: ''
  },
  {
    icon: SlSocialInstagram,
    url: ''
  },
  {
    icon: FaYoutube,
    url: ''
  },
]