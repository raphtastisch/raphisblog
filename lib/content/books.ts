import { Book, Category, Locale, languageMapping } from "../config";
import fs from 'fs';
import path from 'path';


// export const old_books: Book[] = [

//     {
//         titleDE: "Aufklärung jetzt",
//         subtitleDE: "Für Vernunft, Wissenschaft, Humanismus und Fortschritt",
//         shortDescriptionDE:
//             "Die Werte der Aufklärung sind der beste Quell für Fortschritt und Wohlbefinden.",
//         longDescriptionDE:
//             "Steven Pinker liefert mit „Aufklärung jetzt“ eine grandios geschriebene Darstellung, wieso die Werte der Aufklärung der beste Quell für Fortschritt und Wohlbefinden sind. Darum müssen wir diese Werte gerade jetzt, wo sie unter Dauerfeuer von allen Seiten stehen, eisern verteidigen.",
//         title: "Enlightenment Now",
//         subtitle: "The Case for Reason, Science, Humanism, and Progress",
//         shortDescription:
//             "The values of the Enlightenment are the best source for progress and well-being.",
//         longDescription:
//             'In "Enlightenment Now", Steven Pinker provides a brilliantly written exposition on why the values of the Enlightenment are the best source for progress and well-being. Therefore, we must staunchly defend these values, especially now when they are under constant attack from all sides.',
//         iLike: "Greate description of our core values and why they are important.",
//         author: "Steven Pinker",
//         slug: "enlightenment-now",
//         hasFullText: true,
//         date: new Date("2018-02-13 00:00:00"),
//         tags: ["non-fiction", "politics", "philosophy"],
//         releaseDate: new Date("2023-11-18 00:00:00"),
//         initialReleaseUrl: "https://materie.at/gk/rezension-aufklaerung-jetzt/",
//         initialReleaseName: "Materie.at",
//         amazonLink: "https://amzn.to/4beImS1",

//     },
//     {
//         titleDE: "Superforecasting",
//         subtitleDE: "Die Kunst der richtigen Prognose",
//         shortDescriptionDE:
//             "Wie gehen besere Prognosen und die Wissenschaft dahinter.",
//         longDescriptionDE:
//             "„Superforecasting“ ist ein überaus interessantes Buch über die Wissenschaft der Vorhersage, wie man Vorhersagen verbessern kann und warum man keiner Vorhersage glauben sollte, wenn die Person dahinter nicht eine Liste all ihrer richtigen und falschen Vorhersagen aus der Vergangenheit bereitstellt.",
//         title: "Superforecasting",
//         subtitle: "The Art and Science of Prediction",
//         author: "Philip E. Tetlock & Dan Gardner",
//         slug: "superforecasting",
//         shortDescription:
//             "How to make better predictions and the science behind it.",
//         longDescription:
//             '"Superforecasting" is a fascinating book about the science of forecasting. It discusses how to improve predictions and why one should not believe a prediction unless the person behind it provides a list of all their correct and incorrect predictions from the past.',
//         iLike: "We are in dire need to improve our forecasts and treat them as a scientific discipline.",
//         hasFullText: true,
//         date: new Date("2015-09-29 00:00:00"),
//         tags: ["non-fiction", "strategy", "business", "psychology"],
//         releaseDate: new Date("2024-01-01 00:00:00"),
//         initialReleaseUrl: "https://materie.at/gk/rezension-superforecasting-die-kunst-der-richtigen-prognose/",
//         initialReleaseName: "Materie.at",
//         amazonLink: "https://amzn.to/4beImS1"
//     },
//     {

//         shortDescriptionDE:
//             "Geostrategische Überlegungen aus US-amerikanischer Sicht mit Fokus auf China.",
//         longDescriptionDE:
//             "„The Strategy of Denial“ bietet spannende Einblicke in das Thema globale Geostrategie und wie diese aus US-amerikanischer Sicht aussehen könnte. Der Fokus liegt dabei voll auf dem Machtkampf mit China - Europa ist dabei nur ein Nebendarsteller.",
//         title: "The Strategy of Denial",
//         subtitle: "American Defense in an Age of Great Power Conflict",
//         author: "Elbridge A. Colby",
//         slug: "strategyofdenial",
//         shortDescription:
//             "Geostrategic considerations from a U.S. perspective with a focus on China.",
//         longDescription:
//             '"The Strategy of Denial" offers intriguing insights into global geostrategy and how it might be perceived from a U.S. perspective. The focus is entirely on the power struggle with China - Europe is merely a side actor in this context.',
//         hasFullText: true,
//         iLike: "Interesting view of international power relations and an intriguing game-theory based strategy.",
//         date: new Date("2022-09-20 00:00:00"),
//         tags: ["non-fiction", "politics", "strategy"],
//         releaseDate: new Date("2023-12-07 00:00:00"),
//         initialReleaseUrl: "https://materie.at/gk/rezension-the-strategy-of-denial/",
//         initialReleaseName: "Materie.at",
//         amazonLink: "https://amzn.to/4beImS1"
//     },
//     {
//         titleDE: "Ein verheißenes Land",
//         subtitleDE: "Teil 1 der Biografie des 44. Präsidenten der USA",
//         shortDescriptionDE: "Der erste Teil von Obamas spannender Autobiografie.",
//         longDescriptionDE:
//             "„Ein verheißenes Land“ ist der erste Teil von Barack Obamas Autobiographie. Es beschreibt seinen Werdegang zum mächtigsten Mann der Welt und gibt spannende Einblick in die schwierigsten und folgenreichsten Entscheidungen seiner ersten Amtszeit. Dabei wirft es ein spannendes Licht auf die Überlegungen, die hinter seinen weitreichendsten Handlungen stehen.",
//         title: "A Promised Land",
//         subtitle: "Part 1 of the Biography of the 44th President of the United States",
//         author: "Barack Obama",
//         slug: "promised-land",
//         shortDescription: "The first part of Obama's fascinating autobiography.",
//         longDescription:
//             '"A Promised Land" is the first part of Barack Obamas autobiography. It describes his journey to becoming the most powerful man in the world and provides intriguing insights into the most challenging and consequential decisions of his first term. It also sheds an interesting light on the considerations behind his most far-reaching actions.',
//         hasFullText: true,
//         iLike: "A fascinating look behind the scenes, makes many decisions way more understandable.",
//         date: new Date("2020-11-17 00:00:00"),
//         tags: ["biography", "non-fiction", "politics"],
//         amazonLink: "https://amzn.to/3UmkIx0",
//         releaseDate: new Date("2023-12-01 00:00:00"),
//         initialReleaseUrl: "https://materie.at/gk/rezension-ein-verheissenes-land-obamas-autobiographie/",
//         initialReleaseName: "Materie.at",

