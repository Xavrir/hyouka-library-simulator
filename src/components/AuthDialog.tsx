import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const VALID_CREDENTIALS = {
  email: "rizky",
  password: "binus123"
};

interface AuthDialogProps {
  mode: "login" | "register";
  trigger?: React.ReactNode;
  onLoginSuccess?: (email: string) => void;
}

export const AuthDialog = ({ mode, trigger, onLoginSuccess }: AuthDialogProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === "login") {
      if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
        toast({
          title: "Login Successful",
          description: `Welcome ${email}!`,
        });
        onLoginSuccess?.(email);
        setOpen(false);
        setEmail("");
        setPassword("");
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials",
          variant: "destructive"
        });
      }
    } else {
      toast({
        title: "Registration not available",
        description: "Please use the provided test account",
        variant: "destructive"
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant={mode === "login" ? "default" : "outline"}>
            {mode === "login" ? "Login" : "Register"}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === "login" ? "Login to your account" : "Create an account"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Username</Label>
            <Input
              id="email"
              type="text"
              placeholder="Enter your username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            {mode === "login" ? "Login" : "Register"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};