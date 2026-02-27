"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiFacebook, SiGithub, SiLinkedin, SiFiverr } from "react-icons/si";
import { data } from "../Data/aboutData";

const socialIcons = {
	facebook: SiFacebook,
	github: SiGithub,
	linkedin: SiLinkedin,
	fiverr: SiFiverr,
};

// ── animation variants ────────────────────────────────────────────────────────
const stagger = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1 } },
};

const slideUp = {
	hidden: { opacity: 0, y: 28 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
	},
};

const fadeIn = {
	hidden: { opacity: 0 },
	visible: (i) => ({
		opacity: 1,
		transition: { delay: i * 0.07, duration: 0.4 },
	}),
};

// ── components ────────────────────────────────────────────────────────────────
function Cursor() {
	return (
		<motion.span
			className='inline-block w-[2px] h-[2em] bg-emerald-400 align-middle ml-1 -mt-2'
			animate={{ opacity: [1, 0, 1] }}
			transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
		/>
	);
}

function LineNumber({ n }) {
	return (
		<span className='select-none text-neutral-700 text-[10px] w-5 text-right flex-shrink-0'>
			{n}
		</span>
	);
}

function SkillRow({ tag, label, items, index }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -12 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
			whileHover={{ x: 4, transition: { duration: 0.15 } }}
			className='group flex gap-3 items-start py-2.5 border-b border-neutral-800/60 last:border-0'
		>
			<span className='text-[10px] text-neutral-600 mt-0.5 font-mono w-5 flex-shrink-0'>
				{tag}
			</span>
			<div className='flex-1 min-w-0'>
				<span className='text-[10px] tracking-widest uppercase text-emerald-400/80 font-mono'>
					{label}
				</span>
				<p className='text-neutral-400 text-[11px] leading-relaxed font-mono mt-0.5'>
					{items}
				</p>
			</div>
			<motion.div
				className='w-1 h-1 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100'
				transition={{ duration: 0.15 }}
			/>
		</motion.div>
	);
}

