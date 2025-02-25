// src/app/api/hello/route.js
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello, world!' });
}

export async function POST(request:NextRequest) {
  const data = await request.json();
  return NextResponse.json({ message: `Hello, ${data.name}!` });
}
