#! /bin/sh

watch=
update=

while [ "$1" != "" ]; do
    case $1 in
        -u )           shift
                                update=-u
                                ;;
        -w | --watch )          watch=--watch
                                ;;
        * )                     usage
                                exit 1
    esac
    shift
done

# test setup

mv .babelrc .babelrc.bak; mv babel.config.js.bak babel.config.js;

# test

node_modules/.bin/jest $watch $update;

# test teardown

mv .babelrc.bak .babelrc; mv babel.config.js babel.config.js.bak;