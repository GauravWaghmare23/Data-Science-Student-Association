import { Linkedin, Github, Instagram, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import committeeData from '@/data/committee.json';

const Committee = () => {
  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold gradient-text animate-fade-in">
              Our Committee
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-in-up">
              Meet the dedicated individuals who lead and guide the Data Science Student Association
            </p>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {committeeData.map((member, index) => (
              <Card
                key={member.id}
                className={`cyber-card text-center animate-slide-in-up animate-delay-${(index + 1) * 100}`}
              >
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=128&background=0891b2&color=fff&bold=true`;
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  <CardTitle className="font-orbitron text-xl gradient-text">
                    {member.name}
                  </CardTitle>
                  <p className="text-sm font-semibold text-secondary">
                    {member.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-2">
                    {member.socials.linkedin && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSocialClick(member.socials.linkedin)}
                        className="w-10 h-10 border-primary/20 hover:border-primary/50 neon-glow group"
                      >
                        <Linkedin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                      </Button>
                    )}
                    {member.socials.github && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSocialClick(member.socials.github)}
                        className="w-10 h-10 border-secondary/20 hover:border-secondary/50 neon-glow group"
                      >
                        <Github className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                      </Button>
                    )}
                    {member.socials.instagram && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSocialClick(member.socials.instagram)}
                        className="w-10 h-10 border-accent/20 hover:border-accent/50 neon-glow group"
                      >
                        <Instagram className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our committee and help shape the future of DSSA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="cyber-card group px-8 py-3"
              >
                <a href="mailto:dssa@college.edu">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="cyber-card group px-8 py-3"
                onClick={() => window.location.href = '/feedback'}
              >
                Send Feedback
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Committee;