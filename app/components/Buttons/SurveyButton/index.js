import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const SurveyButton = styled(Button)`
    margin: 0.5em 0;
    font-size: 1em;
    border: none;
    font-weight: bold;
    border-radius: initial;
    background-color: #71C3D4;
    width: 7.5em;
    margin-left: 1em;
    color: white;
    text-transform: none;

    &:hover {
        background-color: #569AAE;
        color: white;
    }

    &:visited {
        color: white;
    }
`;

export default SurveyButton;
