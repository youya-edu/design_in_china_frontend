#!/bin/sh

executeCommand()
{
  echo "$1"
  $1
}

executeCommand "cd /app/frontend"
executeCommand "yarn install"

executeCommand "yarn serve"