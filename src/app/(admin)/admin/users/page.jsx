"use client";

import Pagination from "@/components/Admin/Pagination";
import {
	UserPlusIcon,
	PencilSquareIcon,
	TrashIcon,
} from "@heroicons/react/24/solid";
import {
	Avatar,
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
	CardHeader,
	Chip,
	Tooltip,
	IconButton,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";

function UserPage() {
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
		"Khách hàng", // fullname, email
		"Số điện thoại",
		"Trạng thái thanh toán",
		"Ngày sinh",
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
		<div className="px-3">
			<Card className="h-full w-full">
				<CardHeader floated={false} shadow={false} className="rounded-none">
					<div className="my-4 flex items-center justify-between gap-8">
						<div>
							<Typography variant="h5" color="blue-gray">
								Danh sách khách hàng
							</Typography>
							<Typography color="gray" className="mt-1 font-normal">
								Xem thông tin của các khách hàng
							</Typography>
						</div>
						<div className="flex shrink-0 flex-col gap-2 sm:flex-row">
							<Link href="/admin/users/create">
								<Button
									className="flex items-center gap-3"
									color="deep-orange"
									size="md"
								>
									<UserPlusIcon strokeWidth={2} className="size-5" /> Thêm khách
									hàng
								</Button>
							</Link>
						</div>
					</div>
				</CardHeader>
				<CardBody className="overflow-scroll px-0 pt-0">
					<table className="mt-4 w-full min-w-max table-auto text-left">
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
							{TABLE_ROWS.map(
								({ id, name, email, phone, online, date }, index) => {
									const isLast = index === TABLE_ROWS.length - 1;
									const classes = isLast
										? "p-4"
										: "p-4 border-b border-blue-gray-50";

									return (
										<tr key={name}>
											<td className={classes}>
												<div className="flex items-center gap-3">
													{/* <Avatar src={img} alt={name} size="sm" /> */}
													<div className="flex flex-col">
														<Typography
															variant="small"
															color="blue-gray"
															className="font-normal"
														>
															{name}
														</Typography>
														<Typography
															variant="small"
															color="blue-gray"
															className="font-normal opacity-70"
														>
															{email}
														</Typography>
													</div>
												</div>
											</td>
											<td className={classes}>
												<div className="flex flex-col">
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal"
													>
														{phone}
													</Typography>
												</div>
											</td>
											<td className={classes}>
												<div className="w-max">
													<Chip
														variant="ghost"
														size="sm"
														value={online ? "Đã thanh toán" : "đang chờ"}
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
													{date}
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
													<IconButton
														variant="text"
														onClick={() => handleOpen(id)}
													>
														<TrashIcon className="h-5 w-5 text-red-500" />
													</IconButton>
												</Tooltip>
											</td>
										</tr>
									);
								}
							)}
							<Dialog open={open} handler={handleOpen}>
								<DialogHeader>
									<span>
										Xóa khách hàng có ID là {deleteUser} khỏi hệ thống.
									</span>
								</DialogHeader>
								<DialogBody>
									Khách hàng sau khi xóa khỏi hệ thống sẽ không thể khôi phục
									thông tin được. Bạn có thực sự muốn xóa?
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
				</CardBody>
				<CardFooter>
					<Pagination className="flex items-center justify-between border-t border-blue-gray-50 p-4" />
				</CardFooter>
			</Card>
		</div>
	);
}

export default UserPage;
