import SocialHeader from "../socialHeader/SocialHeader";
import SocialNavbar from "../socialNavbar/SocialNavbar";
import SocialMain from "../socialMain/SocialMain";
import Dialogs from "../dialogs/Dialogs";

import { Routes, Route} from 'react-router-dom';

import '../../style/style.scss';


function App() {
	return (
			<div className="app">
				<SocialHeader/>
				<main className="main">
					<SocialNavbar/>
					<Routes>
						<Route exact path ='/profile' element={<SocialMain/>}/>
						<Route exact path ='/dialog' element={<Dialogs/>}/>
						<Route exact path ='*' element={<Dialogs/>}/>
					</Routes>
				</main>
			</div>
	);
}

export default App;
