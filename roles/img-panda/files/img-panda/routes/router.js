// get access to another 2 other function tat I wrote:
// Separation is for convenience...
var imgAccess = require('../data/imgAccess/imgRetriever');
var util = require('../util/ExtractFilePath');
var fs = require('fs');

// Basicly GetRandomImage is a function that use the above function that I expliend above.
// They are supused to read the dir (where the images) and list them and finaly return a Random image path.
function GetRandomImage() {
                var files = imgAccess.GetImage();
                var filePath = util.ExtractFilePath(files);
                return (filePath);

}


module.exports= {
        GetRandomImage:GetRandomImage
}
