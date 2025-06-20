"use client";

import Image from "next/image";
import CTA from "./components/cta";
import Navbar from "./components/navbar";
import { useBreakpoint } from "./hooks/useGPTBreakpoint";

export default function Home() {
	const { isSm } = useBreakpoint();

	return (
		<main className="flex min-h-screen flex-col items-center bg-black">
			<Navbar />
			<div className="relative min-h-[90svh] w-[100svw] lg:min-h-[80svh]">
				<div className="z-40 p-3 md:px-10 bg-[linear-gradient(45deg,_rgb(255_255_255_/_51%)_0%,_rgba(0,_0,_0,_0)_36%)] lg:bg-[linear-gradient(45deg,_rgb(0_0_0)_0%,_rgba(0,_0,_0,_0)_46%)]  absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end">
					<h4 className="text-t-white text-5xl lg:text-7xl">{t("tatis.hero.first_name")}</h4>
					<h1 className="text-t-white text-7xl lg:text-9xl">{t("tatis.hero.last_name")}</h1>
					<p className="text-t-white font-body font-extralight text-lg">{t("tatis.hero.tagline")}</p>
				</div>
				<Image className="object-cover" priority src={isSm ? "/imgs/main.JPG" : "/imgs/main-desktop.JPG"} fill alt={t("tatis.hero.image_alt")}></Image>
			</div>
			<div className="relative min-h-[90svh] py-[5%] md:min-h-[60svh] w-[100svw] lg:min-h-[80svh] flex items-center justify-center">
				<p className="text-t-white max-w-[85svw] md:max-w-[50svw] text-sm lg:text-xl whitespace-break-spaces text-justify">
					{t("tatis.story.beethoven_text")}
				</p>
			</div>
			<div className="relative min-h-[80svh] mb-6 w-[100svw] overflow-x-auto lg:min-h-[80svh]">
				<p className="text-t-white mx-[10svw] md:mx-0 text-4xl md:text-5xl sticky left-2 justify-center lg:flex mb-4 font-semibold">{t("tatis.services.title")}</p>
				<div className="grid mx-[10svw] md:mx-0 lg:grid-cols-[repeat(4_,_20svw)] grid-cols-[repeat(4_,_200px)] h-[500px] lg:h-[70svh] gap-x-2 md:justify-center">
					<div className="relative">
						<div className="absolute gap-y-3 p-4 top-0 bottom-0 left-0 right-0 items-end bg-t-green/5 z-40 flex flex-col justify-end">
							<p className="w-full h-[120px] text-white text-left font-body text-xl font-bold">{t("tatis.services.private_piano")}</p>
							<CTA waMessage={t("tatis.services.private_piano_cta")} title={t("tatis.cta.learn_more")} />
						</div>
						<Image src={"/imgs/keys/1.png"} fill alt="keys 1" />
						<div className="bg-black absolute top-0 rounded-bl-lg right-0 w-12 bottom-[200px]"></div>
					</div>
					<div className="relative">
						<div className="absolute gap-y-3 p-2 top-0 bottom-0 left-0 right-0 items-end bg-t-blue/5 z-40 flex flex-col justify-end">
							<p className="w-full h-[120px] text-white font-body text-left text-lg font-bold">{t("tatis.services.family_concerts")}</p>
							<CTA waMessage={t("tatis.services.family_concerts_cta")} title={t("tatis.cta.learn_more")} />
						</div>{" "}
						<Image src={"/imgs/keys/2.png"} fill alt="keys 1" />
						<div className="bg-black absolute rounded-bl-lg top-0 right-0 w-12 bottom-[200px]"></div>
					</div>
					<div className="relative">
						<div className="absolute gap-y-3 p-4 top-0 bottom-0 left-0 right-0 items-end bg-t-green/5 z-40 flex flex-col justify-end">
							<p className="w-full h-[120px] text-white font-body text-left text-lg font-bold">{t("tatis.services.special_concerts")}</p>
							<CTA waMessage={t("tatis.services.special_concerts_cta")} title={t("tatis.cta.learn_more")} />
						</div>{" "}
						<Image src={"/imgs/keys/3.png"} fill alt="keys 1" />
						<div className="bg-black absolute top-0 rounded-bl-lg right-0 w-12 bottom-[200px]"></div>
					</div>
					<div className="relative">
						<div className="absolute gap-y-3 p-4 top-0 bottom-0 left-0 right-0 items-end bg-t-blue/5 z-40 flex flex-col justify-end">
							<p className="w-full h-[120px] text-white font-body text-left text-lg font-bold">{t("tatis.services.music_history")}</p>
							<CTA waMessage={t("tatis.services.music_history_cta")} title={t("tatis.cta.learn_more")} />
						</div>{" "}
						<Image src={"/imgs/keys/4.png"} fill alt="keys 1" />
						<div className="bg-black absolute top-0 rounded-bl-lg right-0 w-12 bottom-[200px]"></div>
					</div>
				</div>
			</div>
			<div className="relative min-h-[90svh] pb-10 w-[100svw] px-10 flex justify-center flex-col items-center overflow-x-auto lg:min-h-[80svh]">
				<p className="text-t-white text-3xl mb-10 md:text-5xl text-center sticky left-2 font-semibold">{t("tatis.benefits.title")}</p>
				<div className="flex flex-col gap-y-12 items-center">
					<ul className="p-5 ring-2 ring-t-white min-h-20 lg:w-4/6 flex flex-col gap-y-3">
						<li className="md:text-lg text- font-body text-t-white">{t("tatis.benefits.brain_stimulation")}</li>
						<li className="md:text-lg font-body text-t-white">{t("tatis.benefits.emotional_expression")}</li>
						<li className="md:text-lg font-body text-t-white">
							{t("tatis.benefits.motor_skills")}
						</li>
						<li className="md:text-lg font-body text-t-white">
							{t("tatis.benefits.teamwork")}
						</li>
						<li className="md:text-lg font-body text-t-white">{t("tatis.benefits.aesthetic_development")}</li>
					</ul>
				</div>
			</div>
			<div className="relative min-h-[90svh] pb-10 w-[100svw] px-10 flex justify-center flex-col items-center overflow-x-auto lg:min-h-[80svh]">
				<p className="text-t-white text-4xl mb-10 md:text-5xl sticky left-2 font-semibold">{t("tatis.corporate.title")}</p>
				<div className="flex flex-col gap-y-12 items-center">
					<div className="h-full w-full flex flex-col justify-center items-center md:flex-row gap-4">
						<div className=" relative border border-[#2c2c2c] w-[100%] sm:w-[80%] md:w-[50%] h-full">
							<Image src={"/imgs/poster-3.png"} width={500} height={1000} alt="poster 3" />
						</div>
						<div className=" relative border border-[#2c2c2c] w-[100%] sm:w-[80%] md:w-[50%] h-full">
							<Image src={"/imgs/poster-2.png"} width={500} height={1000} alt="poster 2" />
						</div>
						<div className=" relative border border-[#2c2c2c] w-[100%] sm:w-[80%] md:w-[50%] h-full">
							<Image src={"/imgs/poster-1.png"} width={500} height={1000} alt="poster 1" />
						</div>
					</div>
					<div className="flex flex-col gap-y-1">
						<p className="font-body text-center text-white">{t("tatis.corporate.interest_text")}</p>
						<CTA waMessage={t("tatis.corporate.contact_cta")} title={t("tatis.corporate.contact_button")} />
					</div>
				</div>
			</div>
			<div className="min-h-[250svh] pb-[25svh] relative items-center flex flex-col justify-end bg-[linear-gradient(180deg,_#000000_3%,_#141946_62%);] w-full">
				<div className="relative h-[40svh] w-[40svh] flex items-center justify-center">
					<div className="absolute h-6 bg-amber-500 rounded-full w-6 md:h-8 md:w-8 items-center flex flex-col justify-center"></div>
					<div className="absolute h-[15svh] ring-1 animate-rotate-y-3 ring-t-white rounded-full w-[15svh] items-center flex flex-col justify-center"></div>
					<div className="absolute h-[30svh] animate-rotate-y-2 ring-1 ring-t-white rounded-full w-[30svh] items-center flex flex-col justify-center"></div>
					<div className="absolute animate-rotate-y-1 h-[40svh] ring-1 ring-t-white rounded-full w-[40svh] items-center flex flex-col justify-center"></div>
				</div>
			</div>
		</main>
	);
}
