document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == "interactive") {
    document.getElementById("root").style.visibility = "hidden";
  } else if (state == "complete") {
    document.getElementById("interactive");
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("root").style.visibility = "visible";
  }
};
