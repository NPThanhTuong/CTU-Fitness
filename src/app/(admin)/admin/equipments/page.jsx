"use client";

import Pagination from "@/components/Admin/Pagination";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import {
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
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import moment from "moment";
import { deleteEquipment } from "@/utils/formActions";

function EquipmentPage() {
	const [open, setOpen] = useState(false);
	const [deleteEquipmentId, setDeleteEquipmentId] = useState();
	const [equipments, setEquipments] = useState([]);
	const [loading, setLoading] = useState(true);
	const [totalPage, setTotalPage] = useState(1);
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);

	useEffect(() => {
		const getEquipment = async () => {
			setLoading(true);
			const res = await fetch(
				`/api/admin/equipments?query=${params.get("query") || ""}&page=${
					params.get("page") || 1
				}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (res.ok) {
				const { data, totalPage } = await res.json();
				setEquipments(data);
				setTotalPage(totalPage);
			}

			setLoading(false);
		};

		getEquipment();
	}, [params.get("page"), params.get("query")]);

	const handleOpen = (id) => {
		setOpen(!open);
		setDeleteEquipmentId(id);
	};

	const handleDelete = async () => {
		setOpen(!open);
		deleteEquipment(deleteEquipmentId);
		setEquipments((prevList) =>
			prevList.filter((item) => item.id !== deleteEquipmentId)
		);
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

	const TABLE_ROWS = 4;
	return (
		<div className="px-3">
			<Card className="h-full w-full">
				<CardHeader floated={false} shadow={false} className="rounded-none">
					<div className="my-4 flex items-center justify-between gap-8">
						<div>
							<Typography variant="h5" color="blue-gray">
								Danh sách thiết bị
							</Typography>
							<Typography color="gray" className="mt-1 font-normal">
								Xem thông tin của các thiết bị
							</Typography>
						</div>
						<div className="flex shrink-0 flex-col gap-2 sm:flex-row">
							<Link href="/admin/equipments/create">
								<Button
									className="flex items-center gap-3"
									color="deep-orange"
									size="md"
								>
									<PlusCircleIcon strokeWidth={2} className="size-5" /> Thêm
									thiết bị
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
							{loading ? (
								<tr>
									<td
										colSpan={8}
										className="text-gray-500 text-2xl text-center font-bold pt-6"
									>
										Đang tải....
									</td>
								</tr>
							) : equipments?.length > 0 ? (
								equipments?.map(
									(
										{
											id,
											price,
											name,
											quantity,
											equipmenttype,
											importDate,
											status,
										},
										index
									) => {
										const isLast = index === TABLE_ROWS - 1;
										const classes = isLast
											? "p-4"
											: "p-4 border-b border-blue-gray-50";

										return (
											<tr key={id}>
												<td className={classes}>
													<div className="flex flex-col">
														<Typography
															variant="small"
															color="blue-gray"
															className="font-normal"
														>
															{id}
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
															{name}
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
															{equipmenttype.name}
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
															{moment(importDate).format("DD/MM/YYYY")}
														</Typography>
													</div>
												</td>
												<td className={classes}>
													<div className="w-max">
														<Chip
															variant="ghost"
															size="sm"
															value={status ? "Đã sửa" : "Chưa sửa"}
															color={status ? "amber" : "green"}
														/>
													</div>
												</td>
												<td className={classes}>
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal"
													>
														{(price * 1000).toLocaleString("it-IT", {
															style: "currency",
															currency: "VND",
														})}
													</Typography>
												</td>
												<td className={classes}>
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal"
													>
														{quantity}
													</Typography>
												</td>
												<td className={classes}>
													<Link href={`/admin/equipments/${id}/edit`}>
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
								)
							) : (
								<tr>
									<td
										colSpan={8}
										className="text-gray-500 text-2xl text-center font-bold pt-6"
									>
										Không tìm thấy thiết bị.
									</td>
								</tr>
							)}

							<Dialog open={open} handler={handleOpen}>
								<DialogHeader>
									<span>
										Xóa thiết bị có ID là {deleteEquipmentId} khỏi hệ thống.
									</span>
								</DialogHeader>
								<DialogBody>
									Thiết bị sau khi xóa khỏi hệ thống sẽ không thể khôi phục
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
									<form action={deleteEquipment}>
										<Button
											variant="gradient"
											color="red"
											onClick={handleDelete}
										>
											<span>Xóa</span>
										</Button>
									</form>
								</DialogFooter>
							</Dialog>
						</tbody>
					</table>
				</CardBody>
				<CardFooter>
					<Pagination
						totalPage={totalPage}
						className="flex items-center justify-between border-t border-blue-gray-50 p-4"
					/>
				</CardFooter>
			</Card>
		</div>
	);
}

export default EquipmentPage;
