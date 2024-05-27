/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: [
            '@nextui-org',
            '@nextui-org/react',
            '@tanstack/react-query',
            'framer-motion',
            'usehooks-ts',
            'tailwind-merge',
            'tailwindcss',
            'zod',
            'sonner',
            'dayjs',
        ],
    },
};

export default nextConfig;
