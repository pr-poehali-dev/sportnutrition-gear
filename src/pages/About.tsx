import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function About() {
  const stats = [
    { number: '10K+', label: 'Довольных клиентов' },
    { number: '500+', label: 'Товаров в каталоге' },
    { number: '5 лет', label: 'На рынке' },
    { number: '24/7', label: 'Поддержка' }
  ];

  const team = [
    {
      name: 'Алексей Иванов',
      role: 'Основатель',
      icon: 'User'
    },
    {
      name: 'Мария Петрова',
      role: 'Спортивный консультант',
      icon: 'User'
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'Менеджер по продажам',
      icon: 'User'
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
              <Link to="/delivery" className="hover:text-primary transition">Доставка</Link>
              <Link to="/about" className="text-primary font-semibold">О нас</Link>
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">О магазине FitStore</h1>
          <p className="text-xl text-muted-foreground">
            Мы помогаем достигать спортивных целей через качественное питание и экипировку
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold mb-6">Наша история</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              FitStore начался с простой идеи — сделать качественное спортивное питание доступным каждому. 
              В 2019 году мы открыли первый магазин с небольшим ассортиментом, но с большой любовью к спорту.
            </p>
            <p>
              Сегодня мы — команда профессионалов и спортсменов, которые лично тестируют каждый продукт 
              перед тем, как предложить его вам. Мы работаем напрямую с ведущими производителями, 
              что позволяет гарантировать качество и выгодные цены.
            </p>
            <p>
              Наша миссия — помочь каждому клиенту достичь своих спортивных целей, предоставляя 
              качественную продукцию, честную консультацию и отличный сервис.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-xl p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Target" className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Качество</h3>
              <p className="text-muted-foreground">
                Только оригинальная продукция от проверенных производителей. Каждый товар проходит контроль качества.
              </p>
            </div>
            <div className="bg-card border rounded-xl p-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Heart" className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Честность</h3>
              <p className="text-muted-foreground">
                Мы даём честные рекомендации, основанные на опыте и знаниях, а не на желании продать дороже.
              </p>
            </div>
            <div className="bg-card border rounded-xl p-6">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Users" className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Поддержка</h3>
              <p className="text-muted-foreground">
                Наша команда всегда на связи, чтобы помочь с выбором и ответить на любые вопросы.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={member.icon as any} className="text-white" size={48} />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам спортсменов, которые доверяют FitStore
          </p>
          <Link to="/catalog">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Перейти в каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </Link>
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
