pipeline {
    agent any

    environment {
        DOCKER_USER = "amar0126"
        IMAGE_NAME = "${DOCKER_USER}/devops-webapp:${BUILD_NUMBER}"
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
                    echo "📤 Logging in and pushing image to Docker Hub..."
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

        stage('Update Image in Deployment') {
            steps {
                echo "📝 Updating image in deployment manifest..."
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

        stage('Verify Pods') {
            steps {
                echo "🔍 Verifying running pods..."
                sh 'kubectl get pods -o wide'
            }
        }
    }

    post {
        success {
            echo '✅ Deployment completed successfully!'
        }
        failure {
            echo '❌ Deployment failed. Check logs for details.'
        }
    }
}
