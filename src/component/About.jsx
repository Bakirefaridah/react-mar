import React, { useContext, useEffect, useState } from 'react'
import {ThemeContext,LocaleContext} from './context';

const About = () => {
    const[name ,setname]=useState("Darlen");
    const[surname ,setSurname]=useState("Komuhendo")
    const[language ,setLangauge]=useState("English")
    const themeContext =useContext(ThemeContext);
    const locale =useContext(LocaleContext);
    
 const[width ,setWidth]=useState(window.innerWidth);




useEffect(() => {
    document.title = name +  " "  + surname;

});


    useEffect(()=> {
        const handleResize =()=>setWidth (window.innerWidth);
        window.addEventListener(resize,handleResize)

        return()=> {
            window.removeEventListener(resize,handleResize);
        };

    });




    
    

    
    function handleNameChange (e) {
        setname(e.target.value)
    }
    function handleSurnameChange(e){
        setSurname(e.target.value)
    }
    function handleLanguageChange(e){
        setLangauge(e.target.value)
    }
  return (
    <div>
        <h1>Here is the information about her;</h1>
        <input 
           type="text" 
            value={name}
            onChange={handleNameChange}
        />
        <br />
        <input 
            type="text" 
             value={surname}
             onChange={handleSurnameChange}
        />
        <br />
        <input 
            type="text" 
            value={language}
            onChange={handleLanguageChange}
            
            
        />
        


    </div>
  )
}

export default About