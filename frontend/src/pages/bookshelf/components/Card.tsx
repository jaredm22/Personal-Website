import { useEffect, useState } from 'react';
import axios from 'axios';
import endpoints from '../../../endpoints.config';


interface state {
    dataLoaded: boolean,
    data: any
}

export default function Card(props: {id: string}) {

    const [state, setState] = useState<state>({
        dataLoaded: false,
        data: {}
    })

    useEffect(() => {
        if (!state.dataLoaded) {
            axios.get(`https://api.rawg.io/api/games/${props.id}?key=${endpoints.RAWG_API_KEY}`)
              .then(res => {
                console.log(res.data);
                setState({
                        ...state, 
                        dataLoaded: true,
                        data: res.data,       
                });
          })
        }
    }, [state])

    return(
        state.dataLoaded ?        
            <div className="card" style={{backgroundImage: `url(${state.data.background_imagew})` }}>
                {/* <img height="100%" src={state.data.background_image} alt=""/> */}
            </div>
        :
            <div className="card">
                
            </div>
    )
}