'use client';

import { ChevronDown, Menu, Phone, Printer } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from './Button';
import Logo from './Logo';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { useWindowSize } from 'rooks';

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
	{
		label: 'Projects',
		href: '/projects',
		subItems: [
			{ label: 'Featured Projects', href: '/projects/featured' },
			{ label: 'Gallery', href: '/projects/gallery' },
		],
	},
	{ label: 'Contact', href: '/contact' },
];

function NavItem({ item, selected }: { item: NavItem; selected: boolean }) {
	const linkClassName =
		'w-fit flex items-center font-semibold cursor-pointer py-2 relative transition-colors duration-300 before:transition-opacity before:duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-burgundy-400 hover:before:opacity-100 before:pointer-events-none before:opacity-0';
	const selectableClassName =
		linkClassName +
		` ${
			selected
				? 'before:opacity-100 text-burgundy-400'
				: 'hover:text-burgundy-400'
		}`;
	const { innerWidth } = useWindowSize();
	if (item.subItems) {
		if (innerWidth !== null && innerWidth <= 1024) {
			return (
				<li>
					<span className={selectableClassName}>{item.label}</span>
					<ul className='ml-8'>
						{item.subItems.map((subItem, i) => (
							<li key={i}>
								<a href={subItem.href} className={linkClassName}>
									{subItem.label}
								</a>
							</li>
						))}
					</ul>
				</li>
			);
		}
		return (
			<HoverCard openDelay={0} closeDelay={0}>
				<HoverCardTrigger asChild>
					<li className={selectableClassName}>
						{item.label}
						<ChevronDown className='w-4 h-4 ml-1' />
					</li>
				</HoverCardTrigger>
				<HoverCardContent className='-mt-1 p-2 w-fit' align='start'>
					<ul className='flex flex-col gap-2'>
						{item.subItems?.map((subItem, i) => (
							<li
								key={i}
								className='text-sm hover:bg-zinc-200 rounded-md cursor-pointer transition-colors'
							>
								<a href={subItem.href} className='p-2 block'>
									{subItem.label}
								</a>
							</li>
						))}
					</ul>
				</HoverCardContent>
			</HoverCard>
		);
	} else {
		return (
			<li>
				<a href={item.href} className={selectableClassName}>
					{item.label}
				</a>
			</li>
		);
	}
}

export default function NavBar() {
	const path = usePathname();
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
			className={`sticky top-0 transition z-[999] bg-white ${
				scrolled ? 'border-b border-zinc-200 shadow-md' : ''
			}`}
		>
			<div className='max-w-screen-xl mx-auto p-4 flex justify-between items-center'>
				<Logo hasText={true} />
				<ul
					className={`gap-4 font-medium absolute top-full left-0 -z-[999] lg:z-0 p-4 bg-white border-t border-zinc-200 lg:border-none w-full flex flex-col lg:gap-8 lg:p-0 lg:static lg:flex-row lg:w-auto shadow-lg lg:shadow-none transition-all lg:opacity-100 lg:translate-y-0 duration-300 ${
						navOpen
							? 'translate-y-0 opacity-100'
							: '-translate-y-full opacity-0'
					}`}
				>
					{navItems.map((item, index) => (
						<NavItem
							key={index}
							item={item}
							selected={
								(item.href === '/' && path === '/') ||
								(item.href !== '/' && path.startsWith(item.href))
							}
						/>
					))}
					<li className='lg:hidden flex flex-col text-md font-medium tracking-wide gap-4'>
						<a className='items-center flex' href='tel:12159380810'>
							<Phone className='w-5 h-5 mr-3' />
							+1 215 394-8234
						</a>
						<a className='items-center flex' href='fax:12153948313'>
							<Printer className='w-5 h-5 mr-3' />
							+1 215 394-8313
						</a>
					</li>
				</ul>
				<div className='flex flex-col text-md font-medium tracking-wide gap-1'>
					<a className='items-center hidden lg:flex' href='tel:12159380810'>
						<Phone className='w-5 h-5 mr-3' />
						+1 215 394-8234
					</a>
					<a className='items-center hidden lg:flex' href='fax:12153948313'>
						<Printer className='w-5 h-5 mr-3' />
						+1 215 394-8313
					</a>
				</div>
				<Button
					className='bg-white border border-zinc-200 text-zinc-800 block lg:hidden'
					onClick={() => setNavOpen(!navOpen)}
				>
					<Menu />
				</Button>
			</div>
		</div>
	);
}
