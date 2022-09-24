import React from 'react'
import { default as api } from '../store/apiSlice'
import { getLables } from '../helper/helper'

export const Labels = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery()
  let Transaction

  if (isFetching) {
    Transaction = <div>Data Fetching</div>
  } else if (isError) {
    Transaction = <div>Error</div>
  } else if (isSuccess) {
    Transaction = getLables(data, 'type').map((val, idx) => <LabelComponent key={idx} data={val} />)
  }
  return (
    <>
      {Transaction}
    </>
  )
}

const LabelComponent = ({ data }) => {
  if (!data) return <></>
  return (
    <div className='labels flex justify-between'>
      <div className='flex gap-5'>
        <div className='w-2 h-2 rounded py-3' style={{ background: data.color ?? "#f9c74f" }}></div>
        <h3 className='text-md'>{data.type ?? ""}</h3>
      </div>
      <h3 className='font-bold'>{Math.round(data.percent) ?? 0}%</h3>
    </div>
  )
}