"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {signUp} from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router= useRouter();
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);

        try{
        const result=  await signUp.email({
            email, name , password,
          });
          if (result.error){
            setError(result.error.message || "An error occurred");
          }
          else{
            router.push("/sign-in");
          }
        }
        catch(err){
            setError("Failed to create account. Please try again.");
        }
        finally{
            setLoading(false);
        }
    }
        
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      
      <Card className="w-full max-w-md shadow-lg border border-border">
        
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-semibold">
            Create an account
          </CardTitle>

          <CardDescription>
            Enter your details below to get started
          </CardDescription>
        </CardHeader>

        <form className="grid gap-6">
          <CardContent className="grid gap-4">
{error && (
              <div className="p-3 text-sm text-red-600 bg-red-100 rounded">
                {error}
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            
            <Button type="submit" className="w-full" disabled={loading} onClick={handleSubmit}>
            {loading ? "Creating Account..." : "Sign Up"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="text-primary font-medium hover:underline"
              >
                Sign In
              </Link>
            </p>

          </CardFooter>
        </form>

      </Card>
    </div>
  );
}