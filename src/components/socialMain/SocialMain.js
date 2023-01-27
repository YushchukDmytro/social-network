import './socialMain.scss';

import SocialUser from '../socialUser/SocialUser';
import AddNewPost from '../addNewPost/AddNewPost';
import MyPost from '../myPost/MyPost';

import walper from '../../resources/img/post.jpg';


const SocialMain = ({posts}) => {

	const postsComponent = posts.map(item => {
		const{post, id} = item;
		return(
			<MyPost post={post} key={id}/>
		)
	})

	return(
		<div className="social__main">
			<div className="social__walper"><img src={walper} alt="walper" /></div>
			<SocialUser/>
			<AddNewPost/>
			{postsComponent}
		</div>
	)
}

export default SocialMain;