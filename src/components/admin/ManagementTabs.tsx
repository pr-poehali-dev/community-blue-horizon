import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { publications, events, team, projects } from "@/data/mockData";

export const ManagementTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("publications");

  const renderManagementSection = (
    title: string,
    items: any[],
    addLabel: string,
  ) => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">{title}</h4>
        <Button size="sm" className="bg-[#2563EB]">
          <Icon name="Plus" className="mr-2" size={16} />
          {addLabel}
        </Button>
      </div>
      <div className="space-y-2 max-h-60 overflow-y-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded"
          >
            <div className="flex-1">
              <p className="font-medium text-sm">{item.title || item.name}</p>
              <p className="text-xs text-gray-600">
                {item.authors || item.position || item.date || item.leader}
                {item.location && ` • ${item.location}`}
                {item.duration && ` • ${item.duration}`}
              </p>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">
                <Icon name="Edit" size={14} />
              </Button>
              <Button size="sm" variant="outline">
                <Icon name="Trash2" size={14} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="publications">Публикации</TabsTrigger>
        <TabsTrigger value="events">События</TabsTrigger>
        <TabsTrigger value="team">Команда</TabsTrigger>
        <TabsTrigger value="projects">Проекты</TabsTrigger>
      </TabsList>

      <TabsContent value="publications">
        {renderManagementSection(
          "Управление публикациями",
          publications,
          "Добавить",
        )}
      </TabsContent>

      <TabsContent value="events">
        {renderManagementSection("Управление событиями", events, "Добавить")}
      </TabsContent>

      <TabsContent value="team">
        {renderManagementSection("Управление командой", team, "Добавить")}
      </TabsContent>

      <TabsContent value="projects">
        {renderManagementSection("Управление проектами", projects, "Добавить")}
      </TabsContent>
    </Tabs>
  );
};
