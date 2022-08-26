import React from 'react';
import { Typography } from '@mui/material';
import SelectField from '../components/SelectField';

function Settings() {
	return (
		<>
			<Typography variant='h2' fontWeight='bold'>
				Quiz App
			</Typography>
			<form>
				<SelectField label='Category' />
				<SelectField label='Difficulty' />
				<SelectField label='Type' />
			</form>
		</>
	);
}

export default Settings;
