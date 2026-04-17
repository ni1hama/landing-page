export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    // Validate
    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // LOGGING: In production, this would connect to Resend, SendGrid, or a DB
    // For this demo/stub, we log structured JSON to stdout which Vercel captures
    const logEntry = {
      timestamp: new Date().toISOString(),
      event: 'CONTACT_FORM_SUBMISSION',
      data: {
        name,
        email,
        company: company || 'N/A',
        message: message || 'N/A',
      }
    };
    
    console.log(JSON.stringify(logEntry));

    // Simulate network delay for realism
    await new Promise(resolve => setTimeout(resolve, 500));

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // Add standard security headers
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
