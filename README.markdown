# prism-casenotation

This modules parses a PRISM CaseNotation and splits it into the known parts.

The syntax of a PRISM Case Notation is shown on http://www.washingtonpost.com/wp-srv/special/politics/prism-collection-documents/

[![build status](https://secure.travis-ci.org/syranez/prism-casenotation.png)](http://travis-ci.org/syranez/prism-casenotation)

## Installation

`npm install prism-casenotation`

... or to install the package globally:

`npm install -g prism-casenotation`

## Usage

    var PrismCaseNotation = request("prism-casenotation");

    var yourPersonalCaseNotation = "...";
    var caseNotation = PrismCaseNotation(yourPersonalCaseNotation);
    
    console.log("My Provider:    " + caseNotation.provider);
    console.log("My ContentType: " + caseNotation.contentType);
    console.log("My Source:      " + caseNotation.source);
    console.log("My Year:        " + caseNotation.year);
    console.log("My Serial:      " + caseNotation.serial);
    
    // Bonus
    if (caseNotation.isProvider("Google")) {
        console.log("Shame on you!");
    }

## License

MIT
