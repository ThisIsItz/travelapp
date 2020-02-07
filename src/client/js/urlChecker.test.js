import { checkForURL } from './urlChecker';

test('testing URL', () => {
    window.alert = () => {};  
    expect(checkForURL('Hello')).toBe(false);
    expect(checkForURL('https://www.20minutos.es')).toBe(true);
})