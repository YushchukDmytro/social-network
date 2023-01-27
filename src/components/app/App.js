import SocialHeader from "../socialHeader/SocialHeader";
import SocialNavbar from "../socialNavbar/SocialNavbar";
import SocialMain from "../socialMain/SocialMain";
import Dialogs from "../dialogs/Dialogs";

import { Routes, Route} from 'react-router-dom';

import '../../style/style.scss';


function App({state}) {
	const{messages, posts, infoData} = state;
	return (
			<div className="app">
				<SocialHeader/>
				<main className="main">
					<SocialNavbar/>
					<Routes>
						<Route exact path ='/profile' element={<SocialMain posts={posts}/>}/>
						<Route exact path ='/dialog' element={<Dialogs messages={messages} infoData={infoData}/>}/>
					</Routes>
				</main>
			</div>
	);
}

export default App;
