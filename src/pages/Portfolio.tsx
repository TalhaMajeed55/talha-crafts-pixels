import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { useEmailJS } from '@/hooks/use-emailjs';
import { 
  Mail, 
  Copy, 
  Send, 
  ExternalLink,
  Github,
  Linkedin,
  Code,
  Database,
  Cloud,
  Cpu,
  Smartphone,
  Globe,
  Zap
} from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // EmailJS hook
  const { sendEmail, isLoading, error, clearError } = useEmailJS();

  // Featured projects data
  const projects = [
    {
      id: 1,
      title: "Bolt Video Conferencing",
      description: "A modern video conferencing platform with real-time collaboration features, screen sharing, and AI-powered meeting insights.",
      image: "/lovable-uploads/f8210fdd-d6c6-44cf-a715-494ed5c09cfe.png",
      tech: ["React", "WebRTC", "Node.js", "Socket.io"]
    },
    {
      id: 2,
      title: "Health Tracker Dashboard",
      description: "Comprehensive health monitoring application with real-time vitals tracking, data visualization, and AI health insights.",
      image: "/lovable-uploads/b6ec3a7c-2232-46a9-bb9a-ed72b20c9c50.png",
      tech: ["React", "Chart.js", "FastAPI", "MongoDB"]
    },
    {
      id: 3,
      title: "Cars Scraping Platform",
      description: "Advanced car marketplace with intelligent search filters, price tracking, and automated data scraping capabilities.",
      image: "/lovable-uploads/ef1c8a00-61a3-4593-a8af-c36939226c32.png",
      tech: ["React", "Python", "Scrapy", "PostgreSQL"]
    },
    {
      id: 4,
      title: "Expert Consultation Platform",
      description: "Professional networking platform connecting experts with clients for video consultations and advice.",
      image: "/lovable-uploads/3372f381-3938-42cc-a2dc-8dcb886be877.png",
      tech: ["React", "Next.js", "Stripe", "WebRTC"]
    },
    {
      id: 5,
      title: "Hostel Management System",
      description: "Complete hostel administration platform with billing, student management, and automated fee tracking.",
      image: "/lovable-uploads/c1c2543b-9aea-4f3c-b4dd-1602d4ea0150.png",
      tech: ["React", "Node.js", "MySQL", "Express"]
    },
    {
      id: 6,
      title: "KrossGo Sports Platform",
      description: "Sports equipment e-commerce platform with custom product configurator and team management features.",
      image: "/lovable-uploads/98e24c9b-c439-4ff3-ad7d-14da8a0fd295.png",
      tech: ["React", "E-commerce", "PayPal", "AWS"]
    },
    {
      id: 7,
      title: "Metronic Meetings",
      description: "Enterprise meeting management system with calendar integration, recording capabilities, and team collaboration.",
      image: "/lovable-uploads/ac096711-ba50-44de-86d8-880bdf2d2bdb.png",
      tech: ["Angular", "TypeScript", "WebRTC", "Calendar API"]
    },
    {
      id: 8,
      title: "NeuroFlow Voting System",
      description: "Blockchain-based voting platform ensuring transparency, security, and real-time vote tracking with smart contracts.",
      image: "/lovable-uploads/66971ad8-7866-4464-88ce-cbec662e1adb.png",
      tech: ["React", "Solidity", "Web3.js", "Blockchain"]
    }
  ];

  // Tech stack data
  const techStacks = [
    {
      category: "Frontend & Mobile UI",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["Next.js", "React", "Angular", "Vue 3", "Flutter", "React Native", "Kotlin", "Swift"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend & APIs",
      icon: <Code className="w-6 h-6" />,
      technologies: ["Node.js", "Express", "NestJS", "Django", "FastAPI", "PHP Laravel", "Java Spring Boot"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Databases & Streaming",
      icon: <Database className="w-6 h-6" />,
      technologies: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Amazon RDS", "Apache Kafka"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      technologies: ["GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Terraform", "AWS", "GCP", "Azure"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "AI / ML",
      icon: <Cpu className="w-6 h-6" />,
      technologies: ["OpenAI", "spaCy", "TensorFlow", "PyTorch", "scikit-learn"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      category: "Blockchain",
      icon: <Zap className="w-6 h-6" />,
      technologies: ["Solidity", "Web3.js", "Hardhat", "BSC"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText('tmajeed55@gmail.com');
      toast({
        title: "Email copied!",
        description: "tmajeed55@gmail.com has been copied to clipboard.",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the email manually.",
        variant: "destructive"
      });
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send email using EmailJS
      await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Talha Majeed'
      });
      
      // Clear form
      setFormData({ name: '', email: '', message: '' });
      
      // Confetti effect
      for (let i = 0; i < 50; i++) {
        createConfetti();
      }
      
      toast({
        title: "Message sent! 🎉",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
    } catch (err) {
      console.error('Email sending failed:', err);
      toast({
        title: "Failed to send message",
        description: error || "Please try again later or contact me directly.",
        variant: "destructive"
      });
    }
  };

  const createConfetti = () => {
    const confetti = document.createElement('div');
    confetti.className = 'fixed w-2 h-2 rounded-full z-50 pointer-events-none';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '100vh';
    confetti.style.animation = 'confetti 3s ease-out forwards';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear any previous errors when user starts typing
    if (error) {
      clearError();
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 hero-gradient animate-gradient-shift" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
            Hi, I'm <span className="text-charcoal">Talha Majeed</span> — I craft AI-powered experiences.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Turning ambitious ideas into pixel-perfect products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
            <a 
              href="mailto:tmajeed55@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg group transition-colors"
            >
              <Mail className="w-5 h-5" />
              tmajeed55@gmail.com
              <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <button
              onClick={handleEmailCopy}
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
              title="Copy email"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
          <Button onClick={scrollToContact} className="btn-primary">
            Let's talk
          </Button>
        </div>
      </section>

      {/* About Me Section */}
      <section 
        id="about" 
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-charcoal">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer and AI enthusiast with over 5 years of experience 
                crafting digital solutions that make a difference. From building scalable web applications 
                to integrating cutting-edge AI technologies, I love turning complex challenges into 
                elegant, user-friendly experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-primary">50+</h3>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold text-primary">5+</h3>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center animate-float">
                <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
                  <Code className="w-24 h-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Builds Section */}
      <section 
        id="projects" 
        data-animate
        className={`py-20 px-6 bg-muted/30 transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-charcoal mb-16">Featured Builds</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className={`card-glass cursor-pointer transition-all duration-500 stagger-child hover:scale-105`}
                style={{ '--stagger-delay': index } as React.CSSProperties}
                onClick={() => setSelectedProject(project.id)}
              >
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-t-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-charcoal mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 2).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section 
        id="tech" 
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${isVisible.tech ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-charcoal mb-16">Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStacks.map((stack, index) => (
              <Card 
                key={stack.category}
                className={`card-glass stagger-child`}
                style={{ '--stagger-delay': index } as React.CSSProperties}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stack.color} flex items-center justify-center text-white mb-4`}>
                    {stack.icon}
                  </div>
                  <h3 className="font-semibold text-charcoal mb-4">{stack.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        data-animate
        className={`py-20 px-6 bg-muted/30 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-charcoal mb-16">Let's Work Together</h2>
          <Card className="card-glass">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name" 
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                  <Input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com" 
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full btn-primary group"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">
                  Prefer email? 
                </p>
                <button
                  onClick={handleEmailCopy}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold group transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  tmajeed55@gmail.com
                  <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <Card 
            className="max-w-2xl w-full card-glass animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent className="p-0">
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                return project ? (
                  <>
                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-t-lg overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-charcoal mb-4">{project.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button variant="outline" className="flex-1">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                        <Button className="flex-1 btn-primary">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </>
                ) : null;
              })()}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Portfolio;