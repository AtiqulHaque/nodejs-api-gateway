# API Gateway By NodeJS
This is a simple NodeJS Api gateway project which extreamly usefull when someone is looking for any starter api gateway resource.

<div align="left">

[![license](https://img.shields.io/npm/l/express-rate-limit)](license.md)

</div>


<image src="./API_GATEWAY.drawio.png">


API gateway design pattern vaslty use in microservice architecture . I try to create this gateway to learn how actually it works.

What things i actually cover here 
`Authentication,
Routing,
Ratelimiter,
Log Monitor
`

**So this the begining of this porject, i will update this project very soon.**

## Install process as usual same 

>npm install

>npm start
After install you just need to add route in config.js file
it will forward the request 

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

