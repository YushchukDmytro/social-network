import './socialMain.scss';

import SocialUser from '../socialUser/SocialUser';
import AddNewPost from '../addNewPost/AddNewPost';
import MyPost from '../myPost/MyPost';

import walper from '../../resources/img/post.jpg';


const SocialMain = () => {
	return(
		<div className="social__main">
			<div className="social__walper"><img src={walper} alt="walper" /></div>
			<SocialUser/>
			<AddNewPost/>
			<MyPost/>
			<MyPost/>
			<MyPost/>
		</div>
	)
}

export default SocialMain;