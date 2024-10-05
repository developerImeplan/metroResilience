import { assets } from '../assets';

import { CoverPartnerProps, ERAdaptarseIconsTextProps, ERCountAndDescriptionProps, ERQueEsIconProps } from "../types";

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

export const COVER_PARTNERS: CoverPartnerProps[] = [
  { src: assets.financeEUColor, url: 'https://european-union.europa.eu/index_es ' },
  {
    title: 'Representando al AMB',
    src: assets.ambC,
    url: 'https://www.amb.cat/s/home.html'
  },
  {
    title: 'Representando al AMG',
    src: assets.imeplanC,
    url: 'https://www.imeplan.mx/ '
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
    icon: assets.inundaciones,
    title: "Inundaciones, sequías o incendios"
  },
  {
    icon: assets.movilidad,
    title: "Asentamientos irregulares o movilidad deficiente"
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
  assets.carrusel8,
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
    title: 'impactos agudos',
    description: 'Eventos repentinos y bruscos, de origen natural o humano, que amenazan o afectan a la metrópoli.',
    examples: 'Ejemplo: Incendios y sequías.',
    bgColor: 'customBlueLighter',
    mr: '5'
  },
  {
    number: '198',
    title: 'tensiones crónicas',
    description: 'Situaciones o condiciones que debilitan la estructura de la ciudad de forma diaria o cíclica.',
    examples: 'Ejemplo: asentamientos irregulares y movilidad.',
    bgColor: 'customTurquoiseBlue',
    ml: '5'
  },
];

export const MENU_PREFIXES: Record<string, string> = {
  ER: '/estrategia-de-resiliencia',
  PV: '/puntos-verdes',
  GP: '/guia-politica'
};