import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Menu() {
  const [menuSuspenso, setMenuSuspenso] = useState(false);

  const buttonToogleMenu = () => {
    setMenuSuspenso(!menuSuspenso);
  };

  const closeMenu = () => {
    setMenuSuspenso(false);
  };

  return (
    <nav style={{ position: 'relative' }}>
      <div onClick={buttonToogleMenu} className='cursor-pointer'>
        <IoMdMenu />
      </div>

      {menuSuspenso && (
        <div
          className='absolute bg-white rounded-md'
          style={{
            width: 'max-content',
            position: 'absolute',
            top: '2rem', // Ajuste a posição vertical conforme necessário
            left: '0', // Posicionado diretamente abaixo do ícone
            zIndex: '999', // Garante que o menu fique acima de outros elementos
          }}
        >
          <div className='flex flex-col gap-4'>
            <div>
              <Link to='/uploadCSV' onClick={closeMenu} className='hover:bg-amber-200 p-4'>
                Upload CSV
              </Link>
            </div>
            <div>
              <Link to='/contaFrequencia' onClick={closeMenu} className='hover:bg-amber-200 p-4'>
                Frequência
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Menu;
