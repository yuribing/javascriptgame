let targetPic = document.createElement("img");
let targetHeight, targetWidth;
let surfacePic;

targetPic.setAttribute("height", "100%");
targetPic.setAttribute("width", "100%");
targetPic.setAttribute("alt", "Funny Neko");

document.onpaste = function (event) {
    var items = (event.clipboardData || event.originalEvent.clipboardData).items;
    for (var index in items) {
        var item = items[index];
        if (item.kind === 'file') {
            var blob = item.getAsFile();
            var reader = new FileReader();
            reader.onload = function (event) {
                surfacePic = event.target.result; 
                document.getElementById("placehere").appendChild(targetPic);
                targetPic.setAttribute("src", surfacePic);
            }; 
            reader.readAsDataURL(blob);
        }
    }
};