import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
   {
    id: 1,
    title: "Offline health declaration.",
    description: "Offline version of health declaration.",
    image: "/projects/android_kotlin.png",
    tags: ["Java", "Kotlin"],
    // demoUrl: "#",
    githubUrl: "https://github.com/jbsario/Online-Health-Declaration-android-offline-version-",
  },
  {
    id: 2,
    title: "XMove",
    description: " Delivery App",
    image: "https://private-user-images.githubusercontent.com/106648408/516293993-41cd1ece-4435-4efc-9349-c627858e0ed9.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Njc4Njg1MTksIm5iZiI6MTc2Nzg2ODIxOSwicGF0aCI6Ii8xMDY2NDg0MDgvNTE2MjkzOTkzLTQxY2QxZWNlLTQ0MzUtNGVmYy05MzQ5LWM2Mjc4NThlMGVkOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMTA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDEwOFQxMDMwMTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNzUzNzcyNzQyM2IxMzFlOGZhMzU2MjhmMGFlNmY0NjVmMDNlY2Y2ZWEwY2E3Yjg2MjE2NDcyM2Q3NzI3YWFjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.-jdE9MnIZQNlZ6sa1IiSZ2ZxeSXDxeHj5D6dDV5Ms18",
    tags: ["ReactJS","Vite"],
    // demoUrl: "#",
    githubUrl: "https://github.com/jbsario/Xmove_V2",
  },
  {
    id: 3,
    title: "Claims AI Insight Dashboard",
    description: "Private dashboard for insurance claims analysis using AI.",
    image: "https://tse1.mm.bing.net/th/id/OIP.O_wz2uPWprXluMZaflvsewHaDt?rs=1&pid=ImgDetMain&o=7&rm=3",
    tags: ["Open AI", "Laravel", "VueJS"],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 3,
    title: "Renovation timeline",
    description:
      "A modern house renovation project located in Phirst Park Batulao.",
    image: "https://res.cloudinary.com/dnlsg8f0j/image/upload/v1767868113/sss_bcqsys.png",
    tags: ["ReactJS", "Typescript", "HTML", "CSS"],
    demoUrl: "https://rnv-timeline.vercel.app/",
    githubUrl: "https://github.com/jbsario/rnv-timeline",
  },
  {
    id: 4,
    title: "Chile Crema",
    description:
      "Level up you spice",
    image: "https://res.cloudinary.com/dnlsg8f0j/image/upload/v1767868418/sssssss_jzam1r.png",
    tags: ["ReactJS", "Typescript", "HTML", "CSS"],
    demoUrl: "https://github.com/jbsario/chile-crema",
    githubUrl: "#",
  },
  // {
  //   id: 3,
  //   title: "E-commerce Platform",
  //   description:
  //     "Full-featured e-commerce platform with user authentication and payment processing.",
  //   image: "/projects/project3.png",
  //   tags: ["React", "Node.js", "Stripe"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

      <div className="text-center mb-12 max-w-2xl mx-auto">

  <p className="text-muted-foreground mt-2">
    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
  </p>
  <p className="text-sm text-gray-400 mt-4 italic">
    Please note that due to non-disclosure agreements, projects created during or under my previous employment cannot be publicly disclosed.
  </p>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/jbsario"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
