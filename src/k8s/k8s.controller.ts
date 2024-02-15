import { Controller, Get } from '@nestjs/common';

@Controller('k8s')
export class K8sController {
  @Get('health')
  health() {
    return {
      status: 'OK',
    };
  }
}
