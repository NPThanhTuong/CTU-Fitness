import Button from "@/components/Button";
import { Input } from "@/components/midleExport";
import Image from "next/image";

function RegisterMemberPage() {
	return (
		<main>
			<div className="h-[80px] bg-[#27313b]"></div>
			<section className="relative w-full py-6 min-h-screen h-[800px] lg:h-[600px]">
				<div className="absolute inset-0">
					<img
						src="/images/cta-bg.jpg"
						alt="Back ground"
						loading="lazy"
						className="object-cover size-full"
					/>
				</div>

				<div className="absolute inset-0">
					<div className="container mx-auto px-3 py-12 lg:py-20">
						<div className="flex flex-col gap-16 lg:flex-row">
							<div className="w-full max-w-[600px]">
								<h3 className="text-6xl text-primary font-bold uppercase leading-tight">
									Tham gia tập luyện ngay
								</h3>
								<p className="text-white mt-4">
									Hãy để lại thông tin và chúng tôi sẽ liên hệ bạn trong vòng
									24h! (Khi phát sinh thanh toán, vui lòng chỉ thanh toán cho cơ
									sở CTU Fitness, không giao dịch hay chuyển khoản vào tài khoản
									không phải của cơ sở CTU Fitness)
								</p>
							</div>
							<form
								action="/"
								className="flex flex-col px-6 py-8 bg-white rounded-md shadow-md gap-6 flex-1"
								method="POST"
							>
								<Input
									variant="standard"
									label="Full name"
									color="deep-orange"
								/>
								<Input
									variant="standard"
									label="Phone number"
									color="deep-orange"
								/>
								<Input variant="standard" label="Email" color="deep-orange" />
								<div className="flex justify-center ">
									<button
										type="submit"
										className="py-3 px-12 text-white font-semibold bg-primary hover:scale-105 rounded-md transition-all"
									>
										Đăng ký
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<section className="container mx-auto px-3 py-16">
				<div className="flex justify-around">
					<div className="w-full max-w-[600px]">
						<h3 className="text-6xl text-primary font-bold uppercase">
							LỢI ÍCH CỦA THÀNH VIÊN CTU FITNESS
						</h3>
						<ul className="list-disc pl-7 mt-8 text-gray-800">
							<li>Vị trí CLB thuận tiện</li>
							<li>Chương trình tập luyện không giới hạn</li>
							<li>HLV tiêu chuẩn Quốc Tế </li>
							<li>Đa dạng gói hội viên phù hợp với nhu cầu </li>
							<li>Ưu đãi sức khoẻ từ ứng dụng đổi điểm lấy quà Livwell</li>
							<li>
								Bảo hiểm tai nạn cá nhân lên đến 01 tỷ đồng dành cho hội viên
								mới
							</li>
							<li>Đa dạng ưu đãi từ đối tác</li>
						</ul>
					</div>

					<Image
						src="/images/training-image-03.jpg"
						width={500}
						height={100}
						alt="Illustration image"
						className="hidden object-cover lg:block"
					/>
				</div>
			</section>
		</main>
	);
}

export default RegisterMemberPage;
