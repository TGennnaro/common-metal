'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import Button from './Button';
import { ChevronDown, Menu, X } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

interface NavItem {
	label: string;
	href: string;
	subItems?: NavItem[];
}

const navItems = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{
		label: 'Services',
		href: '/services',
		subItems: [
			{ label: 'Fabrication & Processing', href: '/services/fabrication' },
			{ label: 'Raw Material Supply', href: '/services/supply' },
			{ label: 'Welding Capabilities', href: '/services/welding' },
		],
	},
	{ label: 'Projects', href: '/projects' },
	{ label: 'Contact', href: '/contact' },
];

function NavItem({ item }: { item: NavItem }) {
	if (item.subItems) {
		return (
			<HoverCard openDelay={0} closeDelay={0}>
				<HoverCardTrigger asChild>
					<li className='flex items-center cursor-pointer hover:text-red-600 py-2 relative transition-colors duration-300 before:transition-opacity before:duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-red-600 before:opacity-0 hover:before:opacity-100 before:pointer-events-none'>
						{item.label}
						<ChevronDown className='w-4 h-4 ml-1' />
					</li>
				</HoverCardTrigger>
				<HoverCardContent className='-mt-1 p-2 w-fit' align='start'>
					<ul className='flex flex-col gap-2'>
						{item.subItems?.map((subItem, i) => (
							<li
								key={i}
								className='text-sm hover:bg-zinc-200 p-2 rounded-md cursor-pointer transition-colors'
							>
								<a href={subItem.href}>{subItem.label}</a>
							</li>
						))}
					</ul>
				</HoverCardContent>
			</HoverCard>
		);
	} else {
		return (
			<li>
				<a
					href={item.href}
					className='flex hover:text-red-600 py-2 relative transition-colors duration-300 before:transition-opacity before:duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-red-600 before:opacity-0 hover:before:opacity-100 before:pointer-events-none'
				>
					{item.label}
				</a>
			</li>
		);
	}
}

export default function NavBar() {
	const [scrolled, setScrolled] = useState(false);
	const [navOpen, setNavOpen] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) setScrolled(true);
			else setScrolled(false);
		});
	}, []);
	return (
		<div
			className={`sticky top-0 p-4 flex justify-between items-center transition z-[999] bg-white ${
				scrolled ? 'border-b border-zinc-200 shadow-md' : ''
			}`}
		>
			<Logo />
			<ul
				className={`gap-4 font-medium absolute top-full -z-[999] left-0 p-4 bg-white w-full flex flex-col md:gap-8 md:p-0 md:static md:flex-row md:w-auto transition-all md:opacity-100 md:translate-y-0 ${
					navOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
				}`}
			>
				{navItems.map((item, index) => (
					<NavItem key={index} item={item} />
				))}
			</ul>
			<Button
				className='bg-white border border-zinc-200 block md:hidden'
				onClick={() => setNavOpen(!navOpen)}
			>
				<Menu />
			</Button>
		</div>
	);
}
