'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/lib/constants';

export default function TireScrubberPage() {
	const project = projects[5];

	return (
		<div className="py-4 md:py-4">
			<div className="container max-w-4xl mx-auto">
					<motion.div variants={fadeIn('right', 0.3)}>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Wheelchair Tire Scrubber Cover Image.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '400px' }}
							/>
						</div>

						<h1 className="text-4xl font-bold text-center mb-4">Vacuum Wheelchair Tire Scrubber</h1>
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
							Active wheelchairs users struggle to adequately clean their tires before entering
							their homes or other buildings, tracking in dirt and debris that is difficult to
							clean. Existing solutions are stationary and get the user dirty.
						</p>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Workflow
  							</h2>
						</div>	

						<ul className="text-lg text-muted-foreground list-disc pl-6 text-lg space-y-2">
							<li>I experimented with different vacuum shroud geometries and materials
								to optimize suction and debris containment.</li>
							<li>With feedback from wheelchair users and clinicians at the Shepherd Center
								I refined the device to minimize the downward force needed by a user and
								function without the need for grip strength and dexterity.</li>
							<li>I designed tests to determine the bristle stiffness, length, and rotational 
								speed that is most effective for wheelchair tires.</li>
						</ul>											

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Wheelchair Tire Scrubber/Concept Drawing.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '400px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							Concept diagram of the vacuum wheelchair tire scrubber.
						</p>	

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Results
  							</h2>
						</div>	

						<p className="text-lg text-muted-foreground">
							The portable vacuum wheelchair tire scrubber invention was sold by 
							the Rehabilitation Engineering and Applied Research REAR Lab at 
							Georgia Tech to the Craig Nielson foundation for $143,000 using 
							this proof-of-concept.
						</p>											

						<div className="flex justify-center gap-6 my-2 mb-4">
							<img
								alt="Professional photo"
								src="/images/Wheelchair Tire Scrubber/Prototype.jpg"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							Proof-of-concept prototype created with 3D-printed and off-the-shelf
							components.
						</p>												

					</motion.div>
			</div>
		</div>
	);
}