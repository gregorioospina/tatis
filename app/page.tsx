"use client";

import Image from "next/image";
import CTA from "./components/cta";
import Navbar from "./components/navbar";
import { useBreakpoint } from "./hooks/useGPTBreakpoint";

export default function Home() {
	const { isSm } = useBreakpoint();

	return (
		<main className="flex min-h-screen flex-col items-center">
			<Navbar />
			<div className="relative min-h-[90svh] w-[100svw] lg:min-h-[80svh]">
				<div className="z-40 p-3 md:px-10 bg-[linear-gradient(45deg,_rgb(255_255_255_/_51%)_0%,_rgba(0,_0,_0,_0)_36%)] lg:bg-[linear-gradient(45deg,_rgb(0_0_0)_0%,_rgba(0,_0,_0,_0)_46%)]  absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end">
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
			<div className="relative min-h-[80svh] mb-6 w-[100svw] overflow-x-auto lg:min-h-[80svh]">
				<p className="text-t-white mx-[10svw] md:mx-0 text-4xl md:text-5xl sticky left-2 justify-center lg:flex mb-4 font-semibold">¿Cómo te puedo enseñar?</p>
				<div className="grid mx-[10svw] md:mx-0 lg:grid-cols-[repeat(4_,_20svw)] grid-cols-[repeat(4_,_200px)] h-[500px] lg:h-[70svh] gap-x-2 md:justify-center">
					<div className="relative">
						<div className="absolute gap-y-3 p-4 top-0 bottom-0 left-0 right-0 items-end bg-t-green/5 z-40 flex flex-col justify-end">
							<p className="w-full h-[120px] text-left font-body text-xl font-bold">⁠Clases privadas de piano</p>
							<CTA waMessage="Hola! Quiero saber más sobre las clases privadas de piano" title="Conoce más" />
						</div>
						<Image src={"/imgs/keys/1.png"} fill alt="keys 1" />
						<div className="bg-black absolute top-0 rounded-bl-lg right-0 w-12 bottom-[200px]"></div>
					</div>
					<div className="relative">
						<div className="absolute gap-y-3 p-2 top-0 bottom-0 left-0 right-0 items-end bg-t-blue/5 z-40 flex flex-col justify-end">
							<p className="w-full h-[120px] font-body text-left text-lg font-bold">Conciertos temáticos con familias y amigos</p>
							<CTA waMessage="Hola! Quiero saber más sobre los conciertos temáticos con familias y amigos" title="Conoce más" />
						</div>{" "}
						<Image src={"/imgs/keys/2.png"} fill alt="keys 1" />
						<div className="bg-black absolute rounded-bl-lg top-0 right-0 w-12 bottom-[200px]"></div>
					</div>
					<div className="relative">
						<div className="absolute gap-y-3 p-4 top-0 bottom-0 left-0 right-0 items-end bg-t-green/5 z-40 flex flex-col justify-end">
							<p className="w-full h-[120px] font-body text-left text-lg font-bold">Conciertos grandes para ocasiones especiales</p>
							<CTA waMessage="Hola! Quiero saber más sobre los conciertos grandes para ocasiones especiales" title="Conoce más" />
						</div>{" "}
						<Image src={"/imgs/keys/3.png"} fill alt="keys 1" />
						<div className="bg-black absolute top-0 rounded-bl-lg right-0 w-12 bottom-[200px]"></div>
					</div>
					<div className="relative">
						<div className="absolute gap-y-3 p-4 top-0 bottom-0 left-0 right-0 items-end bg-t-blue/5 z-40 flex flex-col justify-end">
							<p className="w-full h-[120px] font-body text-left text-lg font-bold">Clases sobre la historia de la música para adultos</p>
							<CTA waMessage="Hola! Quiero saber más sobre las clases sobre la historia de la música para adultos" title="Conoce más" />
						</div>{" "}
						<Image src={"/imgs/keys/4.png"} fill alt="keys 1" />
						<div className="bg-black absolute top-0 rounded-bl-lg right-0 w-12 bottom-[200px]"></div>
					</div>
				</div>
			</div>
			<div className="relative min-h-[90svh] pb-10 w-[100svw] px-10 flex justify-center flex-col items-center overflow-x-auto lg:min-h-[80svh]">
				<p className="text-t-white text-3xl mb-10 md:text-5xl text-center sticky left-2 font-semibold">¿Qué habilidades fomenta el aprendizaje musical?</p>
				<div className="flex flex-col gap-y-12 items-center">
					<ul className="p-5 ring-2 ring-t-white min-h-20 lg:w-4/6 flex flex-col gap-y-3">
						<li className="md:text-lg text- font-body text-t-white">La música estimula el cerebro, mejora memoria, atención y concentración.</li>
						<li className="md:text-lg font-body text-t-white">Ayuda a Los niños y adolescentes expresar y comprender emociones, regular estado de ánimo</li>
						<li className="md:text-lg font-body text-t-white">
							⁠Desarrolla la motricidad fina y gruesa. Tocar piano requiere la coordinación de ambas manos y ambos hemisferios cerebrales.
						</li>
						<li className="md:text-lg font-body text-t-white">
							⁠Desarrolla habilidades de cooperación y trabajo en equipo en actividades de canto, danzas, conciertos en colegios.
						</li>
						<li className="md:text-lg font-body text-t-white">Desarrolla el gusto estético y pertenencia a la cultura musical milenaria.</li>
					</ul>
				</div>
			</div>
			<div className="relative min-h-[90svh] pb-10 w-[100svw] px-10 flex justify-center flex-col items-center overflow-x-auto lg:min-h-[80svh]">
				<p className="text-t-white text-4xl mb-10 md:text-5xl sticky left-2 font-semibold">Programas empresariales</p>
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
						<p className="font-body">¿Interesado en saber más sobre algún programa?</p>
						<CTA waMessage="Hola! Quiero saber más sobre los programas empresariales" title="Ponte en contacto conmigo" />
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
