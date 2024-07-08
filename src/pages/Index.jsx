import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-xl mb-8">Your journey starts here</p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Three-Column Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <img src={`https://via.placeholder.com/300x200?text=Feature+${i}`} alt={`Feature ${i}`} className="w-full h-48 object-cover mb-4" />
                  <CardTitle>Feature {i}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;