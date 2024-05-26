function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#display-poem", {
    strings: "I come with no wrapping or pretty pink bows",
    autoStart: true,
    cursor: null,
    delay: 20,
  });

  /*let apiKey = "67b3fe199e6a5df80a44a5o53t65b217";
  let prompt = ;
  let context = "You are ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;*/

  //xios.get(apiUrl).then(showPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
