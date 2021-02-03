(() => {
  document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == "complete") {
      document.getElementById("interactive");
      if (document.getElementById("loader"))
        document.getElementById("loader").style.visibility = "hidden";
      if (document.getElementById("root"))
        document.getElementById("root").style.visibility = "visible";
    }
  };
})();
