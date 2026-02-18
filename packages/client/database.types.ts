export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      block: {
        Row: {
          content: Json[] | null
          created_by_id: string
          created_time: string
          id: string
          last_modified: string
          last_updated: string
          parent_id: string
          properties: Json
          space_id: string
          type: string
        }
        Insert: {
          content?: Json[] | null
          created_by_id?: string
          created_time?: string
          id?: string
          last_modified?: string
          last_updated?: string
          parent_id?: string
          properties?: Json
          space_id?: string
          type?: string
        }
        Update: {
          content?: Json[] | null
          created_by_id?: string
          created_time?: string
          id?: string
          last_modified?: string
          last_updated?: string
          parent_id?: string
          properties?: Json
          space_id?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "block_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "block"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "block_space_id_fkey"
            columns: ["space_id"]
            isOneToOne: false
            referencedRelation: "space"
            referencedColumns: ["id"]
          },
        ]
      }
      block_in_space: {
        Row: {
          block_id: string
          space_id: string
        }
        Insert: {
          block_id?: string
          space_id?: string
        }
        Update: {
          block_id?: string
          space_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "block_in_space_block_id_fkey"
            columns: ["block_id"]
            isOneToOne: false
            referencedRelation: "block"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "block_in_space_space_id_fkey"
            columns: ["space_id"]
            isOneToOne: true
            referencedRelation: "space"
            referencedColumns: ["id"]
          },
        ]
      }
      content_in_block: {
        Row: {
          block_id: string | null
          content_id: string
          space_id: string | null
        }
        Insert: {
          block_id?: string | null
          content_id?: string
          space_id?: string | null
        }
        Update: {
          block_id?: string | null
          content_id?: string
          space_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "content_in_block_block_id_fkey"
            columns: ["block_id"]
            isOneToOne: false
            referencedRelation: "block"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "content_in_block_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: true
            referencedRelation: "block"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "content_in_block_space_id_fkey"
            columns: ["space_id"]
            isOneToOne: false
            referencedRelation: "space"
            referencedColumns: ["id"]
          },
        ]
      }
      space: {
        Row: {
          created_by: string | null
          id: string
          title: string | null
        }
        Insert: {
          created_by?: string | null
          id?: string
          title?: string | null
        }
        Update: {
          created_by?: string | null
          id?: string
          title?: string | null
        }
        Relationships: []
      }
      space_in_project: {
        Row: {
          project_id: string
          space_id: string
        }
        Insert: {
          project_id?: string
          space_id?: string
        }
        Update: {
          project_id?: string
          space_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "space_in_project_space_id_fkey"
            columns: ["space_id"]
            isOneToOne: false
            referencedRelation: "space"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      apply_operation: {
        Args: { command: string; id: string; arg: Json }
        Returns: string
      }
      handle_block: {
        Args: { id: string } | { s_id: string }
        Returns: Record<string, unknown>
      }
      handle_operation: {
        Args: { op: Record<string, unknown> }
        Returns: Record<string, unknown>
      }
      update_block_properties: {
        Args: { input: Json }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
