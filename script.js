const resultsMeta = {
  traditions: {
    label: 'Сторонник традиций',
    summary: 'Вы чаще доверяете проверенным нормам, опыту старших и устойчивым жизненным ориентирам.',
    description: 'Для вас важны порядок, преемственность и уважение к уже сложившимся правилам. Вы не отрицаете новое полностью, но считаете, что изменения должны быть осторожными и осмысленными.',
    takeaway: 'Такой подход помогает сохранять стабильность, но иногда стоит внимательнее прислушиваться к новым идеям и аргументам молодого поколения.'
  },
  change: {
    label: 'Открытый к переменам',
    summary: 'Вы скорее поддерживаете самостоятельность, свободу выбора и право человека строить жизнь по-своему.',
    description: 'Вы легко принимаете новое, спокойно относитесь к переменам и считаете, что каждое поколение должно искать собственный путь. Для вас особенно важны гибкость, развитие и личная ответственность.',
    takeaway: 'Такой взгляд помогает двигаться вперёд, но в спорных ситуациях полезно помнить о ценности опыта и накопленных семейных традиций.'
  },
  mediator: {
    label: 'Посредник поколений',
    summary: 'Вы стремитесь не выбирать одну сторону, а искать взаимопонимание между разными взглядами.',
    description: 'Вы умеете видеть сильные стороны и в позиции старших, и в позиции молодёжи. Вам ближе диалог, аргументы и попытка соединить уважение к опыту с правом на изменения.',
    takeaway: 'Именно такой подход чаще всего помогает снижать напряжение и переводить конфликт поколений в конструктивный разговор.'
  },
  pragmatic: {
    label: 'Гибкий прагматик',
    summary: 'Вы оцениваете ситуацию не по возрасту участников, а по тому, что действительно работает на практике.',
    description: 'Для вас не так важно, кто именно высказывает мнение - младший или старший. Главное, насколько решение разумно, уместно и помогает достигать результата.',
    takeaway: 'Такой подход помогает избегать лишних стереотипов, а ещё показывает, что между поколениями можно искать не спор, а полезные точки опоры.'
  }
};

