import React, { useEffect, useRef, useState } from 'react';
import { gsap, CSSRulePlugin } from 'gsap/all';
import '../index.css';
import { ArrowLeft, ArrowRight } from './icons';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(CSSRulePlugin);
gsap.config({ nullTargetWarn: false });

function Letter() {
  const envelopeRef = useRef(null);
  const letterRef = useRef(null);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!envelopeRef.current || !letterRef.current) return;

    const flap = CSSRulePlugin.getRule('.envelope::before');
    const tl = gsap.timeline({ paused: true });

    tl.to(flap, {
      duration: 0.5,
      rotationX: 180,
      transformOrigin: 'top center',
      ease: 'power2.inOut'
    })
    .set(letterRef.current, { zIndex: 50 }) // Asegurar que la carta aparezca por encima del sobre
    .to(letterRef.current, {
      duration: 0.7,
      translateY: -160,
      scale: 1.1,
      ease: 'power2.inOut'
    }, '-=0.3');

    if (isOpen) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className='w-[90%] max-w-[400px]'>
        <div className="flex-grow flex items-center justify-center h-[400px] relative">
          <div className="letter-container">
            <div className="content">
              <div ref={envelopeRef} className={`envelope ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(true)}></div>
              <div ref={letterRef} className={`letter ${isOpen ? 'open' : ''}`}>
                <div className="body">
                  <span className="close" onClick={() => setIsOpen(false)}>x</span>
                  <div className="message">
                    <p>Querida Ingrid:❤️</p>
                    <p>Desde el día en que nos conocimos, mi vida ha sido más brillante gracias a ti. Cada momento contigo es una bendición.</p>
                    <p>Nuestro amor es como una flor que crece cada día, llenando nuestro camino de hermosos recuerdos y momentos inolvidables.</p>
                    <p>Te amo profundamente y estoy agradecido por cada segundo que pasamos juntos. Eres mi mejor amiga, mi compañera y mi amor eterno.</p>
                    <p>Con todo mi corazón,</p>
                    <p>De: José</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full p-6 mb-10">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Página anterior
          </button>
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
            onClick={() => navigate('/closing')}
          >
            Siguiente página <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Letter;
