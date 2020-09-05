# ./Dockerfile (non production)
FROM fedora

RUN dnf update -y
RUN dnf install -y nodejs
RUN curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
RUN dnf install -y yarn
RUN dnf install -y graphviz
RUN dnf install -y java-latest-openjdk
RUN dnf install -y git
RUN yarn add gatsby-cli

WORKDIR /src

COPY package*.json ./

RUN yarn install

COPY . .
