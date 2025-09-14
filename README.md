# Redux toolkit demo

## Redux jargon

- Store: The global state.
- Slice: A partition of Store for specific domain for eg. auth, purchases etc.
- Actions: Used to tell Redux, what to do with the state. They have two properties viz, type(string) and payload(optional)
- Reducers: Handle an action and based on the type of action, make changes to the Store/state. Reducers never mutate the state, they re-assign a new state. But `Redux-Toolkit` allows to mutate the state, as it handles the mutation logic and converts it to re-assingment.
