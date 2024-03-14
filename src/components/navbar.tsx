"use client";
import { ModeToggle } from "./toggle";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { UserNav } from "./user-nav";

export default function Navbar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    const [selectedLink, setSelectedLink] = useState<string | null>(null);

    const linkClass = (href: string) => cn("text-md font-medium transition-colors", href === selectedLink ? "" : "text-muted-foreground hover:text-primary");

    return (
        <div className="flex justify-between md:p-16 lg:p-20">
            <nav className={cn("flex w-full items-center justify-center space-x-4 lg:space-x-6", className)} {...props}>
                <Link href="/" legacyBehavior>
                    <a onClick={() => setSelectedLink("/")} className={linkClass("/")}>
                        Dashboard
                    </a>
                </Link>
                <Link href="/products" legacyBehavior>
                    <a onClick={() => setSelectedLink("/products")} className={linkClass("/products")}>
                        Products
                    </a>
                </Link>
                <Link href="/categories" legacyBehavior>
                    <a onClick={() => setSelectedLink("/categories")} className={linkClass("/categories")}>
                        Categories
                    </a>
                </Link>
                <Link href="/orders" legacyBehavior>
                    <a onClick={() => setSelectedLink("/orders")} className={linkClass("/orders")}>
                        Orders
                    </a>
                </Link>
            </nav>
            <div className="flex items-center gap-2">
                <ModeToggle />
                <UserNav />
            </div>
        </div>
    );
}
