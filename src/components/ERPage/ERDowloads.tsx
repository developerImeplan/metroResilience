import { assets } from "../../assets";
import { ERDowloadProps } from "../../types";

export const ERDowloads: ERDowloadProps[] = [
  {
    img: assets.erGuia,
    title: 'Guía para leer la Estrategia',
    doc: '',
    marginR: true
  },
  {
    img: assets.executiveSummary,
    title: 'English versión',
    doc: assets.resumenIngles,
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