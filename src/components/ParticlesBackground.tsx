// src/components/ParticlesBackground.tsx
import React from 'react';
import { Particles } from '@tsparticles/react'; // Correct import
import { loadSeaAnemonePreset } from 'tsparticles-preset-sea-anemone';
import { Engine } from 'tsparticles-engine';

const ParticlesBackground: React.FC = () => {
    const particlesInit = async (engine: Engine) => {
        // Load the sea anemone preset
        await loadSeaAnemonePreset(engine);
    };

    const particlesOptions = {
        preset: "sea-anemone", // Set the preset name
        background: {
            color: {
                value: "#0d1a1a", // Background color
            },
        },
    };

    return (
        <Particles 
            init={particlesInit} 
            options={particlesOptions} 
        />
    );
};

export default ParticlesBackground;
