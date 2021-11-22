import { createContext } from "react";
import { IState, initialState, IAction } from "Store/Reducers/BaseReducer";

interface IContext {
  state: IState;
  dispatch: (action?: IAction) => void;
}

const Context = createContext<IContext>({
  state: initialState,
  dispatch: () => null,
});
export default Context;
