import { render, screen } from '@testing-library/react';
import {App} from './App';
import userEvent from '@testing-library/user-event'

describe('Upvoting', () => {
  it('should be able to upvote a vote(s) list', async () => {
    let votes;

    const user = userEvent.setup();

    render(<App/>);

    const addAVoteButtonForListOne = screen.getAllByTestId('add-vote-logo')[0];

    votes = screen.queryAllByTestId('upvote-logo');

    expect(votes).toHaveLength(0);

    await user.click(addAVoteButtonForListOne);
    await user.click(addAVoteButtonForListOne);

    votes = await screen.findAllByTestId('upvote-logo');

    expect(votes).toHaveLength(2);

    votes.forEach((vote) => {
      expect(vote).toHaveClass('upvote-logo default')
    });

    const firstVoteLogoFromListOne = votes[0];

    await user.click(firstVoteLogoFromListOne);

    votes = await screen.findAllByTestId('upvote-logo');

    votes.forEach((vote) => {
      expect(vote).toHaveClass('upvote-logo upvoted');
    });
  });
});
