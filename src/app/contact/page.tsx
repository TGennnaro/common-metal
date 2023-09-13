import { getMetadata } from '@/lib/utils';
import { Metadata } from 'next';
import ContactForm from './ContactForm';
import { Building, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = getMetadata('Contact Us');

export default function Page() {
	return (
		<main>
			<div className='grid grid-cols-1 lg:grid-cols-2 border-t border-zinc-200'>
				<div className='bg-zinc-50 border-b lg:border-r lg:border-b-0 border-zinc-200'>
					<div className='max-w-[640px] lg:ml-auto py-24 px-8'>
						<h1 className='tracking-tight font-bold text-3xl leading'>
							Get in touch
						</h1>
						<p className='leading-8 text-lg mt-6 text-zinc-600'>
							Want to inquire about our services? Send us a message! We will get
							back to you as soon as possible. Be sure to leave a valid email
							and phone number so we can contact you.
						</p>
						<ul className='leading-7 mt-10'>
							<li className='flex gap-x-4'>
								<Building className='mt-1 text-zinc-400' />
								<span className='text-zinc-600'>
									1957 Pioneer Road, Building E-1
									<br />
									Huntingdon Valley, PA 19006-0312
								</span>
							</li>
							<li className='flex gap-x-4 mt-4'>
								<Phone className='text-zinc-400' />
								<span className='text-zinc-600'>+1 (215) 938-0810</span>
							</li>
							<li className='flex gap-x-4 mt-4'>
								<Mail className='text-zinc-400' />
								<span className='text-zinc-600'>cmc_inc_@hotmail.com</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='max-w-[640px] py-24 px-8'>
					<ContactForm />
				</div>
			</div>
		</main>
	);
}
