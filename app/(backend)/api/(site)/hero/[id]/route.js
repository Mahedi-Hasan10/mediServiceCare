import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Hero from '@/lib/models/hero';

export const config = {
  api: {
    bodyParser: true, // Enable built-in bodyParser
  },
};

export async function PUT(req, { params }) {
  await connect();

  try {
    const { id } = params;
    const { image, title, description } = await req.json();

    // Log the request body to debug
    console.log('Request body:', { image, title, description });

    // If title or description is missing, return an error
    if (!title || !description) {
      return NextResponse.json(
        { success: false, error: 'Title and description are required.' },
        { status: 400 }
      );
    }

    const updatedHero = await Hero.findByIdAndUpdate(id, { image, title, description }, { new: true });

    if (!updatedHero) {
      return NextResponse.json(
        { success: false, error: 'Hero not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, hero: updatedHero }, { status: 200 });
  } catch (error) {
    console.error('Error updating hero:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await connect();

  try {
    const { id } = params;

    const deletedHero = await Hero.findByIdAndDelete(id);

    if (!deletedHero) {
      return NextResponse.json(
        { success: false, error: 'Hero not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Hero deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting hero:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}