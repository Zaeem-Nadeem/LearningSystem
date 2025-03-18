import HeroSection from '../components/HeroSection';
import FeaturedCourses from '../components/FeaturedCourses';
export default function Home() {
  return (
   <main className=" min-h-52 max-h-screen  antialiased bg-grid-white/[0.2]">
     {/* <h1 className=" flex justify-center text-2xl text-center ">hello word</h1> */}
     <HeroSection/>
     <FeaturedCourses/>
   </main>
  );
}
