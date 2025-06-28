pipeline {
    agent any

    environment {
        IMAGE_NAME = "nodeapp:latest"
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo "Cloning repo..."
                git branch: 'main', url: 'https://github.com/amarshaik012/devops-webapp.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Validate Kubernetes Access') {
            steps {
                echo "Checking Kubernetes cluster status..."
                sh 'kubectl version --short'
                sh 'kubectl cluster-info'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo "Applying Kubernetes manifest..."
                sh 'kubectl apply -f k8s/deployment.yaml'
                sh 'kubectl rollout status deployment/nodeapp-deployment'
            }
        }

        stage('Verify Pods') {
            steps {
                echo "Listing pods to verify deployment..."
                sh 'kubectl get pods -o wide'
            }
        }
    }

    post {
        failure {
            echo '❌ Build failed!'
        }
        success {
            echo '✅ Deployment complete!'
        }
    }
}
