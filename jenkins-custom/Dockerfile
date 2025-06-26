FROM jenkins/jenkins:lts
USER root
RUN apt-get update && apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release sudo docker.io
RUN curl -Lo /usr/local/bin/minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 \
 && chmod +x /usr/local/bin/minikube
RUN curl -LO https://dl.k8s.io/release/v1.29.4/bin/linux/amd64/kubectl \
 && chmod +x kubectl && mv kubectl /usr/local/bin/
RUN usermod -aG docker jenkins
ENV PATH="/usr/local/bin:${PATH}"
