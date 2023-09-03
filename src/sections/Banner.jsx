import { astronaut } from "../assets/images";
import { motion } from "framer-motion";

const Banner = () => {
	return (
		<section
			id="home"
			className="w-full flex xl:flex-row flex-col min-h-screen justify-center gap-10 max-container text-white overflow-x-hidden"
		>
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 2 }}
				className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 z-10"
			>
				<h1 className="text-white text-2xl font-bold max-sm:text-xl text font-palanquin">
					TO MARS AND BEYOND
				</h1>
				<p className="mt-8 max-sm: max-w-md">
					In 2020, SpaceX returned America&apos;s ability to fly NASA astronauts
					to and from the International Space Station on American vehicles for
					the first time since 2011. In addition to flying astronauts to space
					for NASA, SpaceX&apos;s Dragon spacecraft can also carry commercial
					astronauts to Earth orbit, the ISS or beyond.
				</p>
			</motion.div>

			<motion.div
				
				className="flex flex-1 justify-center relative items-center max-md:hidden z-0"
			>
				<motion.img
				animate={{
					x: [0, 100, 150, 200, 150, 100, 0],
					rotate: [0, 90, 180, 270, 180, 90, 0],
					scale: [0.8, 1, 1, 1, 1, 1, 0.8],
					
				}}
				transition={{duration: 60, repeat: Infinity, repeatType: "reverse"}}
					src={astronaut}
					alt="Astronaut"
					width={610}
					height={500}
					className="object-contain relative"
				/>
			</motion.div>
		</section>
	);
};

export default Banner;
