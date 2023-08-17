document.addEventListener("DOMContentLoaded", function () {
  // Check if the app is installed on the device
  function isAppInstalled() {
    // Assuming you have a way to detect if the app is installed
    // This could involve checking user agent, using a deep link, or some other method
    // Replace the condition below with your actual app detection logic
    return true; // Change this based on your actual detection logic
  }

  // Get the button and the text paragraph
  const appButton = document.querySelector(".app-btn");
  const buttonText = appButton.querySelector(".btn-text");

  // Check if the app is installed and update button text accordingly
  if (isAppInstalled()) {
    buttonText.textContent = "打开APP";
    appButton.setAttribute("href", "kachat://opensplash/");
  } else {
    buttonText.textContent = "下载APP";
    appButton.setAttribute("href", "link-to-download-app");
  }
});
