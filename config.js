require("dotenv").config();

exports.serverPort = 3003;
exports.sessionSecret = process.env.SESSION_SECRET;
exports.rate = {
  windowMs: 5 * 60 * 1000,
  max: 100,
};
exports.proxies = {
  "/search": {
    protected: true,
    target: "http://api.duckduckgo.com/",
    changeOrigin: true,
    pathRewrite: {
      [`^/search`]: "hello-atik",
    },
  },
  "/out-api": {
    protected: false,
    target: "http://localhost:8084",
    changeOrigin: true,
    pathRewrite: {
      [`^/out-api`]: "/",
    },
  },
};

