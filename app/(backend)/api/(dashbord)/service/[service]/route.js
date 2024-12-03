import connect from '@/lib/db';
import Service from '@/lib/models/service';
import { NextResponse } from 'next/server';

export const config = {
  api: {
    bodyParser: true, // Enable built-in bodyParser
  },
};

export async function GET(req, { params }) {
  await connect();

  try {
    const { service } = params;

    const serviceData = await Service.findById(service);

    if (!serviceData) {
      return NextResponse.json(
        { success: false, error: 'Service not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, service: serviceData }, { status: 200 });
  } catch (error) {
    console.error('Error fetching service:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  await connect();

  try {
    const { service } = params;
    const { name, description, image } = await req.json();

    // If there is no name or description, return an error
    if (!name || !description) {
      return NextResponse.json(
        { success: false, error: 'Name and description are required.' },
        { status: 400 }
      );
    }

    const updatedService = await Service.findByIdAndUpdate(service, { name, description, image }, { new: true });

    if (!updatedService) {
      return NextResponse.json(
        { success: false, error: 'Service not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, service: updatedService }, { status: 200 });
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await connect();

  try {
    const { service } = params;

    const deletedService = await Service?.findByIdAndDelete(service);

    if (!deletedService) {
      return NextResponse.json(
        { success: false, error: 'Service not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Service deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}