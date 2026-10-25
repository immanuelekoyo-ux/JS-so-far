/* ============================================================================
 * CLASSWORK — Mini Shop
 * Goal: take an array of products and turn it into real HTML on the page,
 * using forEach() to build one big HTML string, then dropping it in with
 * innerHTML.
 *
 * Everything lives in ONE function for now — renderShop(). Once this makes
 * sense, we'll split it into smaller functions. For today, the goal is just
 * to follow the logic top to bottom.
 *
 * Open index.html in the browser (not with `node`) to see this run.
 * ==========================================================================*/

function renderShop() {

  /* -------------------------------------------------------------------------
   * STEP 1 — THE DATA
   * ---------------------------------------------------------------------
   * A plain array of objects. Nothing on the page yet — just information
   * sitting in memory.
   * ---------------------------------------------------------------------- */
  const products = [
    {
      name: 'Backpack',
      price: 30,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop',
    },
    {
      name: 'Sneakers',
      price: 45,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop',
    },
    {
      name: 'Headphones',
      price: 60,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
    },
    {
      name: 'Water Bottle',
      price: 12,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200&h=200&fit=crop',
    },
    {
      name: 'Sunglasses',
      price: 20,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=200&h=200&fit=crop',
    },
  ];


  /* -------------------------------------------------------------------------
   * STEP 2 — FIND THE SHELF
   * ---------------------------------------------------------------------
   * Grab the empty <main id="product-list"> from index.html — the "shelf"
   * we're about to fill with HTML.
   * ---------------------------------------------------------------------- */
  const productList = document.querySelector('#product-list');


  /* -------------------------------------------------------------------------
   * STEP 3 — TURN EVERY PRODUCT INTO HTML TEXT
   * ---------------------------------------------------------------------
   * forEach loops over the array. For each product, we glue a chunk of
   * HTML onto the `html` string. Nothing is on the page yet — `html` is
   * just one long piece of text being built up, one product at a time.
   *
   * Notice `data-index="${index}"` on the button — that's how we'll know
   * WHICH product was clicked, later in step 5.
   * ---------------------------------------------------------------------- */
  let html = '';

  products.forEach((product, index) => {
    html += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <button data-index="${index}">Add to Cart</button>
      </div>
    `;
  });


  /* -------------------------------------------------------------------------
   * STEP 4 — PUT THE HTML ON THE PAGE
   * ---------------------------------------------------------------------
   * This is the moment everything actually appears. We set innerHTML ONCE,
   * after the loop is finished building the full string — not on every
   * pass through the loop.
   * ---------------------------------------------------------------------- */
  productList.innerHTML = html;


  /* -------------------------------------------------------------------------
   * STEP 5 — MAKE "ADD TO CART" WORK
   * ---------------------------------------------------------------------
   * Tricky part: the buttons we just created didn't exist a moment ago, so
   * we can't attach a click listener to each one directly while building
   * the HTML string. Instead, we put ONE listener on the whole shelf, and
   * ask "was the thing that got clicked a button?" This trick is called
   * EVENT DELEGATION — common whenever your HTML comes from innerHTML.
   * ---------------------------------------------------------------------- */
  let cartCount = 0;
  const cartCountEl = document.querySelector('#cart-count');
  const cartItemsEl = document.querySelector('#cart-items');

  productList.addEventListener('click', (event) => {
    // Only react if the click landed on a <button>
    if (event.target.tagName !== 'BUTTON') return;

    // Read back which product this button belongs to
    const index = event.target.dataset.index;
    console.log(`Button clicked for product index ${index}`);
    const product = products[index];
    console.log(product)


    cartCount++;
    cartCountEl.textContent = cartCount;

    // Build a cart card using the SAME "product-card" design as the shelf
    // above — just swap the button for a little "added" badge instead.
    cartItemsEl.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <span class="added-badge">Added To Cart</span>
      </div>
    `;
 

    console.log(`Added to cart: ${product.name} ($${product.price})`);
  });

}


/* ---------------------------------------------------------------------------
 * RUN IT
 * ------------------------------------------------------------------------ */
renderShop();


/* ---------------------------------------------------------------------------
 * CHECK FOR UNDERSTANDING
 *   Q1. Walk through renderShop() step by step out loud, in order. What
 *       happens first? What has to happen before the page shows anything?
 *   Q2. Why do we build up one `html` string in the loop and set
 *       innerHTML ONCE after, instead of setting it inside the loop?
 *   Q3. Why can't we attach a click listener to each button individually,
 *       the way we would with createElement?
 *   Q4. Add a 6th product to the `products` array. Do you need to touch
 *       any other code for it to show up? Why not?
 *   Q5. What does `event.target` refer to inside the click listener?
 *       Log it to the console and click around to find out.
 * ------------------------------------------------------------------------ */
