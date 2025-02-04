import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'homeBanner',
    title: 'Home Banner',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],


})
