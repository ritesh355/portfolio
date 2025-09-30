import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
  title: "AWS Projects Hub",
  description:
    "A collection of hands-on AWS projects from beginner to advanced. Includes EC2, S3, IAM, VPC, RDS, Lambda, and CI/CD for real-world cloud learning.",
  technologies: ["AWS", "EC2", "S3", "IAM", "VPC", "RDS", "Lambda", "CloudFront", "CodePipeline"],
  github: "https://github.com/ritesh355/aws-projects",
  blog: "https://ritesh-devops.hashnode.dev",
},
 
  {
    title: "Weather App",
    description:
      "A weather app with Flask backend, Docker, and Nginx reverse proxy deployment.",
    technologies: ["Flask", "Docker", "Nginx", "AWS"],
    github: "https://github.com/ritesh355/weather-app",
    blog: "https://ritesh-devops.hashnode.dev/weather-app",
  },
  {
    title: "CI/CD Pipeline for E-commerce",
    description:
      "Built a fully automated pipeline using Jenkins, Docker, and Kubernetes for seamless deployments.",
    technologies: ["Jenkins", "Docker", "Kubernetes", "AWS"],
    github: "https://github.com/ritesh355/ecommerce-cicd",
    blog: "https://ritesh-devops.hashnode.dev/cicd-ecommerce",
  },
  {
    title: "Monitoring with Prometheus & Grafana",
    description:
      "Implemented real-time monitoring and alerting for microservices using Prometheus and Grafana dashboards.",
    technologies: ["Prometheus", "Grafana", "Docker", "Kubernetes"],
    github: "https://github.com/ritesh355/monitoring",
    blog: "https://ritesh-devops.hashnode.dev/monitoring",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-20 pb-20 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">🚀 My Projects</h1>

        {/* Grid with 2 columns */}
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

