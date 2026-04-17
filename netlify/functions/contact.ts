interface HandlerEvent {
  body: string;
  httpMethod: string;
}

export const handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }

  try {
    if (!event.body) {
        return { statusCode: 400, body: JSON.stringify({ error: "Missing body" }) };
    }
    
    const body = JSON.parse(event.body);
    const { name, email, company, message } = body;

    if (!name || !email) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
    }

    // LOGGING: Structure for Netlify logs
    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      event: 'CONTACT_FORM_SUBMISSION',
      data: { name, email, company, message }
    }));
    
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
      headers: { "Content-Type": "application/json" }
    };
  } catch (error) {
    console.error("Contact handler error:", error);
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }
};
