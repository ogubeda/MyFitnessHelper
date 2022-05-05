import { useState, useEffect } from 'react'
import { testEmail } from '../constants/regExp'

const useTestEmail = (value: string) => {
    const [ emailTest, setEmailTest ] = useState<boolean>(false)

    useEffect(() => {
        setEmailTest(testEmail(value))
    }, [value])

    return emailTest
} //end_useTestEmail

export default useTestEmail