const questions = [
  {
    tag: 'Взгляды на опыт',
    title: 'Если старшие говорят: «Мы лучше знаем, как правильно», как вы это чаще воспринимаете?',
    answers: [
      { text: 'Обычно в этом есть смысл, потому что у них больше жизненного опыта.', sub: 'Опыт важнее скорости изменений.', scores: { traditions: 2, mediator: 1 } },
      { text: 'Иногда это полезно, но слепо соглашаться не стоит.', sub: 'Нужно обсуждать и сравнивать аргументы.', scores: { mediator: 2, pragmatic: 1 } },
      { text: 'Каждое поколение должно само искать свой путь.', sub: 'Старые правила не всегда подходят сегодняшней жизни.', scores: { change: 2, pragmatic: 1 } }
    ]
  },
  {
    tag: 'Выбор будущего',
    title: 'Кто должен больше влиять на выбор профессии и жизненного пути подростка?',
    answers: [
      { text: 'Семья и старшие, потому что они лучше видят риски.', sub: 'Их советы помогают избежать ошибок.', scores: { traditions: 2 } },
      { text: 'Сам подросток, но с учётом разумных советов.', sub: 'Решение должно быть самостоятельным, но не изолированным.', scores: { mediator: 2, pragmatic: 1 } },
      { text: 'Сам человек, даже если его выбор не совпадает с ожиданиями семьи.', sub: 'Личная самореализация важнее давления.', scores: { change: 2 } }
    ]
  },
  {
    tag: 'Технологии',
    title: 'Как вы относитесь к мысли, что гаджеты и интернет слишком сильно меняют людей?',
    answers: [
      { text: 'Скорее согласен(на): технологии часто вредят живому общению.', sub: 'Слишком много зависимости и суеты.', scores: { traditions: 2, pragmatic: 1 } },
      { text: 'Зависит от того, как ими пользоваться.', sub: 'Важно не средство, а мера и цель.', scores: { mediator: 2, pragmatic: 1 } },
      { text: 'Это естественная часть современной жизни, без этого уже невозможно.', sub: 'Технологии просто меняют форму общения.', scores: { change: 2 } }
    ]
  },
  {
    tag: 'Семья',
    title: 'Если в семье возникает спор между «так принято» и «я хочу по-другому», что вам ближе?',
    answers: [
      { text: 'Традиции лучше сохранять, если они не вредят.', sub: 'Семья держится на преемственности.', scores: { traditions: 2, mediator: 1 } },
      { text: 'Нужно искать компромисс и договариваться.', sub: 'Главное - услышать обе стороны.', scores: { mediator: 2 } },
      { text: 'Человек вправе строить свою жизнь по новым правилам.', sub: 'Не всё старое обязательно нужно повторять.', scores: { change: 2, pragmatic: 1 } }
    ]
  },
  {
    tag: 'Причины споров',
    title: 'Что, по-вашему, чаще всего лежит в основе конфликта поколений?',
    answers: [
      { text: 'Ослабление уважения к старшим и традициям.', sub: 'Обществу не хватает устойчивости.', scores: { traditions: 2 } },
      { text: 'Разный жизненный опыт и недостаток диалога.', sub: 'Проблема не в возрасте, а в непонимании.', scores: { mediator: 2, pragmatic: 1 } },
      { text: 'Нежелание старших принять перемены и новую реальность.', sub: 'Мир меняется быстрее, чем привычки.', scores: { change: 2 } }
    ]
  },
  {
    tag: 'Советы родителей',
    title: 'Как вы обычно относитесь к советам родителей или старших родственников?',
    answers: [
      { text: 'Чаще всего прислушиваюсь и считаю их полезными.', sub: 'Они многое уже прошли и видят шире.', scores: { traditions: 2 } },
      { text: 'Слушаю, но оцениваю, подходит ли это именно мне.', sub: 'Совет полезен, если его можно обсудить.', scores: { mediator: 2, pragmatic: 1 } },
      { text: 'Часто считаю, что в современных условиях эти советы уже устарели.', sub: 'Сегодня нужно действовать иначе.', scores: { change: 2 } }
    ]
  },
  {
    tag: 'Изменения',
    title: 'Что важнее для общества: стабильность или готовность меняться?',
    answers: [
      { text: 'Стабильность, потому что она даёт порядок и уверенность.', sub: 'Без неё людям трудно опираться на что-то прочное.', scores: { traditions: 2 } },
      { text: 'Баланс между устойчивостью и развитием.', sub: 'Нужны и основа, и движение вперёд.', scores: { mediator: 2, pragmatic: 1 } },
      { text: 'Готовность меняться, потому что мир уже не может стоять на месте.', sub: 'Гибкость стала необходимостью.', scores: { change: 2 } }
    ]
  },
  {
    tag: 'Решение',
    title: 'Что лучше всего помогает уменьшить конфликт поколений?',
    answers: [
      { text: 'Больше уважения к авторитету старших.', sub: 'Опыт должен сохранять вес.', scores: { traditions: 2 } },
      { text: 'Открытый разговор и готовность услышать друг друга.', sub: 'Диалог важнее давления.', scores: { mediator: 2 } },
      { text: 'Право каждого жить без навязанных моделей.', sub: 'Свобода выбора снижает напряжение.', scores: { change: 2, pragmatic: 1 } }
    ]
  }
];

const screens = {
  start: document.getElementById('screen-start'),
  quiz: document.getElementById('screen-quiz'),
  result: document.getElementById('screen-result')
};
const startBtn = document.getElementById('start-btn');
const aboutBtn = document.getElementById('about-btn');
const aboutDialog = document.getElementById('about-dialog');
const closeAboutBtn = document.getElementById('close-about-btn');
const restartTopBtn = document.getElementById('restart-top-btn');
const retryBtn = document.getElementById('retry-btn');
const copyBtn = document.getElementById('copy-btn');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const questionTag = document.getElementById('question-tag');
const questionTitle = document.getElementById('question-title');
const answersWrap = document.getElementById('answers');
const resultTitle = document.getElementById('result-title');
const resultSummary = document.getElementById('result-summary');
const resultDescription = document.getElementById('result-description');
const resultTakeaway = document.getElementById('result-takeaway');
const scoreBars = document.getElementById('score-bars');

