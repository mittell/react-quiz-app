import React from 'react';

import { Typography, Box, Button } from '@mui/material';
import SelectField from '../components/SelectField';
import TextField from '../components/TextField';

function Settings() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<Typography variant='h2' fontWeight='bold'>
				Quiz App
			</Typography>
			<form onSubmit={handleSubmit}>
				<SelectField label='Category' />
				<SelectField label='Difficulty' />
				<SelectField label='Type' />

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
