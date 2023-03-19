import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: '#000000',
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: ['#00ff00', '#009900'],
          },
          shape: {
            type: 'square',
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 14,
            random: {
              enable: true,
              minimumValue: 8,
            },
            anim: {
              enable: true,
              speed: 3,
              size_min: 10,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'bottom',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
            },
          },
        },
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
        },
        retina_detect: true,
      }}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;
