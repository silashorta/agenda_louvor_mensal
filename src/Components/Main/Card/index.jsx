import React, { useEffect, useRef, useState } from 'react';
import { findBestMatch } from 'string-similarity';

import { CiMenuKebab } from "react-icons/ci";

import mic from '../../../../public/images/mic.png';
import drum from '../../../../public/images/drum.png';
import bass from '../../../../public/images/bass.png';
import guitar from '../../../../public/images/guitar.png';
import key from '../../../../public/images/keyboard.png';
import aguitar from '../../../../public/images/violao.png';

function Card({ data, bateria, baixo, guitarra, violao, teclado, vocal1, vocal2, vocal3, ministro, kids1, kids2, kids3, kids4 }) {
  const nomes = ['silas horta', 'ester horta', 'pr. caio braga', 'pra. dani braga', 'abner domingos', 'ana lúcia', 'caio duarte', 'caio mendes', 'gabriel monteiro', 'geovanna medeiros', 'giulia ventura', 'guilherme nery', 'igor araújo', 'pr. iohan', 'jean amaro', 'juliana oliveira', 'leo santos', 'lucas fundagem', 'lydia brum', 'rafael santana', 'raquel nogueira', 'caio tarso', 'danielle nogueira', 'rhuan oliveira', 'todos'];

  const nomesBanco = { bateria, baixo, guitarra, violao, teclado, vocal1, vocal2, vocal3, ministro, kids1, kids2, kids3, kids4 };

  const getBestMatch = (nome) => {
    if (!nome) return null;
    const match = findBestMatch(nome, nomes);
    console.log(`Nome digitado: ${nome}, Melhor correspondência: ${match.bestMatch.target}`);
    return match.bestMatch.target;
  };

  const nomesCorrigidos = Object.fromEntries(
    Object.entries(nomesBanco).map(([key, value]) => [key, value ? getBestMatch(value.trim().toLowerCase()) : null])
  );

  console.log('Nomes Corrigidos:', nomesCorrigidos);

  const cardRef = useRef(null);

  useEffect(() => {
    const cardElements = document.querySelectorAll('.card');
    let maxWidth = 0;
    cardElements.forEach(card => {
      if (card.offsetWidth > maxWidth) {
        maxWidth = card.offsetWidth;
      }
    });

    cardElements.forEach(card => {
      card.style.width = `${maxWidth}px`;
    });
  }, []);

  return (
    <div ref={cardRef} className='card bg-amber-100 rounded-lg p-4 text-center flex flex-col justify-between'>
      <div className='flex flex-col'>
        <div className='self-end hover:cursor-pointer'>
          <CiMenuKebab />
        </div>
        <div className='flex flex-col gap-4 justify-center'>
          <div className='font-bold'>{data}</div>

          <div>
            {nomesCorrigidos.bateria && <div className='italic flex gap-4 truncate card'>
              <img src={drum} alt="Drum" className="w-5 h-5" /> <span className='truncate capitalize'>{nomesCorrigidos.bateria}</span>
            </div>}
            {nomesCorrigidos.baixo && <div className='italic flex gap-4 truncate card'>
              <img src={bass} alt="Bass" className="w-5 h-5" /> <span className='truncate capitalize'>{nomesCorrigidos.baixo}</span>
            </div>}
            {nomesCorrigidos.guitarra && <div className='italic flex gap-4 truncate card'>
              <img src={guitar} alt="Guitar" className="w-5 h-5" /> <span className='truncate capitalize'>{nomesCorrigidos.guitarra}</span>
            </div>}
            {nomesCorrigidos.violao && <div className='italic flex gap-4 truncate card'>
              <img src={aguitar} alt="Violao" className="w-5 h-5" /> <span className='truncate capitalize'>{nomesCorrigidos.violao}</span>
            </div>}
            {nomesCorrigidos.teclado && <div className='italic flex gap-4 truncate card'>
              <img src={key} alt="Keyboard" className="w-5 h-5" /> <span className='truncate capitalize'>{nomesCorrigidos.teclado}</span>
            </div>}
            {nomesCorrigidos.ministro && <div className='italic flex gap-4 truncate card'>
              <img src={mic} alt="Mic" className="w-5 h-5" /> <span className='truncate capitalize'>{nomesCorrigidos.ministro}</span></div>}
            {nomesCorrigidos.vocal1 && <div className='italic flex gap-4 truncate card'><img src={mic} alt="Mic" className="w-5 h-5" /> <span className='truncate capitalize'>{nomesCorrigidos.vocal1}</span>
            </div>}
            {nomesCorrigidos.vocal2 && <div className='italic flex gap-4 truncate card'>
              <img src={mic} alt="Mic" className="w-5 h-5" /> <span className='truncate capitalize'>{nomesCorrigidos.vocal2}</span></div>}
            {nomesCorrigidos.vocal3 && <div className='italic flex gap-4 truncate card'>
              <img src={mic} alt="Mic" className="w-5 h-5" /> <span className='truncate capitalize'>{nomesCorrigidos.vocal3}</span></div>}
            {nomesCorrigidos.kids1 && <div className='italic flex gap-4 truncate card'><img src={mic} alt="Mic" className="w-5 h-5" /> <span className='truncate capitalize'>{nomesCorrigidos.kids1}</span>
            </div>}
            {nomesCorrigidos.kids2 && <div className='italic flex gap-4 truncate card'>
              <img src={mic} alt="Mic" className="w-5 h-5" /> <span className='truncate capitalize'>{nomesCorrigidos.kids2}</span>
            </div>}
            {nomesCorrigidos.kids3 && <div className='italic flex gap-4 truncate card'>
              <img src={aguitar} alt="Violao" className="w-5 h-5" /> <span className='truncate capitalize'>{nomesCorrigidos.kids3}</span>
            </div>}
            {nomesCorrigidos.kids4 && <div className='italic flex gap-4 truncate card'>
              <img src={drum} alt="Drum" className="w-5 h-5" /> <span className='truncate capitalize'>{nomesCorrigidos.kids4}</span>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
