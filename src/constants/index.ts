import { CoverPartnerProps } from "../types";
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

export const ER_IMAGES_CARROUSEL = [
  "https://via.placeholder.com/800x400?text=Slide+1",
  "https://via.placeholder.com/800x400?text=Slide+2",
  "https://via.placeholder.com/800x400?text=Slide+3",
];