FROM jenkins/jenkins:lts

USER root

RUN apt-get update && apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    sudo \
    docker.io \
 && curl -LO https://dl.k8s.io/release/v1.29.4/bin/linux/amd64/kubectl \
 && install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl \
 && curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 \
 && install minikube /usr/local/bin/ \
 && rm -f kubectl minikube

RUN usermod -aG docker jenkins

