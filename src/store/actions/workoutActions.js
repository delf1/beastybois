export const createWorkout = (workout) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch({type: 'ADD_WORKOUT', workout});
    }
};

