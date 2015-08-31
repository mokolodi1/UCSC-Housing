if [ -d "webapp" ]; then
    cd webapp
fi

if [ -z "$1" ]; then
    MONGO_URL="mongodb://localhost:27017/" meteor
else
    MONGO_URL="mongodb://localhost:27017/" meteor $1
fi


