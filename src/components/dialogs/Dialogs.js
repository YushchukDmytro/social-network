import { NavLink } from 'react-router-dom';

import ava from '../../resources/img/vision.png';

import './dialogs.scss';


const Dialogs = (props) => {

	const data = [
		{name: "Dima", id: 1},
		{name: "Tania", id: 2},
		{name: "Margaret", id: 3},
		{name: "Andriy", id: 4}
	]

	const messages = [
		{message: "Hi!"},
		{message: "Hi Margaret!"},
		{message: "Hi Andry!"},
		{message: "Hi Dima!"},
		{message: "Hi somebody!"},
	]

	const messageComponent = messages.map(item => {
		const{message} = item;
		return(
			<Message message = {message}/>
		)
	})

	const friend = data.map(item => {
		const{name, id} = item;

		return(
			<Friend key={id} name={name} id={id}/>
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