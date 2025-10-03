import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nnkywmfxoohehtyyzzgp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ua3l3bWZ4b29oZWh0eXl6emdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNDQ3NTcsImV4cCI6MjA2OTcyMDc1N30.VZtsHLfbVks1uLhfnjW6uJSP0-J-Z30-WWT5D_B8Jpk'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types pour TypeScript
export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          first_name: string
          last_name: string
          phone: string
          user_type: 'owner' | 'traveler' | 'partner' | 'provider' | 'admin'
          profile_image: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          first_name: string
          last_name: string
          phone: string
          user_type: 'owner' | 'traveler' | 'partner' | 'provider' | 'admin'
          profile_image?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string
          last_name?: string
          phone?: string
          user_type?: 'owner' | 'traveler' | 'partner' | 'provider' | 'admin'
          profile_image?: string | null
          updated_at?: string
        }
      }
      properties: {
        Row: {
          id: string
          owner_id: string
          title: string
          description: string
          type: string
          address: string
          surface: number
          max_guests: number
          bedrooms: number
          bathrooms: number
          beds: number
          price_per_night: number
          cleaning_fee: number
          min_nights: number
          max_nights: number
          amenities: string[]
          images: string[]
          rules: string[]
          cancellation_policy: string
          check_in_time: string
          check_out_time: string
          category: string
          neighborhood: string
          beach_access: boolean
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          owner_id: string
          title: string
          description: string
          type: string
          address: string
          surface: number
          max_guests: number
          bedrooms: number
          bathrooms: number
          beds: number
          price_per_night: number
          cleaning_fee: number
          min_nights: number
          max_nights: number
          amenities: string[]
          images: string[]
          rules: string[]
          cancellation_policy: string
          check_in_time: string
          check_out_time: string
          category: string
          neighborhood: string
          beach_access: boolean
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          owner_id?: string
          title?: string
          description?: string
          type?: string
          address?: string
          surface?: number
          max_guests?: number
          bedrooms?: number
          bathrooms?: number
          beds?: number
          price_per_night?: number
          cleaning_fee?: number
          min_nights?: number
          max_nights?: number
          amenities?: string[]
          images?: string[]
          rules?: string[]
          cancellation_policy?: string
          check_in_time?: string
          check_out_time?: string
          category?: string
          neighborhood?: string
          beach_access?: boolean
          is_active?: boolean
          updated_at?: string
        }
      }
      reservations: {
        Row: {
          id: string
          property_id: string
          guest_id: string
          check_in: string
          check_out: string
          adults: number
          children: number
          infants: number
          pets: number
          total_amount: number
          status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          payment_method: string
          payment_status: 'pending' | 'paid' | 'refunded'
          special_requests: string | null
          additional_services: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          property_id: string
          guest_id: string
          check_in: string
          check_out: string
          adults: number
          children: number
          infants: number
          pets: number
          total_amount: number
          status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          payment_method: string
          payment_status: 'pending' | 'paid' | 'refunded'
          special_requests?: string | null
          additional_services: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          property_id?: string
          guest_id?: string
          check_in?: string
          check_out?: string
          adults?: number
          children?: number
          infants?: number
          pets?: number
          total_amount?: number
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          payment_method?: string
          payment_status?: 'pending' | 'paid' | 'refunded'
          special_requests?: string | null
          additional_services?: string[]
          updated_at?: string
        }
      }
      service_providers: {
        Row: {
          id: string
          user_id: string
          company: string | null
          experience: string
          services: string[]
          availability: Record<string, any>
          hourly_rate: number
          intervention_zones: string[]
          documents: string[]
          is_verified: boolean
          rating: number
          completed_jobs: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          company?: string | null
          experience: string
          services: string[]
          availability: Record<string, any>
          hourly_rate: number
          intervention_zones: string[]
          documents: string[]
          is_verified?: boolean
          rating?: number
          completed_jobs?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          company?: string | null
          experience?: string
          services?: string[]
          availability?: Record<string, any>
          hourly_rate?: number
          intervention_zones?: string[]
          documents?: string[]
          is_verified?: boolean
          rating?: number
          completed_jobs?: number
          updated_at?: string
        }
      }
      host_profiles: {
        Row: {
          id: string
          user_id: string
          selected_package: string
          commission_rate: number
          description: string | null
          languages: string[]
          profession: string | null
          interests: string[]
          why_host: string | null
          hosting_frequency: string | null
          accommodation_type: string | null
          guest_types: string[]
          stay_duration: string | null
          payment_method: string
          bank_account: string | null
          bank_name: string | null
          bank_country: string | null
          mobile_number: string | null
          mobile_name: string | null
          mobile_city: string | null
          mobile_network: string | null
          is_verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          selected_package: string
          commission_rate: number
          description?: string | null
          languages: string[]
          profession?: string | null
          interests: string[]
          why_host?: string | null
          hosting_frequency?: string | null
          accommodation_type?: string | null
          guest_types: string[]
          stay_duration?: string | null
          payment_method: string
          bank_account?: string | null
          bank_name?: string | null
          bank_country?: string | null
          mobile_number?: string | null
          mobile_name?: string | null
          mobile_city?: string | null
          mobile_network?: string | null
          is_verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          selected_package?: string
          commission_rate?: number
          description?: string | null
          languages?: string[]
          profession?: string | null
          interests?: string[]
          why_host?: string | null
          hosting_frequency?: string | null
          accommodation_type?: string | null
          guest_types?: string[]
          stay_duration?: string | null
          payment_method?: string
          bank_account?: string | null
          bank_name?: string | null
          bank_country?: string | null
          mobile_number?: string | null
          mobile_name?: string | null
          mobile_city?: string | null
          mobile_network?: string | null
          is_verified?: boolean
          updated_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          reservation_id: string
          property_id: string
          guest_id: string
          rating: number
          comment: string
          created_at: string
        }
        Insert: {
          id?: string
          reservation_id: string
          property_id: string
          guest_id: string
          rating: number
          comment: string
          created_at?: string
        }
        Update: {
          id?: string
          reservation_id?: string
          property_id?: string
          guest_id?: string
          rating?: number
          comment?: string
        }
      }
    }
  }
}