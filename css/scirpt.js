document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const xp = x / window.innerWidth;
  const yp = y / window.innerHeight;

  // Set CSS variables dynamically
  document.documentElement.style.setProperty("--x", x);
  document.documentElement.style.setProperty("--y", y);
  document.documentElement.style.setProperty("--xp", xp.toFixed(2));
  document.documentElement.style.setProperty("--yp", yp.toFixed(2));
});


let touchX = 0;
let touchY = 0;
let isUpdating = false;

function updateGlowSmoothly() {
  updateGlow(touchX, touchY);
  isUpdating = false;
}

document.addEventListener("touchmove", (e) => {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    touchX = touch.clientX;
    touchY = touch.clientY;

    if (!isUpdating) {
      requestAnimationFrame(updateGlowSmoothly);
      isUpdating = true;
    }
  }
}, { passive: true });

  function appendValue(val) {
      document.getElementById('display').value += val;
    }

    function clearDisplay() {
      document.getElementById('display').value = '';
    }

    function calculate() {
      try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
      } catch (e) {
        alert("Invalid Expression");
      }
    }
