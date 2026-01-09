(function () {
  const canvas = document.getElementById("surface");
  const context = canvas.getContext("2d");

  const toggleButton = document.getElementById("toggle-draw");

  // Create image element for the button
  const buttonImg = document.createElement("img");
  buttonImg.src = "assets/pencil.png";
  buttonImg.alt = "Toggle drawing";
  buttonImg.classList.add("button-icon");
  toggleButton.innerHTML = "";
  toggleButton.appendChild(buttonImg);

  toggleButton.addEventListener("click", () => {
    drawingEnabled = !drawingEnabled;
    if (drawingEnabled) {
      document.body.classList.add("drawing");
      buttonImg.src = "/assets/cursor.png";
    } else {
      document.body.classList.remove("drawing");
      buttonImg.src = "/assets/pencil.png";
    }
  });

  let drawingEnabled = false;
  let cursorMoving = false;

  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    );
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function jitter(n) {
    return n + (Math.random() - 0.5) * 4;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  function getCanvasCoords(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  const handlePointerDown = (event) => {
    if (!drawingEnabled) return;
    cursorMoving = true;

    canvas.setPointerCapture(event.pointerId);
    const { x, y } = getCanvasCoords(event);
    context.beginPath();
    context.moveTo(jitter(x), jitter(y));
    canvas.onpointerup = handlePointerUp;
    canvas.onpointermove = handlePointerMove;
  };

  const handlePointerMove = (event) => {
    if (!cursorMoving || !drawingEnabled) return;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.globalAlpha = Math.max(Math.random(), 0.5);
    context.lineWidth = 4;
    context.strokeStyle = "#333";

    const { x, y } = getCanvasCoords(event);
    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(jitter(x), jitter(y));
  };

  const handlePointerUp = (event) => {
    cursorMoving = false;
    canvas.onpointermove = null;
    canvas.onpointerup = null;
  };

  canvas.onpointerdown = handlePointerDown;
})();
