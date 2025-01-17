/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizePackageImports: [
			'@heroui/*',
			'@heroui/react',
			'@iconify/*',
			'@iconify/react',
			'framer-motion',
			'usehooks-ts',
			'zod',
			'sonner',
		],
	},
};

export default nextConfig;
