pipeline {
    agent any

    environment {
<<<<<<< HEAD
        DOCKER_USER = "amar0126" // ✅ Your correct DockerHub username
        IMAGE_NAME = "${DOCKER_USER}/devops-webapp:latest"
=======
        DOCKER_IMAGE = "nodeapp:latest"
>>>>>>> ad3f53c (✅ Update Jenkinsfile and kubeconfig)
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
<<<<<<< HEAD
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
=======
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Push Docker Image (Optional)') {
            when {
                expression { return false } // Enable when needed
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        docker tag $DOCKER_IMAGE $DOCKER_USER/nodeapp:latest
                        docker push $DOCKER_USER/nodeapp:latest
                    '''
                }
            }
        }

        stage('Check Kubernetes Cluster') {
            steps {
                sh '''
                    export KUBECONFIG=$WORKSPACE/kubeconfig.yaml
                    kubectl cluster-info
                '''
>>>>>>> ad3f53c (✅ Update Jenkinsfile and kubeconfig)
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
<<<<<<< HEAD
                echo "🚀 Deploying to Kubernetes..."
                sh 'kubectl apply -f k8s/deployment.yaml'
                sh 'kubectl rollout status deployment/nodeapp-deployment'
            }
        }

        stage('Check Pods') {
            steps {
                echo "🔍 Verifying pod status..."
                sh 'kubectl get pods -o wide'
=======
                sh '''
                    export KUBECONFIG=$WORKSPACE/kubeconfig.yaml
                    kubectl apply -f k8s/
                '''
>>>>>>> ad3f53c (✅ Update Jenkinsfile and kubeconfig)
            }
        }
    }

    post {
<<<<<<< HEAD
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed. Check the logs above.'
        }
=======
        failure {
            echo '❌ Pipeline failed.'
        }
        success {
            echo '✅ Deployment successful!'
        }
>>>>>>> ad3f53c (✅ Update Jenkinsfile and kubeconfig)
    }
}
