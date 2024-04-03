"use client";
import DatePicker from "@/components/DatePicker";
import {
	Option,
	Radio,
	Select,
	Textarea,
	Button,
	Input,
	Checkbox,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

function FormEquipment({ type, equipment, action }) {
	const [facility, setFacility] = useState("1");
	const [equipmentType, setEquipmentType] = useState("1");
	const [listFacility, setListFacility] = useState([]);
	const [listEquipmentType, setListEquipmentType] = useState([]);
	const [listMuscle, setListMuscle] = useState([]);
	const [muscleInput, setMuscleInput] = useState([]);

	useEffect(() => {
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

		const getElementTypes = async () => {
			const res = await fetch("/api/equipment-types", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const equipmentTypes = await res.json();

			if (res.ok) setListEquipmentType(equipmentTypes);
		};

		const getMuscles = async () => {
			const res = await fetch("/api/muscles", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const muscles = await res.json();

			if (res.ok) setListMuscle(muscles);
		};

		getMuscles();
		getElementTypes();
		getFacilities();
	}, []);

	const handleCheckboxChange = (event) => {
		const option = event.target.name;
		if (event.target.checked) {
			setMuscleInput([...muscleInput, { muscleName: option }]);
		} else {
			setMuscleInput(muscleInput.filter((opt) => opt.muscleName !== option));
		}
	};

	return (
		<form action={action} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
			<div>
				<label htmlFor="nameEquipment4" className="text-gray-800 font-semibold">
					Tên thiết bị:
				</label>
				<Input
					id="nameEquipment4"
					type="text"
					placeholder="Vd: Máy tập tay trước,..."
					color="deep-orange"
					className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
					labelProps={{
						className: "hidden",
					}}
					name="name"
					required
				/>
			</div>
			<div>
				<label htmlFor="origin4" className="text-gray-800 font-semibold">
					Nơi sản xuất:
				</label>
				<Input
					id="origin4"
					type="text"
					placeholder="Vd: Mỹ, Canada,..."
					color="deep-orange"
					className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
					labelProps={{
						className: "hidden",
					}}
					name="origin"
					required
				/>
			</div>

			<div>
				<label htmlFor="importDate4" className="text-gray-800 font-semibold">
					Ngày nhập:
				</label>
				<DatePicker
					idInput="importDate4"
					placeholder="Ngày nhập thiết bị"
					nameInput="importDate"
					required={true}
				/>
			</div>
			<div>
				<label
					htmlFor="manufactureDate4"
					className="text-gray-800 font-semibold"
				>
					Ngày sản xuất:
				</label>
				<DatePicker
					idInput="manufactureDate4"
					placeholder="Ngày sản xuất thiết bị"
					nameInput="manufacturingDate"
					required={true}
				/>
			</div>

			<div>
				<label htmlFor="shelfLife4" className="text-gray-800 font-semibold">
					Hạn dùng kể từ ngày sản xuất:
				</label>
				<Input
					id="shelfLife4"
					type="number"
					placeholder="Vd: 3, 7, 10 (năm),..."
					color="deep-orange"
					className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
					labelProps={{
						className: "hidden",
					}}
					name="shelfLife"
					required
				/>
			</div>
			<div>
				<label htmlFor="price4" className="text-gray-800 font-semibold">
					Trị giá:
				</label>
				<Input
					id="price4"
					type="number"
					placeholder="Vd: 1000, 500 (nghìn),..."
					color="deep-orange"
					className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
					labelProps={{
						className: "hidden",
					}}
					name="price"
					required
					min={1}
					max={1000000}
				/>
			</div>
			<div>
				<label htmlFor="distributor4" className="text-gray-800 font-semibold">
					Nhà phân phối:
				</label>
				<Input
					id="distributor4"
					type="text"
					placeholder="Vd: GymMaster,..."
					color="deep-orange"
					className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
					labelProps={{
						className: "hidden",
					}}
					name="distributor"
					required
				/>
			</div>
			<div>
				<label htmlFor="file_input" className="text-gray-800 font-semibold">
					Hình ảnh:
				</label>
				<input
					className="block w-full p-2 mt-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
					id="file_input"
					type="file"
					placeholder="Hình ảnh của thiết bị"
					name="equipmentImage"
					multiple
					required
				/>
			</div>
			<div>
				<label htmlFor="quantity4" className="text-gray-800 font-semibold">
					Số lượng:
				</label>
				<Input
					id="quantity4"
					type="number"
					placeholder="Vd: 2, 3, 10,..."
					color="deep-orange"
					className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
					labelProps={{
						className: "hidden",
					}}
					name="quantity"
					required
					min={1}
					max={100}
				/>
			</div>
			<div>
				<label className="text-gray-800 font-semibold">
					Trạng thái sửa chữa:
				</label>
				<div className="flex gap-10">
					<Radio
						color="deep-orange"
						name="status"
						label="Đã sửa"
						value={true}
					/>
					<Radio
						color="deep-orange"
						name="status"
						label="Chưa sửa"
						value={false}
						defaultChecked
					/>
				</div>
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
					onChange={(val) => {
						setFacility(val);
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
				<label htmlFor="equipmentType4" className="text-gray-800 font-semibold">
					Thiết bị thuộc loại:
				</label>
				<Select
					variant="static"
					id="equipmentType4"
					name="equipmentType"
					color="deep-orange"
					onChange={(val) => {
						setEquipmentType(val);
					}}
				>
					{listEquipmentType.map((equipment) => (
						<Option key={equipment.id} value={`${equipment.id}`}>
							{equipment.name}
						</Option>
					))}
				</Select>
			</div>
			<div>
				<label htmlFor="description4" className="text-gray-800 font-semibold">
					Hỗ trợ cho nhóm cơ:
				</label>
				<div className="grid grid-cols-1 lg:grid-cols-2">
					{listMuscle.map((muscle) => (
						<Checkbox
							key={muscle.name}
							name={muscle.name}
							color="deep-orange"
							label={muscle.name}
							onChange={handleCheckboxChange}
						/>
					))}
				</div>
			</div>
			<div>
				<label htmlFor="description4" className="text-gray-800 font-semibold">
					Mô tả:
				</label>
				<Textarea
					id="description4"
					name="description"
					color="deep-orange"
					placeholder="Mô tả cụ thể về thiết bị..."
					className="focus:!border-t-primary focus:ring-primary/20 focus:ring-4 mt-3"
					labelProps={{
						className: "hidden",
					}}
					required
				/>
			</div>
			<input type="hidden" value={facility} name="facility" />
			<input type="hidden" value={equipmentType} name="equipmentType" />
			<input
				type="hidden"
				value={JSON.stringify(muscleInput)}
				name="musclesOnEquipment"
			/>
			<div className="lg:col-span-2 text-center mt-4">
				<Button type="submit" color="deep-orange">
					{type} thiết bị
				</Button>
			</div>
		</form>
	);
}

export default FormEquipment;
