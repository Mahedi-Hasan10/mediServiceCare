import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Service from '@/lib/models/service';

export const config = {
  api: {
    bodyParser: true, // Enable built-in bodyParser
  },
};

export async function POST(req) {
  await connect();

  try {
    const { name, description } = await req.json();

    // Log the request body to debug
    console.log('Request body:', { name, description });

    // If there is no name or description, return an error
    if (!name || !description) {
      return NextResponse.json(
        { success: false, error: 'Name and description are required.' },
        { status: 400 }
      );
    }

    // Save the service
    const service = new Service({
      name,
      description,
    });

    // Log the service to be saved
    console.log('Service to be saved:', service);

    await service.save();

    // Log the saved service
    console.log('Saved service:', service);

    return NextResponse.json({ success: true, service }, { status: 200 });
  } catch (error) {
    console.error('Error saving service:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await connect();

  try {
    const services = await Service.find({});
    return NextResponse.json({ success: true, services }, { status: 200 });
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}