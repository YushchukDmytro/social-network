import { NavLink } from 'react-router-dom';

import ava from '../../resources/img/vision.png';

import './dialogs.scss';


const Dialogs = ({messages, infoData}) => {

	const messageComponent = messages.map(item => {
		const{message, id} = item;
		return(
			<Message message = {message} key={id}/>
		)
	})

	const friend = infoData.map(item => {
		const{name, id} = item;
		return(
			<Friend name={name} id={id} key={id}/>
		)
	})

	return(
		<div className="social__dialogs">
			<div className="social__friends">
				<ul className="social__friends-list">
					{friend}
				</ul>
			</div>
			<div className="social__dialog">
				{messageComponent}
			</div>	
		</div>
	)
}

const Friend = ({name, id}) => {
	return(
		<li className="social__friends-item">
			<NavLink to={"/dialog/" + id}>{name}</NavLink>
		</li>
	)
}

const Message = ({message}) => {
	return(
		<div className="social__dialog-item">
			<img src={ava} alt="ava" />
			<div className="social__dialog-text">{message}</div>
		</div>
	)
} 


export default Dialogs;