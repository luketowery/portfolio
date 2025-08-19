'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/lib/constants';

export default function PartMaskingPage() {
	const project = projects[5];

	return (
		<div className="py-4 md:py-4">
			<div className="container max-w-4xl mx-auto">
					<motion.div variants={fadeIn('right', 0.3)}>

						<div className="flex justify-center gap-6 my-6">
							<img
								alt="Professional photo"
								src="/images/Part Masking Cover Image.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<h1 className="text-4xl font-bold text-center mb-4">Aircraft Engine Part Masking</h1>
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
							To protect the features of engine parts that cannot be shot peened or 
							blasted, aircraft maintenance technicians (AMTs) manually cover them 
							with blast tape. This precise and time-consuming process often leads 
							to expensive part rework due to taping inconsistencies or tape blowing 
							off during blasting.
						</p>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Workflow
  							</h2>
						</div>

						<ul className="text-lg text-muted-foreground list-disc pl-6 text-lg mt-2 space-y-2">
							<li>Using scanned models of the parts, I designed part masks to 
								tightly fit around the features to be protected, accounting for 
								the shrinkage of TPU during printing.</li>
							<li>I implemented Design for Additive Manufacturing (DFMA) practices 
								to design parts without the need for support material.</li>
						</ul>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 mt-6 inline-block border-b-4 border-primary">
    							Example 1: CF6 Horizontal Bevel Gear
  							</h2>
						</div>	

						<p className="text-lg text-muted-foreground">
							These flexible TPU parts cover the gear teeth on the horizontal bevel 
							gear of the inlet gearbox assembly of the CF6-80C2B6 aircraft engine 
							to prevent damage during shot peening. Before, $6-8 of single-use 
							blast tape is used per application, which takes about 15 minutes. 
							With this $42 set of TPU masks, application takes less than 5 minutes, 
							and they can be reused for hundreds of parts.
						</p>											

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Part Masking/Horizontal Bevel Gear.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '400px' }}
							/>
						</div>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Example 2: PW1500 HPC Blisk
  							</h2>
						</div>	

						<p className="text-lg text-muted-foreground">
							During shot peening, this mask covers the rubstrip of the PW1500 
							aircraft engine’s high pressure compressor 4th stage blisk, crucial 
							for maintaining the air seal between it and the adjacent stage’s 
							stator vanes for maximum engine efficiency.
						</p>							

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Part Masking/Blisk.jpg"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '300px' }}
							/>
						</div>						

					</motion.div>
			</div>
		</div>
	);
}