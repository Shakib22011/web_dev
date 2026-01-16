 let count = 0;
    let count1 = 0;
    let tasbihDone = 0;

    function increase() {
      count++;
      updateCounter();
      updateCycle();

      if (count > 0 && count % 100 === 0) {
        tasbihDone = count / 100;
        document.getElementById("tasbihCountText").textContent =
          `Completed ${tasbihDone} full Tasbih(s) (${count} counts)!`;
        showModal();
      }
    }

    function decrease() {
      count--;
      if (count < 0) {
        reset();
        alert("Counter cannot be negative");
        return;
      }
      updateCounter();
      updateCycle();
    }

    function reset() {
      count = 0;
      count1 = 0;
      tasbihDone = 0;
      updateCounter();
      updateCycle();
      hideModal();
    }

    function continueCounting() {
      updateCounter();
      updateCycle();
      hideModal();
    }

    function updateCounter() {
      const counterEl = document.getElementById("counter");
      counterEl.textContent = count;

      //counter circle bounse
      counterEl.classList.add("flash");
      setTimeout(() => counterEl.classList.remove("flash"), 200);
    }

    function updateCycle() {
      count1 = Math.floor(count / 10);
      document.getElementById("button1").textContent = count1;
    }

    function showModal() {
      document.getElementById("tasbihModal").style.display = "block";
    }

    function hideModal() {
      document.getElementById("tasbihModal").style.display = "none";
    }