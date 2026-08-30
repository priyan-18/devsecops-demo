🛡️ DevSecOps Security Pipeline

A practical CI/CD security implementation that integrates automated security testing into the software development lifecycle using GitHub Actions.

This project demonstrates how security controls can be integrated into CI/CD to identify vulnerabilities early in the development and delivery process.

The implementation covers:

🔎 Static Application Security Testing (SAST)

🔐 Secret detection

📦 Dependency vulnerability scanning

🐳 Docker image building

🔍 Container vulnerability scanning

🌐 Dynamic Application Security Testing (DAST)

📦 Container image publishing

🔐 Security Architecture

Developer
    │
    ▼
Pull Request / Push
    │
    ▼
GitHub Actions
    │
    ├───────────────┬────────────────┬───────────────┐
    ▼               ▼                ▼
 Semgrep        TruffleHog       npm audit
  SAST        Secret Scanning    Dependencies
    │               │                │
    └───────────────┴────────────────┘
                    │
                    ▼
              Docker Build
                    │
                    ▼
              Trivy Image Scan
                    │
                    ▼
             OWASP ZAP (DAST)
                    │
                    ▼
           Security Validation
                    │
                    ▼
           GitHub Container Registry

The security checks are implemented as separate GitHub Actions workflows, each responsible for a specific stage of the CI/CD security process.

🛡️ Security Controls

Security Control

Tool

Purpose

SAST

Semgrep

Identify security issues in source code

Secret Scanning

TruffleHog

Detect exposed credentials and secrets

Dependency Scanning

npm audit

Identify vulnerable npm dependencies

Containerization

Docker

Build the application container

Container Security

Trivy

Scan container images for vulnerabilities

DAST

OWASP ZAP

Test the running application for web vulnerabilities

CI/CD Automation

GitHub Actions

Automate security validation

Container Registry

GitHub Container Registry

Store container images

⚙️ GitHub Actions Workflows

The repository contains five dedicated workflows.

01 — PR Security

File: .github/workflows/01-pr-security.yml

Performs security checks for pull requests targeting the main branch.

Checks:

Semgrep

TruffleHog

npm audit

The workflow is designed to identify security issues before changes are merged.

02 — Docker Build

File: .github/workflows/02-docker-build.yml

Builds the application into a Docker container image.

This validates that the application can be successfully containerized as part of the CI/CD process.

03 — Trivy Image Scan

File: .github/workflows/03-image-scan.yml

Scans the Docker image using Trivy to identify known vulnerabilities in the container environment.

04 — OWASP ZAP Baseline Scan

File: .github/workflows/04-zap.yml

Performs automated Dynamic Application Security Testing against the running application using OWASP ZAP.

This provides security testing at the application runtime layer.

05 — Publish Image to GHCR

File: .github/workflows/05-release.yml

Publishes the application container image to GitHub Container Registry as part of the release workflow.

🧪 Security Testing

The repository includes intentionally vulnerable scenarios to demonstrate how security tools detect issues during CI/CD.

The testing lifecycle follows:

Vulnerable Code
      │
      ▼
Pull Request
      │
      ▼
Security Checks
      │
      ▼
Finding Detected
      │
      ▼
Pipeline Failure
      │
      ▼
Remediation
      │
      ▼
Re-run Pipeline
      │
      ▼
Security Checks Pass

This demonstrates the shift-left security principle by identifying security issues during development rather than waiting until after deployment.

📊 Pipeline Evidence

The project has GitHub Actions runs demonstrating both successful workflows and intentionally triggered security failures.

Evidence includes:

✅ Successful PR security checks

❌ Intentional security test failures

🔎 Semgrep scanning

🔐 Secret scanning

📦 Dependency scanning

🐳 Docker image builds

🔍 Trivy image scanning

🌐 OWASP ZAP scanning

📦 Container image publishing

Screenshots and detailed findings will be documented here as the project is further developed.

🚀 Getting Started

Prerequisites

Install the following:

Git

Node.js

npm

Docker

Clone the Repository

git clone https://github.com/priyan-18/devsecops-demo.git
cd devsecops-demo

Install Dependencies

npm ci

Run the Application

npm start

🐳 Docker

Build the Image

docker build -t devsecops-demo .

Run the Container

docker run -p 3000:3000 devsecops-demo

The application will be available at:

http://localhost:3000

📁 Project Structure

devsecops-demo/
│
├── .github/
│   └── workflows/
│       ├── 01-pr-security.yml
│       ├── 02-docker-build.yml
│       ├── 03-image-scan.yml
│       ├── 04-zap.yml
│       └── 05-release.yml
│
├── Dockerfile
├── package.json
├── package-lock.json
├── server.js
└── .gitignore

🎯 Project Objectives

Integrate security into CI/CD

Automate security testing

Detect vulnerabilities early in development

Detect exposed secrets

Identify vulnerable dependencies

Scan container images

Perform automated web application security testing

Introduce repeatable security validation

Demonstrate practical DevSecOps implementation

🔎 DevSecOps Approach

Traditional Development

Code
  ↓
Build
  ↓
Deploy
  ↓
Security Testing

DevSecOps

Code
  ↓
SAST
  ↓
Secret Scanning
  ↓
Dependency Scanning
  ↓
Docker Build
  ↓
Container Scanning
  ↓
DAST
  ↓
Validated Release

Security controls are introduced throughout the software delivery lifecycle to reduce the risk of vulnerabilities reaching later stages.

📈 Future Improvements

SBOM generation

Automated dependency updates

Container image signing

Security dashboards

Artifact verification

Advanced deployment security gates

Cloud security integration

Centralized vulnerability tracking

💡 Skills Demonstrated

GitHub Actions DevSecOps CI/CD Security SAST DAST

Semgrep TruffleHog npm audit Docker Trivy

OWASP ZAP GitHub Container Registry

👨‍💻 Author

Priyadharshan S

Cybersecurity | Cloud Security | DevSecOps

GitHub
