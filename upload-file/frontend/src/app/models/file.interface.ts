export interface FileCategoryI {
  id: number;
  category_name: string;
  descripcion?: string;
  files?: FileI[];
}

export interface FileI {
  id?: number;
  file_name: string;
  extension?: string;
  url?: string;
  id_category?: number;
}
