'use client'

import axios from 'axios'

export const DOMAIN = 'http://o-complex.com:1337'

export const headers = {
  'content-type': 'application/json',
}

export const apiAxiosFetch = axios.create({
  withCredentials: false,
  baseURL: DOMAIN,
  headers,
})
