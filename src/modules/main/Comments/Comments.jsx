'use client'

import xss from 'xss'
import classNames from 'classnames'
import parse from 'html-react-parser'
import { useState, useEffect } from 'react'
import Loader from '@/ui/Loader'

import useDebounce from '@/hooks/useDebounce'

import styles from './styles/Comments.module.scss'

import { loadData } from './funcs'

export default function Comments() {
  const [comments, setComments] = useState([])
  const [isLoading, setLoading] = useState(true)

  const loadDelay = 1000
  const getData = useDebounce(
    async () => {
      try {
        const responseData = await loadData()
        const comments = responseData?.data || []
        setComments(comments)
        setLoading(false)
      } catch (error) {
        console.warn(error)
        setLoading(false)
      }
    },
    loadDelay,
    []
  )

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={classNames(styles.module, styles.wrapper)}>
      <Loader isLoading={isLoading}>
        <div className={styles.content}>
          <div className={styles.comments}>
            {comments.map((data, i) => (
              <Comment data={data} key={data.id + '-' + i} />
            ))}
          </div>
        </div>
      </Loader>
    </div>
  )
}
export { Comments }

export function Comment({ data }) {
  const { text } = data
  return (
    <div className={styles['comment-window']}>{parse(xss(text || ''))}</div>
  )
}
