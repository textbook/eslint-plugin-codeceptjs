/**
 * @fileoverview Eslint rules for CodeceptJS
 * @author Peter Onneby
 */
"use strict";

module.exports = {
  environments: {
    codeceptjs: {
      globals: {
        actor: false,
        Feature: false,
        Scenario: false,
        xScenario: false,
        Before: false,
        After: false,
        BeforeSuite: false,
        AfterSuite: false,
        within: false,
        Data: false,
        DataTable: false,
        Helper: false
      },
    }
  },
  rules: {
    "no-actor-in-scenario": require("./lib/rules/no-actor-in-scenario"),
    "no-exclusive-tests": require("./lib/rules/no-exclusive-tests"),
    "no-skipped-tests": require("./lib/rules/no-skipped-tests")
  }
};
