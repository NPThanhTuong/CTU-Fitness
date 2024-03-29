import IntroduceSection from "@/components/Main/IntroduceSection";
import PrimarySection from "@/components/Main/PrimarySection";
import SecondarySection from "@/components/Main/SecondarySection";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Tooltip,
	Typography,
} from "@/components/midleExport";
import Button from "@/components/Button";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import BenefitItem from "@/components/Main/BenefitItem";
import IntroduceItem from "@/components/Main/IntroduceItem";
import ServiceItem from "@/components/Main/ServiceItem";
import ServiceTabs from "@/components/Main/ServicesTabs";
import CardItem from "@/components/CardItem";
import TraningEquipmentItem from "@/components/Main/TraningEquipmentItem";
import TraningEquipmentHighlight from "@/components/Main/TraningEquipmentHighlight";
import TrainerHighlightList from "@/components/Main/TrainerHighlightList";

export default function Home() {
	return (
		<main className="">
			<IntroduceSection />
			<PrimarySection
				title={
					<>
						Vì sao là <span className="text-primary">CTU Fitness</span>
					</>
				}
				// desc="Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website."
			>
				<div className="grid grid-cols-2 gap-9 lg:grid-cols-4 mt-10 lg:gap-12 lg:mt-16">
					<BenefitItem image="/images/icons/24-hours.png" title="Mở cửa 24/7" />
					<BenefitItem
						image="/images/icons/calendar.png"
						title="Thanh toán hàng tháng, không hợp đồng"
					/>
					<BenefitItem
						image="/images/icons/weights.png"
						title="Thiết bị tập luyện cao cấp"
					/>
					<BenefitItem
						image="/images/icons/yoga.png"
						title="Các lớp tập nhóm miễn phí"
					/>

					<BenefitItem
						image="/images/icons/parking.png"
						title="Đỗ xe miễn phí"
					/>
					<BenefitItem
						image="/images/icons/shower.png"
						title="Tắm nóng lạnh miễn phí"
					/>

					<BenefitItem image="/images/icons/wifi.png" title="Wifi miễn phí" />
					<BenefitItem
						image="/images/icons/water-bottle.png"
						title="Nước uống miễn phí"
					/>
				</div>
			</PrimarySection>
			<SecondarySection bgImage="bg-section-secondary">
				<h2 className="uppercase text-white text-4xl font-bold text-center">
					Don&apos;t <span className="text-primary">think</span>, begin{" "}
					<span className="text-primary">today!</span>
				</h2>
				<p className="text-white text-center max-w-[800px] my-7">
					Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
					ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a
					nisi luctus imperdiet.
				</p>
				<Link href="/signup">
					<Button className="bg-primary hover:scale-105 transition-all">
						Tham gia ngay
					</Button>
				</Link>
			</SecondarySection>
			<PrimarySection
				title={
					<>
						Tập luyện cùng <span className="text-primary">chúng tôi</span>
					</>
				}
				desc="Kéo tạ kéo sức hút. Đánh thức sự tự tin trong bạn"
			>
				<div className="grid grid-cols-1 gap-y-16 mt-10 lg:mt-16">
					<IntroduceItem
						image="/images/ktpgym19.jpg"
						title="Tập luyện vui vẻ"
						desc="Chúng tôi quan niệm rằng không có bất cứ một khoản đầu tư nào quý giá hơn đầu tư cho chính bản thân. Khi đầu tư một cách đúng đắn cho việc tập luyện, những lợi ích mà khách hàng nhận được không chỉ là kết quả mang tính thẩm mỹ về mặt hình thể, mà hơn hết sức khỏe, lối sống cũng"
					/>
					<IntroduceItem
						image="/images/ktpgym10.jpg"
						title="Được hướng dẫn chuẩn xác"
						desc="Chúng tôi quan niệm rằng không có bất cứ một khoản đầu tư nào quý giá hơn đầu tư cho chính bản thân. Khi đầu tư một cách đúng đắn cho việc tập luyện, những lợi ích mà khách hàng nhận được không chỉ là kết quả mang tính thẩm mỹ về mặt hình thể, mà hơn hết sức khỏe, lối sống cũng"
					/>
					<IntroduceItem
						image="/images/ktpgym9.jpg"
						title="Tập luyện vui vẻ"
						desc="Chúng tôi quan niệm rằng không có bất cứ một khoản đầu tư nào quý giá hơn đầu tư cho chính bản thân. Khi đầu tư một cách đúng đắn cho việc tập luyện, những lợi ích mà khách hàng nhận được không chỉ là kết quả mang tính thẩm mỹ về mặt hình thể, mà hơn hết sức khỏe, lối sống cũng"
					/>
					<IntroduceItem
						image="/images/ktpgym18.jpg"
						title="Được hướng dẫn chuẩn xác"
						desc="Chúng tôi quan niệm rằng không có bất cứ một khoản đầu tư nào quý giá hơn đầu tư cho chính bản thân. Khi đầu tư một cách đúng đắn cho việc tập luyện, những lợi ích mà khách hàng nhận được không chỉ là kết quả mang tính thẩm mỹ về mặt hình thể, mà hơn hết sức khỏe, lối sống cũng"
					/>
				</div>
			</PrimarySection>

			<SecondarySection bgImage="bg-section-secondary">
				<h2 className="uppercase text-white text-4xl font-bold text-center">
					Don&apos;t <span className="text-primary">think</span>, begin{" "}
					<span className="text-primary">today!</span>
				</h2>
				<p className="text-white text-center max-w-[800px] my-7">
					Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
					ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a
					nisi luctus imperdiet.
				</p>

				<Link href="/signup">
					<Button className="bg-primary hover:scale-105 transition-all">
						Tham gia ngay
					</Button>
				</Link>
			</SecondarySection>

			<PrimarySection
				title={
					<>
						Thiết bị <span className="text-primary">cao cấp</span>
					</>
				}
				desc="Không đầu tư vào sự hào nhoáng, chúng tôi chú trọng đầu tư vào những loại máy tập chuyên dụng mang lại hiệu quả cao nhất cho khách hàng"
			>
				{/* <ul className="grid grid-cols-1 gap-9 lg:grid-cols-2 mt-10 lg:gap-12 lg:mt-16">
					<li className="flex items-center">
						<Image
							src="/images/features-first-icon.png"
							width={100}
							height={100}
							alt="Features image"
							className="mr-5"
						/>
						<div className="flex-1 text-left">
							<h3 className="text-xl text-gray-800 font-bold">Basic Fitness</h3>
							<p className="text-sm text-gray-600">
								Please do not re-distribute this template ZIP file on any
								template collection website. This is not allowed.
							</p>
							<Link
								href="/program/detail/id"
								className="uppercase text-primary text-sm font-semibold"
							>
								Khám phá thêm
							</Link>
						</div>
					</li>
					<li className="flex items-center">
						<Image
							src="/images/features-first-icon.png"
							width={100}
							height={100}
							alt="Features image"
							className="mr-5"
						/>
						<div className="flex-1 text-left">
							<h3 className="text-xl text-gray-800 font-bold">
								Advanced Muscle Course
							</h3>
							<p className="text-sm text-gray-600">
								You may want to browse through Digital Marketing or Corporate
								HTML CSS templates on our website.
							</p>
							<Link
								href="/program/detail/id"
								className="uppercase text-primary text-sm font-semibold"
							>
								Khám phá thêm
							</Link>
						</div>
					</li>
					<li className="flex items-center">
						<Image
							src="/images/features-first-icon.png"
							width={100}
							height={100}
							alt="Features image"
							className="mr-5"
						/>
						<div className="flex-1 text-left">
							<h3 className="text-xl text-gray-800 font-bold">Basic Fitness</h3>
							<p className="text-sm text-gray-600">
								Please do not re-distribute this template ZIP file on any
								template collection website. This is not allowed.
							</p>
							<Link
								href="/program/detail/id"
								className="uppercase text-primary text-sm font-semibold"
							>
								Khám phá thêm
							</Link>
						</div>
					</li>
					<li className="flex items-center">
						<Image
							src="/images/features-first-icon.png"
							width={100}
							height={100}
							alt="Features image"
							className="mr-5"
						/>
						<div className="flex-1 text-left">
							<h3 className="text-xl text-gray-800 font-bold">
								Advanced Muscle Course
							</h3>
							<p className="text-sm text-gray-600">
								You may want to browse through Digital Marketing or Corporate
								HTML CSS templates on our website.
							</p>
							<Link
								href="/program/detail/id"
								className="uppercase text-primary text-sm font-semibold"
							>
								Khám phá thêm
							</Link>
						</div>
					</li>
					<li className="flex items-center">
						<Image
							src="/images/features-first-icon.png"
							width={100}
							height={100}
							alt="Features image"
							className="mr-5"
						/>
						<div className="flex-1 text-left">
							<h3 className="text-xl text-gray-800 font-bold">Basic Fitness</h3>
							<p className="text-sm text-gray-600">
								Please do not re-distribute this template ZIP file on any
								template collection website. This is not allowed.
							</p>
							<Link
								href="/program/detail/id"
								className="uppercase text-primary text-sm font-semibold"
							>
								Khám phá thêm
							</Link>
						</div>
					</li>
					<li className="flex items-center">
						<Image
							src="/images/features-first-icon.png"
							width={100}
							height={100}
							alt="Features image"
							className="mr-5"
						/>
						<div className="flex-1 text-left">
							<h3 className="text-xl text-gray-800 font-bold">
								Advanced Muscle Course
							</h3>
							<p className="text-sm text-gray-600">
								You may want to browse through Digital Marketing or Corporate
								HTML CSS templates on our website.
							</p>
							<Link
								href="/program/detail/id"
								className="uppercase text-primary text-sm font-semibold"
							>
								Khám phá thêm
							</Link>
						</div>
					</li>
				</ul> */}

				<div className="grid grid-cols-1 gap-4 mt-12 lg:grid-cols-2">
					<Image
						src="/images/ktpgym15.jpg"
						width={500}
						height={500}
						alt="All training equiment image"
						className="w-full rounded-sm lg:order-2"
					/>
					<div>
						<p className="text-gray-800 text-sm">
							Với mục tiêu duy nhất là kết quả của khách hàng, thay vì đầu tư
							vào những tiện nghi hào nhoáng bên ngoài, chúng tôi tập trung vào
							những thiết bị có chất lượng cao, đến từ những thương hiệu hàng
							đầu thế giới, giúp tối ưu hóa quá trình tập luyện.
						</p>
						<p className="text-gray-800 text-sm mt-4">
							Bởi vậy thay vì đầu tư vào hàng dài các máy chạy - ít có hiệu quả
							trong việc tăng cơ, giảm mỡ, Swequity tập trung vào hệ tạ tay, các
							máy tập chuyên biệt và thảm cỏ giữa phòng tập, tạo điều kiện tối
							đa cho kết quả của khách hàng. Những bài tập này là chìa khóa cho
							một hệ cơ xương vững chắc, giúp tạo nên một cơ thể khỏe mạnh, cân
							đối.
						</p>
					</div>
				</div>

				<TraningEquipmentHighlight className="grid grid-cols-1 gap-32 mb-28 lg:grid-cols-3 mt-12" />
			</PrimarySection>
			<SecondarySection bgImage="bg-section-third">
				<h2 className="uppercase text-white text-4xl font-bold text-center">
					Hội viên <span className="text-primary">CTU Fitness</span>
				</h2>

				<ServiceTabs className="mt-12"></ServiceTabs>
			</SecondarySection>
			<PrimarySection
				title={
					<>
						Huấn luyện viên <span className="text-primary">chuyên nghiệp</span>
					</>
				}
				desc="Luôn luôn chia sẻ, quan tâm tận tình với học viên. Đưa ra những bài tập tối ưu nhất."
			>
				<TrainerHighlightList className="grid grid-cols-1 gap-5 lg:grid-cols-3 mt-14"></TrainerHighlightList>
				<div className="flex justify-center">
					<Link
						href="/trainers"
						className="py-3 px-7 text-primary mt-10 rounded-md hover:scale-105 transition-all font-semibold ring-2 ring-primary"
					>
						Khám phá thêm
					</Link>
				</div>
			</PrimarySection>
		</main>
	);
}
