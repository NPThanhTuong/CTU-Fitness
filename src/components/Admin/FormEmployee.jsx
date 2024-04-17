"use client";
import DatePicker from "@/components/DatePicker";
import {
	Option,
	Radio,
	Select,
	Textarea,
	Input,
	Checkbox,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import FormDeleteImages from "./FormDeleteImage";
import { usePathname } from "next/navigation";

function FormEmployee({ type, business, action, formId }) {
	const pathName = usePathname();
	const { employee, position, department } = business || {};
	const [positionId, setPositionId] = useState(employee?.positionId || 1);
	const [departmentId, setDepartmentId] = useState(employee?.departmentId || 1);
	const [businessTypeId, setBusinessTypeId] = useState(
		employee?.businessTypeId || 1
	);
	const [facilityId, setFacilityId] = useState(employee?.facilityId || 1);

	const [listPosition, setListPosition] = useState([]);
	const [listDepartment, setListDepartment] = useState([]);
	const [listBusinessType, setListBusinessType] = useState([]);
	const [listFacility, setListFacility] = useState([]);

	const [fullnameInput, setFullnameInput] = useState(employee?.fullname || "");
	const [cidInput, setCidInput] = useState(employee?.cid || "");
	const [descriptionInput, setDescriptionInput] = useState(
		employee?.description || ""
	);
	const [addressInput, setAddressInput] = useState(employee?.address || "");
	const [experienceInput, setExperienceInput] = useState(
		employee?.experience || ""
	);
	const [phoneNumberInput, setPhoneNumberInput] = useState(
		employee?.phoneNumber || ""
	);
	const [emailInput, setEmailInput] = useState(employee?.email || "");

	useEffect(() => {
		const getPositions = async () => {
			const res = await fetch("/api/positions", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const positions = await res.json();

			if (res.ok) setListPosition(positions);
		};

		const getDepartments = async () => {
			const res = await fetch("/api/departments", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const departments = await res.json();

			if (res.ok) setListDepartment(departments);
		};

		const getBusinessTypes = async () => {
			const res = await fetch("/api/business-types", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const businessTypes = await res.json();

			if (res.ok) setListBusinessType(businessTypes);
		};

		const getFacilities = async () => {
			const res = await fetch("/api/facilities", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const facilities = await res.json();

			if (res.ok) setListFacility(facilities);
		};

		getBusinessTypes();
		getDepartments();
		getPositions();
		getFacilities();
	}, []);

	return (
		<>
			<form
				action={action}
				id={formId}
				className="grid grid-cols-1 lg:grid-cols-2 gap-5"
			>
				<div>
					<label
						htmlFor="nameEmployee4"
						className="text-gray-800 font-semibold"
					>
						Tên nhân viên:
					</label>
					<Input
						id="nameEmployee4"
						type="text"
						placeholder="Vd: Nguyễn Văn A,..."
						color="deep-orange"
						className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
						labelProps={{
							className: "hidden",
						}}
						name="fullname"
						required
						value={fullnameInput}
						onChange={(e) => setFullnameInput(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="cid4" className="text-gray-800 font-semibold">
						Số căn cước công dân:
					</label>
					<Input
						id="cid4"
						type="text"
						placeholder="Vd: 082319229128,..."
						color="deep-orange"
						className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
						labelProps={{
							className: "hidden",
						}}
						name="cid"
						required
						minLength={12}
						maxLength={12}
						value={cidInput}
						onChange={(e) => setCidInput(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="dob4" className="text-gray-800 font-semibold">
						Ngày sinh:
					</label>
					<DatePicker
						idInput="dob4"
						placeholder="Ngày sinh của nhân viên"
						nameInput="dayOfBirdth"
						required={true}
						defaultValue={employee?.dayOfBirdth}
					/>
				</div>

				<div>
					<label
						htmlFor="businessDate4"
						className="text-gray-800 font-semibold"
					>
						Ngày công tác:
					</label>
					<DatePicker
						idInput="businessDate4"
						placeholder="Ngày sản xuất thiết bị"
						nameInput="businessDate"
						required={true}
						defaultValue={business?.businessDate}
					/>
				</div>

				<div>
					<label htmlFor="email4" className="text-gray-800 font-semibold">
						Email:
					</label>
					<Input
						id="email4"
						type="email"
						placeholder="Vd: abc@gmail.com"
						color="deep-orange"
						className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
						labelProps={{
							className: "hidden",
						}}
						name="email"
						required
						value={emailInput}
						onChange={(e) => setEmailInput(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="phoneNumber4" className="text-gray-800 font-semibold">
						Số điện thoại:
					</label>
					<Input
						id="phoneNumber4"
						type="text"
						placeholder="Vd: 0828748753"
						color="deep-orange"
						className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
						labelProps={{
							className: "hidden",
						}}
						name="phoneNumber"
						required
						minLength={10}
						maxLength={10}
						value={phoneNumberInput}
						onChange={(e) => setPhoneNumberInput(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="address4" className="text-gray-800 font-semibold">
						Địa chỉ:
					</label>
					<Input
						id="address4"
						type="text"
						placeholder="Vd: Số 2, đường 3/2,..."
						color="deep-orange"
						className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
						labelProps={{
							className: "hidden",
						}}
						name="address"
						required
						value={addressInput}
						onChange={(e) => setAddressInput(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="file_input" className="text-gray-800 font-semibold">
						Ảnh đại diện:
					</label>
					<input
						className="block w-full p-2 mt-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
						id="file_input"
						type="file"
						placeholder="Ảnh đại diện của nhân viên"
						name="avatar"
					/>
				</div>

				<div>
					<label htmlFor="experience4" className="text-gray-800 font-semibold">
						Kinh nghiệm:
					</label>
					<Input
						id="experience4"
						type="text"
						placeholder="Vd: 1 năm, 2 năm, 3 năm,..."
						color="deep-orange"
						className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
						labelProps={{
							className: "hidden",
						}}
						name="experience"
						required
						value={experienceInput}
						onChange={(e) => setExperienceInput(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="position4" className="text-gray-800 font-semibold">
						Chức vụ:
					</label>
					<Select
						variant="static"
						id="position4"
						name="position"
						color="deep-orange"
						value={`${position?.id}`}
						onChange={(val) => {
							setPositionId(val);
						}}
					>
						{listPosition.map((position) => (
							<Option key={position.id} value={`${position.id}`}>
								{position.name}
							</Option>
						))}
					</Select>
				</div>

				<div>
					<label htmlFor="department4" className="text-gray-800 font-semibold">
						Phòng ban:
					</label>
					<Select
						variant="static"
						id="department4"
						name="department"
						color="deep-orange"
						value={`${department?.id}`}
						onChange={(val) => {
							setDepartmentId(val);
						}}
					>
						{listDepartment.map((department) => (
							<Option key={department.id} value={`${department.id}`}>
								{department.name}
							</Option>
						))}
					</Select>
				</div>
				<div>
					<label
						htmlFor="businessType4"
						className="text-gray-800 font-semibold"
					>
						Loại công tác:
					</label>
					<Select
						variant="static"
						id="businessType4"
						name="businessType"
						color="deep-orange"
						value={`${business?.businessTypeId}`}
						onChange={(val) => {
							setBusinessTypeId(val);
							console.log(val);
						}}
					>
						{listBusinessType.map((businessType) => (
							<Option key={businessType.id} value={`${businessType.id}`}>
								{businessType.name}
							</Option>
						))}
					</Select>
				</div>
				<div>
					<label htmlFor="facility4" className="text-gray-800 font-semibold">
						Thiết bị thuộc cơ sở:
					</label>
					<Select
						variant="static"
						id="facility4"
						name="facility"
						color="deep-orange"
						value={`${employee?.facilityId}`}
						onChange={(val) => {
							setFacilityId(val);
						}}
					>
						{listFacility.map((facility) => (
							<Option key={facility.id} value={`${facility.id}`}>
								{facility.address}
							</Option>
						))}
					</Select>
				</div>

				<div>
					<label htmlFor="description4" className="text-gray-800 font-semibold">
						Mô tả:
					</label>
					<Textarea
						id="description4"
						name="description"
						color="deep-orange"
						placeholder="Mô tả cụ thể về nhân viên..."
						className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
						labelProps={{
							className: "hidden",
						}}
						value={descriptionInput}
						onChange={(e) => setDescriptionInput(e.target.value)}
						required
					/>
				</div>

				<input type="hidden" value={facilityId.toString()} name="facilityId" />
				<input type="hidden" value={positionId.toString()} name="positionId" />
				<input
					type="hidden"
					value={businessTypeId.toString()}
					name="businessTypeId"
				/>
				<input
					type="hidden"
					value={departmentId.toString()}
					name="departmentId"
				/>
				<input type="hidden" name="oldAvatar" value={employee?.avatar} />

				<input
					type="text"
					name="employeeId"
					defaultValue={employee?.id}
					hidden
				/>
			</form>

			{/* {employee && (
				<FormDeleteImages
					listImage={employee?.equipmentimage}
					revalidatePath={pathName}
				/>
			)} */}

			<div className="lg:col-span-2 text-center mt-4">
				<button
					form={formId}
					type="submit"
					color="deep-orange"
					className="py-3 px-6 min-w-16 bg-primary ring-primary ring-1 rounded-md text-white mt-6 hover:cursor-pointer"
				>
					{type} nhân viên
				</button>
			</div>
		</>
	);
}

export default FormEmployee;
