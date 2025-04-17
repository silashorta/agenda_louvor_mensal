import React, { useState, useEffect } from 'react';
import { findBestMatch } from 'string-similarity';

function Frequencia() {
  const [mes, setMes] = useState(new Date().getMonth() + 1);
  const [ano, setAno] = useState(new Date().getFullYear());
  const [registros, setRegistros] = useState([]);
  const [frequencia, setFrequencia] = useState({});

  useEffect(() => {
    const fetchRegistros = async () => {
      try {
        const response = await fetch(`https://agenda-louvor-api.vercel.app/contaFrequencia?mes=${mes}&ano=${ano}`);
        const data = await response.json();
        setRegistros(data);
      } catch (error) {
        console.error('Erro ao buscar registros:', error);
      }
    };

    fetchRegistros();
  }, [mes, ano]);

  useEffect(() => {
    const getBestMatch = (nome) => {
      if (!nome) return null;
      const nomes = ['silas horta', 'ester horta', 'pr. caio braga', 'pra. dani braga', 'abner domingos', 'ana lúcia', 'caio duarte', 'caio mendes', 'gabriel monteiro', 'geovanna medeiros', 'giulia ventura', 'guilherme nery', 'igor araújo', 'pr. iohan', 'jean amaro', 'juliana oliveira', 'leo santos', 'lucas fundagem', 'lydia brum', 'rafael santana', 'raquel nogueira', 'caio tarso', 'danielle nogueira', 'todos'];
      const match = findBestMatch(nome, nomes);
      return match.bestMatch.target;
    };

    const frequenciaCalculada = {};

    registros.forEach((registro) => {
      if (registro.data && typeof registro.data === 'string') {
        const [dia, mesRegistro, anoRegistro] = registro.data.split('/');
        const dataRegistro = new Date(`${anoRegistro}-${mesRegistro}-${dia}`);
        
        const dataInicio = new Date(ano, mes - 1, 1);
        const dataFim = new Date(ano, mes, 0);
      
        if (dataRegistro >= dataInicio && dataRegistro <= dataFim) {
          const campos = ['bateria', 'baixo', 'guitarra', 'violao', 'teclado', 'vocal1', 'vocal2', 'vocal3', 'ministro', 'kids1', 'kids2', 'kids3', 'kids4'];
      
          campos.forEach((campo) => {
            const integrante = registro[campo];
            if (integrante) {
              const integranteCorrigido = getBestMatch(integrante.trim().toLowerCase());
              if (!frequenciaCalculada[integranteCorrigido]) {
                frequenciaCalculada[integranteCorrigido] = 0;
              }
              frequenciaCalculada[integranteCorrigido]++;
            }
          });
        }
      }      
    });

    setFrequencia(frequenciaCalculada);
  }, [mes, ano, registros]);

  // Ordenar a frequência dos integrantes
  const integrantesOrdenados = Object.entries(frequencia).sort((a, b) => b[1] - a[1]);
  

  return (
    <div className='flex flex-col gap-4 min-h-screen'>
      <div className='flex gap-4'>
        <select value={mes} onChange={(e) => setMes(e.target.value)} className='p-4 rounded-lg'>
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4">Abril</option>
          <option value="5">Maio</option>
          <option value="6">Junho</option>
          <option value="7">Julho</option>
          <option value="8">Agosto</option>
          <option value="9">Setembro</option>
          <option value="10">Outubro</option>
          <option value="11">Novembro</option>
          <option value="12">Dezembro</option>
        </select>

        <input type="number" value={ano} onChange={(e) => setAno(e.target.value)} className='p-4 rounded-lg' />
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='text-3xl uppercase'>Frequência dos Integrantes</h2>
        <ul>
          {integrantesOrdenados.map(([integrante, count]) => (
            <li key={integrante} className='m-4 p-2 rounded-lg bg-white'>
              <div className='capitalize font-semibold'>{integrante}: {count}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Frequencia;
