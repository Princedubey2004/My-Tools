import { config } from "dotenv"
import { drizzle as drizzlePostgres } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { customers } from "./schema/customers"

config({ path: ".env.local" })

const dbSchema = {
  // tables
  customers
  // relations
}

type DbInstance = ReturnType<typeof drizzlePostgres<typeof dbSchema>>

let _db: DbInstance | null = null

function getDb(): DbInstance {
  if (!_db) {
    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl) {
      throw new Error("DATABASE_URL is not set")
    }
    const client = postgres(databaseUrl, { prepare: false })
    _db = drizzlePostgres(client, { schema: dbSchema })
  }
  return _db
}

export const db = new Proxy({} as DbInstance, {
  get(_target, prop) {
    const instance = getDb()
    const value = (instance as any)[prop]
    if (typeof value === "function") {
      return value.bind(instance)
    }
    return value
  }
})
