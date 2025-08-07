import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isAnonymousFormOpen, setIsAnonymousFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    message: '',
    contact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки анонимного обращения
    alert('Ваше обращение отправлено анонимно и конфиденциально');
    setFormData({ message: '', contact: '' });
    setIsAnonymousFormOpen(false);
  };

  const meetings = [
    {
      day: 'Понедельник',
      time: '19:00',
      type: 'Открытое собрание',
      location: 'ул. Большая Садовая, 105/42, каб. 201'
    },
    {
      day: 'Среда', 
      time: '18:30',
      type: 'Закрытое собрание',
      location: 'пр. Буденновский, 15, 3 этаж'
    },
    {
      day: 'Пятница',
      time: '19:30', 
      type: 'Шаг за шагом',
      location: 'ул. Большая Садовая, 105/42, каб. 201'
    },
    {
      day: 'Воскресенье',
      time: '11:00',
      type: 'Открытое собрание',
      location: 'ул. Красноармейская, 170, 2 этаж'
    }
  ];

  const literature = [
    {
      title: 'Большая Книга',
      description: 'Основное руководство программы АА',
      link: '#'
    },
    {
      title: '12 Шагов и 12 Традиций',
      description: 'Подробное объяснение принципов программы',
      link: '#'
    },
    {
      title: 'Ежедневные размышления',
      description: 'Духовные размышления на каждый день',
      link: '#'
    },
    {
      title: 'Приходи и слушай',
      description: 'Истории выздоровления участников АА',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-cream font-open-sans">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 124, 89, 0.7), rgba(143, 188, 143, 0.5)), url('/img/aeaccf30-c32e-4e67-82c7-9c14de448d55.jpg')`
        }}
      >
        <div className="text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6">
            Группа АА Арка
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Поддержка и выздоровление в Ростове-на-Дону
          </p>
          <div className="space-x-4">
            <Button 
              size="lg"
              className="bg-forest hover:bg-forest-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              onClick={() => setIsAnonymousFormOpen(true)}
            >
              Получить помощь
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-forest px-8 py-3 rounded-full font-semibold transition-all duration-300"
              onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Расписание встреч
            </Button>
          </div>
        </div>
      </section>

      {/* О группе */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-forest mb-6">О группе Арка</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Группа "Арка" — это содружество людей, которые делятся друг с другом своим опытом, 
              силами и надеждами, чтобы решить свою общую проблему и помочь другим избавиться от алкоголизма.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-sage-light/30 border-sage hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader className="text-center">
                <Icon name="Users" size={48} className="mx-auto text-forest mb-4" />
                <CardTitle className="text-forest font-montserrat">Сообщество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Мы поддерживаем друг друга на пути выздоровления в атмосфере принятия и понимания.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-warge-light/30 border-warge hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader className="text-center">
                <Icon name="Shield" size={48} className="mx-auto text-forest mb-4" />
                <CardTitle className="text-forest font-montserrat">Анонимность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Полная конфиденциальность и защита личной информации каждого участника.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-forest-light/20 border-forest-light hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader className="text-center">
                <Icon name="Heart" size={48} className="mx-auto text-forest mb-4" />
                <CardTitle className="text-forest font-montserrat">Поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Круглосуточная взаимопомощь и духовная поддержка в трудные моменты.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Расписание */}
      <section id="schedule" className="py-20 px-4 bg-sage-light/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-forest mb-6">Расписание собраний</h2>
            <p className="text-lg text-gray-700">
              Встречи проходят регулярно в дружелюбной и поддерживающей атмосфере
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {meetings.map((meeting, index) => (
              <Card key={index} className="bg-white border-sage hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Icon name="Calendar" className="text-forest mr-3" size={24} />
                    <h3 className="text-xl font-montserrat font-semibold text-forest">
                      {meeting.day}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Icon name="Clock" className="text-gray-600 mr-2" size={16} />
                      <span className="text-gray-700">{meeting.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Tag" className="text-gray-600 mr-2" size={16} />
                      <span className="text-gray-700">{meeting.type}</span>
                    </div>
                    <div className="flex items-start">
                      <Icon name="MapPin" className="text-gray-600 mr-2 mt-1" size={16} />
                      <span className="text-gray-700">{meeting.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Полезная литература */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-forest mb-6">Полезная литература</h2>
            <p className="text-lg text-gray-700">
              Рекомендованные материалы для изучения программы и личностного роста
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {literature.map((book, index) => (
              <Card key={index} className="bg-cream-light/50 border-warge hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="flex items-center">
                    <Icon name="BookOpen" className="text-forest mr-3" size={24} />
                    <CardTitle className="text-forest font-montserrat">{book.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{book.description}</p>
                  <Button 
                    variant="outline" 
                    className="border-forest text-forest hover:bg-forest hover:text-white"
                  >
                    Читать онлайн
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-20 px-4 bg-forest text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold mb-6">Контакты и адрес</h2>
            <p className="text-lg opacity-90">
              Мы всегда рады новым людям. Приходите, когда будете готовы.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-montserrat font-semibold mb-6">Основная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="MapPin" className="mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Основной адрес:</p>
                    <p className="opacity-90">ул. Большая Садовая, 105/42, каб. 201</p>
                    <p className="opacity-90">Ростов-на-Дону</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Phone" className="mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Горячая линия:</p>
                    <p className="opacity-90">+7 (863) XXX-XX-XX</p>
                    <p className="text-sm opacity-75">Круглосуточно, анонимно</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Mail" className="mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Email для связи:</p>
                    <p className="opacity-90">info@aa-arka-rostov.ru</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-montserrat font-semibold mb-6">Как добраться</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="Bus" className="mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Общественный транспорт:</p>
                    <p className="opacity-90">Автобусы: 3, 7, 22, 41</p>
                    <p className="opacity-90">Остановка "Театральная площадь"</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Car" className="mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">На автомобиле:</p>
                    <p className="opacity-90">Парковка во дворе здания</p>
                    <p className="opacity-90">Вход с торца здания</p>
                  </div>
                </div>
                <div className="bg-forest-light/20 p-4 rounded-lg mt-6">
                  <p className="text-sm opacity-90">
                    💡 <strong>Подсказка:</strong> Если вы идете на встречу впервые, 
                    приходите на 10-15 минут раньше. Мы поможем вам сориентироваться.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-sage-light/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-forest mb-6">Часто задаваемые вопросы</h2>
            <p className="text-lg text-gray-700">
              Ответы на самые важные вопросы о программе АА
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border-sage rounded-lg px-6">
              <AccordionTrigger className="text-forest font-montserrat font-semibold">
                Что такое Анонимные Алкоголики?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Анонимные Алкоголики — это содружество мужчин и женщин, которые делятся друг с другом 
                своим опытом, силами и надеждами, чтобы решить свою общую проблему и помочь другим 
                избавиться от алкоголизма.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border-sage rounded-lg px-6">
              <AccordionTrigger className="text-forest font-montserrat font-semibold">
                Как проходят встречи?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Встречи проходят в формате групповых обсуждений, где участники делятся своим опытом 
                выздоровления. Мы читаем литературу АА, обсуждаем 12 шагов программы и поддерживаем 
                друг друга в трезвости.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border-sage rounded-lg px-6">
              <AccordionTrigger className="text-forest font-montserrat font-semibold">
                Нужно ли платить за участие?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Нет, участие в группе АА полностью бесплатно. Мы существуем за счет добровольных 
                пожертвований участников, но никто не обязан что-либо платить.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border-sage rounded-lg px-6">
              <AccordionTrigger className="text-forest font-montserrat font-semibold">
                Могу ли я прийти, если еще пью?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Да, конечно. Единственное требование для членства в АА — это желание перестать пить. 
                Неважно, сколько раз вы срывались или как долго пьете. Мы рады всем, кто готов попробовать.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Форма анонимных обращений */}
      {isAnonymousFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <Card className="w-full max-w-md bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Icon name="Shield" className="text-forest mr-2" size={24} />
                  <CardTitle className="text-forest font-montserrat">Анонимное обращение</CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsAnonymousFormOpen(false)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Ваше сообщение
                  </label>
                  <Textarea
                    placeholder="Расскажите о своей ситуации или задайте вопрос..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Контакт для ответа (необязательно)
                  </label>
                  <Input
                    placeholder="Телефон или email (по желанию)"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  />
                </div>
                <div className="bg-sage-light/20 p-3 rounded-lg">
                  <div className="flex items-start">
                    <Icon name="Info" className="text-forest mr-2 mt-0.5" size={16} />
                    <p className="text-sm text-gray-700">
                      Ваше обращение будет обработано анонимно. Мы не сохраняем личные данные и 
                      гарантируем полную конфиденциальность.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-3 pt-4">
                  <Button type="submit" className="flex-1 bg-forest hover:bg-forest-dark">
                    Отправить
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setIsAnonymousFormOpen(false)}
                  >
                    Отмена
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-forest-dark text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-montserrat font-bold mb-4">Группа АА "Арка"</h3>
          <p className="opacity-90 mb-6">
            Поддержка, выздоровление и надежда в Ростове-на-Дону
          </p>
          <div className="border-t border-forest pt-6 mt-6">
            <p className="text-sm opacity-75">
              © 2024 Группа АА "Арка" • Все материалы предоставляются в рамках программы взаимопомощи
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;