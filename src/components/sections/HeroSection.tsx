import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#2563EB] to-[#1E293B] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 font-['Inter']">
              Наука будущего
            </h2>
            <p className="text-xl mb-8 opacity-90 font-['Source_Sans_Pro']">
              Мы объединяем ведущих исследователей для решения самых сложных
              задач современности
            </p>
            <div className="flex space-x-4">
              <Button
                size="lg"
                className="bg-white text-[#2563EB] hover:bg-gray-100"
              >
                Наши исследования
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#2563EB]"
              >
                Присоединиться
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/img/1a1059d5-6f3e-4251-a310-fe0d8bf0b82b.jpg"
              alt="Научная лаборатория"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
