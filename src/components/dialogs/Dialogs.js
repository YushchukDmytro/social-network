import { NavLink } from 'react-router-dom';

import ava from '../../resources/img/vision.png';

import './dialogs.scss';

const Dialogs = (props) => {

	// const data = [
	// 	{name: "Dima", id: 1},
	// 	{name: "Tania", id: 2},
	// 	{name: "Margaret", id: 3},
	// 	{name: "Andriy", id: 4}
	// ]

	return(
		<div className="social__dialogs">
			<div className="social__friends">
				<ul className="social__friends-list">
					<Friend name = "Dima" id="1" />
					<Friend name = "Tania" id="2"/>
					<Friend name = "Margaret" id="3"/>
					<Friend name = "Andriy" id='4'/>
				</ul>
			</div>
			<div className="social__dialog">
				<Message message = "Hi"/>
				<Message message = "Hi Andriy"/>
				<Message message = "Hi Margaret"/>
			</div>	
		</div>
	)
}

const Friend = (props) => {
	const {name, id} = props;
	return(
		<li className="social__friends-item">
			<NavLink to={"/dialog/" + id}>{name}</NavLink>
		</li>
	)
}

const Message = (props) => {
	const {message} = props;
	return(
		<div className="social__dialog-item">
			<img src={ava} alt="ava" />
			<div className="social__dialog-text">{message}</div>
		</div>
	)
} 


export default Dialogs;