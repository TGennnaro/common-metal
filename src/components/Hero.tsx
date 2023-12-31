'use client';

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'cva';
import { ReactNode } from 'react';
import Balancer from 'react-wrap-balancer';

const heroPretextVariants = cva('uppercase font-bold text-base leading-7', {
	variants: {
		variant: {
			default: 'text-burgundy-400',
			primary: 'text-burgundy-200',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

const heroTitleVariants = cva('text-5xl font-bold tracking-tight mt-2', {
	variants: {
		variant: {
			default: 'text-zinc-900',
			primary: 'text-zinc-50',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

interface HeroProps
	extends VariantProps<typeof heroPretextVariants>,
		VariantProps<typeof heroTitleVariants> {
	pretext?: string;
	title: ReactNode;
	description?: string;
	className?: string;
}

export default function Hero({
	pretext,
	title,
	description,
	className = '',
	variant,
}: HeroProps) {
	return (
		<h1>
			<div className={cn('text-center max-w-3xl mx-auto', className)}>
				{pretext && (
					<span className={heroPretextVariants({ variant })}>{pretext}</span>
				)}
				<h1 className={heroTitleVariants({ variant })}>
					<Balancer>{title}</Balancer>
				</h1>
				{description && (
					<span className='leading-8 text-lg text-zinc-600 mt-6 block'>
						<Balancer>{description}</Balancer>
					</span>
				)}
			</div>
		</h1>
	);
}
