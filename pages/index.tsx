import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { motion, easeOut } from "framer-motion"; // Updated import to include easeOut

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ritesh Singh | DevOps Portfolio</title>
        <meta
          name="description"
          content="DevOps Engineer portfolio showcasing CI/CD, Docker, Kubernetes, and Cloud projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <Hero />
       
        {/* Featured Projects */}
        <section className="relative bg-[#F3F4F6] text-[#1F2937] py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-12">🚀 Featured Projects</h2>

          <motion.div
            className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10"
            variants={container}
            initial="hidden"
            animate="visible"
          > 
            <motion.div variants={item}>
  <ProjectCard
    title="AWS Projects Hub"
    description="A collection of hands-on AWS projects from beginner to advanced. Includes EC2, S3, IAM, VPC, RDS, Lambda, and CI/CD for real-world cloud learning."
    technologies={["AWS", "EC2", "S3", "IAM", "VPC", "RDS", "Lambda", "CloudFront", "CodePipeline"]}
    github="https://github.com/ritesh355/aws-projects"
    blog="https://ritesh-devops.hashnode.dev"
  />
</motion.div>

            <motion.div variants={item}>
              <ProjectCard
                title="CI/CD Pipeline for webapp"
                description="Built a fully automated pipeline using Jenkins, Docker, and Kubernetes for seamless deployments."
                technologies={["Jenkins", "Docker", "Kubernetes", "AWS"]}
                github="https://github.com/ritesh355/flask-ci-cd-demo"
                blog="https://ritesh-devops.hashnode.dev/day-40-cicd-with-flask-docker-github-actions-100daysofdevops"
              />
            </motion.div>

            <motion.div variants={item}>
              <ProjectCard
                title="Weather App Deployment"
                description="Deployed a scalable Flask + Nginx application on Docker Compose with monitoring enabled."
                technologies={["Flask", "Docker", "Nginx", "Prometheus"]}
                github="https://github.com/ritesh355/weather-app"
                blog="https://ritesh-devops.hashnode.dev/day-30-weather-app-dockerized-flask-nginx"
              />
            </motion.div>
          </motion.div>

          {/* View All Projects Button */}
  <div className="text-center mt-14">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/projects"
                className="inline-block bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-[#1F2937] font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                View All Projects →
              </Link>
              <Link
                href="/skills"
                className="inline-block bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-[#1F2937] font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                View Skills →
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-[#1F2937] font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact Me →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
