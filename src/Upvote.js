import {ReactComponent as UpvoteLogo} from './icons/arrow-up.svg';
import './Upvote.css';

export const Upvote = ({isUpvoted = false, onUpvoteClick}) => {
    const upvoteStateClass = isUpvoted ? 'upvoted' : 'default';

    return (
        <UpvoteLogo
            className={`upvote-logo ${upvoteStateClass}`}
            onClick={onUpvoteClick}
        />
    );
};
