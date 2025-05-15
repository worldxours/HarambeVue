interface MenuItem {
  id: number;
  name: string;
  price: number | Record<string, number>;
  description: string;
  image: string;
  dietary?: string;
  popular?: boolean;
}

// Ethiopian food images - more specific for each dish type
// Injera (Ethiopian bread)
const injera = "https://images.unsplash.com/photo-1642375776039-006fdbcb8aa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";

// Soups
const spinachSoup = "https://images.unsplash.com/photo-1616501268209-edfff098fdd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const peanutSoup = "https://images.unsplash.com/photo-1585167159413-8c8a1ed09af9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const coconutSoup = "https://images.unsplash.com/photo-1638956265408-ad35f2d1139c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";

// Salads
const ethSalad = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";

// Appetizers
const samosa = "https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";

// Vegetarian dishes
const shiro = "https://images.unsplash.com/photo-1686169766276-949534fa6a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const misirWot = "https://images.unsplash.com/photo-1652086326428-84e0ae7dc93a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const gomen = "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const alicha = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";

// Beef dishes
const kitfo = "https://images.unsplash.com/photo-1600044309908-ef8401d0e1a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const tibs = "https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const gored = "https://images.unsplash.com/photo-1652086326428-84e0ae7dc93a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const alichaWot = "https://images.unsplash.com/photo-1651448587594-9a58dd4be81a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";

// Chicken dishes
const doroWot = "https://images.unsplash.com/photo-1651448588073-9661bb72dcbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const doroTibs = "https://images.unsplash.com/photo-1631292784640-2b24be784d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";

// Lamb dishes
const yebegTibs = "https://images.unsplash.com/photo-1651448587686-1aad9215eb19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const yebegWot = "https://images.unsplash.com/photo-1624300603538-1ac2209eefc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";

// Fish dishes
const fishTibs = "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";

// Combination platters
const veggiePlatter = "https://images.unsplash.com/photo-1633970376519-79c092a73654?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const mixedPlatter = "https://images.unsplash.com/photo-1643321210461-d60e3c5a0ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";

