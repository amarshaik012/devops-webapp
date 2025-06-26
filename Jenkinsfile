pipeline {
  agent any
  environment {
    KUBECONFIG = '/root/.kube/config'
  }
  stages {
    stage('Setup Minikube Docker Env') {
      steps {
        script {
          def minikubeEnv = sh(script: 'minikube docker-env', returnStdout: true).trim()
          sh "echo '${minikubeEnv}' > minikube_env.sh"
          sh 'source minikube_env.sh'
        }
      }
    }

    stage('Build Docker Image in Minikube') {
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
