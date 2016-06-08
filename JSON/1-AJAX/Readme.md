# AJAX WITH JSON
- AJAX stands for Asynchronous JavaScript and XML.
- Without load the page we can access the server data.
- Using AJAX REQUEST
	- if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
		} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
		}
- Check the request.status and request.readyState
- Got the value and append it
- Using info = [JSON.parse](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) convert the data into object.