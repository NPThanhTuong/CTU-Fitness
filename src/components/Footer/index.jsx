import Image from "next/image";
import Link from "next/link";

function Footer() {
	return (
		<footer className="relative w-full min-h-[900px] lg:min-h-[500px]">
			<div className="absolute inset-0 z-0">
				<img
					src="/images/contact-bg.jpg"
					alt="Footer image"
					className="size-full"
				/>
			</div>
			<div className="absolute inset-0 z-1">
				<div className="container mx-auto py-20 px-3">
					<div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
						<div>
							<Image
								src="/images/logo.png"
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
				<p className="text-center text-primary mt-11">
					Copyright &#169; 2024 Training Studio
				</p>
			</div>
		</footer>
	);
}

export default Footer;
