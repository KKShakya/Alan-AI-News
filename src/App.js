import React, { useState,useEffect } from 'react';
import albtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';

const alkey = '087e478bcd4ce101de98cdec1ab953892e956eca572e1d8b807a3e2338fdd0dc/stage'
const App = () => {

    const [newsArticles,setNewsArticles] = useState([])
;
    useEffect(() => { 
        albtn({
          key:alkey,
          onCommand:({command,articles}) =>{
              if(command === 'newHeadLines'){
                  console.log(articles);
              }
          }
        })
    }, [])
      

    return (
        <div>
            <h1>Alan News</h1>
            <NewsCards articles={newsArticles} / >
        </div>
    );
}
export default App;