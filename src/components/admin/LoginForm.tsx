import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginFormProps {
  loginForm: { username: string; password: string };
  setLoginForm: React.Dispatch<
    React.SetStateAction<{ username: string; password: string }>
  >;
  onLogin: (e: React.FormEvent) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  loginForm,
  setLoginForm,
  onLogin,
}) => {
  return (
    <form onSubmit={onLogin} className="space-y-4">
      <div>
        <Label htmlFor="username">Имя пользователя</Label>
        <Input
          id="username"
          type="text"
          value={loginForm.username}
          onChange={(e) =>
            setLoginForm((prev) => ({ ...prev, username: e.target.value }))
          }
          placeholder="admin"
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Пароль</Label>
        <Input
          id="password"
          type="password"
          value={loginForm.password}
          onChange={(e) =>
            setLoginForm((prev) => ({ ...prev, password: e.target.value }))
          }
          placeholder="admin"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-[#2563EB] hover:bg-[#1E293B]">
        Войти
      </Button>
    </form>
  );
};
