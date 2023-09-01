import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'cva';
import { forwardRef } from 'react';

const buttonVariants = cva(
	'p-3 rounded-md w-fit flex items-center justify-center transition-all duration-300 ease-out font-medium',
	{
		variants: {
			variant: {
				default: 'bg-burgundy-500 text-white hover:brightness-125',
				outline: 'bg-transparent border hover:bg-zinc-200',
				white: 'bg-white text-burgundy-400 hover:brightness-90',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, className = '', variant, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={buttonVariants({ variant, className })}
				{...props}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = 'Button';
export default Button;
