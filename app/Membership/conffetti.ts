import confetti from 'canvas-confetti';

interface ConfettiDefaults {
	startVelocity: number;
	spread: number;
	ticks: number;
	zIndex: number;
}

interface ConfettiOrigin {
	x: number;
	y: number;
}

export default function triggerConfettiCelebration(): void {
	const duration = 5 * 1000;
	const animationEnd = Date.now() + duration;
	const defaults: ConfettiDefaults = {
		startVelocity: 30,
		spread: 360,
		ticks: 60,
		zIndex: 9999,
	};

	function randomInRange(min: number, max: number): number {
		return Math.random() * (max - min) + min;
	}

	const interval = setInterval(function () {
		const timeLeft = animationEnd - Date.now();

		if (timeLeft <= 0) {
			clearInterval(interval);
			return;
		}

		const particleCount = 50 * (timeLeft / duration);

		// Since particles fall down, start a bit higher than random
		confetti({
			...defaults,
			particleCount,
			origin: {
				x: randomInRange(0.1, 0.3),
				y: Math.random() - 0.2,
			} as ConfettiOrigin,
		});

		confetti({
			...defaults,
			particleCount,
			origin: {
				x: randomInRange(0.7, 0.9),
				y: Math.random() - 0.2,
			} as ConfettiOrigin,
		});
	}, 250);
}
