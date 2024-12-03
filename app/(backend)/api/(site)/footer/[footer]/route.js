import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Footer from '@/lib/models/footer';

export const config = {
  api: {
    bodyParser: true, // Enable built-in bodyParser
  },
};

export async function PUT(req, { params }) {
  await connect();

  try {
    const { footer } = params;
    const { logo, title, shortDescription, address, email, registerAddress, socialMedia, copyrightText } = await req.json();

    // Log the request body to debug
    console.log('Request body:', { logo, title, shortDescription, address, email, registerAddress, socialMedia, copyrightText });

    // If any required field is missing, return an error
    if (!logo || !title || !shortDescription || !address || !email || !registerAddress || !socialMedia || !copyrightText) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const updatedFooter = await Footer.findByIdAndUpdate(footer, { logo, title, shortDescription, address, email, registerAddress, socialMedia, copyrightText }, { new: true });

    if (!updatedFooter) {
      return NextResponse.json(
        { success: false, error: 'Footer not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, footer: updatedFooter }, { status: 200 });
  } catch (error) {
    console.error('Error updating footer:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}