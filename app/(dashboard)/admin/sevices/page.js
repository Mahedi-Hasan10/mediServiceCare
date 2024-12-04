import { Suspense } from 'react';
import ServicesTable from './ServicesTable';

async function fetchServices() {
  try {
    const res = await fetch('http://localhost:3000/api/service', {
      cache: 'no-store',
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Error fetching services:', errorText);
      throw new Error(`Failed to fetch services: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    if (!data.success) {
      throw new Error('Failed to fetch services');
    }

    return data.services;
  } catch (error) {
    console.error('Error occurred while fetching services:', error);
    throw new Error('Failed to fetch services');
  }
}

export default async function Page() {
  const services = await fetchServices();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesTable services={services}  />
    </Suspense>
  );
}
