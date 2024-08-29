import {useEffect, useReducer} from 'react';
import {UpvoteList} from './components/upvote-list/UpvoteList';
import {getInitialState} from './utilities/storage';
import {reducer} from './store/reducer';
import './App.css';

export const App = () => {
    const [state, dispatch] = useReducer(reducer, getInitialState());
    const handleAddVoteClick = (listNumber) => {
        dispatch({
            listNumber,
            type: 'addVote'
        });
    };
    const handleUpvoteClick = (listNumber) => {
        dispatch({
            listNumber,
            type: 'toggleVoteStatus'
        });
    };

    useEffect(() => {
        sessionStorage.setItem('scrawlr', JSON.stringify(state));
    }, [state]);

    return (
        <main className='app'>
            <UpvoteList
                list={state.listOne}
                onAddVoteClick={() => handleAddVoteClick('listOne')}
                onUpvoteClick={() => handleUpvoteClick('listOne')}
            />
            <UpvoteList
                list={state.listTwo}
                onAddVoteClick={() => handleAddVoteClick('listTwo')}
                onUpvoteClick={() => handleUpvoteClick('listTwo')}
            />
            <UpvoteList
                list={state.listThree}
                onAddVoteClick={() => handleAddVoteClick('listThree')}
                onUpvoteClick={() => handleUpvoteClick('listThree')}
            />
        </main>
    );
};
