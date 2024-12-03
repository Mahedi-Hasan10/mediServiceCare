import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Footer from '@/lib/models/footer';

export const config = {
  api: {
    bodyParser: true, // Enable built-in bodyParser
  },
};

export async function POST(req) {
  await connect();

  try {
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

    // Save the footer
    const footer = new Footer({
      logo,
      title,
      shortDescription,
      address,
      email,
      registerAddress,
      socialMedia,
      copyrightText,
    });

    // Log the footer to be saved
    console.log('Footer to be saved:', footer);

    await footer.save();

    // Log the saved footer
    console.log('Saved footer:', footer);

    return NextResponse.json({ success: true, footer }, { status: 200 });
  } catch (error) {
    console.error('Error saving footer:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await connect();

  try {
    const footers = await Footer.find({});
    return NextResponse.json({ success: true, footers }, { status: 200 });
  } catch (error) {
    console.error('Error fetching footers:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

