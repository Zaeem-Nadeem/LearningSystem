"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import TestimonialData from "../data/Testimonial_data.json";
import { cn } from "@/utils/cn";

const musicSchoolTestimonials: testimonialPropType[] = TestimonialData.Testimonial;

interface testimonialPropType {
  quote: string;
  name: string;
  title: string;
}

function MusicSchoolTestimonials() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-auto bg-white dark:bg-black py-12">
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
          Hear our Harmony: Voices of Success
        </h2>
        
        {/* Infinite Moving Cards */}
        <div className="w-full overflow-hidden">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"

          />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;
