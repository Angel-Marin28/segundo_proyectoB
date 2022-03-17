const App= () => {
  const persona={
    nombre:"Naruto",
    Apellido:"Uzumaki",
    Edad:16,
    
    direccion:{
      Calle:"Paseo de las palmas",
      numExt:618,
      numIn:"",
      ciudad:"Konohagakure",
    }
  };

const contactoPersona={
  telefono:"283 124 5290",
  email:"angel28pocoyoq@gmail.com",
  web:"www.zonarutopuden.net",
};

const infoPersona = {...persona, ...contactoPersona, empresa: "AnimeYT"};
infoPersona.apodo="Ero sennin"

//console.table(infoPersona);


  const {Edad, nombre, Apellido}= persona;
  const {Calle, numExt, ciudad}= persona.direccion;
  const humanos=["Minato", "Kushina", "Sasuke", "Sakura"];
  const [padre, madre, hermano, hermana]=humanos;
  const mascotas = ["Santa's helper", "Snow Ball"];

  const familia =[...humanos, ...mascotas, "Shikamaru"];
  console.log(familia)


  return(
  <div className="App">
    {/*ECMAScript 6*/}
    <h3>{`Mi nombre es ${nombre} ${Apellido}, tengo ${Edad} años y vivo en ${Calle} número ${numExt}, ${ciudad}`}</h3>
   <br />
   {"Mi familia lo conforman: "}
   <ul>
     <li>{`Mi padre: ${padre}`}</li>
     <li>{`Mi madre: ${madre}`}</li>
     <li>{`Mi hermanos: ${hermano} y ${hermana}`}</li>

   </ul>
  </div>
);

}

export default App;

