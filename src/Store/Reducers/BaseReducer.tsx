import { INamedAPIResource } from "interfaces/PokeApi";

export type IState = {
  pokemons: INamedAPIResource[];
  offset: number;
  limit: 12 | 24 | 36;
  maxId: number;
  hasNext: boolean;
};

export type IAction = {
  type: string;
  payload?: INamedAPIResource[] | boolean | number | 12 | 24 | 36;
};

const initialState: IState = {
  pokemons: [],
  offset: 0,
  limit: 12,
  maxId: 1,
  hasNext: false,
};

export enum BaseTypes {
  SetPokemons = "SET_POKEMONS",
  NextPage = "NEXT_PAGE",
  SetLimit = "SET_LIMIT",
  SetNext = "SET_NEXT",
  SetMaxId = "SET_MAX_ID",
}

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case BaseTypes.SetPokemons:
      return {
        ...state,
        pokemons: [
          ...state.pokemons,
          ...(action.payload as INamedAPIResource[]),
        ],
      };
    case BaseTypes.NextPage:
      return { ...state, offset: state.offset + state.limit };
    case BaseTypes.SetLimit:
      return { ...state, limit: action.payload, pokemons: [], offset: 0 };
    case BaseTypes.SetNext:
      return { ...state, hasNext: action.payload };
    case BaseTypes.SetMaxId:
      return { ...state, maxId: action.payload };
    default:
      console.log("Error in reducer");
      return state;
  }
};

export { initialState, reducer };
