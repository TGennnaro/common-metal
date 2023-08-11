import { cn } from '@/lib/utils';
import { ReactNode, forwardRef } from 'react';

const Button = forwardRef<
	HTMLButtonElement,
	React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className = '', ...props }, ref) => {
	return (
		<button
			ref={ref}
			className={cn('p-2 rounded-md bg-red-600 text-white', className)}
			{...props}
		>
			{children}
		</button>
	);
});

Button.displayName = 'Button';
export default Button;
