"use client";

import { useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
	Chip,
	Tooltip,
	IconButton,
	Dialog,
	DialogHeader,
	Typography,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react";
import Link from "next/link";
import Button from "@material-tailwind/react";
function EquipmentList({ className }) {
	const [open, setOpen] = useState(false);
	const [deleteUser, setDeleteUser] = useState({});

	const handleOpen = (id) => {
		setOpen(!open);
		setDeleteUser(id);
	};

	const handleDelete = () => {
		console.log({ id: deleteUser });
		// Fetch api để xóa user
		setOpen(!open);
	};

	const TABLE_HEAD = [
		"ID", // fullname, email
		"Tên thiết bị",
		"Loại thiết bị",
		"Ngày nhập",
		"Trạng thái sửa chữa",
		"Trị giá",
		"Số lượng",
		"",
	];

	const TABLE_ROWS = [
		{
			id: 1,
			name: "John Michael",
			email: "john@creative-tim.com",
			phone: "0912931223",
			online: true,
			date: "23/04/18",
		},
		{
			id: 2,
			name: "Alexa Liras",
			email: "alexa@creative-tim.com",
			online: false,
			phone: "0911238222",
			date: "23/04/18",
		},
		{
			id: 3,
			name: "Laurent Perrier",
			email: "laurent@creative-tim.com",
			phone: "0312931223",
			online: false,
			date: "19/09/17",
		},
		{
			id: 4,
			name: "Michael Levi",
			email: "michael@creative-tim.com",
			online: true,
			phone: "0996931223",
			date: "24/12/08",
		},
		{
			id: 5,
			name: "Richard Gran",
			email: "richard@creative-tim.com",
			online: false,
			phone: "0951331223",
			date: "04/10/21",
		},
	];
	return (
		<table className={className}>
			<thead>
				<tr>
					{TABLE_HEAD.map((head) => (
						<th
							key={head}
							className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
						>
							<Typography
								variant="small"
								color="blue-gray"
								className="font-normal leading-none opacity-70"
							>
								{head}
							</Typography>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{TABLE_ROWS.map(({ id, name, phone, online, date }, index) => {
					const isLast = index === TABLE_ROWS.length - 1;
					const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

					return (
						<tr key={name}>
							<td className={classes}>
								<div className="flex flex-col">
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal"
									>
										1
									</Typography>
								</div>
							</td>
							<td className={classes}>
								<div className="flex flex-col">
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal"
									>
										Thanh tạ đòn
									</Typography>
								</div>
							</td>
							<td className={classes}>
								<div className="flex flex-col">
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal"
									>
										Máy tập nhóm cơ
									</Typography>
								</div>
							</td>
							<td className={classes}>
								<div className="flex flex-col">
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal"
									>
										19/02/2024
									</Typography>
								</div>
							</td>
							<td className={classes}>
								<div className="w-max">
									<Chip
										variant="ghost"
										size="sm"
										value={online ? "Chưa sửa" : "Đã sửa"}
										color={online ? "green" : "amber"}
									/>
								</div>
							</td>
							<td className={classes}>
								<Typography
									variant="small"
									color="blue-gray"
									className="font-normal"
								>
									2.000.000 VNĐ
								</Typography>
							</td>
							<td className={classes}>
								<Typography
									variant="small"
									color="blue-gray"
									className="font-normal"
								>
									2
								</Typography>
							</td>
							<td className={classes}>
								<Link href={`/admin/users/edit/${id}`}>
									<Tooltip content="Edit">
										<IconButton variant="text">
											<PencilSquareIcon className="h-5 w-5 text-amber-800" />
										</IconButton>
									</Tooltip>
								</Link>
								<Tooltip content="Delete">
									<IconButton variant="text" onClick={() => handleOpen(id)}>
										<TrashIcon className="h-5 w-5 text-red-500" />
									</IconButton>
								</Tooltip>
							</td>
						</tr>
					);
				})}
				<Dialog open={open} handler={handleOpen}>
					<DialogHeader>
						<span>Xóa thiết bị có ID là {deleteUser} khỏi hệ thống.</span>
					</DialogHeader>
					<DialogBody>
						Thiết bị sau khi xóa khỏi hệ thống sẽ không thể khôi phục thông tin
						được. Bạn có thực sự muốn xóa?
					</DialogBody>
					<DialogFooter>
						<Button
							variant="text"
							color="gray"
							onClick={handleOpen}
							className="mr-1"
						>
							<span>Hủy</span>
						</Button>
						<Button variant="gradient" color="red" onClick={handleDelete}>
							<span>Xóa</span>
						</Button>
					</DialogFooter>
				</Dialog>
			</tbody>
		</table>
	);
}

export default EquipmentList;
