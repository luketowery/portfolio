'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/lib/constants';

export default function ScraperHandlePage() {
	const project = projects[5];

	return (
		<div className="py-4 md:py-4">
			<div className="container max-w-4xl mx-auto">
					<motion.div variants={fadeIn('right', 0.3)}>

						<div className="flex justify-center gap-6 my-6">
							<img
								alt="Professional photo"
								src="/images/Scraper Handle Cover Image.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<h1 className="text-4xl font-bold text-center mb-4">Ergonomic Scraper Handle for Aircraft Maintenance</h1>
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
							AMTs are getting cuts and hand/wrist injuries from using the disposable 
							scrapers (shown below) for hours at a time when removing adhesives, 
							sealants, and other substances from aircraft and engine parts. The 
							manufacturer makes a handle for some of their disposable scraper models,
							 but it costs $21 and is not designed for optimal user comfort and leverage.
						</p>

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Ergonomic Scraper Handle/Disposable Scrapers.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '150px' }}
							/>
						</div>

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Ergonomic Scraper Handle/OEM Handles.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '200px' }}
							/>
						</div>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Workflow
  							</h2>
						</div>

						<ul className="text-lg text-muted-foreground list-disc pl-6 text-lg mt-2 space-y-2">
							<li>Using feedback from AMTs across various shops, I iteratively designed
								 a grip geometry that accommodates various hand sizes, grip
								 preferences, and maintenance tasks.</li>
							<li>I designed versions of the handles to be injection molded with 
								feedback from injection molding companies to compare costs 
								between outsourced production and in-house additive 
								manufacturing.</li>
							<li>I used Design for Additive Manufacturing (DFAM) to choose print 
								orientations, parameters, and feature geometries that would 
								minimize post-processing, maximize strength, and ensure 
								consistent insertion of scrapers. </li>
						</ul>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Progress
  							</h2>
						</div>	

						<p className="text-lg text-muted-foreground">
							The five-configuration kit for three different scrapers is being 
							manufactured for all 6000+ AMTs using three dedicated 3D printers 
							purchased by Delta Air Lines for $12,000.
						</p>											

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Ergonomic Scraper Handle/-501 and -502.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '300px' }}
							/>
						</div>

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Ergonomic Scraper Handle/Spring Clip CAD Diagram.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '300px' }}
							/>
						</div>						

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Ergonomic Scraper Handle/-504 and -505.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '300px' }}
							/>
						</div>
						

						<div className="flex justify-center gap-6 my-8">
							<img
								alt="Professional photo"
								src="/images/Ergonomic Scraper Handle/-506.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '300px' }}
							/>
						</div>						

					</motion.div>
			</div>
		</div>
	);
}