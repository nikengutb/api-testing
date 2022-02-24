pipeline {
	agent any
	tools { nodejs "nodejs" }
	
	stages {
		stage('Tools initiated') {
			steps {
				sh 'npm -v'
				sh 'git --version'
			}
		}
		stage('Checkout code') {
			steps {
				git branch: 'main', url:'https://github.com/nikengutb/api-testing/'
			}
		}
		stage('Build') {
			steps {
				sh 'npm install'
				sh 'npm install jest'
				sh 'npm install pactum'
			}
		}
		stage('Unit Test') {
			steps {
				sh 'npx jest --coverage'
			}
		}
	}
}