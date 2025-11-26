import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const products = [
    {
      id: 1,
      name: 'ВВГнг(А)',
      description: 'Силовой кабель с негорючей изоляцией',
      specs: '3x2.5 мм²',
      price: 'от 145 ₽/м',
      icon: 'Cable'
    },
    {
      id: 2,
      name: 'NYM',
      description: 'Монтажный кабель для внутренней проводки',
      specs: '3x1.5 мм²',
      price: 'от 89 ₽/м',
      icon: 'Zap'
    },
    {
      id: 3,
      name: 'КСПВ',
      description: 'Кабель связи парной скрутки',
      specs: '2x0.5 мм',
      price: 'от 18 ₽/м',
      icon: 'Network'
    },
    {
      id: 4,
      name: 'КГ',
      description: 'Кабель гибкий для мобильного оборудования',
      specs: '3x6 мм²',
      price: 'от 285 ₽/м',
      icon: 'Plug'
    },
    {
      id: 5,
      name: 'ПВС',
      description: 'Провод соединительный виниловый',
      specs: '3x1.5 мм²',
      price: 'от 42 ₽/м',
      icon: 'Power'
    },
    {
      id: 6,
      name: 'СИП-4',
      description: 'Самонесущий изолированный провод',
      specs: '4x16 мм²',
      price: 'от 178 ₽/м',
      icon: 'Activity'
    }
  ];

  const features = [
    {
      icon: 'CheckCircle2',
      title: 'Сертифицированная продукция',
      description: 'Все товары имеют сертификаты качества'
    },
    {
      icon: 'Truck',
      title: 'Доставка по России',
      description: 'Быстрая доставка в любой регион'
    },
    {
      icon: 'Calculator',
      title: 'Бесплатный расчет',
      description: 'Поможем рассчитать нужное количество'
    },
    {
      icon: 'Users',
      title: 'Оптовым покупателям',
      description: 'Специальные цены для оптовиков'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">БыстроКабель</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Кабельная продукция для профессионалов</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Широкий ассортимент сертифицированных кабелей и проводов. Доставка по всей России.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Каталог продукции
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Популярные товары</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Основные виды кабельной продукции в наличии на складе
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={product.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Сечение:</span> {product.specs}
                    </p>
                    <p className="text-2xl font-bold text-primary">{product.price}</p>
                  </div>
                  <Button className="w-full">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Быстрый расчет стоимости</h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Оставьте заявку, и наши специалисты свяжутся с вами в течение 15 минут
          </p>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@mail.ru"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите ваши потребности: тип кабеля, длина, объем..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" size={28} className="text-blue-400" />
                <h3 className="text-xl font-bold">БыстроКабель</h3>
              </div>
              <p className="text-slate-400">
                Надежный поставщик кабельной продукции для профессионалов с 2010 года
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@bistrokabel.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Кабельная, д. 10
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-slate-400">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 15:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 БыстроКабель. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
