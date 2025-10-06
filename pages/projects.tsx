import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const projects = [
 
  {
  title: "Static Website Hosting with AWS S3 + CloudFront + CI/CD",
  description:
    "A static website hosted on AWS S3 with CloudFront as CDN and automated deployment via GitHub Actions.",
  technologies: ["AWS S3", "CloudFront", "GitHub Actions", "CI/CD"],
  github: "https://github.com/ritesh355/MY-GALLERY-PROJECT", // replace with your repo link
  blog: "", // replace with your blog link if you write one
  },
 {
  title: "Jenkins CI/CD Pipeline with Docker & Node.js",
  description:
    "A Node.js app deployed with a Jenkins CI/CD pipeline on AWS EC2, using Docker for containerization and automated Docker Hub pushes.",
  technologies: ["Node.js", "Jenkins", "Docker", "AWS EC2", "Docker Hub"],
  github: "https://github.com/ritesh355/Docker-Jenkins-app",
  blog: "https://ritesh-devops.hashnode.dev/", // replace with exact blog link if you write one

  },
 
  {
  title: "CI/CD Pipeline for webapp",
  description:
    "Built a fully automated pipeline using Jenkins, Docker, and Kubernetes for seamless deployments.",
  technologies: ["Jenkins", "Docker", "Kubernetes", "AWS"],
  github: "https://github.com/ritesh355/flask-ci-cd-demo",
  blog: "https://ritesh-devops.hashnode.dev/day-40-cicd-with-flask-docker-github-actions-100daysofdevops",
},
 {
  title: "Weather App Deployment",
  description:
    "Deployed a scalable Flask + Nginx application on Docker Compose with monitoring enabled.",
  technologies: ["Flask", "Docker", "Nginx", "Prometheus"],
  github: "https://github.com/ritesh355/weather-app",
  blog: "https://ritesh-devops.hashnode.dev/day-30-weather-app-dockerized-flask-nginx",
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

