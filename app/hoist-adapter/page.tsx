'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/lib/constants';

export default function HoistAdapterPage() {
	const project = projects[1];

	return (
		<div className="py-4 md:py-4">
			<div className="container max-w-4xl mx-auto">
					<motion.div variants={fadeIn('right', 0.3)}>

						<div className="flex justify-center gap-6 my-6">
							<img
								alt="Professional photo"
								src="/images/Hoist Adapter for Cleaning Basket Cover Image.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<h1 className="text-4xl font-bold text-center mb-4">Hoist Adapter for Cleaning Basket</h1>
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
							The cleaning shop needs an adapter to safely lift the 6’ x 6’ stainless 
							steel chemical cleaning baskets when they are outside of the cleaning 
							line. Currently, only the crane within the cleaning line can lift and 
							lower the baskets into the chemical baths and onto rolling carts.
						</p>

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Hoist Adapter for Cleaning Basket/CAD Diagram.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>
						
						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Hoist Adapter for Cleaning Basket/Detail CAD Diagram.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>													

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Workflow
  							</h2>
						</div>

						<ul className="text-lg text-muted-foreground list-disc pl-6 text-lg mt-2 space-y-2">
							<li>Using Design for Manufacturing and Assembly, I designed parts in 
								SolidWorks that could be welded, formed, or machined with available
								 equipment.</li>
							<li>I verified my initial design choices for the welded frame and hardware 
								with hand calculations for bending and shear.</li>
							<li>With SolidWorks Simulation, I conducted structural FEA to verify 
								that the welded tube frame and hooks will resist yielding with a 
								safety factor of at least 1.5 under the maximum total load of 
								2500 lbs.</li>
						</ul>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Simulation
  							</h2>
						</div>

						<p className="text-lg text-muted-foreground">
							When loaded to 3750 lb. for a safety factor of 1.5, the maximum Von 
							Mises stress of 37,500 psi is below the yield strength of the 
							mild steel rectangular tubing.
						</p>

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Hoist Adapter for Cleaning Basket/Von Mises FEA.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '400px' }}
							/>
						</div>

						<p className="text-lg text-muted-foreground">
							When loaded to 3750 lb. for a safety factor of 1.5, the maximum vertical
							 displacement is only about 0.30 inches.
						</p>

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Hoist Adapter for Cleaning Basket/Displacement FEA.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '400px' }}
							/>
						</div>

						<p className="text-lg text-muted-foreground">
							In the worst case when a single hook is experiencing the entire 
							validation load of 3750 lb., the maximum Von Mises stress of ~40,000
							 psi is below the yield strength of the steel used.
						</p>

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Hoist Adapter for Cleaning Basket/Von Mises Hook FEA.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '400px' }}
							/>
						</div>		

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Hoist Adapter for Cleaning Basket/Displacement Hook FEA.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '400px' }}
							/>
						</div>										

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Progress
  							</h2>
						</div>

						<p className="text-lg mb-8 text-muted-foreground">
							The hoist adapter is currently being manufactured in house at Delta 
							Air Lines using the manufacturing drawing package I created from the 
							CAD model.
						</p>
						

					</motion.div>
			</div>
		</div>
	);
}