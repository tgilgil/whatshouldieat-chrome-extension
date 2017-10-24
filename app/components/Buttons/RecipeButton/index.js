import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const RecipeButton = styled(Button)`
    margin: 0.5em 0;
    font-size: 1.125em;
    border: none;
    font-weight: bold;
    border-radius: initial;
    background-color: white;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 0.6em;
    padding-bottom: 0.6em;
    color: black;

    &:hover {
        background-color: #ECECEC;
    }
`;

export default RecipeButton;
