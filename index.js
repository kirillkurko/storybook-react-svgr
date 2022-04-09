module.exports = {
  webpackFinal(config = {}, options = {}) {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules.map((_) => {
            if (_.test.toString().includes('svg|')) {
              return {
                ..._,
                test: new RegExp(_.test.source.replace('svg|', '')),
              };
            }
            return _;
          }),
          {
            test: /(icons|images)\/.*?.svg$/,
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  svgoConfig: {
                    plugins: {
                      removeViewBox: false,
                    },
                  },
                },
              },
              'file-loader',
            ],
          },
        ],
      },
    };
  },
}