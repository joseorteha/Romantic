import React from 'react';
import { ArrowLeft } from './icons';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../romantic.css'; // Importar el archivo de estilos personalizados

function Message() {
  const navigate = useNavigate();

  // Personaliza tus propios mensajes. También puedes agregar más mensajes.
  const messages = [
    {
      title: '🌟 El instante en que todo cambió',
      description: "El destino susurró nuestros nombres y nos unió en un cruce de miradas. Desde entonces, el universo pareció girar en torno a ti.",
    },
    {
      title: '💫 Cuando el tiempo se detuvo',
      description: "Aquella primera noche juntos fue un sueño despierto. Las estrellas envidiaban tu fulgor, y yo comprendí que mi hogar no era un lugar, sino tu abrazo.",
    },
    {
      title: '🕰️ Contando los latidos del amor',
      description: "Cada día a tu lado es un verso escrito con luz. Cada año juntos, un poema que el tiempo recita con dulzura. Te amo en cada instante, en cada suspiro, en cada eternidad.",
    },
    {
      title: '🎶 La melodía de tu risa',
      description: "Si la felicidad fuera un sonido, sería la risa que brota de tus labios. Es un eco divino, una canción que enciende mi alma y me recuerda que vivir es un arte cuando lo hago contigo.",
    },
    {
      title: '🍃 El sendero de nuestros pasos',
      description: "Nos perdimos entre árboles susurrantes, con el viento acariciando nuestra piel. Pero nunca me he sentido más encontrado que cuando camino a tu lado.",
    },
    {
      title: '🌅 La luz que nos envuelve',
      description: "El sol se derramó en el horizonte y, en ese instante, entendí que el verdadero atardecer estaba en tus ojos: un refugio donde mi corazón descansa.",
    },
    {
      title: '✨ Un instante eterno',
      description: "Hay momentos que desafían al tiempo, instantes que se graban en el alma. Cada segundo contigo es una joya que guardo en el cofre de mis memorias.",
    },
    {
      title: '🌍 Un rincón en nuestra historia',
      description: "No importa el lugar al que vayamos, porque el verdadero viaje es contigo. Cada paso juntos es un nuevo capítulo en este libro infinito que escribimos con amor.",
    },
    {
      title: '☕ El arte de lo sencillo',
      description: "A veces, la perfección está en un café compartido, en una charla sin prisas, en un roce de manos bajo la mesa. Porque contigo, hasta la rutina se viste de magia.",
    },
    {
      title: '💞 Más allá del horizonte',
      description: "No importa cuántos amaneceres veamos, ni cuántas lunas nos cubran con su velo. Prometo encontrarte siempre, en esta vida y en todas las que nos esperan.",
    },
  ];

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          Nuestros Mensajes
        </h1>
        <div className="message-container">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className="message-card"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                console.log(`Mensaje ${index + 1} clickeado`);
              }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="message-title">{message.title}</h2>
                <p className="message-description">{message.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Botón de navegación */}
        <div className="flex justify-center w-full mt-12">
          <button
            className="nav-button px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Página anterior
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;