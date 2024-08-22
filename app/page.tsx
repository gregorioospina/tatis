"use client";

import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import Navbar from "./components/navbar";
import { useBreakpoint } from "./hooks/useGPTBreakpoint";

export default function Home() {
	const { isSm } = useBreakpoint();

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
			<div className="relative min-h-[90svh] py-[5%] md:min-h-[60svh] w-[100svw] lg:min-h-[80svh] flex items-center justify-center">
				<p className="text-t-white max-w-[85svw] md:max-w-[50svw] text-sm lg:text-xl whitespace-break-spaces text-justify">
					En 1825 Beethoven, ya muy enfermo y completamente sordo, escribe una de sus últimas obras- La Gran Fuga( op. 133). Cuando su amigo y violinista famoso
					Shuppanzig, ve la partitura, exclama: Pero Maestro! Esto es implosible de tocar, parece un rompecabezas! A lo que Beethoven responde: Si, yo no
					escribí esta obra para ustedes, sino para futuras generaciones. {"\n"}
					{"\n"}Que así sea! Me conmueve mucho esta historia, un grán hombre, despidiéndose de la vida, está escribiendo para nosotros una joya musical. El
					pensó en nosotros, nos invitó atravesar el tiempo y entrar al mundo de su música - hace 200 años! {"\n"}
					{"\n"}Con esta invitación entraremos juntos al mundo y territorio de la música, donde están Beethoven y muchos otros compositores que nos dejaron
					memorias musicales. {"\n"}Yo, Tatiana, los llevaré por este colorido y sonoro territorio, donde se juntan la música y la historia. Paso a paso, para
					aprender escuchar y disfrutar las riquezas musicales.
				</p>
			</div>
			<div className="relative min-h-[80svh] mb-20 w-[100svw] overflow-x-auto lg:min-h-[80svh]">
				<p className="text-t-white mx-[10svw] md:mx-0 text-4xl md:text-5xl sticky left-2 justify-center lg:flex mb-4 font-semibold">¿Cómo te puedo enseñar?</p>
				<div className="grid mx-[10svw] md:mx-0 lg:grid-cols-[repeat(4_,_20svh)] grid-cols-[repeat(4_,_200px)] h-[500px] lg:h-[60svh] gap-x-2 md:justify-center">
					<div className="relative">
						<div className="absolute gap-y-3 p-3 top-0 bottom-0 left-0 right-0 items-end bg-t-green/5 z-40 flex flex-col justify-end">
							<p className="w-full h-[120px] text-left font-body text-xl font-bold">⁠Clases privadas de piano</p>
							<button className=" font-body text-t-white font-light underline">Conoce más</button>
						</div>
						<Image src={"/imgs/keys/1.png"} fill alt="keys 1" />
						<div className="bg-black absolute top-0 rounded-bl-lg right-0 w-12 bottom-[200px]"></div>
					</div>
					<div className="relative">
						<div className="absolute gap-y-3 p-3 top-0 bottom-0 left-0 right-0 items-end bg-t-blue/5 z-40 flex flex-col justify-end">
							<p className="w-full h-[120px] font-body text-left text-lg font-bold">Conciertos temáticos con familias y amigos</p>
							<button className=" font-body text-t-white font-light underline">Conoce más</button>
						</div>{" "}
						<Image src={"/imgs/keys/2.png"} fill alt="keys 1" />
						<div className="bg-black absolute rounded-bl-lg top-0 right-0 w-12 bottom-[200px]"></div>
					</div>
					<div className="relative">
						<div className="absolute gap-y-3 p-3 top-0 bottom-0 left-0 right-0 items-end bg-t-green/5 z-40 flex flex-col justify-end">
							<p className="w-full h-[120px] font-body text-left text-lg font-bold">Conciertos grandes para ocasiones especiales</p>
							<button className="font-body text-t-white font-light underline">Conoce más</button>
						</div>{" "}
						<Image src={"/imgs/keys/3.png"} fill alt="keys 1" />
						<div className="bg-black absolute top-0 rounded-bl-lg right-0 w-12 bottom-[200px]"></div>
					</div>
					<div className="relative">
						<div className="absolute gap-y-3 p-3 top-0 bottom-0 left-0 right-0 items-end bg-t-blue/5 z-40 flex flex-col justify-end">
							<p className="w-full h-[120px] font-body text-left text-lg font-bold">Clases sobre la historia de la música para adultos</p>
							<button className="font-body  text-t-white font-light underline">Conoce más</button>
						</div>{" "}
						<Image src={"/imgs/keys/4.png"} fill alt="keys 1" />
						<div className="bg-black absolute top-0 rounded-bl-lg right-0 w-12 bottom-[200px]"></div>
					</div>
				</div>
			</div>
			<div className="relative min-h-[90svh] pb-10 w-[100svw] px-10 flex justify-center flex-col items-center overflow-x-auto lg:min-h-[80svh]">
				<p className="text-t-white text-4xl mb-10 md:text-5xl sticky left-2 font-semibold">Mis Programas</p>
				<div className="flex flex-col gap-y-12 items-center">
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
					<Spline className="" scene="https://prod.spline.design/r2Rbx4suro4MIJqn/scene.splinecode" />
					<div className="absolute h-[15svh] ring-1 animate-rotate-y-3 ring-t-white rounded-full w-[15svh] items-center flex flex-col justify-center"></div>
					<div className="absolute h-[30svh] animate-rotate-y-2 ring-1 ring-t-white rounded-full w-[30svh] items-center flex flex-col justify-center"></div>
					<div className="absolute animate-rotate-y-1 h-[40svh] ring-1 ring-t-white rounded-full w-[40svh] items-center flex flex-col justify-center"></div>
				</div>
			</div>
		</main>
	);
}
