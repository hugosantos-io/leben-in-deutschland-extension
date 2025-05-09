import { logger } from '../../src/utils/logger';

describe('Logger', () => {
  beforeEach(() => {
    jest.spyOn(console, 'info').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'debug').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should log info messages', () => {
    logger.info('Test info message');
    expect(console.info).toHaveBeenCalledWith('[INFO] Test info message');
  });

  it('should log error messages', () => {
    logger.error('Test error message');
    expect(console.error).toHaveBeenCalledWith('[ERROR] Test error message');
  });

  it('should log warning messages', () => {
    logger.warn('Test warning message');
    expect(console.warn).toHaveBeenCalledWith('[WARN] Test warning message');
  });

  it('should log debug messages when debug level is set', () => {
    logger.setLogLevel('debug');
    logger.debug('Test debug message');
    expect(console.debug).toHaveBeenCalledWith('[DEBUG] Test debug message');
  });

  it('should not log debug messages when level is higher than debug', () => {
    logger.setLogLevel('info');
    logger.debug('Test debug message');
    expect(console.debug).not.toHaveBeenCalled();
  });

  it('should respect log level hierarchy', () => {
    logger.setLogLevel('warn');
    logger.debug('Debug message');
    logger.info('Info message');
    logger.warn('Warning message');
    logger.error('Error message');

    expect(console.debug).not.toHaveBeenCalled();
    expect(console.info).not.toHaveBeenCalled();
    expect(console.warn).toHaveBeenCalledWith('[WARN] Warning message');
    expect(console.error).toHaveBeenCalledWith('[ERROR] Error message');
  });
});