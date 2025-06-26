pipeline {
  agent any

  stages {
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t nodeapp:latest .'
      }
    }

    stage('Configure Kubeconfig') {
      steps {
        sh 'mkdir -p $HOME/.kube'
        sh 'cp /tmp/kubeconfig.yaml $HOME/.kube/config'
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
