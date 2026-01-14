export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: null,
    episodes: [],
    locations: [],
    fav_characters:[],
    fav_episodes:[],
    fav_locations:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:

    case 'set_characters':

      return {
        ...store,
        characters: action.payload
      };

    case 'set_locations':

      return {
        ...store,
        locations: action.payload
      };
    case 'set_episodes':

      return {
        ...store,
        episodes: action.payload

      };

    case 'delete_favorite':

      return {

      }
      throw Error('Unknown action.');
  }
}
