'use client';
import { Skeleton, Switch } from '@heroui/react';
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
			classNames={{ wrapper: 'm-0' }}
			color="primary"
			isSelected={theme === 'light'}
			onValueChange={(prev) => {
				setTheme(prev ? 'light' : 'dark');
			}}
			startContent={
				<Icon
					className="text-default-800"
					color="white"
					style={{ height: '18px', width: '18px' }}
					icon="game-icons:black-belt"
				/>
			}
			endContent={
				<Icon
					className="text-default-800"
					color="black"
					style={{ height: '18px', width: '18px' }}
					icon="game-icons:black-belt"
				/>
			}
		/>
	);
}
