export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      censored_segments: {
        Row: {
          comment: string | null
          created_at: string | null
          editor_id: number | null
          end: number
          id: number
          start: number
          video_id: number | null
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          editor_id?: number | null
          end: number
          id?: number
          start: number
          video_id?: number | null
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          editor_id?: number | null
          end?: number
          id?: number
          start?: number
          video_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "censored_segments_editor_id_fkey"
            columns: ["editor_id"]
            referencedRelation: "editors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "censored_segments_video_id_fkey"
            columns: ["video_id"]
            referencedRelation: "videos"
            referencedColumns: ["id"]
          }
        ]
      }
      editors: {
        Row: {
          created_at: string | null
          id: number
          name: string
          twitch_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
          twitch_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          twitch_id?: string
        }
        Relationships: []
      }
      videos: {
        Row: {
          created_at: string | null
          id: number
          platform_id: string
          resource_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          platform_id: string
          resource_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          platform_id?: string
          resource_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
