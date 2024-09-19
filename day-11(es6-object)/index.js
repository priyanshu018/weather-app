// ------------------ object property shorthand

const name = "Andrew";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "Philadephia",
};

// console.log(user);

// ------------------object destructing

const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const label = product.label
// const stock = product.stock

const { label, stock, price, salePrice } = product;

// console.log(label)
// console.log(stock)


// ------------------