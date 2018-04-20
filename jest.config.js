module.exports = {
    setupFiles: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/pages/scss/' ],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    }
}