import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    id: 1,
    title: "Concrete Pavilion",
    category: "Cultural",
    year: "2024",
    image: project1,
    description: "A meditation space exploring the relationship between light and shadow through raw concrete forms."
  },
  {
    id: 2,
    title: "Forest Residence",
    category: "Residential",
    year: "2023",
    image: project2,
    description: "A minimalist home that dissolves the boundary between interior and exterior spaces."
  },
  {
    id: 3,
    title: "Urban Monument",
    category: "Public",
    year: "2023",
    image: project3,
    description: "A monolithic structure celebrating the power and poetry of architectural mass."
  },
  {
    id: 4,
    title: "Glass Tower",
    category: "Commercial",
    year: "2022",
    image: project4,
    description: "A transparent facade that reflects the dynamic energy of the urban environment."
  }
];

const ProjectGrid = () => {
  return (
    <section id="work" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="arch-heading mb-4 text-muted-foreground">
            Selected Work
          </h2>
          <div className="arch-title text-4xl md:text-6xl">
            Recent Projects
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="project-card group cursor-pointer">
              <div className="relative overflow-hidden bg-muted mb-6" style={{ aspectRatio: '16/9' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-playfair font-light">{project.title}</h3>
                  <span className="arch-heading text-muted-foreground">{project.year}</span>
                </div>
                
                <p className="arch-heading text-warm-accent">{project.category}</p>
                <p className="text-muted-foreground leading-relaxed font-inter">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;