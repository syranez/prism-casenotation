/**
 * CaseNotation
 *
 * Parses a PRISM CaseNotation and checks if someone is a provider.
 *
 */

var CaseNotation          = require("./lib/casenotation.js");
var availableProviders    = require("./lib/providers.js");
var availableContentTypes = require("./lib/contentTypes.js");


/**
 * checks if given parameter is a known provider.
 *
 * @return boolean
 */
CaseNotation.prototype.isProvider = function isProvider (provider) {

    if (typeof provider == "undefined") {
        return false;
    }

    provider = provider.toLowerCase();

    for (var p in this.availableProviders) {

        if (this.availableProviders[p].toLowerCase() === provider) {
            return true;
        }
    }

    return false;
};

module.exports = function (id) {

    var caseNotation = new CaseNotation(id);

    caseNotation.availableProviders    = availableProviders;
    caseNotation.availableContentTypes = availableContentTypes;

    return caseNotation;
};
