// generated by tjscli: ts-json-schema-generator
import { JSONSchema7 } from 'json-schema';

const IConfiguration: JSONSchema7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: { server: { $ref: 'IServer' }, endpoint: { $ref: 'IEndpoint' } },
  required: ['server', 'endpoint'],
  description: '서버 설정',
};
export default IConfiguration;