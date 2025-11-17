import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Whey Protein Pro',
      price: 2990,
      quantity: 1,
      image: 'https://cdn.poehali.dev/projects/daeb78f0-933f-4657-9f17-a7e49e2a2cdb/files/0f18321f-e119-437c-b3fc-1cf45a529ac5.jpg'
    },
    {
      id: 2,
      name: 'BCAA Energy',
      price: 1490,
      quantity: 2,
      image: 'https://cdn.poehali.dev/projects/daeb78f0-933f-4657-9f17-a7e49e2a2cdb/files/6a2caa21-a80e-4a43-922b-62a278442c86.jpg'
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal >= 3000 ? 0 : 300;
  const total = subtotal + delivery;

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
              <Link to="/about" className="hover:text-primary transition">О нас</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <Icon name="ShoppingCart" size={20} />
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Корзина</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="ShoppingCart" size={48} className="text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Корзина пуста</h2>
            <p className="text-muted-foreground mb-8">Добавьте товары из каталога</p>
            <Link to="/catalog">
              <Button size="lg">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Перейти в каталог
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="bg-card border rounded-xl p-4 flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                    <p className="text-xl font-bold text-primary mb-4">{item.price} ₽</p>
                    
                    <div className="flex items-center gap-3">
                      <Button 
                        size="icon" 
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Icon name="Minus" size={16} />
                      </Button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <Button 
                        size="icon" 
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-end">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeItem(item.id)}
                    >
                      <Icon name="Trash2" size={20} className="text-destructive" />
                    </Button>
                    <p className="text-xl font-bold">{item.price * item.quantity} ₽</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card border rounded-xl p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Итого</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Товары ({cartItems.length})</span>
                    <span className="font-semibold">{subtotal} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Доставка</span>
                    <span className="font-semibold">{delivery === 0 ? 'Бесплатно' : `${delivery} ₽`}</span>
                  </div>
                  {subtotal < 3000 && (
                    <p className="text-sm text-muted-foreground">
                      До бесплатной доставки: {3000 - subtotal} ₽
                    </p>
                  )}
                  <div className="border-t pt-3 flex justify-between text-xl">
                    <span className="font-bold">Всего</span>
                    <span className="font-bold text-primary">{total} ₽</span>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button className="w-full mb-4" size="lg">
                    Оформить заказ
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </Link>

                <Link to="/catalog">
                  <Button variant="outline" className="w-full">
                    Продолжить покупки
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
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
