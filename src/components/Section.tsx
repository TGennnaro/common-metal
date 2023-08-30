import { cn } from '@/lib/utils';
import { ReactNode, forwardRef } from 'react';
import { cva, type VariantProps } from 'cva';

const sectionVariants = cva(
	'flex flex-col gap-8 py-20 px-8 max-w-screen-xl mx-auto',
	{
		variants: {
			variant: {
				default: 'bg-white text-zinc-900',
				primary:
					'bg-gradient bg-gradient-to-t from-burgandy-700 to-burgandy-500 text-zinc-50 rounded-2xl',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

interface SectionProps
	extends React.HTMLAttributes<HTMLElement>,
		VariantProps<typeof sectionVariants> {
	sectionClass?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
	({ children, className = '', sectionClass = '', variant, ...props }, ref) => {
		return (
			<section ref={ref} id={props.id} className={sectionClass} {...props}>
				<div className={sectionVariants({ variant, className })}>
					{children}
				</div>
			</section>
		);
	}
);

Section.displayName = 'Section';

export default Section;
