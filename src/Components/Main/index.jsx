import React, { useState, useEffect } from 'react';
import Card from './Card';
import Selects from './Selects';

function Main() {
    const [agenda, setAgenda] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Mês atual
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Ano atual

    useEffect(() => {
        // Função para buscar dados da API
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3000/integrantes'); // URL da sua API
                const data = await response.json();
                setAgenda(data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    const handleMonthChange = (month) => {
        setSelectedMonth(month);
    };

    const handleYearChange = (year) => {
        setSelectedYear(year);
    };

    // Função para converter string DD/MM/AAAA para objeto Date
    const parseDate = (dateString) => {
        const [day, month, year] = dateString.split('/').map(Number);
        return new Date(year, month - 1, day); // Mês é zero-based
    };

    // Filtrar agenda com base no mês e ano selecionados
    const filteredAgenda = agenda.filter(item => {
        const itemDate = parseDate(item.data);
        return itemDate.getMonth() + 1 === selectedMonth && itemDate.getFullYear() === selectedYear;
    });

    const domingos = filteredAgenda.filter(item => item.culto === "DOMINGO");
    const mdwk = filteredAgenda.filter(item => item.culto === "MDWK");

    return (
        <main className='flex flex-col gap-6 min-h-screen'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl uppercase'>Escala Louvor</h1>
                <Selects onMonthChange={handleMonthChange} onYearChange={handleYearChange} />
            </div>

            <div className='flex flex-col items-center gap-8'>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-xl'>DOMINGOS</h2>
                    <div className='flex flex-wrap flex-1 gap-4'>
                        {domingos.map((item, index) => (
                            <Card
                                key={index}
                                data={item.data}
                                bateria={item.bateria}
                                baixo={item.baixo}
                                guitarra={item.guitarra}
                                violao={item.violao}
                                teclado={item.teclado}
                                vocal1={item.vocal1}
                                vocal2={item.vocal2}
                                ministro={item.ministro}
                            />
                        ))}
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-xl'>KIDS</h2>
                    <div className='flex flex-wrap gap-4'>
                        {domingos.map((item, index) => (
                            <Card
                                key={index}
                                data={item.data}
                                kids1={item.kids1}
                                kids2={item.kids2}
                                kids3={item.kids3}
                                kids4={item.kids4}
                            />
                        ))}
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-xl'>MDWK</h2>
                    <div className='flex flex-wrap gap-4'>
                        {mdwk.map((item, index) => (
                            <Card
                                key={index}
                                data={item.data}
                                bateria={item.bateria}
                                baixo={item.baixo}
                                guitarra={item.guitarra}
                                violao={item.violao}
                                teclado={item.teclado}
                                vocal1={item.vocal1}
                                vocal2={item.vocal2}
                                ministro={item.ministro}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
