window.onload = function() {

	// $('.btn-collapse').sideNav();
	
	window.onscroll = function() {
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		if (t > 50) {
			$('#navBar').attr('class', 'scrolled');
		} else {
			$('#navBar').attr('class', 'unscrolled');
		}
	}

	$('.navBlock').hover(function() {
		$('.navBlock').children().attr('class', '');
		$('.navBlock').dropdown("close");
		$(this).dropdown("open");
		$(this).children().attr('class', 'u-click'); 
	}, function() {
		var flag = false;
		$('.dropdown-content').hover(function() {
			flag = true;
		}, function() {
			$('.navBlock').dropdown("close");
		});
		
		
		
	});


	setTimeout('$(\'#clock-pointer\').addClass(\'clock-move\')', 3000);
	setTimeout('redCellFloat()', 3000);

	// var t = setTimeout('alert("111")', 2000);
	setTimeout('$(\'.cell-red:eq(0)\').addClass(\'animated bounce infinite\')', 7100);
	setTimeout('$(\'.cell-red:eq(1)\').addClass(\'animated bounce2 infinite\')', 7300);
	setTimeout('$(\'.cell-red:eq(2)\').addClass(\'animated bounce infinite\')', 7400);
	setTimeout('$(\'.cell-red:eq(3)\').addClass(\'animated bounce2 infinite\')', 7200);
	setTimeout('blueCellFloat()', 7000);
	setTimeout('$(\'.cell-blue:eq(0)\').addClass(\'animated bounce infinite\')', 11000);
	setTimeout('$(\'.cell-blue:eq(1)\').addClass(\'animated bounce2 infinite\')', 11100);
	setTimeout('$(\'.cell-blue:eq(2)\').addClass(\'animated bounce infinite\')', 11300);
	setTimeout('$(\'.cell-blue:eq(3)\').addClass(\'animated bounce2 infinite\')', 11100);
	setTimeout('$(\'.cell-blue:eq(4)\').addClass(\'animated bounce infinite\')', 11200);
	setTimeout('$(\'.cell-blue:eq(5)\').addClass(\'animated bounce2 infinite\')', 11100);
	setTimeout('$(\'.cell-blue:eq(6)\').addClass(\'animated bounce infinite\')', 11200);
	setTimeout('$(\'.cell-blue:eq(7)\').addClass(\'animated bounce2 infinite\')', 11300);

}

function redCellFloat() {
	$('.red-left:eq(0)').addClass('cell-target cell-red-left-target-1');
	$('.red-left:eq(1)').addClass('cell-target cell-red-left-target-2');
	$('.red-right:eq(0)').addClass('cell-target cell-red-right-target-1');
	$('.red-right:eq(1)').addClass('cell-target cell-red-right-target-2');
}

function blueCellFloat() {
	$('.blue-left:eq(0)').addClass('cell-target cell-blue-left-target-1');
	$('.blue-left:eq(1)').addClass('cell-target cell-blue-left-target-2');
	$('.blue-left:eq(2)').addClass('cell-target cell-blue-left-target-3');
	$('.blue-left:eq(3)').addClass('cell-target cell-blue-left-target-4');
	$('.blue-right:eq(0)').addClass('cell-target cell-blue-right-target-1');
	$('.blue-right:eq(1)').addClass('cell-target cell-blue-right-target-2');
	$('.blue-right:eq(2)').addClass('cell-target cell-blue-right-target-3');
	$('.blue-right:eq(3)').addClass('cell-target cell-blue-right-target-4');
}
