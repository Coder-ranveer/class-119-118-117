function preload()
{
classifier = ml5.imageClassifier("DoodleNet")
}

function setup()
{
canvas= createCanvas(280,280);
canvas.center();
background("yellow");
canvas.mouseReleased(classifyCanvas);
speak = window.speechSynthesis;
}

function draw()
{
strokeWeight(10);
stroke(0);
if (mouseIsPressed)
{
line(pmouseX,pmouseY,mouseX,mouseY);
}
}

function clearCanvas()
{
    background("yellow");
}

function classifyCanvas()
{
classifier.classify(canvas, gotResult);
}

function gotResult(error, results)
{
if (error)
{
console.error(error);
}

else 
{
    console.log(results);
    document.getElementById("label").innerHTML = "Label: " + results[0].label;
    document.getElementById("confidence").innerHTML = "Confidence : " + Math.round(results[0].confidence * 100) + "%";

    talk = new SpeechSynthesisUtterance(results[0].label);
}
}

