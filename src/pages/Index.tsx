import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Index() {
  const features = [
    {
      icon: 'Zap',
      title: 'Быстрая доставка',
      description: 'Доставим за 1-2 дня по всей России'
    },
    {
      icon: 'ShieldCheck',
      title: 'Гарантия качества',
      description: 'Только оригинальная продукция'
    },
    {
      icon: 'BadgePercent',
      title: 'Скидки',
      description: 'Регулярные акции и спецпредложения'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Всегда на связи для консультаций'
    }
  ];

  const categories = [
    {
      title: 'Протеины',
      image: 'https://cdn.poehali.dev/projects/daeb78f0-933f-4657-9f17-a7e49e2a2cdb/files/0f18321f-e119-437c-b3fc-1cf45a529ac5.jpg',
      count: '50+ товаров'
    },
    {
      title: 'Экипировка',
      image: 'https://cdn.poehali.dev/projects/daeb78f0-933f-4657-9f17-a7e49e2a2cdb/files/5a9b31e4-5cc3-4349-9ef4-fc555632ae21.jpg',
      count: '100+ товаров'
    },
    {
      title: 'Витамины',
      image: 'https://cdn.poehali.dev/projects/daeb78f0-933f-4657-9f17-a7e49e2a2cdb/files/6a2caa21-a80e-4a43-922b-62a278442c86.jpg',
      count: '30+ товаров'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Dumbbell" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold">FitStore</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-primary font-semibold">Главная</Link>
              <Link to="/catalog" className="hover:text-primary transition">Каталог</Link>
              <Link to="/delivery" className="hover:text-primary transition">Доставка</Link>
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

      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Твой путь к <span className="text-primary">идеальной</span> форме
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Спортивное питание, экипировка и всё необходимое для тренировок
            </p>
            <div className="flex gap-4">
              <Link to="/catalog">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Каталог товаров
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block">
          <img 
            src="https://cdn.poehali.dev/projects/daeb78f0-933f-4657-9f17-a7e49e2a2cdb/files/0f18321f-e119-437c-b3fc-1cf45a529ac5.jpg" 
            alt="Hero"
            className="h-full w-full object-cover opacity-50"
          />
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные категории</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to="/catalog" className="group">
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-white/80">{category.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готов начать тренировки?</h2>
          <p className="text-xl mb-8 opacity-90">Получи скидку 15% на первый заказ</p>
          <Link to="/catalog">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Перейти в каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-muted">
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
