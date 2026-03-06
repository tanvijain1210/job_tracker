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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignUp() {
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

            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" type="email" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
              />
            </div>

          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            
            <Button type="submit" className="w-full">
              Sign Up
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