//     },
//     {
//         title: "Outlive",
//         subtitle:
//             "How to live longer, feel better, and stay alive until the breakthroughs arrive.",
//         author: "Peter Attia",
//         shortDescription: "A book about health, prevention and logevity.",
//         longDescription:
//             "What you can do now to drastically increase the chance of living longer and healthier. I liked the actionable, science backed insights. Boils down what you can influence and what you can't (yet). Prevention is key, there is no wonderdrug. Attia's approach combines cutting-edge research with practical advice, focusing on lifestyle changes and medical practices that can extend life expectancy and improve quality of life, emphasizing the power of proactive health management.",
//         slug: "outlive",
//         hasFullText: false,
//         iLike: "Actionable, science backed insights. No quick wins, but a long-term approach to health.",
//         date: new Date("2021-08-01"),
//         tags: ["non-fiction", "science", "health", "fitness"],
//     },
//     {
//         title: "Why We Sleep",
//         subtitle: "Unlocking the Power of Sleep and Dreams",
//         author: "Matthew Walker",
//         slug: "why-we-sleep",
//         shortDescription: "An insightful look into the science of sleep.",
//         longDescription: "Presents groundbreaking research on the importance of sleep, its impact on our health, brain function, and overall well-being. It explores the various stages of sleep and how they each contribute to memory, learning, and emotional processing. Additionally, the book delves into the consequences of sleep deprivation and provides practical advice for improving sleep hygiene and quality,",
//         iLike: "I used to sacrifice sleep for work, friends and studies. This book changed completly how I value sleep.",
//         date: new Date("2017-10-03"),
//         tags: ["health", "science", "psychology"],
//     },
//     {
//         title: "The Origins of Political Order",
//         subtitle: "From Prehuman Times to the French Revolution",
//         author: "Francis Fukuyama",
//         slug: "origins-of-political-order",
//         shortDescription:
//             "A comprehensive analysis of the development of political systems.",
//         longDescription:
//             "Offers an in-depth examination of social, economic, and ideological factors that have shaped various political systems. It emphasizes the influence of diverse civilizations and historical contexts in the development of political norms and practices, from ancient tribal societies to the sophisticated state mechanisms observed on the eve of the French Revolution.",
//         iLike: "Intringuing instights into the development of political systems and the factors that shaped them.",
//         date: new Date("2011-04-12"),
//         tags: ["non-fiction", "politics", "history", "sociology"],
//     },
//     {
//         title: "Sapiens",
//         subtitle: "A Brief History of Humankind",
//         author: "Yuval Noah Harari",
//         slug: "sapiens",
//         shortDescription:
//             "A compelling narrative of humanity's creation and evolution.",
//         longDescription:
//             "Presents a thought-provoking account of human history, from the Stone Age to the twenty-first century, focusing on the cognitive, agricultural, and scientific revolutions. Harari delves into how these transformations have shaped societies and cultures, raising important questions about where humanity is headed in the future.",
//         iLike: "One of my all-time favorites. Helps to understand the big picture of human history.",
//         date: new Date("2014-05-15"),
//         tags: ["non-fiction", "history", "science", "sociology"],
//     },

//     {
//         title: "Leaders Eat Last",
//         author: "Simon Sinek",
//         slug: "leaders-eat-last",
//         shortDescription: "An exploration of effective leadership practices.",
//         longDescription:
//             "Deep-dive into the qualities that make a great leader, emphasizing the importance of creating a trusting and cooperative environment. It explores how leaders can inspire confidence and loyalty in their teams by prioritizing their well-being and fostering a sense of belonging and purpose. Sinek draws on real-life examples and psychological research to illustrate how such leadership styles benefit individual team members and the overall success of an organization.",
//         iLike: "Helped me understand that leadership is about protection, not power and status.",
//         date: new Date("2014-01-07"),
//         tags: ["non-fiction", "leadership", "business"],
//     },

//     {
//         title: "Barking Up the Wrong Tree",
//         subtitle:
//             "The Surprising science Behind Why Everything You Know About Success Is (Mostly) Wrong",
//         author: "Eric Barker",
//         slug: "barking-up-the-wrong-tree",
//         shortDescription:
//             "A fresh perspective on the true meaning and path to success.",
//         longDescription:
//             "Eric Barker uses evidence and research to debunk common myths about success, offering insights into what truly drives success in personal and professional life. He examines various success stories and scientific findings to reveal unconventional, yet effective strategies for achieving lasting success and fulfillment.",
//         iLike: "Gave me a different look on how to achieve success and what it really means.",
//         date: new Date("2017-05-16"),
//         tags: ["non-fiction", "psychology", "business", "science"],
//     },
//     {
//         title: "Start With Why",
//         subtitle: "How Great Leaders Inspire Everyone to Take Action",
//         author: "Simon Sinek",
//         slug: "start-with-why",
//         shortDescription: "Exploring the power of inspiration in leadership.",
//         longDescription:
//             "This book discusses the importance of understanding the 'why' behind actions and decisions, particularly in leadership, to inspire and motivate others. Sinek illustrates how leaders who are clear about their purpose can create a loyal following and drive meaningful change in their organizations and communities.",
//         iLike: "Helped me to understand that why you do something is in the long run more important than how you do it.",
//         date: new Date("2009-10-29"),
//         tags: ["non-fiction", "leadership", "strategy", "business", "mindset"],
//     },

//     {
//         title: "Thinking, Fast and Slow",
//         author: "Daniel Kahneman",
//         slug: "thinking-fast-and-slow",
//         shortDescription:
//             "An exploration of the two systems that drive the way we think.",
//         longDescription:
//             "Nobel laureate Daniel Kahneman explains the dual systems of our brain: the fast, intuitive, and emotional; and the slow, deliberate, and logical, and how they shape our decision-making. He delves into the impact of these systems on our perception, judgment, and choices, offering profound insights into the complexities of human thought and behavior.",
//         iLike: "Better understanding of my brain, why I sometimes behave like I do, and what to do about it.",
//         date: new Date("2011-10-25"),
//         tags: ["non-fiction", "psychology", "economics", "strategy"],
//     },
//     {
//         title: "The Art of Thinking Clearly",
//         author: "Rolf Dobelli",
//         slug: "art-of-thinking-clearly",
//         shortDescription: "A guide to identifying and avoiding cognitive biases.",
//         longDescription:
//             "Presents a series of short chapters that address various cognitive biases and logical fallacies that people commonly succumb to in their everyday thinking. Dobelli provides practical advice on how to recognize and overcome these mental traps, ultimately leading to clearer, more effective decision-making and problem-solving.",
//         iLike: "I understand and can avoid coginitiv biases so much better after this book.",
//         date: new Date("2013-05-14"),
//         tags: ["non-fiction", "psychology", "strategy"],
//     },
//     {
//         title: "Getting Things Done",
//         subtitle: "The Art of Stress-Free Productivity",
//         author: "David Allen",
//         slug: "getting-things-done",
//         shortDescription: "A revolutionary approach to personal productivity.",
//         longDescription:
//             "This book outlines a comprehensive organizational system for managing tasks and responsibilities in both professional and personal life, aiming to reduce stress and increase efficiency. It introduces innovative strategies for prioritizing tasks, decluttering the mind, and achieving a more productive and balanced lifestyle.",
//         iLike: "Really shaped how I organize my tasks and improve my productivity.",
//         date: new Date("2001-01-01"),
//         tags: ["non-fiction", "productivity", "self-help", "business"],
//     },
//     {
//         title: "Atomic Awakening",
//         subtitle: "A New Look at the History and Future of Nuclear Power",
//         author: "James Mahaffey",
//         slug: "atomic-awakening",
//         shortDescription: "An insightful history and analysis of nuclear power.",
//         longDescription:
//             "An engaging narrative of the development of nuclear power, from its earliest beginnings to its current status and future potential. Provides an in-depth look at the scientific breakthroughs, political decisions, and technological advancements that have shaped the nuclear industry, offering a balanced perspective on its benefits and challenges.",
//         iLike: "Incredible insights into the history of nuclear power, its potential and how the irrational fear of nuclear energy developed.",
//         date: new Date("2009-07-15"),
//         tags: ["non-fiction", "science", "history", "technology"],
//     },
//     {
//         title: "Option B",
//         subtitle: "Facing Adversity, Building Resilience, and Finding Joy",
//         author: "Sheryl Sandberg & Adam Grant",
//         slug: "option-b",
//         shortDescription: "Navigating through adversity and building resilience.",
//         longDescription:
//             "Sheryl Sandberg, in collaboration with psychologist Adam Grant, shares her personal journey of overcoming tragedy and offers insights on building resilience and finding joy after loss. The book combines personal anecdotes with psychological research, providing practical advice on how to face hardships, grow stronger from challenges, and rediscover joy and meaning in life.",
//         iLike: "Great storytelling as well as enlightening insights into grief and resilience.",
//         date: new Date("2017-04-24"),
//         tags: ["non-fiction", "mindset", "psychology", "self-help"],
//     },
//     {
//         title: "Man's Search for Meaning",
//         author: "Viktor E. Frankl",
//         slug: "mans-search-for-meaning",
//         shortDescription:
//             "A Holocaust survivor's insights into finding meaning in life.",
//         longDescription:
//             "A profound memoir and psychological exploration of finding meaning in life, especially in the face of extreme adversity. Frankl, a Holocaust survivor, describes his experiences in Nazi concentration camps and introduces his theory of logotherapy, which asserts that the primary human drive is not pleasure but the pursuit of what we find meaningful.",
//         iLike: "Eye-opening account from a Holocoust surivor of why happiness comes from within and is only the byproduct of a meaningful life.",
//         date: new Date("1946-01-01"),
//         tags: ["non-fiction", "psychology", "biography", "philosophy", "history"],
//     },

