import './socialNavbar.css';


const SocialNavbar = () => {
	return(
		<div className="social__navbar">
			<ul className="social__nav">
				<li className="social__item"><a href="/Profile">Profile</a></li>
				<li className="social__item"><a href="/Messages">Messages</a></li>
				<li className="social__item"><a href="/News">News</a></li>
				<li className="social__item"><a href="/Music">Music</a></li>
				<li className="social__item"><a href="/Settings">Settings</a></li>
			</ul>
		</div>
	)
}

export default SocialNavbar;