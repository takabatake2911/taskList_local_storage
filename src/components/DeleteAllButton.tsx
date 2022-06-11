import { FC } from 'react';
import styled from 'styled-components';
type PropsType = {
    deleteAll: React.MouseEventHandler<HTMLButtonElement>;
};
const ButtonContainer = styled.button`
    display: block;
    /* margin */
    margin-top: 1rem;
    margin-right: 5vw;
    margin-bottom: 0;
    margin-left: auto;
    /* padding */
    padding-top: 0.3rem;
    padding-right: 1rem;
    padding-bottom: 0.3rem;
    padding-left: 1rem;
    /* border */
    border-width: 1;
    border-color: black;
    border-style: solid;
    border-radius: 0.5rem;
    /* font */
    font-size: 1rem;
    /* color */
    background-color: red;
    color: white;
    &:hover {
        background-color: black;
        color: white;
    }
`;
const DeleteAllButton: FC<PropsType> = (props) => {
    return (
        <ButtonContainer onClick={props.deleteAll}>すべて削除</ButtonContainer>
    );
};

export default DeleteAllButton;
