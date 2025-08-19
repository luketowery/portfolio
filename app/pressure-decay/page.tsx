'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/lib/constants';

export default function PressureDecayPage() {
	const project = projects[2];

	return (
		<div className="py-4 md:py-4">
			<div className="container max-w-4xl mx-auto">
					<motion.div variants={fadeIn('right', 0.3)}>

						<div className="flex justify-center gap-6 my-6">
							<img
								alt="Professional photo"
								src="/images/Pressure Decay Testing Fixture Cover Image.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<h1 className="text-4xl font-bold text-center mb-4">Pressure Decay Testing Fixture</h1>
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
							As a task in the assembly procedure of the Turbine Intermediate Case 
							(TIC) within PW1000-series turbofan engines, two tubes for the No. 4 
							Bearing are tested for pressure decay. If the test is failed, the TIC 
							must be disassembled to diagnose the source of the pressure decay, 
							which takes 2-3 days of work. The shop has noticed that the tubes 
							themselves are typically the source of the pressure decay, rather 
							than issues with assembly.
						</p>

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Pressure Decay Testing Fixture/Manual Images.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Workflow
  							</h2>
						</div>

						<ul className="text-lg text-muted-foreground list-disc pl-6 text-lg mt-2 space-y-2">
							<li>Using a 3D scanner, I created STLs of the geometries of the two ports on
								 the No. 4 bearing where the Oil Supply Tube and Oil Scavenge Tube connect.</li>
							<li>Using DesignX, I used the STL mesh geometries to extract features and create 
								editable solid CAD models matching the ports’ geometries. </li>
							<li>I modified the models to create a blank for each tube port that can be mounted
								 to a test bench, allowing the tubes to be tested for pressure decay using the
								  manufacturer’s procedure outside of the assembly.</li>
						</ul>

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Pressure Decay Testing Fixture/CAD Image.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '300px' }}
							/>
						</div>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Progress
  							</h2>
						</div>

						<p className="text-lg text-muted-foreground">
							The pressure decay testing blanks are currently being machined with the 
							manufacturing drawing package I created, and they will prevent multi-day 
							setbacks in assembly when Oil Supply and Oil Scavenge Tubes are faulty. 
							Pressure decay test failures in the assembly process can be attributed 
							to assembly issues rather than faulty tubes.
						</p>						
						

					</motion.div>
			</div>
		</div>
	);
}