import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Gallery from '@/lib/models/gallery';

export const config = {
  api: {
    bodyParser: true, // Enable built-in bodyParser
  },
};

export async function POST(req) {
  await connect();

  try {
    const { imageUrl } = await req.json();

    // Log the request body to debug
    console.log('Request body:', { imageUrl });

    // If imageUrl is missing, return an error
    if (!imageUrl) {
      return NextResponse.json(
        { success: false, error: 'Image URL is required.' },
        { status: 400 }
      );
    }

    // Save the gallery item
    const galleryItem = new Gallery({
      imageUrl,
    });

    // Log the gallery item to be saved
    console.log('Gallery item to be saved:', galleryItem);

    await galleryItem.save();

    // Log the saved gallery item
    console.log('Saved gallery item:', galleryItem);

    return NextResponse.json({ success: true, galleryItem }, { status: 200 });
  } catch (error) {
    console.error('Error saving gallery item:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await connect();

  try {
    const galleryItems = await Gallery.find({});
    return NextResponse.json({ success: true, galleryItems }, { status: 200 });
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
