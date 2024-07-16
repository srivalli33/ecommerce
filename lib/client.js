import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = createClient({
    projectId: 'l3sbmb6x', 
    dataset: 'production',
    apiVersion: '2024-07-04', 
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN 
});

const builder = imageUrlBuilder(client);


export const urlFor = (source) => builder.image(source);
