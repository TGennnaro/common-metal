import { VariantProps, cva } from 'cva';
import { Loader2 } from 'lucide-react';
import { forwardRef } from 'react';

const buttonVariants = cva(
	'p-3 rounded-md w-fit flex items-center justify-center transition-all duration-300 ease-out font-medium disabled:opacity-50 disabled:cursor-not-allowed',
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
		VariantProps<typeof buttonVariants> {
	isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, isLoading, className = '', variant, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={buttonVariants({ variant, className })}
				disabled={props.disabled || isLoading}
				{...props}
			>
				{isLoading && <Loader2 className='animate-spin w-4 h-4 mr-2' />}
				{children}
			</button>
		);
	}
);

Button.displayName = 'Button';
export default Button;
