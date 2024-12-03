import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Hero from '@/lib/models/hero';

export const config = {
  api: {
    bodyParser: true, // Enable built-in bodyParser
  },
};

export async function POST(req) {
  await connect();

  try {
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

    // Save the hero section
    const hero = new Hero({
      image,
      title,
      description,
    });

    // Log the hero section to be saved
    console.log('Hero to be saved:', hero);

    await hero.save();

    // Log the saved hero section
    console.log('Saved hero:', hero);

    return NextResponse.json({ success: true, hero }, { status: 200 });
  } catch (error) {
    console.error('Error saving hero:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await connect();

  try {
    const heroes = await Hero.find({});
    return NextResponse.json({ success: true, heroes }, { status: 200 });
  } catch (error) {
    console.error('Error fetching heroes:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
