import { BookOpen } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const featuredBooks = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Thriller",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200&h=300",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Development",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=200&h=300",
  },
  {
    id: 3,
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=200&h=300",
  },
];

export const FeaturedBooks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Featured Books</h2>
          <a href="#" className="text-primary-DEFAULT hover:text-primary-dark transition-colors">
            View all →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-[2/3] relative mb-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="rounded-lg object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg flex items-center justify-center">
                    <Button className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary-DEFAULT hover:bg-primary-dark">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Read More
                    </Button>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                <p className="text-gray-600 text-sm">{book.author}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <span className="text-xs text-primary-DEFAULT px-2 py-1 bg-primary-light rounded-full">
                  {book.category}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};