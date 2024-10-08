import {ReactComponent as UpvoteLogo} from '../../icons/arrow-up.svg';
import './Upvote.css';

export const Upvote = ({ isUpvoted, onUpvoteClick }) => {
    const upvoteStateClass = isUpvoted ? 'upvoted' : 'default';

    return (
        <UpvoteLogo
            className={`upvote-logo ${upvoteStateClass}`}
            data-testid='upvote-logo'
            onClick={onUpvoteClick}
        />
    );
};
