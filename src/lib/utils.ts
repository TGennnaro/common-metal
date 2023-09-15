import config from '@/config/config';
import { twMerge } from 'tailwind-merge';

export function cn(...args: (string | undefined)[]) {
	return twMerge(...args);
}

export function getMetadata(title: string) {
	return {
		title:
			title.length === 0
				? config.seo.title.default
				: config.seo.title.template.replace('%s', title),
		description: config.seo.description,
	};
}
