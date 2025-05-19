export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: ".e2e-spec.ts$",
  setupFiles: ["<rootDir>/test/setup.ts"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
};
