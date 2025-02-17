import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class WebsocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  afterInit(server: Server) {
    console.log('WebsocketGateway initialized ');
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log('Websocket-custom: Client connected', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Websocket-custom: client disconnected', client.id);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    console.log('Message: (WS): ', message);
    this.server.emit('message', `Echo: ${message}`);
  }
}
