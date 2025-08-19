'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/lib/constants';

export default function CICLiftingPage() {
	const project = projects[3];

	return (
		<div className="py-4 md:py-4">
			<div className="container max-w-4xl mx-auto">
					<motion.div variants={fadeIn('right', 0.3)}>

						<div className="flex justify-center gap-6 my-6">
							<img
								alt="Professional photo"
								src="/images/CIC Lifting Fixture Cover Image.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<h1 className="text-4xl font-bold text-center mb-4">Compressor Intermediate Case Lifting Fixture</h1>
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
							The ceiling in the plasma spray cell is too low to lift the Compressor
							 Intermediate Case of the Trent 7000 turbofan engine with existing 
							 lifting tooling.
						</p>

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/CIC Lifting Fixture/CAD Diagram with Case.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/CIC Lifting Fixture/CAD Detail Diagram.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '350px' }}
							/>
						</div>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Results
  							</h2>
						</div>

						<p className="text-lg text-muted-foreground">
							Designing the Lifting Fixture to be made of off-the-shelf components
							 and parts that could be manufactured quickly with waterjets and mills 
							allowed for the plasma spray to be completed within two weeks of the
							 tooling request.
						</p>

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/CIC Lifting Fixture/CAD Diagram without Case.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '400px' }}
							/>
						</div>												

					</motion.div>
			</div>
		</div>
	);
}