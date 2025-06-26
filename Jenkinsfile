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
        // Optional: create .kube directory if not exists
        sh 'mkdir -p $HOME/.kube'

        // Copy kubeconfig file into Jenkins container
        // Only needed if you manually copied it inside container to /tmp/kubeconfig.yaml
        sh 'cp /tmp/kubeconfig.yaml $HOME/.kube/config'

        // Verify cluster is accessible
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
