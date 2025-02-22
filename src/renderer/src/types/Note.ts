export interface Note {
  id: string
  title: string
  content: string
  context?: string
  createdAt: Date
  updatedAt: Date
}

export type CreateNoteData = {
  title: string
  context?: string
}
