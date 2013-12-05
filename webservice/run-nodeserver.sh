#!/bin/sh
: ${GIT_CLONE_PATH=/home/ubuntu/seers}
: ${DEPLOYMENT_LOG_PATH=/home/ubuntu/logs}
forever start -a -l $DEPLOYMENT_LOG_PATH/node/forever-node.log -o $DEPLOYMENT_LOG_PATH/node/out-node.log -e $DEPLOYMENT_LOG_PATH/node/err-node.log $GIT_CLONE_PATH/exp1/Main.js
