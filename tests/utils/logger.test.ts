import { logger } from '../../src/utils/logger';

describe('Logger', () => {
  beforeEach(() => {
    // Limpa o console antes de cada teste
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'info').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restaura o console após cada teste
    jest.restoreAllMocks();
  });

  it('should log info messages', () => {
    logger.info('Test info message');
    expect(console.info).toHaveBeenCalledWith('[Leben in Deutschland]', 'Test info message');
  });

  it('should log error messages', () => {
    logger.error('Test error message');
    expect(console.error).toHaveBeenCalledWith('[Leben in Deutschland]', 'Test error message');
  });

  it('should log warning messages', () => {
    logger.warn('Test warning message');
    expect(console.warn).toHaveBeenCalledWith('[Leben in Deutschland]', 'Test warning message');
  });

  it('should log debug messages', () => {
    logger.debug('Test debug message');
    expect(console.log).toHaveBeenCalledWith('[Leben in Deutschland]', 'Test debug message');
  });
}); 