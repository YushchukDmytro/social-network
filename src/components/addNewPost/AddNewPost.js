import './addNewPost.css';

const AddNewPost = () => {
	return(
		<div className="social__newpost">
			<div className="social__newpost-my">My posts</div>
			<form action="" className="social__newpost-add">
				<input type="text" className="social__newpost-input" placeholder='Your news...' />
				<button className='social__newpost-button'>Send</button>
			</form>
		</div>
	)
}

export default AddNewPost;