export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

export type TodoAction = 
  | { type: 'ADD'; payload: Todo }
  | { type: 'DELETE'; payload: number }
  | { type: 'TOGGLE'; payload: number }
  | { type: 'RESET'}
  | { type: 'EDIT'; payload: { id: number; newText: string } };

export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type){
    case 'ADD':
      console.log('Action: ', action);
      return [...state, action.payload];
    
    case 'DELETE':
      console.log('Action: ', action);
      return state.filter(todo => todo.id !== action.payload);

    case 'TOGGLE':
      console.log('Action: ', action);
      return state.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo);

    case 'RESET':
      return [];  

    case 'EDIT':
      console.log('Action: ', action);
      return state.map(todo => todo.id === action.payload.id ? {...todo, text: action.payload.newText} : todo);

    default:
      return state;
  }
}
