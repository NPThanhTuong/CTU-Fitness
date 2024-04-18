import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import {
	FacebookFooterIcon,
	LinkedInFooterIcon,
	YoutubeFooterIcon,
} from "@/icons";

function Footer() {
	return (
		<footer className="w-full bg-section-four bg-center bg-cover">
			<div className="container mx-auto px-3 py-20">
				<div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
					<div className="lg:col-span-2">
						<div className="flex items-center text-white font-bold text-4xl uppercase gap-2">
							<Image
								src="/images/logo-ctu.png"
								width={80}
								height={80}
								alt="Logo CTU"
							/>
							CTU <span className="text-primary"> Fitness</span>
						</div>
						<ul className="mt-5">
							<li className="flex items-start text-white hover:text-primary transition-all mb-3">
								<MapPinIcon className="size-6 text-primary me-2" />
								<span>Khu 2, Đ. 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. CT</span>
							</li>
							<li className="flex items-start text-white hover:text-primary transition-all mb-3">
								<PhoneIcon className="size-6 text-primary me-2" />
								<span>ĐT: +84292 3831 530; 3838 237; 3832 663</span>
							</li>
							<li className="flex items-start text-white hover:text-primary transition-all mb-3">
								<EnvelopeIcon className="size-6 text-primary me-2" />
								<span>dhctfitness@ctu.edu.vn</span>
							</li>
						</ul>
						<ul className="mt-6 flex items-center gap-4">
							<li>
								<FacebookFooterIcon
									className="text-gray-400 hover:cursor-pointer hover:text-primary transition-all"
									width="2.2rem"
									height="2.2rem"
								/>
							</li>
							<li>
								<LinkedInFooterIcon
									className="text-gray-400 hover:cursor-pointer hover:text-primary transition-all"
									width="2.2rem"
									height="2.2rem"
								/>
							</li>
							<li>
								<YoutubeFooterIcon
									className="text-gray-400 hover:cursor-pointer hover:text-primary transition-all"
									width="2.8rem"
									height="2.8rem"
								/>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="uppercase font-bold text-xl text-primary tracking-widest">
							Về CTU Fitness
						</h4>
						<ul className="text-white px-3 mt-2 gap-4">
							<li>
								<Link href="/about" className="hover:underline">
									Về CTU Fitness
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/register-membership" className="hover:underline">
									Hội viên
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/" className="hover:underline">
									Cơ sở vật chất phòng tập
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/" className="hover:underline">
									Hỗ trợ tập luyện
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/" className="hover:underline">
									Lớp tập nhóm
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="uppercase font-bold text-xl text-primary tracking-widest">
							Hỗ trợ
						</h4>
						<ul className="text-white px-3 mt-2 gap-4">
							<li>
								<Link href="/" className="hover:underline">
									Tin tức
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/" className="hover:underline">
									Điều khoản và điều kiện
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/" className="hover:underline">
									Xóa tài khoản
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/" className="hover:underline">
									Liên hệ
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="uppercase font-bold text-xl text-primary tracking-widest">
							Chính sách
						</h4>
						<ul className="text-white px-3 mt-2 gap-4">
							<li>
								<Link href="/" className="hover:underline">
									Chính sách bảo mật
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/" className="hover:underline">
									Chính sách thanh toán
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/" className="hover:underline">
									Chính sách giải quyết khiếu nại
								</Link>
							</li>
							<li className="mt-1">
								<Link href="/" className="hover:underline">
									Chính sách bảo vệ dữ liệu cá nhân
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className="border-gray-400" />
			<p className="text-center text-primary py-8">
				Copyright &#169; 2024 CTU Fitness
			</p>
		</footer>
	);
}

export default Footer;
