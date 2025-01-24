import { assets } from "../../../assets";
import { MENU_PREFIXES } from "../../../constants";
import { CoverMenuSectionProps } from "../../../types";

export const COVER_MENU_SECTIONS: CoverMenuSectionProps[] = [
  {
    id: "HOME",
    icon: '',
    title: assets.metroCLg,
    mainUrl: MENU_PREFIXES.HOME,
    items: [],
    img: true,
  },
  {
    id: "ER",
    icon: assets.erLogo,
    title: "Estrategia de Resiliencia",
    mainUrl: MENU_PREFIXES.ER,
    items: [
      {
        text: "¿Qué es?", 
        link: `${MENU_PREFIXES.ER}#que-es`
      },
      {
        text: "Visión, objetivo y beneficios", 
        link: `${MENU_PREFIXES.ER}#vision-objetivo`
      },
      {
        text: "Responder", 
        link: `${MENU_PREFIXES.ER}#responder`
      },
      {
        text: "Adaptarse", 
        link: `${MENU_PREFIXES.ER}#adaptarse`
      },
      {
        text: "Prosperar", 
        link: `${MENU_PREFIXES.ER}#prosperar`
      },
      {
        text: "Documentos de descarga", 
        link: `${MENU_PREFIXES.ER}#descargas`
      },
    ]
  },
  {
    id: "PV",
    icon: assets.pvLogo,
    title: "Puntos verdes",
    mainUrl: MENU_PREFIXES.PV,
    items: [
      {
        text: "¿Qué son?", 
        link: `${MENU_PREFIXES.PV}#que-son`
      },
      {
        text: "Visión, objetivo y beneficios", 
        link: `${MENU_PREFIXES.PV}#vision-objetivos`
      },
      {
        text: "Comunidad", 
        link: `${MENU_PREFIXES.PV}#comunidad`
      },
      {
        text: "Ubicación", 
        link: `${MENU_PREFIXES.PV}#ubicacion`
      },
      {
        text: "Diseño y características", 
        link: `${MENU_PREFIXES.PV}#disenio-caracteristicas`
      },
    ],
  },
  {
    id: "GP",
    icon: assets.gpLogo,
    title: "Guía Resiliencia Metropolitana",
    mainUrl: MENU_PREFIXES.GP,
    items: [
      {
        text: "¿Qué es?", 
        link: `${MENU_PREFIXES.GP}#que-es`
      },
      {
        text: "Visión, objetivo y beneficios", 
        link: `${MENU_PREFIXES.GP}#vision-objetivo`
      },
      {
        text: "Construcción de la Guía", 
        link: `${MENU_PREFIXES.GP}#construccion`
      },
      {
        text: "Aprendizajes", 
        link: `${MENU_PREFIXES.GP}#aprendizajes`
      },
      {
        text: "Congreso Internacional de Resiliencia Metropolitana", 
        link: `${MENU_PREFIXES.GP}#congreso-internacional`
      },
      {
        text: "Entrevistas con actores internacionales", 
        link: `${MENU_PREFIXES.GP}#entrevistas`
      },
    ]
  },
]
