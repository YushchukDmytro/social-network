import './myPost.scss';

import ava from '../../resources/img/abyss.jpg'

const MyPost = ({post}) => {
	return(
		<div className="social__mypost">
			<div className="social__mypost-wrapper">
				<img src={ava} alt="ava"/>
				<div className="social__mypost-message">{post}</div>
			</div>
		</div>
	)
}

export default MyPost;