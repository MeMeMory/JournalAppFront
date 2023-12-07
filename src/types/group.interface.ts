export interface IGroup {
  id: number
  name: string
  slug: string
}

export interface IGroupResponse {
  group: IGroup[]
}

export type TypePaginationGroups = {
  length: number
  products: IGroup[]
}
