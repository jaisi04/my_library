import React from 'react';
import { URL_HOME } from '../assets/urls';
import { FormInput } from './Inputs';
import { FormButtonWrapper, StyledFormButton, StyledFormWrapper } from './styledSkins';

export const BookForm = ({ id, name, author, count, description, updateDetails, handleBookSubmit, replace, errors }) => (
	<form onSubmit={handleBookSubmit} onReset={() => replace(URL_HOME)}>
		<fieldset>
			<legend>{id ? 'Edit Book Details' : 'Add New Book Details'}</legend>
			<StyledFormWrapper>
				<FormInput
					value={name}
					name="name"
					placeHolder="Name"
					updateDetails={updateDetails}
					error={errors.name}
					autoCapitalize="words"
				/>
				<FormInput
					value={author}
					name="author"
					placeHolder="Author"
					updateDetails={updateDetails}
					error={errors.author}
					autoCapitalize="words"
				/>
				<FormInput
					value={count}
					name="count"
					placeHolder="Count"
					updateDetails={updateDetails}
					error={errors.count}
					autoCapitalize="off"
				/>
				<FormInput
					value={description}
					name="description"
					placeHolder="Description"
					updateDetails={updateDetails}
					error={errors.description}
					autoCapitalize="on"
				/>
				<FormButtonWrapper>
					<StyledFormButton type="reset" value="< Go to Home" />
					<StyledFormButton primary type="submit" value={id ? 'Save Details >' : 'Add Book >'} />
				</FormButtonWrapper>
			</StyledFormWrapper>
		</fieldset>
	</form>
);

export default BookForm;