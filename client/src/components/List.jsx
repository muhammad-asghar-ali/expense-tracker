import React from 'react'
import "boxicons"
import { default as api } from '../store/apiSlice'


export const List = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery()
  const [deleteTransaction] = api.useDeleteTransactionMutation()
  let Transaction

  const handler = (e) => {
    if(!e.target.dataset.id) return 0
    deleteTransaction({_id: e.target.dataset.id})
  }

  if (isFetching) {
    Transaction = <div>Data Fetching</div>
  } else if (isError) {
    Transaction = <div>Error</div>
  } else if (isSuccess) {
    Transaction = data.map(val => <Transection key={val._id} category={val} handler={handler} />)
  }
  return (
    <div className='flex flex-col py-6 gap-3'>
      <h1 className='py-4 font-bold text-xl'>History</h1>
      {Transaction}
    </div>
  )
}


const Transection = ({ category, handler }) => {
  if (!category) return null
  return (
    <div className='item flex justify-center bg-gray-50 py-2 rounded-r' style={{ borderRight: `8px solid ${category.color ?? "#5e5e5e"}` }}>
      <button className='px-3' onClick={handler}><box-icon data-id={category._id} siz color={"red"} name="trash"></box-icon></button>
      <span className='block w-full'>{category.name ?? ""}</span>
    </div>
  )
}