/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [require.resolve('@portofolio/eslint-config/next')],
  root: true
};

module.exports = config;
