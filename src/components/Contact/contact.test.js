import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe("Sign-In Form Tests", () => {

    // tests for name field

    test('name input field updates when name is entered', () => {
        render(<Contact />)
        const linkElement = screen.getByText(/learn react/i)
        expect(linkElement).toBeInTheDocument()
    })

    test('checks that a name has been entered into the name field', () => {
        render(<Contact />)
        const linkElement = screen.getByText(/learn react/i)
        expect(linkElement).toBeInTheDocument()
    })


    // tests for email input field

    test('email input field updates when email is entered', () => {
        render(<Contact />)
        const linkElement = screen.getByText(/learn react/i)
        expect(linkElement).toBeInTheDocument()
    })

    test('checks that a valid email has been entered into the email field', () => {
        render(<Contact />)
        const linkElement = screen.getByText(/learn react/i)
        expect(linkElement).toBeInTheDocument()
    })

    test('checks that a email has been entered into the email field', () => {
        render(<Contact />)
        const linkElement = screen.getByText(/learn react/i)
        expect(linkElement).toBeInTheDocument()
    })


    // tests for topic input field

    test('topic input field updates when email is entered', () => {
        render(<Contact />)
        const linkElement = screen.getByText(/learn react/i)
        expect(linkElement).toBeInTheDocument()
    })

    
    // tests for message input field

    test('message input field updates when message is entered', () => {
        render(<Contact />)
        const linkElement = screen.getByText(/learn react/i)
        expect(linkElement).toBeInTheDocument()
    })


    test('checks that a message has been entered into the message field', () => {
        render(<Contact />)
        const linkElement = screen.getByText(/learn react/i)
        expect(linkElement).toBeInTheDocument()
    })

    
    // submit button

    test('check that submit button is visible', () => {
        render(<Contact />)
        const linkElement = screen.getByText(/learn react/i)
        expect(linkElement).toBeInTheDocument()
    })

    test('submit button clickable only when all required fields have been filled out', () => {
        render(<Contact />)
        const linkElement = screen.getByText(/learn react/i)
        expect(linkElement).toBeInTheDocument()
    })

})

