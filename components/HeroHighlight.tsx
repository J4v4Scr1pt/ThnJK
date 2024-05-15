'use client';
import { cn } from '@/utils/cn';
import { useMotionValue, motion, useMotionTemplate } from 'framer-motion';

export const HeroHighlight = ({
	className,
	containerClassName,
}: {
	className?: string;
	containerClassName?: string;
}) => {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
		if (!currentTarget) return;
		let { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}
	return (
		<div
			className={cn(
				'group relative flex h-32 w-full items-center justify-center bg-white dark:bg-black sm:h-60',
				containerClassName
			)}
			onMouseMove={handleMouseMove}>
			<div className="pointer-events-none absolute inset-0 bg-dot-thick-neutral-300  dark:bg-dot-thick-neutral-800" />
			<motion.div
				className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 bg-dot-thick-indigo-500 group-hover:opacity-100 dark:bg-dot-thick-indigo-500"
				style={{
					WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
					maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
				}}
			/>

			<div className={cn('relative z-20', className)}>
				<motion.h1
					initial={{
						opacity: 0,
						y: 20,
					}}
					animate={{
						opacity: 1,
						y: [20, -5, 0],
					}}
					transition={{
						duration: 0.5,
						ease: [0.4, 0.0, 0.2, 1],
					}}
					className="mx-auto max-w-5xl px-4 text-center text-lg font-bold leading-relaxed text-neutral-700 dark:text-white md:text-4xl lg:text-5xl lg:leading-snug ">
					Välkommen till <br />
					<Highlight className="text-lg text-black dark:text-white sm:text-6xl">
						Trollhättans Judoklubb!
					</Highlight>
				</motion.h1>
			</div>
		</div>
	);
};

export const Highlight = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return (
		<motion.span
			initial={{
				backgroundSize: '0% 100%',
			}}
			animate={{
				backgroundSize: '100% 100%',
			}}
			transition={{
				duration: 2,
				ease: 'linear',
				delay: 0.5,
			}}
			style={{
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'left center',
				display: 'inline',
			}}
			className={cn(
				`relative inline-block rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 px-1 pb-1 dark:from-indigo-500 dark:to-purple-500`,
				className
			)}>
			{children}
		</motion.span>
	);
};
