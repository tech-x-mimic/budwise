"use strict";

module.exports = {
  extends: ["stylelint-config-recommended"],
  plugins: ["stylelint-scss"],
  // https://stylelint.io/user-guide/rules/list#list-of-rules
  // https://github.com/kristerkari/stylelint-scss#readme
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "scss/selector-no-union-class-name": true,
    "scss/no-duplicate-mixins": true,
  }
};