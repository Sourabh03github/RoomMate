import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'gbqi5fiq',
    dataset: 'production',
    apiVersion: '2024-11-27',
    useCdn: false,
    // token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
