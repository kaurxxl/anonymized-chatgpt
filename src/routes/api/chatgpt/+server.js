import { json } from '@sveltejs/kit';
import { OPENAI_API_KEY } from '$env/static/private';

export async function POST({ request }) {
    try {
        const { query } = await request.json();
        if (!query) {
            return json({ error: 'Query is required.' }, { status: 400 });
        }

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-4o', // Use the appropriate model
                messages: [{ role: 'user', content: query }],
            }),
        });

        const data = await response.json();

        if (response.ok) {
            return json({ response: data.choices[0].message.content });
        } else {
            return json({ error: data.error.message }, { status: response.status });
        }
    } catch (error) {
        return json({ error: 'Something went wrong.' }, { status: 500 });
    }
}
