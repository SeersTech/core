#!/bin/sh
: ${GIT_CLONE_PATH:?"Need to set non-empty GIT_CLONE_PATH"}
: ${DEPLOYMENT_LOG_PATH:?"Need to set non-empty DEPLOYMENT_LOG_PATH"}
forever start -a -l $DEPLOYMENT_LOG_PATH/proxy/forever-proxy.log -o $DEPLOYMENT_LOG_PATH/proxy/out-proxy.log -e $DEPLOYMENT_LOG_PATH/proxy/err-proxy.log $GIT_CLONE_PATH/proxy/index.js
