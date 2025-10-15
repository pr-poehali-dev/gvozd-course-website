import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const scrollToTariffs = () => {
    document.getElementById('tariffs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/40 to-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">Freed Family</span>
            </div>
            <Button onClick={scrollToTariffs} variant="default" size="sm" className="shadow-md">
              Тарифы
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold">
                <Icon name="Zap" className="mr-2" size={14} />
                Старт 28 октября
              </Badge>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    ГВОЗДИ
                  </span>
                  <br />
                  <span className="text-foreground">В КАЙФ!</span>
                </h1>
                <p className="text-2xl md:text-3xl font-bold text-foreground/90">
                  Стань проводником за 4 недели
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Живой курс с Ольгой и Романом. Более 600 выпускников уже обучают других. 
                  Получи удостоверение гособразца и начни зарабатывать на практиках.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Badge variant="outline" className="px-4 py-2 text-sm border-2">
                  <Icon name="Calendar" className="mr-2" size={16} />
                  4 недели
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm border-2">
                  <Icon name="Award" className="mr-2" size={16} />
                  Удостоверение
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm border-2">
                  <Icon name="Users" className="mr-2" size={16} />
                  600+ выпускников
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm border-2">
                  <Icon name="Video" className="mr-2" size={16} />
                  Онлайн в Telegram
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" onClick={scrollToTariffs} className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Смотреть программу
                </Button>
                <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-primary/10">
                      Записаться сейчас
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Записаться на курс</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Имя</Label>
                        <Input id="name" placeholder="Ваше имя" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="example@mail.com" />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6 p-8">
                    <div className="w-24 h-24 mx-auto bg-white/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm">
                      <Icon name="Play" size={48} className="text-primary ml-1" />
                    </div>
                    <p className="text-lg font-semibold text-foreground">Видео о курсе</p>
                    <p className="text-sm text-muted-foreground">Узнайте больше о практике</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="px-4 py-2">Целевая аудитория</Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Для кого этот курс
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Практика подходит людям с разными целями и в любом возрасте
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Heart',
                title: 'Мамам / ресурс',
                description: '5–10 минут практики в день — быстрая перезагрузка, спокойствие и энергия для семьи.',
                gradient: 'from-rose-400/20 to-pink-400/20'
              },
              {
                icon: 'Briefcase',
                title: 'Ищу профессию',
                description: 'Пошаговая подготовка проводника + выход на первых клиентов за 4 недели.',
                gradient: 'from-blue-400/20 to-cyan-400/20'
              },
              {
                icon: 'Brain',
                title: 'Психологи/коучи',
                description: 'Сильный телесный инструмент + чёткие протоколы безопасности для работы с клиентами.',
                gradient: 'from-purple-400/20 to-violet-400/20'
              },
              {
                icon: 'Flame',
                title: 'Мужчины / сила',
                description: 'Тренировка воли, фокуса и стресс-устойчивости через телесные практики.',
                gradient: 'from-orange-400/20 to-red-400/20'
              },
              {
                icon: 'Sparkles',
                title: '40+ / новый старт',
                description: 'Экологичная практика для здоровья, которую можно передавать другим.',
                gradient: 'from-amber-400/20 to-yellow-400/20'
              },
              {
                icon: 'TrendingUp',
                title: 'Развитие бизнеса',
                description: 'Дополнительный источник дохода или новое направление для вашего проекта.',
                gradient: 'from-emerald-400/20 to-green-400/20'
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="p-6 space-y-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon name={item.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="px-4 py-2">Программа курса</Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Что внутри за 4 недели
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Живые эфиры + записи, поддержка в Telegram, проверка ДЗ на тарифах с наставничеством
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                week: '1',
                title: 'Подготовка',
                description: 'Теория безопасной практики + мягкое погружение',
                icon: 'BookOpen',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                week: '2',
                title: 'Освобождение',
                description: 'Освобождение от обиды, вины, стыда, страха',
                icon: 'Wind',
                color: 'from-purple-500 to-pink-500'
              },
              {
                week: '3',
                title: 'Наполнение',
                description: 'Благодарность, любовь, радость, экстаз',
                icon: 'Sparkles',
                color: 'from-amber-500 to-orange-500'
              },
              {
                week: '4',
                title: 'Проводник',
                description: 'Клиенты, группы, бренд, SMM, AI',
                icon: 'Rocket',
                color: 'from-emerald-500 to-teal-500'
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 bg-white overflow-hidden relative">
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${item.color}`} />
                <CardContent className="p-6 space-y-4 text-center">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white font-extrabold text-2xl shadow-lg`}>
                    {item.week}
                  </div>
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={item.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2">Подробности</Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Детальное расписание
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4 недели трансформации: от подготовки до старта карьеры проводника
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="week1" className="border-2 rounded-2xl px-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <AccordionTrigger className="text-xl font-bold hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                    1
                  </div>
                  <span className="text-left">Неделя 1 — ПОДГОТОВКА</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-4 text-base">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="font-semibold text-blue-700">📅 Формат: теоретические эфиры до 2 часов (вечерние)</p>
                </div>
                <p className="leading-relaxed">
                  Вводная неделя с основами безопасного и глубокого погружения в практику.
                </p>
                <div className="space-y-3">
                  <p className="font-semibold text-lg">Темы недели:</p>
                  <div className="grid gap-2">
                    {[
                      'Воздействие практики на тело, душу и разум',
                      'Научные факты о влиянии на нервную систему',
                      'Основы дыхательных практик',
                      'Разбор первых подходов к гвоздестоянию',
                      'Медитация звучания и секреты счастья'
                    ].map((topic, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                        <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                  <p className="text-sm font-medium text-amber-900">
                    📚 Инструменты: рабочая тетрадь, чек-листы, видеоуроки, дневник саморефлексии
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="week2-3" className="border-2 rounded-2xl px-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <AccordionTrigger className="text-xl font-bold hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                    2-3
                  </div>
                  <span className="text-left">Недели 2–3 — ОСВОБОЖДЕНИЕ И НАПОЛНЕНИЕ</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-4 text-base">
                <div className="bg-purple-50 p-4 rounded-xl">
                  <p className="font-semibold text-purple-700">⏰ Формат: ежедневные утренние практики до 60 минут</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="space-y-3 p-4 bg-red-50 rounded-xl border-2 border-red-200">
                    <p className="font-bold text-lg text-red-700 flex items-center gap-2">
                      <Icon name="Trash2" size={20} />
                      Практики на освобождение
                    </p>
                    <div className="space-y-2">
                      {['Обида', 'Вина', 'Стыд', 'Зависть', 'Гордыня', 'Ревность', 'Страх'].map((emotion, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 bg-white rounded-lg">
                          <Icon name="X" size={16} className="text-red-600" />
                          <span className="font-medium">{emotion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3 p-4 bg-emerald-50 rounded-xl border-2 border-emerald-200">
                    <p className="font-bold text-lg text-emerald-700 flex items-center gap-2">
                      <Icon name="Plus" size={20} />
                      Практики на наполнение
                    </p>
                    <div className="space-y-2">
                      {['Благодарность', 'Смелость', 'Радость', 'Доверие', 'Любовь', 'Экстаз'].map((emotion, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 bg-white rounded-lg">
                          <Icon name="Plus" size={16} className="text-emerald-600" />
                          <span className="font-medium">{emotion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="leading-relaxed text-center font-medium p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  Полный цикл очищения и восстановления через дыхание, внимание и тело
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="week4" className="border-2 rounded-2xl px-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <AccordionTrigger className="text-xl font-bold hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                    4
                  </div>
                  <span className="text-left">Неделя 4 — ПРОВОДНИК</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-4 text-base">
                <div className="bg-emerald-50 p-4 rounded-xl">
                  <p className="font-semibold text-emerald-700">🎯 Формат: теоретико-практические эфиры</p>
                </div>
                <p className="leading-relaxed font-medium">
                  Переход от личной трансформации к передаче практики другим людям.
                </p>
                <div className="space-y-3">
                  <p className="font-semibold text-lg">Содержание этапа:</p>
                  <div className="grid gap-2">
                    {[
                      'Как найти первых клиентов',
                      'Ведение индивидуальных и групповых сессий',
                      'Продвижение и SMM — личный бренд',
                      'Работа с денежным мышлением',
                      'Искусственный интеллект для контента',
                      'Ораторское искусство',
                      'Аттестация и сертификация'
                    ].map((topic, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                        <Icon name="CheckCircle" size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border-2 border-emerald-200">
                  <p className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Trophy" size={24} className="text-emerald-600" />
                    Результат:
                  </p>
                  <p className="text-base">
                    Готовность проводить практики, создавать группы, продвигать себя и зарабатывать
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-secondary/40 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="px-4 py-2">Выберите тариф</Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Тарифы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий уровень сопровождения и начните трансформацию
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Базовый',
                price: '15 000',
                description: 'Для самостоятельного изучения',
                features: [
                  'Доступ ко всем эфирам',
                  'Записи всех уроков',
                  'Рабочие материалы',
                  'Чат поддержки'
                ],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                name: 'Стандарт',
                price: '25 000',
                popular: true,
                description: 'Для глубокого погружения',
                features: [
                  'Всё из тарифа Базовый',
                  'Проверка домашних заданий',
                  'Личная консультация 1:1',
                  'Сертификат участника',
                  'Доступ к закрытому чату выпускников'
                ],
                color: 'from-primary to-accent'
              },
              {
                name: 'VIP',
                price: '45 000',
                description: 'Максимум результата',
                features: [
                  'Всё из тарифа Стандарт',
                  'Индивидуальное сопровождение',
                  'Удостоверение гособразца',
                  'Пожизненный доступ к материалам',
                  '3 личных консультации',
                  'Помощь в запуске практики'
                ],
                color: 'from-purple-500 to-pink-500'
              }
            ].map((tariff, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-2xl transition-all duration-500 border-2 overflow-hidden group ${
                  tariff.popular ? 'scale-105 border-primary shadow-xl' : 'hover:scale-105'
                }`}
              >
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 text-sm font-bold shadow-lg">
                      🔥 Популярный
                    </Badge>
                  </div>
                )}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${tariff.color}`} />
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-3 pt-2">
                    <h3 className="text-2xl font-bold">{tariff.name}</h3>
                    <p className="text-sm text-muted-foreground">{tariff.description}</p>
                    <div className="py-4">
                      <div className="text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {tariff.price} ₽
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 p-2">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${tariff.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Icon name="Check" size={14} className="text-white" />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-4 ${tariff.popular ? 'bg-gradient-to-r from-primary to-accent hover:shadow-xl' : ''}`}
                    size="lg"
                    variant={tariff.popular ? 'default' : 'outline'}
                    onClick={() => setIsFormOpen(true)}
                  >
                    {tariff.popular ? 'Выбрать Стандарт' : `Выбрать ${tariff.name}`}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-xl">
                <Icon name="Sparkles" size={40} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Готовы начать трансформацию?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Присоединяйтесь к сообществу Freed Family. Старт потока — 28 октября.
              </p>
              <Button 
                size="lg" 
                onClick={() => setIsFormOpen(true)}
                className="text-lg px-10 py-7 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                <Icon name="Rocket" className="mr-2" size={20} />
                Записаться на курс
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 md:px-8 lg:px-16 bg-foreground/5 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">Freed Family</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Курс «Гвозди в кайф!» — обучение проводников гвоздестояния
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Онлайн в Telegram</p>
                <p>Старт: 28 октября</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Следите за нами</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                  <Icon name="Instagram" size={20} fallback="Heart" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 Freed Family. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
