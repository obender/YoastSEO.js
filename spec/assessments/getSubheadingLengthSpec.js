var subHeadingLengthAssessment = require( "../../js/assessments/getSubheadingLengthAssessment.js" );
var Paper = require( "../../js/values/Paper.js" );
var Factory = require( "../helpers/factory.js" );
var i18n = Factory.buildJed();

var paper = new Paper();
describe( "An assessment for finding the length of the subheadings.", function() {
	it( "returns headings < 50 chars. ", function() {
		var assessment = subHeadingLengthAssessment.getResult( paper, Factory.buildMockResearcher( [ 5, 5, 40 ] ), i18n );
		expect( assessment.getScore() ).toBe( 9 );
		expect( assessment.getText() ).toBe( "The length of all subheadings is less than or equal to the recommended maximum of 50 characters, which is great." );
		expect( assessment.hasMarks() ).toBe( false );
	} );
	it( "returns headings < 50 chars. ", function() {
		assessment = subHeadingLengthAssessment.getResult( paper, Factory.buildMockResearcher( [ 5, 5, 46 ] ), i18n );
		expect( assessment.getScore() ).toBe( 9 );
		expect( assessment.getText() ).toBe( "The length of all subheadings is less than or equal to the recommended maximum of 50 characters, which is great." );
		expect( assessment.hasMarks() ).toBe( false );
	} );
	it( "returns headings > 50 chars, 1 too long heading. ", function() {
		assessment = subHeadingLengthAssessment.getResult( paper, Factory.buildMockResearcher( [ 5, 5, 55 ] ), i18n );
		expect( assessment.getScore() ).toBe( 6 );
		expect( assessment.getText() ).toBe( "You have 1 subheading containing more than the recommended maximum of 50 characters." );
		expect( assessment.hasMarks() ).toBe( true );
	} );
	it( "returns headings > 50 chars, 1 extremely long heading. ", function() {
		assessment = subHeadingLengthAssessment.getResult( paper, Factory.buildMockResearcher( [ 5, 5, 85 ] ), i18n );
		expect( assessment.getScore() ).toBe( 3 );
		expect( assessment.getText() ).toBe( "You have 1 subheading containing more than the recommended maximum of 50 characters." );
		expect( assessment.hasMarks() ).toBe( true );
	} );
	it( "returns headings > 50 chars. 2 too long headings. ", function() {
		assessment = subHeadingLengthAssessment.getResult( paper, Factory.buildMockResearcher( [ 5, 54, 56 ] ), i18n );
		expect( assessment.getScore() ).toBe( 6 );
		expect( assessment.getText() ).toBe( "You have 2 subheadings containing more than the recommended maximum of 50 characters." );
		expect( assessment.hasMarks() ).toBe( true );
	} );
});
