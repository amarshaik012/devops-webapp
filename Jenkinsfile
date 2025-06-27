pipeline {
    agent any

    environment {
        KUBECONFIG = "${HOME}/.kube/config"
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/amarshaik012/devops-webapp.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodeapp:latest .'
            }
        }

        stage('Check Cluster Info') {
            steps {
                sh 'kubectl cluster-info'
            }
        }

        stage('Deploy to K8s') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
            }
        }
    }
}
