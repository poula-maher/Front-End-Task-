// Select color input
let color;
// Select size input
let h, w;
// When size is submitted by the user, call makeGrid()
$("#sizePicker").on("submit", e => {
  e.preventDefault();
  h = $("#inputHeight").val();
  w = $("#inputWidth").val();
  makeGrid(h, w);
});

function makeGrid(h, w) {
  // Your code goes here!
  $("tr").remove();
  for (let i = 1; i <= h; i++) {
    $("#pixelCanvas").append(`<tr id="row${i}" ></tr>`);
    for (let j = 1; j <= w; j++) {
      $("#row" + i).append("<td></td>");
    }
  }

  $("td").click(e => {
    color = $("#colorPicker").val();
    if (!$(e.target).attr("style")) {
      $(e.target).attr("style", `background-color:${color}`);
    } else {
      $(e.target).removeAttr("style");
    }
  });
}
