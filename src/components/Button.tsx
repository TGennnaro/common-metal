import { cn } from '@/lib/utils';
import { ReactNode, forwardRef } from 'react';

const Button = forwardRef<
	HTMLButtonElement,
	React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className = '', ...props }, ref) => {
	return (
		<button
			ref={ref}
			className={cn(
				'p-3 rounded-md bg-red-600 text-white w-fit flex items-center justify-center hover:brightness-125 transition-all duration-300 ease-out',
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
});

Button.displayName = 'Button';
export default Button;
