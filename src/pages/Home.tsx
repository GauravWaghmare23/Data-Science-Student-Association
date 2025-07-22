import Hero from '@/components/Hero';
import NewsSlider from '@/components/NewsSlider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Users, Award, Zap, ArrowRight } from 'lucide-react';
import teamPhoto from '@/assets/team-photo.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Quick Stats */}
      <section className="py-20 bg-gradient-to-br from-card/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            <Card className="cyber-card text-center animate-slide-in-up">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-orbitron text-2xl gradient-text">50+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Active Community Members</p>
              </CardContent>
            </Card>

            <Card className="cyber-card text-center animate-slide-in-up animate-delay-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="font-orbitron text-2xl gradient-text">15+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Awards Won from DSSA</p>
              </CardContent>
            </Card>

            <Card className="cyber-card text-center animate-slide-in-up animate-delay-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-orbitron text-2xl gradient-text">20+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-up">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text">
                About DSSA
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Data Science Student Association is a vibrant community of aspiring data scientists, 
                machine learning engineers, and analytics professionals. We bridge the gap between 
                theoretical knowledge and practical application through hands-on workshops, innovative 
                projects, and industry collaborations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to empower students with the skills and knowledge needed to excel in 
                the rapidly evolving field of data science. We organize technical workshops, hackathons, 
                guest lectures, and networking events to foster learning and professional growth.
              </p>
              <Link to="/about">
                <Button size="lg" className="cyber-card group">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative animate-slide-in-up animate-delay-200">
              <div className="relative overflow-hidden rounded-xl cyber-card">
                <img
                  src={teamPhoto}
                  alt="DSSA Team Photo"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl animate-pulse-neon" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-secondary rounded-full opacity-20 blur-xl animate-pulse-neon animate-delay-200" />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <NewsSlider />

      {/* Tech Carnival Preview */}
      <section className="py-20 bg-gradient-to-br from-card/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
              Tech Carnival 2025
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our flagship event bringing together the best minds in data science and technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-up">
              <div className="space-y-4">
                <h3 className="text-2xl font-orbitron font-bold text-foreground">
                  The Ultimate Tech Experience
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tech Carnival is more than just an event—it's a celebration of innovation, 
                  collaboration, and technological excellence. Join us for three days of 
                  competitions, workshops, and networking opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="cyber-card p-4">
                  <h4 className="font-orbitron font-semibold text-primary mb-2">Competitions</h4>
                  <p className="text-sm text-muted-foreground">
                    Hackathons, coding contests, and data science challenges
                  </p>
                </div>
                <div className="cyber-card p-4">
                  <h4 className="font-orbitron font-semibold text-secondary mb-2">Workshops</h4>
                  <p className="text-sm text-muted-foreground">
                    Hands-on sessions with industry experts
                  </p>
                </div>
                <div className="cyber-card p-4">
                  <h4 className="font-orbitron font-semibold text-accent mb-2">Networking</h4>
                  <p className="text-sm text-muted-foreground">
                    Connect with professionals and peers
                  </p>
                </div>
                <div className="cyber-card p-4">
                  <h4 className="font-orbitron font-semibold text-primary mb-2">Prizes</h4>
                  <p className="text-sm text-muted-foreground">
                    Win exciting prizes and recognition
                  </p>
                </div>
              </div>

              <Link to="/tech-carnival">
                <Button size="lg" className="cyber-card group">
                  Explore Tech Carnival
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative animate-slide-in-up animate-delay-200">
              <div className="relative overflow-hidden rounded-xl cyber-card">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto animate-glow-pulse">
                      <Zap className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold gradient-text">
                      Tech Carnival 2024
                    </h3>
                    <p className="text-muted-foreground">
                      March 15-17, 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20 blur-xl animate-pulse-neon" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-primary rounded-full opacity-20 blur-xl animate-pulse-neon animate-delay-200" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Become part of the most innovative data science community in the region
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button size="lg" className="cyber-card group px-8 py-3">
                  Explore Events
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/feedback">
                <Button variant="outline" size="lg" className="cyber-card group px-8 py-3">
                  Get In Touch
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;