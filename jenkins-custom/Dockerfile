FROM jenkins/jenkins:lts

USER root

<<<<<<< HEAD
RUN apt-get update && \
    apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release sudo docker.io && \
    curl -Lo /usr/local/bin/minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && \
    chmod +x /usr/local/bin/minikube && \
    curl -LO https://dl.k8s.io/release/v1.29.4/bin/linux/amd64/kubectl && \
    chmod +x kubectl && \
    mv kubectl /usr/local/bin/ && \
    usermod -aG docker jenkins && \
    rm -rf /var/lib/apt/lists/*

ENV PATH="/usr/local/bin:${PATH}"
=======
# Install Docker, kubectl, minikube
RUN apt-get update && apt-get install -y \
  apt-transport-https \
  ca-certificates \
  curl \
  software-properties-common \
  gnupg \
  lsb-release \
  docker.io && \
  curl -Lo /usr/local/bin/minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && \
  chmod +x /usr/local/bin/minikube && \
  curl -LO https://dl.k8s.io/release/v1.29.4/bin/linux/amd64/kubectl && \
  chmod +x kubectl && mv kubectl /usr/local/bin/ && \
  groupadd -g 998 docker || true && usermod -aG docker jenkins
>>>>>>> ad3f53c (✅ Update Jenkinsfile and kubeconfig)

USER jenkins
