"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiGmail, SiFiverr, SiWhatsapp } from "react-icons/si";

const container = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
	hidden: { opacity: 0, y: 8 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
	},
};

export default function ContactCard() {
	const contact = {
		email: "ashrafuddin.code@gmail.com",
	};

	return (
		<motion.section
			className='max-w-3xl mx-auto py-8'
			variants={container}
			initial='hidden'
			animate='visible'
		>
			<motion.h1 className='text-3xl font-bold text-white mb-6' variants={item}>
				Contact me
			</motion.h1>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-start'>
				<motion.div
					className='md:col-span-1 bg-neutral-900 p-6 rounded-lg flex flex-col items-center gap-4'
					variants={item}
				>
					<div className='w-20 h-20 rounded-full bg-gradient-to-br from-accent/80 to-accent/50 flex items-center justify-center shadow-md'>
						<SiGmail className='text-black' size={28} />
					</div>

					<motion.a
						href={`mailto:${contact.email}`}
						className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-medium'
						variants={item}
						whileHover={{ scale: 1.03 }}
					>
						Email me
					</motion.a>
				</motion.div>

				<motion.div
					className='md:col-span-2 bg-neutral-900 p-6 rounded-lg'
					variants={item}
				>
					<motion.h2 className='text-xl font-semibold text-white mb-3'>
						Let&apos;s build something together
					</motion.h2>
					<motion.p className='text-gray-300'>
						Send an email to start a conversation — I typically reply within
						24–48 hours.
					</motion.p>
				</motion.div>
			</div>
		</motion.section>
	);
}
