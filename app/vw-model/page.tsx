'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/lib/constants';

export default function VWPage() {
	const project = projects[13];

	return (
		<div className="py-4 md:py-4">
			<div className="container max-w-4xl mx-auto">
					<motion.div variants={fadeIn('right', 0.3)}>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/VW Cover Image.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '400px' }}
							/>
						</div>

						<h1 className="text-4xl font-bold text-center mb-4">Classic Volkswagen 3D Model</h1>
						<div className="flex flex-wrap gap-3 mb-8 justify-center">
  							{project.tags.map((tag, tagIndex) => (
    							<Badge className="px-3 py-1 text-md rounded-x2" key={tagIndex} variant="secondary">
      								{tag}
    							</Badge>
  							))}
						</div>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Inspiration
  							</h2>
						</div>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/VW/Beetle Inspiration.jpg"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '300px' }}
							/>
						</div>			

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 mt-6 inline-block border-b-4 border-primary">
    							Final CAD Model
  							</h2>
						</div>															

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/VW/VW Front.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: '400px', height: 'auto' }}
							/>
						</div>

						<div className="flex justify-center gap-6 my-4">
							<img
								alt="Professional photo"
								src="/images/VW/VW Side.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: '400px', height: 'auto' }}
							/>
						</div>

						<div className="flex justify-center gap-6 my-4">
							<img
								alt="Professional photo"
								src="/images/VW/VW Rear.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '250px' }}
							/>
						</div>		

					</motion.div>
			</div>
		</div>
	);
}