//     {
//         title: "Antifragile",
//         subtitle: "Things That Gain from Disorder",
//         author: "Nassim Nicholas Taleb",
//         slug: "antifragile",
//         shortDescription:
//             "Explores how some systems benefit from shocks and volatility.",
//         longDescription:
//             "This book discusses how certain systems, including economic and biological, actually benefit from shocks, volatility, and uncertainty. Taleb introduces the concept of 'antifragility,' a property beyond resilience, where these systems thrive and grow when exposed to chaos. The book challenges conventional wisdom about risk and decision-making.",
//         iLike: "Though-provoking insights into risk, uncertainty, and how to benefit from them.",
//         date: new Date("2012-11-27"),
//         tags: [
//             "non-fiction",
//             "economics",
//             "philosophy",
//             "psychology",
//             "business",
//         ],
//     },
//     {
//         title: "The Selfish Gene",
//         author: "Richard Dawkins",
//         slug: "selfish-gene",
//         shortDescription:
//             "A revolutionary perspective on evolution focusing on gene-centered view.",
//         longDescription:
//             "'The Selfish Gene' revolutionized the understanding of natural selection. The book argues that the gene is the principal unit of selection in evolution. Dawkins proposes that genes are selfish entities, working to ensure their own survival. This influential work has significantly impacted evolutionary biology and the study of animal behavior.",
//         iLike: "I love the science of evolution - and this book is a great extension with an intriguing perspective.",
//         date: new Date("1976-01-01"),
//         tags: ["non-fiction", "biology", "science"],
//     },
//     {
//         title: "The Righteous Mind",
//         subtitle: "Why Good People are Divided by Politics and Religion",
//         author: "Jonathan Haidt",
//         slug: "righteous-mind",
//         shortDescription:
//             "Examines the moral foundations that underpin our political and religious beliefs.",
//         longDescription:
//             "Delves into the psychological bases of our political and religious convictions. Haidt explores how moral judgments are not entirely based on logic but are deeply influenced by intuition and emotion. The book offers insights into the origins of our divided political landscape and suggests ways to foster understanding.",
//         iLike: "Helped me understand how people can hold such different beliefs compared to mine and still be good people.",
//         date: new Date("2012-03-13"),
//         tags: ["non-fiction", "psychology", "politics", "religion", "sociology"],
//     },
//     {
//         title: "How to Win Friends and Influence People",
//         author: "Dale Carnegie",
//         slug: "how-to-win-friends",
//         shortDescription: "A timeless guide to interpersonal skills and success.",
//         longDescription:
//             "A landmark book in the field of self-help and personal development. It provides practical advice on improving communication skills, building relationships, and influencing others. Carnegie's principles, based on understanding human nature, have helped millions achieve personal and professional success.",
//         iLike: "A classic with timeless lessions for better communication and improved personal relationships.",
//         date: new Date("1936-01-01"),
//         tags: [
//             "non-fiction",
//             "self-help",
//             "psychology",
//             "business",
//             "communication",
//         ],
//     },

//     {
//         title: "Scout Mindset",
//         author: "Julia Galef",
//         slug: "scout-mindset",
//         shortDescription:
//             "Exploration of cognitive biases and rational thinking.",
//         longDescription:
//             'Delves into how individuals can overcome cognitive biases and emotional reasoning to adopt a more accurate and rational approach to thinking and decision making. It emphasizes the importance of truth over comfort in beliefs. It presents strategies for developing the "scout mindset," a mental approach focused on seeking truth, even when it challenges existing beliefs, leading to more effective and objective decision-making.',
//         iLike: "Having an open mindset is such an important an overrated skill. This book is a great guide to it.",
//         date: new Date("2021-04-13"),
//         tags: ["psychology", "strategy", "mindset", "innovation", "non-fiction"],
//     },

