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
				<div className="z-40 p-3 bg-[linear-gradient(45deg,_rgb(255_255_255_/_51%)_0%,_rgba(0,_0,_0,_0)_36%)] lg:bg-[linear-gradient(45deg,_rgb(0_0_0)_0%,_rgba(0,_0,_0,_0)_46%)]  absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end">
					<h4 className="text-t-white text-5xl lg:text-7xl">Tatiana</h4>
					<h1 className="text-t-white text-7xl lg:text-9xl">Voronetska</h1>
					<p className="text-t-white font-body font-extralight text-lg">Aprender no tiene límites</p>
				</div>
				<Image className="object-cover" priority src={isSm ? "/imgs/main.JPG" : "/imgs/main-desktop.JPG"} fill alt="Tatis Voronetska at the piano"></Image>
			</div>
			<div className="relative min-h-[60svh] w-[100svw] lg:min-h-[80svh] flex items-center justify-center">
				<p className="text-t-white text-sm lg:text-2xl whitespace-break-spaces text-center">
					Do not go gentle into that good night,{"\n"}Old age should burn and rave at close of day;{"\n"}Rage, rage against the dying of the light.{"\n"}
					{"\n"}Though wise men at their end know dark is right,{"\n"}Because their words had forked no lightning they{"\n"}Do not go gentle into that good
					night.
				</p>
			</div>
			<div className="relative min-h-[80svh] mb-20 w-[100svw] overflow-x-auto lg:min-h-[80svh]">
				<p className="text-t-white text-4xl md:text-5xl sticky left-2 ml-[10svw] lg:ml-[20svw] mb-4 font-semibold">Épocas y Compositores</p>
				<div className="grid lg:grid-cols-[repeat(4_,_20svh)] grid-cols-[repeat(4_,_200px)] h-[500px] lg:h-[60svh] gap-x-2 pl-[10svw] lg:pl-[20svw]">
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
				<p className="text-t-white text-4xl mb-10 md:text-5xl sticky left-2 font-semibold">Mis Programas</p>
				<div className="flex flex-col gap-y-12">
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
			<div className="min-h-[250svh] pb-[25svh] relative items-center flex flex-col justify-end bg-[linear-gradient(180deg,_#000000_3%,_#141946_62%);] w-full">
				<div className="relative h-[40svh] w-[40svh] flex items-center justify-center">
					<div className="absolute h-6 bg-blue-600 rounded-full w-6 md:h-8 md:w-8 items-center flex flex-col justify-center"></div>
					<div className="absolute h-[15svh] ring-1 animate-rotate-y-3 ring-t-white rounded-full w-[15svh] items-center flex flex-col justify-center"></div>
					<div className="absolute h-[30svh] animate-rotate-y-2 ring-1 ring-t-white rounded-full w-[30svh] items-center flex flex-col justify-center"></div>
					<div className="absolute animate-rotate-y-1 h-[40svh] ring-1 ring-t-white rounded-full w-[40svh] items-center flex flex-col justify-center"></div>
				</div>
			</div>
		</main>
	);
}
