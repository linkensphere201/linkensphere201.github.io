#!/bin/bash
ts=$(date "+%Y-%m-%d-%H:%M:%S"); 
msg="hugo publish - $ts";
git add .;
filechanged=$(git status);
echo "publish msg: $msg";
echo "file changed: $filechanged";
git commit -m "$msg";
git push origin main

