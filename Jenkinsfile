pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/shivam2k15/RedGreenRefactor.git'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        steps('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}