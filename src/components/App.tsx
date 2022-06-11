import { useEffect, useState } from 'react';
import { StateType } from '../types';
import Card from './Card';
import DeleteAllButton from './DeleteAllButton';
import Form from './Form';
const initialState: StateType = {
    word: '',
    wordList: [],
};
const App = () => {
    const [state, setState] = useState<StateType>(initialState);
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setState({ ...state, word: event.target.value });
    };
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const { word, wordList } = state;
        if (word === '') return;
        setState({
            ...state,
            word: initialState.word,
            wordList: [...wordList.slice(), word],
        });
    };
    const deleteWord =
        (deleteIndex: number): React.MouseEventHandler<HTMLButtonElement> =>
        () => {
            const { wordList } = state;
            const new_wordList = wordList.filter((word, index) => {
                if (index !== deleteIndex) return word;
            });
            setState({ ...state, wordList: [...new_wordList] });
        };
    const deleteAll = () => {
        if (state.wordList.length === 0) {
            setState({ ...state, word: '' });
            return;
        }
        if (!confirm('すべてのタスクを削除しますか？')) return;
        setState(initialState);
    };
    useEffect(() => {
        const wordList_raw_data = localStorage.getItem('wordList');
        if (wordList_raw_data === null) {
            return;
        }
        const wordList_loaded: string[] = JSON.parse(wordList_raw_data);
        setState({ ...state, wordList: [...wordList_loaded] });
    }, []);
    useEffect(() => {
        console.log('wordList outer', Date.now());
        window.localStorage.setItem('wordList', JSON.stringify(state.wordList));
    }, [state.wordList]);

    return (
        <>
            <Form
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                state={state}
            />
            {state.wordList.map((word, index) => (
                <Card
                    key={index}
                    handleClick={deleteWord(index)}
                    word={word}
                ></Card>
            ))}
            {state.wordList.length > 0 ? (
                <DeleteAllButton deleteAll={deleteAll} />
            ) : null}
        </>
    );
};

export default App;
