/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../store/dataStore";
import { rockets } from "../Constants";
import RocketCard from "../Components/rocketCard";
import SearchBar from "../Components/SearchBar";

const Rockets = () => {
	const dispatch = useDispatch();
	const { items, status, error } = useSelector((state) => state.data);

	const [data, setData] = useState(rockets);
	const [filteredData, setFilteredData] = useState(rockets);


	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchItems());
		}
	}, [dispatch, status]);

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	if (status === "failed") {
		return <div>Error: {error}</div>;
	}

	const handleSearch = (searchTerm, selectedFilter) => {
		const filtered = data.filter((item) =>
			item[selectedFilter]
				.toString()
				.toLowerCase()
				.includes(searchTerm.toLowerCase())
		);
    console.log(filtered)
		setFilteredData(filtered);
	};

	const handleFilterChange = (selectedFilter, searchTerm) => {
		const filtered = data.filter((item) =>
			item[selectedFilter]
				.toString()
				.toLowerCase()
				.includes(searchTerm.toLowerCase())
		);
    console.log(filtered)
		setFilteredData(filtered);
	};
	return (
		<section id="rockets" className="max-container max-sm:mt-12 text-white">
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

			<div className="grid mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap:10">
				{filteredData.map((rocket) => (
					<RocketCard key={rocket.name} {...rocket} />
				))}
			</div>
		</section>
	);
};

export default Rockets;
