/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/posts/automation/slack-focus-status',
        destination: 'https://skibitsky.github.io/posts/automation/slack-focus-status',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
