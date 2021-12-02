pipeline {
    agent {label 'dtravel-cloud-build-agent'}
    stages {

        stage('Config'){
            steps{
                script {
                    echo '=========== \033[0;31mConfig\033[0m Stage Start =============='
                    if (env.BRANCH_NAME == 'main') {
                        env.AWS_ACCOUNT_ID = '721942128124'
                        env.AWS_ECS_TASK_ROLE = 'TaskRole-dtravel-frontend-ui-staging'
                        env.AWS_ECS_TASK_EXECUTION_ROLE = 'ecsTaskExecutionRole'
                        env.AWS_ECS_SERVICE_NAME = 'S-dtravel-frontend-ui-staging'
                        env.AWS_ECS_TASK_FAMILY = 'td-dtravel-frontend-ui-staging'
                        env.AWS_ECS_CLUSTER_NAME = 'Cluster-dTravel-Staging'
                        env.AWS_ECS_CONTAINER_NAME = 'Container-dtravel-frontend-ui-staging'
                        env.AWS_APIKEY_VAR =
                        env.AWS_COMMON_VAR =
                        env.AWS_CMS_V2_VAR = 'dtravel-frontend-ui-staging-TNtZ8W'
                        env.CONTAINER_MEMORY = '2048'
                        env.CONTAINER_CPU = '1024'
                        env.ENV_DEPLOYMENT = "${env.BRANCH_NAME}"
                        env.AWS_REGION = "ap-southeast-1"
                        env.AWS_SECRET_NAME = "dtravel-frontend-ui-staging"
                        env.ECR_URL = "${env.AWS_ACCOUNT_ID}.dkr.ecr.ap-southeast-1.amazonaws.com"
                        env.ECR_REPOSITORY = "ecr-dtravel-frontend-ui-staging"
                    
                    echo '=========== \033[0;31mConfig\033[0m Stage End =============='
                }

            }
        }

        stage('Build Docker') {
            steps {
                echo '=========== \033[0;31mBuild Docker\033[0m Stage Start =============='
                sh "sudo DOCKER_BUILDKIT=1 docker build -t ${env.ECR_REPOSITORY} ."
                echo '=========== \033[0;31mBuild Docker\033[0m Stage End =============='
            }
        }

        stage('Clean') {
            steps {
                echo '=========== \033[0;31mClean\033[0m Stage Start =============='
                sh "sudo docker image prune -f"
                echo '=========== \033[0;31mClean\033[0m Stage End =============='
            }
        }

        stage('Revision') {
            steps {
                echo '=========== \033[0;31mRevision\033[0m Stage Start =============='
                sh "echo \"Build # ${env.BUILD_NUMBER}\" > revision.txt"
                echo '===========  \033[0;31mRevision\033[0m Stage End =============='
            }
        }



        stage('Push to ECR'){
            steps{
                echo '===========  \033[0;31mPush to ECR\033[0m Stage Start =============='
                sh "aws ecr get-login-password --region ap-southeast-1 | sudo docker login --username AWS --password-stdin ${env.ECR_URL}"
                sh "sudo docker tag ${env.ECR_REPOSITORY}:latest ${env.ECR_URL}/${env.ECR_REPOSITORY}:${env.BUILD_NUMBER}"
                sh "sudo docker push ${env.ECR_URL}/${env.ECR_REPOSITORY}:${env.BUILD_NUMBER}"
                sh "sudo docker rmi ${env.ECR_URL}/${env.ECR_REPOSITORY}:${env.BUILD_NUMBER}"
                echo '=========== \033[0;31mPush to ECR\033[0m Stage End =============='
            }
        }

        stage('Update staging'){
            steps{
                echo '=========== \033[0;31mUpdate staging\033[0m Stage Start =============='
                sh "sed -e 's/BUILD_NUMBER/${env.BUILD_NUMBER}/g;s/AWS_ACCOUNT_ID/${env.AWS_ACCOUNT_ID}/g;s/AWS_ECS_TASK_EXECUTION_ROLE/${env.AWS_ECS_TASK_EXECUTION_ROLE}/g;s/ENV_DEPLOYMENT/${env.ENV_DEPLOYMENT}/g;s/AWS_ECS_TASK_ROLE/${env.AWS_ECS_TASK_ROLE}/g;s/AWS_ECS_SERVICE_NAME/${env.AWS_ECS_SERVICE_NAME}/g;s/AWS_ECS_TASK_FAMILY/${env.AWS_ECS_TASK_FAMILY}/g;s/AWS_ECS_CLUSTER_NAME/${env.AWS_ECS_CLUSTER_NAME}/g;s/AWS_COMMON_VAR/${env.AWS_COMMON_VAR}/g;s/AWS_APIKEY_VAR/${env.AWS_APIKEY_VAR}/g;s/CONTAINER_CPU/${env.CONTAINER_CPU}/g;s/CONTAINER_MEMORY/${env.CONTAINER_MEMORY}/g;s/ECR_URL/${env.ECR_URL}/g;s/ECR_REPOSITORY/${env.ECR_REPOSITORY}/g;s/AWS_ECS_CONTAINER_NAME/${env.AWS_ECS_CONTAINER_NAME}/g;s/AWS_CMS_V2_VAR/${env.AWS_CMS_V2_VAR}/g'  deployment/task-definition.json > dtravel-frontend-ui-task-def-v_${env.BUILD_NUMBER}.json"
                sh "aws ecs register-task-definition --region ap-southeast-1 --cli-input-json file://dtravel-frontend-ui-task-def-v_${env.BUILD_NUMBER}.json"
                sh "sed -e 's/AWS_ECS_SERVICE_NAME/${env.AWS_ECS_SERVICE_NAME}/g;s/AWS_ECS_TASK_FAMILY/${env.AWS_ECS_TASK_FAMILY}/g;s/AWS_ACCOUNT_ID/${env.AWS_ACCOUNT_ID}/g;s/AWS_ECS_CLUSTER_NAME/${env.AWS_ECS_CLUSTER_NAME}/g' deployment/ecs-update-service.sh > dtravel-ecs-update-service-v_${env.BUILD_NUMBER}.sh"
                sh "sudo chmod +x ./dtravel-ecs-update-service-v_${env.BUILD_NUMBER}.sh"
                sh "./dtravel-ecs-update-service-v_${env.BUILD_NUMBER}.sh"
                echo '=========== \033[0;31mUpdate staging\033[0m Stage End =============='
            }
        }
    }
    }

    post {
        always {
            echo 'DONE !'
        }
    }
}