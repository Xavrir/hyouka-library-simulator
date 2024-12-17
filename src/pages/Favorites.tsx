import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Trash2 } from "lucide-react";

const Favorites = () => {
  // Mock data - in a real app, this would come from your backend
  const favorites = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverUrl: "https://example.com/gatsby.jpg",
      addedDate: "2024-02-20",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      coverUrl: "https://example.com/1984.jpg",
      addedDate: "2024-02-19",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Favorite Books</h1>
          <p className="text-gray-600">Manage your collection of favorite books</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((book) => (
            <Card key={book.id}>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span className="text-xl">{book.title}</span>
                  <Heart className="h-5 w-5 text-red-500 fill-current" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{book.author}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Added: {book.addedDate}</span>
                  <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;