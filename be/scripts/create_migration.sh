#!/bin/bash

input=$1 # this is the name of the migration file

if [[ -z "$(echo "$input" | tr -d ' ')" ]]; then
    echo "MIGRATION FILE NAME REQUIRED: run: 'bash create_migration.sh <migration_name>'"
    exit 1
fi

path="./db/migrations"
count=$(ls "$path" | wc -l | tr -d ' ')

if (( $count < 10 )); then
    output="00${count}_${input}.sql"
elif (( $count < 100 && $count > 10 )); then
    output="0${count}_${input}.sql"
else
    output="${count}_${input}.sql"
fi

touch "${path}/${output}"
