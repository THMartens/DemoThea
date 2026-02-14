let currentQuestion = 0;

// Hard-coded quiz data = easy to read & edit
const questions = [
{
type: 'image',
src: 'assets/photos/quiz/q1.jpeg',
text:   `Ookal was het voor ons beiden niet helemaal duidelijk, 
        op een gegeven moment hebben we samen een datum besloten als officiële start van onze relatie.
        Welke datum was dat ook alweer?`,
answers: ['25 juni 2018', '26 juni 2018', '25 juni 2019', '26 juni 2019'],
correct: 3
},
{
type: 'video',
src: 'assets/photos/quiz/q2.mp4',
text:   `We hebben regelmatig een potje gebowld tegen elkaar. 
        Maar wat zijn onze persoonlijke records? (alleen potjes met zijn tweeën tellen mee)`,
answers: ['Ties: 131 - Thea: 82', 'Ties: 124 - Thea: 72', 'Ties: 111 - Thea: 92', 'Ties: 91 - Thea: 92'],
correct: 0
},
{
type: 'image',
src: 'assets/photos/quiz/q3.jpeg',
text:   `Een bijzondere date was het Italië-evenement \'Smaak en stijl\', waar Thea op mysterieuze wijze tickets voor had bemachtigd.
        Bij welk kasteel speelde dit evenement zich af?`,
answers: ['Slot Loevestein', 'Kasteel de Haar', 'Kasteel den Ham', 'Muiderslot'],
correct: 1
},
{
type: 'image',
src: 'assets/photos/quiz/q4.jpeg',
text:   `In de Apenheul hebben we aapjes op anderhalve meter afstand kunnen bewonderen. 
        Daarnaast hebben we natuurlijk Bongo geadopteerd. Wat voor een soort aapje is Bongo?`,
answers: ['Maki', 'Kapucijnaapje','Doodshoofdaapje', 'Klauwaapje'],
correct: 2
},
{
type: 'image',
src: 'assets/photos/quiz/q5.jpeg',
text:   `Als echte adrenalinejunkies hebben we de skihal in Bottrop onveilig gemaakt.
        Dit is de grootste indoor skipiste van Europa! Hoe veel meter aan piste is hier te vinden?`,
answers: ['340 meter', '440 meter', '540 meter', '640 meter'],
correct: 3
},
{
type: 'image',
src: 'assets/photos/quiz/q6.jpeg',
text:   `Ons bezoek aan 'De Koperen Hoogte' in Zwolle liep niet direct op rolletjes. Toen we uit de bus stapten, bevonden we ons in de middle of nowhere. 
        Wat was de naam van de bushalte die ons een mooie wandeling bezorgde?`,
answers: ['Lichtmisweg', 'Hermelenweg', 'Meeleweg', 'Kruisweg'],
correct: 2
},
{
type: 'video',
src: 'assets/photos/quiz/q7.mp4',
text:   `Tijdens een uitstapje naar Duitsland hebben we in de avond een heerlijk biertje gedronken in Osnabrück.
        Eerder op diezelfde dag waren we bij een boomkronenpad, een mooie en rustgevende plek. In welk plaatsje was dit?`,
answers: ['Hünstein', 'Bad Iburg', 'Lienen', 'Lage'],
correct: 1
},
{
type: 'image',
src: 'assets/photos/quiz/q8.jpeg',
text:   `In Milaan ging het vervoer niet altijd even lekker. Mede hierdoor hebben we wel een romantische nachtelijke wandeling door de stad gemaakt.
        Hoe lang hebben we erover gedaan vanaf het moment dat we op Schiphol het vliegtuig instapten tot we bij de deur van ons hostel aankwamen?`,
answers: ['4 uur', '5 uur', '6 uur', '7 uur'],
correct: 0
},
{
type: 'image',
src: 'assets/photos/quiz/q9.jpg',
text:   `Op de spellenbeurs in Utrecht konden we onze nerd-kant helemaal uitleven. Uiteindelijk hebben we er ook nog een leuk bordspel aan over gehouden.
        Thea had het Gelati al snel onder de knie. Wat is inmiddels de totale tussenstand volgens de lijst`,
answers: ['Thea: 5 - Ties: 3', 'Thea: 5 - Ties: 2', 'Thea: 6 - Ties: 3', 'Thea: 6 - Ties: 4'],
correct: 1
},
{
type: 'image',
src: 'assets/photos/quiz/q10.jpeg',
text: 'Ties is dit jaar afgestudeerd, wat een prestatie! Maar hoe heette nou ook alweer de specialisatie van zijn studie?',
answers: ['Algorithms of Data Science', 'Mathematics of Imaging and AI', 'Algorithms & Data Science', 'Mathematics of Data Science'],
correct: 3
}

];

const imageEl = document.getElementById('questionImage');
const textEl = document.getElementById('questionText');
const answerButtons = document.querySelectorAll('.answerBtn');
const questionNumberEl = document.getElementById('questionNumber');


const videoEl = document.getElementById('questionVideo');

function loadQuestion(index) {
const q = questions[index];

// Hide both first
imageEl.style.display = 'none';
videoEl.style.display = 'none';

if (q.type === 'image') {
imageEl.src = q.src;
imageEl.style.display = 'block';
}

if (q.type === 'video') {
videoEl.src = q.src;
videoEl.currentTime = 0;
videoEl.style.display = 'block';
}

questionNumberEl.textContent = `BEVEILIGINGSVRAAG ${index + 1} / ${questions.length}`;
textEl.textContent = q.text;

answerButtons.forEach((btn, i) => {
btn.textContent = q.answers[i];
btn.disabled = false;
});
}

answerButtons.forEach(btn => {
btn.addEventListener('click', () => {
    const chosenIndex = Number(btn.dataset.index);
    const correctIndex = questions[currentQuestion].correct;

    if (chosenIndex === correctIndex) {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion(currentQuestion);
    } else {
        // All correct → next scene
        goToScene(10);
    }
    } else {
    // Wrong answer → restart
    currentQuestion = 0;
    loadQuestion(currentQuestion);
    }
});
});

loadQuestion(currentQuestion);