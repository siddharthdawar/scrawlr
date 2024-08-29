export const reducer = (state, action) => {
    switch (action.type) {
        case 'addVote':
            return {
                ...state,
                [action.listNumber]: {
                    ...state[action.listNumber],
                    numberOfVotes: state[action.listNumber].numberOfVotes + 1
                }
            };
        case 'toggleVoteStatus':
            return {
                ...state,
                [action.listNumber]: {
                    ...state[action.listNumber],
                    isUpvoted: !state[action.listNumber].isUpvoted
                }
            };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};
