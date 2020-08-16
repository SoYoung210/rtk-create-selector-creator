# rtk-create-selector-creator

This is that allows you to remove duplicates when using [createSelector](https://redux-toolkit.js.org/api/createSelector).

## Detail

```ts
// AS-is

const name = 'info'
const _ = createSlice({
  name,
  initialState,
  reducers: { /* */ },
})

const infoState = (state: RootState) => state[name];
const someValue = createSelector([infoState], state => state.foo.someValue);

// To-be

const infoSelector = createSelectorCreator(name); // create selector with slice name!
const someValue = infoSelector(state => state.foo.someValue);
```
