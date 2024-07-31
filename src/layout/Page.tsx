import { PropsWithChildren, FC } from 'react'

interface PageProps extends PropsWithChildren {
    
}

export const Page:FC<PageProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}
