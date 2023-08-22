import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function Section({
	children,
	className,
	sectionClass,
}: {
	children: ReactNode;
	className?: string;
	sectionClass?: string;
}) {
	return (
		<section className={sectionClass}>
			<div
				className={cn(
					'flex flex-col gap-8 py-16 px-8 max-w-screen-xl mx-auto',
					className ?? ''
				)}
			>
				{children}
			</div>
		</section>
	);
}
