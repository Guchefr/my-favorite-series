import { Particles } from "@tsparticles/react";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground: React.FC = () => {
	const particlesInit = async (engine: Engine) => {
		await loadSeaAnemonePreset(engine);
	};

	const particlesOptions = {
		preset: "sea-anemone",
		background: {
			color: {
				value: "#0d1a1a",
			},
		},
	};

	return <Particles init={particlesInit} options={particlesOptions} />;
};

export default ParticlesBackground;
