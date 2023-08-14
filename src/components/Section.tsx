import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function Section({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<section className={cn('flex flex-col gap-8 py-16 px-8', className ?? '')}>
			{children}
		</section>
	);
}
