import Link from "next/link";
import Navbar from "./Navbar";

function Header() {
	return (
		<header className='fixed inset-x-0 top-0 z-50 w-full border-b border-neutral-800 bg-[#0a0a0a]/90 backdrop-blur'>
			<div className='max-w-4xl mx-auto flex items-center justify-between py-3'>
				<Link href='/' className='flex flex-col leading-tight'>
					<span className='text-white text-base md:text-lg font-semibold'>
						Ashraf Uddin
					</span>
					<span className='text-[10px] md:text-xs text-neutral-500 tracking-widest uppercase'>
						Full Stack Developer
					</span>
				</Link>

				<Navbar />
			</div>
		</header>
	);
}

export default Header;
