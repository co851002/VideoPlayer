var conUrlCount = 0;
var myVideo = document.getElementById("myVideo");

//parsedData should be declared outside the function scope since we want it to be accessible from outside
var parsedData;
var callback = function (text) {
    parsedData = JSON.parse(text);
    console.log('parsed',parsedData)
    conUrlCount = 0;
    //after load play the first video
    playNext();
};

var video2 = document.getElementById('vid2');
if(video2){
  video2.addEventListener('click', playNext() );
};

//when page is loaded, data in json file is parsed and returned
function loadFunction() {
    //returning json data
    //ajax.get("clips.json", callback);

    //simulate
    getAjax(callback);
};


function playNext() {
    if (!parsedData) {
        return
    }
    var myVideo = document.getElementById("myVideo");
    myVideo.src = parsedData[conUrlCount]['content-url'];
    myVideo.play();
    conUrlCount++;


}


//to simulate
function getAjax(callback) {
    setTimeout(function () {
        callback(JSON.stringify([{
            "id": "ashklasd132asddfgdf",
                "name": "War on Drugs continues",
                "description": "Losses continue in agressive raid on local property",
                "content-url": "http://buffalogrove.sat.iit.edu/Kitty.mp4",
                "thumb-url": "http://buffalogrove.sat.iit.edu/thumb/dogs_friends-t2.jpg"
        }, {
            "id": "asdasd132asddf667jf",
                "name": "Parlimentary Proceedings",
                "description": "World Leaders meet to determine the latest policies on climate change relief",
                "content-url": "http://buffalogrove.sat.iit.edu/Clouds%2038%20Timelapse.mp4",
                "thumb-url": "http://buffalogrove.sat.iit.edu/thumb/colorful_clouds-t2.jpg"
        }, {
            "id": "123dfg6132asddfgdz",
                "name": "Weather for March 22nd 2015",
                "description": "Join Jeremy Brown for today's weather",
                "content-url": "http://buffalogrove.sat.iit.edu/Clouds-Time_lapse_22.mp4",
                "thumb-url": "http://buffalogrove.sat.iit.edu/thumb/hidden_lagoon-t2.jpg"
        }, {
            "id": "pzxc87asdkjl44h7h",
                "name": "Taking a walk on the wide-side",
                "description": "Cook Counties latest conservation efforts led to a new discovery",
                "content-url": "http://buffalogrove.sat.iit.edu/Flower_4.mp4",
                "thumb-url": "http://buffalogrove.sat.iit.edu/thumb/nature_scenes_3-t2.jpg"
        }, {
            "id": "mkiaasdsjdh7asd8889",
                "name": "Musical Stunner",
                "description": "Local musician proves nay-sayers wrong by providing ample range",
                "content-url": "http://buffalogrove.sat.iit.edu/Piano_keys.mp4",
                "thumb-url": "http://buffalogrove.sat.iit.edu/thumb/turkey_karadeniz_region-t2.jpg"
        }, {
            "id": "zklsjdpoiqwehbhfyvfy6h",
                "name": "H-Diddy Represent",
                "description": "The newest Album from H-Diddy",
                "content-url": "http://buffalogrove.sat.iit.edu/Pigeon.mp4",
                "thumb-url": "http://buffalogrove.sat.iit.edu/thumb/nanxiang_ancient_town_shanghai_china-t2.jpg"
        }, ]))
    }, 100)
}




loadFunction();

