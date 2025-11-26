import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Главная' },
    { path: '/articles', label: 'Статьи' },
    { path: '/authors', label: 'Авторы' },
    { path: '/contact', label: 'Контакты' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="BookOpen" size={28} className="text-accent" />
            <span className="text-2xl font-bold text-primary">Журнал</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
