#!/bin/bash
SERVICE_NAME="AWS_ECS_SERVICE_NAME"
TASK_FAMILY="AWS_ECS_TASK_FAMILY"
CLUSTER_NAME="arn:aws:ecs:ap-southeast-1:AWS_ACCOUNT_ID:cluster/AWS_ECS_CLUSTER_NAME"

# Update the service with the new task definition and desired count
TASK_REVISION=`aws ecs describe-task-definition --region ap-southeast-1 --task-definition ${TASK_FAMILY} | egrep "revision" | tr "/" " " | tr "," " " | awk '{print $2}' | sed 's/"$//'`

echo Current REvision: ${TASK_REVISION}
aws ecs update-service --region ap-southeast-1 --cluster ${CLUSTER_NAME} --service ${SERVICE_NAME} --task-definition ${TASK_FAMILY}:${TASK_REVISION}