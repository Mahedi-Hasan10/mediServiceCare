import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Gallery from '@/lib/models/gallery';

export const config = {
  api: {
    bodyParser: true, // Enable built-in bodyParser
  },
};


export async function PUT(req, { params }) {
  await connect();

  try {
    const { id } = params;
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

    const updatedGalleryItem = await Gallery.findByIdAndUpdate(id, { imageUrl }, { new: true });

    if (!updatedGalleryItem) {
      return NextResponse.json(
        { success: false, error: 'Gallery item not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, galleryItem: updatedGalleryItem }, { status: 200 });
  } catch (error) {
    console.error('Error updating gallery item:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await connect();

  try {
    const { id } = params;

    const deletedGalleryItem = await Gallery.findByIdAndDelete(id);

    if (!deletedGalleryItem) {
      return NextResponse.json(
        { success: false, error: 'Gallery item not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Gallery item deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}