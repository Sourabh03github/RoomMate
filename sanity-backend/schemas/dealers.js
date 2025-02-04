import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'dealers',
    title: 'Dealers',
    type: 'document',
    fields: [
        {
            name: 'firmName',
            title: 'Firm Name',
            type: 'string',
        },
        {
            name: 'latitude',
            title: 'Latitude',
            type: 'number',
        },
        {
            name: 'longitude',
            title: 'Longitude',
            type: 'number',
        },
    ],
});