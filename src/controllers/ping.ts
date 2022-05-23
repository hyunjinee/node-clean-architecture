import { Get, Route } from 'tsoa';

interface PingResponse {
  message: string;
}

@Route('ping')
class PingController {
  @Get('/')
  public async getMessage(): Promise<PingResponse> {
    return {
      message: 'pong',
    };
  }
}
