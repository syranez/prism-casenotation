/**
 * One TestCase to observe it all.
 *
 */

var buster = require("buster");
var assert = buster.assertions.assert;

var parsePrismCaseNotation = require("../index.js");

buster.testCase("PRISM  CaseNotation", {

    "example case notation": function () {

        var id = "P2ESQC120001234";

        var caseNotation = parsePrismCaseNotation(id);

        assert.equals(caseNotation.provider,    "P2",      "PRISM Provider is wrong.");
        assert.equals(caseNotation.contentType, "E",       "Content Type  is wrong.");
        assert.equals(caseNotation.source,      "SQC",     "Fixed trigraph, denotes PRISM source collection is wrong.");
        assert.equals(caseNotation.year,        "12",      "Year CASN established for selector iswrong.");
        assert.equals(caseNotation.serial,      "0001234", "Serial # is wrong");
    },

    "availableProviders is an object": function () {

        var caseNotation = parsePrismCaseNotation();

        assert.isObject(caseNotation.availableProviders, "availableProviders is not an object.");
    },

    "availableContentTypes is an object": function () {

        var caseNotation = parsePrismCaseNotation();

        assert.isObject(caseNotation.availableContentTypes, "availableContentTypes is not an object.");
    },

    "isProvider": function () {

        var caseNotation = parsePrismCaseNotation();

        assert.isTrue(caseNotation.isProvider("Apple"),    "Apple is not anylonger a PRISM Provider \o/");
        assert.isTrue(caseNotation.isProvider("Facebook"), "Sure?");
        assert.isFalse(caseNotation.isProvider("ME"),      "I never will.");
    }
  
});
