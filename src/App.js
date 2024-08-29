import {Upvote} from './Upvote';
import {useState} from 'react';
import './App.css';

export const App = () => {
    const [isUpvoted, setIsUpvoted] = useState(false);

    return (
        <div className='app'>
            <Upvote
                onUpvoteClick={() => {
                    setIsUpvoted(!isUpvoted);
                }}
                isUpvoted={isUpvoted}
            />
        </div>
    );
}
