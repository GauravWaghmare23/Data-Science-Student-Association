import { Linkedin, Github, Instagram, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import committeeData from "@/data/committee.json";

const CommitteeSection = ({ title, members }) => {
  if (!members || members.length === 0) return null;

  return (
    <section className="py-10 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-8 animate-fade-in ">
        <h2 className="text-3xl font-orbitron font-bold text-center mb-8 gradient-text">
          {title}
        </h2>

        <div className="flex justify-betwee mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 mdlg:grid-cols-3 xl:grid-cols-4 gap-8 justify-evenly">
            {members.map((member, index) => (
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
                          const target = e.target;
                          if (target instanceof HTMLImageElement) {
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              member.name
                            )}&size=128&background=0891b2&color=fff&bold=true`;
                          }
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
                  <p className="text-sm text-muted-foreground mb-6">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-2">
                    {member.socials?.linkedin && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => window.open(member.socials.linkedin)}
                        className="w-10 h-10 border-primary/20 hover:border-primary/50 neon-glow group"
                      >
                        <Linkedin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                      </Button>
                    )}
                    {member.socials?.github && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => window.open(member.socials.github)}
                        className="w-10 h-10 border-secondary/20 hover:border-secondary/50 neon-glow group"
                      >
                        <Github className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                      </Button>
                    )}
                    {member.socials?.instagram && (
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => window.open(member.socials.instagram)}
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
      </div>
    </section>
  );
};

const Committee = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-background to-card/30">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold gradient-text animate-fade-in">
            Our Committee
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto animate-slide-in-up">
            Meet the dedicated individuals who lead and guide the Data Science Student Association
          </p>
        </div>
      </section>

      {/* Hierarchical Sections */}
      <CommitteeSection title="Head of Department & Incharge" members={committeeData.incharge} />
      <CommitteeSection title="President, Vice President & Secretary" members={committeeData.main} />
      <CommitteeSection title="All Department Heads" members={committeeData.committee} />
      <CommitteeSection title="Co-Heads" members={committeeData.coheads} />

      {/* Join Us */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our committee and help shape the future of DSSA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="cyber-card group px-8 py-3">
              <a href="mailto:gauravwaghmare95032@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Committee;
