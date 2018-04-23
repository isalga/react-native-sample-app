How to run the app
-------------------

`npm install`
`npm install -g create-react-native-app`
`react-native run-ios`

Test commands
-------------------

Unit test:
`npm run test`

Typecheck:
`npm run flow`

Update snapshots:
`npm run updateSnapshot`

source structure
--------------
```
├── config/                 // (wunderground API key)
├── entities/
│   └── city                // react, redux, reselect code that represents city
│   └── weather             // ||
│   └── types.js            // types for typechecking
├── screens/                // App screens components that will be used in StackNavigator
├── services/               // point of contact to API's and parsing of responses
├── store/                  // redux store
├── styles/                 // global theme styles (colors, etc)
└── Navigator.js            // react-navigation StackNavigator
```
