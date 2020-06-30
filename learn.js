const redux = require('redux');

const createStore = redux.createStore;
const _combinedReducers = redux.combineReducers;

const ADD_TASK = 'ADD_TASK';
const ADD_USER = 'ADD_USER';

// action creator: returns an action object
const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload //same as payload: payload
  }
}

const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload //same as payload: payload
  }
}

const taskInitialState = {
  taskList: []
}

const userInitialState = {
  userList: []
}

// reducers
const taskReducer = (state = taskInitialState, { type, payload }) => {
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
const userReducer = (state = userInitialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        userList: [...state.userList, payload]
      }
    default:
      break;
  }
}

const reducer = _combinedReducers({
  task: taskReducer,
  user: userReducer
})

// 3 arguments: the reducer, initial state, middleware respectively
const store = createStore(reducer, undefined);

// You can get store state using getStaet() method.
console.log('Initial State', store.getState());

// If you want to listen to the changes inside the store.
// Whenever changes happen, callback function is fired.
const unsubscribe = store.subscribe(() => console.log('store updated', store.getState()));

// Dispatch
store.dispatch(addTask({
  title: 'CODING',
  isCompleted: false
}))
store.dispatch(addTask({
  title: 'DINNER',
  isCompleted: false
}))
store.dispatch(addTask({
  title: 'SHOPPING',
  isCompleted: false
}))
store.dispatch(addUser({
  name: 'David',
  age: 25
}))
store.dispatch(addUser({
  name: 'John',
  age: 30
}))

unsubscribe(); // doesn't listen to the changes anymore

