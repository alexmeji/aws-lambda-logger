'use strict'
const debug = (context, data) => {
  console.log(`[${context.functionName}] Start Logger`)
  let contextInfo = {
    'functionName': context.functionName,
    'memoryLimitInMB': context.memoryLimitInMB,
    'functionVersion': context.functionVersion,
    'data': data
  }
  console.log(JSON.stringify(contextInfo))
  console.log(`[${context.functionName}] Finish Logger`)
}

const error = (context, error) => {
  console.log(`[${context.functionName}] Start Logger`)
  let contextInfo = {
    'functionName': context.functionName,
    'memoryLimitInMB': context.memoryLimitInMB,
    'functionVersion': context.functionVersion
  }
  let errorInfo = {
    'error': error
  }
  console.log(JSON.stringify(contextInfo))
  console.error(errorInfo)
  console.log(`[${context.functionName}] Finish Logger`)
}

module.exports = {
  debug,
  error
}
