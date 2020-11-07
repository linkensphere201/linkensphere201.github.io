#!/bin/bash
ts=$(date "+%Y-%m-%d-%H:%M:%S")
msg="hugo publish - $ts"
work_path=$(dirname `readlink -f $0`)
repo_path=${work_path}/../

cd ${repo_path}
git add .
filechanged=$(git status);
echo "publish msg: $msg";
echo "file changed: $filechanged";
git commit -m "$msg";
git push origin main
cd -
