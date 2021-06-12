import React from 'react'
import PaidContent from './PaidContent';
import PaidEmpty from './PaidEmpty';
import PaidLoading from './PaidLoading';

export default function Index() {
    const [loading, setLoading] = React.useState(true)
    const [content, setContent] = React.useState({})

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])

    return (
        <div style={{height:"100vh",backgroundColor:"rgb(255, 251, 235)"}}>
             {
                 loading ? <PaidLoading /> :
                 <>
                  {
                   content.length > 0 ? <PaidContent content={content} /> :
                   <PaidEmpty />
                   }
                 </>
             }
             
        </div>
    )
}