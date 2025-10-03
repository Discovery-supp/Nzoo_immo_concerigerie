import { supabase } from '../lib/supabase'
import type { Database } from '../lib/supabase'

type User = Database['public']['Tables']['users']['Row']

export const authService = {
  // Inscription
  async signUp(email: string, password: string, userData: {
    firstName: string
    lastName: string
    phone: string
    userType: string
  }) {
    try {
      // Créer l'utilisateur dans Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      })

      if (authError) throw authError

      if (authData.user) {
        // Créer le profil utilisateur dans la table user_profiles
        const { data: profileData, error: userError } = await supabase
          .from('user_profiles')
          .insert([
            {
              id: authData.user.id,
              first_name: userData.firstName,
              last_name: userData.lastName,
              phone: userData.phone,
              user_type: userData.userType as any,
            }
          ])
          .select()
          .single()

        if (userError) throw userError

        return { user: authData.user, profile: profileData }
      }

      return null
    } catch (error) {
      console.error('Erreur inscription:', error)
      throw error
    }
  },

  // Connexion
  async signIn(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      // Récupérer le profil utilisateur
      if (data.user) {
        const { data: profile, error: profileError } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', data.user.id)
          .single()

        if (profileError) throw profileError

        return { user: data.user, profile }
      }
    } catch (error) {
      console.error('Erreur connexion:', error)
      throw error
    }
  },

  // Connexion OAuth
  async signInWithOAuth(provider: 'google' | 'facebook' | 'apple') {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) throw error
      return data
    } catch (error) {
      console.error(`Erreur connexion ${provider}:`, error)
      throw error
    }
  },

  // Déconnexion
  async signOut() {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      console.error('Erreur déconnexion:', error)
      throw error
    }
  },

  // Obtenir l'utilisateur actuel
  async getCurrentUser() {
    try {
      const { data: { user }, error } = await supabase.auth.getUser()
      
      if (error) throw error

      if (user) {
        const { data: profile, error: profileError } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', user.id)
          .single()

        if (profileError) throw profileError

        return { user, profile }
      }

      return { user: null, profile: null }
    } catch (error) {
      console.error('Erreur récupération utilisateur:', error)
      return { user: null, profile: null }
    }
  }
}

export default authService