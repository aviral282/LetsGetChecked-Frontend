#!/bin/sh

git config --global user.name "Github Actions"
git config --global user.email "no-reply@gactions.com"

git clone --quiet --branch=apk https://aviral282:$GITHUB_TOKEN@github.com/aviral282/LetsGetChecked-Frontend apk > /dev/null

cd apk

find . -type f -name '*.apk' -exec cp -v {} . \;

git checkout --orphan temporary

git add --all .
git commit -am "[Auto] Update Apk ($(date +%Y-%m-%d.%H:%M:%S))"

git branch -D apk
git branch -m apk

git push origin apk --force --quiet > /dev/null