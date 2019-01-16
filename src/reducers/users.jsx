const initialState = {
    Users: [

    ]
};

const fetchPost = (state, users) => {
   
    return {
        ...state, Users : users.data.data
    }
}

const deleteUser = (element, state) => {
    let id = parseInt(element.target.getAttribute('data-userid'));
    let Users = state.Users.filter(User => User.id !== id);

    return {
        ...state, Users: Users
    }
}

export default (state=initialState, action ) => {
    switch(action.type){
        case 'DATA_RECIEVED' : return fetchPost(state, action.payload);
        case 'DELETE_USER' : return deleteUser(action.element, state);
        default :  return state;     
    }
}