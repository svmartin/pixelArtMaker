// Select color input
// Select size input


const colorPicker = document.getElementById('colorPicker');
const form = document.getElementById("sizePicker");
const table = document.getElementById('pixel_canvas');
let rows;
let columns;
let color = "black";

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
  rows = document.getElementById('input_height').value;
  columns = document.getElementById('input_width').value;
  var grid = '';
  var idCount = 0;

  for (var i = 0; i < rows; i++) {
    grid += `<tr>`;
    for (var j = 0; j < columns; j++) {
      grid += `<td id=square${idCount += 1}>&nbsp;</td>`;
    }
    grid += `</tr>`;
  }
  table.innerHTML = grid;
  addListeners();
  event.preventDefault();
}

function updateColorPicker(event) {
  color = document.getElementById("colorPicker").value;
}

function updateBoxColor(event) {
  var box = document.getElementById(this.id);
  box.style.backgroundColor = color;
}

function addListeners() {
  var boxes = document.getElementsByTagName("td");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", updateBoxColor, false);
  }
}

form.addEventListener("submit", makeGrid, false);
colorPicker.addEventListener("change", updateColorPicker, false);
