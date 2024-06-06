import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Login",
      path: "/sign-in",
      show: true,
    },
    {
      label: "Register",
      path: "/sign-up",
      show: true,
    },
  
  ];

  return (
    <div className="flex items-center h-16 w-full shrink-0">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden">
            <AlignJustify className="h-6 w-6" />
            <span className="sr-only">Toggle Navigation Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" className="mr-6 hidden lg:flex"></Link>
          <h3>Menu Options</h3>
          <div className="py-6 grid gap-2">
            {menuItems.map((menuItem, i) =>
              menuItem.show ? (
                <Link
                  key={i}
                  href={menuItem.path}
                  className="w-full p-2 items-center text-lg font-semibold"
                >
                  {menuItem.label}
                </Link>
              ) : null
            )}
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 hidden lg:flex">
        JOB FINDER
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
      {menuItems.map((menuItem, i) =>
              menuItem.show ? (
                <Link
                  key={i}
                  href={menuItem.path}
                  className="group inline-flex h-9 w-max items-center rounded-md bg-white px-4 py-2 text-sm font-medium"
                >
                  {menuItem.label}
                </Link>
              ) : null
            )}
      </nav>
    </div>
  );
};

export default Header;
