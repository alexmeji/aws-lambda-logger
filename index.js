'use strict'
const debug = (context, data) => {
  process.stdout.write(`[${context.functionName}] Start Logger` + '\n')
  let contextInfo = {
    'functionName': context.functionName,
    'memoryLimitInMB': context.memoryLimitInMB,
    'functionVersion': context.functionVersion,
    'code': 10,
    'data': data
  }
  process.stdout.write(JSON.stringify(contextInfo) + '\n')
  process.stdout.write(`[${context.functionName}] Finish Logger` + '\n')
}

const error = (context, error) => {
  process.stdout.write(`[${context.functionName}] Start Logger` + '\n')
  let contextInfo = {
    'functionName': context.functionName,
    'memoryLimitInMB': context.memoryLimitInMB,
    'functionVersion': context.functionVersion,
    'code': 50,
    'error': error
  }
  process.stdout.write(JSON.stringify(contextInfo) + '\n')
  process.stdout.write(`[${context.functionName}] Finish Logger` + '\n')
}

module.exports = {
  debug,
  error
}