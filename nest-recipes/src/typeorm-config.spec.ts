import { TypeormConfig } from './typeorm-config';

describe('TypeormConfig', () => {
  it('should be defined', () => {
    expect(new TypeormConfig()).toBeDefined();
  });
});
