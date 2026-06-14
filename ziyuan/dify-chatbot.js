(function () {
  var token = "OLjiwrNfuhfXcfFM";
  var scriptId = token;

  window.difyChatbotConfig = {
    token: token,
    inputs: {},
    systemVariables: {},
    userVariables: {},
  };

  var style = document.createElement("style");
  style.textContent = [
    "#dify-chatbot-bubble-button {",
    "  background-color: #1C64F2 !important;",
    "}",
    "#dify-chatbot-bubble-window {",
    "  width: 24rem !important;",
    "  height: 40rem !important;",
    "}",
    "@media (max-width: 480px) {",
    "  #dify-chatbot-bubble-window {",
    "    width: calc(100vw - 2rem) !important;",
    "    height: calc(100vh - 6rem) !important;",
    "  }",
    "}",
  ].join("\n");
  document.head.appendChild(style);

  function loadScript() {
    if (document.getElementById(scriptId)) {
      return;
    }

    var script = document.createElement("script");
    script.src = "https://udify.app/embed.min.js";
    script.id = scriptId;
    script.defer = true;
    document.body.appendChild(script);
  }

  // Load after the page is ready so the chatbot never blocks the main content.
  if (document.readyState === "complete") {
    setTimeout(loadScript, 1500);
  } else {
    window.addEventListener("load", function () {
      setTimeout(loadScript, 1500);
    });
  }
})();
