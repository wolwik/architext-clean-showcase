const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="arch-heading">
            Alex Chen Architecture
          </div>
          
          <div className="hidden md:flex space-x-12">
            <a href="#work" className="arch-heading hover:text-warm-accent transition-smooth">
              Work
            </a>
            <a href="#about" className="arch-heading hover:text-warm-accent transition-smooth">
              About
            </a>
            <a href="#contact" className="arch-heading hover:text-warm-accent transition-smooth">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;