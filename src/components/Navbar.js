"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import { HiHome, HiUser, HiBriefcase, HiClock } from "react-icons/hi2";
import { usePathname } from "next/navigation";

const navItems = [
	{ href: "/", label: "Home", Icon: HiHome },
	{ href: "/#about", label: "About", Icon: HiUser },
	{ href: "/#projects", label: "Projects", Icon: HiBriefcase },
	{ href: "/#experience", label: "Experience", Icon: HiClock },
];

function Navbar() {
	const [open, setOpen] = useState(false);
	const [activeHash, setActiveHash] = useState("");
	const pathname = usePathname();

	const handleNavClick = (href, shouldCloseMenu = false) => {
		if (shouldCloseMenu) setOpen(false);
		if (href === "/") {
			setActiveHash("");
			return;
		}
		if (href.startsWith("/#")) {
			setActiveHash(href.replace("/", ""));
		}
	};

	useEffect(() => {
		const updateHash = () => setActiveHash(window.location.hash || "");
		updateHash();
		window.addEventListener("hashchange", updateHash);
		return () => window.removeEventListener("hashchange", updateHash);
	}, []);

	const activeHref = useMemo(() => {
		if (pathname !== "/") return pathname;
		return activeHash ? `/${activeHash}` : "/";
	}, [pathname, activeHash]);

	return (
		<>
			<button
				className='md:hidden p-2 text-neutral-300 rounded-md border border-neutral-700 bg-neutral-900/70 hover:bg-neutral-800/80 transition-colors'
				onClick={() => setOpen(!open)}
				aria-label='Toggle navigation'
			>
				{open ? <CgClose size={20} /> : <CgMenuGridO size={20} />}
			</button>

			<nav className='hidden md:flex items-center gap-1 rounded-md  bg-neutral-900/70 px-1.5 py-1 text-neutral-300'>
				{navItems.map(({ href, label, Icon }) => (
					<motion.div
						key={label}
						whileHover={{ y: -1 }}
						whileTap={{ scale: 0.98 }}
					>
						{(() => {
							const isActive = activeHref === href;
							return (
								<Link
									href={href}
									onClick={() => handleNavClick(href)}
									className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs tracking-wide transition-colors ${
										isActive
											? "bg-neutral-800 text-white"
											: "hover:text-white hover:bg-neutral-800/80"
									}`}
								>
									<Icon
										className={`text-sm ${isActive ? "text-emerald-400" : ""}`}
									/>
									<span>{label}</span>
								</Link>
							);
						})()}
					</motion.div>
				))}
			</nav>

			{open && (
				<div className='md:hidden absolute top-14 right-0 w-52 rounded-xl border border-neutral-700 bg-[#0d0d0d]/95 backdrop-blur shadow-lg p-3'>
					<ul className='flex flex-col gap-3'>
						{navItems.map(({ href, label, Icon }) => (
							<li key={label}>
								{(() => {
									const isActive = activeHref === href;
									return (
										<Link
											href={href}
											onClick={() => handleNavClick(href, true)}
											className={`flex items-center gap-2 py-2 px-2 rounded-md text-sm transition-colors ${
												isActive
													? "bg-neutral-800 text-white"
													: "hover:bg-neutral-800/80"
											}`}
										>
											<Icon
												className={`text-sm ${isActive ? "text-emerald-400" : "text-neutral-400"}`}
											/>
											<span>{label}</span>
										</Link>
									);
								})()}
							</li>
						))}
						<li>
							<Link
								href='/contact'
								onClick={() => setOpen(false)}
								className='mt-1 inline-flex items-center gap-2 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-400'
							>
								<span className='opacity-70'>→</span>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			)}
		</>
	);
}

export default Navbar;
