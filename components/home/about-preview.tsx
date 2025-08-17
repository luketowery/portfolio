'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	return (
		<section className="py-8 md:py-8">
			<div className="container px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="relative h-[560px] rounded-lg overflow-hidden"
					>
						<Image
							src="/images/Delta Engine Picture.jpg"
							alt="Engineer portrait"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>

					<motion.div
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="flex flex-col justify-center"
					>
						<h3 className="text-2xl font-bold mb-4">Mechanical Engineer @ Georgia Tech</h3>
						<p className="text-muted-foreground mb-6">
							Passionate about additive manufacturing, assistive technologies, rapid prototyping, and product design.
						</p>
						
						<h3 className="text-2xl font-bold mb-4">3DP Master / Prototyping Instructor @ Invention Studio</h3>
						<p className="text-muted-foreground mb-6">
							Manage the workflow, training, and maintenance of our fleet of 32 Bambu Lab X1E (FDM), 8 Formlabs Form 4 (SLA),
							Formlabs Fuse 1 (SLS) and Markforged Mark 2 3D printers to print over 10,000 student/faculty parts annually.
						</p>

						<h3 className="text-2xl font-bold mb-4">Tool Designer @ Delta Air Lines</h3>
						<p className="text-muted-foreground mb-6">
							Design, reverse engineer, and fabricate tools, fixtures, and covers to support aircraft and turbofan engine maintenance.
						</p>

						<div className="grid grid-cols-2 gap-4 mb-6">
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Certified GD&T Technologist</h4>
									<p className="text-sm text-muted-foreground">ASME 14.5Y-2009 Exam in Progress</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">4.0 GPA</h4>
									<p className="text-sm text-muted-foreground">Graduating in December 2025</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Certified SolidWorks Professional</h4>
									<p className="text-sm text-muted-foreground">In Sheet Metal Part Design</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Mechanical Eng. Honors Award</h4>
									<p className="text-sm text-muted-foreground">Best Academic Record of all Juniors</p>
								</CardContent>
							</Card>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}