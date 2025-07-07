import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { AdminPanel } from "@/components/admin/AdminPanel";

interface HeaderProps {
  onAdminOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAdminOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center">
              <Icon name="Microscope" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1E293B] font-['Inter']">
                Научное сообщество
              </h1>
              <p className="text-sm text-gray-600 font-['Source_Sans_Pro']">
                Институт передовых исследований
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-[#2563EB] transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#team"
              className="text-gray-700 hover:text-[#2563EB] transition-colors font-medium"
            >
              Команда
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-[#2563EB] transition-colors font-medium"
            >
              Проекты
            </a>
            <a
              href="#events"
              className="text-gray-700 hover:text-[#2563EB] transition-colors font-medium"
            >
              События
            </a>
            <a
              href="#news"
              className="text-gray-700 hover:text-[#2563EB] transition-colors font-medium"
            >
              Новости
            </a>
          </nav>
          <Button
            variant="outline"
            className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
            onClick={onAdminOpen}
          >
            <Icon name="User" className="mr-2" size={16} />
            Admin
          </Button>
        </div>
      </div>
    </header>
  );
};
