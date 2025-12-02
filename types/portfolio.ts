export interface ContentData {
  title: string
  description?: string
  text?: string
  technologies?: string[]
  tags?: string[]
  links?: Array<{
    label: string
    url: string
    icon?: string
  }>
  media?: string
  image?: string
  logo?: string
  tools?: Array<{
    name: string
    logo: string
  }>
  images?: string[]
}

export interface ChildFolder {
  id: string
  name: string
  content?: ContentData
  children?: ChildFolder[]
  isProject?: boolean
  type?: "info" | "tools" | "gallery"
}

export interface FolderData {
  id: string
  name: string
  color: string
  gradient: string
  icon: string
  children?: ChildFolder[]
  content?: ContentData
}
