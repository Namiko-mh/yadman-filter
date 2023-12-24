// Listen for the pageshow event
window.addEventListener('pageshow', function(event) {
  // Check if it's a navigation or a reload
  if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
    // Reset filters when the page is shown (either back navigation or reload)
    resetFilters();
  }
});

// Function to reset filters
function resetFilters() {
  let inputCheckboxes = document.querySelectorAll("form input[type='checkbox']");
  inputCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  // After resetting checkboxes, trigger the filter function
  change();
}

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
    city: "city1",
    imgUrl: "./images/download.jpeg",
    title: "book2",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 3,
    city: "city2",
    imgUrl: "./images/download.jpeg",
    title: "book3",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 4,
    city: "city2",
    imgUrl: "./images/download.jpeg",
    title: "book4",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 5,
    city: "city3",
    imgUrl: "./images/download.jpeg",
    title: "book5",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 6,
    city: "city3",
    imgUrl: "./images/download.jpeg",
    title: "book6",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 7,
    city: "city4",
    imgUrl: "./images/download.jpeg",
    title: "book7",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 8,
    city: "city4",
    imgUrl: "./images/download.jpeg",
    title: "book8",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 9,
    city: "city5",
    imgUrl: "./images/download.jpeg",
    title: "book9",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
  {
    id: 10,
    city: "city5",
    imgUrl: "./images/download.jpeg",
    title: "book10",
    dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi quos amet eos dicta saepe tenetur esse. Assumenda, aspernatur aliquid! Aut quasi esse distinctio molestiae repudiandae temporibus voluptatum perspiciatis sint.",
  },
];

let rowCards = document.querySelector(".row");
const paginationContainer = document.getElementById("pagination");

let currentPage = 1;
let rowsCount = 9; 

function renderCard(product) {
  rowCards.insertAdjacentHTML(
    "beforeend",
    `<div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img src="${product.imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${
                      product.dec.substring(0, 80) + "..."
                    }</p>
                    <a href="./product.html?id=${
                      product.id
                    }" class="btn btn-primary">ادامه...</a>
                </div>
            </div>
        </div>`
  );
}

function toggleAllCheckboxes(allCheckbox) {
  let inputCheckboxes = document.querySelectorAll("form input[type='checkbox']");

  let allChecked = true;
  inputCheckboxes.forEach((checkbox) => {
    checkbox.checked = allCheckbox.checked;
    if (!checkbox.checked) {
      allChecked = false;
    }
  });
    change();
}

function change() {
  let input = document.querySelectorAll("form input[type='checkbox']");
    let filters = {
    models: getClassOfCheckedCheckboxes(input),
  };
  filterResults(filters);
}

function getClassOfCheckedCheckboxes(checkboxes) {
  let classes = [];
  if (checkboxes && checkboxes.length > 0) {
    for (let i = 0; i < checkboxes.length; i++) {
      let cb = checkboxes[i];
      if (cb.checked) {
        classes.push(cb.getAttribute("id"));
      }
    }
  }
  return classes;
}

function filterResults(filters) {
  rowCards.innerHTML = "";
  paginationContainer.innerHTML = ""; // Clear pagination container

  let filteredProducts = [];

  if (filters.models.length > 0) {
    filteredProducts = cardArry.filter(product => filters.models.includes(product.city));
  } else {
    // If no filters selected, display all products
    filteredProducts = [...cardArry];
  }

  setUpPagination(filteredProducts, paginationContainer, rowsCount);
  displayProductsList(filteredProducts, rowCards, rowsCount, currentPage);
}

function displayProductsList(products, container, rowCount, currentPage) {
  container.innerHTML = "";

  let end = rowCount * currentPage;
  let start = end - rowCount;

  let paginatedProducts = products.slice(start, end);

  paginatedProducts.forEach((product) => {
    renderCard(product);
  });
}

function setUpPagination(allProductsArray, pagesContainer, rowsCount) {
  console.log(allProductsArray);
  pagesContainer.innerHTML = "";
  let pageCount = Math.ceil(allProductsArray.length / rowsCount);

  for (let i = 1; i <= pageCount; i++) {
    let btn = buttonGenerator(i, allProductsArray);
    pagesContainer.append(btn);
  }
}

function buttonGenerator(page, allProductsArray) {
  let button = document.createElement("button");
  button.innerHTML = page;

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    currentPage = page;
    displayProductsList(allProductsArray, rowCards, rowsCount, currentPage);
  });

  return button;
}

function getUrl() {
  let locationSearch = new URLSearchParams(location.search);
  let getSearchParam = locationSearch.getAll("city");

  let inputCheckboxes = document.querySelectorAll("form input[type='checkbox']");
  
  inputCheckboxes.forEach(checkbox => {
    if (getSearchParam.includes(checkbox.getAttribute("id"))) {
      checkbox.checked = true;
    }
  });
  change();
}

window.addEventListener("load" , getUrl)