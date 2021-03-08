'use strict'

import { Server } from 'net'

export default async function portAvailable (port: number): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    function removeListeners () {
      server.removeListener('error', onError)
      server.removeListener('listening', onListening)
    }

    function onError (err: any) {
      removeListeners()
      if (err.code === 'EADDRINUSE') {
        resolve(false)
      } else {
        reject(err)
      }
    }

    function onListening () {
      removeListeners()
      server.close()
      resolve(true)
    }

    const server = new Server()
    server.on('error', onError)
    server.on('listening', onListening)
    server.listen(port)
  })
}
