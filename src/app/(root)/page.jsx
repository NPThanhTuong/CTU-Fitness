import IntroduceSection from "@/components/Main/IntroduceSection";
import PrimarySection from "@/components/Main/PrimarySection";
import SecondarySection from "@/components/Main/SecondarySection";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import BenefitItem from "@/components/Main/BenefitItem";
import IntroduceItem from "@/components/Main/IntroduceItem";
import ServiceTabs from "@/components/Main/ServicesTabs";
import TraningEquipmentHighlight from "@/components/Main/TraningEquipmentHighlight";
import TrainerHighlightList from "@/components/Main/TrainerHighlightList";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Home() {
	return (
		<main className="">
			<IntroduceSection />
			<PrimarySection
				title={
					<>
						Lịch <span className="text-primary"> hoạt động</span>
					</>
				}
				desc="Sức mạnh không đến từ năng lực thể chất. Nó đến từ ý chí không chịu khuất phục."
			>
				<div className="grid grid-cols-1 gap-9 lg:grid-cols-2 mt-10 lg:gap-12 lg:mt-16">
					<div className="lg:col-span-2">
						<div>
							<h2 className="font-bold text-primary text-3xl uppercase">
								CTU Fitness
							</h2>

							<p className="font-bold text-gray-800 text-lg mt-10">
								Khu 2, Đ. 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. Cần Thơ
							</p>
						</div>
					</div>
					<div>
						<h4 className="text-primary font-semibold text-2xl uppercase mt-8 mb-4">
							Giờ tập luyện
						</h4>
						<div>
							<div className="mb-1">
								<span className="font-bold text-gray-800">
									M / T / W / TH / F:
								</span>
								<span className="font-light ms-1">4:00 am - 12:00 am</span>
							</div>
							<div className="mb-1">
								<span className="font-bold text-gray-800">Saturday:</span>
								<span className="font-light ms-1">4:00 am - 10:00 pm</span>
							</div>
							<div>
								<span className="font-bold text-gray-800">Sunday:</span>
								<span className="font-light ms-1">7:00 am - 4:00 pm</span>
							</div>
						</div>
						<Link
							href="tel: 02923831530"
							className="flex justify-center items-center px-4 py-5 mt-10 bg-primary text-white hover:cursor-pointer hover:opacity-85 transition-all w-72"
						>
							<PhoneIcon className="size-8 me-5" />
							<span>0292 3831 530</span>
						</Link>
						<Link
							href="https://maps.app.goo.gl/1sn1YWcGaeydR3og6"
							className="flex justify-center items-center px-4 py-5 mt-7 mb-3 bg-primary text-white hover:cursor-pointer hover:opacity-85 transition-all w-72"
						>
							<MapPinIcon className="size-8 me-5" />
							<span>Xem trên bản đồ</span>
						</Link>

						<Link
							href="mailto:dhctfitness@ctu.edu.vn"
							className="text-primary font-extrabold text-lg"
						>
							dhctfitness@ctu.edu.vn
						</Link>
					</div>
					<div>
						<h4 className="text-primary font-semibold text-2xl uppercase mt-8 mb-4">
							Giờ tư vấn
						</h4>
						<div>
							<div className="mb-1">
								<span className="font-bold text-gray-800">M / T / W / TH:</span>
								<span className="font-light ms-1">
									8:00 am - 12:00 pm, 4:00 pm - 8:00 pm
								</span>
							</div>
							<div className="mb-1">
								<span className="font-bold text-gray-800">F / SA:</span>
								<span className="font-light ms-1">8:00 am - 12:00 pm</span>
							</div>
							<div>
								<span className="font-bold text-gray-800">Sunday:</span>
								<span className="font-light ms-1">Đóng cửa</span>
							</div>
						</div>
						<Link
							href="tel: 0292834765"
							className="flex justify-center items-center px-4 py-5 mt-10 bg-primary text-white hover:cursor-pointer hover:opacity-85 transition-all w-72"
						>
							<PhoneIcon className="size-8 me-5" />
							<span>0292 834 765</span>
						</Link>
					</div>
				</div>
			</PrimarySection>
			<SecondarySection bgImage="bg-section-secondary">
				<h2 className="uppercase text-white text-4xl font-bold text-center">
					Don&apos;t <span className="text-primary">think</span>, begin{" "}
					<span className="text-primary">today!</span>
				</h2>
				<p className="text-white text-center max-w-[800px] my-7">
					Chỉ ᴄó những người kỷ luật mới thực ѕự ᴄó đượᴄ tự do. Nếu bạn không ᴄó
					kỷ luật, bạn ѕẽ tự biến mình thành nô lệ cho tâm trạng, cho đam mê của
					mình.
				</p>
				<Link href="/register-member">
					<Button className="bg-primary hover:scale-105 transition-all">
						Tham gia ngay
					</Button>
				</Link>
			</SecondarySection>
			<PrimarySection
				title={
					<>
						Vì sao là <span className="text-primary">CTU Fitness</span>
					</>
				}
				desc="Chúng tôi luôn nỗ lực truyền tải những kiến thức đúng và đủ để khách hàng có thể áp dụng và hình thành một lối sống khỏe không chỉ giới hạn trong phạm vi tập luyện."
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
					Chỉ ᴄó những người kỷ luật mới thực ѕự ᴄó đượᴄ tự do. Nếu bạn không ᴄó
					kỷ luật, bạn ѕẽ tự biến mình thành nô lệ cho tâm trạng, cho đam mê của
					mình.
				</p>
				<Link href="/register-member">
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
				s
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
					Chỉ ᴄó những người kỷ luật mới thực ѕự ᴄó đượᴄ tự do. Nếu bạn không ᴄó
					kỷ luật, bạn ѕẽ tự biến mình thành nô lệ cho tâm trạng, cho đam mê của
					mình.
				</p>

				<Link href="/register-member">
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
