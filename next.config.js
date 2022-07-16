module.exports = () => {
  const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["raw.githubusercontent.com"],
    },
  };
  return nextConfig;
};
