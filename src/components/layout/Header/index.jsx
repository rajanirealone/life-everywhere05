"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    { name: "ABOUT US", link: "/about" },
    { name: "RESOURCES", link: "/resources" },
    { name: "STORIES OF IMPACT", link: "/stories" },
    { name: "WEEKLY ZOOM", link: "/zoom" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-md py-2" : "py-4"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="relative w-[180px] md:w-[220px] h-auto">
              <Image
                src="/images/Logo.svg"
                alt="Life Everywhere Logo"
                width={220}
                height={60}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menus.map((item, id) => (
              <Link
                key={id}
                href={item.link}
                className="relative text-xs font-bold tracking-widest text-slate-600 hover:text-slate-900 transition-colors uppercase py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#F6273F] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:block">
            <Button asChild className="relative overflow-hidden bg-[#F6273F] text-white font-bold tracking-wider px-6 rounded-md group hover:bg-[#D61F33] transition-colors duration-300">
              <Link href="/contact">
                <span className="relative z-10">CONTACT</span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-900">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#EF233C] border-none text-white [&>button]:text-white data-[state=open]:bg-[#EF233C] p-10">
                <SheetHeader className="text-left mb-6 p-0">
                  <SheetTitle className="text-2xl font-bold text-white tracking-wide">Life Everywhere</SheetTitle>
                  <SheetDescription className="text-white/80 text-xs">
                    Accompaniment in Evangelism
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                  {menus.map((item, id) => (
                    <SheetClose key={id} asChild>
                      <Link
                        href={item.link}
                        className="text-[14px] font-medium text-white/90 hover:text-white transition-colors uppercase tracking-wide"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                  <div className="mt-8">
                    <SheetClose asChild>
                      <Button asChild className="w-full bg-white text-[#EF233C] hover:bg-white/90 font-bold tracking-wider h-[50px] text-base shadow-sm rounded-[8px]">
                        <Link href="/contact">CONTACT US</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
