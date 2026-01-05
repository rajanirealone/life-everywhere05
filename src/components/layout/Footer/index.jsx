import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-[40px] bg-[#232536] text-white">
            {/* CTA Section */}


            {/* Main Footer Content */}
            <div className="container mx-auto pb-8">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
                    {/* Logo & Description */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="relative w-[180px] h-auto">
                                <Image
                                    src="/images/logo.svg"
                                    alt="Life Everywhere Logo"
                                    width={200}
                                    height={50}
                                    className="w-full h-auto object-contain brightness-0 invert"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Empowering churches and transforming communities through the
                            abundant Life we discover life in every corner of the world.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 lg:gap-32">
                        {/* Quick Links */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium text-white">Quick Links</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: "About Us", href: "/about" },
                                    { name: "Resources", href: "/resources" },
                                    { name: "Stories of Impact", href: "/stories" },
                                    { name: "Weekly Zoom", href: "/weekly-zoom" },
                                    { name: "Contact", href: "/contact" },
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-[#F6273F] text-sm transition-colors block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Connect */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium text-white">Connect</h3>
                            <div className="flex gap-4">
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 pt-8 border-t border-white/10 text-center lg:text-left flex flex-col lg:flex-row justify-center lg:justify-center items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Life Everywhere. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}