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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <section className="relative overflow-hidden py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  ГВОЗДИ В КАЙФ!
                </h1>
                <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
                  Обучение проводников за 4 недели
                </p>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Живой курс с Ольгой и Романом. 600+ выпускников. Удостоверение гособразца.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Icon name="Calendar" className="mr-2" size={16} />
                  4 недели
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Icon name="Award" className="mr-2" size={16} />
                  Удостоверение
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Icon name="Users" className="mr-2" size={16} />
                  Freed Family
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Icon name="Video" className="mr-2" size={16} />
                  Живой формат
                </Badge>
              </div>

              <p className="text-sm md:text-base text-muted-foreground font-medium">
                🚀 Старт потока — 28 октября. Онлайн в Telegram. Эфиры + записи.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={scrollToTariffs} className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                  Программа и цены
                </Button>
                <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                      Записаться
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
              <div className="aspect-video bg-secondary/50 rounded-3xl flex items-center justify-center border-4 border-primary/20 shadow-2xl overflow-hidden">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="Play" size={40} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">Видео-визитка курса</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Для кого этот курс
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Heart',
                title: 'Мамам / ресурс',
                description: '5–10 минут практики — быстрая перезагрузка и спокойствие.'
              },
              {
                icon: 'Briefcase',
                title: 'Ищу профессию',
                description: 'Пошаговая подготовка проводника + выход на первых клиентов.'
              },
              {
                icon: 'Brain',
                title: 'Психологи/коучи',
                description: 'Сильный телесный инструмент + чёткие протоколы безопасности.'
              },
              {
                icon: 'Flame',
                title: 'Мужчины / сила',
                description: 'Тренировка воли, фокуса и стресс-устойчивости.'
              },
              {
                icon: 'Sparkles',
                title: '40+ / новый старт',
                description: 'Экологичная практика, которую можно передавать дальше.'
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon name={item.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Что внутри за 4 недели
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Живые эфиры + записи, поддержка в Telegram, проверка ДЗ на тарифах с наставничеством
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20 -translate-y-1/2 z-0" />

            {[
              {
                week: '1',
                title: 'Подготовка',
                description: 'Теория + мягкая практика',
                icon: 'BookOpen'
              },
              {
                week: '2',
                title: 'Освобождение',
                description: 'Ежедневные телесные практики',
                icon: 'Wind'
              },
              {
                week: '3',
                title: 'Наполнение',
                description: 'Ежедневные телесные практики',
                icon: 'Sparkles'
              },
              {
                week: '4',
                title: 'Проводник',
                description: 'Клиенты, группы, бренд, SMM, AI',
                icon: 'Rocket'
              }
            ].map((item, index) => (
              <Card key={index} className="relative z-10 hover:shadow-xl transition-all border-2 bg-white">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
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

      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Подробное расписание курса
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            4 недели трансформации: Подготовка → Освобождение и Наполнение → Проводник
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="week1" className="border-2 rounded-2xl px-6 bg-white shadow-md">
              <AccordionTrigger className="text-xl font-bold hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <span>Неделя 1 — ПОДГОТОВКА</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-4 text-base">
                <p className="font-semibold text-primary">Формат: теоретические эфиры до 2 часов (вечерние)</p>
                <p className="leading-relaxed">
                  Вводная неделя с основами безопасного и глубокого погружения в практику.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">Темы недели:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Воздействие практики на тело, душу и разум</li>
                    <li>• Научные факты о влиянии на нервную систему</li>
                    <li>• Основы дыхательных практик</li>
                    <li>• Разбор первых подходов к гвоздестоянию</li>
                    <li>• Медитация звучания и секреты счастья</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  📚 Инструменты: рабочая тетрадь, чек-листы, видеоуроки, дневник саморефлексии
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="week2-3" className="border-2 rounded-2xl px-6 bg-white shadow-md">
              <AccordionTrigger className="text-xl font-bold hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white font-bold">
                    2-3
                  </div>
                  <span>Недели 2–3 — ОСВОБОЖДЕНИЕ И НАПОЛНЕНИЕ</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-4 text-base">
                <p className="font-semibold text-primary">Формат: ежедневные утренние практики до 60 минут</p>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-destructive">Практики на освобождение:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Обида</li>
                      <li>• Вина</li>
                      <li>• Стыд</li>
                      <li>• Зависть</li>
                      <li>• Гордыня</li>
                      <li>• Ревность</li>
                      <li>• Страх</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary">Практики на наполнение:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Благодарность</li>
                      <li>• Смелость</li>
                      <li>• Радость</li>
                      <li>• Доверие</li>
                      <li>• Любовь</li>
                      <li>• Экстаз</li>
                    </ul>
                  </div>
                </div>
                <p className="leading-relaxed mt-4">
                  Полный цикл очищения и восстановления через дыхание, внимание и тело.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="week4" className="border-2 rounded-2xl px-6 bg-white shadow-md">
              <AccordionTrigger className="text-xl font-bold hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <span>Неделя 4 — ПРОВОДНИК</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-4 text-base">
                <p className="font-semibold text-primary">Формат: теоретико-практические эфиры</p>
                <p className="leading-relaxed">
                  Переход от личной трансформации к передаче практики другим людям.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">Содержание этапа:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Как найти первых клиентов</li>
                    <li>• Ведение индивидуальных и групповых сессий</li>
                    <li>• Продвижение и SMM — личный бренд</li>
                    <li>• Работа с денежным мышлением</li>
                    <li>• Искусственный интеллект для контента</li>
                    <li>• Ораторское искусство</li>
                    <li>• Аттестация и сертификация</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-4 rounded-xl mt-4">
                  <p className="font-semibold">🎓 Результат:</p>
                  <p className="text-sm mt-2">
                    Готовность проводить практики, создавать группы, продвигать себя и зарабатывать
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Тарифы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Базовый',
                price: '15 000 ₽',
                features: [
                  'Доступ ко всем эфирам',
                  'Записи всех уроков',
                  'Рабочие материалы',
                  'Чат поддержки'
                ]
              },
              {
                name: 'Стандарт',
                price: '25 000 ₽',
                popular: true,
                features: [
                  'Всё из Базового',
                  'Проверка домашних заданий',
                  'Личная консультация',
                  'Сертификат участника'
                ]
              },
              {
                name: 'VIP',
                price: '45 000 ₽',
                features: [
                  'Всё из Стандарта',
                  'Индивидуальное сопровождение',
                  'Удостоверение гособразца',
                  'Пожизненный доступ'
                ]
              }
            ].map((tariff, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-2xl transition-all border-2 ${
                  tariff.popular ? 'border-primary shadow-xl scale-105' : ''
                }`}
              >
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">{tariff.name}</h3>
                    <div className="text-4xl font-bold text-primary">{tariff.price}</div>
                  </div>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    size="lg"
                    variant={tariff.popular ? 'default' : 'outline'}
                    onClick={() => setIsFormOpen(true)}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 md:px-8 lg:px-16 bg-foreground/5">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="text-2xl font-bold">Freed Family</p>
          <p className="text-muted-foreground">
            Курс «Гвозди в кайф!» — обучение проводников гвоздестояния
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <Button variant="ghost" size="icon">
              <Icon name="Send" size={24} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Instagram" size={24} fallback="Heart" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
