import React from 'react';

import { Typography, Box, Button } from '@mui/material';
import useAxios from '../hooks/useAxios';

function Questions() {
	let apiUrl = `/api.php?amount=10`;

	const { response, loading } = useAxios({ url: apiUrl });

	return (
		<Box>
			<Typography variant='h4'>Question 1</Typography>
			<Typography mt={5}>This is a question?</Typography>
			<Box mt={2}>
				<Button variant='contained'>Answer 1</Button>
			</Box>
			<Box mt={2}>
				<Button variant='contained'>Answer 2</Button>
			</Box>
			<Box mt={5}>Score 2 / 6</Box>
		</Box>
	);
}

export default Questions;
