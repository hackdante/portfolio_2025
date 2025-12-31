"use client";
import { HomePageClient } from "@/components/portfolio/composite";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full flex justify-center">
        <HomePageClient />
      </div>
    </main>
  );
}
