'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/lib/constants';

export default function PushDoorOpenerPage() {
	const project = projects[10];

	return (
		<div className="py-4 md:py-4">
			<div className="container max-w-4xl mx-auto">
					<motion.div variants={fadeIn('right', 0.3)}>

						<div className="flex justify-center gap-6 my-6">
							<img
								alt="Professional photo"
								src="/images/Push Door Opener Cover Image.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<h1 className="text-4xl font-bold text-center mb-4">Portable Push Door Openers for Wheelchair Users</h1>
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
							Wheelchair users struggle to open heavy push doors because they 
							cannot leverage their full body weight or foot friction, and with
							only two hands, they must simultaneously push open the door and
							propel their independent wheels. Solutions exist to automatically
							open a door, but no devices exist to help a wheelchair user with
							a door that has no assistive technology installed.
						</p>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Workflow
  							</h2>
						</div>

						<ul className="text-lg text-muted-foreground list-disc pl-6 text-lg space-y-2 mb-4">
							<li>First, our team defined the problem using a Functional Decomposition 
								and 4-Box Chart that lists environmental factors, material 
								requirements, required functions, and specifications.</li>
							<li>We conducted research on 25 biological mechanisms related to the 
								required functions of the device, evaluating them based on how 
								the function, environment, materials, size, and performance scale
								 of the each compares to the door-opening problem.</li>
							<li>With the highest-ranking biological mechanisms, we translated 
								them to the design problem to create three potential design concepts. 
								With each concept, we conducted quantitative analysis to assess their
								feasibility and compare their expected performance. </li>
							<li>We designed, prototyped, and tested the most promising design concept
								inspired by plantar flexion in the human leg, which allows us to raise
								our body with a force smaller in magnitude than our weight, and the
								tendon locking system in bat feet, which allows them to sleep upside
								without expending energy.</li>
						</ul>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Push Door Opener for Wheelchair Users/CAD Model.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: '600px', height: 'auto' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							CAD assembly of the first iteration of the portable push door opener.
						</p>									

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Push Door Opener for Wheelchair Users/Tendon Locking System.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: '800px', height: 'auto' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							Illustrative explanation of the Tendon Locking Mechanism (TLS) found in
							bat feet that allow them to hang upside passively with little energy expenditure
							while they sleep.
						</p>							

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Push Door Opener for Wheelchair Users/Comparison to TLS.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: '800px', height: 'auto' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							Diagram showing how the TLS mechanism in bat feet was translated
							to the design of the portable push door opener.
						</p>																												

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Progress
  							</h2>
						</div>	

						<p className="text-lg text-muted-foreground mb-4">
							Our proof-of-concept proved the feasibility of the device which 
							reduces the pushing force needed by a user by 50% and allows the 
							user to remain in a stationary position as they door open with a 
							series of smaller, incremental pushes. To create a finished product,
							friction can be reduced to further decrease the amount of force the
							user needs to apply. Design changes can be implemented to make the
							device smaller, collapsible, and more portable for wheelchair
							users.
						</p>											

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Push Door Opener for Wheelchair Users/Prototype.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							Proof-of-concept prototype of the portable push door opener.
						</p>											

					</motion.div>
			</div>
		</div>
	);
}