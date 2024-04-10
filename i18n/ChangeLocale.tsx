'use client';

import { ChangeEvent, useState } from 'react';
import { useTranslation } from '../i18n/client';
import { switchLocaleAction } from './actions';
import { Select, SelectItem } from '@nextui-org/select';

function ChangeLocale() {
	const { i18n, t } = useTranslation('common');
	const [selectedLang, setSelectedLang] = useState(
		`flag${i18n.resolvedLanguage?.toString().slice(3, 5).toUpperCase()}`
	);
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const lang = e.target.value;
		const flag = `flag${lang.slice(3, 5).toUpperCase()}`;
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
			defaultSelectedKeys={[i18n.resolvedLanguage?.toString() || 'en-US']}>
			<SelectItem key="sv-SE">{t('swedish')}</SelectItem>
			<SelectItem key="en-US">{t('english')}</SelectItem>
		</Select>
	);
}

export default ChangeLocale;
