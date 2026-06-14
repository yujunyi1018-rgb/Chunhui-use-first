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
    script.async = true;
    script.defer = true;
    (document.body || document.documentElement).appendChild(script);
  }

  // This file is loaded near </body>, so start fetching Dify as soon as it runs.
  if (document.body) {
    loadScript();
  } else {
    document.addEventListener("DOMContentLoaded", loadScript, { once: true });
  }
})();
