import { client } from "@/sanity/lib/client";
export default async function deleteAllDocuments() {
    const documents = await client.fetch(`*[_type == "customer"]{_id}`);
    await Promise.all(documents.map(doc => client.delete(doc._id)));
    console.log(`Deleted ${documents.length} customer documents.`);
}
