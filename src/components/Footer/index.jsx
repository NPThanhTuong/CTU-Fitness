import Image from "next/image";
import Link from "next/link";

function Footer() {
	return (
		<footer className="w-full bg-section-four bg-center bg-cover">
			<div className="container mx-auto px-3 py-20">
				<div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
					<div>
						<Image
							src="/images/logo-ctu.png"
							width={160}
							height={160}
							alt="logo"
							className="rounded-full"
						/>
						<p className="text-white font-semibold mt-5">
							Our missson is to bring health to you.{" "}
							<span className="text-primary uppercase	">Just do it!</span>
						</p>
					</div>

					<div>
						<h4 className="uppercase font-bold text-xl text-primary tracking-widest">
							Support
						</h4>
						<ul className="text-white px-3 mt-2 gap-4">
							<li>
								<Link href="/about" className="hover:underline">
									About us
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/contact" className="hover:underline">
									Contact
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/social" className="hover:underline">
									Social Media
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="uppercase font-bold text-xl text-primary tracking-widest">
							Support
						</h4>
						<ul className="text-white px-3 mt-2 gap-4">
							<li>
								<Link href="/about" className="hover:underline">
									About us
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/contact" className="hover:underline">
									Contact
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/social" className="hover:underline">
									Social Media
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="uppercase font-bold text-xl text-primary tracking-widest">
							Support
						</h4>
						<ul className="text-white px-3 mt-2 gap-4">
							<li>
								<Link href="/about" className="hover:underline">
									About us
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/contact" className="hover:underline">
									Contact
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/social" className="hover:underline">
									Social Media
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className="border-gray-400" />
			<p className="text-center text-primary py-8">
				Copyright &#169; 2024 Training Studio
			</p>
		</footer>
	);
}

export default Footer;
