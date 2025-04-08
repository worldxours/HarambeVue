interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  dietary?: string;
  popular?: boolean;
}

export const menuData = {
  starters: [
    {
      id: 1,
      name: "Garden Salad",
      price: 12,
      description: "Mixed greens, heirloom tomatoes, cucumber, radish, herb vinaigrette",
      image: "https://images.unsplash.com/photo-1623259838743-9f1e884fba59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      dietary: "Vegetarian"
    },
    {
      id: 2,
      name: "Roasted Beet Soup",
      price: 10,
      description: "Roasted beets, cream, dill, crème fraîche",
      image: "https://images.unsplash.com/photo-1541392648320-d0b5d8633f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      dietary: "Gluten-Free"
    },
    {
      id: 3,
      name: "Crispy Brussels Sprouts",
      price: 14,
      description: "Pan-fried brussels sprouts, bacon, maple glaze, toasted pecans",
      image: "https://images.unsplash.com/photo-1664383950596-3e306a8d158d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Artisanal Cheese Plate",
      price: 18,
      description: "Selection of local cheeses, house-made preserves, toasted sourdough",
      image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      dietary: "Vegetarian"
    }
  ],
  mainCourses: [
    {
      id: 5,
      name: "Herb Roasted Chicken",
      price: 26,
      description: "Free-range chicken, root vegetables, herb jus, garlic mashed potatoes",
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      popular: true
    },
    {
      id: 6,
      name: "Harvest Bowl",
      price: 22,
      description: "Quinoa, roasted seasonal vegetables, avocado, tahini dressing",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      dietary: "Vegan"
    },
    {
      id: 7,
      name: "Pan-Seared Salmon",
      price: 28,
      description: "Wild-caught salmon, asparagus, lemon beurre blanc, herbed rice",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      dietary: "Gluten-Free"
    },
    {
      id: 8,
      name: "Mushroom Risotto",
      price: 24,
      description: "Arborio rice, wild mushrooms, parmesan, truffle oil, fresh herbs",
      image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      dietary: "Vegetarian"
    }
  ],
  desserts: [
    {
      id: 9,
      name: "Seasonal Fruit Crumble",
      price: 10,
      description: "Warm seasonal fruit, oat crumble topping, vanilla bean ice cream",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 10,
      name: "Chocolate Torte",
      price: 12,
      description: "Flourless chocolate cake, raspberry coulis, fresh berries",
      image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      dietary: "Gluten-Free"
    }
  ],
  drinks: [
    {
      id: 11,
      name: "Organic Cold Pressed Juice",
      price: 8,
      description: "Selection of seasonal fruits and vegetables, freshly pressed daily",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      dietary: "Vegan"
    },
    {
      id: 12,
      name: "Craft Kombucha",
      price: 6,
      description: "House-fermented kombucha with seasonal flavors",
      image: "https://images.unsplash.com/photo-1576873689360-1688cf4993b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      dietary: "Probiotic"
    }
  ]
};
