import React from 'react';

import { Typography, Box, Button, CircularProgress } from '@mui/material';
import SelectField from '../components/SelectField';
import TextField from '../components/TextField';
import useAxios from '../hooks/useAxios';

function Settings() {
	const { response, error, loading } = useAxios({ url: '/api_category.php' });

	if (loading) {
		return (
			<Box mt={20}>
				<CircularProgress />
			</Box>
		);
	}

	if (error) {
		return (
			<Typography variant='h6' mt={20} color='red'>
				An error occurred...
			</Typography>
		);
	}

	const difficultyOptions = [
		{ id: 'easy', name: 'Easy' },
		{ id: 'medium', name: 'Medium' },
		{ id: 'hard', name: 'Hard' },
	];

	const typeOptions = [
		{ id: 'multiple', name: 'Multiple Choice' },
		{ id: 'boolean', name: 'True/False' },
	];

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<Typography variant='h2' fontWeight='bold'>
				Quiz App
			</Typography>
			<form onSubmit={handleSubmit}>
				<SelectField label='Category' options={response.trivia_categories} />
				<SelectField label='Difficulty' options={difficultyOptions} />
				<SelectField label='Type' options={typeOptions} />

				<TextField />

				<Box mt={3} width='100%'>
					<Button fullWidth variant='contained' type='submit'>
						Get Started
					</Button>
				</Box>
			</form>
		</>
	);
}

export default Settings;
