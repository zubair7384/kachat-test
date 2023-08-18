document.addEventListener("DOMContentLoaded", function () {
  var openAppBtn = document.querySelector(".app-btn");
  var downloadAppBtn = document.querySelector(".app-btn-download");
  var modalContainer = document.querySelector(".modal-container");

  openAppBtn.addEventListener("click", function () {
    var isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (!isMobile) {
      modalContainer.style.display = "flex";
      setTimeout(function () {
        modalContainer.style.display = "none";
      }, 2000);
    }
  });

  downloadAppBtn.addEventListener("click", function () {
    var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isIOS) {
      window.location.href =
        "https://kwj5ad3.guhudesu.com/641mc8xrBijRYPvEzzHb4H";
    } else {
      window.location.href =
        "https://5qvsz7n.huduxuyu.com/FxvGOeGsXn5wFDeX1dspPL";
    }
  });

  document.querySelector(".close-btn").addEventListener("click", function () {
    modalContainer.style.display = "none";
  });
});
