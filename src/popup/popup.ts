import { logger } from '../utils/logger';

document.addEventListener('DOMContentLoaded', () => {
    const statusElement = document.getElementById('status');
    
    if (statusElement) {
        logger.info('Popup opened');
        statusElement.textContent = 'Extension is active and monitoring the page';
    }
}); 