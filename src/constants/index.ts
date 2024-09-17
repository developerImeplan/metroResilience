import { CoverPartnerProps, ERCountAndDescriptionProps } from "../types";
import sampleVideo from '../assets/sample_video.mp4';

import amb from '../assets/amb.png';
import imeplan from '../assets/imeplan.png';
import ue from '../assets/ue.png';

export const COVER_TITLE_TEXTS: string[] = [
  'La clave',
  'para el futuro de',
  'nuestas ciudades'
];

export const COVER_PARTNERS: CoverPartnerProps[] = [
  { src: ue, url: 'https://european-union.europa.eu/index_es ' },
  {
    title: 'Representando al AMB',
    src: amb,
    url: 'https://www.amb.cat/s/home.html'
  },
  {
    title: 'Representando al AMG',
    src: imeplan,
    url: 'https://www.imeplan.mx/ '
  },
];

export const VIDEOS = { 
  coverVideo: sampleVideo 
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
]