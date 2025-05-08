import { PropsWithChildren, FC } from 'react'

interface PageProps extends PropsWithChildren {
    className:string|undefined
}

export const Page:FC<PageProps> = ({children, className}) => {
  return (
    <main className={className}>{children}</main>
  )
}
