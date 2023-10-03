import { Phone } from 'lucide-react';
import Button from './Button';

export default function ContactButton() {
	return (
		<a href='/contact'>
			<Button>
				<Phone className='w-6 h-6 mr-2' />
				Contact Us
			</Button>
		</a>
	);
}
