const container = document.querySelector(".container");
const birds = [
  { name: "Cardinal", image: "images/Cardinal.png" },
  { name: "Chicken", image: "images/Chicken.png" },
  { name: "California Gull", image: "images/CaliGull.png" },
  { name: "Meadowlark", image: "images/Meadowlark.png" },
  { name: "Mockingbird", image: "images/Mockingbird.png" }
];

const showBirds = () => {
  let output = "";
  birds.forEach(
    ({ name, image }) =>
      (output += '
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              ')
  )
  container.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", showBirds);

