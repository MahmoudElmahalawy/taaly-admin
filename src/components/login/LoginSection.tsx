import React from "react";
import Image from "next/image";
import LoginForm from "./LoginForm";
import TaalyLogo from "../../../public/static/images/logos/taaly.svg";

export default function LoginSection() {
	return (
		<section className="max-w-[80rem] h-4/6 lg:flex bg-white lg:bg-[url('/static/images/backgrounds/wave.svg')] lg:bg-no-repeat lg:bg-right-bottom lg:rounded-r-2xl">
			<div className="lg:w-1/2 bg-primary-500 grid place-items-center lg:rounded-2xl pb-6 lg:pb-[unset]">
				<div className="w-9/12 sm:w-1/3 lg:w-9/12 text-base md:text-xl lg:text-4xl text-white text-center mx-auto">
					<Image src={TaalyLogo} alt="Taaly logo" className="w-4/5 mx-auto -my-6 lg:-my-16" />
					<p>&lsquo;Het verbinden van nieuwkomers met de samenleving door hun taal te verbeteren&rsquo;</p>
				</div>
			</div>
			<div className="lg:w-1/2 flex flex-col items-center xl:justify-around px-8 py-4">
				<div className="w-full md:w-2/5 lg:w-4/6 mt-4 lg:mt-8">
					<h1 className="text-2xl text-center lg:text-4xl font-medium mb-2 lg:mb-6 lg:text-start">
						Welcome to{" "}
						<span className="font-bold">
							<strong>Taaly!</strong>
						</span>
					</h1>
					<h2 className="text-xl text-center lg:text-start lg:text-3xl font-medium mb-4">Login here</h2>
					<LoginForm />
				</div>
			</div>
		</section>
	);
}
