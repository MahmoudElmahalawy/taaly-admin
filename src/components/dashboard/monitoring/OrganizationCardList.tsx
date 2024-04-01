"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import OrganizationCard from "./OrganizationCard";

export default function OrganizationCardList() {
	const navBtnStyle = {
		"--swiper-navigation-size": "16px",
		"--swiper-navigation-sides-offset": "-16px",
		backgroundColor: "white",
		padding: "20px",
		borderRadius: "100%",
		color: "black",
	};

	return (
		<section className="col-span-12">
			<Swiper
				slidesPerView={3}
				spaceBetween={10}
				slidesPerGroup={3}
				modules={[Navigation]}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				className="cards-slider"
			>
				<button style={navBtnStyle} className="swiper-button-prev"></button>
				<button style={navBtnStyle} className="swiper-button-next"></button>
				<SwiperSlide className="">
					<OrganizationCard />
				</SwiperSlide>
				<SwiperSlide className="">
					<OrganizationCard />
				</SwiperSlide>
				<SwiperSlide className="">
					<OrganizationCard />
				</SwiperSlide>
				<SwiperSlide className="">
					<OrganizationCard />
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
