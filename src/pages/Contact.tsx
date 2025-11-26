import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Контакты</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нами — мы всегда рады новым идеям и предложениям
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Напишите нам</h2>
            <p className="text-muted-foreground mb-8">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>
            
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      placeholder="Ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Тема</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      placeholder="О чем вы хотите написать"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <textarea 
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background resize-none"
                      placeholder="Ваше сообщение..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                    Отправить сообщение
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h2 className="text-3xl font-bold mb-6">Другие способы связи</h2>
            <p className="text-muted-foreground mb-8">
              Выберите удобный для вас способ коммуникации
            </p>
            
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@journal.ru</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
                  </div>
                </CardContent>
              </Card>

              <div className="pt-6">
                <h3 className="font-semibold mb-4">Мы в соцсетях</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                    <Icon name="Twitter" size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                    <Icon name="Facebook" size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                    <Icon name="Instagram" size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                    <Icon name="Linkedin" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
