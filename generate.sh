#! /bin/sh

CURRENT_VERSION=$(docker run -i --rm stedolan/jq < package.json '.version')
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
INPUT_SPEC="http://docket-api:3000/v1/docs"
NAME="@docket/docket.js"

echo "Cleaning..."
rm -rf \
  "$DIR/.swagger-codegen" \
  "$DIR/dist" \
  "$DIR/docs" \
  "$DIR/src" \
  "$DIR/test" \
  "$DIR/.babelrc" \
  "$DIR/.swagger-codegen-ignore" \
  "$DIR/.travis.yml" \
  "$DIR/git_push.sh" \
  "$DIR/mocha.opts" \
  "$DIR/package.json" \
  "$DIR/package-lock.json" \
  "$DIR/README.md"
echo "Done."

echo "Generating JavaScript SDK from ${INPUT_SPEC}..."
# swagger-codegen config-help -l javascript
docker run \
  --network=docket-api_default \
  --rm \
  --volume ${PWD}:/local \
  swaggerapi/swagger-codegen-cli \
  generate \
    --input-spec $INPUT_SPEC \
    --lang javascript \
    --output /local \
    --template-dir /local/modules/swagger-codegen/src/main/resources/Javascript/es6 \
    --additional-properties usePromises=true,useES6=true,emitModelMethods=true,projectName='docket-js-sdk',projectDescription='JavaScript SDK for interfacing with the Docket API'
echo "Done."

echo "Updating package.json 'version' to ${CURRENT_VERSION}..."
docker run -i -e CURRENT_VERSION=$CURRENT_VERSION --rm stedolan/jq < package.json ".version = $CURRENT_VERSION" > package.tmp.json && mv package.tmp.json package.json
echo "Done."

echo "Updating package.json 'name' to ${NAME}..."
docker run -i -e NAME=$NAME --rm stedolan/jq < package.json ".name = \"$NAME\"" > package.tmp.json && mv package.tmp.json package.json
echo "Done."

echo "Transpiling via Babel..."
docker run -v ${PWD}:/local --rm -it $(docker build -q .) babel /local/src -d /local/dist
echo "Done."

echo "Updating package.json 'main' to 'dist/index.js'..."
docker run -i --rm stedolan/jq < ./package.json '.main = "dist/index.js"' > package.tmp.json && mv package.tmp.json package.json
echo "Done."
