import { handleSubmit } from './formHandler'


test('Testing the function', () => {
    expect(handleSubmit).toBeInstanceOf(Function);
})