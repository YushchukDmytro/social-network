import './socialMain.scss';

import SocialUser from '../socialUser/SocialUser';
import AddNewPost from '../addNewPost/AddNewPost';
import MyPost from '../myPost/MyPost';

import walper from '../../resources/img/post.jpg';


const SocialMain = () => {
	const posts = [
		{post:"Hey, howe are you?"},
		{post:"Hey!"},
		{post:"I am fine!"},
	]

	const postsComponent = posts.map(item => {
		const{post} = item;
		return(
			<MyPost post={post}/>
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