//https://icanhazdadjoke.com/ - dad jokes api.

document.getElementById("btn").addEventListener("click", joke);

async function joke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const a = await fetch("https://icanhazdadjoke.com/", config);
  const b = await a.json();
  document.getElementById("content").innerHTML = (b.joke +"😜😜");
}
