const config: any = {
  development: {
    url: process.env.CONNECTION_URL_DEV,
  },
  test: {
    url: process.env.CONNECTION_URL_TEST,
  },
  production: {
    url: process.env.CONNECTION_URL,
  },
  staging: {
    url: process.env.CONNECTION_URL,
  },
};

export default config;
