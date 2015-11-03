module.exports = {
  "extends": "eslint:recommended",

  "parser": "babel-eslint",

  "env": {
    "commonjs": true,
    "es6": true
  },

  "ecmaFeatures": {
    "arrowFunctions": true,
    "binaryLiterals": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "octalLiterals": true,
    "regexUFlag": true,
    "regexYFlag": true,
    "restParams": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "unicodeCodePointEscapes": true,
    "globalReturn": true,
    "experimentalObjectRestSpread": false
  },

  "rules": {
    "no-unexpected-multiline": 2,

    "accessor-pairs": 2,
    "block-scoped-var": 2,
    "complexity": [1, 10],
    "consistent-return": 2,
    "dot-location": [2, "property"],
    "dot-notation": 2,
    "eqeqeq": [2, "smart"],
    "guard-for-in": 2,
    "no-alert": 1,
    "no-caller": 2,
    "no-div-regex": 2,
    "no-else-return": 2,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 1,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-floating-decimal": 2,
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-octal-escape": 2,
    "no-process-env": 1,
    "no-proto": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unused-expressions": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-void": 2,
    "no-warning-comments": 1,
    "no-with": 2,
    "radix": 2,
    "vars-on-top": 2,
    "wrap-iife": 2,
    "yoda": 2,

    "init-declarations": 0,
    "no-catch-shadow": 2,
    "no-label-var": 2,
    "no-shadow-restricted-names": 2,
    "no-undef-init": 2,

    "callback-return": 2,
    "handle-callback-err": 2,
    "no-path-concat": 1,
    "no-process-exit": 1,
    "no-sync": 1,

    "array-bracket-spacing": 2,
    "block-spacing": 2,
    "brace-style": 2,
    "comma-spacing": 2,
    "comma-style": 2,
    "computed-property-spacing": 2,
    "consistent-this": [1, "self"],
    "eol-last": 2,
    "indent": [2, 2, {"SwitchCase": 1}],
    "key-spacing": 2,
    "linebreak-style": 2,
    "new-parens": 2,
    "no-array-constructor": 2,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": 2,
    "no-negated-condition": 1,
    "no-new-object": 2,
    "no-restricted-syntax": [2, "WithStatement"],
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": 2,
    "object-curly-spacing": 2,
    "operator-assignment": 2,
    "operator-linebreak": [2, "before"],
    "padded-blocks": [1, "never"],
    "quotes": [2, "single"],
    "require-jsdoc": 1,
    "semi-spacing": 2,
    "semi": [2, "always"],
    "sort-vars": 1,
    "space-after-keywords": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [2, { "anonymous": "always", "named": "never" }],
    "space-before-keywords": 2,
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-return-throw-case": 2,
    "space-unary-ops": 2,
    "spaced-comment": 2,
    "wrap-regex": 2,

    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": 2,
    "constructor-super": 2,
    "generator-star-spacing": 2,
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "object-shorthand": 2,
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    "prefer-reflect": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "require-yield": 2
  }
};
