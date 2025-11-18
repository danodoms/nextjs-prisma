import prisma from '@/lib/prisma';
import { describe, it, expect, beforeEach, beforeAll } from 'vitest';


beforeAll(async () => {
    await prisma.message.deleteMany()
})


describe('POST /api/messages', () => {
    it('should create a new message', async () => {
        const response = await fetch('http://localhost:3000/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: 'Hello, this is a test!' }),
        });

        expect(response.status).toBe(201);
        const data = await response.json();
    })
})

describe('POST /api/messages', () => {
    it('should create a new message', async () => {
        const response = await fetch('http://localhost:3000/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: 'This is the second test message' }),
        });

        expect(response.status).toBe(201);
        const data = await response.json();
    })
})

describe('GET /api/messages', () => {
    it('should fetch messages', async () => {
        const response = await fetch('http://localhost:3000/api/messages');

        expect(response.status).toBe(200);
        const data = await response.json();
        console.log('Fetched messages in test:', data);
        expect(data).toHaveProperty('messages');
        expect(Array.isArray(data.messages)).toBe(true);
    })
})

describe('Messages Page SSR', () => {
    it('should render messages on the page', async () => {
        // Call the MessagesPage server component directly
        const { default: MessagesPage } = await import('./page');
        const ReactDOMServer = await import('react-dom/server');

        const element = await MessagesPage();
        const html = ReactDOMServer.renderToStaticMarkup(element);

        expect(html).toContain('Hello, this is a test!');
        expect(html).toContain('This is the second test message');
    })
})