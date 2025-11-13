let IS_PROD = true;
const server = IS_PROD ?
    "https://videocall-1-backend.onrender.com" :

    "http://localhost:8000"


export default server;