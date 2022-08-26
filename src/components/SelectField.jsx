import React, { useState } from 'react';

import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function SelectField({ label, options }) {
	const [value, setValue] = useState('');

	const handleChange = () => {};

	return (
		<Box mt={3} width='100%'>
			<FormControl size='small' fullWidth>
				<InputLabel>{label}</InputLabel>
				<Select value={value} label={label} onChange={handleChange}>
					{options.map(({ id, name }) => (
						<MenuItem key={id}>{name}</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}

export default SelectField;
