/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../store/dataStore";
import { rockets } from "../Constants";
import RocketCard from "../Components/rocketCard";
import SearchBar from "../Components/SearchBar";

const Rockets = () => {
	// fetch data from api
	const dispatch = useDispatch();
	const { items, status, error } = useSelector((state) => state.data);

	// search bar and filter
	const [data, setData] = useState(rockets);
	const [filteredData, setFilteredData] = useState(rockets);

	// useEffect(() => {
	// 	if (status === "idle") {
	// 		dispatch(fetchItems());
	// 	}
	// }, [dispatch, status]);

	// if (status === "loading") {
	// 	return <div>Loading...</div>;
	// }

	// if (status === "failed") {
	// 	return <div>Error: {error}</div>;
	// }

	const handleSearch = (searchTerm, selectedFilter) => {
		const filtered = data.filter((item) =>
			item[selectedFilter]
				.toString()
				.toLowerCase()
				.includes(searchTerm.toLowerCase())
		);
		console.log(filtered);
		setFilteredData(filtered);
	};

	const handleFilterChange = (selectedFilter, searchTerm) => {
		const filtered = data.filter((item) =>
			item[selectedFilter]
				.toString()
				.toLowerCase()
				.includes(searchTerm.toLowerCase())
		);
		console.log(filtered);
		setFilteredData(filtered);
	};

	// paginated grid
	const itemsPerPage = 4; // Number of items to display per page
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(filteredData.length / itemsPerPage);
	// Calculate the range of items to display on the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = filteredData.slice(startIndex, endIndex);

	const nextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const pageTransition = {
		duration: 0.5,
		ease: "easeInOut",
	};

	return (
		<motion.section
			initial={{ opacity: 0, x: -100 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 2 }}
			id="rockets"
			className="max-container max-sm:mt-12 text-white"
		>
			<div className="flex flex-col gap-5 justify-start">
				<h2 className="text-4xl font-palanquin font-bold">Rockets</h2>
				<p className="text-slate-300">
					Experience first hand the rockets that carry the freedom of earth.
				</p>
			</div>

			{/* search button */}
			<div>
				<SearchBar
					data={data}
					onSearch={handleSearch}
					onFilterChange={handleFilterChange}
				/>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				transition={pageTransition}
				key={currentPage}
				className="grid mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap:10"
			>
				{currentItems.map((rocket) => (
					<RocketCard key={rocket.name} {...rocket} />
				))}
			</motion.div>
			<div className="mt-4 flex justify-between">
				<button
					onClick={prevPage}
					disabled={currentPage === 1}
					className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
				>
					Previous
				</button>
				<button
					onClick={nextPage}
					disabled={currentPage === totalPages}
					className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
				>
					Next
				</button>
			</div>
		</motion.section>
	);
};

export default Rockets;
