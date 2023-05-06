import React from 'react'

const CARDS = [{
  id: 1,
  title: 'Card 1'
},
{
  id: 2,
  title: 'Card 2'
},
{
  id: 3,
  title: 'Card 3'
}]

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-6 gap-4 p-4'>
      {CARDS.map(card => (
        <div 
          key={card.id}
          className='lg:col-span-2 col-span-1 w-full p-4 bg-white border rounded flex justify-between'
        >{card.title}</div>  
      ))

      }
    </div>
  )
}

export default TopCards