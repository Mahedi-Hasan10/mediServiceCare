import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Testimonial from '@/lib/models/testimonial';

export const config = {
  api: {
    bodyParser: true, // Enable built-in bodyParser
  },
};

export async function POST(req) {
  await connect();

  try {
    const { clientPhoto, designation, description } = await req.json();

    // Log the request body to debug
    console.log('Request body:', { clientPhoto, designation, description });

    // If any required field is missing, return an error
    if (!clientPhoto || !designation || !description) {
      return NextResponse.json(
        { success: false, error: 'Client photo, designation, and description are required.' },
        { status: 400 }
      );
    }

    // Save the testimonial
    const testimonial = new Testimonial({
      clientPhoto,
      designation,
      description,
    });

    // Log the testimonial to be saved
    console.log('Testimonial to be saved:', testimonial);

    await testimonial.save();

    // Log the saved testimonial
    console.log('Saved testimonial:', testimonial);

    return NextResponse.json({ success: true, testimonial }, { status: 200 });
  } catch (error) {
    console.error('Error saving testimonial:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await connect();

  try {
    const testimonials = await Testimonial.find({});
    return NextResponse.json({ success: true, testimonials }, { status: 200 });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
