import { NavLink } from 'react-router-dom';

import './socialNavbar.scss';

const SocialNavbar = () => {
	return(
		<div className="social__navbar">
			<ul className="social__nav">
				<li className="social__item"><NavLink to="/profile">Profile</NavLink></li>
				<li className="social__item"><NavLink to="/dialog">Messages</NavLink></li>
				<li className="social__item"><NavLink to="/news">News</NavLink></li>
				<li className="social__item"><NavLink to="/music">Music</NavLink></li>
				<li className="social__item"><NavLink to="/settings">Settings</NavLink></li>
			</ul>
		</div>
		
	)
}

export default SocialNavbar;