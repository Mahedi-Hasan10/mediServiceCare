import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Product from '@/lib/models/product';

export const config = {
  api: {
    bodyParser: true, // Enable built-in bodyParser
  },
};

export async function POST(req) {
  await connect();

  try {
    const { title, description, brandname } = await req.json();

    // Log the request body to debug
    console.log('Request body:', { title, description, brandname });

    // If there is no title, description, or brandname, return an error
    if (!title || !description || !brandname) {
      return NextResponse.json(
        { success: false, error: 'Title, description and brandname are required.' },
        { status: 400 }
      );
    }

    // Save the product without an image
    const product = new Product({
      title,
      description,
      brandname,
    });

    // Log the product to be saved
    console.log('Product to be saved:', product);

    await product.save();

    // Log the saved product
    console.log('Saved product:', product);

    return NextResponse.json({ success: true, product }, { status: 200 });
  } catch (error) {
    console.error('Error saving product:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await connect();

  try {
    const products = await Product?.find({});
    return NextResponse.json({ success: true, products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}