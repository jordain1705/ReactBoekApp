// State argument is not application state, only the state
//this reducer is responsible for

export default function (state = null, action){ // is state is undifend set it to null

switch (action.type){
  case 'BOOK_SELECTED':
  return action.payload; // payload a book. this returns the selected book
}


return state;


}
