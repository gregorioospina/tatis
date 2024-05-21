"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import { useBreakpoint } from "./hooks/useGPTBreakpoint";

export default function Home() {
	const { isSm, isLg } = useBreakpoint();

	return (
		<main className="flex min-h-screen flex-col items-center">
			<Navbar />
			<div className="relative min-h-[90svh] w-[100svw] lg:min-h-[80svh]">
				<Image className="object-cover" priority src={isSm ? "/imgs/main.JPG" : "/imgs/main-desktop.JPG"} fill alt="Tatis Voronetska at the piano"></Image>
			</div>
			<div className="relative min-h-[70svh] w-[100svw] lg:min-h-[80svh] flex items-center justify-center">
				<p className="text-t-white whitespace-break-spaces text-center">
					Do not go gentle into that good night,{"\n"}Old age should burn and rave at close of day;{"\n"}Rage, rage against the dying of the light.{"\n"}
					{"\n"}Though wise men at their end know dark is right,{"\n"}Because their words had forked no lightning they{"\n"}Do not go gentle into that good
					night.
				</p>
			</div>
			<div className="relative min-h-[90svh] w-[100svw] overflow-x-auto lg:min-h-[80svh]">
				<p className="text-t-white text-4xl md:text-5xl sticky left-2 ml-[20svw] mb-4 font-semibold">Épocas y Compositores</p>
				<div className="grid grid-cols-[repeat(4_,_200px)] h-[500px] gap-x-2 pl-[20svw]">
					<div className="relative">
						<div className="absolute gap-y-3 p-4 top-0 bottom-0 left-0 right-0 items-end bg-lime-700/5 z-40 flex flex-col justify-end">
							<p className="w-full text-left text-2xl font-bold">Tchaikovsky y la ciencia</p>
							<button className=" text-t-white font-light underline">Conoce más</button>
						</div>
						<Image src={"/imgs/keys/1.png"} fill alt="keys 1" />
						<div className="bg-black absolute top-0 rounded-bl-lg right-0 w-12 bottom-[200px]"></div>
					</div>
					<div className="relative">
						<div className="absolute gap-y-3 p-4 top-0 bottom-0 left-0 right-0 items-end bg-rose-700/5 z-40 flex flex-col justify-end">
							<p className="w-full text-left text-2xl font-bold">Conciertos privados</p>
							<button className=" text-t-white font-light underline">Conoce más</button>
						</div>{" "}
						<Image src={"/imgs/keys/2.png"} fill alt="keys 1" />
						<div className="bg-black absolute rounded-bl-lg top-0 right-0 w-12 bottom-[200px]"></div>
					</div>
					<div className="relative">
						<div className="absolute gap-y-3 p-4 top-0 bottom-0 left-0 right-0 items-end bg-amber-700/5 z-40 flex flex-col justify-end">
							<p className="w-full text-left text-2xl font-bold">Programas empresariales</p>
							<button className=" text-t-white font-light underline">Conoce más</button>
						</div>{" "}
						<Image src={"/imgs/keys/3.png"} fill alt="keys 1" />
						<div className="bg-black absolute top-0 rounded-bl-lg right-0 w-12 bottom-[200px]"></div>
					</div>
					<div className="relative">
						<div className="absolute gap-y-3 p-4 top-0 bottom-0 left-0 right-0 items-end bg-violet-700/5 z-40 flex flex-col justify-end">
							<p className="w-full text-left text-2xl font-bold">Charlas</p>
							<button className=" text-t-white font-light underline">Conoce más</button>
						</div>{" "}
						<Image src={"/imgs/keys/4.png"} fill alt="keys 1" />
						<div className="bg-black absolute top-0 rounded-bl-lg right-0 w-12 bottom-[200px]"></div>
					</div>
				</div>
			</div>
		</main>
	);
}
