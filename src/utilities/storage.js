import {initialState} from '../store/state';

export const getInitialState = () => {
    let sessionValues = sessionStorage.getItem('scrawlr');

    return sessionValues ? JSON.parse(sessionValues) : initialState;
};
