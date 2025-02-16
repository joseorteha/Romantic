import React from "react";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { piter, harry, morat, taylor, billie, taylors, taylorsw, jose } from "../assets";

function Music() {
  const navigate = useNavigate();

  // Personaliza y agrega tus propias canciones con enlaces a Spotify
  const songs = [
    {
      title: "Sin Miedo",
      artist: "Piter-G",
      albumCover: piter,
      left: "5%",
      top: "5%",
      description: "Esta canción me recuerda a nuestros primeros días juntos, cuando nos conocimos sin miedo.",
      spotifyLink: "https://open.spotify.com/intl-es/track/1zkgSiCKuN5ArUe0tpzvgN?si=77c14680997744e0",
    },
    {
      title: "Diseñame",
      artist: "Joan Sebastian",
      albumCover: harry,
      left: "40%",
      top: "15%",
      description: "\"Diseñame que quiero ser todo lo que te guste\"",
      spotifyLink: "https://open.spotify.com/intl-es/track/7tmq8wPHKYL2sKUpLpkXwP?si=0f391c7c373541a3",
    },
    {
      title: "23",
      artist: "Morat",
      albumCover: morat,
      left: "15%",
      top: "40%",
      description: "La edad no importa cuando estamos juntos, siempre serás mi número 23 especial.",
      spotifyLink: "https://open.spotify.com/intl-es/track/03I0v50PLHMxgP5CjzCwt3?si=258371ee77b446e7",
    },
    {
      title: "Blank Space (Taylor's Version)",
      artist: "Taylor Swift",
      albumCover: taylor,
      left: "30%",
      top: "75%",
      description: "\"!Oh, Dios mio, mira esa cara!\". Esta canción me recuerda a ti cada vez que la escucho.",
      spotifyLink: "https://open.spotify.com/intl-es/track/0108kcWLnn2HlH2kedi1gn?si=8021e49c917948cb",
    },
    {
      title: "everything i wanted",
      artist: "Billie Eilish",
      albumCover: billie,
      left: "5%",
      top: "65%",
      description: "\"Mientras estes aqui, nadie puede hacerte daño.\"",
      spotifyLink: "https://open.spotify.com/intl-es/track/3ZCTVFBt2Brf31RLEnCkWJ?si=84ca4116ef643ea",
    },
    {
      title: "Dress",
      artist: "Taylor Swift",
      albumCover: taylors,
      left: "25%",
      top: "90%",
      description: "\"Solo compre este vestido para que puedas quitarmelo\"",
      spotifyLink: "https://open.spotify.com/intl-es/track/6oVxXO5oQ4pTpO8RSnkzvv?si=14889e9e3f7d4eec",
    },
    {
      title: "Lover",
      artist: "Taylor Swift",
      albumCover: taylorsw,
      left: "35%",
      top: "50%",
      description: "\"Puedo ir a donde vas?\"",
      spotifyLink: "https://open.spotify.com/intl-es/track/1dGr1c8CrMLDpV6mPbImSI?si=d3124012b5dc40c3",
    },
    {
      title: "Beso",
      artist: "José Log",
      albumCover: jose,
      left: "10%",
      top: "25%",
      description: "Un beso tuyo es todo lo que necesito para sentirme completo.",
      spotifyLink: "https://open.spotify.com/intl-es/track/4PpuZIMmeng6qPicveSI22?si=529b568f578e4737",
    },
  ];

  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 mt-4 drop-shadow-lg text-white text-center">
          Canciones que recuerdan a ti❤️
        </h1>
        <div ref={containerRef} className="relative w-full h-[40rem] rounded-lg overflow-hidden mt-8 mb-12">
          {songs.map((song, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: song.left,
                top: song.top,
              }}
              drag
              dragConstraints={containerRef}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center gap-4 w-64 h-[5rem]"> {/* Ajustamos el tamaño de las tarjetas */}
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={song.albumCover}
                    alt="Portada del álbum"
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-white font-medium text-sm truncate">
                    {song.title}
                  </h2>
                  <p className="text-white/70 text-xs">{song.artist}</p>
                  <a href={song.spotifyLink} target="_blank" rel="noopener noreferrer" className="text-white/70 text-xs underline mt-2">
                    Escuchar en Spotify
                  </a>
                  <motion.p
                    className="text-white/70 text-xs mt-2 whitespace-nowrap"
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                  >
                    {song.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Botón de navegación */}
        <div className="flex justify-center w-full mt-4 mb-4">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate("/recap")}
          >
            <ArrowLeft /> Página anterior
          </button>
        </div>
      </div>
    </div>
  );
}

export default Music;