function appendToContainer(content) {
  const container = document.getElementById("container");
  const element = document.createElement("p");
  element.textContent = content;
  container.appendChild(element);
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
      appendToContainer("FizzBuzz");
  } else if (i % 3 === 0) {
      appendToContainer("Fizz");
  } else if (i % 5 === 0) {
      appendToContainer("Buzz");
  } else {
      appendToContainer(i);
  }
}