import { useState } from 'react';
import { Clock, MapPin, User, Users, ExternalLink, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import workshopsData from '@/data/workshops.json';

const Workshops = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const activeWorkshops = workshopsData.filter(workshop => workshop.status === 'active');
  const inactiveWorkshops = workshopsData.filter(workshop => workshop.status === 'inactive');

  const openWorkshopDetails = (workshop) => {
    setSelectedWorkshop(workshop);
  };

  const closeWorkshopDetails = () => {
    setSelectedWorkshop(null);
  };

  const WorkshopCard = ({ workshop, index }) => (
    <Card
      className={`cyber-card cursor-pointer transition-all duration-300 animate-slide-in-up animate-delay-${(index + 1) * 100}`}
      onClick={() => openWorkshopDetails(workshop)}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge
            variant={workshop.status === 'active' ? 'default' : 'secondary'}
            className="font-rajdhani"
          >
            {workshop.status === 'active' ? 'Upcoming' : 'Completed'}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            {workshop.duration}
          </div>
        </div>
        <CardTitle className="font-orbitron text-xl gradient-text">
          {workshop.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            {workshop.venue}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <User className="w-4 h-4 mr-2 text-secondary" />
            Instructor: {workshop.instructor}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-2 text-accent" />
            Max participants: {workshop.maxParticipants}
          </div>
          <div className="flex items-center text-sm text-foreground font-semibold">
            <span className="text-primary">Fee: {workshop.fee}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {workshop.description}
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
              Workshops
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-in-up">
              Enhance your skills with our comprehensive hands-on workshops led by industry experts
            </p>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="active" className="font-rajdhani">
                Upcoming ({activeWorkshops.length})
              </TabsTrigger>
              <TabsTrigger value="inactive" className="font-rajdhani">
                Completed ({inactiveWorkshops.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-8">
              {activeWorkshops.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {activeWorkshops.map((workshop, index) => (
                    <WorkshopCard key={workshop.id} workshop={workshop} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                    <BookOpen className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold gradient-text mb-4">
                    🚧 Coming Soon
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We're preparing exciting new workshops. Stay tuned for announcements!
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="inactive" className="space-y-8">
              {inactiveWorkshops.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {inactiveWorkshops.map((workshop, index) => (
                    <WorkshopCard key={workshop.id} workshop={workshop} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                    <BookOpen className="w-12 h-12 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold gradient-text mb-4">
                    No Past Workshops
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Check back later for our workshop history.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Workshop Details Modal */}
      {selectedWorkshop && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeWorkshopDetails}
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
                    variant={selectedWorkshop.status === 'active' ? 'default' : 'secondary'}
                    className="font-rajdhani mb-2"
                  >
                    {selectedWorkshop.status === 'active' ? 'Upcoming' : 'Completed'}
                  </Badge>
                  <h2 className="text-3xl font-orbitron font-bold gradient-text">
                    {selectedWorkshop.name}
                  </h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeWorkshopDetails}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ×
                </Button>
              </div>

              {/* Workshop Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>{selectedWorkshop.venue}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-3 text-secondary" />
                    <span>{selectedWorkshop.time} ({selectedWorkshop.duration})</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <User className="w-5 h-5 mr-3 text-accent" />
                    <span>Instructor: {selectedWorkshop.instructor}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-5 h-5 mr-3 text-primary" />
                    <span>Max Participants: {selectedWorkshop.maxParticipants}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-orbitron font-semibold text-foreground mb-2">Fee</h4>
                    <p className="text-primary font-semibold text-lg">{selectedWorkshop.fee}</p>
                  </div>
                  <div>
                    <h4 className="font-orbitron font-semibold text-foreground mb-2">Prerequisites</h4>
                    <p className="text-muted-foreground text-sm">{selectedWorkshop.prerequisites}</p>
                  </div>
                  <div>
                    <h4 className="font-orbitron font-semibold text-foreground mb-2">Description</h4>
                    <p className="text-muted-foreground text-sm">{selectedWorkshop.description}</p>
                  </div>
                </div>
              </div>

              {/* Topics Covered */}
              <div className="mb-6">
                <h3 className="text-xl font-orbitron font-bold gradient-text mb-4">Topics Covered</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedWorkshop.topics.map((topic, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg border border-primary/20">
                      <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coordinators */}
              <div className="mb-6">
                <h3 className="text-xl font-orbitron font-bold gradient-text mb-4">Workshop Coordinators</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedWorkshop.coordinators.map((coordinator, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg border border-secondary/20">
                      <User className="w-5 h-5 text-secondary" />
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
                  disabled={selectedWorkshop.status === 'inactive'}
                >
                  <a href={selectedWorkshop.registrationLink} target="_blank" rel="noopener noreferrer">
                    Register Now
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="cyber-card"
                  onClick={closeWorkshopDetails}
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

export default Workshops;