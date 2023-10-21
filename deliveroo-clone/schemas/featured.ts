import {defineField} from 'sanity'

export default defineField({
    name: 'featured',
    title: 'Featured Menu Categories',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Featured Category name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'short_description',
            title: 'Short description',
            type: 'string',
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: 'restaurants',
            title: 'Restaurant',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'restaurant'}]}],
        }),
    ]
})