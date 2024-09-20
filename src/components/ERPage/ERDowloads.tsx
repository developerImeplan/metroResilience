import { ERDowloadProps } from "../../types";

import erGuia from "../../assets/er_guia.png";
import erDocumentoCompleto from "../../assets/er_documento_completo.png";
import erPresentacionEjecutiva from "../../assets/er_presentacion_ejecutiva.png";
import erResumenEjecutivo from "../../assets/er_resumen_ejecutivo.png";

export const ERDowloads: ERDowloadProps[] = [
  {
    img: erGuia,
    title: 'Guía para leer la Estrategia',
    doc: '',
    marginR: true
  },
  {
    img: erPresentacionEjecutiva,
    title: 'Presentación ejecutiva',
    doc: '',
    marginR: true
  },
  {
    img: erResumenEjecutivo,
    title: 'Resumen ejecutivo',
    doc: '',
    marginR: true
  },
  {
    img: erDocumentoCompleto,
    title: 'Documento completo',
    doc: '',
  },
];