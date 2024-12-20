import { SignedOut } from "@clerk/clerk-react";
import HeroSection from '../components/HeroSection';
import FeaturedCategories from '../components/FeaturedCategories';
import AuthButtons from '../components/AuthButtons';

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <SignedOut>
        <AuthButtons />
      </SignedOut>
      <FeaturedCategories />
    </div>
  );
}