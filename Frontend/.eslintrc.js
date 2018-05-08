
module.exports = {
    "parser": "babel-eslint",
    "env": { // we are using es 6
        "browser": true,
        "es6": true
    },
    "settings": { // we are useing jsx
        "ecmascript": 6,
        "jsx": true
    },
    "parserOptions": {
        "ecmaVersion": 2017, //we are useing ecmaversion 2017
        "ecmaFeatures": { // we are haveing support for decorators, restSpred and jsx
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": 0,
        "function-paren-newline": 0,
        "linebreak-style": 0
    }
 };
 