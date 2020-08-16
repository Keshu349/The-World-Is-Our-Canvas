var database;
var drawing = [];
var currentDrawing = [];
var isDrawing = false;

function setup(){
  canvas = createCanvas(500,500);
  database = firebase.database();
  canvas.mousePressed(startDrawing);
  canvas.parent('canvascontainer');
  //canvas.mouseReleased(endPath);
  var saveButton = select ('#saveButton');
  saveButton.mousePressed(saveDrawing);
}
function startDrawing(){
  isDrawing = true;
currentPath = [];
drawing.push(currentDrawing);
}

function endDrawing(){
  isDrawing = false;
}

function draw(){
  background(0);

 if (isDrawing){
    var canvas = {
      x:mouseX,
      y:mouseY
   }
   currentDrawing.push(canvas); 
 }
  
  stroke(255);
  strokeWeight(4);
  noFill();
  for (var j = 0; j<drawing.length; j++){
    var path = drawing[j];
  beginShape();
  for (var i = 0; i<path.length; i++){  
    vertex(path[i].x ,path[i].y)
  }
  endShape();
}


}
function saveDrawing(){
  var ref = database.ref('drawings');
  var data = {
  name: "Keshu",
  drawing: drawing
}
  //var result = ref.push(data, dataSent);
  //console.log(result.key);

 // function dataSent(err,status){
 // console.log (status);
  //}
  ref.push(data);
}