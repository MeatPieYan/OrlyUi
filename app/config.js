console.log('node_env=================>',process.env.NODE_ENV);

const serverUrl = process.env.NODE_ENV==='production'?'45.32.42.0:10630':'127.0.0.1:10630'

export default {
  serverUrl
}
