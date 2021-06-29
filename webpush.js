
var push = require('web-push')

let vapidKeys = {
    publicKey: 'BOuyEHeM51woSIqB7PG5-EXGoPvSiSx0OuGN3MqkrLtVXSclej93_d4H9XuYPQ-cz9BEkZIR9f8gNWe-hxJEmkA',
    privateKey: 'Ftg3RIGQYVTX8BFZ4SJwjPdHsb3riPWyeMYUvshgQ88'
  }

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    
}

push.sendNotification(sub, 'test message')