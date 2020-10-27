const express = require('express')
const app = express()
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'))
//Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


const port = process.env.PORT || 8080


app.get('/', (req, res) => {
  //res.send('Hello World')
	res.render('home',{
		nombre: 'Bryan',
		anio: new Date().getFullYear()
	});
})
app.get('/about', (req, res) => {
  //res.send('Hello World')
	res.render('about',{
		anio: new Date().getFullYear()
	});
})

app.listen(port,()=>{
	console.log(`Escuchando peticiones en el puerto ${port}`);
})
