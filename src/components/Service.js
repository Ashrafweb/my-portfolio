"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineSetting } from "react-icons/ai";
import { FaPaintBrush } from "react-icons/fa";
import { SiGoogletagmanager } from "react-icons/si";
import { ImFire } from "react-icons/im";

const serviceConfig = {
	backend: {
		icon: AiOutlineSetting,
		color: "#CBD5DB",
		accent: "#CBD5DB",
		tag: "01",
		label: "Backend",
	},
	crm: {
		icon: SiGoogletagmanager,
		color: "#38bdf8",
		accent: "#38bdf8",
		tag: "02",
		label: "CRM",
	},
	frontend: {
		icon: FaPaintBrush,
		color: "#fc1484",
		accent: "#fc1484",
		tag: "03",
		label: "Frontend",
	},
	firebase: {
		icon: ImFire,
		color: "#fb923c",
		accent: "#fb923c",
		tag: "04",
		label: "Firebase",
	},
};

function Service({ title, type, index = 0 }) {
	const config = serviceConfig[type] || serviceConfig.backend;
	const Icon = config.icon;

	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
			whileHover={{ y: -3, transition: { duration: 0.2 } }}
			className='group relative overflow-hidden rounded-lg border border-neutral-800 bg-[#0d0d0d] p-5 cursor-default'
			style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
		>
			{/* Accent glow on hover */}
			<motion.div
				className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none'
				style={{
					background: `radial-gradient(ellipse at top left, ${config.accent}12 0%, transparent 70%)`,
				}}
			/>

			{/* Top row: tag + icon */}
			<div className='flex items-start justify-between mb-4'>
				<span className='text-[10px] text-neutral-600 tracking-widest uppercase'>
					/{config.tag}
				</span>
				<motion.div
					whileHover={{ rotate: 8, scale: 1.1 }}
					transition={{ type: "spring", stiffness: 300 }}
					className='w-9 h-9 flex items-center justify-center rounded-md bg-neutral-900 border border-neutral-800'
				>
					<Icon className='text-lg' style={{ color: config.color }} />
				</motion.div>
			</div>

			{/* Label */}
			<div className='mb-1 flex items-center gap-2'>
				<motion.div
					className='w-1.5 h-1.5 rounded-full flex-shrink-0'
					style={{ backgroundColor: config.accent }}
					animate={{ opacity: [1, 0.3, 1] }}
					transition={{
						duration: 2.4,
						repeat: Infinity,
						ease: "easeInOut",
						delay: index * 0.4,
					}}
				/>
				<h5
					className='text-sm font-semibold uppercase tracking-widest'
					style={{ color: config.accent }}
				>
					{config.label}
				</h5>
			</div>

			{/* Title */}
			<p className='text-neutral-400 text-xs leading-relaxed mt-2'>{title}</p>

			{/* Bottom border accent */}
			<motion.div
				className='absolute bottom-0 left-0 h-[1px]'
				style={{ backgroundColor: config.accent }}
				initial={{ width: "0%" }}
				whileHover={{ width: "100%" }}
				transition={{ duration: 0.3, ease: "easeOut" }}
			/>
		</motion.div>
	);
}

// Demo preview
export function ServiceDemo() {
	const services = [
		{
			type: "backend",
			title: "REST APIs, microservices, server logic & database architecture.",
		},
		{
			type: "frontend",
			title: "Component-driven UIs with pixel-perfect design systems.",
		},
		{
			type: "crm",
			title: "Customer pipeline automation and CRM integrations.",
		},
		{
			type: "firebase",
			title: "Realtime databases, auth flows & serverless functions.",
		},
	];

	return (
		<div
			className='min-h-screen bg-[#080808] flex flex-col items-center justify-center p-10'
			style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
		>
			{/* Header */}
			<motion.div
				className='mb-10 text-center'
				initial={{ opacity: 0, y: -16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<p className='text-neutral-600 text-xs tracking-[0.3em] uppercase mb-2'>
					{"// what_i_do"}
				</p>
				<h2 className='text-white text-2xl font-semibold tracking-tight'>
					Services
				</h2>
			</motion.div>

			{/* Grid */}
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl'>
				{services.map((s, i) => (
					<Service key={s.type} {...s} index={i} />
				))}
			</div>
		</div>
	);
}

// Make the single service card the default export so pages importing
// `../../components/Service` receive the `Service` component.
export default Service;
