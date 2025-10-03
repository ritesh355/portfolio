import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const projects = [
 
 {
  title: "Static Website Hosting with AWS S3 + CloudFront + CI/CD",
  description:
    "A static website hosted on AWS S3 with CloudFront as CDN and automated deployment via GitHub Actions.",
  technologies: ["AWS S3", "CloudFront", "GitHub Actions", "CI/CD"],
  github: "https://github.com/ritesh355/static-website-cicd", // replace with your repo link
  blog: "https://ritesh-devops.hashnode.dev/static-website-cicd", // replace with your blog link if you write one
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

