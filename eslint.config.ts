import jobin from '@jobinjia/eslint-config'
import oxlint from 'eslint-plugin-oxlint'

export default jobin(
  {},
  ...oxlint.buildFromOxlintConfigFile('.oxlintrc.json'),
)
