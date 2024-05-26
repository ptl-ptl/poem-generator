function showPoem(response) {
  new Typewriter("#display-poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInputElement = document.querySelector("#user-input");
  let apiKey = "67b3fe199e6a5df80a44a5o53t65b217";
  let prompt = `Generate an poem on ${userInputElement.value}`;
  let context =
    "You are an Poem expert and loves to write short poems.Your goal is to generate a short poem of maximum 6 lines. Make sure to write the poem in basic HTML. Sign the poem with 'SheCodes AI' inside a <strong> element. Do not include a title to the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemHiddenElement = document.querySelector("#display-poem");
  poemHiddenElement.classList.remove("poem_hidden");
  poemHiddenElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${userInputElement.value}</div>`;

  axios.get(apiUrl).then(showPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
