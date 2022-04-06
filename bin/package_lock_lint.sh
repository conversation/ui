#!/bin/bash

has_http=$(grep -c '"resolved": "http:' package-lock.json)

# This is set after the grep above because we want to continue if it fails.
#
# -e causes an immediate exit when a command fails.
#
# -u treats unset variables as errors and causes an immediate exit.
#
# -o pipefail sets the exit code of a pipeline to the rightmost command that
# exited with a non-zero status (or zero if none did) instead of the exit code
# of the last command in a pipeline. e.g. `bad-command | echo "something ok"`
# would exit 0 by default, -o pipefail changes it to exit 127.
set -euo pipefail

if [[ $has_http -gt 0 ]]
then
  echo "package-lock.json has resolved packages to HTTP addresses. They should be HTTPS."
  echo "Try using 'sed -i '' -e 's/http:\/\//https:\/\//g' package-lock.json' to correct this."
fi

exit $has_http
