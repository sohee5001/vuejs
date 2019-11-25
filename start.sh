#!/bin/bash
sed '
s#_API_BASE_URL_#'$API_BASE_URL'#g
s#_FILE_BASE_URL_#'$FILE_BASE_URL'#g
s#_DEFAULT_BLANK_IMG_URL_#'$DEFAULT_BLANK_IMG_URL'#g
' /app/env/config.template > /app/js/config.js
# The exec "$@" will execute any CMD or command that is set.
exec "$@"
