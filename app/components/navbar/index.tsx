"use client";

import { useState } from "react";

interface INavbar {}

const Navbar = (props: INavbar) => {
	const [playing, setPlaying] = useState<boolean>(false);

	return (
		<div className="z-50 px-2 py-1 bg-black fixed top-0 left-0 right-0 h-13 lg:h-14 flex items-center justify-between">
			<div>
				<p className="font-title text-white italic font-semibold">{t("tatis.navbar.brand")}</p>
			</div>
			<div>
				{/* <button className="bg-black rounded-full w-10 h-10 shadow-sm ring-1 ring-white" onClick={() => setPlaying((p) => !p)}>
					{playing ? (
						<div className="max-w-10 max-h-10 overflow-hidden flex rounded-full">
							<div className="animate-loop-scroll min-w-[40px]">
								<Image src="/squiggly.svg" width={40} height={40} alt="squiggly"></Image>
							</div>
							<div className="animate-loop-scroll min-w-[40px]">
								<Image src="/squiggly.svg" width={40} height={40} alt="squiggly"></Image>
							</div>
						</div>
					) : (
						<div className="max-w-10 max-h-10 overflow-hidden flex">
							<div className=" min-w-[40px] flex justify-center">
								<Image src="/play.svg" width={35} height={35} alt="squiggly"></Image>
							</div>
						</div>
					)}
				</button> */}
			</div>
		</div>
	);
};
export default Navbar;
