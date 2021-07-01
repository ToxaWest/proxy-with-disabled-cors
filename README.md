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
- first argument is url
- second argument is port (default - 3080)
####
    proxy-with-disabled-cors https://google.com
####or
    proxy-with-disabled-cors https://google.com 3080

### Now you can use proxy http://localhost:3080
