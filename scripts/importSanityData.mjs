import { createClient } from '@sanity/client'
import axios from 'axios'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path from 'path'

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
})

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`)
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(response.data)
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    })
    console.log(`Image uploaded successfully: ${asset._id}`)
    return asset._id
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error)
    return null
  }
}

async function importData() {
  try {
    console.log('Fetching products from API...')
    const response = await axios.get('https://6784913e1ec630ca33a4c727.mockapi.io/Data')
    const products = response.data
    console.log(`Fetched ${products.length} products`)

    for (const product of products) {
      console.log(`Processing product: ${product.productname}`)

      // Upload image to Sanity
      let posterRef = null
      if (product.poster_url) {
        posterRef = await uploadImageToSanity(product.poster_url)
      }

      // Prepare product data for Sanity
      const sanityProduct = {
        _type: 'Product',
        productname: product.productname,
        category: product.category,
        description: product.description,
        price: product.price,
        poster: posterRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: posterRef,
              },
            }
          : undefined,
        packet_size:product.packet_size,
        ProductId:product.ProductId
      }

      console.log('Uploading product to Sanity:', sanityProduct.productname)
      const result = await client.create(sanityProduct)
      console.log(`Product uploaded successfully: ${result._id}`)
    }

    console.log('Data import completed successfully!')
  } catch (error) {
    console.error('Error importing data:', error)
  }
}

importData()
