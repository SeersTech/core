#!/bin/sh
: ${GIT_CLONE_PATH=/home/ubuntu/core}
: ${DEPLOYMENT_LOG_PATH=/home/ubuntu/logs}
forever start -a -l $DEPLOYMENT_LOG_PATH/proxy/forever-proxy.log -o $DEPLOYMENT_LOG_PATH/proxy/out-proxy.log -e $DEPLOYMENT_LOG_PATH/proxy/err-proxy.log $GIT_CLONE_PATH/webservice/proxy/index.js
