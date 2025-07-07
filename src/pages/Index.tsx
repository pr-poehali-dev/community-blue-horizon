import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AdminPanel } from "@/components/admin/AdminPanel";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { NewsSection } from "@/components/sections/NewsSection";

const Index = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onAdminOpen={() => setIsAdminOpen(true)} />
      <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      <HeroSection />
      <StatsSection />
      <TeamSection />
      <ProjectsSection />
      <PublicationsSection />
      <EventsSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
