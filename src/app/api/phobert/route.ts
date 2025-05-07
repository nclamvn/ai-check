import { NextResponse } from 'next/server';

// This is a placeholder for the actual PhoBERT API endpoint
const PHOBERT_API_ENDPOINT = 'https://api.example-phobert.com/detect'; 
// This is a placeholder for your API key, ideally stored in environment variables
const PHOBERT_API_KEY = process.env.PHOBERT_API_KEY || 'YOUR_API_KEY_HERE';

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return NextResponse.json({ error: 'Invalid input text' }, { status: 400 });
    }

    console.log(`Received text for PhoBERT analysis (via proxy): ${text.substring(0, 50)}...`);

    // --- Simulate PhoBERT API Call --- 
    // In a real scenario, you would use fetch or axios to call the actual PHOBERT_API_ENDPOINT
    // Example using fetch:
    /*
    const apiResponse = await fetch(PHOBERT_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PHOBERT_API_KEY}`, // Or your specific auth method
      },
      body: JSON.stringify({ text: text }),
    });

    if (!apiResponse.ok) {
      console.error('PhoBERT API request failed:', apiResponse.status, apiResponse.statusText);
      const errorBody = await apiResponse.text();
      console.error('Error body:', errorBody);
      return NextResponse.json({ error: 'Failed to analyze text with PhoBERT API' }, { status: apiResponse.status });
    }

    const data = await apiResponse.json();
    console.log('PhoBERT API response received:', data);
    */

    // --- Simulated Response --- 
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    
    // Simulate a score based on text length or some simple logic
    const score = Math.min(100, Math.max(0, Math.floor(text.length / 5) + Math.random() * 20)); 
    let category;
    if (score <= 20) {
      category = "Rất có khả năng do con người viết";
    } else if (score <= 40) {
      category = "Có khả năng do con người viết";
    } else if (score <= 60) {
      category = "Không xác định rõ";
    } else if (score <= 80) {
      category = "Có khả năng do AI tạo ra";
    } else {
      category = "Rất có khả năng do AI tạo ra";
    }
    const simulatedData = { score, category };
    // --- End Simulation ---

    // Return the data from the API (or simulation)
    return NextResponse.json(simulatedData);

  } catch (error) {
    console.error('Error in PhoBERT proxy route:', error);
    if (error instanceof SyntaxError) { // Handle JSON parsing errors
        return NextResponse.json({ error: 'Invalid JSON input' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

