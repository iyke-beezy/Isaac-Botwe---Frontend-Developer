import { Banner, Capsules, Footer } from "./sections";

const App = () => (
	<main className="relative">
		{/* <Nav /> */}
		<section className="h-[60vh] bg-black xl:padding-l wide:padding-r padding-b">
			<Banner />
		</section>
		<section className="padding">
			<Capsules />
		</section>
		<section className="bg-white padding-x padding-t pb-8">
			<Footer />
		</section>
	</main>
);

export default App;
