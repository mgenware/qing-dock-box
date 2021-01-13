module.exports = {
  // Starts the development mode, which watches and compiles all source files including tests files.
  dev: {
    run: ['#clean', 'tsc -b tests -w'],
    envGroups: ['development'],
  },
  serve: {
    run: ['web-dev-server --open demo/ --node-resolve --watch'],
  },

  // Runs tests (you need to build the project first).
  t: {
    run: 'web-test-runner dist_tests/**/*.test.js --node-resolve',
  },

  // Cleans, lints, compiles sources and runs tests.
  build: {
    run: ['#clean', 'tsc -b tests', '#lint', '#t'],
    envGroups: ['production'],
  },

  // Deletes compiled files, auto triggered by `yarn r dev` or `yarn r build`.
  clean: {
    run: {
      del: ['dist', 'dist_tests'],
    },
  },

  // Lints the project using ESLint, auto triggered by `yarn r build`.
  lint: {
    run: 'eslint --max-warnings 0 --ext .ts src/ tests/',
  },

  _: {
    envGroups: {
      production: {
        NODE_ENV: 'production',
      },
      development: {
        NODE_ENV: 'development',
      },
    },
  },
};
