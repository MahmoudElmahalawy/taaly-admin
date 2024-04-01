import { signInWithEmailAndPassword } from "@/services/auth.service";
import { AtSymbolIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { useForm } from "react-hook-form";

interface LoginFormInputs {
	email: string;
	password: string;
}

export default function LoginForm() {
	const [showPassword, setShowPassword] = React.useState<boolean>(false);

	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>();

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const onSubmit = async (data: LoginFormInputs) => {
		try {
			const userData = await signInWithEmailAndPassword(data.email, data.password);
			localStorage.setItem("userData", JSON.stringify(userData));
			enqueueSnackbar("Login success!", { variant: "success" });
			router.push("/dashboard/monitoring");
		} catch (error) {
			enqueueSnackbar((error as any)?.message, { variant: "error" });
		}
	};

	return (
		<form className="w-full flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
			<div className="w-full mb-5">
				<label htmlFor="email" className="font-bold">
					Email
				</label>
				<div className="relative text-neutral-50 border-1 focus-within:text-gray-400">
					<span className="absolute inset-y-0 right-2 flex items-center">
						<button type="button" disabled className="p-1 focus:outline-none focus:shadow-outline">
							<AtSymbolIcon className="h-5 w-5" />
						</button>
					</span>
					<input
						{...register("email", {
							required: "* Email field is required",
							pattern: {
								value: /\S+@\S+\.\S+/,
								message: "Invalid email format",
							},
						})}
						id="email"
						type="email"
						placeholder="example@mail.com"
						className="w-full border border-neutral-100 rounded-md px-4 py-2 placeholder:text-neutral-50"
					/>
					{errors.email && (
						<span role="alert" className="absolute right-0 -top-5 text-sm text-danger-600">
							{errors.email.message}
						</span>
					)}
				</div>
			</div>
			<div className="w-full mb-4">
				<label htmlFor="password" className="font-bold">
					Password
				</label>
				<div className="relative text-neutral-50 border-1 focus-within:text-gray-400">
					<span className="absolute inset-y-0 right-2 flex items-center">
						<button
							type="button"
							onClick={togglePasswordVisibility}
							className="p-1 focus:outline-none focus:shadow-outline"
						>
							{showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
						</button>
					</span>
					<input
						{...register("password", {
							required: "* Password is required",
							minLength: { value: 6, message: "Password must be 6+ characters" },
						})}
						id="password"
						type={showPassword ? "text" : "password"}
						placeholder="6+ strong characters"
						className="w-full border border-neutral-100 rounded-md px-4 py-2 placeholder:text-neutral-50"
					/>
					{errors.password && (
						<span role="alert" className="absolute right-0 -top-5 text-sm text-danger-600">
							{errors.password.message}
						</span>
					)}
				</div>
			</div>
			<div className="mb-4">
				<Link href="/auth/forgot-password" className="text-neutral-100 text-sm">
					Forgot password?
				</Link>
			</div>
			<button type="submit" className="bg-primary-500 text-white text-xl font-semibold rounded-md px-16 py-3">
				Login
			</button>
		</form>
	);
}
