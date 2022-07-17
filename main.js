function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/J5_M0egbE/model.json',modelReady);
}

modelReady()
{
    classifier.classify(gotResults);
}