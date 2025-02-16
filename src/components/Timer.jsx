import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from './icons';

function Timer() {
  // Fecha de aniversario personalizada: 11 de enero de 2023
  const START_DATE = new Date('2023-01-10T00:00:00'); // Ajustamos la hora al inicio del día
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date(); // Fecha actual
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Inicio del día actual

      // Cálculo de días transcurridos
      const timeDifference = startOfDay - START_DATE; // Diferencia en milisegundos
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Conversión a días

      // Cálculo de horas, minutos y segundos restantes
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center bg-cover bg-center relative text-white px-4">
      <div className="text-center z-10">
        {/* Título */}
        <h1 className="text-lg sm:text-2xl font-bold mb-8 drop-shadow-lg">
          Hemos estado juntos por:
        </h1>

        {/* Contador */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-5xl sm:text-7xl font-bold mb-6">
          <div className="flex flex-col items-center">
            <span className="drop-shadow-lg">{timeLeft.days.toString().padStart(2, '0')}</span>
            <span className="text-sm sm:text-2xl mt-1 sm:mt-2">Días</span>
          </div>
          <span className="text-4xl sm:text-6xl">:</span>
          <div className="flex flex-col items-center">
            <span className="drop-shadow-lg">{timeLeft.hours.toString().padStart(2, '0')}</span>
            <span className="text-sm sm:text-2xl mt-1 sm:mt-2">Horas</span>
          </div>
          <span className="text-4xl sm:text-6xl">:</span>
          <div className="flex flex-col items-center">
            <span className="drop-shadow-lg">{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span className="text-sm sm:text-2xl mt-1 sm:mt-2">Minutos</span>
          </div>
          <span className="text-4xl sm:text-6xl">:</span>
          <div className="flex flex-col items-center">
            <span className="drop-shadow-lg">{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <span className="text-sm sm:text-2xl mt-1 sm:mt-2">Segundos</span>
          </div>
        </div>

        {/* Mensaje romántico */}
        <p className="text-lg mb-8 drop-shadow-lg">
          ... ¡y cada segundo contigo es un tesoro! ❤️
        </p>

        {/* Botón */}
        <div className="flex justify-center w-full">
          <button
            className="mt-8 sm:mt-12 px-6 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            Ir a la siguiente página <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;