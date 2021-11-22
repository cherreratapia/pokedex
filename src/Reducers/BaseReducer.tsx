import { INamedAPIResource } from "../interfaces/PokeApi";

interface IState {
  pokemons: INamedAPIResource[];
  offset: number;
  limit: 12 | 24 | 36;
  maxId: number;
  hasNext: boolean;
}

interface IAction {
  type: string;
  payload?: INamedAPIResource[] | boolean | 12 | 24 | 36;
}

const initialState: IState = {
  pokemons: [],
  offset: 0,
  limit: 12,
  maxId: 1,
  hasNext: false,
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return { ...state, offset: state.offset + state.limit };
    case "SET_LIMIT":
      return { ...state, limit: action.payload };
    case "SET_NEXT":
      return { ...state, hasNext: action.payload };
    case "SET_MAX_ID":
      return { ...state, maxId: action.payload };
    default:
      console.log("Error in reducer");
      return state;
  }
};

export { initialState, reducer };
