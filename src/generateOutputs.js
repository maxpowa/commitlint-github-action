import { setOutput } from '@actions/core'

const resultsOutputId = 'results'
const formattedResultsOutputId = 'formattedResults'

const mapMessageValidation = (item) => item.message

const mapResultOutput = ({
  hash,
  lintResult: { valid, errors, warnings, input },
}) => ({
  hash,
  message: input,
  valid,
  errors: errors.map(mapMessageValidation),
  warnings: warnings.map(mapMessageValidation),
})

const generateOutputs = (lintedCommits, formattedResults) => {
  const resultsOutput = lintedCommits.map(mapResultOutput)

  setOutput(resultsOutputId, resultsOutput)
  setOutput(formattedResultsOutputId, formattedResults)
}

export default generateOutputs
