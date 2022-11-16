import { ICategory } from "./interface/category.interface"

export type Category = ICategory

export type FullCategory = Category & DateInfo

export type UpdateCategory = Partial<Omit<Category, 'id'>>

export type FilterCategory = Partial<FullCategory>