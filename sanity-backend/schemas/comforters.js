import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'comforters',
    title: 'Comforters',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'SecondImage',
            title: 'Second Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'thirdImage',
            title: 'ThirdImage',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'forthImage',
            title: 'Fourth image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'body',
            title: 'Product Description',
            type: 'blockContent',
        }),

    ],


})
