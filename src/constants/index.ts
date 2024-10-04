import { assets } from '../assets';

import { CoverPartnerProps, ERCountAndDescriptionProps } from "../types";

import amb from '../assets/amb.png';
import imeplan from '../assets/imeplan.png';
import ue from '../assets/ue.png';

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

export const ER_IMAGES_CARROUSEL: string[] = [
  "https://via.placeholder.com/800x400?text=Slide+1",
  "https://via.placeholder.com/800x400?text=Slide+2",
  "https://via.placeholder.com/800x400?text=Slide+3",
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