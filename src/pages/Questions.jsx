import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Typography, Box, Button, CircularProgress } from '@mui/material';
import useAxios from '../hooks/useAxios';

const getRandomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max));
};

function Questions() {
	const {
		question_category,
		question_difficulty,
		question_type,
		amount_of_questions,
	} = useSelector((state) => state);

	const [questionIndex, setQuestionIndex] = useState(0);
	const [options, setOptions] = useState([]);

	console.log(options);

	useEffect(() => {
		if (response.results.length) {
			const question = response?.results[questionIndex];
			let answers = [...question.incorrect_answers];
			answers.splice(
				getRandomInt(question.incorrect_answers.length),
				0,
				question.correct_answer
			);
			setOptions(answers);
		}
		// eslint-disable-next-line no-use-before-define
	}, [response, questionIndex]);

	let apiUrl = `/api.php?amount=${amount_of_questions}`;

	if (question_category) {
		apiUrl = apiUrl.concat(`&category=${question_category}`);
	}

	if (question_difficulty) {
		apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
	}

	if (question_type) {
		apiUrl = apiUrl.concat(`&type=${question_type}`);
	}

	const { response, loading } = useAxios({ url: apiUrl });

	console.log(response);

	if (loading) {
		return (
			<Box mt={20}>
				<CircularProgress />
			</Box>
		);
	}

	return (
		<Box>
			<Typography variant='h4'>Question {questionIndex + 1}</Typography>
			<Typography mt={5}>{response.results[questionIndex].question}</Typography>
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
