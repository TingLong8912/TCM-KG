"use client";

import Profile from "@/components/profile";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import useWindow from "@/hooks/use-window";
import { useUser } from "@clerk/nextjs";
import { BookOpen, Leaf, Languages } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const { isDesktop } = useWindow();
  const path = usePathname();
  const { isSignedIn, user } = useUser();
  return (
    <header className="md:container md:max-w-6xl px-4">
      <nav className="md:py-8 py-4 flex w-full justify-between items-center z-50">
        <h2 className="text-2xl font-semibold tracking-wide flex gap-2.5 items-center">
          {isDesktop ? (
            <div className="flex-table">
              <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">{"<owl:Class>"}</div>
              <Link href={"/"}>AsianMedicines</Link>
            </div>
          ) : (
            <span>{"<AsianMedicines>"}</span>
          )}
        </h2>
        <div className="flex justify-center items-center gap-2">
          <Link
            href="/introduction"
            className={buttonVariants({
              size: "icon",
              variant: "outline"
            })}
          >
            <Leaf className="h-5 w-5" />
          </Link>
          {/* <Link
            href="/document"
            className={buttonVariants({
              size: "icon",
              variant: "outline"
            })}
          >
            <BookOpen className="h-5 w-5" />
          </Link> */}
          <Link
            href="#"
            className={buttonVariants({
              size: "icon",
              variant: "outline"
            })}
          >
            <Languages className="h-5 w-5" />
          </Link>
          <ThemeToggle />
      
          {isSignedIn ? (
            path === "/dashboard" ? (
              <Profile user={user} />
            ) : (
              <Button className="flex" variant="outline" asChild>
                <Link href="/dashboard">知識圖譜</Link>
              </Button>
            )
          ) : (
            <Button className="flex" asChild>
              <Link href="/signin">Sign in</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
