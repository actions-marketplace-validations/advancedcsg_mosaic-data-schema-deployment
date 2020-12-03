const fetch = require('node-fetch')
const deploy = async (schema) => {
  const url = 'https://data.svc.oneadvanced.com/control/v1/apps/deploy' // MD deployment url
  const res = await fetch(url, {
    method: 'post',
    body: JSON.stringify(schema),
    headers: { 'Content-Type': 'application/json' }
  })
  const json = await res.json()
  return {
    statusCode: res.ok ? 200 : res.statusCode,
    response: json
  }
}

module.exports = deploy