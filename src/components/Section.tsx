import { cn } from '@/lib/utils';
import { ReactNode, forwardRef } from 'react';

interface SectionProps {
	children: ReactNode;
	sectionClass?: string;
	className?: string;
	id?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
	({ children, className = '', ...props }, ref) => {
		return (
			<section
				ref={ref}
				id={props.id}
				className={cn(
					'flex flex-col gap-8 py-16 px-8 max-w-screen-xl mx-auto',
					className
				)}
				{...props}
			>
				{children}
			</section>
		);
	}
);

Section.displayName = 'Section';

export default Section;
