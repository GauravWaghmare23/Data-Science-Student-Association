import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Zap,
  Clock,
  Target,
  Lightbulb
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import techCarnivalImage from '@/assets/tech-carnival.jpg';
import techCarnivalData from '@/data/techCarnival.json';

const iconMap = {
  Users,
  Trophy,
  Target,
  Lightbulb
};

const TechCarnival = () => {
  const { highlights, events, schedule } = techCarnivalData;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={techCarnivalImage} alt="Tech Carnival" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="font-rajdhani text-lg px-4 py-2">
                <Calendar className="w-5 h-5 mr-2" />
                March 15–17, 2024
              </Badge>
              <h1 className="text-5xl md:text-7xl font-orbitron font-bold gradient-text animate-fade-in">
                Tech Carnival 2024
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-in-up">
                The Ultimate Technology Festival – Where Innovation Meets Excellence
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up animate-delay-200">
              <Link to="/events">
                <Button size="lg" className="cyber-card group px-8 py-4 text-lg">
                  <Zap className="w-6 h-6 mr-2" />
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
              Event Highlights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the biggest tech event of the year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon as keyof typeof iconMap];
              return (
                <Card
                  key={highlight.title}
                  className={`cyber-card text-center animate-slide-in-up animate-delay-${(index + 1) * 100}`}
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-gradient-${highlight.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="font-orbitron text-xl gradient-text">
                      {highlight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-gradient-to-br from-card/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
              Featured Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compete in these exciting challenges and win amazing prizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card
                key={event.name}
                className={`cyber-card animate-slide-in-up animate-delay-${(index + 1) * 100}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="font-rajdhani">
                      {event.status}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.time}
                    </div>
                  </div>
                  <CardTitle className="font-orbitron text-xl gradient-text">
                    {event.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {event.venue}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-secondary" />
                      {event.participants}
                    </div>
                    <div className="flex items-center text-sm text-foreground font-semibold">
                      <Trophy className="w-4 h-4 mr-2 text-accent" />
                      Prize: {event.prize}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
              Event Schedule
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three days packed with competitions, workshops, and networking
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {schedule.map((day, dayIndex) => (
              <Card
                key={day.day}
                className={`cyber-card animate-slide-in-up animate-delay-${(dayIndex + 1) * 100}`}
              >
                <CardHeader>
                  <CardTitle className="font-orbitron text-2xl gradient-text text-center">
                    {day.day}
                  </CardTitle>
                  <p className="text-center text-muted-foreground font-rajdhani">
                    {day.date}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {day.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="flex items-start space-x-3 p-3 bg-card/50 rounded-lg border border-primary/20"
                      >
                        <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-foreground text-sm">
                              {event.title}
                            </span>
                            <span className="text-xs text-muted-foreground">{event.time}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{event.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechCarnival;
