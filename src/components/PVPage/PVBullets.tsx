import { assets } from "../../assets"

export const PVBullets = () => {
  return(
    <div className="space-y-2">
      {PV_BULLETS.map((b, index) => {
        return(
          <PVBullet text={b} key={index} />
        )
      })}
    </div>
  )
}

export const PVBullet = ({ text }: { text: string }) => {
  return (
    <div className="flex space-x-2">
      <img src={assets.pvLogo} className="h-[25px]" />
      <p>{text}</p>
    </div>
  )
}

export const PV_BULLETS: string[] = [
  'PVM Agencia Municipal Parques del Castillo - El Salto',
  'PVM Centro Tapatío del Adulto Mayor - Guadalajara',
  'PVM Jardín Obregón - Ixtlahuacán de los Membrillos',
  'PVM Parque Vicente Michel - Juanacatlán',
  'PVM Bosque Urbano Tlaquepaque - San pedro Tlaquepaque',
  'PVM Centro de Educación y Capacitación para el Desarrollo Sustentable - Tlajomulco de Zúñiga',
  'PVM Módulo de la Delegación Loma Dorada - Tonalá',
  'PVM Unidad Administrativa Las Águilas - Zapopan',
  'PVM Centro de Desarrollo Comunitario Bellavista - Zapotlanejo',
];