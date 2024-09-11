import { CoverPartnerProps } from "../types";

import amb from '../assets/amb.png';
import imeplan from '../assets/imeplan.png';
import ue from '../assets/ue.png';

export const COVER_TITLE_TEXTS: string[] = [
  'La clave',
  'para el futuro de',
  'nuestas ciudades'
];

export const COVER_PARTNERS: CoverPartnerProps[] = [
  { src: ue },
  {
    title: 'Representando al AMB',
    src: amb
  },
  {
    title: 'Representando al AMG',
    src: imeplan
  },
];