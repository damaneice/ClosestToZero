describe("The closest to zero function", function() {
  var closestToZeroFinder;
	var rootId = 'closestToZero';

  beforeEach(function() {
     closestToZeroFinder = new ClosestToZeroFinder();
  });
	
  beforeEach(function(){
    $('body').append(
      '<div id="'+rootId+'">' +
        '<ul>' +
					'<li id="test1">0</li>' +
					'<li id="test2">1</li>' +
				'</ul>' + 
        '<ul>' +
					'<li id="test3"></li>' +
				'</ul>' + 
        '<ul>' +
					'<li>10</li>' +
					'<li>9</li>' +
					'<li id="test4">-11</li>' +
				'</ul>' + 
        '<ul>' +
					'<li id="test5">10</li>' +
					'<li>-10</li>' +
				'</ul>' + 
		'</div>'
    );
  });

  afterEach(function() {
    $('#'+rootId).remove();
  });

  it("should style the 0 element when it is present", function() {
		closestToZeroFinder.addStylesToULs();

    expect($('#test1').hasClass("closest")).toBeTruthy();
  });

  it("should not style the 1 element", function() {
		closestToZeroFinder.addStylesToULs();

    expect($('#test2').hasClass("closest")).toBeFalsy();
  });

  it("should not style when it is not a number", function() {
		closestToZeroFinder.addStylesToULs();

    expect($('#test3').hasClass("closest")).toBeFalsy();
  });

  it("should not style negative eleven", function() {
		closestToZeroFinder.addStylesToULs();

    expect($('#test4').hasClass("closest")).toBeFalsy();
  });
  
	it("should style positive number when the absolute value is identical", function() {
		closestToZeroFinder.addStylesToULs();

    expect($('#test5').hasClass("closest")).toBeTruthy();
  });
});
