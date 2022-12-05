import {useState} from 'react'

function About() {
	const [village,setVillage]=useState("America")
	const [country,setCountry]=useState("India")
	return(
		<div>
			{/*<h1>{country}</h1>
			<p>{village}</p>*/}
			<input placeholder="enter country name"
			onChange={(e)=>setCountry(e.target.value)}/>
			<p><input placeholder="enter villagename"
				onChange={(e)=>setVillage(e.target.value)}/></p>
			<button onClick={()=>console.log(village,country)}>Submit</button>
		</div>
		)
}
export default About