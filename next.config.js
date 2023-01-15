module.exports = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/blog/" : undefined,

  reactStrictMode: false,
  images: {
    domains: ["images.ctfassets.net"],
  },
};
