"use client";

import { Button, Option, Select } from "@material-tailwind/react";
import { Input } from "@/components/midleExport";
import Image from "next/image";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { registerMember } from "@/utils/formActions";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function RegisterMemberPage() {
	const [trainers, setTrainers] = useState([]);
	const [memberPack, setMemberPack] = useState([]);
	const [registerTrainerId, setRegisterTrainerId] = useState("1");
	const [registerPackId, setRegisterPackId] = useState("1");
	const formRef = useRef();

	const handleSubmit = (formData) => {
		registerMember(formData);
		Swal.fire({
			icon: "success",
			title:
				"Bạn đã đăng ký thành công gói thành viên tại CTU Fitness, chúng tôi sẽ sớm liên hệ với bạn.",
			showConfirmButton: false,
			timer: 2000,
		});
		// formRef.current.reset();
	};

	useEffect(() => {
		const getTrainers = async () => {
			const res = await fetch("/api/register-trainers", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const { data } = await res.json();

			setTrainers(data);
		};

		const getMembershipPackages = async () => {
			const res = await fetch("/api/service-packages", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();
			setMemberPack(data);
		};

		getTrainers();
		getMembershipPackages();
	}, []);

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
								action={async (formData) => {
									handleSubmit(formData);
								}}
								ref={formRef}
								className="flex flex-col px-6 py-8 bg-white rounded-md shadow-md gap-6 flex-1"
							>
								<Input
									name="fullname"
									variant="standard"
									label="Full name"
									color="deep-orange"
									type="text"
									required
								/>
								<Input
									name="phoneNumber"
									variant="standard"
									label="Phone number"
									color="deep-orange"
									type="tel"
									maxLength={10}
									minLength={10}
									required
								/>
								<Input
									name="email"
									variant="standard"
									label="Email"
									color="deep-orange"
									type="email"
									required
								/>
								<Select
									variant="standard"
									label="Huấn luyện viên"
									name="trainerId"
									color="deep-orange"
									defaultValue={registerTrainerId}
									onChange={(val) => setRegisterTrainerId(val)}
								>
									{trainers?.map((trainer) => (
										<Option
											value={`${trainer.employeeId}`}
											key={trainer.employeeId}
											className="flex justify-between items-center"
										>
											<span>{trainer.employee.fullname}</span>
										</Option>
									))}
								</Select>

								<Select
									variant="standard"
									label="Gói thành viên"
									name="trainerId"
									color="deep-orange"
									defaultValue={registerPackId}
									onChange={(val) => setRegisterPackId(val)}
								>
									{memberPack?.map((pack) => (
										<Option
											value={`${pack.id}`}
											key={pack.id}
											className="flex justify-between items-center"
										>
											{pack.name}
										</Option>
									))}
								</Select>

								<input
									type="hidden"
									name="trainerId"
									value={registerTrainerId}
								/>
								<input type="hidden" name="packId" value={registerPackId} />

								<div className="flex justify-center">
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
