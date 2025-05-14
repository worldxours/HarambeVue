import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { menuData } from "@/data/menuData";
import { Star } from "lucide-react";

type Category = "all" | "appetizers" | "vegetarian" | "beef" | "chicken" | "lamb" | "combination-platters" | "fish" | "injera";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  
  // Filter menu items based on active category
  const filteredItems = activeCategory === "all" 
    ? [...menuData.appetizers, ...menuData.vegetarian, ...menuData.beef, ...menuData.chicken, ...menuData.lamb, ...menuData.combinationPlatters, ...menuData.fish, ...menuData.injera] 
    : menuData[activeCategory === "combination-platters" ? "combinationPlatters" : activeCategory as keyof typeof menuData] || [];

  return (
    <section className="py-16 md:py-24 bg-[hsl(44,100%,95%)]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-accent text-xl text-[hsl(44,100%,52%)]">Seasonal & Fresh</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">Our Menu</h2>
          <p className="text-[#757575]">Our menu changes with the seasons to bring you the freshest, most flavorful dishes year-round.</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            variant={activeCategory === "all" ? "default" : "outline"} 
            onClick={() => setActiveCategory("all")}
            className={activeCategory === "all" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            All
          </Button>
          <Button 
            variant={activeCategory === "appetizers" ? "default" : "outline"} 
            onClick={() => setActiveCategory("appetizers")}
            className={activeCategory === "appetizers" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Appetizers
          </Button>
          <Button 
            variant={activeCategory === "vegetarian" ? "default" : "outline"} 
            onClick={() => setActiveCategory("vegetarian")}
            className={activeCategory === "vegetarian" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Vegetarian
          </Button>
          <Button 
            variant={activeCategory === "beef" ? "default" : "outline"} 
            onClick={() => setActiveCategory("beef")}
            className={activeCategory === "beef" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Beef
          </Button>
          <Button 
            variant={activeCategory === "chicken" ? "default" : "outline"} 
            onClick={() => setActiveCategory("chicken")}
            className={activeCategory === "chicken" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Chicken
          </Button>
          <Button 
            variant={activeCategory === "lamb" ? "default" : "outline"} 
            onClick={() => setActiveCategory("lamb")}
            className={activeCategory === "lamb" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Lamb
          </Button>
          <Button 
            variant={activeCategory === "combination-platters" ? "default" : "outline"} 
            onClick={() => setActiveCategory("combination-platters")}
            className={activeCategory === "combination-platters" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Combination Platters
          </Button>
          <Button 
            variant={activeCategory === "fish" ? "default" : "outline"} 
            onClick={() => setActiveCategory("fish")}
            className={activeCategory === "fish" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Fish
          </Button>
          <Button 
            variant={activeCategory === "injera" ? "default" : "outline"} 
            onClick={() => setActiveCategory("injera")}
            className={activeCategory === "injera" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Injera
          </Button>
        </div>
        
        {/* Appetizers Section */}
        {(activeCategory === "all" || activeCategory === "appetizers") && (
          <div className="menu-section mb-16">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-primary">Appetizers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData.appetizers && menuData.appetizers.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-heading font-medium text-lg">{item.name}</h4>
                      <span className="text-[hsl(0,64%,50%)] font-medium">${item.price}</span>
                    </div>
                    <p className="text-[#757575] text-sm mt-1">{item.description}</p>
                    {item.dietary && (
                      <Badge variant="secondary" className="mt-2 bg-[hsl(44,100%,52%)]/20 text-[hsl(122,63%,25%)] hover:bg-[hsl(44,100%,52%)]/30">
                        {item.dietary}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Vegetarian Section */}
        {(activeCategory === "all" || activeCategory === "vegetarian") && (
          <div className="menu-section mb-16">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-primary">Vegetarian</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData.vegetarian && menuData.vegetarian.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-heading font-medium text-lg">{item.name}</h4>
                      <span className="text-[hsl(0,64%,50%)] font-medium">${item.price}</span>
                    </div>
                    <p className="text-[#757575] text-sm mt-1">{item.description}</p>
                    {item.dietary && (
                      <Badge variant="secondary" className="mt-2 bg-[hsl(44,100%,52%)]/20 text-[hsl(122,63%,25%)] hover:bg-[hsl(44,100%,52%)]/30">
                        {item.dietary}
                      </Badge>
                    )}
                    {item.popular && (
                      <div className="mt-2">
                        <span className="text-[hsl(44,100%,52%)] flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                          <span className="text-xs text-[#757575] ml-1">Popular</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Beef Section */}
        {(activeCategory === "all" || activeCategory === "beef") && (
          <div className="menu-section mb-16">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-primary">Beef</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData.beef && menuData.beef.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-heading font-medium text-lg">{item.name}</h4>
                      <span className="text-[hsl(0,64%,50%)] font-medium">${item.price}</span>
                    </div>
                    <p className="text-[#757575] text-sm mt-1">{item.description}</p>
                    {item.dietary && (
                      <Badge variant="secondary" className="mt-2 bg-[hsl(44,100%,52%)]/20 text-[hsl(122,63%,25%)] hover:bg-[hsl(44,100%,52%)]/30">
                        {item.dietary}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Chicken Section */}
        {(activeCategory === "all" || activeCategory === "chicken") && (
          <div className="menu-section mb-16">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-primary">Chicken</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData.chicken && menuData.chicken.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-heading font-medium text-lg">{item.name}</h4>
                      <span className="text-[hsl(0,64%,50%)] font-medium">${item.price}</span>
                    </div>
                    <p className="text-[#757575] text-sm mt-1">{item.description}</p>
                    {item.dietary && (
                      <Badge variant="secondary" className="mt-2 bg-[hsl(44,100%,52%)]/20 text-[hsl(122,63%,25%)] hover:bg-[hsl(44,100%,52%)]/30">
                        {item.dietary}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Lamb Section */}
        {(activeCategory === "all" || activeCategory === "lamb") && (
          <div className="menu-section mb-16">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-primary">Lamb</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData.lamb && menuData.lamb.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-heading font-medium text-lg">{item.name}</h4>
                      <span className="text-[hsl(0,64%,50%)] font-medium">${item.price}</span>
                    </div>
                    <p className="text-[#757575] text-sm mt-1">{item.description}</p>
                    {item.dietary && (
                      <Badge variant="secondary" className="mt-2 bg-[hsl(44,100%,52%)]/20 text-[hsl(122,63%,25%)] hover:bg-[hsl(44,100%,52%)]/30">
                        {item.dietary}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Combination Platters Section */}
        {(activeCategory === "all" || activeCategory === "combination-platters") && (
          <div className="menu-section mb-16">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-primary">Combination Platters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData.combinationPlatters && menuData.combinationPlatters.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-heading font-medium text-lg">{item.name}</h4>
                      <span className="text-[hsl(0,64%,50%)] font-medium">
                        {typeof item.price === 'object' ? 
                          Object.entries(item.price).map(([key, value], index) => (
                            <div key={index}>{key}: ${value}</div>
                          )) : 
                          `$${item.price}`
                        }
                      </span>
                    </div>
                    <p className="text-[#757575] text-sm mt-1">{item.description}</p>
                    {item.dietary && (
                      <Badge variant="secondary" className="mt-2 bg-[hsl(44,100%,52%)]/20 text-[hsl(122,63%,25%)] hover:bg-[hsl(44,100%,52%)]/30">
                        {item.dietary}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Fish Section */}
        {(activeCategory === "all" || activeCategory === "fish") && (
          <div className="menu-section mb-16">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-primary">Fish</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData.fish && menuData.fish.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-heading font-medium text-lg">{item.name}</h4>
                      <span className="text-[hsl(0,64%,50%)] font-medium">${item.price}</span>
                    </div>
                    <p className="text-[#757575] text-sm mt-1">{item.description}</p>
                    {item.dietary && (
                      <Badge variant="secondary" className="mt-2 bg-[hsl(44,100%,52%)]/20 text-[hsl(122,63%,25%)] hover:bg-[hsl(44,100%,52%)]/30">
                        {item.dietary}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Injera Section */}
        {(activeCategory === "all" || activeCategory === "injera") && (
          <div className="menu-section mb-16">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-primary">Injera</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData.injera && menuData.injera.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-heading font-medium text-lg">{item.name}</h4>
                      <span className="text-[hsl(0,64%,50%)] font-medium">{item.price ? `$${item.price}` : ''}</span>
                    </div>
                    <p className="text-[#757575] text-sm mt-1">{item.description}</p>
                    {item.dietary && (
                      <Badge variant="secondary" className="mt-2 bg-[hsl(44,100%,52%)]/20 text-[hsl(122,63%,25%)] hover:bg-[hsl(44,100%,52%)]/30">
                        {item.dietary}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="text-center mt-16">
          <p className="text-[#757575] italic mb-4">* Menu items may contain allergens. Please inform your server of any dietary restrictions.</p>
          <Button className="bg-primary hover:bg-primary/90">
            Download Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
