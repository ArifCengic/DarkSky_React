pipeline {
    agent any
    
    stages {
        stage('Test') {
            
            steps {           
                step([$class: 'CxScanBuilder', 
                      comment: '', 
                      credentialsId: '', 
                      excludeFolders: '', 
                      excludeOpenSourceFolders: '', 
                      exclusionsSetting: 'global', 
                      failBuildOnNewResults: false, 
                      failBuildOnNewSeverity: 'HIGH', 
                      filterPattern: '''!**/_cvs/**/*, !**/.svn/**/*,   !**/.hg/**/*,   !**/.git/**/*,  !**/.bzr/**/*, !**/bin/**/*,
!**/obj/**/*,  !**/backup/**/*, !**/.idea/**/*, !**/*.DS_Store, !**/*.ipr,     !**/*.iws,
!**/*.bak,     !**/*.tmp,       !**/*.aac,      !**/*.aif,      !**/*.iff,     !**/*.m3u, !**/*.mid, !**/*.mp3,
!**/*.mpa,     !**/*.ra,        !**/*.wav,      !**/*.wma,      !**/*.3g2,     !**/*.3gp, !**/*.asf, !**/*.asx,
!**/*.avi,     !**/*.flv,       !**/*.mov,      !**/*.mp4,      !**/*.mpg,     !**/*.rm,  !**/*.swf, !**/*.vob,
!**/*.wmv,     !**/*.bmp,       !**/*.gif,      !**/*.jpg,      !**/*.png,     !**/*.psd, !**/*.tif, !**/*.swf,
!**/*.jar,     !**/*.zip,       !**/*.rar,      !**/*.exe,      !**/*.dll,     !**/*.pdb, !**/*.7z,  !**/*.gz,
!**/*.tar.gz,  !**/*.tar,       !**/*.gz,       !**/*.ahtm,     !**/*.ahtml,   !**/*.fhtml, !**/*.hdm,
!**/*.hdml,    !**/*.hsql,      !**/*.ht,       !**/*.hta,      !**/*.htc,     !**/*.htd, !**/*.war, !**/*.ear,
!**/*.htmls,   !**/*.ihtml,     !**/*.mht,      !**/*.mhtm,     !**/*.mhtml,   !**/*.ssi, !**/*.stm,
!**/*.stml,    !**/*.ttml,      !**/*.txn,      !**/*.xhtm,     !**/*.xhtml,   !**/*.class, !**/*.iml, !Checkmarx/Reports/*.*''', 
                      fullScanCycle: 10, 
                      generateXmlReport: false, 
                      groupId: '00000000-1111-1111-b111-989c9070eb11', 
                      includeOpenSourceFolders: '', 
                      osaArchiveIncludePatterns: '*.zip, *.war, *.ear, *.tgz', 
                      osaInstallBeforeScan: false, 
                      password: '{AQAAABAAAAAQKPDfLRwhhS+Fzo2c+WqiBZ64zbh0SIvD+qbhvusJ8jQ=}', 
                      preset: '36', projectName: 'CekMarx Again', 
                      sastEnabled: true, 
                      serverUrl: 'https://ngs.checkmarx.net', 
                      sourceEncoding: '1', 
                      username: '', 
                      vulnerabilityThresholdResult: 'FAILURE', 
                      waitForResultsEnabled: true])
                
        }
    }
    
}
