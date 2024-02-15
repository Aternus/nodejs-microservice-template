import { Module } from '@nestjs/common';
import { K8sController } from './k8s.controller';

@Module({
  controllers: [K8sController],
})
export class K8sModule {}
