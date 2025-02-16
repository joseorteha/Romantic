import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import { ImageCard } from './ImageCard';
import { ArrowLeft } from './icons';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11 } from '../assets';

function Picture() {
  const navigate = useNavigate();

  // Personaliza tus propias imágenes, títulos y subtextos. También puedes agregar más imágenes.
  const pictures = [
    {
      Image: img1,
      title: 'Nuestra sonrisa',
      description: "sonrisa ilumina mi día y me llena de alegría. Cada sonrisa tuya es un regalo.",
    },
    {
      Image: img2,
      title: 'Un momento especial',
      description: "Este momento captura la esencia de nuestra relación. Juntos, somos más fuertes y felices.",
    },
    {
      Image: img3,
      title: 'Nuestra mirada',
      description: "Tu mirada es la luz que guía mi camino. Cada mirada tuya es un regalo para mi corazón.",
    },
    {
      Image: img4,
      title: 'Un momento de risas',
      description: "Tu risa es la melodía perfecta para mi vida. Me hace sentir vivo y lleno de alegría.",
    },
    {
      Image: img5,
      title: 'Un paseo juntos',
      description: "Caminar juntos bajo el cielo abierto fue una experiencia mágica. Cada paso compartido es un recuerdo preciado.",
    },
    {
      Image: img6,
      title: 'Un atardecer juntos',
      description: "El atardecer nos unió en un momento de tranquilidad y paz. Cada atardecer con ti es una obra de arte.",
    },
    {
      Image: img7,
      title: 'Dándonos fuerza',
      description: "Tu apoyo y amor me dan la fuerza para seguir adelante. Juntos, podemos superar cualquier desafío.",
    },
    {
      Image: img8,
      title: 'Un día inolvidable',
      description: "Cada segundo compartido es un regalo. Este día será recordado por siempre.",
    },
    {
      Image: img9,
      title: 'Explorando juntos',
      description: "Explorar nuevos lugares con ti es una aventura que nunca termina. Cada descubrimiento es más especial.",
    },
    {
      Image: img10,
      title: 'Un día simple pero perfecto',
      description: "Los días simples son los que más valoramos. Cada momento contigo es perfecto.",
    },
    {
      Image: img11,
      title: 'Siempre juntos',
      description: "Nuestro amor es eterno y verdadero. Siempre estaremos juntos, pase lo que pase.",
    },
  ];

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          Nuestras Fotos
        </h1>
        <Carousel>
          {pictures.map((picture, index) => (
            <ImageCard
              key={index}
              imageUrl={picture.Image}
              altText="Placeholder image"
              title={picture.title}
              description={picture.description}
            />
          ))}
        </Carousel>
        {/* Botón de navegación */}
        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Página anterior
          </button>
        </div>
      </div>
    </div>
  );
}

export default Picture;