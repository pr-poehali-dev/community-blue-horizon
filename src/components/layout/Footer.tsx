import React from "react";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E293B] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Microscope" size={24} />
              <h3 className="text-xl font-bold">Научное сообщество</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Институт передовых исследований, объединяющий ученых со всего мира
            </p>
            <div className="flex space-x-4">
              <Icon name="Mail" size={20} className="text-gray-400" />
              <Icon name="Phone" size={20} className="text-gray-400" />
              <Icon name="MapPin" size={20} className="text-gray-400" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Направления</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Квантовая физика</li>
              <li>Биомедицина</li>
              <li>Энергетика</li>
              <li>Искусственный интеллект</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ресурсы</h4>
            <ul className="space-y-2 text-gray-300">
              <li>База публикаций</li>
              <li>Календарь событий</li>
              <li>Гранты и конкурсы</li>
              <li>Образовательные программы</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-300">
              <p>Москва, Ленинский проспект, 14</p>
              <p>+7 (495) 123-45-67</p>
              <p>info@science-community.ru</p>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-gray-600" />
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Научное сообщество. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
