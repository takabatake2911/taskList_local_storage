import { ChangeEventHandler, FC, FormEventHandler } from 'react';
import styled from 'styled-components';
import { StateType } from '../types';
type PropsType = {
    handleSubmit: FormEventHandler<HTMLFormElement>;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    state: StateType;
};
const FormContainer = styled.form`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`;
const InputContainer = styled.input`
    vertical-align: middle;
    border-radius: 0.3rem;
    font-size: 1.5rem;
    /* margin */
    margin-top: 0;
    margin-right: 0.5rem;
    margin-bottom: 0;
    margin-left: 0;
    /* padding */
    padding-top: 0.3rem;
    padding-right: 0.6rem;
    padding-bottom: 0.3rem;
    padding-left: 0.6rem;
`;
const ButtonContainer = styled.button`
    vertical-align: middle;
    border-radius: 0.3rem;
    background-color: white;
    font-size: 1.2rem;
    /* padding */
    padding-top: 0.3rem;
    padding-right: 0.6rem;
    padding-bottom: 0.3rem;
    padding-left: 0.6rem;
    &:hover {
        background-color: lightgreen;
    }
`;
const Form: FC<PropsType> = (props) => {
    return (
        <FormContainer onSubmit={props.handleSubmit}>
            <InputContainer
                type="text"
                onChange={props.handleChange}
                value={props.state.word}
                autoFocus={true}
            />
            <ButtonContainer type="submit">追加</ButtonContainer>
        </FormContainer>
    );
};

export default Form;
