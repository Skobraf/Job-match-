const initalState = {
    articles: []
};

function rootReducer(state = initalState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
};
export default rootReducer;