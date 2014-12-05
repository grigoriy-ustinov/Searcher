$(document).ready(function() {	
		$('#searchbox').keyup(function(){
		var searched = $('#searchbox').val(),
			table = $('table td');
			list = $('ul li');
			hide = $('#hide').prop('checked');
			
			console.log('Hide is ' + hide);
			
			function addBold(element,tobold)//replace founded letters with bold
			{
				var text = element.text();
				
				
				var highlightedText = '<b>' + tobold + '</b>';
    			var newText = text.replace(tobold, highlightedText);
				
				element.html(newText);
			}
			
			
		$("<style type='text/css'> .highlight{ background-color:rgba(221,221,221,1) ; font-weight:bold;} </style>").appendTo("head");
		if(table.length != 0)
		{
			table.each(function(){
				console.log('searchword is: ' + searched);
				var searchedLength = searched.length - 1;
				if(hide)
				{
					$(this).fadeIn('fast');
				}
				if($(this).text().charAt(searchedLength) == searched.charAt(searchedLength))
				{
					addBold($(this), searched);
				}
				else
				{
					if(hide)
					{
						$(this).fadeOut('fast');
					}
				}
				if($(this).text() == searched)
				{
					$(this).addClass('highlight');
					console.log($(this).text());
				}
				else
				{
					$(this).removeClass('highlight');
				}
			});
		}
		if(list.length != 0)
		{
			list.each(function()
			{
				console.log('searchword is: ' + searched);
				var searchedLength = searched.length - 1;
				
				
				if(hide)
				{
					$(this).fadeIn('fast');
				}
				
				
				if($(this).text().charAt(searchedLength) == searched.charAt(searchedLength))
				{
					addBold($(this), searched);
				}
				else
				{
					if(hide)
					{
						$(this).fadeOut('fast');
					}
				}
				if($(this).text() == searched)
				{
					$(this).addClass('highlight');
					console.log($(this).text());
				}
				else
				{
					$(this).removeClass('highlight');
				}
			});
		}
	});
});
