import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLOR_AVAILABLE, COLOR_DANGER, COLOR_DEFAULT, COLOR_PRIMARY } from '../assets/colors';

export const StyledInput = styled.input`
	margin: ${props => props.noMargin ? 0 : '16px'};
	border: none;
	border-bottom: 1px solid ${props => props.error ? COLOR_DANGER : COLOR_DEFAULT};
	outline: none;
	font-size: 16px;
	width: 92%;
`;

export const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 8px 16px;
	font size: 24px;
	@media (max-width: 480px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const StyledText = styled.p`
	margin: 8px 16px;
	font-size: 16px;
	text-align: center;
`;

export const StyledLabel = styled.label`
	font-size: 16px;
`;

export const StyledBookText = styled.p`
	margin: ${props => props.noMargin ? '0' : '4px 0'};
	font-size: ${props => props.fs || '24px'};
	background-color: ${props => props.bgColor || 'initial'};
	border: 0.5px solid ${props => props.bgColor || 'initial'};
	border-radius: 4px;
	padding: 2px;
	width: ${props => props.width || 'auto'};
	white-space: ${props => props.width ? 'nowrap' : 'initial'};
  	overflow: hidden;
  	text-overflow: ellipsis;
`;

export const StyledLink = styled(Link)`
	border: 1px solid ${COLOR_DEFAULT};
	color: ${COLOR_DEFAULT};
	border-radius: 4px;
	padding: 4px;
	font-size: 16px;
	@media (max-width: 480px) {
		margin: 8px 0;
	}
	text-align: center;
	background-color: ${props => props.primary ? COLOR_PRIMARY : 'trasparent'};
	box-shadow: 0 1px 2px 0 ${COLOR_DEFAULT}, 0 1px 2px 0 ${COLOR_PRIMARY};
`;

export const StyledSection = styled.section`
	display: flex;
	flex-flow: column;
	align-items: flex-start;
	border: ${props => props.faded ? `1.5px solid ${COLOR_DANGER}` : `1.5px solid ${COLOR_AVAILABLE}`};;
	border-radius: 4px;
	margin: 8px;
	padding: 8px;
	flex: 1 1 0;
	width: 480px;
	flex-wrap: wrap;
	@media (max-width: 480px) {
		width: 92vw;
	}
	box-shadow: 0 2px 4px 0 ${COLOR_PRIMARY}, 0 2px 4px 0 ${COLOR_PRIMARY};
`;

export const StyledSubSection = styled.section`
	display: flex;
	flex-flow: ${props => props.row ? 'row' : 'column'};
	align-items: baseline;
	justify-content: ${props => props.row ? 'space-between' : 'center'};
	align-content: space-between;
	height:  ${props => props.height || '84px'};
	flex-wrap: wrap;
	width: 100%;
	flex: 1 1 0;
	margin: ${props => props.margin || 0};
`;

export const StyledFormWrapper = styled.section`
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	width: 480px;
	padding: 8px;
	@media (max-width: 480px) {
		width: 92vw;
	}
`;

export const FormButtonWrapper = styled.section`
	display: flex;
	justify-content: space-between;
	padding: 8px;
	width: 92%;
	align-items: center;
	flex-basis: 0;
	flex-wrap: wrap;
	background-color: transparent;
`;

export const StyledFormButton = styled.input`
	padding: 4px;
	background-color: ${props => props.primary ? COLOR_PRIMARY : 'inherit'};
	border: 1px solid ${COLOR_DEFAULT};
	border-radius: 4px;
	width: 100px;
	@media (max-width: 480px) {
		margin: 8px 0;
	}
	outline: none;
	cursor: pointer;
	box-shadow: 0 2px 4px 0 ${COLOR_DEFAULT}, 0 2px 4px 0 ${COLOR_PRIMARY};
`;

export const StyledError = styled.span`
	font-size: 12px;
	color: ${COLOR_DANGER};
`;


export const ScrollableSection = styled.section`
  height: calc(100vh - 200px);
  overflow-y: auto;
`;