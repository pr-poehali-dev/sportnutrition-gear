import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const categories = [
  'Все товары',
  'Протеины',
  'Аминокислоты',
  'Витамины',
  'Экипировка',
  'Перчатки',
  'Одежда'
];

const products = [
  {
    id: 1,
    name: 'Whey Protein Pro',
    category: 'Протеины',
    price: 2990,
    oldPrice: 3500,
    image: 'https://cdn.poehali.dev/projects/daeb78f0-933f-4657-9f17-a7e49e2a2cdb/files/0f18321f-e119-437c-b3fc-1cf45a529ac5.jpg',
    badge: 'Хит'
  },
  {
    id: 2,
    name: 'BCAA Energy',
    category: 'Аминокислоты',
    price: 1490,
    image: 'https://cdn.poehali.dev/projects/daeb78f0-933f-4657-9f17-a7e49e2a2cdb/files/6a2caa21-a80e-4a43-922b-62a278442c86.jpg',
    badge: 'Новинка'
  },
  {
    id: 3,
    name: 'Перчатки Pro Grip',
    category: 'Перчатки',
    price: 890,
    image: 'https://cdn.poehali.dev/projects/daeb78f0-933f-4657-9f17-a7e49e2a2cdb/files/5a9b31e4-5cc3-4349-9ef4-fc555632ae21.jpg'
  },
  {
    id: 4,
    name: 'Креатин Моногидрат',
    category: 'Аминокислоты',
    price: 990,
    image: 'https://cdn.poehali.dev/projects/daeb78f0-933f-4657-9f17-a7e49e2a2cdb/files/6a2caa21-a80e-4a43-922b-62a278442c86.jpg'
  },
  {
    id: 5,
    name: 'Gainer Mass Pro',
    category: 'Протеины',
    price: 3290,
    oldPrice: 3990,
    image: 'https://cdn.poehali.dev/projects/daeb78f0-933f-4657-9f17-a7e49e2a2cdb/files/0f18321f-e119-437c-b3fc-1cf45a529ac5.jpg',
    badge: 'Скидка'
  },
  {
    id: 6,
    name: 'Мультивитамины',
    category: 'Витамины',
    price: 690,
    image: 'https://cdn.poehali.dev/projects/daeb78f0-933f-4657-9f17-a7e49e2a2cdb/files/6a2caa21-a80e-4a43-922b-62a278442c86.jpg'
  }
];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('Все товары');
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = selectedCategory === 'Все товары' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

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
              <Link to="/catalog" className="text-primary font-semibold">Каталог</Link>
              <Link to="/delivery" className="hover:text-primary transition">Доставка</Link>
              <Link to="/about" className="hover:text-primary transition">О нас</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <Icon name="ShoppingCart" size={20} />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Каталог товаров</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="group bg-card rounded-xl overflow-hidden border hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-accent">
                    {product.badge}
                  </Badge>
                )}
              </div>
              
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                  {product.oldPrice && (
                    <span className="text-lg text-muted-foreground line-through">{product.oldPrice} ₽</span>
                  )}
                </div>

                <Button 
                  className="w-full" 
                  onClick={() => addToCart(product.id)}
                >
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  В корзину
                </Button>
              </div>
            </div>
          ))}
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
