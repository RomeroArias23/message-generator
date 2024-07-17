let output = document.getElementById('output');
let btnAlejandra = document.getElementById('btnAlejandra');
let btnTiago = document.getElementById('btnTiago');

let alejandraPizarnikQuotes = [
    '"Cada palabra dice lo que dice y además más y otra cosa."',
    '"He tratado de no perderme al borde de las noches."',
    '"El deseo de morir es rey."',
    '"Caminos del espejo. Caminos en el tiempo."',
    '"La rebelión consiste en mirar una rosa hasta pulverizarse los ojos."',
    '"La que murió de su vestido azul se pasea entre los árboles de la noche."',
    '"La carencia se hace visible como una nube en la ventana."',
    '"Acariciar el deseo que nunca se acaba."',
    '"Hablo como en los sueños."',
    '"Soy el deseo de morir."',
    '"No quiero ir nada más que hasta el fondo."',
    '"El miedo es un velo que oscurece el mundo."',
    '"La palabra que hace de mi cuerpo una señal, un cuerpo de papel, un cuerpo de palabras."',
    '"La jaula se ha vuelto pájaro y se ha volado."',
    '"Una mirada desde la alcantarilla puede ser una visión del mundo."',
];

let tiagoPzkQuotes = [
    '"Vos sabés que ya no puedo ni mirarte, te ves tan diferente, sin mí no es lo mismo." - "Sola"',
    '"La nena más linda está conmigo, le gusta bailar y lo hace fino." - "Además de Mí"',
    '"A veces pienso que nunca te olvidaré, pero la vida sigue, no hay vuelta atrás." - "Entre Nosotros"',
    '"Te tengo en mi mente cada segundo, no te puedo sacar." - "Entre Nosotros"',
    '"Si supieras lo que siento, estarías aquí a mi lado." - "Salimo de Noche"',
    '"El tiempo no borra las heridas, pero las cicatrices quedan para siempre." - "Flow de Barrio"',
    '"Quiero que vuelvas, aunque sé que es imposible." - "Quiero Volver"',
    '"Lo nuestro fue real, no un simple sueño." - "Házmelo"',
    '"Me duele pensar que ya no somos lo que éramos." - "Loco"',
    '"En mi corazón siempre vas a estar, aunque no te pueda tener." - "BZRP Music Sessions #48"',
    '"Quiero que sepas que siempre te voy a amar, aunque la vida nos separe." - "Házmelo"',
    '"Aunque no estés aquí, siempre te siento cerca." - "BZRP Music Sessions #48"',
    '"Nunca imaginé que el final sería así." - "Salimo de Noche"',
    '"Estoy perdido en un mar de recuerdos." - "Además de Mí"',
    '"No hay vuelta atrás, pero te extraño igual." - "Quiero Volver"',
    '"Tus besos eran mi única medicina." - "Loco"',
    '"Te fuiste y me dejaste solo en la oscuridad." - "Flow de Barrio"',
    '"Cada canción me recuerda a ti." - "Sola"',
    '"No puedo dejar de pensar en ti, aunque quiera." - "Entre Nosotros"',
    '"Tu sonrisa era mi sol en los días grises." - "Loco"'
];


function getRandomQuote(quotesArray) {
    return quotesArray[Math.floor(Math.random() * quotesArray.length)];
}

btnAlejandra.addEventListener('click', function() {
    output.innerHTML = getRandomQuote(alejandraPizarnikQuotes);
});

btnTiago.addEventListener('click', function() {
    output.innerHTML = getRandomQuote(tiagoPzkQuotes);
});
