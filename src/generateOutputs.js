import { setOutput } from '@actions/core'

const resultsOutputId = 'results'

const mapMessageValidation = (item) => item.message

const mapResultOutput = ({
  hash,
  lintResult: { valid, errors, warnings, input },
}, formattedResults) => ({
  hash,
  message: input,
  valid,
  errors: errors.map(mapMessageValidation),
  warnings: warnings.map(mapMessageValidation),
  formattedResults,
})

const generateOutputs = (lintedCommits) => {
  const resultsOutput = lintedCommits.map(mapResultOutput)

  setOutput(resultsOutputId, resultsOutput)
}

export default generateOutputs
