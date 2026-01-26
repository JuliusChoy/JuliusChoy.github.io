import { Article, HeaderLink, OtherSeriesItem } from './types';

export const HEADER_LINKS: HeaderLink[] = [
  { label: 'Latest', href: '#' },
  { label: 'China', href: '#' },
  { label: 'Economy', href: '#' },
  { label: 'HK', href: '#' },
  { label: 'Asia', href: '#' },
  { label: 'Business', href: '#' },
  { label: 'Tech', href: '#' },
  { label: 'Lifestyle', href: '#' },
  { label: 'People & Culture', href: '#' },
  { label: 'World', href: '#' },
  { label: 'Opinion', href: '#' },
  { label: 'Video', href: '#' },
  { label: 'Sport', href: '#' },
  { label: 'PostMag', href: '#' },
  { label: 'Style', href: '#' },
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Why Chinese leader wants more technocrats in key roles",
    description: "Analyst believe this year's leadership shake-up will see more cadres with backgrounds in science, technology, engineering and mathematics taking on key roles.",
    date: "17 May, 2022",
    imageUrl: "https://picsum.photos/seed/tech/400/250",
    content: [
      "In a significant shift in personnel strategy, the Communist Party of China is increasingly looking to promote cadres with technical backgrounds to key leadership positions. This trend, often referred to as the rise of the 'technocrats', signals a departure from the dominance of career administrators and economists in the top echelons of power.",
      "Analysts suggest that this move is driven by the country's focus on scientific self-reliance and technological innovation as primary drivers of future growth. With challenges ranging from semiconductor manufacturing to green energy transition, the leadership believes that officials with specialized knowledge in science, technology, engineering, and mathematics (STEM) are better equipped to steer the nation's development.",
      "President Xi Jinping has repeatedly emphasized the importance of science and technology in achieving the 'great rejuvenation of the Chinese nation'. This rhetoric is now translating into concrete personnel decisions at the provincial and ministerial levels, where a growing number of newly appointed officials boast advanced degrees in engineering and natural sciences.",
      "This shift also reflects a broader effort to modernize the governance system. By integrating scientific expertise into policy-making, the party aims to enhance the precision and effectiveness of its administration. However, observers note that while technical skills are valued, political loyalty remains the paramount criterion for advancement within the party hierarchy."
    ]
  },
  {
    id: 2,
    title: "China's children of the 70s start to come to the fore",
    description: "Cadres born in the 1970s are starting to move up the Communist Party career ladder as they prepare for more senior roles.",
    date: "23 May, 2022",
    imageUrl: "https://picsum.photos/seed/run/400/250",
    content: [
      "A new generation of political leaders is emerging in China: the '70s generation'. Born during the tumultuous final years of the Cultural Revolution and coming of age during the era of Reform and Opening Up, this cohort brings a distinct set of experiences and perspectives to the table.",
      "Unlike their predecessors, many of whom were educated in the Soviet Union or had their education disrupted by political turmoil, the 70s generation benefited from the restoration of the national university entrance exam. Many have also had exposure to Western management concepts and international practices, making them potentially more adaptable to the complexities of a globalized world.",
      "As they ascend to vice-ministerial and provincial standing committee positions, these cadres are being tested in high-pressure environments. Their performance in areas such as economic development, environmental protection, and social stability will determine their future trajectory towards the highest levels of national leadership.",
      "Political analysts are closely watching this group for clues about the future direction of Chinese policy. While they are expected to adhere strictly to the party line, their unique generational background may influence their approach to problem-solving and governance in subtle but significant ways."
    ]
  },
  {
    id: 3,
    title: "Who can fill the shoes of China's Iron Lady Sun Chunlan on Politburo?",
    description: "For two years she has ruled the country's Covid-19 response with an iron fist, but at 72 the vice-premier is expected to step down at this year's party congress.",
    date: "17 Jun, 2022",
    imageUrl: "https://picsum.photos/seed/pol/400/250",
    content: [
      "Vice-Premier Sun Chunlan, the only woman in the current Politburo, has been a ubiquitous figure in China's battle against COVID-19. Known for her decisive and uncompromising style, she has earned the moniker 'Iron Lady' for her role in enforcing stringent lockdown measures across the country.",
      "However, as the 20th Party Congress approaches, Sun, now 72, is expected to retire, leaving a significant void in the country's top leadership. The question of who will succeed her—and whether another woman will take a seat at the Politburo table—is a subject of intense speculation among political observers.",
      "Finding a successor with Sun's unique blend of political clout and administrative experience will be a challenge. Her portfolio, which covers not only public health but also education and sports, requires a leader who can navigate complex bureaucratic landscapes and mobilize vast resources at a moment's notice.",
      "The lack of female representation in the highest echelons of Chinese politics remains a structural issue. While there are capable female cadres rising through the ranks, the path to the Politburo remains exceptionally narrow. Sun's retirement brings this disparity into sharp focus, raising questions about the party's commitment to gender diversity in its leadership core."
    ]
  }
];

export const OTHER_SERIES: OtherSeriesItem[] = [
  { id: 1, title: "Beijing's recalibration of its Taiwan policy", imageUrl: "https://picsum.photos/seed/tw/100/100" },
  { id: 2, title: "China Inc. goes global", imageUrl: "https://picsum.photos/seed/global/100/100" },
  { id: 3, title: "The new narrative: how China is telling its own story", imageUrl: "https://picsum.photos/seed/flag/100/100" },
  { id: 4, title: "China's 15th 5-year plan", imageUrl: "https://picsum.photos/seed/plan/100/100" },
];

export const HERO_INTRO_TEXT = "The Communist Party of China will undergo a major leadership shake-up at its party congress in the second half of 2022. In this series, the South China Morning Post looks at what the party's next generation of leaders might look like.";