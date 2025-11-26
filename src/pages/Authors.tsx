import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { authors } from '@/data/articles';

const Authors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Наши авторы</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Познакомьтесь с экспертами, создающими контент для журнала
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {authors.map((author, index) => (
            <Card key={author.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <img 
                    src={author.avatar} 
                    alt={author.name}
                    className="w-24 h-24 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{author.name}</h3>
                    <p className="text-muted-foreground mb-4">{author.bio}</p>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="FileText" size={18} className="text-accent" />
                        <span className="font-semibold">{author.articles} статей</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold">{author.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Authors;
