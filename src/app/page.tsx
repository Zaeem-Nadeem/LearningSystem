import HeroSection from '../components/HeroSection';
import FeaturedCourses from '../components/FeaturedCourses';
import WhyChooseUs from '../components/WhyChooseUs';
import MusicSchoolTestimonials from '@/components/TestimonialCards';
export default function Home() {
  return (
   <main className=" min-h-52 max-h-screen  antialiased bg-grid-white/[0.2]">
     {/* <h1 className=" flex justify-center text-2xl text-center ">hello word</h1> */}
     <HeroSection/>
     <FeaturedCourses/>
     <WhyChooseUs/>
     <MusicSchoolTestimonials/>
   </main>
  );
}
