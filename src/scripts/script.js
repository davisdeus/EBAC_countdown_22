
AOS.init();

const dateEvent = new Date("may 17, 2024 12:00:00");
// const dataDoEvento = new Date("may 17, 2024 12:00:00");
const timeStampEvent = dateEvent.getTime();
// const horaDoEvento = dataDoEvento.getTime();

const countingTheHours = setInterval(function () {
    const now = new Date();
    // const agora = new Date();
    const timeStampCurrent = now.getTime();
    // const dataAtual = agora.getTime();

    const distanceToTheEvent = timeStampEvent - timeStampCurrent;
    // const distanciaParaOEvento = horaDoEvento - dataAtual;


    const dayIsMs = 1000 * 60 * 60 * 24;
    const hoursIsMs = 1000 * 60 * 60;
    const minutesIsMs = 1000 * 60;
    const secondsIsMs = 1000;

    const daysToEvent = Math.floor(distanceToTheEvent / dayIsMs);
    const hoursToEvent = Math.floor((distanceToTheEvent % dayIsMs) / hoursIsMs);
    const minutesToEvent = Math.floor((distanceToTheEvent % hoursIsMs) / minutesIsMs);
    const secondsToEvent = Math.floor((distanceToTheEvent % minutesIsMs) / secondsIsMs);

    console.log(daysToEvent);
    console.log(hoursToEvent);
    console.log(minutesToEvent);
    console.log(secondsToEvent);

    document.getElementById('contador').innerHTML = `${daysToEvent}D ${hoursToEvent}H ${minutesToEvent}M ${secondsToEvent}S`

    if (distanceToTheEvent < 0) {
        clearInterval(countingTheHours);
        document.getElementById('contador').innerHTML = `O dia tão esperado chegou, 17 de maio de 2024!`;
    }

}, 1000);