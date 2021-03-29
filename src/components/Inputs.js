import React from 'react';
import { StyledSubSection, StyledInput, StyledLabel, StyledError } from './styledSkins';

export const FormInput = ({ name, placeHolder, updateDetails, value, autoCapitalize, error }) => (
    <StyledSubSection margin="12px 8px">		
        {value !== '' && <StyledLabel htmlFor={name}>{placeHolder}</StyledLabel>}
		<StyledInput autoCapitalize={autoCapitalize} error={error} noMargin id={name} type="text" autoComplete="off" value={value} onChange={updateDetails} placeholder={placeHolder} />
        <StyledError>{error}</StyledError>
    </StyledSubSection>
);