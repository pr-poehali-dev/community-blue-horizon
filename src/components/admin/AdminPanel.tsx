import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { LoginForm } from "./LoginForm";
import { ManagementTabs } from "./ManagementTabs";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === "admin" && loginForm.password === "admin") {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginForm({ username: "", password: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#1E293B]">
            Панель администратора
          </DialogTitle>
        </DialogHeader>

        {!isLoggedIn ? (
          <LoginForm
            loginForm={loginForm}
            setLoginForm={setLoginForm}
            onLogin={handleLogin}
          />
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                Добро пожаловать, Администратор!
              </h3>
              <Button variant="outline" onClick={handleLogout}>
                <Icon name="LogOut" className="mr-2" size={16} />
                Выйти
              </Button>
            </div>

            <ManagementTabs />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
