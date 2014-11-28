function list(root) {
	var html = [];
	var category;
	for (var i = 0; i < root.products.length; ++i) {
	  var entry = root.products[i];
	  category = root.products[i].categoryPath[2].name;
	  console.log(category);	  
	  var salePercent = Math.floor(100 - ((entry.salePrice / entry.regularPrice) * 100));
	  html.push('<div class="product"><img src="', entry.image, '"/>');
	  html.push('<p>' + entry.name + '</p>');
	  html.push('<p class="regularPrice">Regular: ' + entry.regularPrice + '</p>');
	  html.push('<p class="salePrice">Sale: ' + entry.salePrice + '</p>');
	  html.push('<p class="salePercent">Percent Off: <span class="regularPrice">' + salePercent + '%</span></p>');
	  if (salePercent < 25){
	  	html.push('<p>Deal: <span class="badDeal">Bad Deal</span></p>');
	  }
	  else if (salePercent <= 44 && salePercent >= 25){
	  	html.push('<p>Deal: <span class="okDeal">Okay Deal</span></p>');
	  }
	  else if (salePercent <= 100 && salePercent >= 45){
	  	html.push('<p>Deal: <span class="goodDeal">Good Deal</span></p>');
	  }
	  html.push('<a href="'+ entry.url +'" target="_blank">View on bestbuy.com</a></div>');
	}
	if (category == 'Xbox One'){
		document.getElementById("xboxOneList").innerHTML = html.join("");	
	}
	else if (category == 'PlayStation 4'){
		document.getElementById("ps4List").innerHTML = html.join("");	
	}
	else if (category == 'Wii U'){
		document.getElementById("wiiUList").innerHTML = html.join("");	
	}
	else if (category == 'Xbox 360'){
		document.getElementById("xbox360List").innerHTML = html.join("");	
	}
	else if (category == 'PlayStation 3'){
		document.getElementById("ps3List").innerHTML = html.join("");	
	}
	else if (category == 'Wii'){
		document.getElementById("wiiList").innerHTML = html.join("");	
	}
	
}