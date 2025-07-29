import { Send, Mail, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Feedback = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold gradient-text animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-in-up">
              We value your thoughts and suggestions. Help us improve DSSA!
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="cyber-card animate-slide-in-up">
              <CardHeader>
                <CardTitle className="font-orbitron text-2xl gradient-text text-center">
                  Send Us Your Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formsubmit.co/gauravwaghmare95032@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  {/* disable captcha */}
                  <input type="hidden" name="_captcha" value="false" />

                  {/* redirect to thank you page (optional) */}
                  {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-rajdhani">
                      <User className="w-4 h-4 inline mr-2" />
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="bg-card/50 border-primary/20 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-rajdhani">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="bg-card/50 border-primary/20 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-rajdhani">
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Share your thoughts, suggestions, or questions..."
                      required
                      rows={6}
                      className="bg-card/50 border-primary/20 focus:border-primary/50"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full cyber-card group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Feedback
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
