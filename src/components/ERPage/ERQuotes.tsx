import { assets } from "../../assets";
import { CmQuoteProps } from "../../types";

import stockImg from "../../assets/stock.jpg";

export const ERQuotes: CmQuoteProps[] = [
  {
    color: 'customBlueLighter',
    img: stockImg,
    title: 'Representante de la sociedad civil',
    text: '“Se requiere una red de participación ciudadana con voluntad para que vecinas y vecinos puedan participar”.'
  },
  {
    color: 'customBlueLighter',
    img: stockImg,
    title: 'Representante de gobierno',
    text: '“Guadalajara tiene una posición privilegiada de acceso al agua (...) El cambio climático ha visibilizado que este recurso no es eterno”.'
  },
  {
    color: 'customBlueLighter',
    img: assets.erQuote1,
    text: '“En el AMG se está buscando un repoblamiento de áreas centrales, pero prevalece la lógica comercial y no la vivienda social. Además, las rentas temporales elevan el costo de la vivienda y se desplaza a las familias de menos recursos”.',
    title: 'Representante de academia'
  },
]