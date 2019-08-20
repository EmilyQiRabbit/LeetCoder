#!/bin/bash

info='# LeetCode 题目与解答\n\n####   —— Programming  with JavaScript and Python\n\n## JS-CODE\n\n'

for files in $(find ./JSCode -name '*.js')
do
    for filename in $files
        do
            info+="${filename}\n\n" # 字符串替换，并加上换行符
        done
done

info+="## PYTHON-CODE\n\n"

for files in $(find ./PythonCode -name '*.md')
do
    for filename in $files
        do
            info+="${filename}\n\n" # 字符串替换，并加上换行符
        done
done

echo -e $info | sed "s/.\/PythonCode//g;s/.\/JSCode//g;s/\//  /g" > README.md
