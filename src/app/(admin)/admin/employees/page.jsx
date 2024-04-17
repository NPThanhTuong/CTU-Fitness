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
	Tooltip,
	IconButton,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Avatar,
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import moment from "moment";
import { deleteEmployee } from "@/utils/formActions";

function EmployeePage() {
	const [open, setOpen] = useState(false);
	const [deleteEmployeeId, setDeleteTrainerId] = useState();
	const [employees, setEmployees] = useState([]);
	const [loading, setLoading] = useState(true);
	const [totalPage, setTotalPage] = useState(1);
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);

	useEffect(() => {
		const getEmployees = async () => {
			setLoading(true);
			const res = await fetch(
				`/api/admin/employees?query=${params.get("query") || ""}&page=${
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
				setEmployees(data);
				setTotalPage(totalPage);
			}

			setLoading(false);
		};

		getEmployees();
	}, [params.get("page"), params.get("query")]);

	const handleOpen = (id) => {
		setOpen(!open);
		setDeleteTrainerId(id);
	};

	const handleDelete = async () => {
		setOpen(!open);
		deleteEmployee(deleteEmployeeId);
		setEmployees((prevList) =>
			prevList.filter((item) => item.employeeId !== deleteEmployeeId)
		);
	};

	const TABLE_HEAD = [
		"ID",
		"Nhân viên",
		"Hình thức công tác",
		"Ngày công tác",
		"Bộ phận",
		"Chức vụ",
		"Số điện thoại",
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
								Danh sách nhân viên
							</Typography>
							<Typography color="gray" className="mt-1 font-normal">
								Xem thông tin của các nhân viên của hệ thống
							</Typography>
						</div>
						<div className="flex shrink-0 flex-col gap-2 sm:flex-row">
							<Link href="/admin/employees/create">
								<Button
									className="flex items-center gap-3"
									color="deep-orange"
									size="md"
								>
									<PlusCircleIcon strokeWidth={2} className="size-5" /> Thêm
									nhân viên
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
							) : employees?.length > 0 ? (
								employees?.map(
									(
										{
											employeeId,
											businessDate,
											employee,
											position,
											department,
											businesstype,
										},
										index
									) => {
										const isLast = index === TABLE_ROWS - 1;
										const classes = isLast
											? "p-4"
											: "p-4 border-b border-blue-gray-50";

										return (
											<tr key={employeeId}>
												<td className={classes}>
													<div className="flex flex-col">
														<Typography
															variant="small"
															color="blue-gray"
															className="font-normal"
														>
															{employeeId}
														</Typography>
													</div>
												</td>
												<td className={classes}>
													<div className="flex items-center gap-3">
														<Avatar
															src={`/images/${employee.avatar}`}
															alt={employee.fullname}
															size="sm"
														/>
														<div className="flex flex-col">
															<Typography
																variant="small"
																color="blue-gray"
																className="font-normal"
															>
																{employee.fullname}
															</Typography>
															<Typography
																variant="small"
																color="blue-gray"
																className="font-normal opacity-70"
															>
																{employee.email}
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
															{businesstype.name}
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
															{moment(businessDate).format("DD/MM/YYYY")}
														</Typography>
													</div>
												</td>
												<td className={classes}>
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal"
													>
														{department.name}
													</Typography>
												</td>
												<td className={classes}>
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal"
													>
														{position.name}
													</Typography>
												</td>
												<td className={classes}>
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal"
													>
														{employee.phoneNumber}
													</Typography>
												</td>
												<td className={classes}>
													<Link href={`/admin/employees/${employeeId}/edit`}>
														<Tooltip content="Edit">
															<IconButton variant="text">
																<PencilSquareIcon className="h-5 w-5 text-amber-800" />
															</IconButton>
														</Tooltip>
													</Link>
													<Tooltip content="Delete">
														<IconButton
															variant="text"
															onClick={() => handleOpen(employeeId)}
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
										Không tìm thấy nhân viên.
									</td>
								</tr>
							)}

							<Dialog open={open} handler={handleOpen}>
								<DialogHeader>
									<span>
										Xóa nhân viên có ID là {deleteEmployeeId} khỏi hệ thống.
									</span>
								</DialogHeader>
								<DialogBody>
									Nhân viên sau khi xóa khỏi hệ thống sẽ không thể khôi phục
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
									<form action={deleteEmployee}>
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

export default EmployeePage;
