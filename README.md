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
├── config/                 // (wundergorun API key)
├── entities/
│   └── city                // react, redux, reselect code that represents city
│   └── weather             // ||
│   └── types.js            // flow types for typechecking
├── screens/                // App screens components
├── services/               // point of contact with API's and parsing of responses
├── store/                  // redux store
├── styles/                 // theme styles
└── Navigator.js            // react-navigation StackNavigator
```
