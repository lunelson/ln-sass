#!/bin/bash
#
# this is an update script
# based on this article http://getkirby.com/blog/working-with-git

git submodule foreach --recursive git checkout master
git submodule foreach --recursive git pull

git add -A
git commit -am "Submodule Update"
git push