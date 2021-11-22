import { useContext } from "react";
import BaseContext from "Store/Contexts/BaseContext";
import { BaseTypes } from "Store/Reducers/BaseReducer";
import { Layout } from "StyledComponents";

interface IProps {
  setLoading: (loading: boolean) => void;
}

export default function Limit(props: IProps) {
  const { setLoading } = props;
  const { state, dispatch } = useContext(BaseContext);
  const { limit } = state;
  const limitOptions: (12 | 24 | 36)[] = [12, 24, 36];

  const setLimit = (param: 12 | 24 | 36) => {
    setLoading(true);
    dispatch({ type: BaseTypes.SetLimit, payload: param });
  };
  return (
    <Layout.Row justifyEnd>
      <Layout.ControlTitle>Show: </Layout.ControlTitle>
      {limitOptions.map((element) => (
        <Layout.ButtonLimit
          active={limit === element}
          onClick={() => setLimit(element)}
        >
          {element}
        </Layout.ButtonLimit>
      ))}
    </Layout.Row>
  );
}
