var request;

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'data.json');

request.onreadystatechange = function() {

        console.log("request.status => " + request.status);

        console.log("request.readyState => " + request.readyState);

        if ((request.status === 200) && (request.readyState === 4)) {

            console.log(" request.responseText => " + request.responseText);

            info = JSON.parse(request.responseText);

            console.log("info => " + info );

            console.table(info);

            console.table(JSON.stringify(info));

            var output = '';

            String.prototype.ucfirst = function() {
                return this.charAt(0).toUpperCase() + this.substr(1);
            }

            for (var i = 0; i <= info.links.length - 1; i++) {
                for (key in info.links[i]) {
                    if (info.links[i].hasOwnProperty(key)) {
                        output += '<li>' +
                            '<a href = "' + info.links[i][key] +
                            '">' + key.ucfirst() + '</a>';
                        '</li>';
                    }
                }
            }
            var update = document.getElementById('links');
            update.innerHTML = output;
        } //ready
    } //event
request.send();
