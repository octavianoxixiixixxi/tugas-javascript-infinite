
const rawInput = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";


const trimmedInput = rawInput.trim();

const namesArray = trimmedInput.split(',');

const cleanedNames = namesArray.map(name => name.trim().toLowerCase());


const finalString = cleanedNames.join(" | ");

console.log("--- HASIL CASE 1 ---");
console.log(finalString);




const products = [
  { name: 'Laptop', price: 1000, active: true }, 
  { name: 'Mouse', price: 20, active: false }, 
  { name: 'Keyboard', price: 50, active: true }
];


const activeProducts = products.filter(product => product.active === true);


const uppercaseNames = activeProducts.map(product => product.name.toUpperCase());


const totalActivePrice = activeProducts.reduce((total, product) => total + product.price, 0);

console.log("\n--- HASIL CASE 2 ---");
console.log("Nama Produk Aktif (Kapital):", uppercaseNames); 

console.log("Total Harga Produk Aktif:", totalActivePrice); 
