import axios from 'axios'

import { TypeProductData } from './group.types'
import { group_url } from '@/constants/constants'
import { IGroup, TypePaginationGroups } from '@/types/group.interface'

export const ProductService = {
  async getAll() {
    const { data } = await axios<TypePaginationGroups>({
      url: group_url,
      method: 'GET'
    })
    return data
  },

  async getSimilar(id: string | number) {
    return axios<IGroup[]>({
      url: `${group_url}/similar/${id}`,
      method: 'GET'
    })
  },

  async getBySlug(slug: string) {
    return axios<IGroup>({
      url: `${group_url}/by-slug/${slug}`,
      method: 'GET'
    })
  },

  async getByCategory(categorySlug: string) {
    return axios<IGroup[]>({
      url: `${group_url}/by-category/${categorySlug}`,
      method: 'GET'
    })
  },

  async getById(id: string | number) {
    return axios<IGroup>({
      url: `$${group_url}/${id}`,
      method: 'GET'
    })
  },

  async create() {
    return axios<IGroup>({
      url: group_url,
      method: 'POST'
    })
  },

  async update(id: string | number, data: TypeProductData) {
    return axios<IGroup>({
      url: `${group_url}/${id}`,
      method: 'PUT',
      data
    })
  },

  async delete(id: string | number) {
    return axios<IGroup>({
      url: `${group_url}/${id}`,
      method: 'DELETE'
    })
  }
}
