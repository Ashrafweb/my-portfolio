"use client";
import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/Data/experienceData";

const list = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const item = {
	hidden: { opacity: 0, y: 8 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function ExperienceSection({ className = "" }) {
	return (
		<section
			id='experience'
			className={`w-full max-w-6xl mx-auto px-4 py-10 ${className}`}
		>
			<div className='flex items-center gap-1 mb-0 px-4'>
				<div className='px-3 py-1.5 text-[10px] rounded-t-md border-t border-x border-neutral-700 bg-[#0d0d0d] text-neutral-300'>
					experience.md
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
						~/portfolio/experience
					</span>
				</div>

				<div className='p-5 md:p-6'>
					{/* <div className='mb-5 flex items-center justify-between'>
						<h2 className='text-xl md:text-2xl font-semibold text-white'>
							Experience
						</h2>
						<span className='text-[10px] text-neutral-600 tracking-widest'>
							{experience.length} roles
						</span>
					</div> */}

					<motion.div
						variants={list}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.2 }}
						className='space-y-4'
					>
						{experience.map((exp) => (
							<motion.div
								key={exp.id}
								variants={item}
								className='rounded-xl border border-neutral-800 bg-neutral-900/60 p-5'
							>
								<div className='flex flex-col md:flex-row md:items-start md:justify-between gap-2'>
									<div>
										<h3 className='text-sm md:text-base font-semibold text-white'>
											{exp.role}
										</h3>
										<p className='text-xs text-neutral-400'>
											{exp.company} — {exp.location}
										</p>
									</div>
									<div className='text-[10px] md:text-xs text-neutral-500 tracking-wide'>
										{exp.dateRange}
									</div>
								</div>

								<ul className='mt-3 list-disc list-inside text-neutral-400 text-xs space-y-1.5'>
									{exp.bullets.map((b, i) => (
										<li key={i}>{b}</li>
									))}
								</ul>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
