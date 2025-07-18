import { useState } from 'react';
import { Calendar, MapPin, Users, Trophy, Clock, ExternalLink, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import eventsData from '@/data/events.json';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const activeEvents = eventsData.filter(event => event.status === 'active');
  const inactiveEvents = eventsData.filter(event => event.status === 'inactive');

  const openEventDetails = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  const EventCard = ({ event, index }) => (
    <Card
      className={`cyber-card cursor-pointer transition-all duration-300 animate-slide-in-up animate-delay-${(index + 1) * 100}`}
      onClick={() => openEventDetails(event)}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge
            variant={event.status === 'active' ? 'default' : 'secondary'}
            className="font-rajdhani"
          >
            {event.status === 'active' ? 'Active' : 'Inactive'}
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
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            {event.venue}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-2 text-secondary" />
            {event.teams}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Trophy className="w-4 h-4 mr-2 text-accent" />
            {event.fee}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {event.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold gradient-text animate-fade-in">
              Events
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-in-up">
              Join our exciting events and competitions designed to challenge your skills and expand your knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="active" className="font-rajdhani">
                Active Events ({activeEvents.length})
              </TabsTrigger>
              <TabsTrigger value="inactive" className="font-rajdhani">
                Past Events ({inactiveEvents.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-8">
              {activeEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {activeEvents.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                    <Calendar className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold gradient-text mb-4">
                    🚧 Coming Soon
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We're working on exciting new events. Stay tuned for updates!
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="inactive" className="space-y-8">
              {inactiveEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {inactiveEvents.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                    <Calendar className="w-12 h-12 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold gradient-text mb-4">
                    No Past Events
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Check back later for our event history.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeEventDetails}
        >
          <div
            className="bg-card/90 backdrop-blur-sm border border-primary/20 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto cyber-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <Badge
                    variant={selectedEvent.status === 'active' ? 'default' : 'secondary'}
                    className="font-rajdhani mb-2"
                  >
                    {selectedEvent.status === 'active' ? 'Active' : 'Inactive'}
                  </Badge>
                  <h2 className="text-3xl font-orbitron font-bold gradient-text">
                    {selectedEvent.name}
                  </h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeEventDetails}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ×
                </Button>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>{selectedEvent.venue}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-3 text-secondary" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-5 h-5 mr-3 text-accent" />
                    <span>{selectedEvent.teams}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Trophy className="w-5 h-5 mr-3 text-primary" />
                    <span>{selectedEvent.fee}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-orbitron font-semibold text-foreground mb-2">Scoring</h4>
                    <p className="text-muted-foreground text-sm">{selectedEvent.scoring}</p>
                  </div>
                  <div>
                    <h4 className="font-orbitron font-semibold text-foreground mb-2">Description</h4>
                    <p className="text-muted-foreground text-sm">{selectedEvent.description}</p>
                  </div>
                </div>
              </div>

              {/* Rounds */}
              <div className="mb-6">
                <h3 className="text-xl font-orbitron font-bold gradient-text mb-4">Event Rounds</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedEvent.rounds.map((round, index) => (
                    <Card key={index} className="cyber-card">
                      <CardHeader>
                        <CardTitle className="font-orbitron text-lg text-primary">
                          Round {index + 1}
                        </CardTitle>
                        <p className="text-sm font-semibold text-foreground">{round.name}</p>
                        <p className="text-xs text-muted-foreground">{round.time}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{round.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Rules */}
              <div className="mb-6">
                <h3 className="text-xl font-orbitron font-bold gradient-text mb-4">Rules & Regulations</h3>
                <ul className="space-y-2">
                  {selectedEvent.rules.map((rule, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prizes */}
              <div className="mb-6">
                <h3 className="text-xl font-orbitron font-bold gradient-text mb-4">Prizes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedEvent.prizes.map((prize, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg border border-primary/20">
                      <Trophy className="w-5 h-5 text-accent" />
                      <span className="text-foreground">{prize}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coordinators */}
              <div className="mb-6">
                <h3 className="text-xl font-orbitron font-bold gradient-text mb-4">Event Coordinators</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedEvent.coordinators.map((coordinator, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg border border-secondary/20">
                      <Phone className="w-5 h-5 text-secondary" />
                      <div>
                        <p className="font-semibold text-foreground">{coordinator.name}</p>
                        <p className="text-sm text-muted-foreground">{coordinator.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="cyber-card group flex-1"
                  disabled={selectedEvent.status === 'inactive'}
                >
                  <a href={selectedEvent.registrationLink} target="_blank" rel="noopener noreferrer">
                    Register Now
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="cyber-card"
                  onClick={closeEventDetails}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;