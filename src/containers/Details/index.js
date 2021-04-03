import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import { URL_HOME } from '../../assets/urls';
import BookForm from '../../components/BookForm';

export const Details = props => {
	const { books, editBook, addBook } = useContext(AppContext);
	const { match: { params: { id } }, history: { replace } } = props;
	const defaultData = { name: '', author: '', count: 0, description: '', image: '' };
	const sampleData = JSON.parse(sessionStorage.getItem('sampleData'));
	const initialBookData = books.filter(book => +id === book.id)[0] || sampleData.filter(book => id === book.id)[0] || defaultData;
	const [bookData, setBookData] = useState(initialBookData);
	const [errors, setError] = useState({});

	const synthesizeFields = () => {
		let { name, author, count, description } = bookData;
		name = name && name.trim();
		name = name && name.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
		author= author && author.trim();
		author = author && author.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
		count = count && count.trim();
		count = count && count.replace(/^0+/, '');
		count = /^[1-9][.\d]*(,\d+)?$/.test(count) ? parseInt(count, 10) : count;
		description = description && description.trim();
		description = description && (description[0].toUpperCase() + description.substring(1));
		return { name, description, count, author };
	}

	const validateFields = (name, description, count, author) => {
		let errors = {};
		if (!name) {
			errors = { ...errors, name: `we support non-empty names`, isError: true };
		}
		if (name.length > 32) {
			errors = { ...errors, name: `we support names having maximum length as 32 letters`, isError: true };
		}
		if (!author) {
			errors = { ...errors, author: `we support non-empty author names`, isError: true };
		}
		if (author.length > 32) {
			errors = { ...errors, author: `we support author names having maximum length as 32 letters`, isError: true };
		}
		if (!/^\d+$/.test(count)) {
			errors = { ...errors, count: `Count should be an integer greater than or equal to 0(Zero)`, isError: true };
		}
		if (description.length > 96) {
			errors = { ...errors, description: `we support author names having maximum length as 96 letters`, isError: true };
		}
		return errors;
	}

	const handleBookSubmit = e => {
		e.preventDefault();
		const { name, description, count, author } = synthesizeFields();
		const errors = validateFields(name, description, count, author);
		if (!errors.isError) {
			id ? editBook({  name, description, count, author, id: +id}) : addBook({ name, description, count, author, id: new Date().getTime() });
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