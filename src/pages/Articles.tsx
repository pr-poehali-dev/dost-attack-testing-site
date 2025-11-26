import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { articles, categories } from '@/data/articles';

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  
  const filteredArticles = selectedCategory === 'Все' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Все статьи</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Коллекция материалов о технологиях, дизайне, бизнесе и культуре
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'bg-accent hover:bg-accent/90' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Card key={article.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="relative h-56 overflow-hidden">
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
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold text-sm">{article.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <img 
                      src={article.authorAvatar} 
                      alt={article.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <span className="text-muted-foreground">{article.readTime}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Eye" size={14} />
                    <span>{article.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    <span>{article.date}</span>
                  </div>
                </div>
                <Link to={`/article/${article.id}`}>
                  <Button className="w-full" variant="outline">
                    Читать статью
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
