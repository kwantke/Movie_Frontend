node {
    def WORKSPACE = "/home/ubuntu/download/jenkins_workspace/workspace/Movie_Frontend"
    def dockerImageTag = "mymoive${env.BUILD_NUMBER}"
    def buildNumber = "${env.BUILD_NUMBER}"
    def dockerImageName = "mymovie"
    try {
        stage('Clone Repo') {
            //for display purposes
            //Get some code from a GitHub repository
            git url: 'https://github.com/kwantke/Movie_Frontend.git',
                branch: 'master'
        }
        stage('Build docker') {
            //build npm
            //sh "sudo npm run build"
            dockerImage = docker.build("mymovie:${env.BUILD_NUMBER}")
            //sh 'docker build -t springboot-deploy:${buildNumber} .'
        }
        stage('Deploy docker') {
            echo "Docker Image Tag Name: ${dockerImageTag}"
            sh "docker stop mymovie || true && docker rm mymovie || true"
            sh "docker run --name mymovie -d -p 3000:3000 mymovie:${env.BUILD_NUMBER}"
        }
    } catch(e){
        throw e
    }
}