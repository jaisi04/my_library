import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import { URL_HOME } from '../../assets/urls';
import BookForm from '../../components/BookForm';

export const Details = props => {
	const context = useContext(AppContext);
	const { match: { params: { id } }, history: { replace } } = props;
	const defaultData = { name: '', auther: '', count: 0, description: '', image: '' };
	const initialBookData = context.books.filter(book => +id === book.id)[0] || defaultData;
	const [bookData, setBookData] = useState(initialBookData);
	const [errors, setError] = useState({});

	const validateFields = () => {
		const { name, auther, count } = bookData;
		let errors = {};
		if (!name) {
			errors = { ...errors, name: `Name can't be empty`, isError: true };
		}
		if (!auther) {
			errors = { ...errors, auther: `Auther can't be empty`, isError: true };
		}
		if (!/^\d+$/.test(count)) {
			errors = { ...errors, count: `Count should be an integer greater than or equal to 0(Zero)`, isError: true };
		}
		return errors;
	}

	const handleBookSubmit = e => {
		e.preventDefault();
		const errors = validateFields();
		if (!errors.isError) {
			id ? context.editBook({ ...bookData, id: +id }) : context.addBook({ ...bookData, id: new Date().getTime() });
			replace(URL_HOME);
		} else {
			setError(errors);
		}
	}

	const updateDetails = e => {
		const { target: { value, id } } = e;
		setError({ isError: false });
		e.preventDefault();
		setBookData({ ...bookData, [id]: value });
	}

	return (
		<BookForm
			id={id}
			{...bookData}
			updateDetails={updateDetails}
			replace={replace}
			handleBookSubmit={handleBookSubmit}
			errors={errors}
		/>
	)
};