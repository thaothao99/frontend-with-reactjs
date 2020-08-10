import React, { useState } from 'react'
import { Button } from 'antd'
import { callApi } from '../../api';

export default function Login() {
    const [arrAcc, setArr] = useState([]);
    const onClickBttn = async () => {
        const data = await callApi('get', 'account/accounts', null)
        setArr(data)
        console.log(arrAcc)
    }
    return (
        <div>
            <Button onClick={() => onClickBttn()}>get accounts</Button>
        </div>
    )
}