const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="arch-heading mb-8 text-muted-foreground">
          Architecture Studio
        </div>
        
        <h1 className="arch-title mb-8">
          Creating Spaces<br />
          That Inspire
        </h1>
        
        <p className="arch-subtitle max-w-2xl mx-auto mb-12">
          Minimalist architecture focused on the intersection of form, function, and human experience.
          Every project tells a story through carefully considered spaces.
        </p>
        
        <div className="flex justify-center">
          <a 
            href="#work" 
            className="arch-heading px-8 py-4 border border-foreground hover:bg-foreground hover:text-background transition-smooth"
          >
            View Selected Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;