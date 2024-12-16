/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizePackageImports: [
			'@nextui-org',
			'@nextui-org/react',
			'framer-motion',
			'usehooks-ts',
			'zod',
			'sonner',
		],
	},
};

export default nextConfig;
