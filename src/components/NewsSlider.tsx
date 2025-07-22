import { useState, useEffect } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import newsData from "@/data/news.json";

const NewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const handleNewsClick = (news) => setSelectedNews(news);
  const closeModal = () => setSelectedNews(null);

  return (
    <section className="py-20 bg-gradient-to-br from-background to-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest happenings in the Data Science
            community
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative overflow-hidden rounded-xl cyber-card h-[28rem] sm:h-[32rem] md:h-96 w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${newsData.length * 100}%`,
            }}
          >
            {newsData.map((news, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-2 sm:px-4 max-w-full"
              >
                <div className="relative h-[28rem] sm:h-[32rem] md:h-96 bg-gradient-to-br from-card to-card/50">
                  {/* Background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50" />

                  {/* Main content */}
                  <div className="relative z-10 h-full flex items-center">
                    <div className="container w-full max-w-full mx-auto px-2 sm:px-6 md:px-8">
                      <div className="max-w-md sm:max-w-2xl md:max-w-4xl">
                        <Badge
                          variant="secondary"
                          className="mb-3 sm:mb-4 font-rajdhani text-sm sm:text-base"
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(news.date)}
                        </Badge>

                        <h3 className="text-lg sm:text-2xl md:text-4xl font-orbitron font-bold text-foreground mb-2 sm:mb-4">
                          {news.title}
                        </h3>

                        

                        <Button
                          onClick={() => handleNewsClick(news)}
                          className="cyber-card group text-sm sm:text-base"
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
        </div>

        {/* News Preview Grid (Optional) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.slice(0, 6).map((news, index) => (
            <div
              key={news.id}
              className="cyber-card cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              onClick={() => handleNewsClick(news)}
            >
              <div className="p-4">
                <Badge variant="outline" className="font-rajdhani mb-2">
                  {formatDate(news.date)}
                </Badge>
                <h4 className="font-orbitron text-lg line-clamp-2">
                  {news.title}
                </h4>
                <p className="text-muted-foreground line-clamp-3 mt-2">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
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
                  className="text-muted-foreground hover:text-foreground text-xl"
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
