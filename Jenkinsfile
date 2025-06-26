pipeline {
  agent any

  environment {
    KUBECONFIG = '/var/jenkins_home/.kube/config'
  }

  stages {
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t nodeapp:latest .'
      }
    }

    stage('Check Cluster Info') {
      steps {
        sh 'kubectl config use-context minikube'
        sh 'kubectl cluster-info'
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
