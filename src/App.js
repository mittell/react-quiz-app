import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import FinalScore from './pages/FinalScore';
import Questions from './pages/Questions';
import Settings from './pages/Settings';

import { Container, Box } from '@mui/material';

function App() {
	return (
		<BrowserRouter>
			<Container maxWidth='sm'>
				<Box textAlign='center' mt={5}>
					<Routes>
						<Route path='/' element={<Settings />} />
						<Route path='/questions' element={<Questions />} />
						<Route path='/score' element={<FinalScore />} />
						<Route path='*' element={<Navigate to='/' replace />} />
					</Routes>
				</Box>
			</Container>
		</BrowserRouter>
	);
}

export default App;
