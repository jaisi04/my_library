import React from 'react';
import { URL_HOME } from '../assets/urls';
import { FormInput } from './Inputs';
import { FormButtonWrapper, StyledFormButton, StyledFormWrapper } from './styledSkins';

export const BookForm = ({ id, name, auther, count, description, updateDetails, handleBookSubmit, replace, errors }) => (
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
				/>
				<FormInput
					value={auther}
					name="auther"
					placeHolder="Auther"
					updateDetails={updateDetails}
					error={errors.auther}
				/>
				<FormInput
					value={count}
					name="count"
					placeHolder="Count"
					updateDetails={updateDetails}
					error={errors.count}
				/>
				<FormInput
					value={description}
					name="description"
					placeHolder="Description"
					updateDetails={updateDetails}
					error={errors.description}
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