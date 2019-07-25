pipeline {
    agent any
    
    stages {
        stage('Test') {
            
            steps {           
                
                step([$class: 'CxScanBuilder', comment: 'Lalllll alllalal lalala', credentialsId: '', excludeFolders: '', excludeOpenSourceFolders: '', exclusionsSetting: 'global', failBuildOnNewResults: false, failBuildOnNewSeverity: 'HIGH', filterPattern: '', fullScanCycle: 10, includeOpenSourceFolders: '', osaArchiveIncludePatterns: '*.zip, *.war, *.ear, *.tgz', osaInstallBeforeScan: false, password: '{AQAAABAAAAAQxv33DcnfsDqiF0VHqA0fTWSzRD/0DcyPaums62SMQ4M=}', projectName: 'test CheckMarx', sastEnabled: true, serverUrl: '', sourceEncoding: 'Provide Checkmarx server credentials to see source encodings list', username: '', vulnerabilityThresholdResult: 'FAILURE', waitForResultsEnabled: true])
            }
        }
    }
    post {
    failure {
      slackSend channel: '#acengic_c',
        color: 'danger',
        message: "Build Failed: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Build Info>)"
    }
    success {
      slackSend channel: '##acengic_c',
        color: 'good',
        message: "Build Successful: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Build Info>)"
    }
  }
}
