import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants";
const Nav = () => {
	return (
		<header className="pading-x py-8 absolute z-10 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img src={headerLogo} alt="Logo" width={130} height={29} />
				</a>

				<ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								className="text-lg font-montserrat leading-normal bg-slate-50 p-2 rounded-tr-lg rounded-bl-lg"
								href={item.href}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>

				<div className="hidden max-lg:block">
					<img
						src={hamburger}
						alt="hamburger"
						width={25}
						height={25}
						
					/>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