//     {
//         title: "Poor Economics",
//         author: "Abhijit V. Banerjee & Esther Duflo",
//         slug: "poor-economics",
//         shortDescription:
//             "Analysis of global poverty and strategies to alleviate it.",
//         longDescription:
//             "The book offers an insightful exploration into the lives of the poor and the economic decisions they make. It presents groundbreaking research and analysis on the most effective ways to address global poverty. Banerjee and Duflo use real-world examples and rigorous evidence to challenge common assumptions and propose innovative solutions that can significantly improve the well-being of the world's poorest populations.",
//         iLike: "Eye-opening insights into the lives of the poor and the most effective strategies to alleviate poverty.",
//         date: new Date("2011-05-01"),
//         tags: ["economics", "strategy", "politics", "science", "non-fiction"],
//     },
//     {
//         title: "Crucial Conversations",
//         subtitle: "Tools for Talking When Stakes Are High",
//         author: "Kerry Patterson",
//         slug: "crucial-conversations",
//         shortDescription:
//             "Guide on effective communication in high-stakes situations.",
//         longDescription:
//             "Provides strategies and tools for navigating high-stakes conversations. It focuses on techniques for effective dialogue, managing emotions, and achieving positive outcomes in crucial interactions. Patterson elucidates how mastering these skills leads to improved relationships, increased trust, and more effective conflict resolution in both personal and professional contexts.",
//         iLike: "Like almost everyone, I tried to avoid crucial conversations if possible. This book helped me to change my mind and how thought me how to tackle them.",
//         date: new Date("2002-01-01"),
//         tags: ["communication", "self-help", "leadership", "non-fiction"],
//     },
//     {
//         title: "Immune",
//         subtitle: "A Journey into the Mysterious System That Keeps You Alive",
//         author: "Philipp Dettmer",
//         slug: "immune",
//         shortDescription: "Insightful exploration of the human immune system.",
//         longDescription:
//             'Offers a captivating and accessible tour of the human immune system, explaining its complex workings and the critical role it plays in our health. Dettmer, creator of the Youtube-Channel "Kurzgesagt", simplifies the intricacies of immunology, revealing how this vital system protects us from diseases, adapts to new threats, and maintains the delicate balance necessary for survival.',
//         iLike: "Our immune system is so important and yet so little understood. This book is a great in-depth guide to it for non-medical profesionals.",
//         date: new Date("2021-11-16"),
//         tags: ["science", "biology", "health", "non-fiction"],
//     },
//     {
//         title: "The Beginning of Infinity",
//         subtitle: "Explanations That Transform the World",
//         author: "David Deutsch",
//         slug: "beginning-infinity",
//         shortDescription: "A deep dive into the philosophy of science.",
//         longDescription:
//             "Explores the limitless potential of human understanding and knowledge. It delves into a variety of disciplines, challenging conventional beliefs and proposing a new framework for considering the growth of knowledge. Famed quantum-physicist Deutsch argues that through scientific exploration and the pursuit of explanations, humanity can continually expand its grasp of the universe, leading to infinite progress and understanding.",
//         iLike: "Strongly aligns with my world view. It provides a very interesting concept of what good explanations are and how human knowledge develops.",
//         date: new Date("2011-03-31"),
//         tags: ["philosophy", "science", "non-fiction", "innovation"],
//     },
//     {
//         title: "Zero to One",
//         subtitle: "Notes on Startups, or How to Build the Future",
//         author: "Peter Thiel & Blake Masters",
//         slug: "zero-to-one",
//         shortDescription: "Insights on entrepreneurship and startup innovation.",
//         longDescription:
//             "Offers a unique perspective on startup innovation and entrepreneurship. It challenges conventional wisdom and presents contrarian views on building successful technology businesses, emphasizing the creation of new markets. Thiel and Masters guide readers through the process of thinking and acting innovatively, arguing that true progress comes from going from zero to one, rather than iterating on existing ideas.",
//         iLike: "Great book that shaped my thinking about radical innovation.",
//         date: new Date("2014-09-16"),
//         tags: ["entrepreneurship", "business", "innovation", "non-fiction"],
//     },
//     {
//         title: "The Moral Landscape",
//         subtitle: "How Science Can Determine Human Values",
//         author: "Sam Harris",
//         slug: "moral-landscape",
//         shortDescription: "A scientific approach to understanding human values.",
//         longDescription:
//             "Argues that science can, and should, be an authority on moral issues, shaping human values and setting out what constitutes a good life. Harris challenges the traditional boundary between science and morality, proposing that scientific understanding of the human mind can lead to more objective and rational bases for discussing morality, ethics, and human well-being.",
//         iLike: "Science must provide the basis for our universal moral values - we can't leave it to religios fanatics and hypocratic politicians.",
//         date: new Date("2010-10-05"),
//         tags: ["religion", "science", "philosophy", "non-fiction"],
//     },
//     {
//         title: "How to Talk to Everyone",
//         subtitle: "92 Little Tricks for Big Success in Relationships",
//         author: "Leil Lowndes",
//         slug: "how-to-talk-everyone",
//         shortDescription: "A guide to effective communication and social skills.",
//         longDescription:
//             "Explores various techniques and strategies for engaging in successful conversations in different social and professional contexts. Lowndes provides practical tips and insights on how to make a positive impression, build rapport, and effectively communicate with people from all walks of life, enhancing both personal and professional relationships.",
//         iLike: "Great tips and tricks for better communication and social skills.",
//         date: new Date("2003-12-01"),
//         tags: ["communication", "self-help", "non-fiction"],
//     },
//     {
//         title: "The Phoenix Project",
//         subtitle: "A Novel About IT, DevOps, and Helping Your Business Win",
//         author: "Gene Kim, Kevin Behr & George Spafford",
//         slug: "phoenix-project",
//         shortDescription:
//             "A novel that illuminates the principles of IT and DevOps.",
//         longDescription:
//             "Combines a great story with insightful lessons about information technology and DevOps practices, transforming how IT is viewed and implemented in businesses. Through a fictional narrative, the authors vividly illustrate the challenges and complexities of IT management, while providing practical strategies for overcoming obstacles and driving efficiency and innovation.",
//         iLike: "I would have never thought that a novel about DevOps could be so thrilling and insightful.",
//         date: new Date("2013-01-10"),
//         tags: ["IT", "technology", "business", "fiction"],
//     },
//     {
//         title: "Nonviolent Communication",
//         subtitle: "A Language of Life",
//         author: "Marshall B. Rosenberg",
//         slug: "nonviolent-communication",
//         shortDescription: "A framework for compassionate communication.",
//         longDescription:
//             "Presents a powerful approach to developing empathy and honest expression, aimed at resolving conflicts and improving personal and professional relationships. Rosenberg's methodology emphasizes understanding and compassion in communication, teaching readers how to listen empathetically and express themselves authentically, fostering greater connection and mutual respect.",
//         iLike: "Listening empathically is an imensly valuable skill - and this book is a great guide to it.",
//         date: new Date("2003-09-01"),
//         tags: ["communication", "self-help", "non-fiction"],
//     },
//     {
//         title: "Algorithms to Live By",
//         subtitle: "The Computer Science of Human Decisions",
//         author: "Brian Christian & Tom Griffiths",
//         slug: "algorithms-live-by",
//         shortDescription: "Applying computer algorithms to everyday life.",
//         longDescription:
//             "Explores how concepts from computer science can be used to solve problems in everyday decision making, from finding a parking spot to managing time effectively. Christian and Griffiths demonstrate how algorithms developed for computers can also optimize various aspects of human life, offering innovative perspectives on how to approach common challenges with logic and efficiency.",
//         iLike: "Great heuristics for everyday life based on decades of computer science research.",
//         date: new Date("2016-04-19"),
//         tags: ["technology", "strategy", "psychology", "non-fiction"],
//     },
//     {
//         title: "Atomic Habits",
//         subtitle: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
//         author: "James Clear",
//         slug: "atomic-habits",
//         shortDescription: "Strategies for habit formation and change.",
//         longDescription:
//             "Offers a comprehensive guide to building good habits, breaking bad ones, and mastering the tiny behaviors that lead to remarkable results. The author provides practical strategies and insights into the psychology of habit formation, demonstrating how small changes can lead to significant improvements in productivity, health, and overall well-being.",
//         iLike: "Good habits are the foundation of a good life. Atomic habits was a great guide to improve my habits.",
//         date: new Date("2018-10-16"),
//         tags: ["productivity", "self-help", "psychology", "non-fiction"],
//     },
//     {
//         title: "Factfulness",
//         subtitle:
//             "Ten Reasons We're Wrong About the World – and Why Things Are Better Than You Think",
//         author: "Hans Rosling",
//         slug: "factfulness",
//         shortDescription:
//             "A new perspective on global trends and misconceptions.",
//         longDescription:
//             "Challenges common misconceptions about the world and shows through data how many aspects of global health and economics have improved over time. Rosling provides a compelling argument for why a more fact-based worldview is crucial, using statistics and engaging storytelling to demonstrate progress and counter pessimistic perspectives.",
//         iLike: "Like nearly everyone, I was somehow pessimistic about the future. This book changed my mind. Everything gets better - slowly but steadily.",
//         date: new Date("2018-04-03"),
//         tags: ["politics", "history", "sociology", "science", "non-fiction"],
//     },
//     {
//         title: "Life 3.0",
//         subtitle: "Being Human in the Age of Artificial Intelligence",
//         author: "Max Tegmark",
//         slug: "life-3-0",
//         shortDescription:
//             "Exploration of artificial intelligence and its future impact.",
//         longDescription:
//             "Discusses the future of artificial intelligence and its implications for humanity, covering ethical, philosophical, and technical aspects of AI. Tegmark navigates through the potential scenarios of AI development, exploring how it could redefine what it means to be human and examining both the opportunities and challenges of a future intertwined with advanced technology.",
//         iLike: "Cool ideas and interesting perspectives of the future of life.",
//         date: new Date("2017-08-29"),
//         tags: ["AI", "technology", "philosophy", "non-fiction"],
//     },
//     {
//         title: "Rationality",
//         subtitle: "What It Is, Why It Seems Scarce, Why It Matters",
//         author: "Steven Pinker",
//         slug: "rationality",
//         shortDescription: "An examination of human rationality.",
//         longDescription:
//             "Investigates the nature of rationality, why it's essential for understanding and solving global problems, and how it influences human thought and society. Pinker delves into the psychological and evolutionary underpinnings of rational thinking, discussing how it shapes our perceptions and decisions, and emphasizing its critical role in fostering more enlightened and effective societies.",
//         iLike: "Helped me to understand rationality better and how to get more of it.",
//         date: new Date("2021-09-28"),
//         tags: ["science", "psychology", "philosophy", "non-fiction"],
//     },
//     {
//         title: "Outliers",
//         subtitle: "The Story of Success",
//         author: "Malcolm Gladwell",
//         slug: "outliers",
//         shortDescription: "Explores what makes high-achievers different.",
//         longDescription:
//             "Delves into the stories of successful people to argue that we pay too much attention to what successful people are like, and too little to where they are from: their culture, their family, their generation, and the idiosyncratic experiences of their upbringing. Offers insights into what makes some people excel and how one can potentially replicate their success.",
//         iLike: "Gave me a fresh perspective on the roots of success and the factors that contribute to it.",
//         date: new Date("2008-11-18"),
//         tags: ["mindset", "psychology", "sociology", "non-fiction"],
//     },
//     {
//         title: "The Tipping Point",
//         subtitle: "How Little Things Can Make a Big Difference",
//         author: "Malcolm Gladwell",
//         slug: "tipping-point",
//         shortDescription:
//             "Explains how small actions can lead to large-scale social changes.",
//         longDescription:
//             "Examines the phenomena of 'tipping points', or the moments when an idea, trend, or social behavior crosses a threshold, tips, and spreads like wildfire. Uses examples from the spread of diseases to the popularity of books and TV shows to illustrate how these critical moments shape our world.",
//         iLike: "Excellent book about why major changes happen suddenly and how things can go viral.",
//         date: new Date("2000-03-01"),
//         tags: ["politics", "psychology", "economics", "non-fiction"],
//     },
//     {
//         title: "Blink",
//         subtitle: "The Power of Thinking Without Thinking",
//         author: "Malcolm Gladwell",
//         slug: "blink",
//         shortDescription:
//             "Discusses the importance of intuitive decision making.",
//         longDescription:
//             "Explores the concept of 'thin-slicing,' where snap judgments and first impressions can often be as accurate as deliberate decision-making. Snap judgements based on deep expertise are often bettter than long, deliberate decisions. Gladwell argues that this ability can be both incredibly powerful and sometimes disastrously flawed.",
//         iLike: "Shows the power of snap judgements based on experience and expertise. I didn't know they are that powerful.",
//         date: new Date("2005-01-11"),
//         tags: [
//             "psychology",
//             "strategy",
//             "non-fiction",
//             "mindset",
//             "productivity",
//         ],
//     },
//     {
//         title: "Talking to Strangers",
//         subtitle: "What We Should Know about the People We Don't Know",
//         author: "Malcolm Gladwell",
//         slug: "talking-to-strangers",
//         shortDescription: "Investigates the interactions we have with strangers.",
//         longDescription:
//             "Challenges our preconceptions about the ability to understand and communicate with strangers. Uses a series of encounters and incidents in the lives of people to show that our inability to understand strangers can lead to conflicts and misunderstandings, with a focus on what goes wrong in these interactions.",
//         iLike: "Helped me understand how important it is to understand the limits of my ability to understand other people and how to improve it.",
//         date: new Date("2019-09-10"),
//         tags: ["communication", "psychology", "sociology", "non-fiction"],
//     },
//     {
//         title: "David and Goliath",
//         subtitle: "Underdogs, Misfits, and the Art of Battling Giants",
//         author: "Malcolm Gladwell",
//         slug: "david-and-goliath",
//         shortDescription: "Explores the dynamics between underdogs and giants.",
//         longDescription:
//             "Examines how disadvantages can be advantageous and how the powerful can be vulnerable. Uses stories from history, business, sports, and more to illustrate how underdogs have overcome obstacles and challenges through unconventional strategies, resilience, and the understanding of their unique strengths.",
//         iLike: "My mind was blown by the fact that david was actually the favorite in the fight against Goliath.",
//         date: new Date("2013-10-01"),
//         tags: ["strategy", "psychology", "mindset", "business", "non-fiction"],
//     },

