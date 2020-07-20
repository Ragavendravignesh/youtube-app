import React,{useState} from 'react'
import Youtube from '../api/youtube'

const SearchBar = ({onFormSubmit}) =>{
     const [term, setTerm ] = useState('')
     const onSubmit = (event) => {
         event.preventDefault()
         onFormSubmit(term)
     }
     return (<div> 
        <div className =" ui segment " style = {{ marginTop : '10px' }}>
            <form  onSubmit={ onSubmit } className =" ui form">
                <div className =" field">
                     <label> Enter Video Name</label>
                     <input 
                       type = "text" 
                       value = { term }
                       onChange = { event => setTerm(event.target.value) }
                     />
                </div>
            </form>
        </div>
    </div>);
}

export default SearchBar