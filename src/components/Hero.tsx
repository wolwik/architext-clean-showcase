const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Golden ratio grid: 61.8% / 38.2% split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Main content - 61.8% of space (3/5 columns) */}
          <div className="lg:col-span-3 lg:pr-16">
            <div className="arch-heading mb-6 text-muted-foreground">
              Architecture Studio
            </div>
            
            <h1 className="arch-title mb-8 leading-tight">
              Creating Spaces<br />
              That Inspire<br />
              Human Connection
            </h1>
            
            <div className="max-w-lg">
              <p className="arch-subtitle mb-8 leading-relaxed">
                Minimalist architecture focused on the intersection of form, function, 
                and human experience. Every project tells a story through carefully 
                considered spaces.
              </p>
              
              <a 
                href="#work" 
                className="arch-heading px-8 py-4 border border-foreground hover:bg-foreground hover:text-background transition-smooth inline-block"
              >
                View Selected Work
              </a>
            </div>
          </div>
          
          {/* Secondary content - 38.2% of space (2/5 columns) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Philosophy quote */}
            <blockquote className="border-l-2 border-warm-accent pl-6">
              <p className="font-playfair text-lg italic text-muted-foreground leading-relaxed">
                "Architecture is a conversation between the built and unbuilt, 
                the solid and void, the permanent and ephemeral."
              </p>
              <cite className="arch-heading mt-4 block text-foreground">
                — Alex Chen
              </cite>
            </blockquote>
            
            {/* Quick stats */}
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-playfair font-light text-foreground">50+</div>
                <div className="arch-heading text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-light text-foreground">8</div>
                <div className="arch-heading text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-light text-foreground">15</div>
                <div className="arch-heading text-muted-foreground">Awards Received</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;