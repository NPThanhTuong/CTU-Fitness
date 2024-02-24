import Button from "@/components/Button";
import { Card, Checkbox, Input, Typography } from "@/components/midleExport";
import Link from "next/link";

function SignIn() {
	return (
		<main className="w-full min-h-screen bg-primary/10 pt-11">
			<div className="w-full mx-auto max-w-[600px] p-5">
				<Card className="grid grid-cols-1 gap-0 shadow-2xl p-8">
					<h2 className="text-gray-800 font-bold text-3xl">Sign in</h2>
					<p className="text-gray-500 my-5">
						Don't have an account?{" "}
						<Link href="/signup" className="text-primary underline">
							Create now
						</Link>
					</p>
					<Button
						size="lg"
						variant="outlined"
						className="flex items-center gap-3 text-gray-800 justify-center"
						fullWidth
					>
						<img
							src="https://docs.material-tailwind.com/icons/google.svg"
							alt="metamask"
							className="h-6 w-6"
						/>
						Continue with Google
					</Button>
					<div className="flex items-center justify-center my-4">
						<hr className="border-gray-400 flex-1" />
						<span className="text-gray-400 mx-3">
							or Sign in with your Account
						</span>
						<hr className="border-gray-400 flex-1" />
					</div>
					<form>
						<div className="mb-1 flex flex-col gap-6">
							<Typography
								variant="h6"
								color="blue-gray"
								className="-mb-3 text-gray-800"
							>
								Your Email
							</Typography>
							<Input
								size="lg"
								placeholder="name@mail.com"
								className="focus:!border-primary"
								labelProps={{
									className: "before:content-none after:content-none",
								}}
							/>
							<Typography
								variant="h6"
								color="blue-gray"
								className="-mb-3 text-gray-800"
							>
								Password
							</Typography>
							<Input
								type="password"
								size="lg"
								placeholder="********"
								className="focus:!border-primary"
								labelProps={{
									className: "before:content-none after:content-none",
								}}
							/>
						</div>
						<Typography color="gray" className="mt-4 text-right font-normal">
							<a
								href="/forgot-password"
								className="font-medium text-primary underline"
							>
								Forgot password?
							</a>
						</Typography>
						<Button className="mt-6 bg-primary" fullWidth>
							sign in
						</Button>
					</form>
				</Card>
			</div>
		</main>
	);
}

export default SignIn;
