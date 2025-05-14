interface MenuItem {
  id: number;
  name: string;
  price: number | Record<string, number>;
  description: string;
  image: string;
  dietary?: string;
  popular?: boolean;
}

// Ethiopian food images
const ethFoodImg = "https://images.unsplash.com/photo-1567645178958-4606d8509838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const injera = "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const vegetarian = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const beef = "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const chicken = "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const lamb = "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const fish = "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const soup = "https://images.unsplash.com/photo-1541392648320-d0b5d8633f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const salad = "https://images.unsplash.com/photo-1623259838743-9f1e884fba59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const samosa = "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";
const platter = "https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80";

export const menuData = {
  appetizers: [
    {
      id: 1,
      name: "Muriyevo Soup",
      price: 8.99,
      description: "Spinach, onions, tomatoes and assorted Harambe spices, made with coconut milk",
      image: soup,
      dietary: "Vegetarian"
    },
    {
      id: 2,
      name: "Harambe Salad",
      price: 8.99,
      description: "Tomatoes, onions, bell peppers, and lettuce with assorted Harambe spices in the dressing.",
      image: salad,
      dietary: "Vegetarian"
    },
    {
      id: 3,
      name: "Peanut Soup",
      price: 8.99,
      description: "Chicken cooked in peanut sauce with Harambe organic spices.",
      image: soup
    },
    {
      id: 4,
      name: "Dumaskli Soup",
      price: 8.99,
      description: "Milk, corn, and assorted Harambe Organic Ethiopian, made with coconut milk.",
      image: soup,
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
      image: vegetarian,
      dietary: "Vegetarian"
    },
    {
      id: 7,
      name: "Miser Wot",
      price: 14.99,
      description: "Red split lentils cooked with onions in berbere and Harambe organic spices.",
      image: vegetarian,
      dietary: "Vegetarian"
    },
    {
      id: 8,
      name: "Tekil Gomen",
      price: 14.99,
      description: "Steamed cabbage and onions seasoned with Harambe organic spices.",
      image: vegetarian,
      dietary: "Vegetarian"
    },
    {
      id: 9,
      name: "Gomen",
      price: 14.99,
      description: "Spinach boiled in onions and sauteed with garlic and Harambe organic spices.",
      image: vegetarian,
      dietary: "Vegetarian"
    },
    {
      id: 10,
      name: "Yatekilt Alicha",
      price: 14.99,
      description: "Sauteed carrots, string beans, potatoes, and onions, seasoned with Harambe organic spices.",
      image: vegetarian,
      dietary: "Vegetarian"
    },
    {
      id: 11,
      name: "Kik Alicha Wot",
      price: 13.99,
      description: "Yellow split lentils cooked with onions in berbere and Harambe organic spices.",
      image: vegetarian,
      dietary: "Vegetarian"
    }
  ],
  beef: [
    {
      id: 12,
      name: "Kitefo",
      price: 23.80,
      description: "Lean tender beef finely chopped tartar and mixed with mitmita cardamom and Ethiopian butter. Served raw or slightly cooked with your choice of spinach or Ateb (Ethiopian Cottage Cheese) and choice of injera or rice.",
      image: beef
    },
    {
      id: 13,
      name: "Kitefo and Three Kinds of Vegetable Dishes",
      price: 31.80,
      description: "Lean tender beef finely chopped tartar and mixed with mitmita cardamom and Ethiopian butter. Served raw or slightly cooked with your choice of spinach or Ateb (Ethiopian Cottage Cheese) and choice of injera or rice.",
      image: beef
    },
    {
      id: 14,
      name: "Zilzil Tibs",
      price: 25.99,
      description: "Strips of tender beef sauteed with onions, exotic herbs, and berbere. Served with salad and choice of injera or rice.",
      image: beef
    },
    {
      id: 15,
      name: "Awaze Tibs",
      price: 23.80,
      description: "Beef chunks sauteed in butter, seasoned with onions, green peppers, and organic Ethiopian spices, and served with Harambe salad and choice of injera or rice.",
      image: beef
    },
    {
      id: 16,
      name: "Awaze Tibs and Three Kinds of Vegetable Dishes",
      price: 31.80,
      description: "Awaze tibs with chef's choice of three items from the standard vegetable combination and injera or rice.",
      image: beef
    },
    {
      id: 17,
      name: "Gored Gored",
      price: 24.99,
      description: "Chucked cubed beef mixed with homemade awaze sauce and herbal butter with your choice of injera or rice.",
      image: beef
    },
    {
      id: 18,
      name: "Alicha Wot",
      price: 22.99,
      description: "Diced lean meat simmered with onions, ginger, garlic, and assorted Harambe organic spices. Served with salad and choice of injera or rice.",
      image: beef
    },
    {
      id: 19,
      name: "Alicha Wot and Three Kinds of Vegetable Dishes",
      price: 30.99,
      description: "Alatcha Wot with chef's choice of three items from the standard vegetable combination and injera or rice.",
      image: beef
    }
  ],
  chicken: [
    {
      id: 20,
      name: "Doro Wot",
      price: 19.99,
      description: "Chicken stew with hard-boiled eggs, chicken thigh, leg, and egg, cooked with onions in rich berbere sauce. Very tasty and served with Ayeb (Ethiopian Cottage Cheese) and Injera or rice.",
      image: chicken
    },
    {
      id: 21,
      name: "Doro Wot and Three Kinds of Vegetable Dishes",
      price: 27.99,
      description: "Doro wot with chef's choice of three items from the standard vegetable combination.",
      image: chicken
    },
    {
      id: 22,
      name: "Doro Tibs",
      price: 24.99,
      description: "Chicken cubes sauteed with onions, garlic, spices, and mixed vegetables. Served with salad and choice of injera or rice.",
      image: chicken
    },
    {
      id: 23,
      name: "Doro Tibs and Three Kinds of Vegetable Dishes",
      price: 32.99,
      description: "Doro tibs with chef's choice of three items from the standard vegetable combination.",
      image: chicken
    }
  ],
  lamb: [
    {
      id: 24,
      name: "Yebeg Tibs",
      price: 24.99,
      description: "Lamb cubes pan fried in jalapenos, onions, and rosemary, served with Harambe salad.",
      image: lamb
    },
    {
      id: 25,
      name: "Yebeg Tibs with Three Kinds of Vegetable Dishes",
      price: 32.99,
      description: "Yebeg tibs with chef's choice of three items from the standard vegetable combination.",
      image: lamb
    },
    {
      id: 26,
      name: "Yebeg Wot",
      price: 23.80,
      description: "Lamb simmered in berbere sauce, seasoned with organic Harambe spices, and served with salad.",
      image: lamb
    },
    {
      id: 27,
      name: "Yebeg Wot with Three Kinds of Vegetable Dishes",
      price: 31.80,
      description: "Yebeg Wot with chef's choice of three items from the standard vegetable combination.",
      image: lamb
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
      image: platter,
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
      image: platter
    }
  ],
  fish: [
    {
      id: 30,
      name: "Ye Assa Tibs",
      price: 24.99,
      description: "Fish of the day pan fried and delicately seasoned with Ethiopian herbs and spices, served with a side salad and choice of injera or rice.",
      image: fish
    },
    {
      id: 31,
      name: "Ye Assa Tibs and Three Kinds of Vegetable Dishes",
      price: 32.99,
      description: "Ye assa tibs with chef's choice of three items from the standard vegetable combination.",
      image: fish
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
