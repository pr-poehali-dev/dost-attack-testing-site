import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { articles } from '@/data/articles';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);
  const [userRating, setUserRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Статья не найдена</h1>
          <Link to="/articles">
            <Button>Вернуться к статьям</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedArticles = articles.filter(a => 
    a.category === article.category && a.id !== article.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-8 transition-colors">
            <Icon name="ArrowLeft" size={20} />
            Назад к статьям
          </Link>
          
          <Badge className="mb-4 bg-accent hover:bg-accent/90">
            {article.category}
          </Badge>
          
          <h1 className="text-5xl font-bold mb-6 leading-tight animate-fade-in">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-3">
              <img 
                src={article.authorAvatar} 
                alt={article.author}
                className="w-14 h-14 rounded-full"
              />
              <div>
                <p className="font-semibold text-foreground">{article.author}</p>
                <p className="text-sm">{article.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Icon name="Clock" size={18} />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Eye" size={18} />
                <span>{article.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">{article.rating}</span>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12 animate-scale-in">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <Card className="bg-secondary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Оцените статью</h3>
              <p className="text-muted-foreground mb-6">
                Ваша оценка поможет нам создавать лучший контент
              </p>
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setUserRating(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Icon 
                      name="Star" 
                      size={32}
                      className={`${
                        star <= (hoveredRating || userRating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              {userRating > 0 && (
                <p className="text-accent font-semibold animate-fade-in">
                  Спасибо за вашу оценку: {userRating} из 5!
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Похожие статьи</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedArticles.map((relatedArticle, index) => (
                <Card key={relatedArticle.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <Link to={`/article/${relatedArticle.id}`}>
                      <Button className="w-full" variant="outline">
                        Читать
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ArticleDetail;
