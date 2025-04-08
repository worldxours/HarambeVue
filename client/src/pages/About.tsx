import { Sprout, Users, Heart } from "lucide-react";

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-accent text-xl text-[hsl(44,100%,52%)]">Our Story</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">About Verdant Table</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Restaurant interior with rustic decor" 
              className="rounded-lg shadow-xl w-full h-[400px] md:h-[500px] object-cover object-center"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-4 rounded-lg shadow-lg text-white hidden md:block">
              <p className="font-accent text-xl">Est. 2015</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4">From Farm to Your Table</h3>
            <p className="text-[#757575] mb-6">Verdant Table began with a simple vision: to create a restaurant that honors the connection between food, farmer, and diner. Founded in 2015 by Chef Maria Rodriguez, we set out to showcase the incredible bounty of our region while supporting sustainable farming practices.</p>
            
            <p className="text-[#757575] mb-6">Our team visits local farms weekly to select the finest ingredients, and our menu evolves with the seasons. We believe that food tastes best when it's fresh, ethically sourced, and prepared with care.</p>
            
            <p className="text-[#757575] mb-8">What began as a small café has grown into a community gathering place, where we celebrate good food, good company, and the hard work of our local farmers and producers.</p>
            
            <div className="flex items-center space-x-6">
              <img 
                src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                alt="Chef Maria Rodriguez" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-heading font-medium">Maria Rodriguez</p>
                <p className="text-[#757575] text-sm">Founder & Head Chef</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6">
            <Sprout className="text-[hsl(44,100%,52%)] h-10 w-10 mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold mb-3">Sustainability</h3>
            <p className="text-[#757575]">We're committed to eco-friendly practices, from composting to minimizing food waste.</p>
          </div>
          
          <div className="text-center p-6">
            <Users className="text-[hsl(44,100%,52%)] h-10 w-10 mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold mb-3">Community</h3>
            <p className="text-[#757575]">We support local farmers, artisans, and food producers to strengthen our regional food system.</p>
          </div>
          
          <div className="text-center p-6">
            <Heart className="text-[hsl(44,100%,52%)] h-10 w-10 mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold mb-3">Passion</h3>
            <p className="text-[#757575]">We put love into every dish, creating memorable experiences for our guests.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
