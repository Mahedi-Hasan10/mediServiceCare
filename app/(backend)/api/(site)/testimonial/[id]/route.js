import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Testimonial from '@/lib/models/testimonial';

export const config = {
  api: {
    bodyParser: true, // Enable built-in bodyParser
  },
};



export async function PUT(req, { params }) {
  await connect();

  try {
    const { id } = params;
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

    const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, { clientPhoto, designation, description }, { new: true });

    if (!updatedTestimonial) {
      return NextResponse.json(
        { success: false, error: 'Testimonial not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, testimonial: updatedTestimonial }, { status: 200 });
  } catch (error) {
    console.error('Error updating testimonial:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await connect();

  try {
    const { id } = params;

    const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

    if (!deletedTestimonial) {
      return NextResponse.json(
        { success: false, error: 'Testimonial not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Testimonial deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
export async function GET(req, { params }) {
    await connect();
  
    try {
      const { id } = params;
  
      const testimonial = await Testimonial.findById(id);
  
      if (!testimonial) {
        return NextResponse.json(
          { success: false, error: 'Testimonial not found.' },
          { status: 404 }
        );
      }
  
      return NextResponse.json({ success: true, testimonial }, { status: 200 });
    } catch (error) {
      console.error('Error fetching testimonial:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
  }