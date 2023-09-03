import { Banner, Rockets, Footer } from "./sections";
import Nav from './Components/Nav';
const App = () => (
	<main className="relative scroll-smooth">
		<Nav />
		<section className="bg-black xl:padding-l wide:padding-r padding-b">
			<Banner />
		</section>
		<section className="bg-black padding">
			<Rockets />
		</section>
		<section className="bg-black padding-x padding-t pb-8">
			<Footer />
		</section>
	</main>
);

export default App;
