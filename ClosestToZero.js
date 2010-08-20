function ClosestToZeroFinder() {
		this.addStylesToULs = function(listOfIntegers) {
		$('ul').each(function(){
		var smallest = {
			number : Number.MAX_VALUE,
			li : null
		}
		$('li', this).each(function(){
				var number = parseInt($(this).text())
					if (Math.abs(number) <= smallest.number){
						smallest.number = Math.abs(number);
						smallest.li = $(this);
					}
			});
			if(smallest.li){
				smallest.li.addClass('closest');
			}	
		});
	};
}