let currentQuestionIndex = 0;
let scoreState = createEmptyScores();

function createEmptyScores() {
  return { traditions: 0, change: 0, mediator: 0, pragmatic: 0 };
}

function switchScreen(target) {
  Object.values(screens).forEach((screen) => screen.classList.remove('screen--active'));
  screens[target].classList.add('screen--active');
}

function startQuiz() {
  currentQuestionIndex = 0;
  scoreState = createEmptyScores();
  switchScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressText.textContent = `Вопрос ${currentQuestionIndex + 1} из ${questions.length}`;
  progressFill.style.width = `${progressPercent}%`;
  questionTag.textContent = question.tag;
  questionTitle.textContent = question.title;
  answersWrap.innerHTML = '';

  question.answers.forEach((answer) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.type = 'button';
    btn.innerHTML = `${answer.text}<span>${answer.sub}</span>`;
    btn.addEventListener('click', () => {
      Object.entries(answer.scores).forEach(([key, value]) => {
        scoreState[key] += value;
      });
      currentQuestionIndex += 1;
      if (currentQuestionIndex < questions.length) {
        renderQuestion();
      } else {
        showResult();
      }
    });
    answersWrap.appendChild(btn);
  });
}

function getSortedScores() {
  return Object.entries(scoreState).sort((a, b) => b[1] - a[1]);
}

function showResult() {
  const sorted = getSortedScores();
  const [winnerKey] = sorted[0];
  const meta = resultsMeta[winnerKey];
  const maxScore = sorted[0][1] || 1;
  resultTitle.textContent = meta.label;
  resultSummary.textContent = meta.summary;
  resultDescription.textContent = meta.description;
  resultTakeaway.textContent = meta.takeaway;
  scoreBars.innerHTML = '';

  sorted.forEach(([key, value]) => {
    const row = document.createElement('div');
    row.className = 'score-bar';
    const width = Math.max((value / maxScore) * 100, 6);
    row.innerHTML = `
      <div class="score-bar__top">
        <span>${resultsMeta[key].label}</span>
        <strong>${value} балл${declOfNum(value, ['', 'а', 'ов'])}</strong>
      </div>
      <div class="score-bar__track">
        <div class="score-bar__fill" style="width:${width}%"></div>
      </div>
    `;
    scoreBars.appendChild(row);
  });

  switchScreen('result');
}

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function resetQuiz() {
  switchScreen('start');
  currentQuestionIndex = 0;
  scoreState = createEmptyScores();
}

async function copyResult() {
  const sorted = getSortedScores();
  const [winnerKey] = sorted[0];
  const meta = resultsMeta[winnerKey];
  const text = `Мой результат в тесте «Конфликт поколений»: ${meta.label}. ${meta.summary}`;
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = 'Скопировано';
  } catch (error) {
    copyBtn.textContent = 'Не удалось скопировать';
  }
  setTimeout(() => {
    copyBtn.textContent = 'Скопировать результат';
  }, 1600);
}

startBtn.addEventListener('click', startQuiz);
retryBtn.addEventListener('click', startQuiz);
restartTopBtn.addEventListener('click', resetQuiz);
copyBtn.addEventListener('click', copyResult);
aboutBtn.addEventListener('click', () => aboutDialog.showModal());
closeAboutBtn.addEventListener('click', () => aboutDialog.close());
aboutDialog.addEventListener('click', (event) => {
  const rect = aboutDialog.getBoundingClientRect();
  const isInDialog = rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
  if (!isInDialog) aboutDialog.close();
});
