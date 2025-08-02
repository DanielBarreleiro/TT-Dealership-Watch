export async function onRequest(context, userId) {
  try {
    const response = await fetch(`https://tycoon-2epova.users.cfx.re/status/ownedvehicles/${userId}`, {
      headers: {
        'X-Tycoon-Key': context.env.TYCOON_API_KEY
      }
    });
    
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed fetching data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
