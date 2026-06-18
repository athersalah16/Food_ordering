const menu = [
  {
    id: 1,
    category: "burger",
    name: "Classic Beef Burger",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    rating: 4.8,
    reviews: 324,
    description: "Juicy grilled beef burger with fresh vegetables and cheese.",
    ingredients: ["Beef Patty", "Bun", "Cheddar Cheese", "Lettuce", "Tomato"],
    nutrition: { calories: 650, protein: "35g", carbs: "42g", fat: "38g" }
  },
  {
    id: 2,
    category: "burger",
  
    name: "BBQ Bacon Burger",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b",
    rating: 4.9,
    reviews: 512,
    description: "Beef burger topped with crispy bacon and BBQ sauce.",
    ingredients: ["Beef Patty", "Bacon", "BBQ Sauce", "Cheddar Cheese", "Bun"],
    nutrition: { calories: 780, protein: "42g", carbs: "45g", fat: "48g" }
  },
  {
    id: 3,
    category: "burger",
  
    name: "Mushroom Swiss Burger",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
    rating: 4.7,
    reviews: 276,
    description: "Beef burger with sautéed mushrooms and Swiss cheese.",
    ingredients: ["Beef Patty", "Swiss Cheese", "Mushrooms", "Bun"],
    nutrition: { calories: 710, protein: "38g", carbs: "40g", fat: "43g" }
  },
  {
    id: 4,
    category: "pizza",
    
    name: "Margherita Pizza",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
    rating: 4.6,
    reviews: 198,
    description: "Classic pizza with mozzarella cheese and basil.",
    ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Basil"],
    nutrition: { calories: 540, protein: "22g", carbs: "60g", fat: "22g" }
  },
  {
    id: 5,
    category: "pizza",
    
    name: "Pepperoni Pizza",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
    rating: 4.9,
    reviews: 643,
    description: "Loaded with pepperoni slices and mozzarella cheese.",
    ingredients: ["Pizza Dough", "Pepperoni", "Mozzarella", "Tomato Sauce"],
    nutrition: { calories: 670, protein: "28g", carbs: "62g", fat: "32g" }
  },
  {
    id: 6,
    category: "pizza",
    
    name: "Chicken Ranch Pizza",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    rating: 4.8,
    reviews: 421,
    description: "Tender chicken with creamy ranch dressing.",
    ingredients: ["Pizza Dough", "Chicken", "Ranch Sauce", "Mozzarella"],
    nutrition: { calories: 690, protein: "35g", carbs: "58g", fat: "30g" }
  },
  {
    id: 7,
    category: "pasta",
    name: "Alfredo Pasta",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a",
    rating: 4.5,
    reviews: 185,
    description: "Creamy Alfredo sauce with parmesan cheese.",
    ingredients: ["Pasta", "Cream", "Parmesan", "Butter"],
    nutrition: { calories: 620, protein: "20g", carbs: "68g", fat: "28g" }
  },
  {
    id: 8,
    category: "pasta",
    name: "Spaghetti Bolognese",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    rating: 4.8,
    reviews: 389,
    description: "Traditional Italian pasta with meat sauce.",
    ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Onion"],
    nutrition: { calories: 700, protein: "32g", carbs: "72g", fat: "24g" }
  },
  {
    id: 9,
    category: "pasta",
    name: "Seafood Pasta",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
    rating: 4.7,
    reviews: 248,
    description: "Fresh shrimp and calamari in garlic sauce.",
    ingredients: ["Pasta", "Shrimp", "Calamari", "Garlic", "Olive Oil"],
    nutrition: { calories: 650, protein: "36g", carbs: "66g", fat: "20g" }
  },
  {
    id: 10,
    category: "juice",
    
    name: "Mango Juice",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4",
    rating: 3.5,
    reviews: 157,
    description: "Fresh mango juice with natural sweetness.",
    ingredients: ["Mango", "Water", "Ice"],
    nutrition: { calories: 180, protein: "2g", carbs: "42g", fat: "0g" }
  },
  {
    id: 11,
    category: "juice",
    
    name: "Orange Juice",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423",
    rating: 4.9,
    reviews: 534,
    description: "Freshly squeezed oranges rich in vitamin C.",
    ingredients: ["Orange"],
    nutrition: { calories: 140, protein: "2g", carbs: "33g", fat: "0g" }
  },
  {
    id: 12,
    category: "juice",
    
    name: "Strawberry Juice",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1553530666-ba11a90bb918",
    rating: 4.7,
    reviews: 213,
    description: "Refreshing strawberry drink with ice.",
    ingredients: ["Strawberries", "Water", "Ice"],
    nutrition: { calories: 160, protein: "1g", carbs: "38g", fat: "0g" }
  },
  {
    id: 13,
    category: "salad",

    name: "Caesar Salad",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
    rating: 4.4,
    reviews: 145,
    description: "Fresh lettuce with Caesar dressing and croutons.",
    ingredients: ["Romaine Lettuce", "Croutons", "Parmesan", "Caesar Dressing"],
    nutrition: { calories: 320, protein: "12g", carbs: "18g", fat: "22g" }
  },
  {
    id: 14,
    category: "salad",

    name: "Greek Salad",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    rating: 3.2,
    reviews: 178,
    description: "Mediterranean salad with feta cheese and olives.",
    ingredients: ["Tomato", "Cucumber", "Feta Cheese", "Olives"],
    nutrition: { calories: 280, protein: "10g", carbs: "12g", fat: "18g" }
  },
  {
    id: 15,
    category: "salad",

    name: "Chicken Avocado Salad",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
    rating: 4.8,
    reviews: 296,
    description: "Grilled chicken served with fresh avocado.",
    ingredients: ["Chicken Breast", "Avocado", "Lettuce", "Tomato"],
    nutrition: { calories: 390, protein: "30g", carbs: "14g", fat: "22g" }
  },
  {
    id: 16,
    category: "dessert",
    
    name: "Chocolate Lava Cake",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    rating: 4.9,
    reviews: 728,
    description: "Warm chocolate cake with a molten center.",
    ingredients: ["Chocolate", "Butter", "Flour", "Eggs"],
    nutrition: { calories: 450, protein: "6g", carbs: "52g", fat: "24g" }
  },
  {
    id: 17,
    category: "dessert",
    
    name: "New York Cheesecake",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    rating: 4.8,
    reviews: 615,
    description: "Creamy cheesecake with a buttery crust.",
    ingredients: ["Cream Cheese", "Sugar", "Eggs", "Biscuit Base"],
    nutrition: { calories: 480, protein: "8g", carbs: "45g", fat: "28g" }
  },
  {
    id: 18,
    category: "dessert",
    
    name: "Tiramisu",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    rating: 4.7,
    reviews: 342,
    description: "Italian dessert layered with coffee and mascarpone.",
    ingredients: ["Mascarpone", "Coffee", "Ladyfingers", "Cocoa Powder"],
    nutrition: { calories: 420, protein: "7g", carbs: "40g", fat: "22g" }
  }
];


export default menu;