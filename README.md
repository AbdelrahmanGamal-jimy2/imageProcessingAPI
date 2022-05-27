# Udacity Image Processing API Project: Abdelrahman Gamal

## The required scripts to install the packages start build and test the application: 
- npm install 
- npm run prettier
- npm run lint
- npm start 
- npm run build
- npm run test
- node ./build/.

### endpoints that can be accessed
- valid URL: http://localhost:3000/api/images?name=fjord&width=100&height=100
- you can replace name with any of these names [ encenadaport, fjord, icelandwaterfall, palmtunnel, santamonica ]
- you can replace width and height with any positive intiger number 
- invalid URLS will show message "Incorrect file path"

#### Notes
- i added "image-size" package to check if the image cached is the same size
- i added sharp to resize the image and save it to my folder

