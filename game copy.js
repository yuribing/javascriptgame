let elem = document.createElement("img");

elem.setAttribute("height", "768");
elem.setAttribute("width", "1024");
elem.setAttribute("alt", "Flower");

document.onpaste = function (event) {
    var items = (event.clipboardData || event.originalEvent.clipboardData).items;
    console.log(JSON.stringify(items)); // might give you mime types
    for (var index in items) {
        var item = items[index];
        if (item.kind === 'file') {
            var blob = item.getAsFile();
            var reader = new FileReader();
            reader.onload = function (event) {
                console.log(event.target.result); // data url!
                document.getElementById("placehere").appendChild(elem);
                elem.setAttribute("src", event.target.result);
            }; 
            reader.readAsDataURL(blob);
        }
    }
};