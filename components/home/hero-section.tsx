'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import { Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/motion';

export function HeroSection() {
	const [vantaEffect, setVantaEffect] = useState<any>(null);
	const vantaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!vantaEffect && vantaRef.current) {
			setVantaEffect(
				NET({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.00,
					minWidth: 200.00,
					scale: 0.8,
					scaleMobile: 0.8,
					color: 0x003049,
					backgroundColor: 0x669bbc,
					points: 10.00,
					maxDistance: 15.00,
					spacing: 20.00,
					showDots: false,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<section className="relative overflow-hidden">
			{/* Vanta.js Background */}
			<div ref={vantaRef} className="absolute inset-0 z-0 opacity-50" />

			{/* Content */}
			<div className="container relative z-10 px-4 py-8 md:py-8 flex flex-col items-center justify-center min-h-[40vh]">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-3xl mx-auto text-center"
				>
					<motion.h1
						variants={fadeIn('up', 0.3)}
						className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
					>
						<span className="text-popover">Luke Towery's</span> Engineering Portfolio
					</motion.h1>

					<motion.p
						variants={fadeIn('up', 0.5)}
						className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
					>
						A showcase of my design, prototyping and simulation projects that have helped
						me grow as a mechanical engineer.
					</motion.p>

					<motion.div
						variants={fadeIn('up', 0.7)}
						className="mt-4 mb-24 flex flex-wrap gap-4 justify-center"
					>
						<Button size="lg" variant="outline" asChild>
							<Link href="/Luke_Towery_Resume_08-25.pdf" download>
								Download CV <FileDown className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button size="lg" variant="outline" asChild>
    						<Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
      							LinkedIn <Linkedin className="ml-2 h-4 w-4" />
    						</Link>
  						</Button>
						<Button size="lg" variant="outline" asChild>
    						<Link href={`mailto:${siteConfig.links.email}`}>
      							Email <Mail className="ml-2 h-4 w-4" />
    						</Link>
  						</Button>
					</motion.div>
				</motion.div>
			</div>

			{/* Bottom gradient */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
		</section>
	);
}