function setup()
{
    canvas = createCanvas(350, 350);
    canvas.position(900, 200);
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.position(200, 200);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function draw()
{
    background("lightblue")
}

function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);
    }
}