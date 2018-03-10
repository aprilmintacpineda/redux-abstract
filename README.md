Having trouble with reducers that reach thousands of lines of codes? You came to the right place! It's easier to maintain and debug files with codes that does not even have to reach 100 lines!

You can stick to this:

```js
export default (state, action) => {
  switch (action.type) {
    case 'MyType1':
      // .. do some stuff
      return {
        ...state,
        // some update with the state
        key: 'newValue'
      };
    break;
    case 'MyType2':
      // .. do some stuff
      return {
        ...state,
        // some update with the state
        key: 'newValue'
      };
    break;
    case 'MyType3':
      // .. do some stuff
      return {
        ...state,
        // some update with the state
        key: 'newValue'
      };
    break;
    case 'MyType4':
      // .. do some stuff
      return {
        ...state,
        // some update with the state
        key: 'newValue'
      };
    break;
  }
}
```

It can get very long, especially for complex systems. Or you can switch to this:

**MyType1.js**

```js
export const MyType1 = (state, action) => {
  // .. do some stuff
  return {
    ...state,
    // some update with the state
    key: 'newValue'
  };
};
```

**MyType2.js**

```js
export const MyType2 = (state, action) => {
  // .. do some stuff
  return {
    ...state,
    // some update with the state
    key: 'newValue'
  };
};
```

**MyType3.js**

```js
export const MyType3 = (state, action) => {
  // .. do some stuff
  return {
    ...state,
    // some update with the state
    key: 'newValue'
  };
};
```

**MyType4.js**

```js
export const MyType4 = (state, action) => {
  // .. do some stuff
  return {
    ...state,
    // some update with the state
    key: 'newValue'
  };
};
```

# Guide

## Install

```
npm i -s redux-abstract
```

## Usage

The idea behind this library is to allow for modularity, this will basically allow you to split your reducer into multiple files.

#### File structure

- **myReducer/index.js** -- will represent the reducer itself.
- **myReducer/actions.js** -- will represent all the actions that can be dispatched by this reducer.
- **myReducer/actionTypes.js** -- will represent all action types that the reducer can handle.
- **myReducer/controllers/** -- a directory which will contain all the controllers for the actions. It will have an **index.js** file in it.

Your directory structure will look something like this:

```
/root
|-- reducers
|   | -- myReducer1
|   |    | -- actions.js
|   |    | -- initialState.js
|   |    | -- actionTypes.js
|   |    | -- index.js
|   |    | -- controllers
|   |    |    | -- myAction1.js
|   |    |    | -- myAction2.js
|   |    |     `-- index.js
|   | -- myReducer2
|   |    | -- actions.js
|   |    | -- initialState.js
|   |    | -- actionTypes.js
|   |    | -- index.js
|   |    | -- controllers
|   |    |    | -- myAction1.js
|   |    |    | -- myAction2.js
|   |    |     `-- index.js
```

#### Example codes

```
git clone git@github.com:aprilmintacpineda/redux-abstract-example.git
```

## Discussions / Contributions

If you have a new feature request, feature enhancement request, bug report, clarification, or if you have something you want to point out about the docs, feel free to open an issue or send a PR.

## License

MIT