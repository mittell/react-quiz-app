import React from 'react';

import { Box, FormControl, TextField as Text } from '@mui/material';

function TextField() {
	const handleChange = () => {};

	return (
		<Box mt={3} width='100%'>
			<FormControl fullWidth size='small'>
				<Text
					onChange={handleChange}
					variant='outlined'
					label='Amount of Questions'
					type='number'
					size='small'
				/>
			</FormControl>
		</Box>
	);
}

export default TextField;
