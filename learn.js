const redux = require('redux');

const createStore = redux.createStore;

const ADD_TASK = 'ADD_TASK';

// action creator: returns an action object
const addTask = () => {
  return {
    type: ADD_TASK,
    payload: {
      title: 'CODING',
      isCompleted: false
    }
  }
}


const initialState = {
  taskList: []
}

// reducers
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, payload]
      }

    default:
      break;
  }
}

// 3 arguments: the reducer, initial state, middleware respectively
const store = createStore(reducer, initialState);
// You can get store state using getStaet() method.
console.log('Initial State', store.getState());

