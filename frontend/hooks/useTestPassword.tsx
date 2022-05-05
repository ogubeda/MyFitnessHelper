import { useState, useEffect } from 'react'
import { testPassword } from '../constants/regExp'

const useTestPassword = (value: string) => {
    const [ passwordTest, setPasswordTest ] = useState<boolean>(false)

    useEffect(() => {
        setPasswordTest(testPassword(value))
    }, [value]) 

    return passwordTest
} //end_useTestPassword

export default useTestPassword