import React from 'react';
import { StyledSubSection, StyledInput, StyledLabel, StyledError } from './styledSkins';

export const FormInput = ({ name, placeHolder, updateDetails, value, error }) => (
    <StyledSubSection margin="12px 8px">		
        {value !== '' && <StyledLabel htmlFor={name}>{placeHolder}</StyledLabel>}
		<StyledInput error={error} noMargin id={name} type="text" value={value} onChange={updateDetails} placeholder={placeHolder} />
        <StyledError>{error}</StyledError>
    </StyledSubSection>
);