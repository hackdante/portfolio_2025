"use client";
import { BusinessGridCard } from "@/shared/components/composite";

export default function MainPortfolioSlot() {
  return (
    <section className="relative w-full  bg-[#050505]">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1">
          <BusinessGridCard />
        </div>
      </div>
    </section>
  );
}
