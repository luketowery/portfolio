'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/lib/constants';

export default function NLGRepackPage() {
	const project = projects[0];

	return (
		<div className="py-4 md:py-4">
			<div className="container max-w-4xl mx-auto">
					<motion.div variants={fadeIn('right', 0.3)}>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/A220 Nose Landing Gear Repack Fixture Cover Image.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-6">
							All images and information used with permission of Delta Air Lines.
						</p>							

						<h1 className="text-4xl font-bold text-center mb-4">A220 Nose Landing Gear Repack Fixture</h1>
						<div className="flex flex-wrap gap-3 mb-8 justify-center">
  							{project.tags.map((tag, tagIndex) => (
    							<Badge className="px-3 py-1 text-md rounded-x2" key={tagIndex} variant="secondary">
      								{tag}
    							</Badge>
  							))}
						</div>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Situation
  							</h2>
						</div>

						<p className="text-lg text-muted-foreground">
							Aircraft maintenance technicians (AMTs) at MSP built a fixture 
							for installing and removing the sliding tube of the A220 nose landing 
							gear, and documentation was needed for other maintenance stations to 
							produce the fixture.
						</p>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/A220 Nose Landing Gear Repack Fixture/Manual Diagram.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
							<img
								alt="Professional photo"
								src="/images/A220 Nose Landing Gear Repack Fixture/Existing Fixture.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							Diagram of the sliding tube within the nose landing gear (left) and 
							the existing A220 nose landing gear repack fixture (right).
						</p>						

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Workflow
  							</h2>
						</div>

						<ul className="text-lg text-muted-foreground list-disc pl-6 text-lg space-y-2">
							<li>Using the Weldment tools in SolidWorks, I translated the existing 
								fixture (shown above) into a CAD model.</li>
							<li>I modified aspects of the design to improve its operation and 
								fabrication, including adding a latching toggle clamp for the 
								retaining ring that holds the sliding tube and redesigning
								the hinge to be made with simpler machining operations.</li>
							<li>With the final CAD model, I created a manufacturing drawing 
								package and a bill of materials to allow A220 Nose Landing Gear 
								Repack Fixtures to be produced at other maintenance stations.</li>
						</ul>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/A220 Nose Landing Gear Repack Fixture/Explanation Diagram.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							CAD assembly of the improved A220 nose landing gear repack fixture, showing 
							how it is used to carefully install and remove the sliding tube.
						</p>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/A220 Nose Landing Gear Repack Fixture/Changes Diagram.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							Hardware and design improvements made to improve the tool's operation,
							fabrication, and lifetime.
						</p>						
					
						

					</motion.div>
			</div>
		</div>
	);
}