import { config } from 'dotenv'
import app from 'app'

// Loads .env.example file contents into process.env.
config({ path: '.env.example' })

// Assign process.env environment variables to constants
const API_PORT = process.env['API_PORT']
const ENVIRONMENT = process.env['ENVIRONMENT']

// Start the web server on the defined port and defined environment
app.listen(API_PORT, () => {
    console.log(`Server is running on port ${API_PORT}.`)
    console.log(`Environment: ${ENVIRONMENT}.`)
})
