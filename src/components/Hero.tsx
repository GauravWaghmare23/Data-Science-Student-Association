import { ArrowRight, Database, Brain, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Starfield background */}
      <div className="absolute inset-0 z-0 bg-black">
        <canvas id="stars" className="w-full h-full"></canvas>
        <img
          src={heroImage}
          alt="Cyberpunk Data Science Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_40%,transparent_100%)]" />
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-2 animate-scan-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 scale-in-center">
        <div className="text-center space-y-14 animate-fade-in">
          {/* DSSA Logo */}
          <div className="flex justify-center">
            <div className="relative w-32 h-32">
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-cyan-400/50 relative overflow-hidden">
                <Database className="w-16 h-16 text-cyan-400 z-10 relative animate-pulse-glow" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-full blur-2xl opacity-60 animate-pulse-glow" />
            </div>
          </div>

          {/* DSSA Title */}
          <div className="space-y-6">
            <h1 className="text-8xl md:text-[10rem] font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-shift drop-shadow-xl tracking-wide">
              <span className="inline-block animate-type-letter" style={{ animationDelay: "0ms" }}>D</span>
              <span className="inline-block animate-type-letter" style={{ animationDelay: "150ms" }}>S</span>
              <span className="inline-block animate-type-letter" style={{ animationDelay: "300ms" }}>S</span>
              <span className="inline-block animate-type-letter" style={{ animationDelay: "450ms" }}>A</span>
            </h1>

            <h2 className="text-3xl md:text-5xl font-rajdhani font-bold text-white relative">
              Data Science Student Association
              <span className="inline-block w-1 h-8 md:h-12 bg-cyan-400 ml-2 animate-cursor-blink" />
            </h2>
          </div>

          {/* Tagline */}
          <div className="relative py-6">
            <p className="text-3xl md:text-4xl font-rajdhani font-bold text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text">
              Data. Logic. Impact.
            </p>
          </div>

          {/* Description */}
          <div className="relative max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed backdrop-blur-sm bg-black/20 rounded-2xl p-8 border border-cyan-400/20">
              Empowering the next generation of data scientists through
              <span className="text-cyan-400 font-semibold animate-text-glow"> innovation</span>,
              <span className="text-purple-400 font-semibold animate-text-glow animation-delay-200"> collaboration</span>, and
              <span className="text-pink-400 font-semibold animate-text-glow animation-delay-400"> cutting-edge research</span>.
              <br />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mt-4 inline-block animate-pulse-glow">
                Join us in shaping the future of data-driven decision making.
              </span>
            </p>
          </div>

          {/* Features */}
          <div className="flex justify-center space-x-8 md:space-x-12 animate-slide-in-up animate-delay-400">
            {[{ icon: <Database className="w-8 h-8 text-primary" />, label: "Big Data" },
              { icon: <Brain className="w-8 h-8 text-secondary" />, label: "AI/ML" },
              { icon: <TrendingUp className="w-8 h-8 text-accent" />, label: "Analytics" }].map(({ icon, label }, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 group">
                <div className="w-16 h-16 bg-card/50 rounded-full flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-all duration-300 neon-glow">
                  {icon}
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up animate-delay-500">
            <Link to="/about">
              <Button size="lg" className="cyber-card group px-8 py-3 font-rajdhani font-semibold text-lg">
                Explore Our Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/events">
              <Button
                variant="outline"
                size="lg"
                className="cyber-card group px-8 py-3 font-rajdhani font-semibold text-lg border-primary/30 hover:border-primary/60 bg-transparent"
              >
                Join Events
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Decorations */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-float" />
      <div className="absolute top-32 right-20 w-3 h-3 bg-secondary/30 rounded-full animate-float animate-delay-200" />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent/30 rounded-full animate-float animate-delay-400" />
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary/20 rounded-full animate-float animate-delay-100" />
    </section>
  );
};

export default Hero;
