// function that get a arr of the dir's files calc the lengh of the arr and random a number between this lengh
//  In the end the function return a random path compare to the random num that she get.
function ExtractFilePath(files){
           var imgAr = files;
           var path = '/tmp/resources/'; //  images dir
           var num = Math.floor( Math.random() * imgAr.length );
           var img = imgAr[ num ];
           var img_path = path + img;
           return (img_path);
}

// The module.exports suppesed to aloow me to get acces to this function from another file.
module.exports = {
        ExtractFilePath:ExtractFilePath
}
