pipeline {
  agent any
  stages {
    stage('Build Docker in Minikube') {
      steps {
        sh 'eval $(minikube docker-env)'
        sh 'docker build -t nodeapp:latest .'
      }
    }
    stage('Deploy to K8s') {
      steps {
        sh 'kubectl apply -f k8s/deployment.yaml'
        sh 'kubectl apply -f k8s/service.yaml'
      }
    }
  }
}
