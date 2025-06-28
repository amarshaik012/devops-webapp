pipeline {
    agent any

    environment {
        DOCKER_USER = "amar0126" // ✅ Your correct DockerHub username
        IMAGE_NAME = "${DOCKER_USER}/devops-webapp:latest"
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo "🔄 Cloning repository..."
                git branch: 'main', url: 'https://github.com/amarshaik012/devops-webapp.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "🐳 Building Docker image..."
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([string(credentialsId: 'docker-hub-pass', variable: 'DOCKER_PASS')]) {
                    echo "📤 Logging in and pushing Docker image..."
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker push $IMAGE_NAME'
                }
            }
        }

        stage('Validate Kubernetes Access') {
            steps {
                echo "🔐 Validating Kubernetes cluster access..."
                sh 'kubectl version --short'
                sh 'kubectl cluster-info'
            }
        }

        stage('Update Deployment Manifest') {
            steps {
                echo "📝 Updating image name in Kubernetes manifest..."
                sh 'sed -i "s|image:.*|image: $IMAGE_NAME|g" k8s/deployment.yaml'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo "🚀 Deploying to Kubernetes..."
                sh 'kubectl apply -f k8s/deployment.yaml'
                sh 'kubectl rollout status deployment/nodeapp-deployment'
            }
        }

        stage('Check Pods') {
            steps {
                echo "🔍 Verifying pod status..."
                sh 'kubectl get pods -o wide'
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed. Check the logs above.'
        }
    }
}