//     {
//         title: "Scale",
//         subtitle:
//             "The Universal Laws of Life, Growth, and Death in Organisms, Cities, and Companies",
//         author: "Geoffrey West",
//         slug: "scale",
//         shortDescription:
//             "Investigation of the universal laws that govern the structure and behavior of cities, companies, and biological organisms.",
//         longDescription:
//             "Delves into how scale affects the dynamics of cities, companies, and biological life, revealing the underlying principles that shape their growth, development, and longevity. West combines interdisciplinary research to explain how scale impacts efficiency, sustainability, and innovation in these systems, offering insights into how understanding these principles can help tackle global challenges.",
//         iLike: "I've never thought much about scaling. Now I do - it's fascinating and very useful.",
//         date: new Date("2017-05-16"),
//         tags: ["science", "biology", "sociology", "business", "non-fiction"],
//     },

//     {
//         title: "Why Nations Fail",
//         subtitle: "The Origins of Power, Prosperity, and Poverty",
//         author: "Daron Acemoglu & James A. Robinson",
//         slug: "why-nations-fail",
//         shortDescription:
//             "An exploration of the reasons behind the success and failure of nations.",
//         longDescription:
//             "Examines the historical, geographic, and cultural factors that contribute to the prosperity or poverty of nations, arguing that inclusive political and economic institutions are the key to success. Acemoglu and Robinson provide a comprehensive analysis of how different societies have evolved and the critical roles played by institutions in determining the trajectory of nations' development and wealth distribution.",
//         iLike: "Novel insights into success drivers for nations and the importance of strong institutions.",
//         date: new Date("2012-03-20"),
//         tags: ["economics", "politics", "history", "sociology", "non-fiction"],
//     },
//     {
//         title: "The Alignment Problem",
//         subtitle: "Machine Learning and Human Values",
//         author: "Brian Christian",
//         slug: "alignment-problem",
//         shortDescription:
//             "A deep dive into the challenges of aligning AI systems with human values.",
//         longDescription:
//             "Explores the difficulties and ethical implications of creating artificial intelligence that can understand and align with human values, ethics, and social norms. The author examines the intersection of AI development and human ethics, discussing the complex challenge of ensuring that these rapidly advancing technologies act in ways that are beneficial and not detrimental to humanity.",
//         iLike: "Showed me why artificial general intelligence could cause a lot of problems and how hard it will be to control it.",
//         date: new Date("2020-10-06"),
//         tags: ["AI", "philosophy", "technology", "non-fiction"],
//     },
//     {
//         title: "The Evolution of Desire",
//         subtitle: "Strategies of Human Mating",
//         author: "David M. Buss",
//         slug: "evolution-of-desire",
//         shortDescription:
//             "An exploration of human mating strategies from an evolutionary perspective.",
//         longDescription:
//             "Analyzes human mating behavior through the lens of evolutionary psychology, revealing the underlying strategies and mechanisms that guide human sexual behavior and relationships. Buss provides a comprehensive overview of the factors influencing mate selection, attraction, and courtship, offering insights into how evolutionary forces have shaped modern romantic behaviors and preferences.",
//         iLike: "Evolutionary psychology is fascinating. The book helped me better understand human behavior when it comes to dating and romance.",
//         date: new Date("1994-01-01"),
//         tags: [
//             "psychology",
//             "evolution",
//             "biology",
//             "history",
//             "sociology",
//             "non-fiction",
//         ],
//     },
//     {
//         title: "The Moral Animal",
//         subtitle:
//             "Why We Are the Way We Are: The New Science of Evolutionary Psychology",
//         author: "Robert Wright",
//         slug: "moral-animal",
//         shortDescription:
//             "An examination of human psychology and social behavior from an evolutionary perspective.",
//         longDescription:
//             "Investigates the evolutionary roots of human behavior, ethics, and morality, suggesting that our psychological traits and social norms have developed to enhance survival and reproductive success. Wright integrates insights from biology, anthropology, and psychology to explain how evolutionary forces have shaped our moral instincts and social interactions.",
//         iLike: "Fascinating insights into the evolutionary origins of human behavior and morality.",
//         date: new Date("1994-08-29"),
//         tags: ["psychology", "evolution", "religion", "sociology", "non-fiction"],
//     },
//     {
//         title: "The Social Animal",
//         subtitle: "The Hidden Sources of Love, Character, and Achievement",
//         author: "David Brooks",
//         slug: "social-animal",
//         shortDescription:
//             "A narrative journey through the landscape of human nature and social interaction.",
//         longDescription:
//             "Uses the story of a fictional couple to explore the role of emotions, intuitions, and social dynamics in shaping our lives, decisions, and relationships. Brooks intertwines psychological and sociological research with narrative storytelling, offering an engaging and insightful look at how subconscious factors influence our behavior, relationships, and success.",
//         iLike: "At first I was skeptical about the narrative approach. But it turned out to be a great way to convey the insights.",
//         date: new Date("2011-03-08"),
//         tags: ["psychology", "sociology", "leadership", "non-fiction"],
//     },
//     {
//         title: "The Years of Lyndon Johnson",
//         author: "Robert A. Caro",
//         slug: "lbj-years",
//         shortDescription:
//             "An exhaustive biography of the 36th President of the United States, Lyndon B. Johnson.",
//         longDescription:
//             "A monumental book of the life and political career of Lyndon B. Johnson. It dives deep into relevant history and the lifes of important figures in his career. It's covering his early years, rise to power, and presidency. The series is notable for its depth and detail, spanning four parts that explore Johnson's complex personality, legislative achievements, and the significant impact of his domestic and foreign policies.",
//         iLike: "Simply the best biography ever. With a huge margin. Super long, but worth every second.",
//         date: new Date("2013-12-10"),
//         tags: ["biography", "politics", "history", "business", "non-fiction"],
//         amazonLink: "https://www.amazon.de/s?k=the+years+of+lyndon+johnson&i=stripbooks&camp=1638&creative=6742&linkCode=ur2&linkId=7978b47e290f1df3529a45a4117337a6&tag=raphaelfritz-21",
//     },
//     {
//         title: "Shoe Dog",
//         subtitle: "A Memoir by the Creator of Nike",
//         author: "Phil Knight",
//         slug: "shoe-dog",
//         shortDescription:
//             "The memoir of Nike's founder, Phil Knight, detailing the company's early days and rise to global prominence.",
//         longDescription:
//             "Recounts Phil Knight's journey from selling shoes out of his car trunk to building Nike into one of the world's most recognizable and profitable brands. It's a candid and humanizing look at the trials, tribulations, and triumphs of entrepreneurship and the relentless pursuit of a dream.",
//         iLike: "A great biography about a great entrepreneur. I never knew the story behind Nike.",
//         date: new Date("2016-04-27"),
//         tags: [
//             "biography",
//             "business",
//             "entrepreneurship",
//             "innovation",
//             "fitness",
//             "non-fiction"
//         ],
//     },
//     {
//         title: "Titan",
//         subtitle: "The Life of John D. Rockefeller, Sr.",
//         author: "Ron Chernow",
//         slug: "titan",
//         shortDescription:
//             "A comprehensive biography of John D. Rockefeller, Sr., detailing his life, business practices, philanthropy, and legacy.",
//         longDescription:
//             "Explores the complex figure of John D. Rockefeller, Sr., from his humble beginnings to becoming the world's first billionaire and the patriarch of one of the most influential families in American history. The book examines his business strategies, his contributions to the oil industry, and his extensive philanthropic efforts, offering insights into the man behind the wealth and the impact of his legacy on American capitalism and philanthropy.",
//         iLike: "Thrilling insights into the life of a ruthless entrepreneur, who simultanously was a philantropist by heart.",
//         date: new Date("2012-12-30"),
//         tags: [
//             "biography",
//             "business",
//             "non-fiction",
//             "history",
//             "mindset",
//             "religion",
//             "strategy",
//         ],
//     },
//     {
//         title: "Total Recall",
//         subtitle: "My Unbelievably True Life Story",
//         author: "Arnold Schwarzenegger",
//         slug: "total-recall",
//         shortDescription:
//             "The autobiography of Arnold Schwarzenegger, showcasing his journey from Austrian immigrant to bodybuilding champion, Hollywood superstar, and Governor of California.",
//         longDescription:
//             "Charts Schwarzenegger's multifaceted life, starting with his upbringing in Austria, his dominance in the world of bodybuilding, his storied acting career, and his unexpected foray into politics as the Governor of California. The book reveals his ambition, discipline, and the challenges he faced, providing a detailed look at his personal and professional life.",
//         iLike: "The great biography of one of my most famous countryman. A tale of unbeding will and discipline.",
//         date: new Date("2012-10-01"),
//         tags: [
//             "biography",
//             "strategy",
//             "politics",
//             "fitness",
//             "mindset",
//             "non-fiction",
//         ],
//     },
//     {
//         title: "The Pragmatic Programmer",
//         subtitle: "Timeless Lessons for Software Developers",
//         author: "Andrew Hunt & David Thomas",
//         slug: "pragmatic-programmer",
//         shortDescription: "A guide to software engineering principles and practices.",
//         longDescription: "Covers a broad range of software engineering topics, aiming to improve coding efficiency and design quality. Hunt and Thomas provide valuable insights and practical advice on various aspects of programming, from writing better code to managing projects effectively, making it a must-read for both novice and experienced software developers seeking to enhance their skills and methodologies.",
//         iLike: "Timeless lessons about software engineering and best practices. A must-read for every developer.",
//         date: new Date("2019-09-20"),
//         tags: ["IT", "technology", "strategy", "non-fiction"]
//     },
//     {
//         title: "The Infinite Game",
//         subtitle: "How to Achieve Long-Lasting Success in Business",
//         author: "Simon Sinek",
//         slug: "infinite-game",
//         shortDescription: "Exploration of leadership and sustainable business strategies.",
//         longDescription: 'Explores how adopting an "infinite mindset" can lead to greater innovation, trust, and long-term success in business and life. Sinek contrasts this approach with a "finite mindset" focused on short-term gains, arguing that leaders who embrace the principles of the infinite game build stronger, more innovative, and more resilient organizations.',
//         iLike: "Changing the scope of the game changes its rules. This book is a great guide to long-term success in business.",
//         date: new Date("2019-10-15"),
//         tags: ["business", "leadership", "psychology", "strategy", "innovation", "non-fiction"]
//     },
//     {
//         title: "Freakonomics",
//         subtitle: "A Rogue Economist Explores the Hidden Side of Everything",
//         author: "Steven D. Levitt & Stephen J. Dubner",
//         slug: "freakonomics",
//         shortDescription: "An unconventional exploration of economics.",
//         longDescription: "Uses economic theories to explore real-world phenomena and unconventional topics not typically associated with economics. Levitt and Dubner apply economic principles to a diverse range of subjects, from crime rates to parenting styles, revealing surprising connections and insights into the hidden aspects of everyday life.",
//         iLike: "Interesting and unconventional insights into the economic side of everyday life.",
//         date: new Date("2005-04-12"),
//         tags: ["economics", "sociology", "psychology", "non-fiction"]
//     },
//     {
//         title: "Die Macht unserer Gene",
//         subtitle: "How to use Knowledge about our Genes to improve our Health and Well-Being.",
//         author: "Daniel Wallerstorfer",
//         slug: "unsere-gene",
//         shortDescription: "A guide to understanding and improving your health through understanding your genes.",
//         longDescription: "Practical insights into the explanatory power of your genes by one of Austria's leading geneticist. A real eye-opener that shows how everyone can use knowledge about their genes to improve their health and well-being. This book is only available in German.",
//         iLike: "Daniels book helped me understand genes and their already known impact on my life better. One of the reasons for doing a full-genome sequencing.",
//         date: new Date("2021-03-26"),
//         tags: ["health", "science", "technology", "fitness", "non-fiction"]
//     },
//     {
//         title: "Breath",
//         subtitle: "The New Science of the Lost Art of Breathing",
//         author: "James Nestor",
//         slug: "breath",
//         shortDescription: "An exploration of the lost art and science of breathing.",
//         longDescription: "Explores the historical, scientific, and cultural dimensions of breathing. Reveals how the way we breathe has changed and deteriorated over centuries. Highlights the connection between breathing practices and overall health. Offers insights into how simple adjustments in breathing can lead to major health and wellness improvements. Combines scientific analysis with ancient wisdom.",
//         iLike: "I underestimated the power of breathing. This book changed my mind and my approach to it.",
//         date: new Date("2020-05-26"),
//         tags: ["health", "science", "history", "non-fiction", "mindset"]
//     },
//     {
//         title: "The Medici Effect",
//         subtitle: "What Elephants and Epidemics Can Teach Us About Innovation",
//         author: "Frans Johansson",
//         slug: "medici-effect",
//         shortDescription: "An examination of innovation inspired by the intersection of fields and cultures.",
//         longDescription: "Discusses how breakthrough ideas most often occur when we bring concepts from one field into a new, unfamiliar territory. Uses examples from various disciplines to illustrate how innovation happens at the intersection. Encourages breaking down traditional barriers and combining different fields of expertise. Challenges the reader to think differently and be more open to diverse ideas. Inspired by the Medici family of the Renaissance, who funded creators from a wide range of disciplines.",
//         iLike: "Valuable insights into the necessity of broad knowledge for innovation and creativity. ",
//         date: new Date("2004-10-01"),
//         tags: ["innovation", "strategy", "business", "science", "non-fiction", "entrepreneurship"]
//     },

