import NewsSlider from '@/components/NewsSlider';

const News = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold gradient-text animate-fade-in">
              Latest News
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-in-up">
              Stay updated with the latest developments and achievements from DSSA
            </p>
          </div>
        </div>
      </section>

      {/* News Content */}
      <NewsSlider />
    </div>
  );
};

export default News;