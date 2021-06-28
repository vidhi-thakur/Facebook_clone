export const initialState = {
    user:null,
    likes: []
};

export const actionTypes = {
    SET_USER: "SET_USER",
    SET_LIKES: "SET_LIKES",
    REMOVE_LIKES: "REMOVE_LIKES"
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_LIKES:
            return {
                ...state,
                likes: [...state.likes, action.item]
            }
        case actionTypes.REMOVE_LIKES:
            let newLikes = [...state.likes];

            const index = state.likes.findIndex((likeItem) => action.item.id === likeItem.id)

            if(index>=0) {
                newLikes.splice(index, 1)
            }
            else {
                console.warn(`${action.item.id} did not like the post`);
            }

            return {
                ...state,
                likes: newLikes
            }
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }
    
        default:
            return state;
    }
};

export default reducer;