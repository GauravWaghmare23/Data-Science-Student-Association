import { Users, Target, Lightbulb, Award, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import teamPhoto from '@/assets/team-photo.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We foster creative thinking and innovative approaches to solve complex data problems.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collective intelligence to achieve excellence.",
      color: "secondary"
    },
    {
      icon: Lightbulb,
      title: "Learning",
      description: "We promote continuous learning and knowledge sharing within our community.",
      color: "accent"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do and encourage others to do the same.",
      color: "primary"
    }
  ];

const achievements = [
  {
    year: "2025",
    title: "Debugging Competition",
    description: "Won 1st prize in the Debugging Competition organized by the Computer Engineering Department"
  },
  {
    year: "2025",
    title: "Extempore Competition",
    description: "Secured 1st place in Extempore organized by the Civil Engineering Department"
  },
  {
    year: "2024",
    title: "Hackathon – Government College of Engineering & Technology, Nagpur",
    description: "Achieved 1st prize in the inter-college hackathon"
  },
  {
    year: "2024",
    title: "Ideathon – KDK College of Engineering",
    description: "Won 1st prize in the Ideathon competition showcasing innovative tech solutions"
  }
];


  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold gradient-text animate-fade-in">
              About DSSA
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-in-up">
              The Data Science Student Association is a pioneering organization dedicated to advancing 
              the field of data science through education, research, and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-up">
              <div className="space-y-4">
                <h2 className="text-4xl font-orbitron font-bold gradient-text">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower students with cutting-edge data science skills and knowledge, fostering 
                  innovation and excellence in the field. We bridge the gap between academic theory 
                  and industry practice, preparing our members for successful careers in data science.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl font-orbitron font-bold gradient-text">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading student organization in data science, known for producing 
                  skilled professionals who drive innovation and make meaningful contributions 
                  to society through data-driven solutions.
                </p>
              </div>
            </div>

            <div className="relative animate-slide-in-up animate-delay-200">
              <div className="relative overflow-hidden rounded-xl cyber-card">
                <img
                  src="QuestWinners.jpg"
                  alt="DSSA Team"
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

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-card/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className={`cyber-card text-center animate-slide-in-up animate-delay-${(index + 1) * 100}`}
              >
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-orbitron text-xl gradient-text">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to enhance your data science journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="cyber-card animate-slide-in-up">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl gradient-text">
                  Technical Workshops
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Hands-on workshops covering the latest tools and techniques in data science, 
                  machine learning, and artificial intelligence.
                </p>
                <Link to="/workshops">
                  <Button variant="outline" className="w-full group">
                    View Workshops
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="cyber-card animate-slide-in-up animate-delay-100">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl gradient-text">
                  Competitions & Hackathons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Organize and participate in data science competitions, hackathons, and 
                  coding contests to test and improve your skills.
                </p>
                <Link to="/events">
                  <Button variant="outline" className="w-full group">
                    View Events
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="cyber-card animate-slide-in-up animate-delay-200">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl gradient-text">
                  Industry Connections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Build valuable connections with industry professionals, alumni, and 
                  potential employers through networking events and guest lectures.
                </p>
                <Link to="/committee">
                  <Button variant="outline" className="w-full group">
                    Meet Our Team
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="cyber-card animate-slide-in-up animate-delay-300">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl gradient-text">
                  Research Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Participate in cutting-edge research projects and contribute to the 
                  advancement of data science knowledge.
                </p>
                <Link to="/news">
                  <Button variant="outline" className="w-full group">
                    Latest News
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="cyber-card animate-slide-in-up animate-delay-400">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl gradient-text">
                  Skill Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive training programs to develop both technical and soft skills 
                  essential for success in the data science field.
                </p>
                <Link to="/workshops">
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="cyber-card animate-slide-in-up animate-delay-500">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl gradient-text">
                  Community Building
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Foster a supportive community where members can share knowledge, 
                  collaborate on projects, and grow together.
                </p>
                <Link to="/feedback">
                  <Button variant="outline" className="w-full group">
                    Join Us
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-card/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milestones that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className={`cyber-card animate-slide-in-up animate-delay-${(index + 1) * 100}`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="font-orbitron text-xl gradient-text">
                        {achievement.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{achievement.year}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our community of passionate data scientists and help shape the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button size="lg" className="cyber-card group px-8 py-3">
                  Join Our Events
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

export default About;