import './socialUser.css';

import thor from '../../resources/img/thor.jpeg'

const SocialUser = () => {
	return(
		<div className="social__user">
			<div className="social__user-avatar"><img src={thor} alt="ava" /></div>
			<div className="social__user-descr">
				<div className="social__user-name">Dmutro Y.</div>
				<div className="social__user-birth">Date of Birth: 03 November 1996</div>
				<div className="social__user-local">Localization: Lutsk</div>
				<div className="social__user-educ">Education: LNTU</div>
				<div className="social__user-git">Acount git: <a href="git">Click here!</a></div>
			</div>
		</div>
	)
}

export default SocialUser;