"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Project = (props) => {
	const { imgUrl, title, alt, description, githubUrl, url } = props.data;

	const imageSrc =
		typeof imgUrl === "string"
			? imgUrl
			: imgUrl?.src || imgUrl?.default?.src || imgUrl?.default || null;

	const isExternal = (link) =>
		typeof link === "string" && /^https?:\/\//i.test(link);
	const isValidLink = (link) =>
		typeof link === "string" && link.trim().length > 0 && link !== "/";
	const hasDemo = isValidLink(url);
	const hasSource = isValidLink(githubUrl);

	return (
		<motion.article
			className='relative w-full rounded-xl overflow-hidden border border-neutral-800 bg-[#0a0a0a]'
			whileHover={{ y: -4, scale: 1.01 }}
			transition={{ type: "spring", stiffness: 220, damping: 18 }}
			tabIndex={0}
			role='article'
		>
			<div className='flex items-center gap-1.5 px-3 py-2 border-b border-neutral-800 bg-[#080808]'>
				{/* {["#ef4444", "#eab308", "#22c55e"].map((color) => (
					<div
						key={color}
						className='w-2 h-2 rounded-full'
						style={{ backgroundColor: color, opacity: 0.65 }}
					/>
				))} */}
				<span className='text-[10px] text-neutral-600 truncate'>
					{title}.md
				</span>
			</div>

			<div className='relative h-32 w-full overflow-hidden'>
				{imageSrc ? (
					<Image
						className='block object-cover w-full h-full'
						src={imageSrc}
						alt={alt || title}
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 320px'
					/>
				) : (
					<div className='h-full w-full bg-neutral-800' aria-hidden='true' />
				)}
				<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity'></div>
			</div>

			<div className='p-3.5'>
				<Link
					href={url}
					className='text-white font-semibold text-sm block hover:underline'
					target={isExternal(url) ? "_blank" : undefined}
					rel={isExternal(url) ? "noreferrer" : undefined}
				>
					{title}
				</Link>
				<p className='text-neutral-400 text-xs mt-2 line-clamp-2'>
					{description}
				</p>

				<div className='mt-3.5 flex items-center gap-3'>
					{hasDemo && (
						<Link
							href={url}
							className='inline-flex items-center gap-1 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] text-emerald-400 hover:bg-emerald-400/15'
							target={isExternal(url) ? "_blank" : undefined}
							rel={isExternal(url) ? "noreferrer" : undefined}
						>
							<span className='opacity-70'>→</span>
							Demo
						</Link>
					)}
					{hasSource && (
						<Link
							href={githubUrl}
							className='text-[11px] text-neutral-400 hover:text-white underline-offset-2 hover:underline'
							target={isExternal(githubUrl) ? "_blank" : undefined}
							rel={isExternal(githubUrl) ? "noreferrer" : undefined}
						>
							Source
						</Link>
					)}
				</div>
			</div>
		</motion.article>
	);
};

export default Project;
