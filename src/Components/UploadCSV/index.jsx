import React, { useState } from 'react';
import Papa from 'papaparse';

function UploadCSV() {
  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState(null);

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      Papa.parse(selectedFile, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          console.log('Parsed CSV data:', results.data);
          setParsedData(results.data);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
        },
      });
    }
  };

  const handleImportClick = async () => {
    if (!parsedData) {
      console.error("Nenhum arquivo selecionado ou CSV não foi parseado.");
      return;
    }

    try {
      console.log('Enviando dados:', parsedData); // Adicione este log para verificar os dados enviados

      const response = await fetch('http://agenda-louvor-api.vercel.app/importar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar os dados: ' + response.statusText);
      }

      const result = await response.json();
      console.log('Resultado:', result);
    } catch (error) {
      console.error('Erro ao enviar JSON:', error.message);
    }
  };

  return (
    <div className='upload-csv h-screen'>
      <h1>Upload de Arquivo CSV</h1>
      <div className='flex flex-col gap-32'>
        <div className='bg-white'>
          <input type='file' accept='.csv' onChange={handleFileUpload} className='' />
        </div>
        <div className='flex flex-col gap-4'>
          <p>Clique no botão abaixo para importar os dados:</p>
          <button onClick={handleImportClick} className='bg-white w-32 hover:text-orange-700 p-2 rounded-md border hover:border-orange-400'>Importar</button>
        </div>
      </div>
    </div>
  );
}

export default UploadCSV;
