'use client';

import Button from '@/components/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import config from '@/config/config';
import { FormEvent, useState } from 'react';

export default function ContactForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [chars, setChars] = useState(0);

	async function submitForm(e: FormEvent) {
		e.preventDefault();
		setIsLoading(true);
		const formData = new FormData(e.target as HTMLFormElement);
		const message = formData.get('message');
		if (message !== null && message.length > config.maxEmailCharacters) {
			setIsSuccess(false);
			setIsError(true);
			setErrorMessage(
				`Error: Your message cannot exceed ${config.maxEmailCharacters} characters.`
			);
			setIsLoading(false);
			return;
		}
		let fetchResult = await fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({
				firstName: formData.get('firstname'),
				lastName: formData.get('lastname'),
				email: formData.get('email'),
				phone: formData.get('phone'),
				message,
			}),
		});
		const response: ContactResponse = await fetchResult.json();
		console.log(response);
		if (response.status === 200) {
			setIsSuccess(true);
			setIsError(false);
			setErrorMessage('');
			document.getElementsByTagName('form')[0].reset();
			setChars(0);
		} else {
			setIsSuccess(false);
			setIsError(true);
			setErrorMessage(`Error: ${response.message}`);
		}
		setIsLoading(false);
	}

	return (
		<form
			onSubmit={submitForm}
			className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6'
		>
			<div>
				<label
					htmlFor='firstname'
					className='leading-6 font-semibold text-sm block'
				>
					First name
				</label>
				<Input name='firstname' id='firstname' className='mt-3' />
			</div>
			<div>
				<label
					htmlFor='lastname'
					className='leading-6 font-semibold text-sm block'
				>
					Last name
				</label>
				<Input name='lastname' id='lastname' className='mt-3' />
			</div>
			<div className='sm:col-span-2'>
				<label
					htmlFor='email'
					className='leading-6 font-semibold text-sm block'
				>
					Email
				</label>
				<Input name='email' id='email' className='mt-3' />
			</div>
			<div className='sm:col-span-2'>
				<label
					htmlFor='phone'
					className='leading-6 font-semibold text-sm block'
				>
					Phone number
				</label>
				<Input name='phone' id='phone' className='mt-3' />
			</div>
			<div className='sm:col-span-2'>
				<label
					htmlFor='message'
					className='leading-6 font-semibold text-sm block'
				>
					Message
				</label>
				<Textarea
					name='message'
					id='message'
					rows={4}
					className='mt-3'
					onChange={(e: FormEvent<HTMLTextAreaElement>) =>
						setChars(e.currentTarget?.value.length)
					}
					maxLength={config.maxEmailCharacters}
				/>
				<span className='mt-2 text-xs text-zinc-600 text-right block'>
					{chars}/{config.maxEmailCharacters} characters
				</span>
			</div>
			<Button
				type='submit'
				className='sm:col-span-2 ml-auto'
				isLoading={isLoading}
			>
				Send message
			</Button>
			{isSuccess && (
				<span className='text-green-500 sm:col-span-2 ml-auto -mt-2'>
					Your message was sent successfully!
				</span>
			)}
			{isError && (
				<span className='text-red-500 sm:col-span-2 ml-auto -mt-2'>
					{errorMessage}
				</span>
			)}
		</form>
	);
}
