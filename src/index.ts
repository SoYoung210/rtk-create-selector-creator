import { createSelector } from 'redux-toolkit';
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
) => {
  return (fn: (params?: any) => any) => createSelector(
    [(state: any) => state[name]],
    fn,
  );
};

export default createSelectorCreator;
