let typingInterval;

async function selectMood(mood) {
  const response = await fetch("/get-compliment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mood })
  });

  const data = await response.json();
  const compliment = document.getElementById("compliment");
  const image = document.getElementById("complimentImage");
  const name = document.getElementById("herName").value;

  stopTyping();
  image.classList.add("hidden");

  let message = data.message;
  if (name.trim() !== "") {
    message = name + ", " + message;
  }

  typeWriterEffect(message, compliment);
}

async function getRandomCompliment() {
  const response = await fetch("/random-compliment");
  const data = await response.json();

  const compliment = document.getElementById("compliment");
  const image = document.getElementById("complimentImage");
  const name = document.getElementById("herName").value;

  stopTyping();

  let message = data.text;
  if (name.trim() !== "") {
    message = name + ", " + message;
  }

  typeWriterEffect(message, compliment);

  image.src = "/" + data.image;
  image.classList.remove("hidden");
}

function typeWriterEffect(text, element) {
  element.innerHTML = "";
  let i = 0;

  typingInterval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, 40);
}

function stopTyping() {
  clearInterval(typingInterval);
}