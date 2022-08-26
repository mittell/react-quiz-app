import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FinalScore from './pages/FinalScore';
import Questions from './pages/Questions';
import Settings from './pages/Settings';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Settings />} />
				<Route path='/questions' element={<Questions />} />
				<Route path='/score' element={<FinalScore />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
