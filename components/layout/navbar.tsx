'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { X, Menu, ChevronDown } from 'lucide-react';

import { siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className="fixed top-0 w-full z-50 bg-card">
			<nav className="flex items-center justify-between bg-card px-4 py-3">
				<div className="flex-1 flex justify-center bg-card">
					<nav className="flex items-center bg-card gap-6">
      					{siteConfig.mainNav.map((item) =>
        					item.children ? (
          						<div className="relative group" key={item.title}>
            						<button className="px-4 py-2 font-semibold text-lg hover:bg-gray-100 rounded">
             							{item.title}
            						</button>
            						<div className="absolute left-1/2 -translate-x-1/2 hidden group-hover:block bg-white shadow-lg rounded z-10 min-w-[360px]">
            							{item.children.map((child) => (
                							<Link
                								key={child.title}
                  								href={child.href}
                  								className="block px-4 py-2 text-center hover:bg-gray-200"
                							>
                  								{child.title}
                							</Link>
            							))}
            						</div>
          						</div>
        					) : (
          						<Link
            						key={item.title}
            						href={item.href}
            						className="px-4 py-2 font-semibold text-lg hover:bg-gray-100 rounded"
          						>
            						{item.title}
          						</Link>
        					)
      					)}
    				</nav>
				</div>
			</nav>
		</header>
	);
}