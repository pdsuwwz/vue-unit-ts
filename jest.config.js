module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleFileExtensions: ["js", "ts", "vue"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },

  testMatch: ['<rootDir>/__tests__/**/*.spec.(js|ts)'],
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    // '^.+\\.js$': 'babel-jest',
    '^.+\\.(vue)$': '@vue/vue3-jest',
    '^.+\\.ts$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },

  coverageDirectory: 'coverage',
  coverageProvider: "v8",
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/App.vue'
  ],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 80,
      lines: 90,
      statements: 80
    }
  }
}
