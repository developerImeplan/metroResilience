import { assets } from "../../assets";
import { ERDowloadProps } from "../../types";

import erGuia from "../../assets/er_guia.png";

export const ERDowloads: ERDowloadProps[] = [
  {
    img: erGuia,
    title: 'Guía para leer la Estrategia',
    doc: '',
    marginR: true
  },
  {
    img: assets.erPresentacionEjecutiva,
    title: 'Presentación ejecutiva',
    doc: assets.erPresentacionEjecutivaPDF,
    marginR: true
  },
  {
    img: assets.erResumenEjecutivo,
    title: 'Resumen ejecutivo',
    doc: assets.erResumenEjecutivoPDF,
    marginR: true
  },
  {
    img: assets.erDocumentoCompleto,
    title: 'Documento completo',
    doc: assets.erDocCompletoPDF,
  },
];