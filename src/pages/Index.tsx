import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { articles } from '@/data/articles';

const Index = () => {
  const featuredArticle = articles[0];
  const popularArticles = articles.slice(0, 3);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${featuredArticle.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-end pb-16">
          <div className="max-w-3xl text-white animate-fade-in">
            <Badge className="mb-4 bg-accent hover:bg-accent/90">
              {featuredArticle.category}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {featuredArticle.title}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {featuredArticle.excerpt}
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <img 
                  src={featuredArticle.authorAvatar} 
                  alt={featuredArticle.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{featuredArticle.author}</p>
                  <p className="text-sm opacity-75">{featuredArticle.date} · {featuredArticle.readTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">{featuredArticle.rating}</span>
              </div>
            </div>
            <Link to={`/article/${featuredArticle.id}`}>
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Читать статью
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">Популярные статьи</h2>
          <Link to="/articles">
            <Button variant="ghost" className="group">
              Все статьи
              <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularArticles.map((article, index) => (
            <Card key={article.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent hover:bg-accent/90">
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <img 
                      src={article.authorAvatar} 
                      alt={article.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">{article.rating}</span>
                  </div>
                </div>
                <Link to={`/article/${article.id}`}>
                  <Button className="w-full mt-4" variant="outline">
                    Читать
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Подписывайтесь на обновления
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Получайте лучшие статьи прямо на почту
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background"
              />
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
