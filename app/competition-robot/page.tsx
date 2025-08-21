'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';

import { projects } from '@/lib/constants';

export default function CompetitionRobotPage() {
	const project = projects[11];

	return (
		<div className="py-4 md:py-4">
			<div className="container max-w-4xl mx-auto">
					<motion.div variants={fadeIn('right', 0.3)}>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Competition Robot Cover Image.png"
								className="object-contain rounded-lg border-[2px] border-foreground"
								style={{ width: 'auto', height: '400px' }}
							/>
						</div>						

						<h1 className="text-4xl font-bold text-center mb-4">Object-Distributing Competition Robot</h1>
						<div className="flex flex-wrap gap-3 mb-8 justify-center">
  							{project.tags.map((tag, tagIndex) => (
    							<Badge className="px-3 py-1 text-md rounded-x2" key={tagIndex} variant="secondary">
      								{tag}
    							</Badge>
  							))}
						</div>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Challenge
  							</h2>
						</div>

						<p className="text-lg text-muted-foreground">
							As a team of four mechanical engineers, we were challenged to design a robot that
							completes a series of tasks involving the movement and distribution of various objects
							within a 3-minute round: 
						</p>

						<ul className="text-lg text-muted-foreground list-disc pl-6 text-lg mb-4 space-y-2">
							<li>Deposit 4 balls in the assigned color quadrant of the track's spinning
								centerpiece.</li>
							<li>Place a ring onto the 30" tall center post of the competition track.</li>
							<li>Push six 2" wood blocks into the designated 3" zone onthe track.</li>
						</ul>

						<p className="text-lg text-muted-foreground">
							Alongside these tasks, the robot had to meet the following limitations:
						</p>						

						<ul className="text-lg text-muted-foreground list-disc pl-6 text-lg mb-4 space-y-2">
							<li>The robot must start the round in a 24" long, 12" wide, and 18" tall volume in
								the back of the competition track.</li>
							<li>Up to two motors, two pneumatic cylinders, two solenoids, and two mousetrap
								springs can be used as actuators.</li>
							<li>Sensors are limited to an IR sensor, rotary encoder, and three limit switches.</li>	
							<li>Only $100 in materials beyond the actuators, sensors, and microcontrollers can be used.</li>
						</ul>

						<p className="text-lg text-muted-foreground">
							Four teams compete simultaneously on the same competition track and are scored based
							on the number of tasks they successfully complete. Failure to meet the limitations
							results in dequalification. 64 teams participated total.
						</p>																			

						<div className="flex justify-center gap-6 my-2 mb-4">
							<img
								alt="Professional photo"
								src="/images/Competition Robot/Competition Track.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '400px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							Competition track with four quadrants, 6 blocks in each quadrant, a spinning centerpiece
							 and a 30" tall center post.
						</p>

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Responsibilities
  							</h2>
						</div>

						<ul className="text-lg text-muted-foreground list-disc pl-6 text-lg space-y-2">
							<li>Oversaw the computer-aided design of the robot and its subsystems.</li>
							<li>Designed the motor-driven drivetrain, ring delivery subsystem, and block-pushing subsystem.</li>
							<li>Used my experience in fabrication to lead the prototyping of the competition
								robot.</li>
							<li>Led the writing of three reports for technical and non-technical audiences.</li>	
						</ul>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Competition Robot/Full Robot.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '500px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							CAD model of the competition robot and its major subsystems.
						</p>						

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Unfolding Block-Pushing Subsystem
  							</h2>
						</div>	

						<p className="text-lg text-muted-foreground">
							This system creatively combines gravity, motor power, and a rotary encoder to precisely
							push three blocks on each side, spaced across 18 inches, while meeting the start-of-round
							dimensional requirements.

						</p>											

						<div className="flex justify-center gap-6 my-2 mb-4">
							<img
								alt="Professional photo"
								src="/images/Competition Robot/Wall-Pushing Subsystem Start.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '425px' }}
							/>
						</div>

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Competition Robot/Wall-Pushing Subsystem Active.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '450px' }}
							/>
						</div>

						<p className="text-sm text-center text-muted-foreground mb-8">
							Block-pushing subsystem in the start-of-round position (top) 
							and during pushing (bottom).
						</p>								

						<div className="text-center">
  							<h2 className="text-2xl font-bold mb-2 inline-block border-b-4 border-primary">
    							Ring Delivery Subsystem
  							</h2>
						</div>	

						<p className="text-lg text-muted-foreground">
							This system uses a solenoid, mouse trap spring, and pneumatic piston to place a 
							ring on the center post of the competition track that is taller than the start-of-round
							height limit.
						</p>											

						<div className="flex justify-center gap-6 my-2">
							<img
								alt="Professional photo"
								src="/images/Competition Robot/Ring Delivery Subsystem.png"
								className="object-contain rounded-lg border-2 border-foreground"
								style={{ width: 'auto', height: '425px' }}
							/>
						</div>		

						<p className="text-sm text-center text-muted-foreground mb-8">
							Illustration of the ring delivery arm (1) at the start of the round within
							the geometry limits, (2) unfolding after the round begins, (3) rotating to
							place the ring on the post, (4) releasing the ring, and (5) regressing from
							the center post.
						</p>																	

					</motion.div>
			</div>
		</div>
	);
}