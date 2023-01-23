
import SocialHeader from "../socialHeader/SocialHeader";
import SocialNavbar from "../socialNavbar/SocialNavbar";
import SocialMain from "../socialMain/SocialMain";
import Dialogs from "../dialogs/Dialogs";


import '../../style/style.css';

function App() {
	return (
		<div className="app">
			<SocialHeader/>
			<main className="main">
				<SocialNavbar/>
				{/* <SocialMain/> */}
				<Dialogs/>
			</main>
		</div>
	);
}

export default App;
