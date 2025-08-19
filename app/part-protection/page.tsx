'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/lib/constants';

export default function PartProtectionPage() {
	const project = projects[6];

	return (
		<div className="py-4 md:py-4">
			<div className="container max-w-4xl mx-auto">
					<motion.div variants={fadeIn('right', 0.3)}>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Part Protection Cover Image.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-6">
							All images and information used with permission of Delta Air Lines.
						</p>							

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

						<p className="text-lg text-muted-foreground mb-8">
							The covers from Rolls Royce (white in the image above) that protect
							 the 2nd and 3rd Stage Blades on the BR715 Low-Pressure Compressor
							 cost over $1000 each.

						</p>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Workflow
  							</h2>
						</div>

						<ul className="text-lg text-muted-foreground list-disc pl-6 text-lg mb-8 space-y-2">
							<li>After receiving the Big Rep Pro 2, I worked to optimize print
								 parameters and create a standard operating procedure for large
								  TPU prints.</li>
							<li>I performed tests to optimize the parameters to compensate for 
								shrinkage and print with easily-removed sacrificial support 
								material.</li>
						</ul>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Results
  							</h2>
						</div>	

						<p className="text-lg text-muted-foreground mb-8">
							The reverse engineered covers (red in the image above) 3D printed on our Big 
							Rep Pro 2 printer provide the same level of protection for less than $150 in 
							material. Printing four covers saved Delta Air Lines over $3,400 in material 
							costs and significantly reduced lead time compared to purchased OEM protective
							 covers.
						</p>															

					</motion.div>
			</div>
		</div>
	);
}