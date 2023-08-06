function StartClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/E-rkRaVVx/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}