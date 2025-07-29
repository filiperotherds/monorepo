import z from 'zod'

export const organizationSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('update'),
    z.literal('delete'),
    z.literal('transfer_ownership'),
  ]),
  z.literal('Project'),
])

export type OrganizationSubject = z.infer<typeof organizationSubject>