//     {
//         title: "Animal Farm",
//         subtitle: "A Fairy Story",
//         author: "George Orwell",
//         slug: "animal-farm",
//         shortDescription: "A satirical tale of a group of farm animals who rebel against their human farmer.",
//         longDescription: "Depicts a group of farm animals who overthrow their human farmer, hoping to create a society where animals can be equal, free, and happy. However, the new regime becomes just as oppressive. The book is a critique of totalitarianism and a commentary on the corruption of revolutionary ideals and the nature of power. A thought-provoking read that remains relevant in modern times.",
//         iLike: "A great story with a powerful message. Read it!",
//         date: new Date("1945-08-17"),
//         tags: ["humor", "politics", "history", "classic", "fiction"]
//     },
//     {
//         title: "Achtsam morden",
//         subtitle: "A Mindful Approach to Murder",
//         author: "Karsten Dusse",
//         slug: "achtsam-morden",
//         shortDescription: "A darkly humorous novel about a lawyer's unique approach to dealing with his problems.",
//         longDescription: "Centers on a lawyer who, overwhelmed by life, stumbles upon the principles of mindfulness. In a twist of fate, he applies these principles to his criminal activities, leading to humorous and unexpected consequences. This novel blends crime, humor, and a unique take on mindfulness, making it a captivating and unusual read. This book is only available in German.",
//         iLike: "Funny, thrilling and actually useful. A great combination. No wonder this unconventional book became a bestseller.",
//         date: new Date("2019-05-27"),
//         tags: ["humor", "thrilling", "crime", "self-help", "fiction"]
//     },
//     {
//         title: "Fall of Giants",
//         subtitle: "Part One of The Century Trilogy ",
//         author: "Ken Follett",
//         slug: "fall-of-giants",
//         shortDescription: "An epic historical novel set during the major events of the 20th century.",
//         longDescription: `Follows five interrelated families throughout the events of the First World War, the Russian Revolution, and the struggle for women's suffrage. Combines factual history with a gripping narrative, showcasing Follett's ability to weave complex characters and intricate plot lines. Offers insight into the political and social turmoil of the early 20th century. Part one of the "Century Trilogy".`,
//         iLike: "History coming to live - a great way to dive into 20th century history.",
//         date: new Date("2010-09-28"),
//         tags: ["history", "fiction"]
//     },
//     {
//         title: "The Firm",
//         subtitle: "The Thriller That Became a Phenomenon",
//         author: "John Grisham",
//         slug: "the-firm",
//         shortDescription: "A legal thriller about a young attorney unknowingly hired by a mafia-controlled law firm.",
//         longDescription: "Focuses on a bright, ambitious lawyer who lands the job of his dreams at a prestigious law firm, only to discover it has a sinister dark side. Entangled in a web of deceit and corruption, he must find a way out. The novel is known for its fast-paced narrative, intricate plot, and exploration of legal and moral dilemmas.",
//         iLike: "Simply a great novel.",
//         date: new Date("1991-02-01"),
//         tags: ["thrilling", "crime", "fiction"]
//     },

