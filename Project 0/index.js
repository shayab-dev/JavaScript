let users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "anamika mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens ☁️🖤 ",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
];

const cardsContainer = document.querySelector(".cards");
const inp = document.querySelector(".inp");

function showUsers(arr) {
  cardsContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();

  arr.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = user.pic;
    img.alt = user.name;
    img.className = "bg-img";

    const blurLayer = document.createElement("div");
    blurLayer.className = "blurred-layer";
    blurLayer.style.backgroundImage = `url(${user.pic})`;

    const content = document.createElement("div");
    content.className = "content";

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    content.append(heading, para);
    card.append(img, blurLayer, content);

    fragment.appendChild(card);
  });

  cardsContainer.appendChild(fragment);
}

showUsers(users);

inp.addEventListener("input", () => {
  const search = inp.value.toLowerCase();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().startsWith(search)
  );

  showUsers(filteredUsers);
});