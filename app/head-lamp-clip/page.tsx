'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/lib/constants';

export default function HeadLampClipPage() {
	const project = projects[7];

	return (
		<div className="py-4 md:py-4">
			<div className="container max-w-4xl mx-auto">
					<motion.div variants={fadeIn('right', 0.3)}>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Headlamp Clip Cover Image.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-6">
							All images and information used with permission of Delta Air Lines.
						</p>							

						<h1 className="text-4xl font-bold text-center mb-4">Reverse Engineered Headlamp Clip</h1>
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
							The original headlamp clips used in the maintenance shops, which hold the
							 headlamp at the desired angle, easily fractures when they are dropped 
							 in the shop, and replacement involves purchasing an entire new headlamp for $40.
						</p>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="images/Head Lamp Clip/Headlamp.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '300px' }}
							/>
						</div>	

						<p className="text-sm text-center text-muted-foreground mb-8">
							Streamlight headlamp used in the maintenance shop.
						</p>												

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Workflow
  							</h2>
						</div>

						<ul className="text-lg text-muted-foreground list-disc pl-6 text-lg space-y-2">
							<li>With a Keyence 3D scanner, I took three different scans at different angles 
								and stitched them together in the scanning software to get an STL from the 
								point cloud data.</li>
							<li>In DesignX, I used the STL mesh geometry to extract features and create an
								 editable solid CAD model matching the original part as closely as
								 possible.</li>
							<li>Throughout the CAD modeling process, I used the deviation visualization to
								compare the geometry of the model to the 3D scan.</li>	 
						</ul>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="images/Head Lamp Clip/Model Images.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>	

						<p className="text-sm text-center text-muted-foreground mb-8">
							Keyance 3D scan, DesignX CAD model, and deviation visualization of the headlamp clip..
						</p>													

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Results
  							</h2>
						</div>	

						<p className="text-lg text-muted-foreground mb-6">
							The reverse engineered headlamp clip, made with a tough and durable material
							 called TPU 74D, costs $0.90 in material to produce. 30 replacement clips 
							 were printed, saving the shop about $1200.
						</p>															

					</motion.div>
			</div>
		</div>
	);
}