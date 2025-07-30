const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="arch-heading mb-6 text-muted-foreground">
            Start a Conversation
          </h2>
          <div className="arch-title text-4xl md:text-5xl mb-8">
            Let's Create<br />
            Something Meaningful
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="arch-heading mb-4 text-foreground">Studio</h3>
            <div className="text-muted-foreground space-y-1">
              <p>123 Design District</p>
              <p>San Francisco, CA 94103</p>
            </div>
          </div>
          
          <div>
            <h3 className="arch-heading mb-4 text-foreground">Contact</h3>
            <div className="text-muted-foreground space-y-1">
              <p>hello@alexchen.arch</p>
              <p>+1 (415) 555-0123</p>
            </div>
          </div>
          
          <div>
            <h3 className="arch-heading mb-4 text-foreground">Follow</h3>
            <div className="text-muted-foreground space-y-1">
              <p>Instagram</p>
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="mailto:hello@alexchen.arch" 
            className="arch-heading px-8 py-4 border border-foreground hover:bg-foreground hover:text-background transition-smooth inline-block"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;