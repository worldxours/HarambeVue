import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { menuData } from "@/data/menuData";
import { Star } from "lucide-react";

type Category = "all" | "starters" | "main-courses" | "desserts" | "drinks";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  
  // Filter menu items based on active category
  const filteredItems = activeCategory === "all" 
    ? [...menuData.starters, ...menuData.mainCourses, ...menuData.desserts, ...menuData.drinks] 
    : menuData[activeCategory === "main-courses" ? "mainCourses" : activeCategory as keyof typeof menuData] || [];

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
            variant={activeCategory === "starters" ? "default" : "outline"} 
            onClick={() => setActiveCategory("starters")}
            className={activeCategory === "starters" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Starters
          </Button>
          <Button 
            variant={activeCategory === "main-courses" ? "default" : "outline"} 
            onClick={() => setActiveCategory("main-courses")}
            className={activeCategory === "main-courses" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Main Courses
          </Button>
          <Button 
            variant={activeCategory === "desserts" ? "default" : "outline"} 
            onClick={() => setActiveCategory("desserts")}
            className={activeCategory === "desserts" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Desserts
          </Button>
          <Button 
            variant={activeCategory === "drinks" ? "default" : "outline"} 
            onClick={() => setActiveCategory("drinks")}
            className={activeCategory === "drinks" ? "bg-primary text-white" : "text-primary border-primary"}
          >
            Drinks
          </Button>
        </div>
        
        {/* Starters Section */}
        {(activeCategory === "all" || activeCategory === "starters") && (
          <div className="menu-section mb-16">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-primary">Starters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData.starters.map((item) => (
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
        
        {/* Main Courses Section */}
        {(activeCategory === "all" || activeCategory === "main-courses") && (
          <div className="menu-section mb-16">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-primary">Main Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData.mainCourses.map((item) => (
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
        
        {/* Desserts Section */}
        {(activeCategory === "all" || activeCategory === "desserts") && (
          <div className="menu-section mb-16">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-primary">Desserts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData.desserts.map((item) => (
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
        
        {/* Drinks Section */}
        {(activeCategory === "all" || activeCategory === "drinks") && (
          <div className="menu-section">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-primary">Drinks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData.drinks.map((item) => (
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
