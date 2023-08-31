module.exports = {
  experimental: {
    runtime: 'edge',
  },
  async redirects() {
    return [
      {
        source: '/m/:id',
        destination: '/api/:id',
        permanent: false,
      },
      {
        source: '/gh',
        destination: 'https://github.com/SivaramPg',
        permanent: true,
      },
      {
        source: '/view-source',
        destination: 'https://github.com/SivaramPg/url-masker',
        permanent: true,
      },
    ];
  },
};
