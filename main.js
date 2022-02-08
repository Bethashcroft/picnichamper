$(document).ready(() => {
  const placeFooter = () => {
    if ($(document.body).height() < $(window).height()) {
      $("#footer").css({ position: "absolute", bottom: "0px" });
    } else {
      $("#footer").css({ position: "" });
    }
  };
  placeFooter;
})();
