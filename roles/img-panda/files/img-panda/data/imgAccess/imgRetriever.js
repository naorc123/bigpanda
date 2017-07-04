// function that read the images dir and return an arr of the files`
var fs = require('fs');
function GetImage() {
        return fs.readdirSync('/root/resources'); // Img folder here.
}

module.exports={
        GetImage:GetImage
}