// ── main ──────────────────────────────────────────────────────────────────────
export default function HeroSection() {
	const { email, bio, socials = [], technicalSkills = [] } = data;

	return (
		<section
			className='w-full min-h-screen bg-[#080808] flex items-center justify-center px-4 py-8'
			style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
		>
			<div className='w-full max-w-6xl'>
				{/* ── file tab bar ── */}
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					className='flex items-center gap-1 mb-0 px-4'
				>
					{["README.md", "skills.yaml"].map((tab, i) => (
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

				{/* ── main card ── */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
					className='rounded-b-xl rounded-tr-xl border border-neutral-800 bg-[#0d0d0d] overflow-hidden'
				>
					{/* top bar */}
					<div className='flex items-center gap-1.5 px-4 py-2.5 border-b border-neutral-800 bg-[#0a0a0a]'>
						{["#ef4444", "#eab308", "#22c55e"].map((c) => (
							<div
								key={c}
								className='w-2.5 h-2.5 rounded-full'
								style={{ backgroundColor: c, opacity: 0.7 }}
							/>
						))}
						<span className='ml-3 text-[10px] text-neutral-600 tracking-widest'>
							~/portfolio/README.md
						</span>
					</div>

					{/* content */}
					<div className='grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] divide-y lg:divide-y-0 lg:divide-x divide-neutral-800'>
						{/* ── LEFT: bio ── */}
						<div className='p-6 md:p-8 flex flex-col justify-between gap-8'>
							<motion.div
								variants={stagger}
								initial='hidden'
								animate='visible'
								className='space-y-6'
							>
								{/* line numbers + name */}
								<motion.div variants={slideUp} className='space-y-1'>
									<div className='flex gap-3'>
										<LineNumber n='1' />
										<span className='text-neutral-600 text-xs'># About</span>
									</div>
									<div className='flex gap-3 items-baseline'>
										<LineNumber n='2' />
										<span className='text-neutral-600 text-xs'>{"//"}</span>
									</div>
									<div className='flex gap-3 items-baseline'>
										<LineNumber n='3' />
										<div>
											<span className='text-neutral-500 text-xs'>name: </span>
											<span className='text-white text-2xl md:text-3xl font-bold tracking-tight'>
												Ashraf Uddin
											</span>
											<Cursor />
										</div>
									</div>
									<div className='flex gap-3 items-baseline'>
										<LineNumber n='4' />
										<div>
											<span className='text-neutral-500 text-xs'>role: </span>
											<span className='text-emerald-400 text-xs'>
												Fullstack Engineer
											</span>
										</div>
									</div>
									<div className='flex gap-3'>
										<LineNumber n='5' />
										<div>
											<span className='text-neutral-500 text-xs'>status: </span>
											<span className='inline-flex items-center gap-1.5 text-[10px] text-emerald-400'>
												<motion.span
													className='w-1.5 h-1.5 rounded-full bg-emerald-400'
													animate={{ opacity: [1, 0.2, 1] }}
													transition={{ duration: 2, repeat: Infinity }}
												/>
												open_to_work
											</span>
										</div>
									</div>
								</motion.div>

								{/* bio blockquote */}
								<motion.div
									variants={slideUp}
									className='border-l-2 border-neutral-700 pl-4'
								>
									<p className='text-neutral-400 text-xs leading-relaxed'>
										{bio}
									</p>
								</motion.div>

								{/* CTA buttons */}
								<motion.div variants={slideUp} className='flex flex-wrap gap-3'>
									<Link
										href={`mailto:${email}`}
										className='inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-700 text-neutral-300 text-xs hover:border-neutral-500 hover:text-white transition-all duration-200'
									>
										<span className='text-neutral-600'>$</span> contact --email
									</Link>
									<Link
										href='/#about'
										className='inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-xs hover:bg-emerald-400/15 hover:border-emerald-400/50 transition-all duration-200'
									>
										<span className='opacity-60'>→</span> view --about
									</Link>
								</motion.div>
							</motion.div>

							{/* socials */}
							<motion.div
								className='flex items-center gap-2'
								initial='hidden'
								animate='visible'
							>
								<span className='text-[10px] text-neutral-600 mr-1 tracking-widest'>
									LINKS
								</span>
								<div className='flex-1 h-px bg-neutral-800' />
								<div className='flex items-center gap-2'>
									{socials.map((item, i) => {
										const Icon = socialIcons[item.key];
										if (!Icon) return null;
										return (
											<motion.a
												key={item.id || item.key}
												href={item.href}
												target='_blank'
												rel='noreferrer'
												variants={fadeIn}
												custom={i}
												whileHover={{ y: -3, scale: 1.1 }}
												transition={{ type: "spring", stiffness: 400 }}
												className='flex items-center justify-center w-8 h-8 rounded-md border border-neutral-800 bg-neutral-900 text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors duration-150'
											>
												<Icon className='text-sm' />
											</motion.a>
										);
									})}
								</div>
							</motion.div>
						</div>

						{/* ── RIGHT: skills.yaml ── */}
						<div className='p-6 md:p-8'>
							<div className='flex items-center gap-2 mb-5'>
								<span className='text-[10px] text-neutral-600 tracking-widest uppercase'>
									skills.yaml
								</span>
								<div className='flex-1 h-px bg-neutral-800' />
								<span className='text-[10px] text-neutral-700'>
									{technicalSkills.length} groups
								</span>
							</div>

							{/* yaml header */}
							<div className='mb-3 space-y-0.5'>
								<p className='text-[10px] text-neutral-600 font-mono'>
									technical_skills:
								</p>
							</div>

							<div className='space-y-0'>
								{technicalSkills.map((group, index) => (
									<SkillRow key={group.label} {...group} index={index} />
								))}
							</div>

							{/* decorative footer */}
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.5 }}
								className='mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between'
							>
								<span className='text-[10px] text-neutral-700'>
									last_updated: 2025-02-28
								</span>
								<div className='flex gap-1'>
									{[...Array(5)].map((_, i) => (
										<motion.div
											key={i}
											className='w-1 h-1 rounded-full bg-emerald-400'
											initial={{ opacity: 0.1 }}
											whileInView={{ opacity: [0.1, 0.6, 0.1] }}
											viewport={{ once: false }}
											transition={{
												duration: 1.5,
												delay: i * 0.2,
												repeat: Infinity,
											}}
										/>
									))}
								</div>
							</motion.div>
						</div>
					</div>
				</motion.div>

				{/* bottom meta row */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7, duration: 0.4 }}
					className='flex items-center justify-between mt-3 px-1'
				>
					<span className='text-[10px] text-neutral-700'>
						UTF-8 · LF · markdown
					</span>
					<span className='text-[10px] text-neutral-700'>Ln 1, Col 1</span>
				</motion.div>
			</div>
		</section>
	);
}