//     {
//         title: "Sooley",
//         subtitle: "A Story of Basketball and Hope",
//         author: "John Grisham",
//         slug: "sooley",
//         shortDescription: "A novel about a young basketball player from South Sudan chasing his American dream.",
//         longDescription: "Follows the journey of a talented South Sudanese teenager who gets the chance to play basketball in the United States. Balancing the excitement of sports with the harsh realities of his war-torn homeland, the story explores themes of hope, resilience, and the transformative power of sports. It's a touching and inspiring tale that's a departure from Grisham's usual legal thrillers.",
//         iLike: "One of the best novels I've ever read. A great story about hope and resilience.",
//         date: new Date("2021-04-27"),
//         tags: ["fitness", "thrilling", "mindset", "fiction"]
//     },
//     {
//         title: "The Alchemist",
//         subtitle: "A Fable About Following Your Dream",
//         author: "Paulo Coelho",
//         slug: "alchemist",
//         shortDescription: "A philosophical book about a young shepherd's journey to discover his personal legend.",
//         longDescription: "Tells the story of Santiago, a young shepherd boy who dreams of finding a world treasure as fabulous as any ever found. The book is a metaphorical tale about following one's dreams and listening to the heart. Coelho's writing inspires a sense of wonder and introspection, making it a globally beloved modern classic.",
//         iLike: "I didn't expect a lot. But it was extremely captivating and inspiring.",
//         date: new Date("1988-01-01"),
//         tags: ["philosophy", "mindset", "classic", "fiction"]
//     },
//     {
//         title: "Harry Potter and the Methods of Rationality",
//         subtitle: "A Rational Take on the Wizarding World",
//         author: "Eliezer Yudkowsky",
//         slug: "hpmor",
//         shortDescription: "A fan fiction reimagining of the Harry Potter universe with a focus on rationality and science.",
//         longDescription: "Reimagines the Harry Potter world where Harry is raised with a scientific mindset and approaches the wizarding world with a rational and analytical perspective. The story explores themes of logic, philosophy, and science, offering a unique twist on the original series. It's a thought-provoking read for fans of the original books and those interested in critical thinking.",
//         iLike: "If you like Harry Potter, you will love this one. I didn't know that fan-fiction could be so awesome.",
//         date: new Date("2010-02-28"),
//         tags: ["science", "strategy", "mindset", "philosophy", "fiction"]
//     },
//     {
//         title: "His Majesty's Dragon",
//         subtitle: "Book One of Temeraire Series",
//         author: "Naomi Novik",
//         slug: "his-majestys-dragon",
//         shortDescription: "An alternative-historiy fantasy novel blending the Napoleonic Wars with intelligent, realistic dragons.",
//         longDescription: "Introduces a captivating world where the Napoleonic Wars are fought with the aid of intelligent dragons. The story follows Captain Will Laurence, who discovers a rare dragon egg and forms an unbreakable bond with the dragon, Temeraire. Together, they face the challenges of aerial combat and the complexities of 19th-century society. This novel is a unique blend of historical accuracy and fantasy, offering a fresh perspective on dragon lore.",
//         iLike: "Alternative history with realistic dragons. I loved it as a teenager. Still a great read.",
//         date: new Date("2006-03-28"),
//         tags: ["history", "fiction"]
//     },
//     {
//         title: "The Code Breaker",
//         subtitle: "Jennifer Doudna, Gene Editing, and the Future of the Human Race",
//         author: "Walter Isaacson",
//         slug: "code-breaker",
//         shortDescription: "An exploration of CRISPR, gene editing, and their profound implications.",
//         longDescription: "Explores the life of Jennifer Doudna and her groundbreaking work in developing CRISPR, a revolutionary gene-editing technology. The book delves into the ethical dilemmas, potential applications, and far-reaching implications of this scientific breakthrough. Isaacson's narrative combines scientific detail with the human stories behind the discoveries, offering a compelling look at a major scientific advancement.",
//         iLike: "A great tale exploring the origins of Crisper, one of the most powerful technologies of our time.",
//         date: new Date("2021-03-09"),
//         tags: ["biography", "science", "evolution", "innovation", "non-fiction"]
//     },
//     {
//         title: "The Secrets of Sand Hill Road",
//         subtitle: "Venture Capital and How to Get It",
//         author: "Scott Kupor",
//         slug: "secrets-sand-hill-road",
//         shortDescription: "Insider insights into the world of venture capital.",
//         longDescription: "Provides a deep dive into the intricacies of venture capital, from the perspective of a seasoned insider. Kupor shares knowledge on how VCs operate, what they look for in startups, and how entrepreneurs can effectively pitch and negotiate. The book is a valuable resource for anyone looking to understand the complexities of raising venture capital and provides practical advice for navigating this challenging landscape.",
//         iLike: "Helped me understand the world of VCs better.",
//         date: new Date("2019-06-04"),
//         tags: ["business", "entrepreneurship", "strategy", "non-fiction"]
//     },
//     {
//         title: "The Lean Startup",
//         subtitle: "How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
//         author: "Eric Ries",
//         slug: "lean-startup",
//         shortDescription: "A guide to innovative startup strategies and practices.",
//         longDescription: "Introduces a new approach to business that's being adopted around the world. Ries outlines how startups can be more efficient, innovate rapidly, and adapt to changing markets through 'lean' principles. The book emphasizes the importance of validated learning, rapid scientific experimentation, and a number of counter-intuitive practices that shorten product development cycles, measure actual progress without resorting to vanity metrics, and learn what customers really want.",
//         iLike: "A timeless classic for every entrepreneur.",
//         date: new Date("2011-09-13"),
//         tags: ["business", "entrepreneurship", "innovation", "strategy", "non-fiction"]
//     }
// ];


