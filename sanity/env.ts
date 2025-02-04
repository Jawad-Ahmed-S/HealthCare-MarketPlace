export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-02'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skN3wwBQWjDfRowT9TOR7AtMjeoY6dZhJc5bSt4p6em7i11mlFbgSix4eDJpj7jD93NI8tRjGIXv36SujgoTP2hQj5ouU5kGHZkPGgNwqogEn0tzp9mMIBFTOxzlLG3KsuteMX575tjpD0QvijI8ydUrF1kvbq1BW7MwOqtlYnkyYGRECsDp",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
