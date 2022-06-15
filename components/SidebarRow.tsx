import React, { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
  onClick?: () => {}
}

const SidebarRow = ({ Icon, title, onClick }: Props) => {
  return (
    <div onClick={() => onClick?.()} className='flex max-w-fit items-center space-x-2 py-3 rounded-full px-4 hover:bg-gray-100 transition-all duration-200 cursor-pointer group'>
      <Icon className='h-6 w-6' />
      <p className='group-hover:text-twitter hidden md:inline-flex text-base font-light lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow