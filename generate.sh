#! /bin/bash

CURRENT_VERSION=$(docker run -i --rm stedolan/jq < package.json '.version')
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

printf "\n⏱  Cleaning...\n"
rm -rf \
  "$DIR/.openapi-generator" \
  "$DIR/dist" \
  "$DIR/docs" \
  "$DIR/src" \
  "$DIR/test" \
  "$DIR/.babelrc" \
  "$DIR/.openapi-generator-ignore" \
  "$DIR/.travis.yml" \
  "$DIR/git_push.sh" \
  "$DIR/mocha.opts" \
  "$DIR/package.json" \
  "$DIR/README.md"
printf "✅ Done."

printf "\n⏱  Generating JavaScript SDK...\n"
docker run \
  --network=docket-api_default \
  --rm \
  --volume ${PWD}:/local \
  openapitools/openapi-generator-cli:latest \
  generate \
    -i http://docket-api:3001/v1/docs \
    -g javascript \
    -o /local \
    --additional-properties usePromises=true,useES6=true,emitModelMethods=true,projectName='docket.js',projectDescription='JavaScript SDK for interfacing with the Docket API'
printf "✅ Done."

printf "\n⏱  Updating package.json 'version' property...\n"
docker run -i -e CURRENT_VERSION=$CURRENT_VERSION --rm stedolan/jq < package.json ".version = $CURRENT_VERSION" > package.tmp.json && mv package.tmp.json package.json
printf "✅ Done."

# printf "\n⏱  Transpiling via Babel...\n"
# docker run -v ${PWD}:/local --rm -it $(docker build -q .) babel /local/src -d /local/dist
# printf "✅ Done."

printf "\n⏱  Updating package.json 'main' and 'name' properties...\n"
docker run -i --rm stedolan/jq < ./package.json '.main = "src/index.js" | .name = "@docket/docket.js"' > package.tmp.json && mv package.tmp.json package.json
printf "✅ Done."

printf "\n🎗  Reminder:\n"
printf "To use this locally generated SDK, in the package.json file of the UI project, change the value of @docket/docket.js to \"file:../docket.js\"\n"

exit 0
