"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { data } from "../Data/aboutData";

const calculateAge = (dob) => {
	const diff = Date.now() - new Date(dob).getTime();
	return Math.abs(new Date(diff).getUTCFullYear() - 1970);
};

// ── animation variants ────────────────────────────────────────────────────────
const slideUp = {
	hidden: { opacity: 0, y: 22 },
	visible: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
	}),
};

// ── subcomponents ─────────────────────────────────────────────────────────────
function MetaRow({ k, value, index, accent }) {
	return (
		<motion.div
			variants={slideUp}
			custom={index}
			className='flex items-start gap-2 py-1.5 border-b border-neutral-800/50 last:border-0 group'
		>
			<span className='text-neutral-600 text-[10px] w-14 flex-shrink-0 pt-0.5'>
				{k}:
			</span>
			<span
				className='text-xs font-mono leading-relaxed'
				style={{ color: accent || "#d4d4d4" }}
			>
				{value}
			</span>
		</motion.div>
	);
}

// ── main ──────────────────────────────────────────────────────────────────────
export default function AboutPageContent() {
	const { bio, name, img, email, country } = data;
	const age = calculateAge("2000-01-16");

	const bioParagraphs = bio.trim().split("\n\n");

	return (
		<section
			id='about'
			className='w-full max-w-5xl mx-auto py-8 px-4'
			style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
		>
			{/* ── file tab ── */}
			<motion.div
				initial={{ opacity: 0, y: -8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.35 }}
				className='flex items-center gap-1 px-4'
			>
				{["about.md"].map((tab, i) => (
					<div
						key={tab}
						className={`px-3 py-1.5 text-[10px] rounded-t-md border-t border-x ${
							i === 0
								? "border-neutral-700 bg-[#0d0d0d] text-neutral-300"
								: "border-transparent text-neutral-600"
						}`}
					>
						{tab}
					</div>
				))}
			</motion.div>

			{/* ── card ── */}
			<motion.div
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
				className='rounded-b-xl rounded-tr-xl border border-neutral-800 bg-[#0d0d0d] overflow-hidden'
			>
				{/* titlebar */}
				<div className='flex items-center gap-1.5 px-4 py-2.5 border-b border-neutral-800 bg-[#0a0a0a]'>
					{["#ef4444", "#eab308", "#22c55e"].map((c) => (
						<div
							key={c}
							className='w-2.5 h-2.5 rounded-full'
							style={{ backgroundColor: c, opacity: 0.7 }}
						/>
					))}
					<span className='ml-3 text-[10px] text-neutral-600 tracking-widest'>
						~/portfolio/about.md
					</span>
					<div className='ml-auto flex items-center gap-2'>
						<span className='text-[10px] text-neutral-700'>markdown</span>
						<motion.div
							className='w-1.5 h-1.5 rounded-full bg-emerald-400'
							animate={{ opacity: [1, 0.2, 1] }}
							transition={{ duration: 2.2, repeat: Infinity }}
						/>
					</div>
				</div>

				{/* body */}
				<div className='grid grid-cols-1 lg:grid-cols-[300px_1fr] divide-y lg:divide-y-0 lg:divide-x divide-neutral-800'>
					{/* ── LEFT: identity panel ── */}
					<motion.div
						className='p-6 flex flex-col gap-6'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.2 }}
					>
						{/* avatar + glow */}
						<motion.div
							variants={slideUp}
							custom={0}
							className='relative w-fit mx-auto lg:mx-0'
						>
							<div className='absolute inset-0 rounded-xl bg-emerald-400/10 blur-xl scale-110' />
							<div className='relative rounded-xl overflow-hidden border border-neutral-700 w-[100px] h-[100px]'>
								<Image src={img} fill className='object-cover' alt='profile' />
							</div>
							{/* status badge */}
							<div className='absolute -bottom-2 -right-2 flex items-center gap-1 bg-[#0d0d0d] border border-neutral-700 rounded-full px-2 py-0.5'>
								<motion.div
									className='w-1.5 h-1.5 rounded-full bg-emerald-400'
									animate={{ opacity: [1, 0.2, 1] }}
									transition={{ duration: 2, repeat: Infinity }}
								/>
								<span className='text-[9px] text-emerald-400'>available</span>
							</div>
						</motion.div>

						{/* meta fields */}
						<motion.div
							className='space-y-0'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
						>
							{/* <p className='text-[10px] text-neutral-600 mb-2 tracking-widest'>
								// identity
							</p> */}
							<MetaRow k='name' value={name} index={1} accent='#e5e5e5' />
							<MetaRow k='age' value={`${age} yrs`} index={2} />
							<MetaRow k='country' value={country} index={3} />
							<MetaRow k='email' value={email} index={4} accent='#38bdf8' />
						</motion.div>
					</motion.div>

					{/* ── RIGHT: bio ── */}
					<div className='p-6 md:p-8 flex flex-col gap-6'>
						{/* heading */}
						<motion.div
							variants={slideUp}
							custom={0}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							className='flex items-center gap-3'
						>
							<span className='text-neutral-600 text-xs'>#</span>
							<h2 className='text-white text-base font-semibold tracking-tight'>
								About Me
							</h2>
							<div className='flex-1 h-px bg-neutral-800' />
							<span className='text-[10px] text-neutral-700'>
								{bioParagraphs.length}p
							</span>
						</motion.div>

						{/* bio paragraphs with line numbers */}
						<div className='space-y-5'>
							{bioParagraphs.map((para, pi) => (
								<motion.div
									key={pi}
									variants={slideUp}
									custom={pi + 1}
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true, amount: 0.2 }}
									className='flex gap-4'
								>
									{/* left gutter */}
									<div className='flex flex-col items-end gap-[1.6rem] pt-0.5 select-none'>
										{para.split(". ").map((_, si) => (
											<span
												key={si}
												className='text-[10px] text-neutral-800 leading-none'
											>
												{pi * 10 + si + 1}
											</span>
										))}
									</div>
									{/* border */}
									<div className='w-px bg-neutral-800 flex-shrink-0' />
									{/* text */}
									<p className='text-neutral-400 text-xs leading-[1.9] flex-1'>
										{para}
									</p>
								</motion.div>
							))}
						</div>

						{/* blockquote callout */}
						<motion.div
							variants={slideUp}
							custom={bioParagraphs.length + 2}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							className='border-l-2 border-emerald-400/40 pl-4 mt-2'
						>
							<p className='text-emerald-400/70 text-[11px] italic leading-relaxed'>
								&quot;Clean code, clear thinking, zero compromises on
								quality.&quot;
							</p>
						</motion.div>

						{/* bottom meta */}
						<motion.div
							variants={slideUp}
							custom={bioParagraphs.length + 3}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							className='flex items-center justify-between pt-4 border-t border-neutral-800/60 mt-auto'
						>
							<span className='text-[10px] text-neutral-700'>
								last_modified: 2025-02-28
							</span>
							<div className='flex gap-1'>
								{[...Array(4)].map((_, i) => (
									<motion.div
										key={i}
										className='w-1 h-1 rounded-full bg-emerald-400'
										animate={{ opacity: [0.1, 0.6, 0.1] }}
										transition={{
											duration: 1.8,
											delay: i * 0.25,
											repeat: Infinity,
										}}
									/>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</motion.div>

			{/* status bar */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.6 }}
				className='flex items-center justify-between mt-3 px-1'
			>
				<span className='text-[10px] text-neutral-700'>
					UTF-8 · LF · markdown
				</span>
				<span className='text-[10px] text-neutral-700'>
					{bio.split(" ").length} words · {bioParagraphs.length} paragraphs
				</span>
			</motion.div>
		</section>
	);
}
