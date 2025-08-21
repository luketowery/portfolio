'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/lib/constants';

export default function SaxKeysPage() {
	const project = projects[9];

	return (
		<div className="py-4 md:py-4">
			<div className="container max-w-4xl mx-auto">
					<motion.div variants={fadeIn('right', 0.3)}>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys Cover Image.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<h1 className="text-4xl font-bold text-center mb-4">3D Printed Saxophone Keys for Users with Long Fingers</h1>
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

						<p className="text-lg text-muted-foreground mb-4">
							The alto saxophone has a fixed key configuration, making it difficult 
							for users with long or uniquely shaped fingers from playing comfortably 
							and at their full potential. Custom brass keys are expensive and typically
							accessible for only professional musicians.
						</p>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys/Full CAD Model.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							CAD assembly of the alto saxophone designed and rendered in Siemens NX.
						</p>						
						
						<div className="flex justify-center gap-2 my-2">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys/Reflection Analysis.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							Smooth, continuous reflection lines indicate G2 surface continuity.
						</p>					

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Workflow
  							</h2>
						</div>

						<ul className="text-lg text-muted-foreground list-disc pl-6 text-lg space-y-2 mb-4">
							<li>With NX’s surface modeling operations and reflection analysis, I 
								modeled the alto saxophone body with G2 surface continuity.</li>
							<li>For the three keys that long-fingered users struggle to use the 
								most (Low D#, Low C, and High D), I modelled the original brass 
								key geometries and mechanisms before creating elongated versions
								 that would be more comfortable to use.</li>
							<li>Using structural Nastran Simulations in NX, I analyzed the stress 
								distribution within the original brass keys and iteratively adjusted
								 the geometry of the elongated keys to resist yielding and excessive
								 deformation when manufactured in nylon using selective laser
								 sintering (SLS) 3D printing.</li>
						</ul>

						<div className="flex justify-center gap-2 my-2">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys/Key CAD Close Up.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '300px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							Models of the extended, 3D-printed Low D#/Low C keys (left) and 
							High D Palm Key (right) integrated with the existing key mechanisms
							on the alto saxophone.
						</p>							

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Simulation of the Low C Key
  							</h2>
						</div>

						<p className="text-lg text-muted-foreground mb-4">
							First, a structural simulation of the original brass Low C key was 
							conducted to find the stress concentrations developed during actuation.
						</p>

						<div className="flex justify-center gap-6 my-2 mb-2">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys/Simulation Setup.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '300px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							Loads and constraints applied to the Low C Key across all simualtions.
						</p>								

						<p className="text-lg text-muted-foreground">
							The simulation indicates that with the original geometry of the key,
							yielding will occur if it is made of nylon instead of brass since the
							maximum Von Mises stress is greater than the yield strength of nylon.
						</p>

						<div className="flex justify-center gap-6 my-2 mb-2">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys/Original Key Simulation.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '350px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							Nastran NX simulation of the original brass Low C key.
						</p>							

						<p className="text-lg text-muted-foreground mb-2">
							To reduce the Von Mises stresses safely below the yield strength 
							of nylon, the following geometry changes were made:
						</p>

						<div className="flex justify-center gap-6 my-2 mb-2">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys/v1 Changes.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '350px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							CAD model of the first iteration of the extended nylon Low C Key.
						</p>								

						<p className="text-lg text-muted-foreground">
							While these changes reduce the maximum Von Mises stress below the yield
							 strength, the displacement at the end of the key, 6.5 mm, will cause 
							 interference with other components and inhibit smooth playing.
						</p>

						<div className="flex justify-center gap-6 my-2 mb-4">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys/v1 Simulation Von Mises.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: '800px', height: 'auto' }}
							/>
						</div>	

						<div className="flex justify-center gap-6 my-2 mb-2">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys/v1 Simulation Displacement.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: '800px', height: 'auto' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							Nastran NX simulations of the first iteration of the extended nylon
							Low C key.
						</p>						

						<p className="text-lg text-muted-foreground">
							In response, futher geometry changes were made, as shown below:
						</p>

						<div className="flex justify-center gap-6 my-2 mb-2">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys/v2 Changes.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: '800px', height: 'auto' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							CAD model of the final iteration of the extended nylon Low C Key.
						</p>						

						<p className="text-lg text-muted-foreground">
							Simulation of the final Low C Key indicates a maximum Von Mises stress of
							27 MPa and safety factor against yielding of about 1.85 when the key is 
							subjected to the average maximum force of the pinky finger. The 1.75 mm
							maximum displacement is small enough to avoid interference with other
							components or inhibit smooth playing.
						</p>

						<div className="flex justify-center gap-6 my-2 mb-4">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys/v2 Simulation Von Mises.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: '800px', height: 'auto' }}
							/>
						</div>	

						<div className="flex justify-center gap-6 my-2 mb-2">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys/v2 Simulation Displacement.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: '800px', height: 'auto' }}
							/>
						</div>	

						<p className="text-sm text-center text-muted-foreground mb-8">
							Nastran NX simulations of the final iteration of the extended nylon
							Low C key, validating its design against yielding and excessive
							displacement.
						</p>																														

						<p className="text-lg text-muted-foreground">
							The results of this iterative simulation and design cycle guided the 
							geometric modifications made to the other keys.
						</p>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys/Low D Key.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '400px' }}
							/>
						</div>		

						<p className="text-sm text-center text-muted-foreground mb-8">
							Models of the original, brass Low D# Key (left), and the extended,
							 3D-printed version designed to resist yielding during playing (right).
						</p>													

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Progress
  							</h2>
						</div>

						<p className="text-lg text-muted-foreground">
							The three elongated keys resist yielding and interference with other keys,
							 proving that 3D printing provides an affordable solution for custom 
							 instrument keys.
						</p>

						<div className="flex justify-center gap-6 my-2 mb-4">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys/Extended Nylon Low C Key Printed.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: '300px', height: 'auto' }}
							/>
						</div>	

						<div className="flex justify-center gap-6 my-2 mb-4">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys/Extended Nylon Low D Key Printed.jpg"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: '300px', height: 'auto' }}
							/>
						</div>	

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Saxophone Keys/Extended Nylon High D Palm Key Printed.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: '300px', height: 'auto' }}
							/>
						</div>	

						<p className="text-sm text-center text-muted-foreground mb-8">
							Low C (top), Low D# (center), and High D Palm (bottom) keys 3D-printed
							in nylon on a Formlabs Fuse 1 selective laser sintering (SLS) 3D printer.
						</p>																		

					</motion.div>
			</div>
		</div>
	);
}