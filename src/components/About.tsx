const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="arch-heading mb-6 text-muted-foreground">
              About the Practice
            </h2>
            <div className="arch-title text-4xl md:text-5xl mb-8">
              Architecture as<br />
              Essential Poetry
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed font-inter">
              <p>
                Founded in 2018, our practice explores the fundamental relationship between 
                built form and human experience. We believe architecture should be both 
                contextually responsive and emotionally resonant.
              </p>
              <p>
                Our approach combines rigorous conceptual thinking with careful attention 
                to materiality, creating spaces that feel both timeless and deeply contemporary.
              </p>
              <p>
                Each project begins with an understanding of place, purpose, and the 
                unique stories that will unfold within the spaces we create.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="arch-heading mb-3 text-foreground">Recognition</h3>
              <div className="space-y-2 text-muted-foreground font-inter">
                <p>AIA Young Architects Award, 2023</p>
                <p>Dezeen Awards Finalist, 2022</p>
                <p>Architectural Review House Award, 2021</p>
              </div>
            </div>
            
            <div>
              <h3 className="arch-heading mb-3 text-foreground">Education</h3>
              <div className="space-y-2 text-muted-foreground font-inter">
                <p>Master of Architecture, Harvard GSD</p>
                <p>Bachelor of Architecture, MIT</p>
              </div>
            </div>
            
            <div>
              <h3 className="arch-heading mb-3 text-foreground">Philosophy</h3>
              <p className="text-muted-foreground font-playfair italic text-lg leading-relaxed">
                "Architecture is a conversation between the built and unbuilt, 
                the solid and void, the permanent and ephemeral."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;