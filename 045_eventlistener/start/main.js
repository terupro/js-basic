const h1Element = document.querySelector("h1");
console.dir(h1Element);

h1Element.textContent = "変更後のタイトル";

const btnEl = document.querySelector("button");

const helloFn = (e) => {
  console.log(e.target.textContent);
};

btnEl.addEventListener("click", helloFn);
