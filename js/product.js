let cardArry = [
  {
    id: 1,
    city: "city1",
    imgUrl: "./images/download.jpeg",
    title: "book1",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 2,
    city: "city2",
    imgUrl: "./images/download.jpeg",
    title: "book2",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 3,
    city: "city3",
    imgUrl: "./images/download.jpeg",
    title: "book3",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 4,
    city: "city4",
    imgUrl: "./images/download.jpeg",
    title: "book4",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 5,
    city: "city5",
    imgUrl: "./images/download.jpeg",
    title: "book5",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 6,
    city: "city6",
    imgUrl: "./images/download.jpeg",
    title: "book6",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 7,
    city: "city7",
    imgUrl: "./images/download.jpeg",
    title: "book7",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 8,
    city: "city8",
    imgUrl: "./images/download.jpeg",
    title: "book8",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 9,
    city: "city9",
    imgUrl: "./images/download.jpeg",
    title: "book9",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 10,
    city: "city10",
    imgUrl: "./images/download.jpeg",
    title: "book10",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
];

let locationSearch = new URLSearchParams(location.search);
let getLocation = locationSearch.get("id");
let rowCard = document.querySelector(".row");

let mainProduct = cardArry.find((item) => {
  return item.id === Number(getLocation);
});

function generateCard() {
    if(getLocation > cardArry.length) {
        location.href = './index.html'
    } else {
        rowCard.insertAdjacentHTML(
            "beforeend",
            `<div class="col-10">
                <div class="card" style="width: 30rem;">
                    <img src="${mainProduct.imgUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <a href="${mainProduct.imgUrl}" download class="btn btn-primary">دانلود</a>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <h1>${mainProduct.title}</h1>
                <p>${mainProduct.dec}</p>
            </div>`
          );
    }
}

window.addEventListener("load", generateCard);