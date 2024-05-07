'use client';
import { Skeleton, Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return <Skeleton className="h-8 w-14 rounded-full" />;

	return (
		<Switch
			defaultSelected
			size="lg"
			color="primary"
			isSelected={theme === 'light'}
			onValueChange={(prev) => {
				setTheme(prev ? 'light' : 'dark');
			}}
			startContent={<Icon className="text-default-400" icon="solar:sun-2-linear" width={24} />}
			endContent={<Icon className="text-default-400" icon="solar:moon-linear" width={24} />}
		/>
	);
}
