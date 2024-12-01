import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Product from '@/lib/models/product';

export const config = {
  api: {
    bodyParser: true, // Enable built-in bodyParser
  },
};

export async function GET(req, { params }) {
  await connect();

  try {
    const { product } = params;

    const productData = await Product.findById(product);

    if (!productData) {
      return NextResponse.json(
        { success: false, error: 'Product not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, product: productData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  await connect();

  try {
    const { product } = params;
    const { title, description } = await req.json();

    // If there is no title or description, return an error
    if (!title || !description) {
      return NextResponse.json(
        { success: false, error: 'Title and description are required.' },
        { status: 400 }
      );
    }

    const updatedProduct = await Product.findByIdAndUpdate(product, { title, description }, { new: true });

    if (!updatedProduct) {
      return NextResponse.json(
        { success: false, error: 'Product not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, product: updatedProduct }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await connect();

  try {
    const { product } = params;

    const deletedProduct = await Product.findByIdAndDelete(product);

    if (!deletedProduct) {
      return NextResponse.json(
        { success: false, error: 'Product not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Product deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}