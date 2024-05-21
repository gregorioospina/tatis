"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import { useBreakpoint } from "./hooks/useGPTBreakpoint";

export default function Home() {
	const { isSm, isLg } = useBreakpoint();

	return (
		<main className="flex min-h-screen pb-32 flex-col items-center">
			<Navbar />
			<div className="relative min-h-[90svh] w-[100svw] lg:min-h-[80svh]">
				<div className="z-40 p-3 bg-[linear-gradient(45deg,_rgb(255_255_255_/_51%)_0%,_rgba(0,_0,_0,_0)_36%)] lg:bg-[linear-gradient(45deg,_rgb(0_0_0)_0%,_rgba(0,_0,_0,_0)_46%)]  absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end">
					<h4 className="text-t-white text-5xl lg:text-7xl">Tatiana</h4>
					<h1 className="text-t-white text-7xl lg:text-9xl">Voronetska</h1>
					<p className="text-t-white font-body font-extralight text-lg">Aprender no tiene límites</p>
				</div>
				<Image className="object-cover" priority src={isSm ? "/imgs/main.JPG" : "/imgs/main-desktop.JPG"} fill alt="Tatis Voronetska at the piano"></Image>
			</div>
			<div className="relative min-h-[60svh] w-[100svw] lg:min-h-[80svh] flex items-center justify-center">
				<p className="text-t-white text-xl lg:text-2xl whitespace-break-spaces text-center">
					Do not go gentle into that good night,{"\n"}Old age should burn and rave at close of day;{"\n"}Rage, rage against the dying of the light.{"\n"}
					{"\n"}Though wise men at their end know dark is right,{"\n"}Because their words had forked no lightning they{"\n"}Do not go gentle into that good
					night.
				</p>
			</div>
			<div className="relative min-h-[80svh] w-[100svw] overflow-x-auto lg:min-h-[80svh]">
				<p className="text-t-white text-4xl md:text-5xl sticky left-2 ml-[10svw] lg:ml-[20svw] mb-4 font-semibold">Épocas y Compositores</p>
				<div className="grid grid-cols-[repeat(4_,_200px)] h-[500px] gap-x-2 pl-[10svw] lg:pl-[20svw]">
					<div className="relative">
						<div className="absolute gap-y-3 p-4 top-0 bottom-0 left-0 right-0 items-end bg-t-green/5 z-40 flex flex-col justify-end">
							<p className="w-full text-left text-2xl font-bold">Tchaikovsky y la ciencia</p>
							<button className=" font-body text-t-white font-light underline">Conoce más</button>
						</div>
						<Image src={"/imgs/keys/1.png"} fill alt="keys 1" />
						<div className="bg-black absolute top-0 rounded-bl-lg right-0 w-12 bottom-[200px]"></div>
					</div>
					<div className="relative">
						<div className="absolute gap-y-3 p-4 top-0 bottom-0 left-0 right-0 items-end bg-t-blue/5 z-40 flex flex-col justify-end">
							<p className="w-full text-left text-2xl font-bold">Conciertos privados</p>
							<button className=" font-body text-t-white font-light underline">Conoce más</button>
						</div>{" "}
						<Image src={"/imgs/keys/2.png"} fill alt="keys 1" />
						<div className="bg-black absolute rounded-bl-lg top-0 right-0 w-12 bottom-[200px]"></div>
					</div>
					<div className="relative">
						<div className="absolute gap-y-3 p-4 top-0 bottom-0 left-0 right-0 items-end bg-t-green/5 z-40 flex flex-col justify-end">
							<p className="w-full text-left text-2xl font-bold">Programas empresariales</p>
							<button className="font-body text-t-white font-light underline">Conoce más</button>
						</div>{" "}
						<Image src={"/imgs/keys/3.png"} fill alt="keys 1" />
						<div className="bg-black absolute top-0 rounded-bl-lg right-0 w-12 bottom-[200px]"></div>
					</div>
					<div className="relative">
						<div className="absolute gap-y-3 p-4 top-0 bottom-0 left-0 right-0 items-end bg-t-blue/5 z-40 flex flex-col justify-end">
							<p className="w-full text-left text-2xl font-bold">Charlas</p>
							<button className="font-body  text-t-white font-light underline">Conoce más</button>
						</div>{" "}
						<Image src={"/imgs/keys/4.png"} fill alt="keys 1" />
						<div className="bg-black absolute top-0 rounded-bl-lg right-0 w-12 bottom-[200px]"></div>
					</div>
				</div>
			</div>
			<div className="relative min-h-[90svh] pb-10 w-[100svw] px-10 lg:px-[20svw] overflow-x-auto lg:min-h-[80svh]">
				<p className="text-t-white text-4xl md:text-5xl sticky left-2 lg:ml-[20svw] mb-4 font-semibold">Mis Programas</p>
				<div className="flex flex-col gap-y-10">
					<div className="p-3 ring-2 ring-t-white min-h-20 lg:w-4/6">
						<p className="text-2xl md:text-3xl text-t-white">Conciertos privados</p>
						<p className="md:text-md font-body font-extralight text-t-white">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<button className="text-t-white font-light underline font-body mt-4">Ponte en contacto</button>
					</div>
					<div className="p-3 ring-2 ring-t-white min-h-20 lg:w-4/6">
						<p className="text-2xl md:text-3xl text-t-white">Conciertos privados</p>
						<p className="md:text-md font-body font-extralight text-t-white">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<button className="text-t-white font-light underline font-body mt-4">Ponte en contacto</button>
					</div>
					<div className="p-3 ring-2 ring-t-white min-h-20 lg:w-4/6">
						<p className="text-2xl md:text-3xl text-t-white">Conciertos privados</p>
						<p className="md:text-md font-body font-extralight text-t-white">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<button className="text-t-white font-light underline font-body mt-4">Ponte en contacto</button>
					</div>
					<div className="p-3 ring-2 ring-t-white min-h-20 lg:w-4/6">
						<p className="text-2xl md:text-3xl text-t-white">Conciertos privados</p>
						<p className="md:text-md font-body font-extralight text-t-white">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<button className="text-t-white font-light underline font-body mt-4">Ponte en contacto</button>
					</div>
				</div>
			</div>
		</main>
	);
}
