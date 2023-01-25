import './socialHeader.scss';

import logo from '../../resources/img/Avengers_logo.png'

const SocialHeader = () => {
	return(
		<header className="social__header">
			<a href="Profile"><img src={logo} alt="logo" className="social__logo" /></a>
			<div className="social__header-text">Avangers social network</div>
		</header>
	)
}

export default SocialHeader;
