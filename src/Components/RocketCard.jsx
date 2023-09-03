import { useState } from "react";
import { motion } from "framer-motion";
import RocketModal from "./RocketModal";

const RocketCard = (props) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className="flex flex-1 flex-col w-full sm:w-full">
			<motion.img
				src=""
				alt=""
				className="w-[280px] h-[280px] mb-10 cursor-pointer rounded-tr-lg rounded-bl-lg"
				onClick={() => setShowModal(true)}
				whileTap={{ scale: 0.8 }}
				whileHover={{ scale: 1.1 }}
			/>
			<h3>{props.name}</h3>
			<p>{props.first_flight}</p>

			{showModal ? (
				<RocketModal setShowModal={setShowModal} {...props} />
			) : null}
		</div>
	);
};

export default RocketCard;
