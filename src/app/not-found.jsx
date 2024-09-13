export const metadata = {
  title: "Trang không tồn tại",
  description: "Đường dẫn trang không tồn tại",
};

export default function NotFound() {
  return (
    // <div className="flex justify-center items-center h-screen">
    // 	<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    // 		<div className="flex flex-col items-center">
    // 			{/* logo - start */}
    // 			<Link
    // 				href="/"
    // 				className="mb-8 inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
    // 			>
    // 				<Image
    // 					src="/images/icons/404-error.png"
    // 					width={100}
    // 					height={100}
    // 					alt="not found icon"
    // 				/>
    // 				CTU Fitness
    // 			</Link>
    // 			{/* logo - end */}

    // 			<p className="text-2xl font-semibold uppercase text-gray-800 lg:text-3xl">
    // 				That's a 404
    // 			</p>
    // 			<h1 className="my-4 text-center text-4xl font-bold text-primary lg:text-5xl">
    // 				Page not found
    // 			</h1>

    // 			<p className="mb-14 text-xl max-w-screen-md text-center text-gray-500 md:text-2xl">
    // 				Trang bạn đang tìm kiếm không tồn tại!
    // 			</p>

    // 			<div className="flex justify-center items-center gap-5">
    // 				<Link
    // 					href="/"
    // 					className="inline-block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary/50 transition duration-100 hover:scale-105 focus-visible:ring"
    // 				>
    // 					Trang chủ
    // 				</Link>
    // 				<Button
    // 					variant="outlined"
    // 					color="deep-orange"
    // 					className="transition duration-100 hover:scale-105"
    // 					onClick={() => router.back()}
    // 				>
    // 					Trở về trang trước
    // 				</Button>
    // 			</div>
    // 		</div>
    // 	</div>
    // </div>
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-lg font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Xin lỗi, chúng tôi không tìm thấy trang bạn đang yêu cầu.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Trở về trang chủ
          </a>
          <a href="#" className="text-sm font-semibold text-gray-900">
            Liên hệ hỗ trợ <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
