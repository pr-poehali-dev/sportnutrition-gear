import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Delivery() {
  const deliveryOptions = [
    {
      icon: 'Package',
      title: 'Курьерская доставка',
      description: 'По Москве и МО — от 300₽',
      time: '1-2 дня'
    },
    {
      icon: 'Building',
      title: 'Постаматы и ПВЗ',
      description: 'Удобный самовывоз',
      time: '2-3 дня'
    },
    {
      icon: 'Plane',
      title: 'Доставка по России',
      description: 'СДЭК, Почта России',
      time: '3-7 дней'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Dumbbell" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold">FitStore</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="hover:text-primary transition">Главная</Link>
              <Link to="/catalog" className="hover:text-primary transition">Каталог</Link>
              <Link to="/delivery" className="text-primary font-semibold">Доставка</Link>
              <Link to="/about" className="hover:text-primary transition">О нас</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Link to="/cart">
                <Button variant="ghost" size="icon">
                  <Icon name="ShoppingCart" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Доставка и оплата</h1>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Быстрая и надежная доставка спортивного питания по всей России
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {deliveryOptions.map((option, index) => (
            <div key={index} className="bg-card border rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name={option.icon as any} className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
              <p className="text-muted-foreground mb-2">{option.description}</p>
              <div className="inline-flex items-center gap-2 text-primary font-semibold">
                <Icon name="Clock" size={16} />
                <span>{option.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8">Условия доставки</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Бесплатная доставка</h3>
                  <p className="text-muted-foreground">При заказе от 3000₽ доставка по Москве бесплатно</p>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Быстрая обработка</h3>
                  <p className="text-muted-foreground">Заказы оформленные до 15:00 отправляются в тот же день</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Отслеживание</h3>
                  <p className="text-muted-foreground">Вы получите трек-номер для отслеживания посылки</p>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Проверка при получении</h3>
                  <p className="text-muted-foreground">Возможность проверить товар перед оплатой</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">Способы оплаты</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="CreditCard" className="text-accent" size={24} />
              </div>
              <div>
                <p className="font-semibold">Банковские карты</p>
                <p className="text-sm text-muted-foreground">Visa, MasterCard, Мир</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="Wallet" className="text-accent" size={24} />
              </div>
              <div>
                <p className="font-semibold">Электронные кошельки</p>
                <p className="text-sm text-muted-foreground">ЮMoney, QIWI, WebMoney</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="Banknote" className="text-accent" size={24} />
              </div>
              <div>
                <p className="font-semibold">Наличные</p>
                <p className="text-sm text-muted-foreground">При получении курьеру</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Есть вопросы по доставке?</p>
          <Button size="lg">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Написать в поддержку
          </Button>
        </div>
      </div>

      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Dumbbell" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">FitStore</span>
              </div>
              <p className="text-muted-foreground">Спортивное питание и экипировка для достижения ваших целей</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Протеины</li>
                <li>Аминокислоты</li>
                <li>Витамины</li>
                <li>Экипировка</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>О магазине</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Гарантии</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>+7 (999) 123-45-67</p>
                <p>info@fitstore.ru</p>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 FitStore. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
