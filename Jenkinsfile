pipeline {
    agent {
        docker { image 'node' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
            step([$class: 'CxScanBuilder', comment: 'Lalllll alllalal lalala', credentialsId: '', excludeFolders: '', excludeOpenSourceFolders: '', exclusionsSetting: 'global', failBuildOnNewResults: false, failBuildOnNewSeverity: 'HIGH', filterPattern: '', fullScanCycle: 10, includeOpenSourceFolders: '', osaArchiveIncludePatterns: '*.zip, *.war, *.ear, *.tgz', osaInstallBeforeScan: false, password: '{AQAAABAAAAAQxv33DcnfsDqiF0VHqA0fTWSzRD/0DcyPaums62SMQ4M=}', projectName: 'test CheckMarx', sastEnabled: true, serverUrl: '', sourceEncoding: 'Provide Checkmarx server credentials to see source encodings list', username: '', vulnerabilityThresholdResult: 'FAILURE', waitForResultsEnabled: true])
        }
    }
}
