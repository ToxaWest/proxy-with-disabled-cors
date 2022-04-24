# Simple proxy using for disable cors policy.
### Set proxy for local development with headers:
    Access-Control-Allow-Origin
    Access-Control-Allow-Methods
    Access-Control-Allow-Headers

## How to use
#### 1) Add module to project.
    npm i --save proxy-with-disabled-cors
#### or install globally
    npm i -g proxy-with-disabled-cors

#### 2) paste arguments
- -h url
- -p port (default - 3080)
- -o origin (default - http://localhost:3000)
####
    proxy-with-disabled-cors -h https://google.com
#### or
    proxy-with-disabled-cors -h https://google.com -p 3080 -o http://localhost:3000

### Now you can use proxy http://localhost:3080
