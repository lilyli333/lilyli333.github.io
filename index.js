let model;

async function loadModel() {
  console.log("model loading..");
  modelName = "mobilenet";
  
  //model = await tf.loadLayersModel('https://gogul.dev/models/mobilenet/model.json');
  //const jsonFile = await JSON.parse("./model.json");

  model = await tf.loadLayersModel('https://ml-using-tensorflowjs.lilyli333.repl.co/model/model.json');
  console.log("model loaded..");
}

var selectFileButton = document.getElementById("select-file-image")

function renderImage(file) {
  var reader = new FileReader();
  reader.onload = function(event) {
    img_url = event.target.result;
    document.getElementById("image").src = img_url;
    console.log(img_url);
  }
  reader.readAsDataURL(file);
}

function preprocessImage(image, modelName) {

  let tensor = tf.browser.fromPixels(image)
    .resizeNearestNeighbor([224, 224])
    .toFloat();

  if (modelName === undefined) {
    return tensor.expandDims();
  } 

  else if (modelName === "mobilenet") {
    let offset = tf.scalar(127.5);
    return tensor.sub(offset)
      .div(offset)
      .expandDims();
  } 

  else {
    alert("Unknown model name..")
  }
}

var predict_button = document.getElementById("predict-button")

async function predict() {
  console.log("predict button pressed");
  if (model == undefined) {
    console.log("model undefined");
    alert("Please load the model first..")
  }

  let image  = document.getElementById("image");
  let tensor = preprocessImage(image, modelName);

  let predictions = await model.predict(tensor).data();
  let resultsArray = Array.from(predictions);
  let results = {};

  results = resultsArray.map(function (p, i) {
      return {
        probability: p,
        className: IMAGENET_CLASSES[i]
      };
    })
  results.sort(function (a, b) {
      return b.probability - a.probability;
    });
  results.slice(0, 2);
  console.log(results[0]);
  
  var predictionResults = "PREDICTION RESULTS:";
  for(var i = 0; i < 2; i ++){
    var accuracy = results[i].probability * 100;
    accuracy = Math.round(accuracy * 100) / 100;
    predictionResults += "\r\n" + results[i].className + " -- "+ accuracy + "%";
  }
  document.getElementById("prediction").innerText = predictionResults;
}


