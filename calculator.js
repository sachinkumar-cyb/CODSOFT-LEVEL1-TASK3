const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let input = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      input = "";
      display.value = "";
    } else if (value === "=") {
      if (input !== "") {
        try {
          const result = eval(input);
          display.value = result;
          input = result.toString();
        } catch {
          display.value = "Error";
          input = "";
        }
      }
    } else {
      input += value;
      display.value = input;
    }
  });
});
