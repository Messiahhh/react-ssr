import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadData } from '../redux/action'

export default function Contain() {
    const fetching = useSelector(state => state.isFetching)
    const lists = useSelector(state => state.lists)

    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(loadData())
    }, [])
    return (
        <div>
            {
                fetching && <h1>加载中...</h1>
            }
            {
                lists.map((item, index) => <div key={index}>{item}</div>)
            }
        </div>
    )
}