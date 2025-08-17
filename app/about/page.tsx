'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/lib/constants';

export default function AboutPage() {
	const project = projects[0];

	return (
		<div className="py-8 md:py-12">
			<div className="container max-w-4xl mx-auto">
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-4">
						<h1 className="text-4xl font-bold text-center">A220 Nose Landing Gear Repack Fixture</h1>
						<div className="flex flex-wrap gap-3 mb-4 justify-center">
  							{project.tags.map((tag, tagIndex) => (
    							<Badge className="px-3 py-1 text-lg rounded-x2" key={tagIndex} variant="secondary">
      								{tag}
    							</Badge>
  							))}
						</div>
						<h2 className="text-2xl font-bold text-center">Situation</h2>
						<p className="text-lg text-muted-foreground">
							Aircraft maintenance technicians (AMTs) at MSP built a fixture 
							for installing and removing the sliding tube of the A220 nose landing 
							gear, and documentation was needed for other maintenance stations to 
							produce the fixture.
						</p>

						<h2 className="text-2xl font-bold text-center">Workflow</h2>
						<p className="text-lg text-muted-foreground">
							<ul className="list-disc pl-6 text-lg text-muted-foreground">
								<li>Using the Weldment tools in SolidWorks, I translated the existing 
									Repack Fixture into a CAD model.</li>
								<li>I incorporated design changes documented below to improve 
									operation and manufacturing.</li>
								<li>With the final CAD model, I created a manufacturing drawing 
									package and bill of materials to allow A220 Nose Landing Gear 
									Repack Fixtures to be produced at other maintenance stations.</li>
							</ul>
						</p>

						<div className="flex justify-center gap-6 my-8">
							<Image
								alt="Professional photo"
								src="/images/A220 Nose Landing Gear Repack Fixture/Manual Diagram.png"
								width={600}
								height={400}
								className="object-cover rounded-lg"
							/>
							<Image
								src="/images/A220 Nose Landing Gear Repack Fixture/Explanation Diagram.png"
								alt="Professional photo"
								width={600}
    							height={400}
    							className="object-cover rounded-lg"
  							/>
						</div>

					</motion.div>
			</div>
		</div>
	);
}