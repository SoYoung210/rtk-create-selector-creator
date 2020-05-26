import { CombinedState, Reducer } from 'redux';

// interface SelectorCreator<
//   State = ReturnType<Reducer<CombinedState<any>>>,
//   Name extends string = string
// >
// {
//   name: Name;
//   reducer: Reducer<State>;
// }
// https://github.com/reduxjs/redux-toolkit/issues/536
const createSelectorCreator = (
  name: string,
) => (state: ReturnType<Reducer<CombinedState<any>>>) => {
  return state[name];
};

export default createSelectorCreator;
