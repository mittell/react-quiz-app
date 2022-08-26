import React, { useState } from 'react';

import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function SelectField({ label }) {
	const [value, setValue] = useState('');

	const handleChange = () => {};

	return (
		<Box mt={3} width='100%'>
			<FormControl size='small' fullWidth>
				<InputLabel>{label}</InputLabel>
				<Select value={value} label={label} onChange={handleChange}>
					<MenuItem>Option1</MenuItem>
					<MenuItem>Option2</MenuItem>
					<MenuItem>Option3</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}

export default SelectField;
