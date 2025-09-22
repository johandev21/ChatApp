import React from 'react'
import { Button } from '../ui/button'

export default function SidebarFilters() {
  return (
    <div className='flex gap-2'>
      <Button className='rounded-3xl' variant="default" size="sm">All</Button>
      <Button className='rounded-3xl' variant="outline" size="sm">Unread</Button>
      <Button className='rounded-3xl' variant="outline" size="sm">Favorite</Button>
      <Button className='rounded-3xl' variant="outline" size="sm">Groups</Button>
    </div>
  )
}
