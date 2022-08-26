import React from 'react';
import { useDispatch } from 'react-redux';

import { Box, FormControl, TextField as Text } from '@mui/material';
import { handleAmountChange } from '../redux/actions';

function TextField() {
	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(handleAmountChange(e.target.value));
	};

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
