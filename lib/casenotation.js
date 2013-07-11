/**
 * parser stuff
 *
 */
function caseNotation (id) {

    this.id           = id;
    this.provider     = "";
    this.ccontentType = "";
    this.source       = "";
    this.year         = "";
    this.serial       = "";

    if (typeof id == "string") {
        this.parse(id);
    }
}

caseNotation.prototype.parse = function parse (id) {

    this.provider    = this.parseProvider(id);
    this.contentType = this.parseContentType(id);
    this.source      = this.parseSource(id);
    this.year        = this.parseYear(id);
    this.serial      = this.parseSerial(id);
};

caseNotation.prototype.parseProvider = function parseProvider (id) {

    return id.substr(0, 2);
};

caseNotation.prototype.parseContentType = function parseContentType (id) {

    return id.substr(2, 1);
};

caseNotation.prototype.parseSource = function parseSource (id) {

    return id.substr(3, 3);
};

caseNotation.prototype.parseYear = function parseYear (id) {

    return id.substr(6, 2);
};

caseNotation.prototype.parseSerial = function parseSerial (id) {

    return id.substr(8);
};

caseNotation.prototype.observe = function () {

    return "YOU are a bigger threat to democracy and freedom than I will ever be.";
};

module.exports = caseNotation;
