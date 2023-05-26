/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "lh3.googleusercontent.com",
      "grantoed-quizapp-bucket.s3.eu-north-1.amazonaws.com",
      "www.gravatar.com",
    ],
  },
};

module.exports = nextConfig;
