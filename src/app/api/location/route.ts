import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import { revalidatePath } from "next/cache";

export async function GET() {
  const currentLocation = await kv.get('location:current');
  return NextResponse.json({location: currentLocation});
}

export async function POST(request: Request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.toLowerCase().startsWith('bearer ') || authHeader.slice(7) !== process.env.API_AUTH_KEY) {
    return new Response(JSON.stringify({error: 'Invalid key'}), {
      status: 403,
      headers: {'Content-Type': 'application/json'},
    });
  }

  const body: {location: string} = await request.json();
  await kv.set('location:current', body.location);

  revalidatePath('/');

  return NextResponse.json(body);
}