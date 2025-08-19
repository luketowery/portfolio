export const siteConfig = {
	name: 'Engineering Portfolio',
	description:
		'A professional portfolio website template for engineering students.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{ title: "Tool Design", children: [
      		{ title: "A220 Nose Landing Gear Repack Fixture", href: "/nlg-repack" },
			{ title: "Hoist Adapter for Cleaning Basket", href: "/hoist-adapter" },
			{ title: "Pressure Decay Testing Fixture", href: "/pressure-decay" },
			{ title: "CIC Lifting Fixture", href: "/cic-lifting" }
    	]},
		{ title: "Additive Manufacturing", children: [
      		{ title: "Ergonomic Scraper Handle", href: "/scraper-handle" },
			{ title: "Aircraft Engine Part Masking", href: "/part-masking" },
			{ title: "Reverse Engineered Headlamp Clip", href: "/head-lamp-clip" },
			{ title: "Aircraft Engine Part Protection", href: "/part-protection" }
    	]},
		{ title: "Georgia Tech", children: [
      		{ title: "A220 Nose Landing Gear Repack Fixture", href: "/nlg-repack" }
    	]},
		{ title: "Personal Projects", children: [
      		{ title: "A220 Nose Landing Gear Repack Fixture", href: "/nlg-repack" }
    	]}
	],
	links: {
		github: 'https://github.com/yourusername',
		linkedin: 'https://linkedin.com/in/yourusername',
		twitter: 'https://twitter.com/yourusername',
		facebook: 'https://facebook.com/yourusername',
		instagram: 'https://instagram.com/yourusername',
		whatsapp: 'https://wa.me/yourphonenumber',
		email: 'mailto:youremail@example.com',
		phone: 'tel:+1234567890',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Engineering Intern',
		company: 'Tech Company',
		location: 'City, Country',
		startDate: 'May 2023',
		endDate: 'Aug 2023',
		description: [
			'Worked on developing and testing software components for embedded systems',
			'Collaborated with senior engineers on project planning and execution',
			'Implemented test procedures for quality assurance',
		],
		technologies: ['C++', 'Python', 'MATLAB', 'Git'],
	},
	{
		title: 'Research Assistant',
		company: 'University Lab',
		location: 'City, Country',
		startDate: 'Jan 2023',
		endDate: 'Apr 2023',
		description: [
			'Assisted in research focusing on advanced materials for mechanical applications',
			'Conducted literature reviews and compiled research findings',
			'Performed data analysis and visualization of experimental results',
		],
		technologies: ['MATLAB', 'CAD', 'Data Analysis', 'Python'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	href?: string;

};

export const projects: Project[] = [

	/* Tool Design Engineering */
	{
		title: 'A220 Nose Landing Gear Repack Fixture',
		description:
			'Modeled and improved the design of a welded fixture to carefully raise and lower the sliding tube of the A220 nose landing gear during installation and removal.',
		image: '/images/A220 Nose Landing Gear Repack Fixture Cover Image.png',
		tags: ['SolidWorks', 'Weldments', 'SolidWorks Drawings', 'Design for Manufacturing and Assembly'],
		href: '/nlg-repack'
	},
	{
		title: 'Hoist Adapter for Cleaning Basket',
		description:
			'Designed a welded hoist adapter to lift 6’ x 6’ chemical cleaning baskets for turbofan engine parts, using stress hand calculations and SolidWorks Simulation to ensure yield resistance for loads of up to 2500 lbs.',
		image: '/images/Hoist Adapter for Cleaning Basket Cover Image.png',
		tags: ['SolidWorks', 'Weldments', 'SolidWorks Simulation', 'Design for Manufacturing and Assembly'],
		href: '/hoist-adapter'
	},
	{
		title: 'Pressure Decay Testing Fixture',
		description:
			'Mitigated risk of multi-day disassembly setbacks due to defects in the oil tubes of an aircraft engine bearing by creating a custom pressure decay testing fixture using 3D scanning and DesignX to precisely match tube port geometry.',
		image: '/images/Pressure Decay Testing Fixture Cover Image.png',
		tags: ['3D Scanning', 'DesignX', 'SolidWorks', 'Reverse Engineering'],
		href: '/pressure-decay'
	},
	{
		title: 'Compressor Intermediate Case Lifting Fixture',
		description:
			'Designed a fixture to lift the ~700lb Compressor Intermediate Case of the Trent 7000 turbofan engine for plasma spraying in a cell with low vertical clearance.',
		image: '/images/CIC Lifting Fixture Cover Image.png',
		tags: ['SolidWorks', 'SolidWorks Simulation', 'Design for Manufacturing and Assembly'],
		href: '/cic-lifting'
	},
	{
		title: 'Electrolytic Stripping Fixture for HPC Blade',
		description:
			'Translated an existing electrolytic stripping fixture for the Stage 1 blades of the BR715 High Pressure Compressor to CAD, creating a manufacturing drawing package for future reproduction.',
		image: '/images/Electrolytic Stripping Fixture Cover Image.png',
		tags: ['SolidWorks', 'Reverse Engineering'],
	},

	/* Additive Manufacturing */
	{
		title: 'Ergonomic Scraper Handle for Aircraft Maintenance',
		description:
			'Invented a set of ergonomic scraper handles for use with disposable scrapers to increase leverage, throughput, and comfort for aircraft maintenance technicians (AMTs) while reducing short- and long-term hand injuries.',
		image: '/images/Scraper Handle Cover Image.png',
		tags: ['SolidWorks', 'Safety/Ergonomics', 'Design for Additive Manufacturing'],
		href: '/scraper-handle'
	},
	{
		title: 'Aircraft Engine Part Masking',
		description:
			'Created flexible, durable, reusable 3D-printed parts to cover critical features of aircraft engine parts that cannot be shot peened or blasted, reducing time and cost compared to tape masking.',
		image: '/images/Part Masking Cover Image.png',
		tags: ['SolidWorks', 'Design for Additive Manufacturing'],
		href: '/part-masking'
	},
	{
		title: 'Reverse Engineered Headlamp Clip',
		description:
			'Reverse engineered headlamp clips using 3D scanning and DesignX to improve durability and decrease replacement cost.',
		image: '/images/Headlamp Clip Cover Image.png',
		tags: ['SolidWorks', '3D Scanning', 'DesignX', 'Reverse Engineering'],
		href: '/head-lamp-clip'
	},
	{
		title: 'Aircraft Engine Part Protection',
		description:
			'Created soft, durable 3D-printed coverings to protect blades, shafts, and other parts from getting damaged or injuring technicians during transportation.',
		image: '/images/Part Protection Cover Image.png',
		tags: ['SolidWorks', 'Large Format 3D Printing', 'Design for Additive Manufacturing'],
		href: '/part-protection'
	},

	/* Georgia Tech */
	{
		title: '3D Printed Saxophone Keys for Users with Long Fingers',
		description:
			'Created a simplified alto saxophone model in Siemens NX and designed three elongated 3D-printed keys that integrate into existing saxophone mechanisms and allow musicians with long fingers to play more comfortably.',
		image: '/images/Saxophone Keys Cover Image.png',
		tags: ['Siemens NX', 'Structural FEA', 'Nastran'],
	},
	{
		title: 'Portable Push Door Opener for Wheelchair Users',
		description:
			'Created a proof-of-concept for a portable device that assists manual wheelchair users in opening non-compliant heavy push doors that they face in everyday life, inspired by biological mechanisms within bat feet and human legs.',
		image: '/images/Push Door Opener Cover Image.png',
		tags: ['Biologically-inspired Design', 'Assistive Technology', 'Product Design'],
	},
	{
		title: 'Object-Distributing Competition Robot',
		description:
			'Led a team of four engineers to create an Arduino robot with robust and creative subsystems that overcame challenge limitations to precisely move objects on a competition track.',
		image: '/images/Competition Robot Cover Image.png',
		tags: ['SolidWorks', 'Fabrication', 'Rapid Prototyping', 'Mechatronics', 'Arduino', 'Technical Reports'],
	},
	{
		title: 'Vacuum Wheelchair Tire Scrubber',
		description:
			'Invented a wheelchair tire scrubber that integrates a portable vacuum and a rotating scrub brush into a 3D-printed body to assist active wheelchair users in cleaning their tires before entering their home and tracking in debris.',
		image: '/images/Wheelchair Tire Scrubber Cover Image.png',
		tags: ['Product Design', 'Assistive Technology', 'Testing Design', 'Rapid Prototyping'],
	},
	{
		title: 'Classic Volkswagen Model',
		description:
			'Used surface and solid modelling techniques in Siemens NX to design a simplified CAD model of the classic Volkswagen Beetle.',
		image: '/images/VW Cover Image.png',
		tags: ['Siemens NX', 'Surface Modeling'],
	},

	/* Personal */
	{
		title: 'Arduino Overnight Battery Saver for Smartphones',
		description:
			'Invented an Arduino device with 3D-printed components that unplugs a user’s phone after a set number of hours to minimize battery degradation from overnight overcharging.',
		image: '/images/Overnight Battery Saver Cover Image.png',
		tags: ['Arduino', 'Mechatronics', '3D Printing'],
	},
	{
		title: '3D Printed Slide Calculator',
		description:
			'Taking inspiration from the Arithma Addiator, I fabricated a 3D-printed slide-rule calculator that performs integer addition and subtraction from 0 to 999,999.',
		image: '/images/Calculator Cover Image.png',
		tags: ['SolidWorks', 'Reverse Engineering', 'Multi-color 3D Printing'],
	},
	{
		title: 'La Sagrada Familia Winged Ox Model',
		description:
			'Modelled and resin 3D-printed the Saint Luke Evangelist Spire found on La Sagrada Familia.',
		image: '/images/Winged Ox Cover Image.png',
		tags: ['Solidworks', 'Surface Modeling', 'SLA 3D Printing'],
	},
	{
		title: 'Lithophane Picture Display Box',
		description:
			'Designed and fabricated a display that holds four interchangeable lithophanes (3D-printed light-activated pictures).',
		image: '/images/Lithophane Picture Box Cover Image.png',
		tags: ['SLA 3D Printing', 'Laser Cutting', 'SolidWorks'],
	}
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Science',
		field: 'Mechanical Engineering',
		institution: 'University Name',
		location: 'City, Country',
		startDate: 'Sep 2020',
		endDate: 'Present',
		gpa: '3.8/4.0',
		achievements: [
			'Dean\'s List (All Semesters)',
			'Academic Excellence Scholarship',
			'Senior Design Project Award',
		],
	},
	{
		degree: 'High School Diploma',
		field: 'Science and Mathematics',
		institution: 'High School Name',
		location: 'City, Country',
		startDate: 'Sep 2016',
		endDate: 'Jun 2020',
		gpa: '4.0/4.0',
		achievements: [
			'Valedictorian',
			'National Mathematics Competition Finalist',
			'Science Fair Gold Medal',
		],
	},
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Engineering Professional Certification',
		issuer: 'Professional Engineering Association',
		date: 'Nov 2023',
		id: 'CERT-12345',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'CAD Design Specialist',
		issuer: 'Autodesk',
		date: 'Jun 2023',
		id: 'CERT-67890',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'Project Management Fundamentals',
		issuer: 'Project Management Institute',
		date: 'Mar 2023',
		id: 'CERT-24680',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Mechanical Design', level: 9, category: 'technical' },
	{ name: 'Structural Analysis', level: 8, category: 'technical' },
	{ name: 'Thermodynamics', level: 7, category: 'technical' },
	{ name: 'Control Systems', level: 8, category: 'technical' },
	{ name: 'Circuit Design', level: 6, category: 'technical' },

	// Software Skills
	{ name: 'MATLAB', level: 9, category: 'software' },
	{ name: 'AutoCAD', level: 8, category: 'software' },
	{ name: 'SolidWorks', level: 9, category: 'software' },
	{ name: 'Python', level: 7, category: 'software' },
	{ name: 'C++', level: 6, category: 'software' },
	{ name: 'ANSYS', level: 8, category: 'software' },

	// Soft Skills
	{ name: 'Problem Solving', level: 9, category: 'soft' },
	{ name: 'Team Leadership', level: 8, category: 'soft' },
	{ name: 'Project Management', level: 7, category: 'soft' },
	{ name: 'Technical Writing', level: 8, category: 'soft' },
	{ name: 'Presentation', level: 7, category: 'soft' },

	// Languages
	{ name: 'English', level: 10, category: 'language' },
	{ name: 'Spanish', level: 6, category: 'language' },
	{ name: 'French', level: 4, category: 'language' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Advances in Renewable Energy Technologies',
		excerpt: 'Exploring the latest innovations in renewable energy and their impact on sustainable development.',
		date: 'Mar 15, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		slug: 'advances-in-renewable-energy',
	},
	{
		title: 'The Future of Robotics in Manufacturing',
		excerpt: 'How robotics and automation are revolutionizing the manufacturing industry and creating new opportunities.',
		date: 'Feb 22, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		slug: 'future-of-robotics-manufacturing',
	},
	{
		title: 'Sustainable Building Materials in Modern Construction',
		excerpt: 'An analysis of eco-friendly building materials and their applications in contemporary architecture.',
		date: 'Jan 10, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
		slug: 'sustainable-building-materials',
	},
];