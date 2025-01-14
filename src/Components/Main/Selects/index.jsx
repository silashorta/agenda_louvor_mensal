import React, { useState, useEffect } from 'react';

function Selects({ onMonthChange, onYearChange }) {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        onMonthChange(currentMonth);
        onYearChange(currentYear);
    }, [currentMonth, currentYear, onMonthChange, onYearChange]);

    const handleMonthChange = (event) => {
        setCurrentMonth(parseInt(event.target.value));
    };

    const handleYearChange = (event) => {
        setCurrentYear(parseInt(event.target.value));
    };

    return (
        <div className='flex gap-4'>
            <select
                onChange={handleMonthChange}
                value={currentMonth}
                className='p-2 rounded-lg'>
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
            <select 
                onChange={handleYearChange}
                value={currentYear}
                className='p-2 rounded-lg'
            >
                {Array.from({ length: 5 }, (_, i) => (
                    <option key={i} value={2020 + i}>{2020 + i}</option>
                ))}
            </select>
        </div>
    );
}

export default Selects;
