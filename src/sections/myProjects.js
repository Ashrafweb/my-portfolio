"use client";
import { motion } from "framer-motion";
import Project from "../components/Project";
import { projectData } from "@/Data/projectData";

const list = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
	hidden: { opacity: 0, y: 8 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
	},
};

function MyProjects() {
	const projects = projectData;

	return (
		<section id='projects' className='w-full max-w-6xl mx-auto px-4 py-10'>
			<div className='flex items-center gap-1 mb-0 px-4'>
				<div className='px-3 py-1.5 text-[10px] rounded-t-md border-t border-x border-neutral-700 bg-[#0d0d0d] text-neutral-300'>
					projects.json
				</div>
			</div>

			<div className='rounded-b-xl rounded-tr-xl border border-neutral-800 bg-[#0d0d0d] overflow-hidden'>
				<div className='flex items-center gap-1.5 px-4 py-2.5 border-b border-neutral-800 bg-[#0a0a0a]'>
					{["#ef4444", "#eab308", "#22c55e"].map((color) => (
						<div
							key={color}
							className='w-2.5 h-2.5 rounded-full'
							style={{ backgroundColor: color, opacity: 0.7 }}
						/>
					))}
					<span className='ml-3 text-[10px] text-neutral-600 tracking-widest'>
						~/portfolio/projects
					</span>
				</div>

				<div className='p-5 md:p-6'>
					{/* <div className='mb-5 flex items-center justify-between'>
						<h2 className='text-xl md:text-2xl font-semibold text-white'>
							Projects
						</h2>
						<span className='text-[10px] text-neutral-600 tracking-widest'>
							{projects.length} items
						</span>
					</div> */}

					<motion.div
						className='flex flex-wrap gap-4'
						variants={list}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.2 }}
					>
						{projects.map((project) => (
							<motion.div
								key={project.id}
								variants={item}
								className='w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]'
							>
								<Project data={project} />
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default MyProjects;
