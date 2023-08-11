pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('docker') {
            steps {
                sh "docker run -it --entrypoint /bin/bash selenium/standalone-chrome:latest"
            }
        }

        // stage('run') {
        //     steps {
        //         npx "wdio run wdio.conf.js"
        //     }
        // }
    }
}