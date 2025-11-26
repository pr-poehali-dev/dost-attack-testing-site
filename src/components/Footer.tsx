import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Журнал</h3>
            <p className="text-sm opacity-90">
              Современная платформа для публикации качественного контента и статей
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="opacity-90 hover:opacity-100 transition-opacity">Главная</a></li>
              <li><a href="/articles" className="opacity-90 hover:opacity-100 transition-opacity">Статьи</a></li>
              <li><a href="/authors" className="opacity-90 hover:opacity-100 transition-opacity">Авторы</a></li>
              <li><a href="/contact" className="opacity-90 hover:opacity-100 transition-opacity">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Категории</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/articles?category=tech" className="opacity-90 hover:opacity-100 transition-opacity">Технологии</a></li>
              <li><a href="/articles?category=design" className="opacity-90 hover:opacity-100 transition-opacity">Дизайн</a></li>
              <li><a href="/articles?category=business" className="opacity-90 hover:opacity-100 transition-opacity">Бизнес</a></li>
              <li><a href="/articles?category=culture" className="opacity-90 hover:opacity-100 transition-opacity">Культура</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Соцсети</h4>
            <div className="flex gap-4">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>© 2024 Журнал. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
