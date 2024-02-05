# API Gateway By NodeJS
This is a simple Nodejs api getway code for any starter project.
<div align="left">

[![license](https://img.shields.io/npm/l/express-rate-limit)](license.md)

</div>


<image src="./API_GATEWAY.drawio.png">


In microservice architecture vaslty use this pattern. I try to create this gateway to learn how actually it works.


## Install process as usual same 

>npm install

>npm start

What things i actually cover here 
we know that in  microservice architecture API Gateway is the main Starting point of any project
All service call will go through by this API Gateway.

Just need to add route it will forward the request in config.js file
```ts
exports.proxies = {
  "/search": {
    protected: true,
    target: "http://api.duckduckgo.com/",
    changeOrigin: true,
    pathRewrite: {
      [`^/search`]: "hello-atik",
    },
  },
  "/product": {
    protected: false,
    target: "http://localhost:8084",
    changeOrigin: true,
    pathRewrite: {
      [`^/out-api`]: "/",
    },
  },
};

```
## License

MIT © [Md.AtiqulHaque](http://atiqul.me)

