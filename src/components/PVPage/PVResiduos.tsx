import { assets } from "../../assets";

export const PVResiduos = () => {
  return (
    <div>
      <div className="flex w-full sm:p-4 justify-around">
        <div className="flex flex-col items-center">
          <Item src={assets.azul1} />
          <Item src={assets.azul2} />
          <Item src={assets.azul3} />
          <Item src={assets.azul4} />
        </div>
        <div className="flex flex-col items-center">
          <Item src={assets.blanco1} />
          <Item src={assets.blanco2} />
          <Item src={assets.blanco3} />
        </div>
        <div className="flex flex-col items-center">
          <Item src={assets.amarillo1} />
          <Item src={assets.amarillo2} />
          <Item src={assets.amarillo3} />
        </div>
        <div className="flex flex-col items-center">
          <Item src={assets.gris1} />
          <Item src={assets.gris2} />
        </div>
      </div>
      <div className="flex sm:ml-[400px] sm:mt-[-150px]">
        <div className="text-white font-bold space-y-2">
          <div className="flex space-x-2">
            { BADGES.map(b => (<Badge {...b} />)) }
          </div>
          <div className="bg-customGreenN2 px-10 py-3 sm:text-4xl rounded-2xl">
            Consulta la guía paso a paso
          </div>
        </div>
      </div>
    </div>
  );
};

const Item = ({ src, size = 130 }: 
  { src: string, size?: number }
) => {
  return <img className={`w-[${size}px] h-[${size}px] rounded-md m-3`} src={src} />;
};

const Badge = ({ bg, text }: { bg: string, text: string }) => {
  return <div className={`bg-${bg} sm:px-10 py-1 rounded-lg w-1/3 sm:text-xl text-center`}>{ text }</div>;
}

const BADGES: Array<{ bg: string, text: string }> = [
  { bg: '[#915ea1]', text: 'Limpios' },
  { bg: 'customPinkN', text: 'Secos' },
  { bg: 'customMain', text: 'Separados' },
];