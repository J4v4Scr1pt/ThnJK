'use client';
import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { Icon } from '@iconify/react';

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

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
