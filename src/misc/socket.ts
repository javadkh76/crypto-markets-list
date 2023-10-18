const URL = import.meta.env.VITE_WS_URL || 'wss://ws.bitpin.ir'
export const socket = new WebSocket(URL)
