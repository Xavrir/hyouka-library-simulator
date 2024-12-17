import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

const Fines = () => {
  // Mock data - in a real app, this would come from your backend
  const fines = [
    {
      id: 1,
      bookTitle: "The Great Gatsby",
      dueDate: "2024-02-01",
      returnedDate: "2024-02-15",
      amount: 14.00, // $1 per day late
    },
    {
      id: 2,
      bookTitle: "1984",
      dueDate: "2024-02-10",
      returnedDate: "2024-02-20",
      amount: 10.00,
    }
  ];

  const totalFines = fines.reduce((sum, fine) => sum + fine.amount, 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Library Fines</h1>
          <p className="text-gray-600">Review and manage your outstanding library fines</p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">Total Outstanding Fines</CardTitle>
              <DollarSign className="h-6 w-6 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-500">${totalFines.toFixed(2)}</div>
            </CardContent>
          </Card>

          {fines.map((fine) => (
            <Card key={fine.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{fine.bookTitle}</h3>
                    <p className="text-sm text-gray-500">Due: {fine.dueDate}</p>
                    <p className="text-sm text-gray-500">Returned: {fine.returnedDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-red-500">${fine.amount.toFixed(2)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fines;