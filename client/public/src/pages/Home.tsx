import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, Download, ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * Bold Geometric Design - Cyberpunk Game Dev Aesthetic
 * Electric Cyan (#00D9FF) + Neon Purple (#C400FF) on Deep Navy (#0A0E27)
 * Space Grotesk for display, Inter for body text
 * Asymmetric layouts, diagonal dividers, glowing accents
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border/30 backdrop-blur-xl bg-background/80">
        <nav className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img
              src="/manus-storage/rahul-logo_60d19f92.png"
              alt="Rahul Logo"
              className="w-8 h-8"
            />
            <span className="font-bold text-lg glow-orange">Rahul</span>
          </div>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li>
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-primary transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with diagonal clip */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/manus-storage/hero-gradient_dc5e529f.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
          }}
        />

        {/* Content */}
        <div className="container relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-2">
                <p className="text-primary font-semibold text-lg">👋 Hello, I'm</p>
                <h1 className="text-6xl md:text-7xl font-bold leading-tight glow-orange">
                  Rahul Ashok Bedre
                </h1>
              </div>
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl font-semibold text-secondary">
                  Aspiring Game Developer &
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-secondary">
                  Computer Science Engineer
                </p>
              </div>
              <p className="text-muted-foreground text-lg max-w-md">
                Pursuing BE at AGMRCET, Hubballi. Dreaming of building AAA games like PUBG,
                Valorant, and Indus Battle Royale.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="btn-primary flex items-center gap-2">
                  <Download size={18} />
                  Download Resume
                </button>
                <button className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                  Contact Me
                </button>
              </div>
            </div>

            {/* Right: Photo Placeholder */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="relative w-full h-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-orange rounded-lg opacity-20 blur-2xl" />
                <div
                  className="relative w-full h-full rounded-lg border-2 border-primary/50 flex items-center justify-center bg-card/50 backdrop-blur-sm overflow-hidden"
                  style={{
                    clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)",
                  }}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">📷</div>
                    <p className="text-muted-foreground">Your Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="text-primary" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 bg-background">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold glow-orange">About Me</h2>
            <div className="w-16 h-1 bg-gradient-orange rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-elevated p-8 space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm Rahul Ashok Bedre from Hanagal, Karnataka. I'm pursuing BE at AGMRCET,
                Hubballi with a CGPA of 7.19.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My dream is to build AAA games like PUBG, Valorant, and Indus Battle Royale. I'm
                passionate about game development and constantly learning new technologies to turn
                my vision into reality.
              </p>
            </Card>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Education</h3>
              <div className="space-y-4">
                <Card className="card-elevated p-6 border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🎓</span>
                    <div>
                      <h4 className="font-bold text-lg">BE - AGMRCET Hubballi</h4>
                      <p className="text-primary font-semibold">CGPA: 7.19</p>
                    </div>
                  </div>
                </Card>
                <Card className="card-elevated p-6 border-l-4 border-l-secondary">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🎓</span>
                    <div>
                      <h4 className="font-bold text-lg">PUC - RLS PU College</h4>
                      <p className="text-secondary font-semibold">58%</p>
                    </div>
                  </div>
                </Card>
                <Card className="card-elevated p-6 border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🎓</span>
                    <div>
                      <h4 className="font-bold text-lg">SSLC - Roshni School</h4>
                      <p className="text-primary font-semibold">78%</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 bg-card/20">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold glow-orange-light">Skills</h2>
            <div className="w-16 h-1 bg-gradient-orange rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "C", icon: "🔧" },
              { name: "C++", icon: "⚙️" },
              { name: "Python", icon: "🐍" },
              { name: "SQL", icon: "💾" },
              { name: "HTML", icon: "🌐" },
              { name: "CSS", icon: "🎨" },
              { name: "Git & GitHub", icon: "📚" },
              { name: "Game Dev", icon: "🎮" },
            ].map((skill, idx) => (
              <Card
                key={idx}
                className="card-elevated p-6 flex flex-col items-center justify-center text-center space-y-3 group"
              >
                <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </span>
                <p className="font-semibold text-sm">{skill.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 bg-background">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold glow-orange">Projects</h2>
            <div className="w-16 h-1 bg-gradient-orange rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "IR Sensor Theft Detector",
                icon: "🛡",
                description: "An IoT-based security system using infrared sensors to detect unauthorized access.",
              },
              {
                title: "Solar Mobile Charger",
                icon: "☀️",
                description: "A sustainable charging solution powered by solar energy for mobile devices.",
              },
              {
                title: "Portfolio Website",
                icon: "🌐",
                description: "A modern, responsive portfolio showcasing my skills and projects.",
              },
              {
                title: "Future Multiplayer Game",
                icon: "🎮",
                description: "An upcoming multiplayer game project combining my passion for game development.",
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className="card-elevated p-8 space-y-4 border-t-2 border-t-primary hover:border-t-secondary transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <span className="text-4xl">{project.icon}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <button className="text-primary font-semibold hover:text-secondary transition-colors flex items-center gap-2 pt-4">
                  Learn More →
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-card/20">
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold glow-orange-light">Let's Connect</h2>
            <div className="w-16 h-1 bg-gradient-orange rounded-full mx-auto" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "rahulbedre330@gmail.com",
                href: "mailto:rahulbedre330@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+91 8147107648",
                href: "tel:+918147107648",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "github.com/rahulbedre7327-lang",
                href: "https://github.com/rahulbedre7327-lang",
              },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-elevated p-6 text-center space-y-3 group"
                >
                  <Icon className="w-8 h-8 mx-auto text-primary group-hover:text-secondary transition-colors" />
                  <p className="font-semibold text-sm text-muted-foreground">{contact.label}</p>
                  <p className="font-bold text-sm break-all group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </a>
              );
            })}
          </div>

          <div className="flex justify-center gap-4 pt-8">
            <a
              href="https://github.com/rahulbedre7327-lang"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rahul-bedre-467663376"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-background/50 backdrop-blur-sm py-8">
        <div className="container text-center space-y-2">
          <p className="text-muted-foreground">
            Designed & Developed by Rahul Ashok Bedre
          </p>
          <p className="text-sm text-muted-foreground/50">© 2026 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
