pipeline {
  agent any
  environment {
    KUBECONFIG = '/root/.kube/config'
  }
  stages {
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t nodeapp:latest .'
      }
    }
    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/deployment.yaml'
        sh 'kubectl apply -f k8s/service.yaml'
      }
    }
  }
}
