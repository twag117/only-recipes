// src/lib/data.ts

export type Recipe = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  ingredients: string[];
  instructions: string[];
  image_url: string;
};

export const recipes: Recipe[] = [
  {
    id: 'spaghetti',
    title: 'Spaghetti',
    description: 'Classic Italian pasta with a rich tomato sauce.',
    tags: ["dinner", "italian", "pasta"],
    ingredients: ['Pasta', 'Tomato Sauce', 'Olive Oil'],
    instructions: [
      'Boil water and cook pasta until al dente.',
      'Heat tomato sauce in a pan.',
      'Drain pasta and mix with the sauce. Serve hot.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'pancakes',
    title: 'Pancakes',
    description: 'Fluffy pancakes perfect for a breakfast treat.',
    tags: ["breakfast", "sweet"],
    ingredients: ['Flour', 'Eggs', 'Milk', 'Baking Powder'],
    instructions: [
      'Mix the dry ingredients.',
      'Add eggs and milk, and stir until smooth.',
      'Pour batter onto a hot griddle and cook until golden brown on each side.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'salad',
    title: 'Salad',
    description: 'A fresh mixed green salad, perfect for a light meal.',
    tags: ["lunch", "healthy", "vegetarian"],
    ingredients: ['Lettuce', 'Tomatoes', 'Cucumbers'],
    instructions: [
      'Wash and chop the vegetables.',
      'Mix them in a bowl with your favorite dressing.',
      'Serve immediately.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'grilled-cheese',
    title: 'Grilled Cheese Sandwich',
    description: 'Golden brown sandwich with melted cheese.',
    tags: ["lunch", "snack", "quick"],
    ingredients: ['Bread', 'Butter', 'Cheese'],
    instructions: [
      'Butter the bread slices.',
      'Place cheese between two slices.',
      'Grill on a pan until golden brown on both sides.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'chocolate-chip-cookies',
    title: 'Chocolate Chip Cookies',
    description: 'Chewy cookies filled with chocolate chips.',
    tags: ["dessert", "baking", "sweet"],
    ingredients: ['Flour', 'Sugar', 'Butter', 'Chocolate Chips', 'Eggs', 'Vanilla'],
    instructions: [
      'Mix dry and wet ingredients separately.',
      'Combine everything and fold in chocolate chips.',
      'Scoop onto baking sheet and bake until golden.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'chicken-curry',
    title: 'Chicken Curry',
    description: 'Spicy and flavorful chicken curry.',
    tags: ["dinner", "spicy", "chicken"],
    ingredients: ['Chicken', 'Curry Powder', 'Onions', 'Tomatoes', 'Garlic'],
    instructions: [
      'Sauté onions and garlic.',
      'Add chicken and brown.',
      'Add spices and tomatoes, simmer until chicken is cooked.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'french-toast',
    title: 'French Toast',
    description: 'Sweet breakfast toast with cinnamon and sugar.',
    tags: ["breakfast", "sweet", "quick"],
    ingredients: ['Bread', 'Eggs', 'Milk', 'Cinnamon', 'Sugar'],
    instructions: [
      'Whisk eggs, milk, cinnamon, and sugar.',
      'Dip bread slices in the mixture.',
      'Cook on a pan until golden brown.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'smoothie-bowl',
    title: 'Smoothie Bowl',
    description: 'Refreshing smoothie served in a bowl with toppings.',
    tags: ["breakfast", "healthy", "vegan"],
    ingredients: ['Frozen Bananas', 'Berries', 'Almond Milk', 'Granola'],
    instructions: [
      'Blend frozen fruits with almond milk.',
      'Pour into a bowl.',
      'Top with granola and fresh fruit.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'omelette',
    title: 'Omelette',
    description: 'Egg omelette with veggies and cheese.',
    tags: ["breakfast", "quick", "vegetarian"],
    ingredients: ['Eggs', 'Milk', 'Cheese', 'Vegetables'],
    instructions: [
      'Whisk eggs and milk.',
      'Pour into a hot pan and cook slightly.',
      'Add cheese and veggies, fold and cook until done.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'beef-tacos',
    title: 'Beef Tacos',
    description: 'Tacos filled with seasoned beef and toppings.',
    tags: ["dinner", "mexican", "beef"],
    ingredients: ['Ground Beef', 'Taco Shells', 'Lettuce', 'Cheese', 'Salsa'],
    instructions: [
      'Cook and season the beef.',
      'Fill taco shells with beef and toppings.',
      'Serve with salsa.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'banana-bread',
    title: 'Banana Bread',
    description: 'Moist and sweet banana-flavored bread.',
    tags: ["dessert", "baking", "sweet"],
    ingredients: ['Bananas', 'Flour', 'Sugar', 'Butter', 'Eggs'],
    instructions: [
      'Mash bananas and mix with wet ingredients.',
      'Fold in dry ingredients.',
      'Pour into loaf pan and bake.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'caesar-salad',
    title: 'Caesar Salad',
    description: 'Crisp romaine with Caesar dressing and croutons.',
    tags: ["lunch", "salad", "classic"],
    ingredients: ['Romaine Lettuce', 'Croutons', 'Parmesan', 'Caesar Dressing'],
    instructions: [
      'Chop lettuce.',
      'Toss with dressing, croutons, and cheese.',
      'Serve immediately.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'mac-and-cheese',
    title: 'Mac and Cheese',
    description: 'Creamy macaroni and cheese.',
    tags: ["dinner", "comfort food", "pasta"],
    ingredients: ['Macaroni', 'Cheese', 'Milk', 'Butter'],
    instructions: [
      'Cook macaroni.',
      'Make a cheese sauce with milk and butter.',
      'Combine pasta with sauce and bake.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'veggie-stir-fry',
    title: 'Veggie Stir Fry',
    description: 'Quick stir-fried vegetables with soy sauce.',
    tags: ["dinner", "vegetarian", "quick"],
    ingredients: ['Broccoli', 'Carrots', 'Bell Peppers', 'Soy Sauce'],
    instructions: [
      'Chop vegetables.',
      'Stir fry quickly on high heat.',
      'Add soy sauce and serve over rice.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'avocado-toast',
    title: 'Avocado Toast',
    description: 'Simple toast with smashed avocado topping.',
    tags: ["breakfast", "snack", "vegetarian"],
    ingredients: ['Bread', 'Avocado', 'Salt', 'Pepper', 'Lemon Juice'],
    instructions: [
      'Toast bread.',
      'Smash avocado and season.',
      'Spread on toast and drizzle with lemon juice.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'chili',
    title: 'Beef Chili',
    description: 'Hearty chili with beef and beans.',
    tags: ["dinner", "comfort food", "beef"],
    ingredients: ['Ground Beef', 'Beans', 'Tomatoes', 'Chili Powder'],
    instructions: [
      'Brown the beef.',
      'Add beans, tomatoes, and spices.',
      'Simmer for 30 minutes.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'garlic-bread',
    title: 'Garlic Bread',
    description: 'Buttery garlic-flavored bread.',
    tags: ["side dish", "quick", "bread"],
    ingredients: ['Bread', 'Butter', 'Garlic', 'Parsley'],
    instructions: [
      'Mix butter with minced garlic and parsley.',
      'Spread on bread slices.',
      'Bake until golden and crisp.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'vegetable-soup',
    title: 'Vegetable Soup',
    description: 'Hearty soup with a variety of vegetables.',
    tags: ["lunch", "vegetarian", "soup"],
    ingredients: ['Carrots', 'Celery', 'Onions', 'Tomatoes', 'Vegetable Broth'],
    instructions: [
      'Sauté onions, carrots, and celery.',
      'Add tomatoes and broth.',
      'Simmer until vegetables are tender.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'apple-pie',
    title: 'Apple Pie',
    description: 'Classic apple pie with a flaky crust.',
    tags: ["dessert", "baking", "classic"],
    ingredients: ['Apples', 'Sugar', 'Cinnamon', 'Pie Crust'],
    instructions: [
      'Mix sliced apples with sugar and cinnamon.',
      'Place in pie crust.',
      'Bake until golden brown.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'fried-rice',
    title: 'Fried Rice',
    description: 'Quick and easy fried rice with vegetables.',
    tags: ["lunch", "quick", "vegetarian"],
    ingredients: ['Rice', 'Eggs', 'Vegetables', 'Soy Sauce'],
    instructions: [
      'Cook rice and set aside.',
      'Scramble eggs and add vegetables.',
      'Mix in rice and soy sauce.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'lasagna',
    title: 'Lasagna',
    description: 'Layered pasta dish with meat and cheese.',
    tags: ["dinner", "italian", "pasta"],
    ingredients: ['Lasagna Noodles', 'Ground Beef', 'Ricotta', 'Tomato Sauce'],
    instructions: [
      'Cook noodles and ground beef.',
      'Layer noodles, beef, ricotta, and sauce.',
      'Bake until bubbly.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'chicken-noodle-soup',
    title: 'Chicken Noodle Soup',
    description: 'Comforting soup with chicken and noodles.',
    tags: ["lunch", "comfort food", "soup"],
    ingredients: ['Chicken', 'Noodles', 'Carrots', 'Celery', 'Chicken Broth'],
    instructions: [
      'Cook chicken and set aside.',
      'Sauté carrots and celery.',
      'Add broth, noodles, and chicken.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'baked-salmon',
    title: 'Baked Salmon',
    description: 'Healthy salmon baked with lemon and herbs.',
    tags: ["dinner", "healthy", "seafood"],
    ingredients: ['Salmon', 'Lemon', 'Herbs', 'Olive Oil'],
    instructions: [
      'Place salmon on baking sheet.',
      'Drizzle with olive oil, lemon juice, and herbs.',
      'Bake until cooked through.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'quiche',
    title: 'Quiche',
    description: 'Savory pie with eggs, cheese, and vegetables.',
    tags: ["breakfast", "brunch", "vegetarian"],
    ingredients: ['Eggs', 'Cheese', 'Vegetables', 'Pie Crust'],
    instructions: [
      'Whisk eggs and cheese.',
      'Add vegetables and pour into pie crust.',
      'Bake until set.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'spaghetti-carbonara',
    title: 'Spaghetti Carbonara',
    description: 'Creamy pasta with eggs, cheese, and bacon.',
    tags: ["dinner", "italian", "pasta"],
    ingredients: ['Spaghetti', 'Eggs', 'Parmesan', 'Bacon'],
    instructions: [
      'Cook spaghetti and bacon.',
      'Mix eggs and cheese.',
      'Toss pasta with egg mixture and bacon.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'chicken-fajitas',
    title: 'Chicken Fajitas',
    description: 'Sizzling chicken with peppers and onions.',
    tags: ["dinner", "mexican", "chicken"],
    ingredients: ['Chicken', 'Bell Peppers', 'Onions', 'Tortillas'],
    instructions: [
      'Slice chicken, peppers, and onions.',
      'Cook in a hot pan until chicken is done.',
      'Serve with tortillas.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'blueberry-muffins',
    title: 'Blueberry Muffins',
    description: 'Moist muffins with juicy blueberries.',
    tags: ["breakfast", "baking", "sweet"],
    ingredients: ['Flour', 'Sugar', 'Blueberries', 'Eggs'],
    instructions: [
      'Mix dry ingredients.',
      'Add eggs and blueberries.',
      'Bake until golden.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'caprese-salad',
    title: 'Caprese Salad',
    description: 'Fresh salad with tomatoes, mozzarella, and basil.',
    tags: ["lunch", "salad", "italian"],
    ingredients: ['Tomatoes', 'Mozzarella', 'Basil', 'Olive Oil'],
    instructions: [
      'Slice tomatoes and mozzarella.',
      'Arrange on a plate with basil.',
      'Drizzle with olive oil.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'beef-stew',
    title: 'Beef Stew',
    description: 'Hearty stew with beef and vegetables.',
    tags: ["dinner", "comfort food", "beef"],
    ingredients: ['Beef', 'Carrots', 'Potatoes', 'Beef Broth'],
    instructions: [
      'Brown beef and set aside.',
      'Add vegetables and broth.',
      'Simmer until beef is tender.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'pesto-pasta',
    title: 'Pesto Pasta',
    description: 'Pasta with fresh basil pesto.',
    tags: ["dinner", "italian", "pasta"],
    ingredients: ['Pasta', 'Basil', 'Garlic', 'Pine Nuts', 'Parmesan'],
    instructions: [
      'Blend basil, garlic, pine nuts, and parmesan.',
      'Cook pasta and toss with pesto.',
      'Serve hot.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'chicken-alfredo',
    title: 'Chicken Alfredo',
    description: 'Creamy pasta with chicken and Alfredo sauce.',
    tags: ["dinner", "italian", "pasta"],
    ingredients: ['Chicken', 'Pasta', 'Heavy Cream', 'Parmesan'],
    instructions: [
      'Cook chicken and pasta.',
      'Make Alfredo sauce with cream and parmesan.',
      'Combine pasta, chicken, and sauce.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'stuffed-bell-peppers',
    title: 'Stuffed Bell Peppers',
    description: 'Bell peppers filled with rice and beef.',
    tags: ["dinner", "beef", "vegetarian"],
    ingredients: ['Bell Peppers', 'Rice', 'Ground Beef', 'Tomato Sauce'],
    instructions: [
      'Cook rice and beef.',
      'Mix with tomato sauce.',
      'Stuff peppers and bake.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'hummus',
    title: 'Hummus',
    description: 'Creamy chickpea dip.',
    tags: ["snack", "vegetarian", "middle eastern"],
    ingredients: ['Chickpeas', 'Tahini', 'Garlic', 'Lemon Juice'],
    instructions: [
      'Blend chickpeas, tahini, garlic, and lemon juice.',
      'Season with salt and pepper.',
      'Serve with pita bread.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'shrimp-scampi',
    title: 'Shrimp Scampi',
    description: 'Shrimp cooked in garlic butter sauce.',
    tags: ["dinner", "seafood", "quick"],
    ingredients: ['Shrimp', 'Butter', 'Garlic', 'Lemon Juice'],
    instructions: [
      'Melt butter and sauté garlic.',
      'Add shrimp and cook until pink.',
      'Finish with lemon juice.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'minestrone-soup',
    title: 'Minestrone Soup',
    description: 'Hearty vegetable soup with pasta.',
    tags: ["lunch", "vegetarian", "soup"],
    ingredients: ['Vegetables', 'Pasta', 'Tomatoes', 'Broth'],
    instructions: [
      'Sauté vegetables.',
      'Add tomatoes, broth, and pasta.',
      'Simmer until pasta is cooked.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'chicken-parmesan',
    title: 'Chicken Parmesan',
    description: 'Breaded chicken with tomato sauce and cheese.',
    tags: ["dinner", "italian", "chicken"],
    ingredients: ['Chicken', 'Breadcrumbs', 'Tomato Sauce', 'Mozzarella'],
    instructions: [
      'Bread and fry chicken.',
      'Top with tomato sauce and mozzarella.',
      'Bake until cheese is melted.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'guacamole',
    title: 'Guacamole',
    description: 'Creamy avocado dip.',
    tags: ["snack", "vegetarian", "mexican"],
    ingredients: ['Avocados', 'Lime Juice', 'Cilantro', 'Onion'],
    instructions: [
      'Mash avocados.',
      'Mix with lime juice, cilantro, and onion.',
      'Serve with chips.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'baked-ziti',
    title: 'Baked Ziti',
    description: 'Pasta baked with tomato sauce and cheese.',
    tags: ["dinner", "italian", "pasta"],
    ingredients: ['Ziti', 'Tomato Sauce', 'Mozzarella', 'Ricotta'],
    instructions: [
      'Cook ziti.',
      'Mix with tomato sauce and ricotta.',
      'Top with mozzarella and bake.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'chicken-caesar-wrap',
    title: 'Chicken Caesar Wrap',
    description: 'Wrap filled with chicken, lettuce, and Caesar dressing.',
    tags: ["lunch", "chicken", "quick"],
    ingredients: ['Chicken', 'Lettuce', 'Tortilla', 'Caesar Dressing'],
    instructions: [
      'Cook chicken and slice.',
      'Fill tortilla with chicken, lettuce, and dressing.',
      'Roll up and serve.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'vegetable-curry',
    title: 'Vegetable Curry',
    description: 'Spicy curry with a variety of vegetables.',
    tags: ["dinner", "vegetarian", "spicy"],
    ingredients: ['Vegetables', 'Curry Powder', 'Coconut Milk', 'Rice'],
    instructions: [
      'Sauté vegetables.',
      'Add curry powder and coconut milk.',
      'Simmer and serve over rice.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'chocolate-cake',
    title: 'Chocolate Cake',
    description: 'Rich and moist chocolate cake.',
    tags: ["dessert", "baking", "sweet"],
    ingredients: ['Flour', 'Cocoa Powder', 'Sugar', 'Eggs'],
    instructions: [
      'Mix dry ingredients.',
      'Add eggs and mix until smooth.',
      'Bake until a toothpick comes out clean.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'tuna-salad',
    title: 'Tuna Salad',
    description: 'Salad with tuna, mayonnaise, and vegetables.',
    tags: ["lunch", "quick", "seafood"],
    ingredients: ['Tuna', 'Mayonnaise', 'Celery', 'Onion'],
    instructions: [
      'Mix tuna with mayonnaise.',
      'Add chopped celery and onion.',
      'Serve on bread or crackers.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'beef-stroganoff',
    title: 'Beef Stroganoff',
    description: 'Creamy beef and mushroom sauce over noodles.',
    tags: ["dinner", "comfort food", "beef"],
    ingredients: ['Beef', 'Mushrooms', 'Sour Cream', 'Noodles'],
    instructions: [
      'Cook beef and mushrooms.',
      'Add sour cream and simmer.',
      'Serve over noodles.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'apple-crisp',
    title: 'Apple Crisp',
    description: 'Warm apple dessert with a crisp topping.',
    tags: ["dessert", "baking", "sweet"],
    ingredients: ['Apples', 'Oats', 'Brown Sugar', 'Butter'],
    instructions: [
      'Slice apples and place in baking dish.',
      'Mix oats, sugar, and butter.',
      'Sprinkle over apples and bake.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'eggplant-parmesan',
    title: 'Eggplant Parmesan',
    description: 'Breaded eggplant with tomato sauce and cheese.',
    tags: ["dinner", "italian", "vegetarian"],
    ingredients: ['Eggplant', 'Breadcrumbs', 'Tomato Sauce', 'Mozzarella'],
    instructions: [
      'Slice and bread eggplant.',
      'Fry until golden and top with sauce and cheese.',
      'Bake until melted.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'chicken-quesadilla',
    title: 'Chicken Quesadilla',
    description: 'Crispy tortilla filled with chicken and cheese.',
    tags: ["lunch", "mexican", "quick"],
    ingredients: ['Chicken', 'Tortilla', 'Cheese', 'Salsa'],
    instructions: [
      'Cook chicken and slice.',
      'Fill tortilla with chicken and cheese.',
      'Grill until crispy and serve with salsa.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'lentil-soup',
    title: 'Lentil Soup',
    description: 'Hearty soup with lentils and vegetables.',
    tags: ["lunch", "vegetarian", "soup"],
    ingredients: ['Lentils', 'Carrots', 'Celery', 'Vegetable Broth'],
    instructions: [
      'Sauté carrots and celery.',
      'Add lentils and broth.',
      'Simmer until lentils are tender.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'peanut-butter-cookies',
    title: 'Peanut Butter Cookies',
    description: 'Soft cookies with a rich peanut butter flavor.',
    tags: ["dessert", "baking", "sweet"],
    ingredients: ['Peanut Butter', 'Sugar', 'Flour', 'Eggs'],
    instructions: [
      'Mix peanut butter and sugar.',
      'Add flour and eggs.',
      'Bake until golden.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'shrimp-fried-rice',
    title: 'Shrimp Fried Rice',
    description: 'Fried rice with shrimp and vegetables.',
    tags: ["lunch", "seafood", "quick"],
    ingredients: ['Shrimp', 'Rice', 'Vegetables', 'Soy Sauce'],
    instructions: [
      'Cook shrimp and set aside.',
      'Scramble eggs and add vegetables.',
      'Mix in rice, shrimp, and soy sauce.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'chicken-pot-pie',
    title: 'Chicken Pot Pie',
    description: 'Creamy chicken and vegetable pie.',
    tags: ["dinner", "comfort food", "chicken"],
    ingredients: ['Chicken', 'Vegetables', 'Cream', 'Pie Crust'],
    instructions: [
      'Cook chicken and vegetables.',
      'Mix with cream and place in pie crust.',
      'Bake until golden.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  },
  {
    id: 'vegetarian-chili',
    title: 'Vegetarian Chili',
    description: 'Hearty chili with beans, vegetables, and spices.',
    tags: ["dinner", "vegetarian", "comfort food"],
    ingredients: ['Kidney Beans', 'Black Beans', 'Bell Peppers', 'Onions', 'Tomatoes', 'Chili Powder', 'Cumin'],
    instructions: [
      'Sauté onions and bell peppers until soft.',
      'Add beans, tomatoes, chili powder, and cumin.',
      'Simmer for 20-30 minutes until flavors meld together.'
    ],
    image_url: "https://via.placeholder.com/400x300.png?text=OnlyRecipes"
  }
];
