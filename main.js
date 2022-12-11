img = "";
status = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}


function draw() {
    image(img,0,0,640,420);
    fill("#ff0000");
    text("Dog",40,80);
    noFill();
    stroke("#ff0000");
    rect(40,60,400,350);

    fill("#0000ff");
    text("Cat",300,100);
    noFill();
    stroke("#0000ff");
    rect(300,80,300,325)
}



