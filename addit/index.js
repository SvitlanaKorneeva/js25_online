// class Calculator {
//   constructor() {
//     this.firstNumber = '';
//     this.secondNumber = '';
//   }
//   getFirst() {
//     return (this.firstNumber = prompt(''));
//   }
//   getSecond() {
//     return (this.secondNumber = prompt(''));
//   }

//   getValues() {
//     this.getFirst();
//     this.getSecond();

//     return this.firstNumber, this.secondNumber;
//   }
// }
// 3;
// const myCalc = new Calculator();
// console.log(myCalc);

// console.log(myCalc.getValues());

// ========== DOM ========
const arr = [];
const div = document.getElementById("boxes");
// console.log(div);
function createLinks(amount) {
  let z = 0;
  let x = 30;
  for (let i = 1; i <= amount; i++) {
    z += 1;
    x += 10
    const a = document.createElement("a");
    a.textContent = z;
    a.style.border = "1px solid red";
    a.style.margin = x+"px";
    a.style.padding = x + "px";
    div.append(a);
  }
}
createLinks(10);
// ========== DOM ========

const refs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-button > span"),
  licenseCheckbox: document.querySelector(".js-license"),
  btn: document.querySelector(".js-button"),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);

refs.input.addEventListener("input", onInputChange);
refs.licenseCheckbox.addEventListener("change", onLicenseChange);

function onInputFocus() {
  console.log("Инпут получил фокус - событие focus");
}

function onInputBlur() {
  console.log("Инпут потерял фокус - событие blur");
}

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
  console.log(event.target.value);
}

function onLicenseChange(event) {
  refs.btn.disabled = !event.currentTarget.checked;
}
