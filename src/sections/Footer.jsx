import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	const githubUrl = "https://github.com/your-github-profile";
	const linkedinUrl = "https://linkedin.com/in/your-linkedin-profile";

	return (
		<footer className="text-white text-center">
			<div className="flex justify-center space-x-4">
				<a
					href={githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="text-slate-100 hover:text-gray-900"
				>
					<FontAwesomeIcon icon={faGithub} size="2x" />
				</a>
				<a
					href={linkedinUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="text-slate-100 hover:text-gray-900"
				>
					<FontAwesomeIcon icon={faLinkedin} size="2x" />
				</a>
			</div>
			<p className="mt-2 text-gray-500 text-sm">
				Connect with me on GitHub and LinkedIn
			</p>
		</footer>
	);
};

export default Footer;