export const menuData = {
  appetizers: [
    {
      id: 1,
      name: "Muriyevo Soup",
      price: 8.99,
      description: "Spinach, onions, tomatoes and assorted Harambe spices, made with coconut milk",
      image: spinachSoup,
      dietary: "Vegetarian"
    },
    {
      id: 2,
      name: "Harambe Salad",
      price: 8.99,
      description: "Tomatoes, onions, bell peppers, and lettuce with assorted Harambe spices in the dressing.",
      image: ethSalad,
      dietary: "Vegetarian"
    },
    {
      id: 3,
      name: "Peanut Soup",
      price: 8.99,
      description: "Chicken cooked in peanut sauce with Harambe organic spices.",
      image: peanutSoup
    },
    {
      id: 4,
      name: "Dumaskli Soup",
      price: 8.99,
      description: "Milk, corn, and assorted Harambe Organic Ethiopian, made with coconut milk.",
      image: coconutSoup,
      dietary: "Vegetarian"
    },
    {
      id: 5,
      name: "Veggie Samosa",
      price: 2.50,
      description: "Brown lentils, onions, garlic, salt, and Harambe spices. 1 for $2.50 or 3 for $6.00",
      image: samosa,
      dietary: "Vegetarian"
    }
  ],
  vegetarian: [
    {
      id: 6,
      name: "Shero Wot",
      price: 14.99,
      description: "Ground chickpeas cooked in berbere with onions and seasoned with Harambe organic spices.",
      image: shiro,
      dietary: "Vegetarian"
    },
    {
      id: 7,
      name: "Miser Wot",
      price: 14.99,
      description: "Red split lentils cooked with onions in berbere and Harambe organic spices.",
      image: misirWot,
      dietary: "Vegetarian"
    },
    {
      id: 8,
      name: "Tekil Gomen",
      price: 14.99,
      description: "Steamed cabbage and onions seasoned with Harambe organic spices.",
      image: gomen,
      dietary: "Vegetarian"
    },
    {
      id: 9,
      name: "Gomen",
      price: 14.99,
      description: "Spinach boiled in onions and sauteed with garlic and Harambe organic spices.",
      image: gomen,
      dietary: "Vegetarian"
    },
    {
      id: 10,
      name: "Yatekilt Alicha",
      price: 14.99,
      description: "Sauteed carrots, string beans, potatoes, and onions, seasoned with Harambe organic spices.",
      image: alicha,
      dietary: "Vegetarian"
    },
    {
      id: 11,
      name: "Kik Alicha Wot",
      price: 13.99,
      description: "Yellow split lentils cooked with onions in berbere and Harambe organic spices.",
      image: alicha,
      dietary: "Vegetarian"
    }
  ],
  beef: [
    {
      id: 12,
      name: "Kitefo",
      price: 23.80,
      description: "Lean tender beef finely chopped tartar and mixed with mitmita cardamom and Ethiopian butter. Served raw or slightly cooked with your choice of spinach or Ateb (Ethiopian Cottage Cheese) and choice of injera or rice.",
      image: kitfo
    },
    {
      id: 13,
      name: "Kitefo and Three Kinds of Vegetable Dishes",
      price: 31.80,
      description: "Lean tender beef finely chopped tartar and mixed with mitmita cardamom and Ethiopian butter. Served raw or slightly cooked with your choice of spinach or Ateb (Ethiopian Cottage Cheese) and choice of injera or rice.",
      image: kitfo
    },
    {
      id: 14,
      name: "Zilzil Tibs",
      price: 25.99,
      description: "Strips of tender beef sauteed with onions, exotic herbs, and berbere. Served with salad and choice of injera or rice.",
      image: tibs
    },
    {
      id: 15,
      name: "Awaze Tibs",
      price: 23.80,
      description: "Beef chunks sauteed in butter, seasoned with onions, green peppers, and organic Ethiopian spices, and served with Harambe salad and choice of injera or rice.",
      image: tibs
    },
    {
      id: 16,
      name: "Awaze Tibs and Three Kinds of Vegetable Dishes",
      price: 31.80,
      description: "Awaze tibs with chef's choice of three items from the standard vegetable combination and injera or rice.",
      image: tibs
    },
    {
      id: 17,
      name: "Gored Gored",
      price: 24.99,
      description: "Chucked cubed beef mixed with homemade awaze sauce and herbal butter with your choice of injera or rice.",
      image: gored
    },
    {
      id: 18,
      name: "Alicha Wot",
      price: 22.99,
      description: "Diced lean meat simmered with onions, ginger, garlic, and assorted Harambe organic spices. Served with salad and choice of injera or rice.",
      image: alichaWot
    },
    {
      id: 19,
      name: "Alicha Wot and Three Kinds of Vegetable Dishes",
      price: 30.99,
      description: "Alatcha Wot with chef's choice of three items from the standard vegetable combination and injera or rice.",
      image: alichaWot
    }
  ],
  chicken: [
    {
      id: 20,
      name: "Doro Wot",
      price: 19.99,
      description: "Chicken stew with hard-boiled eggs, chicken thigh, leg, and egg, cooked with onions in rich berbere sauce. Very tasty and served with Ayeb (Ethiopian Cottage Cheese) and Injera or rice.",
      image: doroWot
    },
    {
      id: 21,
      name: "Doro Wot and Three Kinds of Vegetable Dishes",
      price: 27.99,
      description: "Doro wot with chef's choice of three items from the standard vegetable combination.",
      image: doroWot
    },
    {
      id: 22,
      name: "Doro Tibs",
      price: 24.99,
      description: "Chicken cubes sauteed with onions, garlic, spices, and mixed vegetables. Served with salad and choice of injera or rice.",
      image: doroTibs
    },
    {
      id: 23,
      name: "Doro Tibs and Three Kinds of Vegetable Dishes",
      price: 32.99,
      description: "Doro tibs with chef's choice of three items from the standard vegetable combination.",
      image: doroTibs
    }
  ],
  lamb: [
    {
      id: 24,
      name: "Yebeg Tibs",
      price: 24.99,
      description: "Lamb cubes pan fried in jalapenos, onions, and rosemary, served with Harambe salad.",
      image: yebegTibs
    },
    {
      id: 25,
      name: "Yebeg Tibs with Three Kinds of Vegetable Dishes",
      price: 32.99,
      description: "Yebeg tibs with chef's choice of three items from the standard vegetable combination.",
      image: yebegTibs
    },
    {
      id: 26,
      name: "Yebeg Wot",
      price: 23.80,
      description: "Lamb simmered in berbere sauce, seasoned with organic Harambe spices, and served with salad.",
      image: yebegWot
    },
    {
      id: 27,
      name: "Yebeg Wot with Three Kinds of Vegetable Dishes",
      price: 31.80,
      description: "Yebeg Wot with chef's choice of three items from the standard vegetable combination.",
      image: yebegWot
    }
  ],
  combinationPlatters: [
    {
      id: 28,
      name: "Veggie Lovers Combination",
      price: {
        "One Person": 16.50,
        "Two People": 32.98,
        "Three People": 49.50,
        "Four People": 66.00,
        "Five People": 82.50,
        "Six People": 99.00
      },
      description: "Assorted Harambe vegetarian dishes with Harambe salad.",
      image: veggiePlatter,
      dietary: "Vegetarian"
    },
    {
      id: 29,
      name: "Chef's Choice Combination",
      price: {
        "One Person": 22.99,
        "Two People": 43.80,
        "Three People": 62.67,
        "Four People": 95.96,
        "Five People": 114.50,
        "Six People": 137.99
      },
      description: "Yebeg Wot, Doro Wot, and Alicha Wot with Harambe assorted vegetarian dishes from the menu.",
      image: mixedPlatter
    }
  ],
  fish: [
    {
      id: 30,
      name: "Ye Assa Tibs",
      price: 24.99,
      description: "Fish of the day pan fried and delicately seasoned with Ethiopian herbs and spices, served with a side salad and choice of injera or rice.",
      image: fishTibs
    },
    {
      id: 31,
      name: "Ye Assa Tibs and Three Kinds of Vegetable Dishes",
      price: 32.99,
      description: "Ye assa tibs with chef's choice of three items from the standard vegetable combination.",
      image: fishTibs
    }
  ],
  injera: [
    {
      id: 32,
      name: "Injera",
      price: 0,
      description: "For thousands of years, Ethiopians have made traditional Ethiopian bread called Injera when eating and Ethiopian meal. Injera serves both as your platter and utensil. Standard Injera Included with your meal. Gluten free Injera are $3.00 each",
      image: injera,
      dietary: "Vegetarian"
    }
  ]
};
