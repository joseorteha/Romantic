import React from 'react';
import { ArrowLeft } from './icons';
import { useNavigate } from 'react-router-dom';
import { fireworks, mocha } from '../assets';

function Closing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center p-4">
      {/* Fuegos artificiales de fondo */}
      <img src={fireworks} alt="Fireworks" className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* Árbol de Navidad */}
      <img src={mocha} alt="Christmas Tree" className="absolute bottom-0 left-1/2 transform -translate-x-1/2" />

      {/* Texto de despedida */}
      <div className="text-center z-10">
        <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-white drop-shadow-lg">
          No es el final, es solo el comienzo
        </h1>
        <p className="text-lg sm:text-xl font-semibold mb-8 text-white drop-shadow-lg">
          Eres el latido más hermoso en el compás de mi vida, la estrella que ilumina mis noches y el suspiro que le da sentido a mis días.  
        </p>
        <p className="text-lg sm:text-xl font-semibold mb-8 text-white drop-shadow-lg">
          En cada mirada tuya encuentro un universo infinito, en cada sonrisa, la magia de un amor que no tiene fronteras.
        </p>
        <p className="text-lg sm:text-xl font-semibold mb-8 text-white drop-shadow-lg">
          Si la vida es un viaje, quiero recorrer cada sendero de tu mano, porque a tu lado, hasta lo ordinario se vuelve extraordinario.  
        </p>
        <p className="text-lg sm:text-xl font-semibold mb-8 text-white drop-shadow-lg">
          Hoy, mañana y siempre, prometo amarte con cada latido, con cada palabra y con cada silencio que solo tú puedes entender.  
        </p>
        <p className="text-lg sm:text-xl font-semibold mb-8 text-white drop-shadow-lg">
          Con cada pedacito de mi alma,  
        </p>
        <p className="text-lg sm:text-xl font-semibold mb-8 text-white drop-shadow-lg">
          José  
        </p>
      </div>

      {/* Botón de navegación */}
      <button
        className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
        onClick={() => navigate('/letter')}
      >
        <ArrowLeft /> Página anterior
      </button>
    </div>
  );
}

export default Closing;
