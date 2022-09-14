// generated by tjscli: ts-json-schema-generator
import { JSONSchema7 } from 'json-schema';

const IConfiguration: JSONSchema7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    server: {
      type: 'object',
      properties: {
        runMode: {
          type: 'string',
          enum: ['local', 'develop', 'qa', 'stage', 'production'],
          description: 'server run mode',
        },
        envMode: { type: 'string', description: 'NODE_ENV' },
        logLevel: { type: 'string', description: 'log level' },
        caller: { type: 'string', description: 'caller configuration, server name' },
        port: { type: 'number', description: 'server port' },
        swaggerHost: { type: 'string', description: 'swagger host' },
      },
      required: ['runMode', 'envMode', 'logLevel', 'caller', 'port', 'swaggerHost'],
      description: 'Maeum Boilerplate Server Application configuration',
    },
  },
  required: ['server', 'endpoint'],
  description: '서버 설정',
};
export default IConfiguration;
