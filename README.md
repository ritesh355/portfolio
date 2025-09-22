# 🚀 Next.js Portfolio – DevOps Ready

This is my **personal portfolio project** built with **Next.js**, containerized with **Docker**, deployed on **AWS EC2 (Free Tier)**, and automated with **GitHub Actions CI/CD** + **Terraform** for Infrastructure as Code.

It demonstrates both **frontend skills (React/Next.js)** and **DevOps practices (CI/CD, Docker, Cloud, IaC)**.  

## ⚡ Workflow

![Workflow Diagram](./assets/workflow.png)

flowchart LR
  A[GitHub Repo] -->|Push code| B[GitHub Actions]
  B --> C[Build & Test Next.js]
  C --> D[Build Docker Image]
  D --> E[Push to DockerHub]
  E --> F[SSH to AWS EC2]
  F --> G[Pull latest image]
  G --> H[Restart container]
  H --> I[Portfolio Live 🚀]

---

## 📑 Table of Contents
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [⚡ Workflow](#-workflow)
- [💻 Run Locally](#-run-locally)
- [📦 Docker Setup](#-docker-setup)
- [☁️ Deployment on AWS EC2](#️-deployment-on-aws-ec2)
- [🤖 GitHub Actions CI/CD](#-github-actions-cicd)
- [🧩 Terraform for Infrastructure](#-terraform-for-infrastructure)
- [📸 Screenshots](#-screenshots)
- [👨‍💻 Author](#-author)

---

## ✨ Features
- ⚛️ Modern portfolio built with **Next.js** (SSR + React 18).
- 📱 Responsive design for desktop & mobile.
- 🐳 Fully **Dockerized** (multi-stage build, production optimized).
- ☁️ Deployed on **AWS EC2 Free Tier**.
- 🔄 Automated **CI/CD pipeline** with GitHub Actions:
  - Runs tests (`npm run build`).
  - Builds and pushes Docker image to DockerHub.
  - SSH into EC2 and redeploys automatically.
- 📜 Infrastructure automated with **Terraform**.

---

## 🛠️ Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS  
- **Containerization**: Docker, DockerHub  
- **CI/CD**: GitHub Actions  
- **Cloud**: AWS EC2 (Ubuntu 22.04, Free Tier)  
- **IaC**: Terraform  

---

## 📂 Project Structure 

![Workflow Diagram](./assets/folder.png)



