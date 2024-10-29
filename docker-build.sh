rm -fr build/*
export NODE_OPTIONS=--openssl-legacy-provider

if [ "$1" == "arm64" ]
then
  docker  -t starlake-website-m1 .
else
  docker buildx build --platform linux/amd64 -t starlake-website:latest .
  export zone="europe-west1"
  export project="starlake-325712"

  docker tag starlake-website europe-west1-docker.pkg.dev/$project/starlake-docker-repo/starlake-website
  docker push europe-west1-docker.pkg.dev/$project/starlake-docker-repo/starlake-website
  gcloud run deploy starlake-website \
          --image europe-west1-docker.pkg.dev/$project/starlake-docker-repo/starlake-website:latest \
          --platform managed \
          --region=$zone \
          --allow-unauthenticated \
          --quiet
fi



