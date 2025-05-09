import { logger } from '../utils/logger';

/**
 * Generates a random number between min and max (inclusive)
 */
const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Main function that logs information to the console
 */
const logPageInfo = (): void => {
    try {
        const randomNumber = generateRandomNumber(1, 10000);
        logger.info('Question page detected', { randomNumber });
    } catch (error) {
        logger.error('Error in logPageInfo', error);
    }
};

// Execute when the page loads
logPageInfo(); 