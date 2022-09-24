import React from 'react'
import { Labels } from './Labels'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
import { default as api } from '../store/apiSlice'
import { chartData, getTotal } from '../helper/helper'

Chart.register(ArcElement)

export const Graph = () => {
    const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery()
    let Graph

    if (isFetching) {
        Graph = <div>Data Fetching</div>
    } else if (isError) {
        Graph = <div>Error</div>
    } else if (isSuccess) {        
        Graph = <Doughnut {...chartData(data)}></Doughnut>
    }
    return (
        <div className='flex justify-content max-w-xs mx-auto'>
            <div className='item'>
                <div className='chart relative'>
                    {Graph}
                    <h3 className='mb-4 font-bold title'>Total
                        <span className='block text-3xl text-emerald-400'>${getTotal(data) ?? 0}</span>
                    </h3>
                </div>
                <div className='flex flex-col py-10 gap-4'>
                    <Labels />
                </div>
            </div>
        </div>
    )
}
