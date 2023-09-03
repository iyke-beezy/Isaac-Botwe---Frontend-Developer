import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
const sliderVariants = {
	incoming: (direction) => ({
		x: direction > 0 ? "100%" : "-100%",
		scale: 1.2,
		opacity: 0,
	}),
	active: { x: 0, scale: 1, opacity: 1 },
	exit: (direction) => ({
		x: direction > 0 ? "-100%" : "100%",
		scale: 1,
		opacity: 0.2,
	}),
};

const sliderTransition = {
	duration: 1,
	ease: [0.56, 0.03, 0.12, 1.04],
};

const RocketModal = (props) => {
	const IMAGES = props.flickr_images;
	const [[imageCount, direction], setImageCount] = useState([0, 0]);

	const activeImageIndex = wrap(0, IMAGES.length, imageCount);

	const swipeToImage = (swipeDirection) => {
		setImageCount([imageCount + swipeDirection, swipeDirection]);
	};

	const dragEndHandler = (dragInfo) => {
		const draggedDistance = dragInfo.offset.x;
		const swipeThreshold = 50;
		if (draggedDistance > swipeThreshold) {
			swipeToImage(-1);
		} else if (draggedDistance < -swipeThreshold) {
			swipeToImage(1);
		}
	};

	return (
		<section className="transition ease-in-out delay-150 ">
			<div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-full my-6 mx-auto max-w-screen-xl">
					<div className="border-0 rounded-lg shadow-lg relative flex min-h-full flex-col w-full backdrop-blur-xl bg-white/30 outline-none focus:outline-none">
						<div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
							<h3 className="text-3xl font=semibold">General Info</h3>
							<button
								className="bg-transparent border-0 text-white float-right"
								onClick={() => props.setShowModal(false)}
							>
								<span className="text-white opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
									x
								</span>
							</button>
						</div>
						<div className="relative p-6 flex flex-row justify-center items-start w-full">
							<motion.div
								className="overview flex flex-1 flex-col w-2/4"
								initial={{ opacity: 0, y: -100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 2, staggerChildren: 0.5 }}
							>
								<p>{props.name}</p>
								<h2 className="text-3xl max-md:text-xl max-sm:text-lg text-bold font-palanquin mb-5">
									Overview
								</h2>
								<div className="description">
									<p className="text-sm font-">{props.description}</p>
								</div>
								<div className="w-full flex flex-1 justify-between py-5 text-xs">
									<p className=" text-transform: uppercase">Height</p>
									<p>
										{props.height.meters}m{" "}
										<span className="text-slate-400">
											/ {props.height.feet} ft
										</span>
									</p>
								</div>
								<hr />

								<div className="w-full flex flex-1 justify-between py-5 text-xs">
									<p className=" text-transform: uppercase">Diameter</p>
									<p>
										{props.diameter.meters} m{" "}
										<span className="text-slate-400">
											/ {props.diameter.feet} ft
										</span>
									</p>
								</div>
								<hr />

								<div className="w-full flex flex-1 justify-between py-5 text-xs">
									<p className=" text-transform: uppercase">Mass</p>
									<p>
										{props.mass.kg} kg{" "}
										<span className="text-slate-400">/ {props.mass.lb} lb</span>
									</p>
								</div>
								<hr />

								{props.payload_weights.map((payload) => (
									<>
										<div className="w-full flex flex-1 justify-between py-5 text-xs">
											<p className=" text-transform: uppercase">
												Payload to {payload.id}
											</p>
											<p>
												{payload.kg} kg{" "}
												<span className="text-slate-400">
													/ {payload.lb} lb
												</span>
											</p>
										</div>
										<hr />
									</>
								))}
							</motion.div>
							<div className="sliderContainer flex flex-col items-center w-2/4">
								<div className="slider relative overflow-x-hidden w-[500px] h-[500px]">
									<AnimatePresence custom={direction}>
										<motion.div
											key={imageCount}
											style={{
												backgroundImage: `url(${IMAGES[activeImageIndex]})`,
											}}
											custom={direction}
											variants={sliderVariants}
											initial="incoming"
											animate="active"
											exit="exit"
											transition={sliderTransition}
											drag="x"
											dragConstraints={{ left: 0, right: 0 }}
											dragElastic={1}
											onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
											className="image absolute h-full w-full bg-cover bg-no-repeat bg-center will-change-transform"
										/>
									</AnimatePresence>
								</div>
								<div className="buttons">
									<button className="text-black rounded-tr-lg bg-slate-50 rounded-bl-lg p-2 m-2" onClick={() => swipeToImage(-1)}>PREV</button>
									<button className="text-black rounded-tr-lg bg-slate-50 rounded-bl-lg p-2 m-2" onClick={() => swipeToImage(1)}>NEXT</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RocketModal;
