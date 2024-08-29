import {ReactComponent as AddVoteLogo} from '../../icons/plus.svg';
import {Upvote} from '../upvote/Upvote';
import './UpvoteList.css';

export const UpvoteList = ({ list, onAddVoteClick, onUpvoteClick }) => {
    const { numberOfVotes } = list;
    const votesArray = [...Array(numberOfVotes).keys()];

    return (
        <section className='upvote-list'>
            <ul>
                {votesArray.map((vote, index) => (
                    <li key={index}>
                        <Upvote
                            isUpvoted={list.isUpvoted}
                            onUpvoteClick={onUpvoteClick}
                        />
                    </li>
                ))}
            </ul>
            <AddVoteLogo
                className='add-vote-logo'
                data-testid='add-vote-logo'
                onClick={onAddVoteClick}
            />
        </section>
    );
};
