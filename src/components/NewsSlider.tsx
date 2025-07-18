import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import newsData from '@/data/news.json';

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedNews, setSelectedNews] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsData.length) % newsData.length);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  const closeModal = () => {
    setSelectedNews(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Latest News
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest happenings in the Data Science community
          </p>
        </div>

        <div className="relative">
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-xl cyber-card">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {newsData.map((news, index) => (
                <div key={news.id} className="w-full flex-shrink-0">
                  <div className="relative h-96 bg-gradient-to-br from-card to-card/50">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50" />
                    <div className="relative z-10 h-full flex items-center">
                      <div className="container mx-auto px-8">
                        <div className="max-w-4xl">
                          <Badge variant="secondary" className="mb-4 font-rajdhani">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(news.date)}
                          </Badge>
                          <h3 className="text-2xl md:text-4xl font-orbitron font-bold text-foreground mb-4">
                            {news.title}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            {news.description}
                          </p>
                          <Button
                            onClick={() => handleNewsClick(news)}
                            className="cyber-card group"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 neon-glow"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 neon-glow"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {newsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary shadow-neon'
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* News Grid Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.slice(0, 6).map((news, index) => (
            <Card
              key={news.id}
              className={`cyber-card cursor-pointer transition-all duration-300 animate-slide-in-up animate-delay-${(index + 1) * 100}`}
              onClick={() => handleNewsClick(news)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="font-rajdhani">
                    {formatDate(news.date)}
                  </Badge>
                </div>
                <CardTitle className="font-orbitron text-lg line-clamp-2">
                  {news.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 text-muted-foreground">
                  {news.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal for full news view */}
      {selectedNews && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-card/90 backdrop-blur-sm border border-primary/20 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto cyber-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary" className="font-rajdhani">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(selectedNews.date)}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ×
                </Button>
              </div>
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground mb-4">
                {selectedNews.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {selectedNews.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsSlider;