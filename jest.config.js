module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': './.storybook/transoformer.js',
  },
  collectCoverageFrom: [
    "./src/**/*.{ts,tsx}",
    "!**/__stories__/**",
    "!**/__fixtures__/**",
    "!**/*.stories.tsx",
    "!**/node_modules/**",
    "!**/build/**",
    "!**/out/**"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    '^~(.*)$': '<rootDir>/src$1',
  },
  setupFiles: [
    '<rootDir>/.storybook/jest_setup.js'
  ],
  transformIgnorePatterns: [
    '<rootDir>/(node_modules)/(?!react-syntax-highlighter)',
  ]
};
