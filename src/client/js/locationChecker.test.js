import { checkForLocation } from './locationChecker';

test('testing URL', () => {
    window.alert = () => {};  
    expect(checkForLocation('Hello')).toBe(true);
    expect(checkForLocation('https://www.20minutos.es')).toBe(false);
})