'use client';

import { ChangeEvent, useState } from 'react';
import { useTranslation } from '../i18n/client';
import { switchLocaleAction } from './actions';
import { Select, SelectItem } from '@nextui-org/select';
import { Icon, IconTypes, WtSelectItem } from '@wt/components';

function ChangeLocale() {
	const { i18n, t } = useTranslation('common');
	const [selectedLang, setSelectedLang] = useState<IconTypes>(
		`flag${i18n.resolvedLanguage?.toString().slice(3, 5).toUpperCase()}` as IconTypes
	);
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const lang = e.target.value;
		const flag = `flag${lang.slice(3, 5).toUpperCase()}` as IconTypes;
		switchLocaleAction(lang);
		setSelectedLang(flag);
	};
	return (
		<Select
			className="max-w-xs"
			label=""
			aria-label="select langugage"
			labelPlacement="outside"
			radius="sm"
			disallowEmptySelection
			onChange={(e) => handleChange(e)}
			defaultSelectedKeys={[i18n.resolvedLanguage?.toString() || 'en-US']}
			startContent={<Icon size="md" iconName={selectedLang} />}>
			<SelectItem
				key="sv-SE"
				startContent={<Icon size="sm" iconName="flagSE" />}
				classNames={WtSelectItem}>
				{t('swedish')}
			</SelectItem>
			<SelectItem
				key="en-US"
				startContent={<Icon size="sm" iconName="flagUS" />}
				classNames={WtSelectItem}>
				{t('english')}
			</SelectItem>
		</Select>
	);
}

export default ChangeLocale;
