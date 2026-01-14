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
    fav_characters: [],
    fav_episodes: [],
    fav_locations: []
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
    case 'addCharacterFav':

      return {
        ...store,
        fav_characters: [...store.fav_characters, action.payload]
      };
    case 'deleteCharacterFav':

      return {
        ...store,
        fav_characters: [...store.fav_characters.filter((char) => { return char != action.payload })]
      };

    case 'addLocationFav':

      return {
        ...store,
        fav_locations: [...store.fav_locations, action.payload]

      };
    case 'deleteLocationFav':

      return {
        ...store,
        fav_locations: [...store.fav_locations.filter((location) => { return location != action.payload })]
      };

    case 'addEpisodeFav':

      return {
        ...store,
        fav_episodes: [...store.fav_episodes, action.payload]

      };
    case 'deleteEpisodeFav':

      return {
        ...store,
        fav_episodes: [...store.fav_episodes.filter((episode) => { return episode != action.payload })]
      };

      throw Error('Unknown action.');
  }
}
