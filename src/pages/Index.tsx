import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("publications");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === "admin" && loginForm.password === "admin") {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginForm({ username: "", password: "" });
  };

  const publications = [
    {
      id: 1,
      title: "Квантовые вычисления: новые горизонты",
      authors: "Иванов А.В., Петров С.М.",
      journal: "Журнал квантовой физики",
      year: "2024",
      citations: 45,
      category: "Физика",
    },
    {
      id: 2,
      title: "Машинное обучение в медицинской диагностике",
      authors: "Сидорова О.Н., Козлов В.А.",
      journal: "Биомедицинские технологии",
      year: "2024",
      citations: 32,
      category: "Медицина",
    },
    {
      id: 3,
      title: "Устойчивая энергетика: солнечные панели нового поколения",
      authors: "Морозов Д.И., Волкова Е.С.",
      journal: "Возобновляемая энергетика",
      year: "2023",
      citations: 78,
      category: "Энергетика",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Международная конференция по ИИ",
      date: "2024-08-15",
      location: "Москва, МГУ",
      type: "Конференция",
      speakers: "Более 50 спикеров",
    },
    {
      id: 2,
      title: "Семинар по квантовой физике",
      date: "2024-07-20",
      location: "Онлайн",
      type: "Семинар",
      speakers: "Проф. Иванов А.В.",
    },
    {
      id: 3,
      title: "Воркшоп по биоинформатике",
      date: "2024-09-05",
      location: "СПб, Политех",
      type: "Воркшоп",
      speakers: "Команда разработчиков",
    },
  ];

  const team = [
    {
      id: 1,
      name: "Проф. Александр Иванов",
      position: "Директор института",
      specialization: "Квантовая физика",
      publications: 120,
      hIndex: 42,
    },
    {
      id: 2,
      name: "Д-р Ольга Сидорова",
      position: "Зав. лабораторией",
      specialization: "Биомедицинские технологии",
      publications: 85,
      hIndex: 38,
    },
    {
      id: 3,
      name: "Проф. Дмитрий Морозов",
      position: "Ведущий научный сотрудник",
      specialization: "Возобновляемая энергетика",
      publications: 95,
      hIndex: 35,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Квантовый компьютер нового поколения",
      description:
        "Разработка универсального квантового компьютера для решения сложных научных задач",
      funding: "15 млн руб.",
      duration: "2023-2026",
      leader: "Проф. А.В. Иванов",
      status: "Активный",
    },
    {
      id: 2,
      title: "ИИ-диагностика онкологических заболеваний",
      description:
        "Система автоматической диагностики раковых опухолей с использованием машинного обучения",
      funding: "8 млн руб.",
      duration: "2024-2025",
      leader: "Д-р О.Н. Сидорова",
      status: "Активный",
    },
    {
      id: 3,
      title: "Солнечные панели с КПД 45%",
      description:
        "Создание высокоэффективных солнечных панелей на основе перовскитных структур",
      funding: "12 млн руб.",
      duration: "2023-2025",
      leader: "Проф. Д.И. Морозов",
      status: "Завершается",
    },
  ];

  const news = [
    {
      id: 1,
      title: "Наша команда получила грант на исследование квантовых алгоритмов",
      date: "2024-07-01",
      summary:
        "Российский научный фонд одобрил заявку на финансирование проекта по квантовым вычислениям",
      category: "Гранты",
    },
    {
      id: 2,
      title: "Публикация в Nature: прорыв в области биомедицинских технологий",
      date: "2024-06-28",
      summary:
        "Наша статья о новом методе диагностики была опубликована в престижном журнале Nature",
      category: "Публикации",
    },
    {
      id: 3,
      title: "Открытие нового направления: квантовая биология",
      date: "2024-06-15",
      summary:
        "Институт объявляет о запуске нового исследовательского направления на стыке квантовой физики и биологии",
      category: "Новости",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
            <Dialog open={isAdminOpen} onOpenChange={setIsAdminOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
                >
                  <Icon name="User" className="mr-2" size={16} />
                  Admin
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-[#1E293B]">
                    Панель администратора
                  </DialogTitle>
                </DialogHeader>

                {!isLoggedIn ? (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="username">Имя пользователя</Label>
                      <Input
                        id="username"
                        type="text"
                        value={loginForm.username}
                        onChange={(e) =>
                          setLoginForm((prev) => ({
                            ...prev,
                            username: e.target.value,
                          }))
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
                          setLoginForm((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                        placeholder="admin"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#2563EB] hover:bg-[#1E293B]"
                    >
                      Войти
                    </Button>
                  </form>
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

                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="publications">
                          Публикации
                        </TabsTrigger>
                        <TabsTrigger value="events">События</TabsTrigger>
                        <TabsTrigger value="team">Команда</TabsTrigger>
                        <TabsTrigger value="projects">Проекты</TabsTrigger>
                      </TabsList>

                      <TabsContent value="publications" className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold">
                            Управление публикациями
                          </h4>
                          <Button size="sm" className="bg-[#2563EB]">
                            <Icon name="Plus" className="mr-2" size={16} />
                            Добавить
                          </Button>
                        </div>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                          {publications.map((pub) => (
                            <div
                              key={pub.id}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded"
                            >
                              <div className="flex-1">
                                <p className="font-medium text-sm">
                                  {pub.title}
                                </p>
                                <p className="text-xs text-gray-600">
                                  {pub.authors}
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
                      </TabsContent>

                      <TabsContent value="events" className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold">
                            Управление событиями
                          </h4>
                          <Button size="sm" className="bg-[#2563EB]">
                            <Icon name="Plus" className="mr-2" size={16} />
                            Добавить
                          </Button>
                        </div>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                          {events.map((event) => (
                            <div
                              key={event.id}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded"
                            >
                              <div className="flex-1">
                                <p className="font-medium text-sm">
                                  {event.title}
                                </p>
                                <p className="text-xs text-gray-600">
                                  {event.date} • {event.location}
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
                      </TabsContent>

                      <TabsContent value="team" className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold">Управление командой</h4>
                          <Button size="sm" className="bg-[#2563EB]">
                            <Icon name="Plus" className="mr-2" size={16} />
                            Добавить
                          </Button>
                        </div>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                          {team.map((member) => (
                            <div
                              key={member.id}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded"
                            >
                              <div className="flex-1">
                                <p className="font-medium text-sm">
                                  {member.name}
                                </p>
                                <p className="text-xs text-gray-600">
                                  {member.position}
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
                      </TabsContent>

                      <TabsContent value="projects" className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold">
                            Управление проектами
                          </h4>
                          <Button size="sm" className="bg-[#2563EB]">
                            <Icon name="Plus" className="mr-2" size={16} />
                            Добавить
                          </Button>
                        </div>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                          {projects.map((project) => (
                            <div
                              key={project.id}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded"
                            >
                              <div className="flex-1">
                                <p className="font-medium text-sm">
                                  {project.title}
                                </p>
                                <p className="text-xs text-gray-600">
                                  {project.leader} • {project.duration}
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
                      </TabsContent>
                    </Tabs>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#2563EB] mb-2">150+</div>
              <div className="text-gray-600">Исследователей</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2563EB] mb-2">500+</div>
              <div className="text-gray-600">Публикаций</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2563EB] mb-2">25</div>
              <div className="text-gray-600">Активных проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#2563EB] mb-2">12</div>
              <div className="text-gray-600">Направлений</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4 font-['Inter']">
              Наша команда
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-['Source_Sans_Pro']">
              Ведущие ученые и исследователи, работающие на переднем крае науки
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card
                key={member.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage
                      src={`/img/4ca698e6-4242-40aa-8409-73353d0c0df8.jpg`}
                    />
                    <AvatarFallback className="bg-[#2563EB] text-white text-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{member.position}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    {member.specialization}
                  </p>
                  <div className="flex justify-center space-x-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-[#2563EB]">
                        {member.publications}
                      </div>
                      <div className="text-gray-500">Публикаций</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-[#2563EB]">
                        {member.hIndex}
                      </div>
                      <div className="text-gray-500">H-индекс</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4 font-['Inter']">
              Исследовательские проекты
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-['Source_Sans_Pro']">
              Инновационные проекты, которые меняют наш мир
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={
                        project.status === "Активный" ? "default" : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {project.duration}
                    </span>
                  </div>
                  <CardTitle className="text-[#1E293B]">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">
                        Руководитель:
                      </span>
                      <span className="text-sm font-medium">
                        {project.leader}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">
                        Финансирование:
                      </span>
                      <span className="text-sm font-medium text-[#2563EB]">
                        {project.funding}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4 font-['Inter']">
              Публикации
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-['Source_Sans_Pro']">
              Последние научные работы и исследования
            </p>
          </div>
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="relative">
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <Input
                  placeholder="Поиск публикаций..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full md:w-96"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="physics">Физика</SelectItem>
                  <SelectItem value="medicine">Медицина</SelectItem>
                  <SelectItem value="energy">Энергетика</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-6">
            {publications.map((pub) => (
              <Card key={pub.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{pub.authors}</p>
                      <p className="text-sm text-gray-500 mb-4">
                        {pub.journal} • {pub.year}
                      </p>
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline">{pub.category}</Badge>
                        <div className="flex items-center space-x-1">
                          <Icon
                            name="Quote"
                            size={16}
                            className="text-gray-400"
                          />
                          <span className="text-sm text-gray-500">
                            {pub.citations} цитирований
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="ExternalLink" className="mr-2" size={16} />
                      Читать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4 font-['Inter']">
              Предстоящие события
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-['Source_Sans_Pro']">
              Конференции, семинары и другие научные мероприятия
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card
                key={event.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{event.type}</Badge>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E293B] mb-2">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {event.location}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {event.speakers}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-[#2563EB] hover:bg-[#1E293B]">
                    Зарегистрироваться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4 font-['Inter']">
              Новости
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-['Source_Sans_Pro']">
              Последние новости и достижения нашего института
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
              <Card
                key={article.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-sm text-gray-500">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E293B] mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.summary}</p>
                  <Button variant="outline" className="w-full">
                    Читать полностью
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E293B] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Microscope" size={24} />
                <h3 className="text-xl font-bold">Научное сообщество</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Институт передовых исследований, объединяющий ученых со всего
                мира
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
    </div>
  );
};

export default Index;