// the dots ar enecessary, otherwise it goes thinks @ is a folder

// export const new_books_raw: any[] = JSON.parse(fs.readFileSync('./lib/content/books.json', 'utf8'));



const pathname = path.join(process.cwd(), "public", "books.json")
export const new_books_raw: any[] = JSON.parse(fs.readFileSync(pathname, 'utf8'));

export const books: Book[] = new_books_raw.map((book) => {
    book.date = new Date(book.date);
    book.releaseDate = book.releaseDate ? new Date(book.releaseDate) : undefined;
    book.hasFullText = book.hasFullText ? true : false;
    book.category = 'books' as Category;
    return book;
})

// console.log(books.filter((book) => book.hasFullText))


// export function checkTags(): void {
//     for (let tag of getUniqueTags(books)) {
//         if (!(tag in fullNameTags)) {
//             console.log(`Tag "${tag}" is not in fullNameTags`);
//         }
//     }
// }


// const fullNameTags: { [keys: string]: string } = {
//     "non-fiction": "Sachbuch",
//     science: "Wissenschaft",
//     health: "Gesundheit",
//     fitness: "Fitness",
//     politics: "Politik",
//     philosophy: "Philosophie",
//     strategy: "Strategie",
//     business: "Business",
//     psychology: "Psychologie",
//     biography: "Biografie",
//     history: "Geschichte",
//     sociology: "Soziologie",
//     leadership: "Leadership",
//     mindset: "Mindset",
//     economics: "Wirtschaft",
//     productivity: "Produktivität",
//     "self-help": "Selbsthilfe",
//     technology: "Technologie",
//     biology: "Biologie",
//     religion: "Religion",
//     communication: "Kommunikation",
//     innovation: "Innovation",
//     entrepreneurship: "Unternehmertum",
//     IT: "IT & Software",
//     fiction: "Fiktion",
//     AI: "KI",
//     evolution: "Evolution",
//     humor: "Humor",
//     classic: "Klassiker",
//     thrilling: "Spannend",
//     crime: "Krimi",
// };

export const uniqueTags: string[] = [
    'non-fiction',
    'science',
    'health',
    'fitness',
    'politics',
    'philosophy',
    'strategy',
    'business',
    'psychology',
    'biography',
    'history',
    'sociology',
    'leadership',
    'mindset',
    'economics',
    'productivity',
    'self-help',
    'technology',
    'biology',
    'religion',
    'communication',
    'innovation',
    'entrepreneurship',
    'IT',
    'fiction',
    'AI',
    'evolution',
    'humor',
    'classic',
    'thrilling',
    'marketing',
    'crime']



export function getUniqueTags(bookList: Book[] = books): string[] {
    const uniqueTags: string[] = [];

    books.forEach((book) => {
        book.tags!.forEach((tag: string) => {
            if (!uniqueTags.includes(tag)) {
                uniqueTags.push(tag);
            }
        });
    });

    return uniqueTags;
}


export function getBooksWithFullText(): Book[] {
    return books.filter((book) => book.hasFullText);
}

export function createAmazonLink(title?: string, locale: Locale = "de"): string {

    if (!title) {
        return "https://www.amazon.de/b?_encoding=UTF8&tag=raphaelfritz-21&linkCode=ur2&linkId=d40a5c82224a657f67daad1c413ab1d7&camp=1638&creative=6742&node=186606"
    }
    else {

        // make title ready for url
        title = title.replace(
            " ",
            "+"
        )

        return `https://www.amazon.de/s?k=${title}&i=audible&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1Y539SCFIVZKF&sprefix=alignment+prob%2Caudible%2C286&linkCode=ll2&tag=raphaelfritz-21&linkId=11b8f9eddf91a807e78d59cdb6ea22b5&language=${languageMapping[locale]}&ref_=as_li_ss_tl`

    }
}