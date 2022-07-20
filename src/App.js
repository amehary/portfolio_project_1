import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Fitness from './components/fitness/Fitness';
import Benefits from './components/benefits/Benefits';
import Personal from './components/personal/Personal';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<Fitness />
			<Benefits />
			<Personal />
		</div>
	);
}

export default App;
