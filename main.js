function preload(){

}

function setup(){
    canvas = createCanvas(250,250);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(200,200);
    video.hide();

    image_Classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/7WCUSC7Sw/model.json", modelLoaded);
}

function modelLoaded(){
    console.log("model laoded")
}

function draw(){
    image(video, 0, 0, 250, 250);
    image_Classifier.classify(video, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error();
    }
    else{
        console.log(results);
        var object = results[0].label;
        var accuracy = results[0].confidence.toFixed(3);
        document.getElementById("object").innerHTML = object;
        document.getElementById("accuracy").innerHTML = accuracy;
    }
}