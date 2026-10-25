const products = [
  {
    id: 1,
    title: "runner sneakers",
    category: "shoes",
    price: 59.99,
    icon: "👟",
    desc: "Lightweight everyday sneakers with a soft cushioned sole.",
  },
  {
    id: 2,
    title: "leather boots",
    category: "shoes",
    price: 89.99,
    icon: "🥾",
    desc: "Durable leather boots built for rain, mud and long walks.",
  },
  {
    id: 3,
    title: "summer sandals",
    category: "shoes",
    price: 24.99,
    icon: "🩴",
    desc: "Breathable open sandals, perfect for warm weather.",
  },
  {
    id: 4,
    title: "city backpack",
    category: "bags",
    price: 45.5,
    icon: "🎒",
    desc: "Water-resistant backpack with a padded laptop pocket.",
  },
  {
    id: 5,
    title: "classic handbag",
    category: "bags",
    price: 72.0,
    icon: "👜",
    desc: "A timeless handbag with room for all your essentials.",
  },
  {
    id: 6,
    title: "travel suitcase",
    category: "bags",
    price: 120.0,
    icon: "🧳",
    desc: "Hard-shell suitcase with four smooth-rolling wheels.",
  },
  {
    id: 7,
    title: "steel watch",
    category: "watches",
    price: 149.99,
    icon: "⌚",
    desc: "Stainless steel watch with a scratch-resistant face.",
  },
  {
    id: 8,
    title: "sport watch",
    category: "watches",
    price: 79.99,
    icon: "⏱️",
    desc: "Shock-proof sport watch with stopwatch and alarm.",
  },
  {
    id: 9,
    title: "minimal watch",
    category: "watches",
    price: 99.0,
    icon: "🕰️",
    desc: "A clean, simple design that goes with any outfit.",
  },
  {
    id: 9,
    title: "minimal watch",
    category: "cars",
    price: 99.0,
    icon: "🕰️",
    desc: "A clean, simple design that goes with any outfit.",
  },
];

window.addEventListener('DOMContentLoaded', () => {
  displayProductItems(products);
  displayProductButtons();
});


const sectionMenu = document.querySelector('.products');
const containerBtn = document.querySelector('.btn-container');

let displayProductButtons = () => {
  const categories = products.reduce((listOfCategories, currentProductItemWeChecking) => {
    if (!listOfCategories.includes(currentProductItemWeChecking.category)) { //in plain english, does the list of categories already include the category of the product we are currently checking? 
      listOfCategories.push(currentProductItemWeChecking.category)//if it does, we don't need to add it again, so we just return the list of categories as is. if it doesn't, we add it to the list of categories,...
    }
    return listOfCategories;//and return the updated list of categories to the next iteration of the reduce function.
  }, ['all']);//we start with an array that contains the string 'all' because we want to have a button that shows all products, regardless of category.
  // console.log(categories)

//so the first part of this function is to create a list of unique categories from the products array, and then we can use that list to create buttons for each category.

  let dynamicBtns = categories.map((currentCategory) => {
    return `<button type="button" class="filter-btn" data-id=${currentCategory}>${currentCategory}</button>`
  }).join('')//we use the map function to create a new array of button elements, one for each category. we use the join function to convert that array into a string of HTML that we can insert into the DOM.
  containerBtn.innerHTML = dynamicBtns;
  // console.log(dynamicBtns)
  
  //so the second part of this function is to create the buttons for each category and insert them into the DOM. we use the innerHTML property of the containerBtn element to do that.
  
const btnn = document.querySelectorAll('.filter-btn')

btnn.forEach((item) => {
  console.log(item)
  item.addEventListener('click' , (event) => {
    const btnnSection = event.currentTarget.dataset.id;
    let filteredProducts = products.filter((filteredItems) =>{
      return filteredItems.category === btnnSection
      // if (filteredItems.category === btnnSection) {
      //          return filteredItems.category
      // }
    })

    console.log(filteredProducts)
        if (btnnSection === 'all') {
          displayProductItems(products)
        } else {
          displayProductItems(filteredProducts)

           console.log(sectionMenu.innerHTML)
        }
  });
});
}



function displayProductItems(ProductItems) {
  const displayitems = ProductItems.map((items) => {
    // console.log(items);
    return `<article class="menu-item">
            <img src=${items.icon} alt="menu item" class="photo" />
            <div class="item-info">
              <header>
                <h4>${items.title}</h4>
                <h4 class="price">$${items.price}</h4>
              </header>
              <p class="item-text">
              ${items.desc}
              </p>
            </div>
          </article>`;
  });

  sectionMenu.innerHTML = displayitems.join('  ');
}



// const btn = document.querySelectorAll('.filter-btn')

// btn.forEach((item) => {
//   // console.log(item)
//   item.addEventListener('click', (event) => {
//     // console.log(event.currentTarget.dataset.id)
//     const btnSection = event.currentTarget.dataset.id;
//     let filteredMenu = menuu.filter((filteredItems) => {
//       // console.log(filteredItems.category)

//       if (filteredItems.category === btnSection) {
//         return filteredItems.category
//       }
//     })

//     console.log(filteredMenu)
//     if (btnSection === 'all') {
//       displayMenuItems(menuu)
//     } else {
//       displayMenuItems(filteredMenu)

//       // console.log(sectionMenu.innerHTML)
//     }

//   })
