const booksdata = [
  {
    asin: '0201633892',
    year: 1995,
    rank: '1',
    title: 'How to Set Up and Maintain a World Wide Web Site: The Guide for Information Providers',
    author: 'Lincoln D. Stein'
  },
  {
    asin: '0465043623',
    year: 1995,
    rank: '2',
    title: 'A Mathematician Reads The Newspaper',
    author: 'John Allen Paulos'
  },
  {
    asin: '0553100343',
    year: 1995,
    rank: '3',
    title: 'Brightness Reef  (Bantam Spectra Book)',
    author: 'David Brin'
  },
  {
    asin: '0385419937',
    year: 1995,
    rank: '4',
    title: 'Silicon Snake Oil: Second Thoughts on the Information Highway',
    author: 'Clifford Stoll'
  },
  {
    asin: '0440203481',
    year: 1995,
    rank: '5',
    title: 'The Dark and Deadly Pool (Laurel-Leaf Suspense Fiction)',
    author: 'Joan Lowery Nixon'
  },
  {
    asin: '0679439196',
    year: 1995,
    rank: '6',
    title: 'Being Digital',
    author: 'Nicholas Negroponte'
  },
  {
    asin: '1565920600',
    year: 1995,
    rank: '7',
    title: 'Learning the UNIX Operating System (Nutshell Handbooks)',
    author: 'Jerry Peek'
  },
  {
    asin: '0812925602',
    year: 1995,
    rank: '8',
    title: 'Emblems of Mind: The Inner Life of Music and Mathematics',
    author: 'Edward Rothstein'
  },
  {
    asin: '0465051545',
    year: 1995,
    rank: '9',
    title: 'Fluid Concepts And Creative Analogies: Computer Models Of The Fundamental Mechanisms Of Thought',
    author: 'Douglas R. Hofstadter'
  },
  {
    asin: '0060950560',
    year: 1995,
    rank: '10',
    title: 'The Bold Vegetarian: 150 Inspired International Recipes',
    author: 'B. Kirchner'
  },
  {
    asin: '0962141542',
    year: 1995,
    rank: '11',
    title: 'Copy Workshop Workbook: Second Edition',
    author: 'Bruce Bendinger'
  },
  {
    asin: '0670772895',
    year: 1995,
    rank: '12',
    title: 'The Road Ahead (Book & CD)',
    author: 'Bill Gates'
  },
  {
    asin: '067973337X',
    year: 1995,
    rank: '13',
    title: 'The Beak of the Finch: A Story of Evolution in Our Time',
    author: 'Jonathan Weiner'
  },
  {
    asin: '0553096095',
    year: 1995,
    rank: '14',
    title: 'The Diamond Age, or, A Young Lady\'s Illustrated Primer',
    author: 'Neal Stephenson'
  },
  {
    asin: '0394756827',
    year: 1995,
    rank: '15',
    title: 'Gödel, Escher, Bach: An Eternal Golden Braid',
    author: 'Douglas Hofstadter'
  },
  {
    asin: '0553269828',
    year: 1995,
    rank: '16',
    title: 'Sundiver (The Uplift Saga, Book 1)',
    author: 'David Brin'
  },
  {
    asin: '0679437851',
    year: 1995,
    rank: '17',
    title: 'An Anthropologist On Mars: Seven Paradoxical Tales',
    author: 'Oliver Sacks'
  },
  {
    asin: '0060976519',
    year: 1995,
    rank: '18',
    title: 'The Language Instinct: How the Mind Creates Language',
    author: 'Steven Pinker'
  },
  {
    asin: '0836204158',
    year: 1995,
    rank: '19',
    title: 'It\'s Obvious You Won\'t Survive By Your Wits Alone',
    author: 'Scott Adams'
  },
  {
    asin: '0471117099',
    year: 1995,
    rank: '20',
    title: 'Applied Cryptography: Protocols, Algorithms, and Source Code in C',
    author: 'Bruce Schneier'
  },
  {
    asin: '0553279718',
    year: 1995,
    rank: '21',
    title: 'The Uplift War (The Uplift Saga, Book 3)',
    author: 'David Brin'
  },
  {
    asin: '0679419462',
    year: 1995,
    rank: '22',
    title: 'The Lost World',
    author: 'Michael Crichton'
  },
  {
    asin: '1556156502',
    year: 1995,
    rank: '23',
    title: 'Debugging the Development Process: Practical Strategies for Staying Focused, Hitting Ship Dates, and Building Solid Teams',
    author: 'Steve Maguire'
  },
  {
    asin: '055309503X',
    year: 1995,
    rank: '24',
    title: 'Emotional Intelligence: Why It Can Matter More than IQ',
    author: 'Daniel Goleman'
  },
  {
    asin: '0553562738',
    year: 1995,
    rank: '25',
    title: 'Doomsday Book',
    author: 'Connie Willis'
  },
  {
    asin: '055327418X',
    year: 1995,
    rank: '26',
    title: 'Startide Rising (The Uplift Saga, Book 2)',
    author: 'David Brin'
  },
  {
    asin: '0553296027',
    year: 1995,
    rank: '27',
    title: 'HIGH TRAIL TO DANGER (A Bantam Starfire Book)',
    author: 'Meg O\'Brien'
  },
  {
    asin: '0877735379',
    year: 1995,
    rank: '28',
    title: 'The Art of War (Pocket Edition) (Shambhala Pocket Classics)',
    author: 'Sun Tzu'
  },
  {
    asin: '0960271430',
    year: 1995,
    rank: '29',
    title: 'Communities Directory: A Guide to Cooperative Living :1995 (Communities Directory: A Guide to Intentional Communities & Cooperative Living)',
    author: 'Fellowship for…'
  },
  {
    asin: '1854103040',
    year: 1995,
    rank: '30',
    title: 'The Age of Innocence',
    author: 'David Hamilton'
  },
  {
    asin: '1565920422',
    year: 1995,
    rank: '31',
    title: 'Learning Perl (Nutshell Handbooks)',
    author: 'Randal L. Schwartz'
  },
  {
    asin: '0425150143',
    year: 1995,
    rank: '32',
    title: 'Mirror Image (Tom Clancy\'s Op-Center, Book 2)',
    author: 'Tom Clancy'
  },
  {
    asin: '067976402X',
    year: 1995,
    rank: '33',
    title: 'Snow Falling On Cedars',
    author: 'David Guterson'
  },
  {
    asin: '0684803534',
    year: 1995,
    rank: '34',
    title: 'Life on the Screen',
    author: 'Sherry Turkle'
  },
  {
    asin: '0836204387',
    year: 1995,
    rank: '35',
    title: 'Calvin & Hobbes Books, Tenth Anniversary Book',
    author: 'Bill Watterson'
  },
  {
    asin: '0887307655',
    year: 1995,
    rank: '36',
    title: 'Inside the Tornado: Marketing Strategies from Silicon Valley\'s Cutting Edge',
    author: 'Geoffrey A. Moore'
  },
  {
    asin: '1563891808',
    year: 1995,
    rank: '37',
    title: 'The Big Book of Weirdos (Factoid Books)',
    author: 'Carl A. Posey'
  },
  {
    asin: '0679734465',
    year: 1995,
    rank: '38',
    title: 'Valis',
    author: 'Philip K. Dick'
  },
  {
    asin: '0553562614',
    year: 1995,
    rank: '39',
    title: 'Snow Crash',
    author: 'Neal Stephenson'
  },
  {
    asin: '0201408961',
    year: 1995,
    rank: '40',
    title: 'Six Easy Pieces: Essentials of Physics Explained by Its Most Brilliant Teacher (boxed set: hardcover book + 6 CDs)',
    author: 'Richard P. Feynman'
  },
  {
    asin: '1564741389',
    year: 1995,
    rank: '41',
    title: 'Operation Elbow Room: An Interplanetary Ecofiction',
    author: 'Joseph J. Phillips'
  },
  {
    asin: '006105481X',
    year: 1995,
    rank: '42',
    title: 'Permutation City',
    author: 'Greg Egan'
  },
  {
    asin: '0451454146',
    year: 1995,
    rank: '43',
    title: 'The Innkeeper\'s Song',
    author: 'Peter S. Beagle'
  },
  {
    asin: '0140232370',
    year: 1995,
    rank: '44',
    title: 'Insanely Great: The Life and Times of Macintosh, the Computer that Changed Everything',
    author: 'Steven Levy'
  },
  {
    asin: '0815316194',
    year: 1995,
    rank: '45',
    title: 'Molecular Biology of the Cell 3E',
    author: 'Bruce Alberts'
  },
  {
    asin: '0884270629',
    year: 1995,
    rank: '46',
    title: 'The Race',
    author: 'Eliyahu M. Goldratt'
  },
  {
    asin: '0312141475',
    year: 1995,
    rank: '47',
    title: 'Surfing the Himalayas: A Spiritual Adventure',
    author: 'Frederick Lenz'
  },
  {
    asin: '0385315236',
    year: 1995,
    rank: '48',
    title: 'The Horse Whisperer',
    author: 'Nicholas Evans'
  },
  {
    asin: '0465005594',
    year: 1995,
    rank: '49',
    title: 'The Physics Of Star Trek',
    author: 'Lawrence M. Krauss'
  },
  {
    asin: '0553560735',
    year: 1995,
    rank: '50',
    title: 'Red Mars (Mars Trilogy)',
    author: 'Kim Stanley Robinson'
  },
  {
    asin: '0028604202',
    year: 1995,
    rank: '51',
    title: 'Politically Correct Holiday Stories: For an Enlightened Yuletide Season',
    author: 'James Finn Garner'
  },
  {
    asin: '014023313X',
    year: 1995,
    rank: '52',
    title: 'The Stone Diaries',
    author: 'Carol Diggory Shields'
  },
  {
    asin: '0802713122',
    year: 1995,
    rank: '53',
    title: 'Longitude: The True Story of a Lone Genius Who Solved the Greatest Scientific Problem of His Time',
    author: 'Dava Sobel'
  },
  {
    asin: '0201517973',
    year: 1995,
    rank: '54',
    title: 'The Art of Human-Computer Interface Design',
    author: 'Brenda Laurel'
  },
  {
    asin: '006105206X',
    year: 1995,
    rank: '55',
    title: 'Gold: The Final Science Fiction Collection',
    author: 'Isaac Asimov'
  },
  {
    asin: '1570360626',
    year: 1995,
    rank: '56',
    title: 'Lady Cottington\'s Pressed Fairy Book',
    author: 'Terry Jones'
  },
  {
    asin: '1886186006',
    year: 1995,
    rank: '57',
    title: 'Sponging: A Guide to Living Off Those You Love',
    author: 'Anthony E. Marsh'
  },
  {
    asin: '0201483408',
    year: 1995,
    rank: '58',
    title: 'Out of Control: The New Biology of Machines, Social Systems, & the Economic World',
    author: 'Kevin Kelly'
  },
  {
    asin: '0312855168',
    year: 1995,
    rank: '59',
    title: 'Legacy',
    author: 'Greg Bear'
  },
  {
    asin: '0029356717',
    year: 1995,
    rank: '60',
    title: 'Show Stopper!: The Breakneck Race to Create Windows NT and the Next Generation at Microsoft',
    author: 'G. Pascal Zachary'
  },
  {
    asin: '0062720465',
    year: 1995,
    rank: '61',
    title: 'Self-Editing for Fiction Writers: How to Edit Yourself into Print',
    author: 'Renni Browne'
  },
  {
    asin: '0060391510',
    year: 1995,
    rank: '62',
    title: 'Beyond Prozac: Antidotes for Modern Times',
    author: 'Michael J. Norden'
  },
  {
    asin: '0786860707',
    year: 1995,
    rank: '63',
    title: 'The Illusion of Life: Disney Animation',
    author: 'Ollie Johnston'
  },
  {
    asin: '034539657X',
    year: 1995,
    rank: '64',
    title: 'Dark Rivers of the Heart',
    author: 'Dean Koontz'
  },
  {
    asin: '0679432965',
    year: 1995,
    rank: '65',
    title: 'My American Journey: An Autobiography',
    author: 'Colin L. Powell'
  },
  {
    asin: '0028740483',
    year: 1995,
    rank: '66',
    title: 'MICROSOFT SECRETS: How the World\'s Most Powerful Software Company Creates Technology, Shapes Markets, and Manages People',
    author: 'Michael A. Cusumano'
  },
  {
    asin: '0140167153',
    year: 1995,
    rank: '67',
    title: 'Your Money or Your Life: Transforming Your Relationship with Money and Achieving Financial MORE',
    author: 'Joe Dominguez'
  },
  {
    asin: '1565920988',
    year: 1995,
    rank: '68',
    title: 'PGP: Pretty Good Privacy',
    author: 'Simson Garfinkel'
  },
  {
    asin: '0226702812',
    year: 1995,
    rank: '69',
    title: 'Islam',
    author: 'Fazlur Rahman'
  },
  {
    asin: '0471128430',
    year: 1995,
    rank: '70',
    title: 'World Wide Web Marketing: Integrating the Internet into Your Marketing Strategy',
    author: 'Jim Sterne'
  },
  {
    asin: '0553572407',
    year: 1995,
    rank: '71',
    title: 'Interface',
    author: 'Stephen Bury'
  },
  {
    asin: '0679751254',
    year: 1995,
    rank: '72',
    title: 'Lenin\'s Tomb: The Last Days of the Soviet Empire',
    author: 'David Remnick'
  },
  {
    asin: '0070622000',
    year: 1995,
    rank: '73',
    title: 'The Digital Economy: Promise and Peril in the Age of Networked Intelligence',
    author: 'Don Tapscott'
  },
  {
    asin: '0812508351',
    year: 1995,
    rank: '74',
    title: 'Necroscope V: Deadspawn',
    author: 'Brian Lumley'
  },
  {
    asin: '0873372093',
    year: 1995,
    rank: '75',
    title: 'Software Development: A Legal Guide/Book and Disk',
    author: 'Stephen; Elias'
  },
  {
    asin: '0029081025',
    year: 1995,
    rank: '76',
    title: 'The End of Racism: Principles for a Multiracial Society',
    author: 'Dinesh D\'Souza'
  },
  {
    asin: '0395670292',
    year: 1995,
    rank: '77',
    title: 'Lost Moon: The Perilous Voyage of Apollo 13',
    author: 'James Lovell'
  },
  {
    asin: '1568843143',
    year: 1995,
    rank: '78',
    title: 'C++ Programmer\'s Guide to the Standard Template Library',
    author: 'Mark Nelson'
  },
  {
    asin: '0671799320',
    year: 1995,
    rank: '79',
    title: 'The Prize: The Epic Quest for Oil, Money, & Power',
    author: 'Daniel Yergin'
  },
  {
    asin: '031285577X',
    year: 1995,
    rank: '80',
    title: 'How to Save the World',
    author: 'Charles Sheffield'
  },
  {
    asin: '0670848751',
    year: 1995,
    rank: '81',
    title: 'I Sing the Body Electronic : A Year With Microsoft on the Multimedia Frontier',
    author: 'Fred Moody'
  },
  {
    asin: '0060391480',
    year: 1995,
    rank: '82',
    title: 'Microserfs',
    author: 'Douglas Coupland'
  },
  {
    asin: '0226458040',
    year: 1995,
    rank: '83',
    title: 'The Structure of Scientific Revolutions',
    author: 'Thomas S. Kuhn'
  },
  {
    asin: '0684808463',
    year: 1995,
    rank: '84',
    title: 'Lincoln',
    author: 'David Herbert Donald'
  },
  {
    asin: '020148837X',
    year: 1995,
    rank: '85',
    title: 'Hooked on Java: Creating Hot Web Sites With Java Applets',
    author: 'Arthur Van Hoff'
  },
  {
    asin: '055356997X',
    year: 1995,
    rank: '86',
    title: 'I, Asimov: A Memoir',
    author: 'Isaac Asimov'
  },
  {
    asin: '0670863920',
    year: 1995,
    rank: '87',
    title: 'Re-Zoom (Viking Kestrel picture books)',
    author: 'Istvan Banyai'
  },
  {
    asin: '0671620991',
    year: 1995,
    rank: '88',
    title: 'Solve Your Child\'s Sleep Problems',
    author: 'Richard Ferber'
  },
  {
    asin: '0836217403',
    year: 1995,
    rank: '89',
    title: 'Shave the Whales',
    author: 'Scott Adams'
  },
  {
    asin: '0262133091',
    year: 1995,
    rank: '90',
    title: 'City of Bits: Space, Place, and the Infobahn',
    author: 'William J. Mitchell'
  },
  {
    asin: '0937175641',
    year: 1995,
    rank: '91',
    title: 'Programming Perl (Nutshell Handbooks)',
    author: 'Randal L. Schwartz'
  },
  {
    asin: '039331278X',
    year: 1995,
    rank: '92',
    title: 'Patrick O\'Brian Calendar 1996',
    author: 'P O\'Brian'
  },
  {
    asin: '067940693X',
    year: 1995,
    rank: '93',
    title: 'David Brinkley',
    author: 'David Brinkley'
  },
  {
    asin: '0345348109',
    year: 1995,
    rank: '94',
    title: 'The Killer Angels: The Classic Novel of the Civil War (Civil War Trilogy)',
    author: 'Michael Shaara'
  },
  {
    asin: '0517883562',
    year: 1995,
    rank: '95',
    title: 'Jim Fobel\'s Big Flavors',
    author: 'Jim Fobel'
  },
  {
    asin: '0932633056',
    year: 1995,
    rank: '96',
    title: 'Peopleware : Productive Projects and Teams',
    author: 'Tom Demarco'
  },
  {
    asin: '0465089941',
    year: 1995,
    rank: '97',
    title: 'The Vision Of The Anointed: Self-congratulation As A Basis For Social Policy',
    author: 'Thomas Sowell'
  },
  {
    asin: '0399140832',
    year: 1995,
    rank: '98',
    title: 'Charles Kuralt\'s America',
    author: 'Charles Kuralt'
  },
  {
    asin: '0399140867',
    year: 1995,
    rank: '99',
    title: 'Behind the Lines (Corps, Vol 7)',
    author: 'W.E.B. Griffin'
  },
  {
    asin: '0812926021',
    year: 1995,
    rank: '100',
    title: 'The Wall Street Journal Book of Personal Technology',
    author: 'Walter S. Mossberg'
  },
  {
    asin: '1568302894',
    year: 1996,
    rank: '1',
    title: 'Creating Killer Web Sites: The Art of Third-Generation Site Design',
    author: 'David Siegel'
  },
  {
    asin: '0399142185',
    year: 1996,
    rank: '2',
    title: 'Executive Orders',
    author: 'Tom Clancy'
  },
  {
    asin: '0887307876',
    year: 1996,
    rank: '3',
    title: 'The Dilbert Principle: A Cubicle\'s-Eye View of Bosses, Meetings, Management Fads & Other Workplace Afflictions',
    author: 'Scott Adams'
  },
  {
    asin: '0471121045',
    year: 1996,
    rank: '4',
    title: 'Against the Gods: The Remarkable Story of Risk',
    author: 'Peter L. Bernstein'
  },
  {
    asin: '0679745203',
    year: 1996,
    rank: '5',
    title: 'The English Patient',
    author: 'Michael Ondaatje'
  },
  {
    asin: '0399141308',
    year: 1996,
    rank: '6',
    title: 'Idoru',
    author: 'William Gibson'
  },
  {
    asin: '0679446486',
    year: 1996,
    rank: '7',
    title: 'Airframe',
    author: 'Michael Crichton'
  },
  {
    asin: '1558284796',
    year: 1996,
    rank: '8',
    title: 'Creating Great Web Graphics',
    author: 'Laurie McCanna'
  },
  {
    asin: '0887307884',
    year: 1996,
    rank: '9',
    title: 'Dogbert\'s Top Secret Management Handbook',
    author: 'Scott Adams'
  },
  {
    asin: '0684812010',
    year: 1996,
    rank: '10',
    title: 'Where Wizards Stay Up Late: The Origins of the Internet',
    author: 'Katie Hafner'
  },
  {
    asin: '096139210X',
    year: 1996,
    rank: '11',
    title: 'The Visual Display of Quantitative Information',
    author: 'Edward R. Tufte'
  },
  {
    asin: '0887307655',
    year: 1996,
    rank: '12',
    title: 'Inside the Tornado: Marketing Strategies from Silicon Valley\'s Cutting Edge',
    author: 'Geoffrey A. Moore'
  },
  {
    asin: '0399141960',
    year: 1996,
    rank: '13',
    title: 'Woe Is I: The Grammarphobe\'s Guide to Better English in Plain English',
    author: 'Patricia T. O\'Conner'
  },
  {
    asin: '0684811073',
    year: 1996,
    rank: '14',
    title: 'Undaunted Courage: Meriwether Lewis, Thomas Jefferson, and the Opening of the American West',
    author: 'Stephen E. Ambrose'
  },
  {
    asin: '0385482582',
    year: 1996,
    rank: '15',
    title: 'Only the Paranoid Survive',
    author: 'Andrew S. Grove'
  },
  {
    asin: '0517595753',
    year: 1996,
    rank: '16',
    title: 'Dave Barry In Cyberspace',
    author: 'Dave Barry'
  },
  {
    asin: '0679770291',
    year: 1996,
    rank: '17',
    title: 'NetSpy',
    author: 'NetGuide'
  },
  {
    asin: '0060951710',
    year: 1996,
    rank: '18',
    title: 'Martha Stuart\'s Better Than You at Entertaining (A Parody)',
    author: 'Tom Connor'
  },
  {
    asin: '1565921496',
    year: 1996,
    rank: '19',
    title: 'Programming Perl',
    author: 'Tom Christiansen'
  },
  {
    asin: '0887307175',
    year: 1996,
    rank: '20',
    title: 'Crossing the Chasm: Marketing and Selling High-Tech Products to Mainstream Customers',
    author: 'Geoffrey A. Moore'
  },
  {
    asin: '0963600117',
    year: 1996,
    rank: '21',
    title: 'Virus of the Mind: The New Science of the Meme',
    author: 'Richard Brodie'
  },
  {
    asin: '0471128430',
    year: 1996,
    rank: '22',
    title: 'World Wide Web Marketing: Integrating the Internet into Your Marketing Strategy',
    author: 'Jim Sterne'
  },
  {
    asin: '0201483408',
    year: 1996,
    rank: '23',
    title: 'Out of Control: The New Biology of Machines, Social Systems, & the Economic World',
    author: 'Kevin Kelly'
  },
  {
    asin: '0812928334',
    year: 1996,
    rank: '24',
    title: 'The Witch Doctors',
    author: 'John Micklethwait'
  },
  {
    asin: '0789709252',
    year: 1996,
    rank: '25',
    title: '24 Hours in Cyberspace:  Painting on the Walls of the Digital Cave Photographed on One Day by 150 of the World\'s Leading Photojournalists (Day in the Life)',
    author: 'Jennifer Erwitt'
  },
  {
    asin: '0316116025',
    year: 1996,
    rank: '26',
    title: 'The Pinball Effect: How Renaissance Water Gardens Made the Carburetor Possible-And Other Journeys Through Knowledge',
    author: 'James Burke'
  },
  {
    asin: '067976402X',
    year: 1996,
    rank: '27',
    title: 'Snow Falling On Cedars',
    author: 'David Guterson'
  },
  {
    asin: '0679767800',
    year: 1996,
    rank: '28',
    title: 'The Stars My Destination',
    author: 'Alfred Bester'
  },
  {
    asin: '0836204158',
    year: 1996,
    rank: '29',
    title: 'It\'s Obvious You Won\'t Survive By Your Wits Alone',
    author: 'Scott Adams'
  },
  {
    asin: '0465072771',
    year: 1996,
    rank: '30',
    title: 'How Brains Think: Evolving Intelligence, Then And Now (Science Masters)',
    author: 'William H. Calvin'
  },
  {
    asin: '1565921836',
    year: 1996,
    rank: '31',
    title: 'Java in a Nutshell: A Desktop Quick Reference for Java Programmers (Nutshell Handbooks)',
    author: 'David Flanagan'
  },
  {
    asin: '0070479852',
    year: 1996,
    rank: '32',
    title: 'What Works on Wall Street: A Guide to the Best-Performing Investment Strategies of All Time',
    author: 'James P.…'
  },
  {
    asin: '0679425632',
    year: 1996,
    rank: '33',
    title: 'Why Things Bite Back: Technology and the Revenge of Unintended Consequences',
    author: 'Edward Tenner'
  },
  {
    asin: '0812550706',
    year: 1996,
    rank: '34',
    title: 'Ender\'s Game (The Ender Quintet)',
    author: 'Orson Scott Card'
  },
  {
    asin: '1556159005',
    year: 1996,
    rank: '35',
    title: 'Rapid Development: Taming Wild Software Schedules',
    author: 'Steve McConnell'
  },
  {
    asin: '0679442324',
    year: 1996,
    rank: '36',
    title: 'Born to Rebel: Birth Order, Family Dynamics, and Creative Lives',
    author: 'Frank J. Sulloway'
  },
  {
    asin: '0060391502',
    year: 1996,
    rank: '37',
    title: 'Enter The Zone: A Dietary Road map',
    author: 'Barry Sears'
  },
  {
    asin: '0671708635',
    year: 1996,
    rank: '38',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0679762906',
    year: 1996,
    rank: '39',
    title: 'Being Digital',
    author: 'Nicholas Negroponte'
  },
  {
    asin: '0385265700',
    year: 1996,
    rank: '40',
    title: 'The Book of Ruth',
    author: 'Jane Hamilton'
  },
  {
    asin: '0679743685',
    year: 1996,
    rank: '41',
    title: 'God: A Biography',
    author: 'Jack Miles'
  },
  {
    asin: '0070622000',
    year: 1996,
    rank: '42',
    title: 'The Digital Economy: Promise and Peril in the Age of Networked Intelligence',
    author: 'Don Tapscott'
  },
  {
    asin: '006092599X',
    year: 1996,
    rank: '43',
    title: 'History Laid Bare: Love, Sex, and Perversity from the Ancient Etruscans to Warren G. Harding',
    author: 'Richard Zacks'
  },
  {
    asin: '0393040445',
    year: 1996,
    rank: '44',
    title: 'The Yellow Admiral',
    author: 'Patrick O\'Brian'
  },
  {
    asin: '0385477058',
    year: 1996,
    rank: '45',
    title: 'Hyperspace: A Scientific Odyssey Through Parallel Universes, Time Warps, and the 10th Dimension',
    author: 'Michio Kaku'
  },
  {
    asin: '1568580770',
    year: 1996,
    rank: '46',
    title: 'Fermat\'s Last Theorem: Unlocking the Secret of an Ancient Mathematical Problem',
    author: 'Amir D. Aczel'
  },
  {
    asin: '0553562614',
    year: 1996,
    rank: '47',
    title: 'Snow Crash',
    author: 'Neal Stephenson'
  },
  {
    asin: '0684874350',
    year: 1996,
    rank: '48',
    title: 'Angela\'s Ashes (The Frank McCourt Memoirs)',
    author: 'Frank McCourt'
  },
  {
    asin: '051788433X',
    year: 1996,
    rank: '49',
    title: 'Extraordinary Popular Delusions & the Madness of Crowds',
    author: 'Andrew Tobias'
  },
  {
    asin: '0802713122',
    year: 1996,
    rank: '50',
    title: 'Longitude: The True Story of a Lone Genius Who Solved the Greatest Scientific Problem of His Time',
    author: 'Dava Sobel'
  },
  {
    asin: '0446602744',
    year: 1996,
    rank: '51',
    title: 'The Rules: Time-Tested Secrets for Capturing the Heart of Mr. Right',
    author: 'Ellen Fein'
  },
  {
    asin: '0805036377',
    year: 1996,
    rank: '52',
    title: 'M is for Malice (The Kinsey Millhone Alphabet Mysteries)',
    author: 'Sue Grafton'
  },
  {
    asin: '055309503X',
    year: 1996,
    rank: '53',
    title: 'Emotional Intelligence: Why It Can Matter More than IQ',
    author: 'Daniel Goleman'
  },
  {
    asin: '0471142425',
    year: 1996,
    rank: '54',
    title: 'The HTML Sourcebook: A Complete Guide to HTML 3.0 (Sourcebooks)',
    author: 'Ian S. Graham'
  },
  {
    asin: '1562055321',
    year: 1996,
    rank: '55',
    title: 'Designing Web Graphics Edition',
    author: 'Linda Weinman'
  },
  {
    asin: '0060391634',
    year: 1996,
    rank: '56',
    title: 'Slouching Towards Gomorrah',
    author: 'Robert H. Bork'
  },
  {
    asin: '0201479575',
    year: 1996,
    rank: '57',
    title: 'Planning and Managing Web Sites on the Macintosh: The Complete Guide to Webstar and Machttp',
    author: 'Jon Wiederspan'
  },
  {
    asin: '0394578791',
    year: 1996,
    rank: '58',
    title: 'A Reporter\'s Life',
    author: 'Walter Cronkite'
  },
  {
    asin: '0201409496',
    year: 1996,
    rank: '59',
    title: 'The Microsoft Way: The Real Story Of How The Company Outsmarts Its Competition',
    author: 'Randall E. Stross'
  },
  {
    asin: '0374184232',
    year: 1996,
    rank: '60',
    title: 'The Laws of Our Fathers',
    author: 'Scott Turow'
  },
  {
    asin: '068482471X',
    year: 1996,
    rank: '61',
    title: 'DARWIN\'S DANGEROUS IDEA: EVOLUTION AND THE MEANINGS OF LIFE',
    author: 'Daniel C. Dennett'
  },
  {
    asin: '0684809753',
    year: 1996,
    rank: '62',
    title: 'Great Books',
    author: 'David Denby'
  },
  {
    asin: '0312857675',
    year: 1996,
    rank: '63',
    title: 'A Crown of Swords (The Wheel of Time, Book 7)',
    author: 'Robert Jordan'
  },
  {
    asin: '0385475713',
    year: 1996,
    rank: '64',
    title: 'Alias Grace',
    author: 'Margaret Atwood'
  },
  {
    asin: '0061053104',
    year: 1996,
    rank: '65',
    title: 'The Terminal Experiment',
    author: 'Robert J. Sawyer'
  },
  {
    asin: '0060926945',
    year: 1996,
    rank: '66',
    title: 'Masters of Deception: The Gang That Ruled Cyberspace',
    author: 'Michele Slatalla'
  },
  {
    asin: '0449910644',
    year: 1996,
    rank: '67',
    title: 'Spontaneous Healing: How to Discover and Enhance Your Body\'s Natural Ability to Maintain and Heal  Itself',
    author: 'Andrew Weil'
  },
  {
    asin: '0895264544',
    year: 1996,
    rank: '68',
    title: 'Unlimited Access: An FBI Agent Inside the Clinton White House',
    author: 'Gary Aldrich'
  },
  {
    asin: '0553573314',
    year: 1996,
    rank: '69',
    title: 'The Diamond Age',
    author: 'Neal Stephenson'
  },
  {
    asin: '0887307469',
    year: 1996,
    rank: '70',
    title: 'Jamming: The Art and Discipline of Business Creativity',
    author: 'John J. Kao'
  },
  {
    asin: '1568848412',
    year: 1996,
    rank: '71',
    title: 'Caligari Truespace2 Bible',
    author: 'Peter M. Plantec'
  },
  {
    asin: '0385418493',
    year: 1996,
    rank: '72',
    title: 'How the Irish Saved Civilization: The Untold Story of Ireland\'s Heroic Role From the Fall of Rome to the Rise of Medieval Europe (The Hinges of History)',
    author: 'Thomas Cahill'
  },
  {
    asin: '0441569595',
    year: 1996,
    rank: '73',
    title: 'Neuromancer',
    author: 'William Gibson'
  },
  {
    asin: '0961392118',
    year: 1996,
    rank: '74',
    title: 'Envisioning Information',
    author: 'Edward R. Tufte'
  },
  {
    asin: '0385472943',
    year: 1996,
    rank: '75',
    title: 'The Runaway Jury',
    author: 'John Grisham'
  },
  {
    asin: '0679445226',
    year: 1996,
    rank: '76',
    title: 'The Soul\'s Code: In Search of Character and Calling',
    author: 'James Hillman'
  },
  {
    asin: '0201835959',
    year: 1996,
    rank: '77',
    title: 'The Mythical Man-Month: Essays on Software Engineering, Anniversary Edition (2nd Edition)',
    author: 'Frederick P. Brooks…'
  },
  {
    asin: '0670868361',
    year: 1996,
    rank: '78',
    title: 'Desperation',
    author: 'Stephen King'
  },
  {
    asin: '0517149257',
    year: 1996,
    rank: '79',
    title: 'The Ultimate Hitchhiker\'s Guide',
    author: 'Douglas Adams'
  },
  {
    asin: '0670865796',
    year: 1996,
    rank: '80',
    title: 'The Deep End of the Ocean',
    author: 'Jacquelyn Mitchard'
  },
  {
    asin: '0312117442',
    year: 1996,
    rank: '81',
    title: 'The Art of Kissing',
    author: 'William Cane'
  },
  {
    asin: '1575210304',
    year: 1996,
    rank: '82',
    title: 'Teach Yourself Java in 21 Days (Sams Teach Yourself)',
    author: 'Laura Lemay'
  },
  {
    asin: '0836210263',
    year: 1996,
    rank: '83',
    title: 'Still Pumped From Using The Mouse',
    author: 'Scott Adams'
  },
  {
    asin: '0201633892',
    year: 1996,
    rank: '84',
    title: 'How to Set Up and Maintain a World Wide Web Site: The Guide for Information Providers',
    author: 'Lincoln D. Stein'
  },
  {
    asin: '0679433015',
    year: 1996,
    rank: '85',
    title: 'Servant of the Bones',
    author: 'Anne Rice'
  },
  {
    asin: '0887307507',
    year: 1996,
    rank: '86',
    title: 'Hidden Order: The Economics of Everyday Life',
    author: 'David D. Friedman'
  },
  {
    asin: '0385425287',
    year: 1996,
    rank: '87',
    title: 'The One to One Future: Building Relationships One Customer at a Time',
    author: 'Don Peppers'
  },
  {
    asin: '0679448594',
    year: 1996,
    rank: '88',
    title: 'Primary Colors: A Novel of Politics',
    author: 'Anonymous'
  },
  {
    asin: '0553560735',
    year: 1996,
    rank: '89',
    title: 'Red Mars (Mars Trilogy)',
    author: 'Kim Stanley Robinson'
  },
  {
    asin: '0140260404',
    year: 1996,
    rank: '90',
    title: 'The Road Ahead: Completely Revised and Up-to-Date',
    author: 'Bill Gates'
  },
  {
    asin: '0140258795',
    year: 1996,
    rank: '91',
    title: 'Longitude: The True Story of a Lone Genius Who Solved the Greatest Scientific Problem of His Time',
    author: 'Dava Sobel'
  },
  {
    asin: '0465051545',
    year: 1996,
    rank: '92',
    title: 'Fluid Concepts And Creative Analogies: Computer Models Of The Fundamental Mechanisms Of Thought',
    author: 'Douglas R. Hofstadter'
  },
  {
    asin: '1565920422',
    year: 1996,
    rank: '93',
    title: 'Learning Perl (Nutshell Handbooks)',
    author: 'Randal L. Schwartz'
  },
  {
    asin: '0679770313',
    year: 1996,
    rank: '94',
    title: 'NetMarketing (Net books)',
    author: 'NetGuide'
  },
  {
    asin: '051770739X',
    year: 1996,
    rank: '95',
    title: 'Downsize This!',
    author: 'Michael Moore'
  },
  {
    asin: '0887308260',
    year: 1996,
    rank: '96',
    title: 'Morgan Stanley the Internet Report',
    author: 'Mary Meeker'
  },
  {
    asin: '0226458040',
    year: 1996,
    rank: '97',
    title: 'The Structure of Scientific Revolutions',
    author: 'Thomas S. Kuhn'
  },
  {
    asin: '0684810352',
    year: 1996,
    rank: '98',
    title: 'Lean Thinking : Banish Waste and Create Wealth in Your Corporation',
    author: 'James P. Womack'
  },
  {
    asin: '0671528904',
    year: 1996,
    rank: '99',
    title: 'Mind Hunter: Inside the FBI\'s Elite Serial Crime Unit',
    author: 'John Douglas'
  },
  {
    asin: '0898795125',
    year: 1996,
    rank: '100',
    title: 'The Complete Book of Scriptwriting',
    author: 'J. Michael…'
  },
  {
    asin: '0871136791',
    year: 1997,
    rank: '1',
    title: 'Cold Mountain',
    author: 'Charles Frazier'
  },
  {
    asin: '0679457526',
    year: 1997,
    rank: '2',
    title: 'Into Thin Air: A Personal Account of the Mount Everest Disaster',
    author: 'Jon Krakauer'
  },
  {
    asin: '039304016X',
    year: 1997,
    rank: '3',
    title: 'The Perfect Storm: A True Story of Men Against the Sea',
    author: 'Sebastian Junger'
  },
  {
    asin: '0684874350',
    year: 1997,
    rank: '4',
    title: 'Angela\'s Ashes (The Frank McCourt Memoirs)',
    author: 'Frank McCourt'
  },
  {
    asin: '1568302894',
    year: 1997,
    rank: '5',
    title: 'Creating Killer Web Sites: The Art of Third-Generation Site Design',
    author: 'David Siegel'
  },
  {
    asin: '096139210X',
    year: 1997,
    rank: '6',
    title: 'The Visual Display of Quantitative Information',
    author: 'Edward R. Tufte'
  },
  {
    asin: '0875847595',
    year: 1997,
    rank: '7',
    title: 'Net Gain: Expanding Markets through Virtual Communities',
    author: 'John Hagel III'
  },
  {
    asin: '0786881852',
    year: 1997,
    rank: '8',
    title: 'Don\'t Sweat the Small Stuff . . . and It\'s All Small Stuff: Simple Ways to Keep the Little Things from Taking Over Your Life (Don\'t Sweat the Small Stuff Series)',
    author: 'Richard Carlson'
  },
  {
    asin: '0961392126',
    year: 1997,
    rank: '9',
    title: 'Visual Explanations: Images and Quantities, Evidence and Narrative',
    author: 'Edward R. Tufte'
  },
  {
    asin: '0140244824',
    year: 1997,
    rank: '10',
    title: 'Songs in Ordinary Time (Oprah\'s Book Club)',
    author: 'Mary McGarry Morris'
  },
  {
    asin: '0679457313',
    year: 1997,
    rank: '11',
    title: 'The God of Small Things',
    author: 'Arundhati Roy'
  },
  {
    asin: '0684827034',
    year: 1997,
    rank: '12',
    title: 'The Motley Fool Investment Guide: How the Fools Beat Wall Street\'s Wise Men and How You Can Too',
    author: 'Tom Gardner'
  },
  {
    asin: '1563523302',
    year: 1997,
    rank: '13',
    title: 'The Millionaire Next Door: The Surprising Secrets of America\'s Wealthy',
    author: 'Thomas J. Stanley'
  },
  {
    asin: '0887307175',
    year: 1997,
    rank: '14',
    title: 'Crossing the Chasm: Marketing and Selling High-Tech Products to Mainstream Customers',
    author: 'Geoffrey A. Moore'
  },
  {
    asin: '068484477X',
    year: 1997,
    rank: '15',
    title: 'Stones from the River',
    author: 'Ursula Hegi'
  },
  {
    asin: '0679429220',
    year: 1997,
    rank: '16',
    title: 'Midnight in the Garden of Good and Evil',
    author: 'John Berendt'
  },
  {
    asin: '0471121045',
    year: 1997,
    rank: '17',
    title: 'Against the Gods: The Remarkable Story of Risk',
    author: 'Peter L. Bernstein'
  },
  {
    asin: '0393045358',
    year: 1997,
    rank: '18',
    title: 'How the Mind Works',
    author: 'Steven Pinker'
  },
  {
    asin: '0553061720',
    year: 1997,
    rank: '19',
    title: 'Webonomics : Nine Essential Principles for Growing Your Business on the World Wide Web',
    author: 'Evan I. Schwartz'
  },
  {
    asin: '0671708635',
    year: 1997,
    rank: '20',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0887307396',
    year: 1997,
    rank: '21',
    title: 'Built to Last: Successful Habits of Visionary Companies',
    author: 'James C. Collins'
  },
  {
    asin: '0201633612',
    year: 1997,
    rank: '22',
    title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    author: 'Erich Gamma'
  },
  {
    asin: '0375703055',
    year: 1997,
    rank: '23',
    title: 'Ellen Foster',
    author: 'Kaye Gibbons'
  },
  {
    asin: '0684818701',
    year: 1997,
    rank: '24',
    title: 'The All New All Purpose: Joy of Cooking',
    author: 'Irma S. Rombauer'
  },
  {
    asin: '0688128165',
    year: 1997,
    rank: '25',
    title: 'Influence: The Psychology of Persuasion',
    author: 'Robert B. Cialdini'
  },
  {
    asin: '0887307655',
    year: 1997,
    rank: '26',
    title: 'Inside the Tornado: Marketing Strategies from Silicon Valley\'s Cutting Edge',
    author: 'Geoffrey A. Moore'
  },
  {
    asin: '0679447156',
    year: 1997,
    rank: '27',
    title: 'Eight Weeks to Optimum Health (Proven Program for Taking Full Advantage of Your Body\'s Natural Healing Power)',
    author: 'Andrew Weil M.D.'
  },
  {
    asin: '0679456589',
    year: 1997,
    rank: '28',
    title: 'The Man Who Listens to Horses: The Story of a Real-Life Horse Whisperer',
    author: 'Monty Roberts'
  },
  {
    asin: '0805037586',
    year: 1997,
    rank: '29',
    title: 'Mason & Dixon: A Novel',
    author: 'Thomas Pynchon'
  },
  {
    asin: '0684842696',
    year: 1997,
    rank: '30',
    title: 'Underworld',
    author: 'Don DeLillo'
  },
  {
    asin: '0385472951',
    year: 1997,
    rank: '31',
    title: 'The Partner',
    author: 'John Grisham'
  },
  {
    asin: '1556159005',
    year: 1997,
    rank: '32',
    title: 'Rapid Development: Taming Wild Software Schedules',
    author: 'Steve McConnell'
  },
  {
    asin: '0671003755',
    year: 1997,
    rank: '33',
    title: 'She\'s Come Undone',
    author: 'Wally Lamb'
  },
  {
    asin: '0375702709',
    year: 1997,
    rank: '34',
    title: 'A Lesson Before Dying (Oprah\'s Book Club)',
    author: 'Ernest J. Gaines'
  },
  {
    asin: '0375703063',
    year: 1997,
    rank: '35',
    title: 'A Virtuous Woman (Oprah\'s Book Club)',
    author: 'Kaye Gibbons'
  },
  {
    asin: '0446520942',
    year: 1997,
    rank: '36',
    title: 'Selling the Invisible: A Field Guide to Modern Marketing',
    author: 'Harry Beckwith'
  },
  {
    asin: '1565921496',
    year: 1997,
    rank: '37',
    title: 'Programming Perl',
    author: 'Tom Christiansen'
  },
  {
    asin: '0446517127',
    year: 1997,
    rank: '38',
    title: 'The Royals',
    author: 'Kitty Kelley'
  },
  {
    asin: '0393038912',
    year: 1997,
    rank: '39',
    title: 'Guns, Germs and Steel: The Fates of Human Societies',
    author: 'Jared Diamond'
  },
  {
    asin: '0201889544',
    year: 1997,
    rank: '40',
    title: 'The C++ Programming Language (3rd Edition)',
    author: 'Bjarne Stroustrup'
  },
  {
    asin: '0875846513',
    year: 1997,
    rank: '41',
    title: 'The Balanced Scorecard: Translating Strategy into Action',
    author: 'Robert S. Kaplan'
  },
  {
    asin: '0062514792',
    year: 1997,
    rank: '42',
    title: 'What Will Be: How the World of Information Will Change Our Lives',
    author: 'Michael L. Dertouzos'
  },
  {
    asin: '0961392118',
    year: 1997,
    rank: '43',
    title: 'Envisioning Information',
    author: 'Edward R. Tufte'
  },
  {
    asin: '0441783589',
    year: 1997,
    rank: '44',
    title: 'Starship Troopers',
    author: 'Robert A. Heinlein'
  },
  {
    asin: '0679770291',
    year: 1997,
    rank: '45',
    title: 'NetSpy',
    author: 'NetGuide'
  },
  {
    asin: '156592262X',
    year: 1997,
    rank: '46',
    title: 'Java in a Nutshell: A Desktop Quick Reference for Java Programmers (In a Nutshell (O\'Reilly))',
    author: 'David Flanagan'
  },
  {
    asin: '0911910875',
    year: 1997,
    rank: '47',
    title: 'The Merck Manual of Medical Information: Home Edition',
    author: 'Merck & Co.'
  },
  {
    asin: '0070479852',
    year: 1997,
    rank: '48',
    title: 'What Works on Wall Street: A Guide to the Best-Performing Investment Strategies of All Time',
    author: 'James P.…'
  },
  {
    asin: '0767900111',
    year: 1997,
    rank: '49',
    title: 'Release 2.0',
    author: 'Esther Dyson'
  },
  {
    asin: '0425162443',
    year: 1997,
    rank: '50',
    title: 'The Rapture of Canaan',
    author: 'Sheri Reynolds'
  },
  {
    asin: '0684815257',
    year: 1997,
    rank: '51',
    title: 'CITIZEN SOLDIERS : The U.S. Army from the Normandy Beaches to the Bulge to the Surrender of Germany -- June 7, 1944-May 7, 1945',
    author: 'Stephen E. Ambrose'
  },
  {
    asin: '0385482280',
    year: 1997,
    rank: '53',
    title: 'Intellectual Capital',
    author: 'Thomas A. Stewart'
  },
  {
    asin: '0385482051',
    year: 1997,
    rank: '54',
    title: 'Enterprise One to One: Tools for Competing in the Interactive Age',
    author: 'Don Peppers'
  },
  {
    asin: '0688102298',
    year: 1997,
    rank: '55',
    title: 'CookWise: The Hows & Whys of Successful Cooking, The Secrets of Cooking Revealed',
    author: 'Shirley O. Corriher'
  },
  {
    asin: '0679435328',
    year: 1997,
    rank: '56',
    title: 'The Angel of Darkness',
    author: 'Caleb Carr'
  },
  {
    asin: '0399142789',
    year: 1997,
    rank: '57',
    title: 'Conversations with God: An Uncommon Dialogue, Book 1',
    author: 'Neale Donald Walsch'
  },
  {
    asin: '0679745203',
    year: 1997,
    rank: '58',
    title: 'The English Patient',
    author: 'Michael Ondaatje'
  },
  {
    asin: '0060391502',
    year: 1997,
    rank: '59',
    title: 'Enter The Zone: A Dietary Road map',
    author: 'Barry Sears'
  },
  {
    asin: '0060155477',
    year: 1997,
    rank: '60',
    title: 'The Intelligent Investor: A Book of Practical Counsel',
    author: 'Benjamin Graham'
  },
  {
    asin: '0316359556',
    year: 1997,
    rank: '61',
    title: 'The Dark Side of Camelot',
    author: 'Seymour M. Hersh'
  },
  {
    asin: '0471163511',
    year: 1997,
    rank: '62',
    title: 'Client/Server Programming with Java and CORBA',
    author: 'Robert Orfali'
  },
  {
    asin: '0399142851',
    year: 1997,
    rank: '63',
    title: 'Unnatural Exposure',
    author: 'Patricia Cornwell'
  },
  {
    asin: '0316779490',
    year: 1997,
    rank: '64',
    title: 'Naked',
    author: 'David Sedaris'
  },
  {
    asin: '0684826976',
    year: 1997,
    rank: '65',
    title: 'Undaunted Courage:  Meriwether Lewis, Thomas Jefferson, and the Opening of the American West',
    author: 'Stephen Ambrose'
  },
  {
    asin: '0446519138',
    year: 1997,
    rank: '66',
    title: 'Simple Abundance: A Daybook of Comfort of Joy',
    author: 'Sarah Ban Breathnach'
  },
  {
    asin: '0684810204',
    year: 1997,
    rank: '67',
    title: 'The Whole Shebang: A State-of-the-Universe(s) Report',
    author: 'Timothy Ferris'
  },
  {
    asin: '0875847943',
    year: 1997,
    rank: '68',
    title: 'Real Time: Preparing for the Age of the Never Satistied Customer',
    author: 'Regis McKenna'
  },
  {
    asin: '0452279178',
    year: 1997,
    rank: '69',
    title: 'Wizard and Glass (Dark Tower) (Vol IV)',
    author: 'Stephen King'
  },
  {
    asin: '0553562614',
    year: 1997,
    rank: '70',
    title: 'Snow Crash',
    author: 'Neal Stephenson'
  },
  {
    asin: '0875847471',
    year: 1997,
    rank: '71',
    title: 'Leading Change',
    author: 'John P. Kotter'
  },
  {
    asin: '0471137472',
    year: 1997,
    rank: '72',
    title: 'The Education of a Speculator',
    author: 'Victor Niederhoffer'
  },
  {
    asin: '044651506X',
    year: 1997,
    rank: '73',
    title: 'Plum Island',
    author: 'Nelson DeMille'
  },
  {
    asin: '0812928512',
    year: 1997,
    rank: '74',
    title: 'Apple:: The Inside Story of Intrigue, Egomania, and Business Blunders',
    author: 'Jim Carlton'
  },
  {
    asin: '0345315227',
    year: 1997,
    rank: '75',
    title: '3001: The Final Odyssey',
    author: 'Arthur C. Clarke'
  },
  {
    asin: '067166736X',
    year: 1997,
    rank: '76',
    title: 'Man\'s Search for Meaning',
    author: 'Viktor E. Frankl'
  },
  {
    asin: '0394585852',
    year: 1997,
    rank: '77',
    title: 'Personal  History',
    author: 'Katharine Graham'
  },
  {
    asin: '0553380095',
    year: 1997,
    rank: '78',
    title: 'The Heart of a Woman',
    author: 'Maya Angelou'
  },
  {
    asin: '0884270610',
    year: 1997,
    rank: '79',
    title: 'The Goal: A Process of Ongoing Improvement',
    author: 'Eliyahu M. Goldratt'
  },
  {
    asin: '0525938656',
    year: 1997,
    rank: '80',
    title: 'The Bankers: The Next Generation The New Worlds of Money, Credit and Banking in an Electronic Age',
    author: 'Martin Mayer'
  },
  {
    asin: '1556154844',
    year: 1997,
    rank: '81',
    title: 'Code Complete (Microsoft Programming)',
    author: 'Steve McConnell'
  },
  {
    asin: '0385482582',
    year: 1997,
    rank: '82',
    title: 'Only the Paranoid Survive',
    author: 'Andrew S. Grove'
  },
  {
    asin: '0684810794',
    year: 1997,
    rank: '83',
    title: 'The Bible Code',
    author: 'Michael Drosnin'
  },
  {
    asin: '1568843224',
    year: 1997,
    rank: '84',
    title: 'About Face: The Essentials of User Interface Design',
    author: 'Alan Cooper'
  },
  {
    asin: '1562057154',
    year: 1997,
    rank: '85',
    title: 'Designing Web Graphics 2',
    author: 'Lynda Weinman'
  },
  {
    asin: '0385486804',
    year: 1997,
    rank: '86',
    title: 'Into the Wild',
    author: 'Jon Krakauer'
  },
  {
    asin: '0375401091',
    year: 1997,
    rank: '87',
    title: 'A Certain Justice (Adam Dalgliesh Mystery Series #10)',
    author: 'P. D. James'
  },
  {
    asin: '0679762906',
    year: 1997,
    rank: '88',
    title: 'Being Digital',
    author: 'Nicholas Negroponte'
  },
  {
    asin: '0679444904',
    year: 1997,
    rank: '89',
    title: 'American Sphinx: The Character of Thomas Jefferson',
    author: 'Joseph J. Ellis'
  },
  {
    asin: '0133499456',
    year: 1997,
    rank: '90',
    title: 'Computer Networks',
    author: 'Andrew S. Tanenbaum'
  },
  {
    asin: '0201325632',
    year: 1997,
    rank: '91',
    title: 'UML DISTILLED: APPLYING THE STANDARD OBJECT MODELLING LANGUAGE (OBJECT TECHNOLOGY SERIES)',
    author: 'KENDALL SCOTT\'…'
  },
  {
    asin: '1572313447',
    year: 1997,
    rank: '92',
    title: 'Microsoft NT Server Resource Kit (Microsoft Professional Editions)',
    author: 'Microsoft Press'
  },
  {
    asin: '0201835959',
    year: 1997,
    rank: '93',
    title: 'The Mythical Man-Month: Essays on Software Engineering, Anniversary Edition (2nd Edition)',
    author: 'Frederick P. Brooks…'
  },
  {
    asin: '0060391901',
    year: 1997,
    rank: '94',
    title: 'Mastering the Zone: The Next Step in Achieving SuperHealth and Permanent Fat Loss',
    author: 'Barry Sears'
  },
  {
    asin: '0316235024',
    year: 1997,
    rank: '95',
    title: 'The Gift of Fear : Survival Signals That Protect Us from Violence',
    author: 'Gavin De Becker'
  },
  {
    asin: '0875847161',
    year: 1997,
    rank: '96',
    title: 'Competing for the Future',
    author: 'Gary Hamel'
  },
  {
    asin: '0226103897',
    year: 1997,
    rank: '97',
    title: 'The Chicago Manual of Style: The Essential Guide for Writers, Editors, and Publishers (14th Edition)',
    author: 'Chicago Editorial…'
  },
  {
    asin: '0792270142',
    year: 1997,
    rank: '98',
    title: 'Everest : Mountain Without Mercy',
    author: 'Broughton Coburn'
  },
  {
    asin: '0449910644',
    year: 1997,
    rank: '99',
    title: 'Spontaneous Healing: How to Discover and Enhance Your Body\'s Natural Ability to Maintain and Heal  Itself',
    author: 'Andrew Weil'
  },
  {
    asin: '0671004107',
    year: 1997,
    rank: '100',
    title: 'Contact',
    author: 'Carl Sagan'
  },
  {
    asin: '0374270325',
    year: 1998,
    rank: '1',
    title: 'A Man in Full',
    author: 'Tom Wolfe'
  },
  {
    asin: '0399143904',
    year: 1998,
    rank: '2',
    title: 'Rainbow Six',
    author: 'Tom Clancy'
  },
  {
    asin: '0385484518',
    year: 1998,
    rank: '3',
    title: 'Tuesdays with Morrie: An Old Man, A Young Man and Life\'s Greatest Lesson',
    author: 'Mitch Albom'
  },
  {
    asin: '0060391626',
    year: 1998,
    rank: '4',
    title: 'I Know This Much Is True',
    author: 'Wally Lamb'
  },
  {
    asin: '0060928336',
    year: 1998,
    rank: '5',
    title: 'Divine Secrets of the Ya-Ya Sisterhood: A Novel',
    author: 'Rebecca Wells'
  },
  {
    asin: '0375502025',
    year: 1998,
    rank: '6',
    title: 'The Greatest Generation',
    author: 'Tom Brokaw'
  },
  {
    asin: '0385483279',
    year: 1998,
    rank: '8',
    title: 'The Century',
    author: 'Peter Jennings'
  },
  {
    asin: '0786881852',
    year: 1998,
    rank: '9',
    title: 'Don\'t Sweat the Small Stuff . . . and It\'s All Small Stuff: Simple Ways to Keep the Little Things from Taking Over Your Life (Don\'t Sweat the Small Stuff Series)',
    author: 'Richard Carlson'
  },
  {
    asin: '0375706771',
    year: 1998,
    rank: '10',
    title: 'Midwives (Oprah\'s Book Club)',
    author: 'Chris Bohjalian'
  },
  {
    asin: '0684853507',
    year: 1998,
    rank: '11',
    title: 'Bag of Bones',
    author: 'Stephen King'
  },
  {
    asin: '1891620088',
    year: 1998,
    rank: '12',
    title: 'Blind Man\'s Bluff: The Untold Story Of American Submarine Espionage',
    author: 'Sherry Sontag'
  },
  {
    asin: '0671708635',
    year: 1998,
    rank: '13',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0070158088',
    year: 1998,
    rank: '14',
    title: 'The Electronic Day Trader: Successful Strategies for On-line Trading',
    author: 'Marc Friedfertig'
  },
  {
    asin: '0345425588',
    year: 1998,
    rank: '15',
    title: 'Sugar Busters!  Cut Sugar to Trim Fat',
    author: 'H. Leighton Steward'
  },
  {
    asin: '0385490992',
    year: 1998,
    rank: '16',
    title: 'The Street Lawyer',
    author: 'John Grisham'
  },
  {
    asin: '0684827034',
    year: 1998,
    rank: '17',
    title: 'The Motley Fool Investment Guide: How the Fools Beat Wall Street\'s Wise Men and How You Can Too',
    author: 'Tom Gardner'
  },
  {
    asin: '0553574752',
    year: 1998,
    rank: '18',
    title: 'Protein Power: The High-Protein/Low Carbohydrate Way to Lose Weight, Feel Fit, and Boost Your Health-in Just Weeks!',
    author: 'Michael R. Eades'
  },
  {
    asin: '0312857691',
    year: 1998,
    rank: '19',
    title: 'The Path of Daggers (The Wheel of Time, Book 8)',
    author: 'Robert Jordan'
  },
  {
    asin: '0380727293',
    year: 1998,
    rank: '20',
    title: 'Dr. Atkins\' New Diet Revolution',
    author: 'Robert C. Atkins'
  },
  {
    asin: '0684838184',
    year: 1998,
    rank: '21',
    title: 'The Roaring 2000s: Building the Wealth and Life Style You Desire in the Greatest Boom in History',
    author: 'Harry S. Dent'
  },
  {
    asin: '0679433740',
    year: 1998,
    rank: '22',
    title: 'Paradise',
    author: 'Toni Morrison'
  },
  {
    asin: '0887307396',
    year: 1998,
    rank: '23',
    title: 'Built to Last: Successful Habits of Visionary Companies',
    author: 'James C. Collins'
  },
  {
    asin: '0375400117',
    year: 1998,
    rank: '24',
    title: 'Memoirs of a Geisha',
    author: 'Arthur Golden'
  },
  {
    asin: '0375500510',
    year: 1998,
    rank: '25',
    title: 'Black and Blue: A Novel',
    author: 'Anna Quindlen'
  },
  {
    asin: '039914255X',
    year: 1998,
    rank: '26',
    title: 'Eat Right 4 Your Type: The Individualized Diet Solution to Staying Healthy, Living Longer & Achieving Your Ideal Weight',
    author: 'Peter J. D\'Adamo'
  },
  {
    asin: '067169507X',
    year: 1998,
    rank: '27',
    title: 'The Seat of the Soul',
    author: 'Gary Zukav'
  },
  {
    asin: '0446520942',
    year: 1998,
    rank: '28',
    title: 'Selling the Invisible: A Field Guide to Modern Marketing',
    author: 'Harry Beckwith'
  },
  {
    asin: '0399143947',
    year: 1998,
    rank: '29',
    title: 'Point of Origin (Kay Scarpetta) (A Scarpetta Novel)',
    author: 'Patricia Cornwell'
  },
  {
    asin: '0446672211',
    year: 1998,
    rank: '30',
    title: 'Where the Heart Is',
    author: 'Billie Letts'
  },
  {
    asin: '0684813726',
    year: 1998,
    rank: '31',
    title: 'Death of Outrage: Bill Clinton and the Assault on American Ideals',
    author: 'William J. Bennett'
  },
  {
    asin: '0881841781',
    year: 1998,
    rank: '32',
    title: 'Endurance : Shackleton\'s Incredible Voyage',
    author: 'Alfred. Lansing'
  },
  {
    asin: '0385492081',
    year: 1998,
    rank: '33',
    title: 'Into Thin Air: A Personal Account of the Mt. Everest Disaster',
    author: 'Jon Krakauer'
  },
  {
    asin: '0670880728',
    year: 1998,
    rank: '34',
    title: 'Bridget Jones\'s Diary',
    author: 'Helen Fielding'
  },
  {
    asin: '0679454470',
    year: 1998,
    rank: '35',
    title: 'The Vampire Armand : The Vampire Chronicles (Rice, Anne, Vampire Chronicles)',
    author: 'Anne Rice'
  },
  {
    asin: '1563523302',
    year: 1998,
    rank: '36',
    title: 'The Millionaire Next Door: The Surprising Secrets of America\'s Wealthy',
    author: 'Thomas J. Stanley'
  },
  {
    asin: '0679438084',
    year: 1998,
    rank: '37',
    title: 'Titan: The Life of John D. Rockefeller, Sr.',
    author: 'Ron Chernow'
  },
  {
    asin: '0375501371',
    year: 1998,
    rank: '38',
    title: 'A Widow for One Year: A Novel',
    author: 'John Irving'
  },
  {
    asin: '0151004366',
    year: 1998,
    rank: '39',
    title: 'The Emperor\'s New Clothes : An All-Star Retelling of the Classic Fairy Tale (with Audio CD)',
    author: 'Starbright Foundation'
  },
  {
    asin: '0060175400',
    year: 1998,
    rank: '40',
    title: 'The Poisonwood Bible',
    author: 'Barbara Kingsolver'
  },
  {
    asin: '0425167313',
    year: 1998,
    rank: '41',
    title: 'Here on Earth (Oprah\'s Book Club)',
    author: 'Alice Hoffman'
  },
  {
    asin: '0871136791',
    year: 1998,
    rank: '42',
    title: 'Cold Mountain',
    author: 'Charles Frazier'
  },
  {
    asin: '006101351X',
    year: 1998,
    rank: '43',
    title: 'The Perfect Storm: A True Story of Men Against the Sea',
    author: 'Sebastian Junger'
  },
  {
    asin: '0130952842',
    year: 1998,
    rank: '44',
    title: 'Time Bomb 2000!: What the Year 2000 Computer Crisis Means to You!',
    author: 'Edward Yourdon'
  },
  {
    asin: '0374120803',
    year: 1998,
    rank: '45',
    title: 'Charming Billy',
    author: 'Alice McDermott'
  },
  {
    asin: '0887307175',
    year: 1998,
    rank: '46',
    title: 'Crossing the Chasm: Marketing and Selling High-Tech Products to Mainstream Customers',
    author: 'Geoffrey A. Moore'
  },
  {
    asin: '087584801X',
    year: 1998,
    rank: '47',
    title: 'Unleashing the Killer App: Digital Strategies for Market Dominance',
    author: 'Larry Downes'
  },
  {
    asin: '0060391502',
    year: 1998,
    rank: '48',
    title: 'Enter The Zone: A Dietary Road map',
    author: 'Barry Sears'
  },
  {
    asin: '068815428X',
    year: 1998,
    rank: '49',
    title: 'Gung Ho! Turn On the People in Any Organization',
    author: 'Ken Blanchard'
  },
  {
    asin: '0884270610',
    year: 1998,
    rank: '50',
    title: 'The Goal: A Process of Ongoing Improvement',
    author: 'Eliyahu M. Goldratt'
  },
  {
    asin: '0688123163',
    year: 1998,
    rank: '51',
    title: 'Raving Fans: A Revolutionary Approach To Customer Service',
    author: 'Ken Blanchard'
  },
  {
    asin: '038079487X',
    year: 1998,
    rank: '52',
    title: 'What Looks Like Crazy on an Ordinary Day (Oprah\'s Book Club)',
    author: 'Pearl Cleage'
  },
  {
    asin: '068484401X',
    year: 1998,
    rank: '53',
    title: 'The Motley Fool Investment Workbook',
    author: 'David Gardner'
  },
  {
    asin: '0375404031',
    year: 1998,
    rank: '54',
    title: 'The Endurance: Shackleton\'s Legendary Antarctic Expedition',
    author: 'Caroline Alexander'
  },
  {
    asin: '0684841363',
    year: 1998,
    rank: '55',
    title: 'In the Meantime: Finding Yourself and the Love You Want',
    author: 'Iyanla Vanzant'
  },
  {
    asin: '0679886478',
    year: 1998,
    rank: '56',
    title: 'The 20th-Century Children\'s Book Treasury: Picture Books and Stories to Read Aloud',
    author: 'Janet Schulman'
  },
  {
    asin: '0205191584',
    year: 1998,
    rank: '57',
    title: 'The Elements of Style, Third Edition',
    author: 'William Strunk Jr.'
  },
  {
    asin: '0679410708',
    year: 1998,
    rank: '58',
    title: 'The American Century',
    author: 'Harold Evans'
  },
  {
    asin: '0679435271',
    year: 1998,
    rank: '59',
    title: 'A Pirate Looks at Fifty',
    author: 'Jimmy Buffett'
  },
  {
    asin: '0316051144',
    year: 1998,
    rank: '60',
    title: 'The Breast Cancer Prevention Diet: The Powerful Foods, Supplements, and Drugs That Can Save Your Life',
    author: 'Robert Arnot M.D.'
  },
  {
    asin: '1580600506',
    year: 1998,
    rank: '61',
    title: 'The Fallen Man',
    author: 'Tony Hillerman'
  },
  {
    asin: '0767902513',
    year: 1998,
    rank: '62',
    title: 'A Walk in the Woods: Rediscovering America on the Appalachian Trail',
    author: 'Bill Bryson'
  },
  {
    asin: '0812929004',
    year: 1998,
    rank: '63',
    title: 'The Profit Zone: How Strategic Business Design Will Lead You to Tomorrow\'s Profits',
    author: 'Adrian J. Slywotzky'
  },
  {
    asin: '1580600514',
    year: 1998,
    rank: '64',
    title: 'Intensity',
    author: 'Dean R. Koontz'
  },
  {
    asin: '0140157352',
    year: 1998,
    rank: '65',
    title: 'Getting to Yes: Negotiating Agreement Without Giving In',
    author: 'Roger Fisher'
  },
  {
    asin: '0875847471',
    year: 1998,
    rank: '66',
    title: 'Leading Change',
    author: 'John P. Kotter'
  },
  {
    asin: '0590353403',
    year: 1998,
    rank: '67',
    title: 'Harry Potter And The Sorcerer\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    asin: '0060976845',
    year: 1998,
    rank: '68',
    title: 'Little Altars Everywhere',
    author: 'Rebecca Wells'
  },
  {
    asin: '0962962813',
    year: 1998,
    rank: '69',
    title: '101 Nights of Grrreat Sex: Secret Sealed Seductions for Fun-Loving Couples',
    author: 'Laura Corn'
  },
  {
    asin: '0684843994',
    year: 1998,
    rank: '70',
    title: 'You Have More Than You Think: The Motley Fool Guide To Investing What You Have',
    author: 'David Gardner'
  },
  {
    asin: '0375700757',
    year: 1998,
    rank: '71',
    title: 'Cold Mountain: A Novel',
    author: 'Charles Frazier'
  },
  {
    asin: '0684845903',
    year: 1998,
    rank: '72',
    title: 'The Unemotional Investor : Simple Systems for Beating the Market',
    author: 'Robert Sheard'
  },
  {
    asin: '0553379534',
    year: 1998,
    rank: '73',
    title: 'Women\'s Bodies, Women\'s Wisdom: Creating Physical and Emotional Health and Healing',
    author: 'Christiane Northrup…'
  },
  {
    asin: '0875846513',
    year: 1998,
    rank: '74',
    title: 'The Balanced Scorecard: Translating Strategy into Action',
    author: 'Robert S. Kaplan'
  },
  {
    asin: '1580600492',
    year: 1998,
    rank: '75',
    title: 'L is for Lawless',
    author: 'Sue Grafton'
  },
  {
    asin: '0201339870',
    year: 1998,
    rank: '76',
    title: 'Blur: The Speed of Change In the Connected Economy',
    author: 'Stan Davis'
  },
  {
    asin: '0812926765',
    year: 1998,
    rank: '77',
    title: 'How to Be a Star at Work: 9 Breakthrough Strategies You Need to Succeed',
    author: 'Robert E. Kelley'
  },
  {
    asin: '0446519138',
    year: 1998,
    rank: '78',
    title: 'Simple Abundance: A Daybook of Comfort of Joy',
    author: 'Sarah Ban Breathnach'
  },
  {
    asin: '0887307280',
    year: 1998,
    rank: '79',
    title: 'The E-Myth Revisited: Why Most Small Businesses Don\'t Work and What to Do About It',
    author: 'Michael E. Gerber'
  },
  {
    asin: '037570504X',
    year: 1998,
    rank: '80',
    title: 'Breath, Eyes, Memory (Oprah\'s Book Club)',
    author: 'Edwidge Danticat'
  },
  {
    asin: '0887308872',
    year: 1998,
    rank: '81',
    title: 'The Gorilla Game: An Investor\'s Guide to Picking Winners in High Technology',
    author: 'Geoffrey A. Moore'
  },
  {
    asin: '0684841347',
    year: 1998,
    rank: '82',
    title: 'One Day My Soul Just Opened Up: 40 Days and 40 Nights Toward Spiritual Strength and Personal Growth',
    author: 'Iyanla Vanzant'
  },
  {
    asin: '0201633612',
    year: 1998,
    rank: '83',
    title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    author: 'Erich Gamma'
  },
  {
    asin: '0684874350',
    year: 1998,
    rank: '84',
    title: 'Angela\'s Ashes (The Frank McCourt Memoirs)',
    author: 'Frank McCourt'
  },
  {
    asin: '0805036504',
    year: 1998,
    rank: '85',
    title: 'N is for Noose',
    author: 'Sue Grafton'
  },
  {
    asin: '0821224972',
    year: 1998,
    rank: '86',
    title: 'If Only You Knew How Much I Smell You: True Portraits of Dogs',
    author: 'Valerie Shaff'
  },
  {
    asin: '039304016X',
    year: 1998,
    rank: '87',
    title: 'The Perfect Storm: A True Story of Men Against the Sea',
    author: 'Sebastian Junger'
  },
  {
    asin: '0679450777',
    year: 1998,
    rank: '88',
    title: 'Consilience: The Unity of Knowledge',
    author: 'Edward O. Wilson'
  },
  {
    asin: '0395938473',
    year: 1998,
    rank: '89',
    title: 'The New Way Things Work',
    author: 'David Macaulay'
  },
  {
    asin: '0028610105',
    year: 1998,
    rank: '90',
    title: 'How To Cook Everything: Simple Recipes for Great Food',
    author: 'Mark Bittman'
  },
  {
    asin: '0767902386',
    year: 1998,
    rank: '91',
    title: 'If Life Is a Game, These Are the Rules: Ten Rules for Being Human as Introduced in Chicken Soup for the Soul',
    author: 'Cherie Carter-Scott'
  },
  {
    asin: '0060175966',
    year: 1998,
    rank: '92',
    title: 'The Professor and the Madman',
    author: 'Simon Winchester'
  },
  {
    asin: '0399142789',
    year: 1998,
    rank: '93',
    title: 'Conversations with God: An Uncommon Dialogue, Book 1',
    author: 'Neale Donald Walsch'
  },
  {
    asin: '0137669577',
    year: 1998,
    rank: '94',
    title: 'Core Java 1.1 Volume 1: Fundamentals',
    author: 'Cay S. Horstmann'
  },
  {
    asin: '0385482485',
    year: 1998,
    rank: '95',
    title: 'The Gifts of the Jews (Hinges of History)',
    author: 'Thomas Cahill'
  },
  {
    asin: '1565921496',
    year: 1998,
    rank: '96',
    title: 'Programming Perl',
    author: 'Tom Christiansen'
  },
  {
    asin: '0871134640',
    year: 1998,
    rank: '97',
    title: 'Ship of Gold in the Deep Blue Sea',
    author: 'Gary Kinder'
  },
  {
    asin: '0875845851',
    year: 1998,
    rank: '98',
    title: 'The Innovator\'s Dilemma: When New Technologies Cause Great Firms to Fail',
    author: 'Clayton M.…'
  },
  {
    asin: '0446673463',
    year: 1998,
    rank: '99',
    title: 'The New Strategic Selling: The Unique Sales System Proven Successful by the World\'s Best Companies, Revised and Updated for the 21st Century',
    author: 'Stephen E. Heiman'
  },
  {
    asin: '156305339X',
    year: 1998,
    rank: '100',
    title: '1001 Ways to Reward Employees',
    author: 'Bob Nelson'
  },
  {
    asin: '0439136350',
    year: 1999,
    rank: '1',
    title: 'Harry Potter And The Prisoner Of Azkaban',
    author: 'J.K. Rowling'
  },
  {
    asin: '0439064864',
    year: 1999,
    rank: '2',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    asin: '0590353403',
    year: 1999,
    rank: '3',
    title: 'Harry Potter And The Sorcerer\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    asin: '0452278384',
    year: 1999,
    rank: '4',
    title: 'The Carbohydrate Addict\'s Lifespan Program: Personalized Plan for bcmg Slim Fit Healthy your 40s 50s 60s Beyond',
    author: 'Dr. Rachael F. Heller'
  },
  {
    asin: '0385484518',
    year: 1999,
    rank: '5',
    title: 'Tuesdays with Morrie: An Old Man, A Young Man and Life\'s Greatest Lesson',
    author: 'Mitch Albom'
  },
  {
    asin: '0399144463',
    year: 1999,
    rank: '6',
    title: 'Who Moved My Cheese?: An Amazing Way to Deal with Change in Your Work and in Your Life',
    author: 'Spencer Johnson'
  },
  {
    asin: '0375502025',
    year: 1999,
    rank: '7',
    title: 'The Greatest Generation',
    author: 'Tom Brokaw'
  },
  {
    asin: '0451173392',
    year: 1999,
    rank: '8',
    title: 'The Carbohydrate Addict\'s Diet: The Lifelong Solution to Yo-Yo Dieting (Signet)',
    author: 'Dr. Rachael F. Heller'
  },
  {
    asin: '038529929X',
    year: 1999,
    rank: '9',
    title: 'Hannibal: A Novel',
    author: 'Thomas Harris'
  },
  {
    asin: '0060193395',
    year: 1999,
    rank: '10',
    title: 'Body for Life: 12 Weeks to Mental and Physical Strength',
    author: 'Bill Phillips'
  },
  {
    asin: '0380727293',
    year: 1999,
    rank: '11',
    title: 'Dr. Atkins\' New Diet Revolution',
    author: 'Robert C. Atkins'
  },
  {
    asin: '0385493800',
    year: 1999,
    rank: '12',
    title: 'The Testament',
    author: 'John Grisham'
  },
  {
    asin: '0679781587',
    year: 1999,
    rank: '13',
    title: 'Memoirs of a Geisha: A Novel',
    author: 'Arthur Golden'
  },
  {
    asin: '0684848783',
    year: 1999,
    rank: '14',
    title: '\'Tis: A Memoir',
    author: 'Frank McCourt'
  },
  {
    asin: '059035342X',
    year: 1999,
    rank: '15',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    asin: '0316569321',
    year: 1999,
    rank: '16',
    title: 'White Oleander',
    author: 'Janet Fitch'
  },
  {
    asin: '0316601950',
    year: 1999,
    rank: '17',
    title: 'The Pilot\'s Wife (Oprah\'s Book Club)',
    author: 'Anita Shreve'
  },
  {
    asin: '0553574752',
    year: 1999,
    rank: '18',
    title: 'Protein Power: The High-Protein/Low Carbohydrate Way to Lose Weight, Feel Fit, and Boost Your Health-in Just Weeks!',
    author: 'Michael R. Eades'
  },
  {
    asin: '0821226339',
    year: 1999,
    rank: '19',
    title: 'Life: Our Century In Pictures',
    author: 'Richard B. Stolley'
  },
  {
    asin: '0375707972',
    year: 1999,
    rank: '20',
    title: 'The Reader',
    author: 'Bernhard Schlink'
  },
  {
    asin: '0399145087',
    year: 1999,
    rank: '21',
    title: 'Black Notice (A Scarpetta Novel)',
    author: 'Patricia Cornwell'
  },
  {
    asin: '0385483279',
    year: 1999,
    rank: '22',
    title: 'The Century',
    author: 'Peter Jennings'
  },
  {
    asin: '067169507X',
    year: 1999,
    rank: '23',
    title: 'The Seat of the Soul',
    author: 'Gary Zukav'
  },
  {
    asin: '0684852861',
    year: 1999,
    rank: '24',
    title: 'First, Break All the Rules: What the World\'s Greatest Managers Do Differently',
    author: 'Marcus Buckingham'
  },
  {
    asin: '0812930371',
    year: 1999,
    rank: '25',
    title: 'Customers.com: How to Create a Profitable Business Strategy for the Internet and Beyond',
    author: 'Patricia B. Seybold'
  },
  {
    asin: '0875845851',
    year: 1999,
    rank: '26',
    title: 'The Innovator\'s Dilemma: When New Technologies Cause Great Firms to Fail',
    author: 'Clayton M.…'
  },
  {
    asin: '0385335121',
    year: 1999,
    rank: '27',
    title: 'Tara Road: Oprah Selection #26',
    author: 'Maeve Binchy'
  },
  {
    asin: '0671708635',
    year: 1999,
    rank: '28',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0060392991',
    year: 1999,
    rank: '29',
    title: 'Mankind: Have a Nice Day - A Tale of Blood and Sweatsocks',
    author: 'Mick Foley'
  },
  {
    asin: '0679444815',
    year: 1999,
    rank: '30',
    title: 'Timeline',
    author: 'Michael Crichton'
  },
  {
    asin: '0609804618',
    year: 1999,
    rank: '31',
    title: 'Our Dumb Century: The Onion Presents 100 Years of Headlines from America\'s Finest News Source',
    author: 'The Onion'
  },
  {
    asin: '0345425588',
    year: 1999,
    rank: '32',
    title: 'Sugar Busters!  Cut Sugar to Trim Fat',
    author: 'H. Leighton Steward'
  },
  {
    asin: '0316929190',
    year: 1999,
    rank: '33',
    title: 'All Too Human: A Political Education',
    author: 'George Stephanopoulos'
  },
  {
    asin: '0786865482',
    year: 1999,
    rank: '34',
    title: 'Life Strategies: Doing What Works, Doing What Matters',
    author: 'Phillip C. McGraw'
  },
  {
    asin: '0446525685',
    year: 1999,
    rank: '35',
    title: 'Business @ the Speed of Thought: Succeeding in the Digital Economy',
    author: 'Bill Gates'
  },
  {
    asin: '084232920X',
    year: 1999,
    rank: '36',
    title: 'Assassins (Left Behind, Book 6)',
    author: 'Jerry B. Jenkins'
  },
  {
    asin: '0451177177',
    year: 1999,
    rank: '37',
    title: 'The Carbohydrate Addict\'s Gram Counter: Essential Food Facts at a Glance (Signet)',
    author: 'Dr. Rachael F. Heller'
  },
  {
    asin: '068484267X',
    year: 1999,
    rank: '38',
    title: 'Angela\'s Ashes: A Memoir',
    author: 'Frank McCourt'
  },
  {
    asin: '0671015206',
    year: 1999,
    rank: '39',
    title: 'The Millionaire Next Door',
    author: 'Thomas J. Stanley'
  },
  {
    asin: '0374332657',
    year: 1999,
    rank: '40',
    title: 'Holes (Newberry Medal Book)',
    author: 'Louis Sachar'
  },
  {
    asin: '0609601628',
    year: 1999,
    rank: '41',
    title: 'Suzanne Somers\' Get Skinny on Fabulous Food',
    author: 'Suzanne Somers'
  },
  {
    asin: '0374192030',
    year: 1999,
    rank: '42',
    title: 'The Lexus and the Olive Tree',
    author: 'Thomas L. Friedman'
  },
  {
    asin: '0446672211',
    year: 1999,
    rank: '43',
    title: 'Where the Heart Is',
    author: 'Billie Letts'
  },
  {
    asin: '0684853515',
    year: 1999,
    rank: '44',
    title: 'Hearts In Atlantis',
    author: 'Stephen King'
  },
  {
    asin: '1570714606',
    year: 1999,
    rank: '45',
    title: 'And the Crowd Goes Wild: Relive the Most Celebrated Sporting Events Ever Broadcast (Book and 2 Audio CDs)',
    author: 'Garner'
  },
  {
    asin: '0393048136',
    year: 1999,
    rank: '46',
    title: 'The New New Thing : A Silicon Valley Story',
    author: 'Michael Lewis'
  },
  {
    asin: '0805059555',
    year: 1999,
    rank: '47',
    title: '"O" Is for Outlaw',
    author: 'Sue Grafton'
  },
  {
    asin: '0842329129',
    year: 1999,
    rank: '48',
    title: 'Left Behind: A Novel of the Earth\'s Last Days (Left Behind No. 1)',
    author: 'Tim LaHaye'
  },
  {
    asin: '0805499547',
    year: 1999,
    rank: '49',
    title: 'Experiencing God: Knowing and Doing the Will of God (Workbook)',
    author: 'Henry T. Blackaby'
  },
  {
    asin: '0380730138',
    year: 1999,
    rank: '50',
    title: 'Vinegar Hill (Oprah\'s Book Club)',
    author: 'A. Manette Ansay'
  },
  {
    asin: '0671038184',
    year: 1999,
    rank: '51',
    title: 'Jewel (Oprah\'s Book Club)',
    author: 'Bret Lott'
  },
  {
    asin: '0786866276',
    year: 1999,
    rank: '52',
    title: 'Mother of Pearl',
    author: 'Melinda Haynes'
  },
  {
    asin: '0446392308',
    year: 1999,
    rank: '53',
    title: 'Healing Back Pain: The Mind-Body Connection',
    author: 'John E. Sarno'
  },
  {
    asin: '0380973464',
    year: 1999,
    rank: '54',
    title: 'Cryptonomicon',
    author: 'Neal Stephenson'
  },
  {
    asin: '0553379534',
    year: 1999,
    rank: '55',
    title: 'Women\'s Bodies, Women\'s Wisdom: Creating Physical and Emotional Health and Healing',
    author: 'Christiane Northrup…'
  },
  {
    asin: '0871318156',
    year: 1999,
    rank: '56',
    title: 'Dr. Atkins\' New Carbohydrate Gram Counter',
    author: 'Robert C. Atkins…'
  },
  {
    asin: '0684827034',
    year: 1999,
    rank: '57',
    title: 'The Motley Fool Investment Guide: How the Fools Beat Wall Street\'s Wise Men and How You Can Too',
    author: 'Tom Gardner'
  },
  {
    asin: '0375503943',
    year: 1999,
    rank: '58',
    title: 'The Greatest Generation Speaks: Letters and Reflections',
    author: 'Tom Brokaw'
  },
  {
    asin: '1573221112',
    year: 1999,
    rank: '59',
    title: 'The Art of Happiness: A Handbook for Living',
    author: 'Dalai Lama'
  },
  {
    asin: '0842329161',
    year: 1999,
    rank: '60',
    title: 'Apollyon: The Destroyer Is Unleashed (Left Behind #5)',
    author: 'Jerry B. Jenkins'
  },
  {
    asin: '0060928336',
    year: 1999,
    rank: '61',
    title: 'Divine Secrets of the Ya-Ya Sisterhood: A Novel',
    author: 'Rebecca Wells'
  },
  {
    asin: '0374281947',
    year: 1999,
    rank: '62',
    title: 'Personal Injuries (Scott Turow)',
    author: 'Scott Turow'
  },
  {
    asin: '0684844184',
    year: 1999,
    rank: '63',
    title: 'When Pride Still Mattered: A Life of Vince Lombardi',
    author: 'David Maraniss'
  },
  {
    asin: '0684867621',
    year: 1999,
    rank: '64',
    title: 'The Girl Who Loved Tom Gordon : A Novel',
    author: 'Stephen King'
  },
  {
    asin: '039914255X',
    year: 1999,
    rank: '65',
    title: 'Eat Right 4 Your Type: The Individualized Diet Solution to Staying Healthy, Living Longer & Achieving Your Ideal Weight',
    author: 'Peter J. D\'Adamo'
  },
  {
    asin: '068815428X',
    year: 1999,
    rank: '66',
    title: 'Gung Ho! Turn On the People in Any Organization',
    author: 'Ken Blanchard'
  },
  {
    asin: '0964385619',
    year: 1999,
    rank: '67',
    title: 'Rich Dad, Poor Dad: What the Rich Teach Their Kids about Money - That the Poor and the Middle Class Do Not!',
    author: 'Robert T. Kiyosaki'
  },
  {
    asin: '0805061835',
    year: 1999,
    rank: '68',
    title: 'Real Boys: Rescuing Our Sons from the Myths of Boyhood',
    author: 'William Pollack'
  },
  {
    asin: '0684844001',
    year: 1999,
    rank: '69',
    title: 'The MOTLEY FOOL\'S RULE BREAKERS, RULE MAKERS: THE FOOLISH GUIDE TO PICKING STOCKS',
    author: 'Tom Gardner'
  },
  {
    asin: '081676526X',
    year: 1999,
    rank: '70',
    title: 'How To Draw Pokemon',
    author: 'Zalme'
  },
  {
    asin: '0393046885',
    year: 1999,
    rank: '71',
    title: 'The Elegant Universe: Superstrings, Hidden Dimensions, and the Quest for the Ultimate Theory',
    author: 'Brian Greene'
  },
  {
    asin: '0071345663',
    year: 1999,
    rank: '72',
    title: 'How to Get Started in Electronic Day Trading: Everything You Need to Know to Play Wall Street\'s Hottest Game',
    author: 'David S. Nassar'
  },
  {
    asin: '0316693286',
    year: 1999,
    rank: '73',
    title: 'Pop Goes the Weasel (Alex Cross)',
    author: 'James Patterson'
  },
  {
    asin: '0670878103',
    year: 1999,
    rank: '74',
    title: 'A New Song (The Mitford Years, Book 5)',
    author: 'Jan Karon'
  },
  {
    asin: '0767903447',
    year: 1999,
    rank: '75',
    title: 'Dave Pelz\'s Short Game Bible: Master the Finesse Swing and Lower Your Score (Dave Pelz Scoring Game Series)',
    author: 'Dave Pelz'
  },
  {
    asin: '0385720106',
    year: 1999,
    rank: '76',
    title: 'A Map of the World: A Novel (Oprah\'s Book Club)',
    author: 'Jane Hamilton'
  },
  {
    asin: '0688123163',
    year: 1999,
    rank: '77',
    title: 'Raving Fans: A Revolutionary Approach To Customer Service',
    author: 'Ken Blanchard'
  },
  {
    asin: '0684838184',
    year: 1999,
    rank: '78',
    title: 'The Roaring 2000s: Building the Wealth and Life Style You Desire in the Greatest Boom in History',
    author: 'Harry S. Dent'
  },
  {
    asin: '0375404031',
    year: 1999,
    rank: '79',
    title: 'The Endurance: Shackleton\'s Legendary Antarctic Expedition',
    author: 'Caroline Alexander'
  },
  {
    asin: '0884270610',
    year: 1999,
    rank: '80',
    title: 'The Goal: A Process of Ongoing Improvement',
    author: 'Eliyahu M. Goldratt'
  },
  {
    asin: '0060930535',
    year: 1999,
    rank: '81',
    title: 'The Poisonwood Bible (Oprah\'s Book Club)',
    author: 'Barbara Kingsolver'
  },
  {
    asin: '0887307396',
    year: 1999,
    rank: '82',
    title: 'Built to Last: Successful Habits of Visionary Companies',
    author: 'James C. Collins'
  },
  {
    asin: '0452269334',
    year: 1999,
    rank: '83',
    title: 'The Carbohydrate Addict\'s Program for Success',
    author: 'Dr. Rachael F. Heller'
  },
  {
    asin: '0782123813',
    year: 1999,
    rank: '84',
    title: 'CCNA: Cisco Certified Network Associate Study Guide',
    author: 'Todd Lammle'
  },
  {
    asin: '0060191341',
    year: 1999,
    rank: '85',
    title: 'RealAge: Are You as Young as You Can Be?',
    author: 'Michael F. Roizen…'
  },
  {
    asin: '0446525537',
    year: 1999,
    rank: '86',
    title: 'A Walk to Remember',
    author: 'Nicholas Sparks'
  },
  {
    asin: '0802713432',
    year: 1999,
    rank: '87',
    title: 'Galileo\'s Daughter: A Historical Memoir of Science, Faith, and Love',
    author: 'Dava Sobel'
  },
  {
    asin: '0393317552',
    year: 1999,
    rank: '88',
    title: 'Guns, Germs, and Steel: The Fates of Human Societies',
    author: 'Jared M. Diamond'
  },
  {
    asin: '0684852624',
    year: 1999,
    rank: '89',
    title: 'Shadow: Five Presidents and the Legacy of Watergate',
    author: 'Bob Woodward'
  },
  {
    asin: '0375501916',
    year: 1999,
    rank: '90',
    title: 'Faith of My Fathers',
    author: 'John McCain'
  },
  {
    asin: '0440226430',
    year: 1999,
    rank: '91',
    title: 'Summer Sisters',
    author: 'Judy Blume'
  },
  {
    asin: '0684837013',
    year: 1999,
    rank: '92',
    title: 'Dr. Atkins\' Quick and Easy New Diet Cookbook',
    author: 'Robert C. Atkins'
  },
  {
    asin: '0140157352',
    year: 1999,
    rank: '93',
    title: 'Getting to Yes: Negotiating Agreement Without Giving In',
    author: 'Roger Fisher'
  },
  {
    asin: '0375706771',
    year: 1999,
    rank: '94',
    title: 'Midwives (Oprah\'s Book Club)',
    author: 'Chris Bohjalian'
  },
  {
    asin: '0316899984',
    year: 1999,
    rank: '95',
    title: 'River, Cross My Heart: A Novel (Oprah\'s Book Club)',
    author: 'Breena Clarke'
  },
  {
    asin: '1891620088',
    year: 1999,
    rank: '96',
    title: 'Blind Man\'s Bluff: The Untold Story Of American Submarine Espionage',
    author: 'Sherry Sontag'
  },
  {
    asin: '0395843685',
    year: 1999,
    rank: '97',
    title: 'The Best American Short Stories of the Century',
    author: 'John Updike'
  },
  {
    asin: '0805056491',
    year: 1999,
    rank: '98',
    title: 'Organizing From the Inside Out',
    author: 'Julie Morgenstern'
  },
  {
    asin: '0786862734',
    year: 1999,
    rank: '99',
    title: 'The Low-Carb Cookbook: The Complete Guide to the Healthy Low-Carbohydrate Lifestyle with over 250 Delicious Recipes',
    author: 'Fran McCullough'
  },
  {
    asin: '0201696967',
    year: 1999,
    rank: '100',
    title: 'HTML 4 for the World Wide Web: VQS (3rd Edition)',
    author: 'Elizabeth Castro'
  },
  {
    asin: '0439139597',
    year: 2000,
    rank: '1',
    title: 'Harry Potter And The Goblet Of Fire (Book 4)',
    author: 'J.K. Rowling'
  },
  {
    asin: '0399144463',
    year: 2000,
    rank: '2',
    title: 'Who Moved My Cheese?: An Amazing Way to Deal with Change in Your Work and in Your Life',
    author: 'Spencer Johnson'
  },
  {
    asin: '0439136350',
    year: 2000,
    rank: '3',
    title: 'Harry Potter And The Prisoner Of Azkaban',
    author: 'J.K. Rowling'
  },
  {
    asin: '0439064864',
    year: 2000,
    rank: '4',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    asin: '0590353403',
    year: 2000,
    rank: '5',
    title: 'Harry Potter And The Sorcerer\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    asin: '0060193395',
    year: 2000,
    rank: '6',
    title: 'Body for Life: 12 Weeks to Mental and Physical Strength',
    author: 'Bill Phillips'
  },
  {
    asin: '0385497466',
    year: 2000,
    rank: '7',
    title: 'The Brethren',
    author: 'John Grisham'
  },
  {
    asin: '0811826848',
    year: 2000,
    rank: '8',
    title: 'The Beatles Anthology',
    author: 'The Beatles'
  },
  {
    asin: '0060930535',
    year: 2000,
    rank: '9',
    title: 'The Poisonwood Bible (Oprah\'s Book Club)',
    author: 'Barbara Kingsolver'
  },
  {
    asin: '0446677450',
    year: 2000,
    rank: '10',
    title: 'Rich Dad, Poor Dad: What the Rich Teach Their Kids About Money--That the Poor and Middle Class Do Not!',
    author: 'Robert T. Kiyosaki'
  },
  {
    asin: '059035342X',
    year: 2000,
    rank: '11',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    asin: '0385484518',
    year: 2000,
    rank: '12',
    title: 'Tuesdays with Morrie: An Old Man, A Young Man and Life\'s Greatest Lesson',
    author: 'Mitch Albom'
  },
  {
    asin: '0375407545',
    year: 2000,
    rank: '13',
    title: 'Eating Well for Optimum Health: The Essential Guide to Food, Diet, and Nutrition',
    author: 'Andrew Weil M.D.'
  },
  {
    asin: '039914563X',
    year: 2000,
    rank: '14',
    title: 'The Bear and the Dragon',
    author: 'Tom Clancy'
  },
  {
    asin: '067169507X',
    year: 2000,
    rank: '15',
    title: 'The Seat of the Soul',
    author: 'Gary Zukav'
  },
  {
    asin: '0767905288',
    year: 2000,
    rank: '16',
    title: 'The O\'Reilly Factor: The Good, the Bad, and the Completely Ridiculous in American Life',
    author: 'Bill O\'Reilly'
  },
  {
    asin: '1878424319',
    year: 2000,
    rank: '17',
    title: 'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
    author: 'Don Miguel Ruiz'
  },
  {
    asin: '0684852861',
    year: 2000,
    rank: '18',
    title: 'First, Break All the Rules: What the World\'s Greatest Managers Do Differently',
    author: 'Marcus Buckingham'
  },
  {
    asin: '0743418301',
    year: 2000,
    rank: '19',
    title: 'Talking Dirty With The Queen Of Clean',
    author: 'Linda Cobb'
  },
  {
    asin: '0811825558',
    year: 2000,
    rank: '20',
    title: 'The Worst-Case Scenario Survival Handbook',
    author: 'Joshua Piven'
  },
  {
    asin: '0553111337',
    year: 2000,
    rank: '21',
    title: 'Flags of Our Fathers',
    author: 'James Bradley'
  },
  {
    asin: '0842329285',
    year: 2000,
    rank: '22',
    title: 'The Indwelling: The Beast Takes Possession (Left Behind #7)',
    author: 'Jerry B. Jenkins'
  },
  {
    asin: '0671708635',
    year: 2000,
    rank: '23',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0399146113',
    year: 2000,
    rank: '24',
    title: 'It\'s Not about the Bike: My Journey Back to Life',
    author: 'Lance Armstrong'
  },
  {
    asin: '0060175869',
    year: 2000,
    rank: '25',
    title: 'From Dawn to Decadence: 1500 to the Present: 500 Years of Western Cultural Life',
    author: 'Jacques Barzun'
  },
  {
    asin: '0786866314',
    year: 2000,
    rank: '26',
    title: 'Relationship Rescue: A Seven-Step Strategy for Reconnecting with You Partner',
    author: 'Phillip C. McGraw'
  },
  {
    asin: '1565122968',
    year: 2000,
    rank: '27',
    title: 'Gap Creek : The Story of a Marriage',
    author: 'Robert Morgan'
  },
  {
    asin: '0316316962',
    year: 2000,
    rank: '28',
    title: 'The Tipping Point: How Little Things Can Make a Big Difference',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0385502532',
    year: 2000,
    rank: '29',
    title: 'Drowning Ruth: A Novel (Oprah\'s Book Club)',
    author: 'Christina Schwarz'
  },
  {
    asin: '0345443284',
    year: 2000,
    rank: '30',
    title: 'While I Was Gone (Oprah\'s Book Club)',
    author: 'Sue Miller'
  },
  {
    asin: '076790396X',
    year: 2000,
    rank: '31',
    title: 'The Pilates Body: The Ultimate At-Home Guide to Strengthening, Lengthening and Toning Your Body- Without Machines',
    author: 'Brooke Siler'
  },
  {
    asin: '0066620031',
    year: 2000,
    rank: '32',
    title: 'It\'s Your Money: The E*TRADE Step-by-Step Guide to Online Investing',
    author: 'Christos M. Cotsakos'
  },
  {
    asin: '006019491X',
    year: 2000,
    rank: '33',
    title: 'Daughter of Fortune: A Novel',
    author: 'Isabel Allende'
  },
  {
    asin: '0374111197',
    year: 2000,
    rank: '34',
    title: 'Beowulf: A New Verse Translation',
    author: 'Seamus Heaney'
  },
  {
    asin: '0399146253',
    year: 2000,
    rank: '35',
    title: 'The Last Precinct (A Scarpetta Novel)',
    author: 'Patricia Cornwell'
  },
  {
    asin: '0684863472',
    year: 2000,
    rank: '36',
    title: 'A Heartbreaking Work Of Staggering Genius : A Memoir Based on a True Story',
    author: 'Dave Eggers'
  },
  {
    asin: '0375502025',
    year: 2000,
    rank: '37',
    title: 'The Greatest Generation',
    author: 'Tom Brokaw'
  },
  {
    asin: '0670894184',
    year: 2000,
    rank: '38',
    title: 'Back Roads (Oprah\'s Book Club)',
    author: 'Tawni O\'Dell'
  },
  {
    asin: '0767902076',
    year: 2000,
    rank: '39',
    title: 'Take Time for Your Life: A Personal Coach\'s 7-Step Program for Creating the Life You Want',
    author: 'Cheryl Richardson'
  },
  {
    asin: '0842332251',
    year: 2000,
    rank: '40',
    title: 'The Mark: The Beast Rules the World (Left Behind #8)',
    author: 'Tim LaHaye'
  },
  {
    asin: '0684846098',
    year: 2000,
    rank: '41',
    title: 'Nothing Like It in the World: The Men Who Built the Transcontinental Railroad, 1863-1869',
    author: 'Stephen E. Ambrose'
  },
  {
    asin: '0312195516',
    year: 2000,
    rank: '42',
    title: 'The Red Tent',
    author: 'Anita Diamant'
  },
  {
    asin: '0060199652',
    year: 2000,
    rank: '43',
    title: 'Prodigal Summer',
    author: 'Barbara Kingsolver'
  },
  {
    asin: '020530902X',
    year: 2000,
    rank: '44',
    title: 'The Elements of Style, Fourth Edition',
    author: 'William Strunk Jr.'
  },
  {
    asin: '0393048136',
    year: 2000,
    rank: '45',
    title: 'The New New Thing : A Silicon Valley Story',
    author: 'Michael Lewis'
  },
  {
    asin: '0439064872',
    year: 2000,
    rank: '46',
    title: 'Harry Potter And The Chamber Of Secrets',
    author: 'J. K. Rowling'
  },
  {
    asin: '0345387651',
    year: 2000,
    rank: '47',
    title: 'The Cider House Rules',
    author: 'John Irving'
  },
  {
    asin: '0201354934',
    year: 2000,
    rank: '48',
    title: 'HTML 4 for the World Wide Web, Fourth Edition',
    author: 'Elizabeth Castro'
  },
  {
    asin: '0805056491',
    year: 2000,
    rank: '49',
    title: 'Organizing From the Inside Out',
    author: 'Julie Morgenstern'
  },
  {
    asin: '068481465X',
    year: 2000,
    rank: '50',
    title: 'Home Comforts: The Art and Science of Keeping House',
    author: 'Cheryl Mendelson'
  },
  {
    asin: '0451173392',
    year: 2000,
    rank: '51',
    title: 'The Carbohydrate Addict\'s Diet: The Lifelong Solution to Yo-Yo Dieting (Signet)',
    author: 'Dr. Rachael F. Heller'
  },
  {
    asin: '087584877X',
    year: 2000,
    rank: '52',
    title: 'Blown to Bits: How the New Economics of Information Transforms Strategy',
    author: 'Philip Evans'
  },
  {
    asin: '0375411550',
    year: 2000,
    rank: '53',
    title: 'The Bluest Eye',
    author: 'Toni Morrison'
  },
  {
    asin: '0375727345',
    year: 2000,
    rank: '54',
    title: 'House of Sand and Fog (Oprah\'s Book Club)  (Vintage Contemporaries)',
    author: 'Andre Dubus III'
  },
  {
    asin: '0670891576',
    year: 2000,
    rank: '55',
    title: 'In the Heart of the Sea: The Tragedy of the Whaleship Essex',
    author: 'Nathaniel Philbrick'
  },
  {
    asin: '0786866020',
    year: 2000,
    rank: '56',
    title: 'Fish: A Proven Way to Boost Morale and Improve Results',
    author: 'Stephen C. Lundin'
  },
  {
    asin: '006101351X',
    year: 2000,
    rank: '57',
    title: 'The Perfect Storm: A True Story of Men Against the Sea',
    author: 'Sebastian Junger'
  },
  {
    asin: '156205810X',
    year: 2000,
    rank: '58',
    title: 'Designing Web Usability',
    author: 'Jakob Nielsen'
  },
  {
    asin: '0345425588',
    year: 2000,
    rank: '59',
    title: 'Sugar Busters!  Cut Sugar to Trim Fat',
    author: 'H. Leighton Steward'
  },
  {
    asin: '0679805273',
    year: 2000,
    rank: '60',
    title: 'Oh, the Places You\'ll Go!  ',
    author: 'Dr. Seuss'
  },
  {
    asin: '0316777722',
    year: 2000,
    rank: '61',
    title: 'Me Talk Pretty One Day',
    author: 'David Sedaris'
  },
  {
    asin: '0887307396',
    year: 2000,
    rank: '62',
    title: 'Built to Last: Successful Habits of Visionary Companies',
    author: 'James C. Collins'
  },
  {
    asin: '068815428X',
    year: 2000,
    rank: '63',
    title: 'Gung Ho! Turn On the People in Any Organization',
    author: 'Ken Blanchard'
  },
  {
    asin: '0140157352',
    year: 2000,
    rank: '64',
    title: 'Getting to Yes: Negotiating Agreement Without Giving In',
    author: 'Roger Fisher'
  },
  {
    asin: '0380727293',
    year: 2000,
    rank: '65',
    title: 'Dr. Atkins\' New Diet Revolution',
    author: 'Robert C. Atkins'
  },
  {
    asin: '0446520659',
    year: 2000,
    rank: '66',
    title: 'The Lion\'s Game',
    author: 'Nelson DeMille'
  },
  {
    asin: '0071352422',
    year: 2000,
    rank: '67',
    title: 'Net Ready',
    author: 'Amir Hartman'
  },
  {
    asin: '0380803682',
    year: 2000,
    rank: '68',
    title: 'Dr. Atkins\' New Diet Revolution',
    author: 'Robert C. Atkins'
  },
  {
    asin: '0312864256',
    year: 2000,
    rank: '69',
    title: 'Winter\'s Heart (The Wheel of Time, Book 9)',
    author: 'Robert Jordan'
  },
  {
    asin: '0842329129',
    year: 2000,
    rank: '70',
    title: 'Left Behind: A Novel of the Earth\'s Last Days (Left Behind No. 1)',
    author: 'Tim LaHaye'
  },
  {
    asin: '1578200539',
    year: 2000,
    rank: '71',
    title: 'Newton\'s Telecom Dictionary: The Official Dictionary of Telecommunications Networking and Internet',
    author: 'Harry Newton'
  },
  {
    asin: '0884270610',
    year: 2000,
    rank: '72',
    title: 'The Goal: A Process of Ongoing Improvement',
    author: 'Eliyahu M. Goldratt'
  },
  {
    asin: '0385494378',
    year: 2000,
    rank: '73',
    title: 'Six Sigma:  The Breakthrough Management Strategy Revolutionizing the World\'s Top Corporations',
    author: 'Mikel Harry'
  },
  {
    asin: '0375504613',
    year: 2000,
    rank: '74',
    title: 'A Short Guide to a Happy Life',
    author: 'Anna Quindlen'
  },
  {
    asin: '1579542417',
    year: 2000,
    rank: '75',
    title: 'Picture Perfect Weight Loss: The Visual Program for Permanent Weight Loss',
    author: 'Dr. Howard M. Shapiro'
  },
  {
    asin: '0738202444',
    year: 2000,
    rank: '76',
    title: 'The Cluetrain Manifesto',
    author: 'David Weinberger'
  },
  {
    asin: '156305339X',
    year: 2000,
    rank: '77',
    title: '1001 Ways to Reward Employees',
    author: 'Bob Nelson'
  },
  {
    asin: '158234082X',
    year: 2000,
    rank: '78',
    title: 'Kitchen Confidential: Adventures in the Culinary Underbelly',
    author: 'Anthony Bourdain'
  },
  {
    asin: '0964385619',
    year: 2000,
    rank: '79',
    title: 'Rich Dad, Poor Dad: What the Rich Teach Their Kids about Money - That the Poor and the Middle Class Do Not!',
    author: 'Robert T. Kiyosaki'
  },
  {
    asin: '0440234743',
    year: 2000,
    rank: '80',
    title: 'The Testament',
    author: 'John Grisham'
  },
  {
    asin: '0375506039',
    year: 2000,
    rank: '81',
    title: 'Open House',
    author: 'Elizabeth Berg'
  },
  {
    asin: '0393317552',
    year: 2000,
    rank: '82',
    title: 'Guns, Germs, and Steel: The Fates of Human Societies',
    author: 'Jared M. Diamond'
  },
  {
    asin: '0786884592',
    year: 2000,
    rank: '83',
    title: 'Life Strategies: Doing What Works, Doing What Matters',
    author: 'Phillip C. McGraw'
  },
  {
    asin: '0688123163',
    year: 2000,
    rank: '84',
    title: 'Raving Fans: A Revolutionary Approach To Customer Service',
    author: 'Ken Blanchard'
  },
  {
    asin: '0743204077',
    year: 2000,
    rank: '85',
    title: 'Soul Stories',
    author: 'Gary Zukav'
  },
  {
    asin: '0425098478',
    year: 2000,
    rank: '86',
    title: 'The One Minute Manager',
    author: 'Kenneth Blanchard'
  },
  {
    asin: '0684848783',
    year: 2000,
    rank: '87',
    title: '\'Tis: A Memoir',
    author: 'Frank McCourt'
  },
  {
    asin: '0452278384',
    year: 2000,
    rank: '88',
    title: 'The Carbohydrate Addict\'s Lifespan Program: Personalized Plan for bcmg Slim Fit Healthy your 40s 50s 60s Beyond',
    author: 'Dr. Rachael F. Heller'
  },
  {
    asin: '0740703579',
    year: 2000,
    rank: '89',
    title: 'The Millionaire Mind',
    author: 'Dr. Thomas J. Stanley'
  },
  {
    asin: '0446526126',
    year: 2000,
    rank: '90',
    title: 'Ten Things I Wish I\'d Known - Before I Went Out into the Real World',
    author: 'Maria Shriver'
  },
  {
    asin: '0066620023',
    year: 2000,
    rank: '91',
    title: 'Crossing the Chasm: Marketing and Selling High-Tech Products to Mainstream Customers',
    author: 'Geoffrey A. Moore'
  },
  {
    asin: '0679879269',
    year: 2000,
    rank: '92',
    title: 'The Amber Spyglass (His Dark Materials, Book 3)',
    author: 'Philip Pullman'
  },
  {
    asin: '0385720106',
    year: 2000,
    rank: '93',
    title: 'A Map of the World: A Novel (Oprah\'s Book Club)',
    author: 'Jane Hamilton'
  },
  {
    asin: '0684853523',
    year: 2000,
    rank: '94',
    title: 'On Writing:  A Memoir of the Craft',
    author: 'Stephen King'
  },
  {
    asin: '0761117199',
    year: 2000,
    rank: '95',
    title: 'The Cake Mix Doctor',
    author: 'Anne Byrn'
  },
  {
    asin: '0446677469',
    year: 2000,
    rank: '96',
    title: 'Rich Dad\'s Guide to Investing: What the Rich Invest in, That the Poor and Middle Class Do Not!',
    author: 'Robert T. Kiyosaki'
  },
  {
    asin: '0394800796',
    year: 2000,
    rank: '97',
    title: 'How the Grinch Stole Christmas! (Classic Seuss)',
    author: 'Dr. Seuss'
  },
  {
    asin: '0871318156',
    year: 2000,
    rank: '98',
    title: 'Dr. Atkins\' New Carbohydrate Gram Counter',
    author: 'Robert C. Atkins…'
  },
  {
    asin: '0887308880',
    year: 2000,
    rank: '99',
    title: 'Living on the Fault Line : Managing for Shareholder Value in the Age of the Internet',
    author: 'Geoffrey A. Moore'
  },
  {
    asin: '0670892963',
    year: 2000,
    rank: '100',
    title: 'Bridget Jones : The Edge of Reason',
    author: 'Helen Fielding'
  },
  {
    asin: '0399144463',
    year: 2001,
    rank: '1',
    title: 'Who Moved My Cheese?: An Amazing Way to Deal with Change in Your Work and in Your Life',
    author: 'Spencer Johnson'
  },
  {
    asin: '1576737330',
    year: 2001,
    rank: '2',
    title: 'The Prayer of Jabez:  Breaking Through to the Blessed Life',
    author: 'Bruce H. Wilkinson'
  },
  {
    asin: '0684813637',
    year: 2001,
    rank: '3',
    title: 'John Adams',
    author: 'David McCullough'
  },
  {
    asin: '0439284031',
    year: 2001,
    rank: '4',
    title: 'Harry Potter Schoolbooks: Quidditch Through the Ages and Fantastic Beasts and Where to Find Them',
    author: 'J. K. Rowling'
  },
  {
    asin: '0446528382',
    year: 2001,
    rank: '5',
    title: 'Jack: Straight from the Gut',
    author: 'Jack Welch'
  },
  {
    asin: '0786866020',
    year: 2001,
    rank: '6',
    title: 'Fish: A Proven Way to Boost Morale and Improve Results',
    author: 'Stephen C. Lundin'
  },
  {
    asin: '0385505833',
    year: 2001,
    rank: '7',
    title: 'Skipping Christmas: A Novel',
    author: 'John Grisham'
  },
  {
    asin: '0439139597',
    year: 2001,
    rank: '8',
    title: 'Harry Potter And The Goblet Of Fire (Book 4)',
    author: 'J.K. Rowling'
  },
  {
    asin: '0060193395',
    year: 2001,
    rank: '9',
    title: 'Body for Life: 12 Weeks to Mental and Physical Strength',
    author: 'Bill Phillips'
  },
  {
    asin: '0446677450',
    year: 2001,
    rank: '10',
    title: 'Rich Dad, Poor Dad: What the Rich Teach Their Kids About Money--That the Poor and Middle Class Do Not!',
    author: 'Robert T. Kiyosaki'
  },
  {
    asin: '0312195516',
    year: 2001,
    rank: '11',
    title: 'The Red Tent',
    author: 'Anita Diamant'
  },
  {
    asin: '038550120X',
    year: 2001,
    rank: '12',
    title: 'A Painted House',
    author: 'John Grisham'
  },
  {
    asin: '0374100128',
    year: 2001,
    rank: '13',
    title: 'The Corrections',
    author: 'Jonathan Franzen'
  },
  {
    asin: '1878424319',
    year: 2001,
    rank: '14',
    title: 'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
    author: 'Don Miguel Ruiz'
  },
  {
    asin: '0439136350',
    year: 2001,
    rank: '15',
    title: 'Harry Potter And The Prisoner Of Azkaban',
    author: 'J.K. Rowling'
  },
  {
    asin: '059035342X',
    year: 2001,
    rank: '16',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    asin: '0743201140',
    year: 2001,
    rank: '17',
    title: 'Now, Discover Your Strengths',
    author: 'Marcus Buckingham'
  },
  {
    asin: '0452282829',
    year: 2001,
    rank: '18',
    title: 'We Were the Mulvaneys (Oprah\'s Book Club)',
    author: 'Joyce Carol Oates'
  },
  {
    asin: '0684852861',
    year: 2001,
    rank: '19',
    title: 'First, Break All the Rules: What the World\'s Greatest Managers Do Differently',
    author: 'Marcus Buckingham'
  },
  {
    asin: '0439249546',
    year: 2001,
    rank: '20',
    title: 'Harry Potter (4 Volumes set)',
    author: 'J. K. Rowling'
  },
  {
    asin: '0895261677',
    year: 2001,
    rank: '21',
    title: 'The Final Days: The Last, Desperate Abuses of Power by the Clinton White House',
    author: 'Barbara Olson'
  },
  {
    asin: '0786884592',
    year: 2001,
    rank: '22',
    title: 'Life Strategies: Doing What Works, Doing What Matters',
    author: 'Phillip C. McGraw'
  },
  {
    asin: '0385495641',
    year: 2001,
    rank: '23',
    title: 'Ghost Soldiers: The Forgotten Epic Story of World War II\'s Most Dramatic Mission',
    author: 'Hampton Sides'
  },
  {
    asin: '0375502912',
    year: 2001,
    rank: '24',
    title: 'Seabiscuit: An American Legend',
    author: 'Laura Hillenbrand'
  },
  {
    asin: '0618002251',
    year: 2001,
    rank: '25',
    title: 'The Hobbit and The Lord of the Rings',
    author: 'J. R. R. Tolkien'
  },
  {
    asin: '084233226X',
    year: 2001,
    rank: '26',
    title: 'Desecration: Antichrist Takes the Throne (Left Behind No. 9)',
    author: 'Tim LaHaye'
  },
  {
    asin: '0671708635',
    year: 2001,
    rank: '27',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0345340426',
    year: 2001,
    rank: '28',
    title: 'J.R.R. Tolkien Boxed Set (The Hobbit and The Lord of the Rings)',
    author: 'J.R.R. Tolkien'
  },
  {
    asin: '0399146431',
    year: 2001,
    rank: '29',
    title: 'The Bonesetter\'s Daughter',
    author: 'Amy Tan'
  },
  {
    asin: '0439064872',
    year: 2001,
    rank: '30',
    title: 'Harry Potter And The Chamber Of Secrets',
    author: 'J. K. Rowling'
  },
  {
    asin: '0452282152',
    year: 2001,
    rank: '31',
    title: 'Girl with a Pearl Earring: A Novel',
    author: 'Tracy Chevalier'
  },
  {
    asin: '0767908481',
    year: 2001,
    rank: '32',
    title: 'The No Spin Zone: Confrontations with the Powerful and Famous in America',
    author: 'Bill O\'Reilly'
  },
  {
    asin: '0590353403',
    year: 2001,
    rank: '33',
    title: 'Harry Potter And The Sorcerer\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    asin: '0439064864',
    year: 2001,
    rank: '34',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    asin: '0895261901',
    year: 2001,
    rank: '35',
    title: 'Bias: A CBS Insider Exposes How the Media Distort the News',
    author: 'Bernard Goldberg'
  },
  {
    asin: '0385315279',
    year: 2001,
    rank: '36',
    title: 'The Fiery Cross',
    author: 'Diana Gabaldon'
  },
  {
    asin: '0066620996',
    year: 2001,
    rank: '37',
    title: 'Good to Great: Why Some Companies Make the Leap and Others Don\'t',
    author: 'Jim Collins'
  },
  {
    asin: '0743211383',
    year: 2001,
    rank: '38',
    title: 'Dreamcatcher',
    author: 'Stephen King'
  },
  {
    asin: '0375405445',
    year: 2001,
    rank: '39',
    title: 'Founding Brothers: The Revolutionary Generation',
    author: 'Joseph J. Ellis'
  },
  {
    asin: '0446529311',
    year: 2001,
    rank: '40',
    title: 'How I Play Golf',
    author: 'Tiger Woods'
  },
  {
    asin: '020530902X',
    year: 2001,
    rank: '41',
    title: 'The Elements of Style, Fourth Edition',
    author: 'William Strunk Jr.'
  },
  {
    asin: '0811825558',
    year: 2001,
    rank: '42',
    title: 'The Worst-Case Scenario Survival Handbook',
    author: 'Joshua Piven'
  },
  {
    asin: '189362210X',
    year: 2001,
    rank: '43',
    title: 'Journey Through Heartsongs',
    author: 'Mattie J.T. Stepanek'
  },
  {
    asin: '0375412530',
    year: 2001,
    rank: '44',
    title: 'Back When We Were Grownups',
    author: 'Anne Tyler'
  },
  {
    asin: '0395977894',
    year: 2001,
    rank: '45',
    title: 'Fast Food Nation: The Dark Side of the All-American Meal',
    author: 'Eric Schlosser'
  },
  {
    asin: '0446530522',
    year: 2001,
    rank: '46',
    title: 'Cane River (Oprah\'s Book Club)',
    author: 'Lalita Tademy'
  },
  {
    asin: '055380202X',
    year: 2001,
    rank: '47',
    title: 'The Universe in a Nutshell',
    author: 'Stephen William…'
  },
  {
    asin: '0316525405',
    year: 2001,
    rank: '48',
    title: 'One Nation: America Remembers September 11, 2001',
    author: 'Editors of Life…'
  },
  {
    asin: '0375504397',
    year: 2001,
    rank: '49',
    title: 'Black House: A Novel',
    author: 'Stephen King'
  },
  {
    asin: '1576739759',
    year: 2001,
    rank: '50',
    title: 'Secrets of the Vine: Breaking Through to Abundance',
    author: 'Bruce Wilkinson'
  },
  {
    asin: '0684871580',
    year: 2001,
    rank: '51',
    title: 'Germs : Biological Weapons and America\'s Secret War',
    author: 'Judith Miller'
  },
  {
    asin: '0743203399',
    year: 2001,
    rank: '52',
    title: 'The Wild Blue: The Men and Boys Who Flew the B-24s Over Germany 1944-45',
    author: 'Stephen E. Ambrose'
  },
  {
    asin: '0786868619',
    year: 2001,
    rank: '53',
    title: 'Stolen Lives: Twenty Years in a Desert Jail (Oprah\'s Book Club)',
    author: 'Malika Oufkir'
  },
  {
    asin: '055380121X',
    year: 2001,
    rank: '54',
    title: 'The Wisdom of Menopause: Creating Physical and Emotional Health and Healing During the Change',
    author: 'Christiane Northrup'
  },
  {
    asin: '0375727345',
    year: 2001,
    rank: '55',
    title: 'House of Sand and Fog (Oprah\'s Book Club)  (Vintage Contemporaries)',
    author: 'Andre Dubus III'
  },
  {
    asin: '0140157352',
    year: 2001,
    rank: '56',
    title: 'Getting to Yes: Negotiating Agreement Without Giving In',
    author: 'Roger Fisher'
  },
  {
    asin: '0375701044',
    year: 2001,
    rank: '57',
    title: 'Personal History',
    author: 'Katharine Graham'
  },
  {
    asin: '0201710161',
    year: 2001,
    rank: '58',
    title: 'Adobe Photoshop 6.0 Classroom in a Book',
    author: 'Sandee Adobe Creative…'
  },
  {
    asin: '0439136369',
    year: 2001,
    rank: '59',
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling'
  },
  {
    asin: '0688123163',
    year: 2001,
    rank: '60',
    title: 'Raving Fans: A Revolutionary Approach To Customer Service',
    author: 'Ken Blanchard'
  },
  {
    asin: '0425098478',
    year: 2001,
    rank: '61',
    title: 'The One Minute Manager',
    author: 'Kenneth Blanchard'
  },
  {
    asin: '0394555090',
    year: 2001,
    rank: '62',
    title: 'Theodore Rex',
    author: 'Edmund Morris'
  },
  {
    asin: '0316316962',
    year: 2001,
    rank: '63',
    title: 'The Tipping Point: How Little Things Can Make a Big Difference',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '068815428X',
    year: 2001,
    rank: '64',
    title: 'Gung Ho! Turn On the People in Any Organization',
    author: 'Ken Blanchard'
  },
  {
    asin: '0385484518',
    year: 2001,
    rank: '65',
    title: 'Tuesdays with Morrie: An Old Man, A Young Man and Life\'s Greatest Lesson',
    author: 'Mitch Albom'
  },
  {
    asin: '0316693235',
    year: 2001,
    rank: '66',
    title: 'Violets Are Blue ~ Detective Alex Cross Series',
    author: 'James Patterson'
  },
  {
    asin: '0316666009',
    year: 2001,
    rank: '67',
    title: '1st to Die (Women\'s Murder Club)',
    author: 'James Patterson'
  },
  {
    asin: '0884270610',
    year: 2001,
    rank: '68',
    title: 'The Goal: A Process of Ongoing Improvement',
    author: 'Eliyahu M. Goldratt'
  },
  {
    asin: '0743216458',
    year: 2001,
    rank: '69',
    title: 'Band of Brothers: E Company, 506th Regiment, 101st Airborne from Normandy to Hitler\'s Eagle\'s Nest',
    author: 'Stephen E. Ambrose'
  },
  {
    asin: '0670894370',
    year: 2001,
    rank: '70',
    title: 'A Common Life: The Wedding Story (Mitford)',
    author: 'Jan Karon'
  },
  {
    asin: '0375504613',
    year: 2001,
    rank: '71',
    title: 'A Short Guide to a Happy Life',
    author: 'Anna Quindlen'
  },
  {
    asin: '1893622118',
    year: 2001,
    rank: '72',
    title: 'Heartsongs',
    author: 'Mattie J. T. Stepanek'
  },
  {
    asin: '0679451226',
    year: 2001,
    rank: '73',
    title: 'The Sibley Guide to Birds',
    author: 'David Allen Sibley'
  },
  {
    asin: '1576871304',
    year: 2001,
    rank: '74',
    title: 'New York September 11',
    author: 'David Halberstam'
  },
  {
    asin: '0399147195',
    year: 2001,
    rank: '75',
    title: 'P is for Peril : A Kinsey Millhone Mystery',
    author: 'Sue Grafton'
  },
  {
    asin: '0887307396',
    year: 2001,
    rank: '76',
    title: 'Built to Last: Successful Habits of Visionary Companies',
    author: 'James C. Collins'
  },
  {
    asin: '0393317552',
    year: 2001,
    rank: '77',
    title: 'Guns, Germs, and Steel: The Fates of Human Societies',
    author: 'Jared M. Diamond'
  },
  {
    asin: '0345440757',
    year: 2001,
    rank: '78',
    title: 'Secrets of the Baby Whisperer: How to Calm, Connect, and Communicate with Your Baby',
    author: 'Tracy Hogg'
  },
  {
    asin: '0064471195',
    year: 2001,
    rank: '79',
    title: 'The Chronicles of Narnia Boxed Set',
    author: 'C. S. Lewis'
  },
  {
    asin: '0142000205',
    year: 2001,
    rank: '80',
    title: 'Icy Sparks (Oprah\'s Book Club)',
    author: 'Gwyn Hyman Rubio'
  },
  {
    asin: '156305339X',
    year: 2001,
    rank: '81',
    title: '1001 Ways to Reward Employees',
    author: 'Bob Nelson'
  },
  {
    asin: '0375725784',
    year: 2001,
    rank: '82',
    title: 'A Heartbreaking Work of Staggering Genius',
    author: 'Dave Eggers'
  },
  {
    asin: '014028009X',
    year: 2001,
    rank: '83',
    title: 'Bridget Jones\'s Diary: A Novel',
    author: 'Helen Fielding'
  },
  {
    asin: '0060187239',
    year: 2001,
    rank: '84',
    title: 'April 1865: The Month That Saved America',
    author: 'Jay Winik'
  },
  {
    asin: '0689829531',
    year: 2001,
    rank: '85',
    title: 'Olivia',
    author: 'Ian Falconer'
  },
  {
    asin: '0767905288',
    year: 2001,
    rank: '86',
    title: 'The O\'Reilly Factor: The Good, the Bad, and the Completely Ridiculous in American Life',
    author: 'Bill O\'Reilly'
  },
  {
    asin: '0375412557',
    year: 2001,
    rank: '87',
    title: 'Death in Holy Orders (Adam Dalgliesh Mystery Series #11)',
    author: 'P. D. James'
  },
  {
    asin: '0446525804',
    year: 2001,
    rank: '88',
    title: 'Last Man Standing',
    author: 'David Baldacci'
  },
  {
    asin: '0679805273',
    year: 2001,
    rank: '89',
    title: 'Oh, the Places You\'ll Go!  ',
    author: 'Dr. Seuss'
  },
  {
    asin: '1588720020',
    year: 2001,
    rank: '90',
    title: 'Crossing Over: The Stories Behind the Stories',
    author: 'John Edward'
  },
  {
    asin: '0316769487',
    year: 2001,
    rank: '91',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger'
  },
  {
    asin: '0300089023',
    year: 2001,
    rank: '92',
    title: 'Taliban: Militant Islam, Oil and Fundamentalism in Central Asia',
    author: 'Ahmed Rashid'
  },
  {
    asin: '1577311523',
    year: 2001,
    rank: '93',
    title: 'The Power of Now: A Guide to Spiritual Enlightenment',
    author: 'Eckhart Tolle'
  },
  {
    asin: '0786868090',
    year: 2001,
    rank: '94',
    title: 'The Best Loved Poems of Jacqueline Kennedy-Onassis',
    author: 'Caroline Kennedy'
  },
  {
    asin: '068982954X',
    year: 2001,
    rank: '95',
    title: 'Olivia Saves the Circus',
    author: 'Ian Falconer'
  },
  {
    asin: '0785274316',
    year: 2001,
    rank: '96',
    title: 'The 21 Irrefutable Laws of Leadership: Follow Them and People Will Follow You',
    author: 'John C. Maxwell'
  },
  {
    asin: '039914787X',
    year: 2001,
    rank: '97',
    title: 'Valhalla Rising (Dirk Pitt Adventures)',
    author: 'Clive Cussler'
  },
  {
    asin: '0195014766',
    year: 2001,
    rank: '98',
    title: 'The Art of War',
    author: 'B. H. Liddell Hart'
  },
  {
    asin: '0312265840',
    year: 2001,
    rank: '99',
    title: 'Seven Up (Stephanie Plum, No. 7) (Stephanie Plum Novels)',
    author: 'Janet Evanovich'
  },
  {
    asin: '076790396X',
    year: 2001,
    rank: '100',
    title: 'The Pilates Body: The Ultimate At-Home Guide to Strengthening, Lengthening and Toning Your Body- Without Machines',
    author: 'Brooke Siler'
  },
  {
    asin: '0066620996',
    year: 2002,
    rank: '1',
    title: 'Good to Great: Why Some Companies Make the Leap and Others Don\'t',
    author: 'Jim Collins'
  },
  {
    asin: '0399144463',
    year: 2002,
    rank: '2',
    title: 'Who Moved My Cheese?: An Amazing Way to Deal with Change in Your Work and in Your Life',
    author: 'Spencer Johnson'
  },
  {
    asin: '0316666343',
    year: 2002,
    rank: '3',
    title: 'The Lovely Bones',
    author: 'Alice Sebold'
  },
  {
    asin: '0786866020',
    year: 2002,
    rank: '4',
    title: 'Fish: A Proven Way to Boost Morale and Improve Results',
    author: 'Stephen C. Lundin'
  },
  {
    asin: '0060392452',
    year: 2002,
    rank: '5',
    title: 'Stupid White Men ...And Other Sorry Excuses for the State of the Nation!',
    author: 'Michael Moore'
  },
  {
    asin: '0312278586',
    year: 2002,
    rank: '6',
    title: 'The Nanny Diaries: A Novel',
    author: 'Emma Mclaughlin'
  },
  {
    asin: '074322423X',
    year: 2002,
    rank: '7',
    title: 'Self Matters : Creating Your Life from the Inside Out',
    author: 'Phillip C. McGraw'
  },
  {
    asin: '0609610570',
    year: 2002,
    rank: '8',
    title: 'Execution: The Discipline of Getting Things Done',
    author: 'Larry Bossidy'
  },
  {
    asin: '0385503822',
    year: 2002,
    rank: '9',
    title: 'The Summons',
    author: 'John Grisham'
  },
  {
    asin: '0743201140',
    year: 2002,
    rank: '10',
    title: 'Now, Discover Your Strengths',
    author: 'Marcus Buckingham'
  },
  {
    asin: '055380121X',
    year: 2002,
    rank: '11',
    title: 'The Wisdom of Menopause: Creating Physical and Emotional Health and Healing During the Change',
    author: 'Christiane Northrup'
  },
  {
    asin: '0743202228',
    year: 2002,
    rank: '12',
    title: 'A Mind at a Time',
    author: 'Mel Levine M.D.'
  },
  {
    asin: '0446677450',
    year: 2002,
    rank: '13',
    title: 'Rich Dad, Poor Dad: What the Rich Teach Their Kids About Money--That the Poor and Middle Class Do Not!',
    author: 'Robert T. Kiyosaki'
  },
  {
    asin: '0684852861',
    year: 2002,
    rank: '14',
    title: 'First, Break All the Rules: What the World\'s Greatest Managers Do Differently',
    author: 'Marcus Buckingham'
  },
  {
    asin: '0385503954',
    year: 2002,
    rank: '15',
    title: 'Atonement: A Novel',
    author: 'Ian McEwan'
  },
  {
    asin: '0399148701',
    year: 2002,
    rank: '16',
    title: 'Red Rabbit',
    author: 'Tom Clancy'
  },
  {
    asin: '1400046610',
    year: 2002,
    rank: '17',
    title: 'Slander: Liberal Lies About the American Right',
    author: 'Ann Coulter'
  },
  {
    asin: '0895261901',
    year: 2002,
    rank: '18',
    title: 'Bias: A CBS Insider Exposes How the Media Distort the News',
    author: 'Bernard Goldberg'
  },
  {
    asin: '0446530573',
    year: 2002,
    rank: '19',
    title: 'The Sopranos Family Cookbook: As Compiled by Artie Bucco',
    author: 'Artie Bucco'
  },
  {
    asin: '0609610597',
    year: 2002,
    rank: '20',
    title: 'The Shelters of Stone (Earth\'s Children, Book 5)',
    author: 'Jean M. Auel'
  },
  {
    asin: '1577311523',
    year: 2002,
    rank: '21',
    title: 'The Power of Now: A Guide to Spiritual Enlightenment',
    author: 'Eckhart Tolle'
  },
  {
    asin: '0060193395',
    year: 2002,
    rank: '22',
    title: 'Body for Life: 12 Weeks to Mental and Physical Strength',
    author: 'Bill Phillips'
  },
  {
    asin: '0671708635',
    year: 2002,
    rank: '23',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0786868414',
    year: 2002,
    rank: '24',
    title: 'Leadership',
    author: 'Rudolph W. Giuliani'
  },
  {
    asin: '0743225996',
    year: 2002,
    rank: '25',
    title: 'Get With the Program!: Getting Real About Your Health, Weight, and Emotional Well-Being',
    author: 'Bob Greene'
  },
  {
    asin: '0345340426',
    year: 2002,
    rank: '26',
    title: 'J.R.R. Tolkien Boxed Set (The Hobbit and The Lord of the Rings)',
    author: 'J.R.R. Tolkien'
  },
  {
    asin: '0066214122',
    year: 2002,
    rank: '27',
    title: 'Prey',
    author: 'Michael Crichton'
  },
  {
    asin: '0195144201',
    year: 2002,
    rank: '28',
    title: 'What Went Wrong?: Western Impact and Middle Eastern Response',
    author: 'Bernard Lewis'
  },
  {
    asin: '0743204735',
    year: 2002,
    rank: '29',
    title: 'Bush at War',
    author: 'Bob Woodward'
  },
  {
    asin: '0060188790',
    year: 2002,
    rank: '30',
    title: 'The Perricone Prescription: A Physician\'s 28-Day Program for Total Body and Face Rejuvenation',
    author: 'M.D. Perricone…'
  },
  {
    asin: '0446530719',
    year: 2002,
    rank: '31',
    title: 'Satisfaction: The Art of the Female Orgasm',
    author: 'Kim Cattrall'
  },
  {
    asin: '006001203X',
    year: 2002,
    rank: '32',
    title: 'Dr. Atkins\' New Diet Revolution',
    author: 'Robert C. Atkins'
  },
  {
    asin: '020530902X',
    year: 2002,
    rank: '33',
    title: 'The Elements of Style, Fourth Edition',
    author: 'William Strunk Jr.'
  },
  {
    asin: '0446528382',
    year: 2002,
    rank: '34',
    title: 'Jack: Straight from the Gut',
    author: 'Jack Welch'
  },
  {
    asin: '0060514558',
    year: 2002,
    rank: '35',
    title: 'Let Freedom Ring: Winning the War of Liberty over Liberalism',
    author: 'Sean Hannity'
  },
  {
    asin: '0517703920',
    year: 2002,
    rank: '36',
    title: 'Sacred Contracts: Awakening Your Divine Potential',
    author: 'Caroline Myss'
  },
  {
    asin: '1878424319',
    year: 2002,
    rank: '37',
    title: 'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
    author: 'Don Miguel Ruiz'
  },
  {
    asin: '0151008116',
    year: 2002,
    rank: '38',
    title: 'Life of Pi',
    author: 'Yann Martel'
  },
  {
    asin: '0316693006',
    year: 2002,
    rank: '39',
    title: 'Four Blind Mice (Alex Cross)',
    author: 'James Patterson'
  },
  {
    asin: '0316969680',
    year: 2002,
    rank: '40',
    title: 'The Beach House',
    author: 'James Patterson'
  },
  {
    asin: '0375414053',
    year: 2002,
    rank: '41',
    title: 'I Don\'t Know How She Does It: The Life of Kate Reddy, Working Mother',
    author: 'Allison Pearson'
  },
  {
    asin: '0785268839',
    year: 2002,
    rank: '42',
    title: 'Wild at Heart: Discovering The Secret of a Man\'s Soul',
    author: 'John Eldredge'
  },
  {
    asin: '0140157352',
    year: 2002,
    rank: '43',
    title: 'Getting to Yes: Negotiating Agreement Without Giving In',
    author: 'Roger Fisher'
  },
  {
    asin: '0688123163',
    year: 2002,
    rank: '44',
    title: 'Raving Fans: A Revolutionary Approach To Customer Service',
    author: 'Ken Blanchard'
  },
  {
    asin: '0060938455',
    year: 2002,
    rank: '45',
    title: 'Fast Food Nation: The Dark Side of the All-American Meal',
    author: 'Eric Schlosser'
  },
  {
    asin: '0743237188',
    year: 2002,
    rank: '46',
    title: 'Fall On Your Knees (Oprah\'s Book Club)',
    author: 'Ann-Marie MacDonald'
  },
  {
    asin: '0684813637',
    year: 2002,
    rank: '47',
    title: 'John Adams',
    author: 'David McCullough'
  },
  {
    asin: '157851486X',
    year: 2002,
    rank: '48',
    title: 'Primal Leadership: Realizing the Power of Emotional Intelligence',
    author: 'Daniel Goleman'
  },
  {
    asin: '0375726403',
    year: 2002,
    rank: '49',
    title: 'Empire Falls',
    author: 'Richard Russo'
  },
  {
    asin: '1579550088',
    year: 2002,
    rank: '50',
    title: 'A New Kind of Science',
    author: 'Stephen Wolfram'
  },
  {
    asin: '1579544592',
    year: 2002,
    rank: '51',
    title: '8 Minutes in the Morning: A Simple Way to Start Your Day That Burns Fat and Sheds the Pounds',
    author: 'Anthony Robbins'
  },
  {
    asin: '0375413065',
    year: 2002,
    rank: '52',
    title: 'The Healthy Kitchen: Recipes for a Better Body, Life, and Spirit',
    author: 'Andrew Weil'
  },
  {
    asin: '0874476542',
    year: 2002,
    rank: '53',
    title: '10 Real SATs, Second Edition',
    author: 'The College Board'
  },
  {
    asin: '0316781460',
    year: 2002,
    rank: '54',
    title: 'Live from New York: An Uncensored History of Saturday Night Live',
    author: 'Tom Shales'
  },
  {
    asin: '0470849827',
    year: 2002,
    rank: '55',
    title: 'Conquer the Crash: You Can Survive and Prosper in a Deflationary Depression (Wiley Trading)',
    author: 'Robert R. Prechter…'
  },
  {
    asin: '0842332278',
    year: 2002,
    rank: '56',
    title: 'The Remnant: On the Brink of Armageddon (Left Behind)',
    author: 'Tim LaHaye'
  },
  {
    asin: '0425098478',
    year: 2002,
    rank: '57',
    title: 'The One Minute Manager',
    author: 'Kenneth Blanchard'
  },
  {
    asin: '0671723650',
    year: 2002,
    rank: '58',
    title: 'How to Win Friends & Influence People',
    author: 'Dale Carnegie'
  },
  {
    asin: '0316693200',
    year: 2002,
    rank: '59',
    title: '2nd Chance',
    author: 'James Patterson'
  },
  {
    asin: '0312265859',
    year: 2002,
    rank: '60',
    title: 'Hard Eight (Stephanie Plum)',
    author: 'Janet Evanovich'
  },
  {
    asin: '055380202X',
    year: 2002,
    rank: '61',
    title: 'The Universe in a Nutshell',
    author: 'Stephen William…'
  },
  {
    asin: '0446677760',
    year: 2002,
    rank: '62',
    title: 'The Wrinkle Cure: Unlock the Power of Cosmeceuticals for Supple, Youthful Skin',
    author: 'Nicholas Perricone'
  },
  {
    asin: '0439434866',
    year: 2002,
    rank: '63',
    title: 'Harry Potter Boxset 1-4',
    author: 'J.K. Rowling'
  },
  {
    asin: '0312195516',
    year: 2002,
    rank: '64',
    title: 'The Red Tent',
    author: 'Anita Diamant'
  },
  {
    asin: '0394528360',
    year: 2002,
    rank: '65',
    title: 'Master of the Senate: The Years of Lyndon Johnson III',
    author: 'Robert A. Caro'
  },
  {
    asin: '0060928336',
    year: 2002,
    rank: '66',
    title: 'Divine Secrets of the Ya-Ya Sisterhood: A Novel',
    author: 'Rebecca Wells'
  },
  {
    asin: '0787960756',
    year: 2002,
    rank: '67',
    title: 'The Five Dysfunctions of a Team: A Leadership Fable',
    author: 'Patrick Lencioni'
  },
  {
    asin: '0743224574',
    year: 2002,
    rank: '68',
    title: 'A Beautiful Mind: The Life of Mathematical Genius and Nobel Laureate John Nash',
    author: 'Sylvia Nasar'
  },
  {
    asin: '0316525405',
    year: 2002,
    rank: '69',
    title: 'One Nation: America Remembers September 11, 2001',
    author: 'Editors of Life…'
  },
  {
    asin: '0374190666',
    year: 2002,
    rank: '70',
    title: 'Longitudes and Attitudes: Exploring the World After September 11',
    author: 'Thomas L. Friedman'
  },
  {
    asin: '051513287X',
    year: 2002,
    rank: '71',
    title: 'Face the Fire (Three Sisters Island Trilogy)',
    author: 'Nora Roberts'
  },
  {
    asin: '0670031046',
    year: 2002,
    rank: '72',
    title: 'In This Mountain',
    author: 'Jan Karon'
  },
  {
    asin: '0316346624',
    year: 2002,
    rank: '73',
    title: 'The Tipping Point: How Little Things Can Make a Big Difference',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0743235150',
    year: 2002,
    rank: '74',
    title: 'Everything\'s Eventual: 14 Dark Tales',
    author: 'Stephen King'
  },
  {
    asin: '0694003611',
    year: 2002,
    rank: '75',
    title: 'Goodnight Moon',
    author: 'Margaret Wise Brown'
  },
  {
    asin: '0970507909',
    year: 2002,
    rank: '76',
    title: 'Rath & Strong\'s Six Sigma Pocket Guide',
    author: 'Rath & Strong'
  },
  {
    asin: '0671524313',
    year: 2002,
    rank: '77',
    title: 'The Girlfriends\' Guide to Pregnancy: Or everything your doctor won\'t tell you',
    author: 'Vicki Iovine'
  },
  {
    asin: '0884270610',
    year: 2002,
    rank: '78',
    title: 'The Goal: A Process of Ongoing Improvement',
    author: 'Eliyahu M. Goldratt'
  },
  {
    asin: '0060934417',
    year: 2002,
    rank: '79',
    title: 'Bel Canto',
    author: 'Ann Patchett'
  },
  {
    asin: '0399149155',
    year: 2002,
    rank: '80',
    title: 'Q is for Quarry: A Kinsey Millhone Novel',
    author: 'Sue Grafton'
  },
  {
    asin: '002863716X',
    year: 2002,
    rank: '81',
    title: 'Weight Watchers New Complete Cookbook',
    author: 'Weight Watchers…'
  },
  {
    asin: '0375413634',
    year: 2002,
    rank: '82',
    title: 'The Emperor of Ocean Park',
    author: 'Stephen L. Carter'
  },
  {
    asin: '0399149325',
    year: 2002,
    rank: '83',
    title: 'Portrait of a Killer: Jack the Ripper--Case Closed',
    author: 'Patricia Cornwell'
  },
  {
    asin: '0375502238',
    year: 2002,
    rank: '84',
    title: 'Blessings',
    author: 'Anna Quindlen'
  },
  {
    asin: '0684810271',
    year: 2002,
    rank: '85',
    title: 'The Conquerors: Roosevelt, Truman and the Destruction of Hitler\'s Germany, 1941-1945',
    author: 'Michael R. Beschloss'
  },
  {
    asin: '0962936022',
    year: 2002,
    rank: '86',
    title: 'The First Days of School: How to Be an Effective Teacher',
    author: 'Harry K. Wong'
  },
  {
    asin: '0399226907',
    year: 2002,
    rank: '87',
    title: 'The Very Hungry Caterpillar',
    author: null
  },
  {
    asin: '1573222305',
    year: 2002,
    rank: '88',
    title: 'Everyday Grace: Having Hope, Finding Forgiveness, and Making Miracles',
    author: 'Marianne Williamson'
  },
  {
    asin: '0596000820',
    year: 2002,
    rank: '89',
    title: 'Mac OS X: The Missing Manual',
    author: 'David Pogue'
  },
  {
    asin: '0786884592',
    year: 2002,
    rank: '90',
    title: 'Life Strategies: Doing What Works, Doing What Matters',
    author: 'Phillip C. McGraw'
  },
  {
    asin: '0805047905',
    year: 2002,
    rank: '91',
    title: 'Brown Bear, Brown Bear, What Do You See?',
    author: 'Bill Martin Jr.'
  },
  {
    asin: '0618002251',
    year: 2002,
    rank: '92',
    title: 'The Hobbit and The Lord of the Rings',
    author: 'J. R. R. Tolkien'
  },
  {
    asin: '0312306326',
    year: 2002,
    rank: '93',
    title: 'Visions of Sugar Plums: A Stephanie Plum Holiday Novel (Stephanie Plum Novels)',
    author: 'Janet Evanovich'
  },
  {
    asin: '0689838999',
    year: 2002,
    rank: '94',
    title: 'The Night Before Christmas Pop-up',
    author: 'Clement Clarke Moore'
  },
  {
    asin: '0064410129',
    year: 2002,
    rank: '95',
    title: 'The Carnivorous Carnival (A Series of Unfortunate Events # 9)',
    author: 'Lemony Snicket'
  },
  {
    asin: '1584790830',
    year: 2002,
    rank: '96',
    title: 'I\'m Just Here for the Food: Food + Heat = Cooking',
    author: 'Alton Brown'
  },
  {
    asin: '0609609491',
    year: 2002,
    rank: '97',
    title: 'The One Minute Millionaire: The Enlightened Way to Wealth',
    author: 'Mark Victor Hansen'
  },
  {
    asin: '0446677477',
    year: 2002,
    rank: '98',
    title: 'Rich Dad\'s Cashflow Quadrant: Rich Dad\'s Guide to Financial Freedom',
    author: 'Robert T. Kiyosaki'
  },
  {
    asin: '0375412824',
    year: 2002,
    rank: '99',
    title: 'The Dive From Clausen\'s Pier',
    author: 'Ann Packer'
  },
  {
    asin: '0785274316',
    year: 2002,
    rank: '100',
    title: 'The 21 Irrefutable Laws of Leadership: Follow Them and People Will Follow You',
    author: 'John C. Maxwell'
  },
  {
    asin: '043935806X',
    year: 2003,
    rank: '1',
    title: 'Harry Potter and the Order of the Phoenix (Book 5)',
    author: 'J. K. Rowling'
  },
  {
    asin: '0385504209',
    year: 2003,
    rank: '2',
    title: 'The Da Vinci Code',
    author: 'Dan Brown'
  },
  {
    asin: '1579546463',
    year: 2003,
    rank: '3',
    title: 'THE SOUTH BEACH DIET The Delicious, Doctor-Designed, Foolproof Plan for Fast and Healthy Weight Loss',
    author: 'Arthur Agatston'
  },
  {
    asin: '0066620996',
    year: 2003,
    rank: '4',
    title: 'Good to Great: Why Some Companies Make the Leap and Others Don\'t',
    author: 'Jim Collins'
  },
  {
    asin: '0310205719',
    year: 2003,
    rank: '5',
    title: 'The Purpose Driven Life',
    author: 'Rick Warren'
  },
  {
    asin: '0525947647',
    year: 2003,
    rank: '6',
    title: 'Lies and the Lying Liars Who Tell Them',
    author: 'Al Franken'
  },
  {
    asin: '0142001740',
    year: 2003,
    rank: '7',
    title: 'The Secret Life of Bees',
    author: 'Sue Monk Kidd'
  },
  {
    asin: '0786868716',
    year: 2003,
    rank: '8',
    title: 'The Five People You Meet In Heaven',
    author: 'Mitch Albom'
  },
  {
    asin: '0399144463',
    year: 2003,
    rank: '9',
    title: 'Who Moved My Cheese?: An Amazing Way to Deal with Change in Your Work and in Your Life',
    author: 'Spencer Johnson'
  },
  {
    asin: '0609610570',
    year: 2003,
    rank: '10',
    title: 'Execution: The Discipline of Getting Things Done',
    author: 'Larry Bossidy'
  },
  {
    asin: '006001203X',
    year: 2003,
    rank: '11',
    title: 'Dr. Atkins\' New Diet Revolution',
    author: 'Robert C. Atkins'
  },
  {
    asin: '0743201140',
    year: 2003,
    rank: '12',
    title: 'Now, Discover Your Strengths',
    author: 'Marcus Buckingham'
  },
  {
    asin: '0156027321',
    year: 2003,
    rank: '13',
    title: 'Life of Pi',
    author: 'Yann Martel'
  },
  {
    asin: '0449005615',
    year: 2003,
    rank: '14',
    title: 'Seabiscuit: An American Legend (Ballantine Reader\'s Circle)',
    author: 'Laura Hillenbrand'
  },
  {
    asin: '0767908171',
    year: 2003,
    rank: '15',
    title: 'A Short History of Nearly Everything',
    author: 'Bill Bryson'
  },
  {
    asin: '0385508042',
    year: 2003,
    rank: '16',
    title: 'The King of Torts',
    author: 'John Grisham'
  },
  {
    asin: '0743222245',
    year: 2003,
    rank: '17',
    title: 'Living History',
    author: 'Hillary Rodham…'
  },
  {
    asin: '1931412065',
    year: 2003,
    rank: '18',
    title: '500 Low-Carb Recipes: 500 Recipes, from Snacks to Dessert, That the Whole Family Will Love',
    author: 'Dana Carpender'
  },
  {
    asin: '0743236742',
    year: 2003,
    rank: '19',
    title: 'The Ultimate Weight Solution: The 7 Keys to Weight Loss Freedom',
    author: 'Dr. Phil McGraw'
  },
  {
    asin: '0671027360',
    year: 2003,
    rank: '20',
    title: 'Angels & Demons',
    author: 'Dan Brown'
  },
  {
    asin: '0786866020',
    year: 2003,
    rank: '21',
    title: 'Fish: A Proven Way to Boost Morale and Improve Results',
    author: 'Stephen C. Lundin'
  },
  {
    asin: '1401300014',
    year: 2003,
    rank: '22',
    title: 'The Essential 55: An Award-Winning Educator\'s Rules for Discovering the Successful Student in Every Child',
    author: 'Ron Clark'
  },
  {
    asin: '0316666343',
    year: 2003,
    rank: '23',
    title: 'The Lovely Bones',
    author: 'Alice Sebold'
  },
  {
    asin: '0393057658',
    year: 2003,
    rank: '24',
    title: 'Moneyball: The Art of Winning an Unfair Game',
    author: 'Michael Lewis'
  },
  {
    asin: '0446532231',
    year: 2003,
    rank: '25',
    title: 'Dude, Where\'s My Country?',
    author: 'Michael Moore'
  },
  {
    asin: '0142004235',
    year: 2003,
    rank: '26',
    title: 'East of Eden, John Steinbeck Centennial Edition',
    author: 'John Steinbeck'
  },
  {
    asin: '0671708635',
    year: 2003,
    rank: '27',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey'
  },
  {
    asin: '1400050308',
    year: 2003,
    rank: '28',
    title: 'Treason: Liberal Treachery from the Cold War to the War on Terrorism',
    author: 'Ann Coulter'
  },
  {
    asin: '0060392452',
    year: 2003,
    rank: '29',
    title: 'Stupid White Men ...And Other Sorry Excuses for the State of the Nation!',
    author: 'Michael Moore'
  },
  {
    asin: '0446677450',
    year: 2003,
    rank: '30',
    title: 'Rich Dad, Poor Dad: What the Rich Teach Their Kids About Money--That the Poor and Middle Class Do Not!',
    author: 'Robert T. Kiyosaki'
  },
  {
    asin: '0787960756',
    year: 2003,
    rank: '31',
    title: 'The Five Dysfunctions of a Team: A Leadership Fable',
    author: 'Patrick Lencioni'
  },
  {
    asin: '0684807610',
    year: 2003,
    rank: '32',
    title: 'Benjamin Franklin: An American Life',
    author: 'Walter Isaacson'
  },
  {
    asin: '0871318156',
    year: 2003,
    rank: '33',
    title: 'Dr. Atkins\' New Carbohydrate Gram Counter',
    author: 'Robert C. Atkins…'
  },
  {
    asin: '0312315228',
    year: 2003,
    rank: '34',
    title: 'Atkins for Life: The Complete Controlled Carb Program for Permanent Weight Loss and Good Health',
    author: 'Robert C. Atkins'
  },
  {
    asin: '0684852861',
    year: 2003,
    rank: '35',
    title: 'First, Break All the Rules: What the World\'s Greatest Managers Do Differently',
    author: 'Marcus Buckingham'
  },
  {
    asin: '020530902X',
    year: 2003,
    rank: '36',
    title: 'The Elements of Style, Fourth Edition',
    author: 'William Strunk Jr.'
  },
  {
    asin: '0871319845',
    year: 2003,
    rank: '37',
    title: 'Complete Atkins\' Three Book Package',
    author: 'Robert C. Atkins…'
  },
  {
    asin: '1880418568',
    year: 2003,
    rank: '38',
    title: 'Wolves of the Calla (Dark Tower)',
    author: 'Stephen King'
  },
  {
    asin: '0743226747',
    year: 2003,
    rank: '39',
    title: 'The Power of Full Engagement: Managing Energy, Not Time, Is the Key to High Performance and Personal Renewal',
    author: 'Jim Loehr'
  },
  {
    asin: '1577311523',
    year: 2003,
    rank: '40',
    title: 'The Power of Now: A Guide to Spiritual Enlightenment',
    author: 'Eckhart Tolle'
  },
  {
    asin: '0385511612',
    year: 2003,
    rank: '41',
    title: 'Bleachers',
    author: 'John Grisham'
  },
  {
    asin: '0375507493',
    year: 2003,
    rank: '42',
    title: 'What Should I Do With My Life: The True Story of People Who Answered the Ultimate Question',
    author: 'Po Bronson'
  },
  {
    asin: '1891105108',
    year: 2003,
    rank: '43',
    title: 'Rachael Ray 30-Minute Meals 2',
    author: 'Rachael Ray'
  },
  {
    asin: '0060934417',
    year: 2003,
    rank: '44',
    title: 'Bel Canto',
    author: 'Ann Patchett'
  },
  {
    asin: '0671723650',
    year: 2003,
    rank: '45',
    title: 'How to Win Friends & Influence People',
    author: 'Dale Carnegie'
  },
  {
    asin: '0060938455',
    year: 2003,
    rank: '46',
    title: 'Fast Food Nation: The Dark Side of the All-American Meal',
    author: 'Eric Schlosser'
  },
  {
    asin: '0785268839',
    year: 2003,
    rank: '47',
    title: 'Wild at Heart: Discovering The Secret of a Man\'s Soul',
    author: 'John Eldredge'
  },
  {
    asin: '0895261405',
    year: 2003,
    rank: '48',
    title: 'Dereliction of Duty: The Eyewitness Account of How President Bill Clinton Compromised America\'s Long-Term National Security',
    author: 'Robert Patterson'
  },
  {
    asin: '0689835604',
    year: 2003,
    rank: '49',
    title: 'Where Is Baby\'s Belly Button? A Lift-the-Flap Book',
    author: 'Karen Katz'
  },
  {
    asin: '0439434866',
    year: 2003,
    rank: '50',
    title: 'Harry Potter Boxset 1-4',
    author: 'J.K. Rowling'
  },
  {
    asin: '1400034779',
    year: 2003,
    rank: '51',
    title: 'The No. 1 Ladies\' Detective Agency (Book 1)',
    author: 'Alexander McCall…'
  },
  {
    asin: '0140157352',
    year: 2003,
    rank: '52',
    title: 'Getting to Yes: Negotiating Agreement Without Giving In',
    author: 'Roger Fisher'
  },
  {
    asin: '039915079X',
    year: 2003,
    rank: '53',
    title: 'The Teeth of the Tiger (Jack Ryan Novels)',
    author: 'Tom Clancy'
  },
  {
    asin: '0688123163',
    year: 2003,
    rank: '54',
    title: 'Raving Fans: A Revolutionary Approach To Customer Service',
    author: 'Ken Blanchard'
  },
  {
    asin: '0345340426',
    year: 2003,
    rank: '55',
    title: 'J.R.R. Tolkien Boxed Set (The Hobbit and The Lord of the Rings)',
    author: 'J.R.R. Tolkien'
  },
  {
    asin: '0399226907',
    year: 2003,
    rank: '56',
    title: 'The Very Hungry Caterpillar',
    author: null
  },
  {
    asin: '0316346624',
    year: 2003,
    rank: '57',
    title: 'The Tipping Point: How Little Things Can Make a Big Difference',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0060193395',
    year: 2003,
    rank: '58',
    title: 'Body for Life: 12 Weeks to Mental and Physical Strength',
    author: 'Bill Phillips'
  },
  {
    asin: '0312265867',
    year: 2003,
    rank: '59',
    title: 'To the Nines: Stephanie Plum Novels',
    author: 'Janet Evanovich'
  },
  {
    asin: '0375826688',
    year: 2003,
    rank: '60',
    title: 'Eragon (Inheritance)',
    author: 'Christopher Paolini'
  },
  {
    asin: '0312305060',
    year: 2003,
    rank: '61',
    title: 'The Hours',
    author: 'Michael Cunningham'
  },
  {
    asin: '0767913795',
    year: 2003,
    rank: '62',
    title: 'Who\'s Looking Out for You?',
    author: 'Bill O\'Reilly'
  },
  {
    asin: '0671027387',
    year: 2003,
    rank: '63',
    title: 'Deception Point',
    author: 'Dan Brown'
  },
  {
    asin: '0375507523',
    year: 2003,
    rank: '64',
    title: 'Bushwhacked: Life in George W. Bush\'s America',
    author: 'Molly Ivins'
  },
  {
    asin: '0375501568',
    year: 2003,
    rank: '65',
    title: 'Beyond Belief: The Secret Gospel of Thomas',
    author: 'Elaine Pagels'
  },
  {
    asin: '0440414806',
    year: 2003,
    rank: '66',
    title: 'Holes',
    author: 'Louis Sachar'
  },
  {
    asin: '1891105035',
    year: 2003,
    rank: '67',
    title: '30-Minute Meals',
    author: 'Rachael Ray'
  },
  {
    asin: '0060505389',
    year: 2003,
    rank: '68',
    title: '8 Minutes in the Morning: A Simple Way to Shed Up to 2 Pounds a Week -- Guaranteed',
    author: 'Jorge Cruise'
  },
  {
    asin: '0785263535',
    year: 2003,
    rank: '69',
    title: 'The Savage Nation: Saving America from the Liberal Assault on Our Borders, Language and Culture',
    author: 'Michael Savage'
  },
  {
    asin: '0385509510',
    year: 2003,
    rank: '70',
    title: 'Under the Banner of Heaven: A Story of Violent Faith',
    author: 'Jon Krakauer'
  },
  {
    asin: '0805047905',
    year: 2003,
    rank: '71',
    title: 'Brown Bear, Brown Bear, What Do You See?',
    author: 'Bill Martin Jr.'
  },
  {
    asin: '0439567629',
    year: 2003,
    rank: '72',
    title: 'Harry Potter and the Order of the Phoenix (Book 5)',
    author: 'J. K. Rowling'
  },
  {
    asin: '0609608444',
    year: 2003,
    rank: '73',
    title: 'The Devil in the White City:  Murder, Magic, and Madness at the Fair That Changed America',
    author: 'Erik Larson'
  },
  {
    asin: '0425098478',
    year: 2003,
    rank: '74',
    title: 'The One Minute Manager',
    author: 'Kenneth Blanchard'
  },
  {
    asin: '0740721135',
    year: 2003,
    rank: '75',
    title: 'The Complete Far Side: 1980-1994',
    author: 'Gary Larson'
  },
  {
    asin: '0786867175',
    year: 2003,
    rank: '76',
    title: 'Leap of Faith: Memoirs of an Unexpected Life',
    author: 'Queen Noor'
  },
  {
    asin: '0761104844',
    year: 2003,
    rank: '77',
    title: '1,000 Places to See Before You Die: A Traveler\'s Life List',
    author: 'Patricia Schultz'
  },
  {
    asin: '0679805273',
    year: 2003,
    rank: '78',
    title: 'Oh, the Places You\'ll Go!  ',
    author: 'Dr. Seuss'
  },
  {
    asin: '1881273156',
    year: 2003,
    rank: '79',
    title: 'The Five Love Languages: How to Express Heartfelt Commitment to Your Mate',
    author: 'Gary Chapman'
  },
  {
    asin: '0761121323',
    year: 2003,
    rank: '80',
    title: 'What to Expect When You\'re Expecting',
    author: 'Heidi Murkoff'
  },
  {
    asin: '0316602906',
    year: 2003,
    rank: '81',
    title: 'The Big Bad Wolf',
    author: 'James Patterson'
  },
  {
    asin: '0156628708',
    year: 2003,
    rank: '82',
    title: 'Mrs. Dalloway',
    author: 'Virginia Woolf'
  },
  {
    asin: '038572179X',
    year: 2003,
    rank: '83',
    title: 'Atonement: A Novel',
    author: 'Ian McEwan'
  },
  {
    asin: '0884270610',
    year: 2003,
    rank: '84',
    title: 'The Goal: A Process of Ongoing Improvement',
    author: 'Eliyahu M. Goldratt'
  },
  {
    asin: '1878424319',
    year: 2003,
    rank: '85',
    title: 'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
    author: 'Don Miguel Ruiz'
  },
  {
    asin: '0151008116',
    year: 2003,
    rank: '86',
    title: 'Life of Pi',
    author: 'Yann Martel'
  },
  {
    asin: '0877798095',
    year: 2003,
    rank: '87',
    title: 'Merriam-Webster\'s Collegiate Dictionary',
    author: 'Merriam-Webster'
  },
  {
    asin: '0694003611',
    year: 2003,
    rank: '88',
    title: 'Goodnight Moon',
    author: 'Margaret Wise Brown'
  },
  {
    asin: '0807220299',
    year: 2003,
    rank: '89',
    title: 'Harry Potter and the Order of the Phoenix (Book 5)',
    author: 'J.K. Rowling'
  },
  {
    asin: '1583330844',
    year: 2003,
    rank: '90',
    title: 'The Good Carb Cookbook: Secrets of Eating Low on the Glycemic Index',
    author: 'Sandra Woodruff'
  },
  {
    asin: '0399151648',
    year: 2003,
    rank: '91',
    title: 'Kate Remembered',
    author: 'A. Scott Berg'
  },
  {
    asin: '0064410137',
    year: 2003,
    rank: '92',
    title: 'The Slippery Slope (A Series of Unfortunate Events, Book 10)',
    author: 'Lemony Snicket'
  },
  {
    asin: '0399150897',
    year: 2003,
    rank: '93',
    title: 'Blow Fly',
    author: 'Patricia Cornwell'
  },
  {
    asin: '0805063897',
    year: 2003,
    rank: '94',
    title: 'Nickel and Dimed: On (Not) Getting By in America',
    author: 'Barbara Ehrenreich'
  },
  {
    asin: '0312263120',
    year: 2003,
    rank: '95',
    title: 'Digital Fortress: A Thriller',
    author: 'Dan Brown'
  },
  {
    asin: '0385488858',
    year: 2003,
    rank: '96',
    title: 'Who\'s Your Caddy?: Looping for the Great, Near Great, and Reprobates of Golf',
    author: 'Rick Reilly'
  },
  {
    asin: '0962936022',
    year: 2003,
    rank: '97',
    title: 'The First Days of School: How to Be an Effective Teacher',
    author: 'Harry K. Wong'
  },
  {
    asin: '0894805770',
    year: 2003,
    rank: '98',
    title: 'What to Expect the First Year',
    author: 'Arlene Eisenberg'
  },
  {
    asin: '0393058506',
    year: 2003,
    rank: '99',
    title: 'The Great Unraveling: Losing Our Way in the New Century',
    author: 'Paul Krugman'
  },
  {
    asin: '1582343497',
    year: 2003,
    rank: '100',
    title: 'Schott\'s Original Miscellany',
    author: 'Ben Schott'
  },
  {
    asin: '0385504209',
    year: 2004,
    rank: '1',
    title: 'The Da Vinci Code',
    author: 'Dan Brown'
  },
  {
    asin: '0446532681',
    year: 2004,
    rank: '2',
    title: 'America (The Book): A Citizen\'s Guide to Democracy Inaction',
    author: 'Jon Stewart'
  },
  {
    asin: '0066620996',
    year: 2004,
    rank: '3',
    title: 'Good to Great: Why Some Companies Make the Leap and Others Don\'t',
    author: 'Jim Collins'
  },
  {
    asin: '1579546463',
    year: 2004,
    rank: '4',
    title: 'THE SOUTH BEACH DIET The Delicious, Doctor-Designed, Foolproof Plan for Fast and Healthy Weight Loss',
    author: 'Arthur Agatston'
  },
  {
    asin: '0375414576',
    year: 2004,
    rank: '5',
    title: 'My Life',
    author: 'Bill Clinton'
  },
  {
    asin: '1592400876',
    year: 2004,
    rank: '6',
    title: 'Eats, Shoots & Leaves: The Zero Tolerance Approach to Punctuation',
    author: 'Lynne Truss'
  },
  {
    asin: '0786868716',
    year: 2004,
    rank: '7',
    title: 'The Five People You Meet In Heaven',
    author: 'Mitch Albom'
  },
  {
    asin: '0439784549',
    year: 2004,
    rank: '8',
    title: 'Harry Potter and the Half-Blood Prince (Book 6)',
    author: 'J. K. Rowling'
  },
  {
    asin: '0671027360',
    year: 2004,
    rank: '9',
    title: 'Angels & Demons',
    author: 'Dan Brown'
  },
  {
    asin: '068987474X',
    year: 2004,
    rank: '10',
    title: 'He\'s Just Not That Into You: The No-Excuses Truth to Understanding Guys',
    author: 'Greg Behrendt'
  },
  {
    asin: '0310205719',
    year: 2004,
    rank: '11',
    title: 'The Purpose Driven Life',
    author: 'Rick Warren'
  },
  {
    asin: '0895260174',
    year: 2004,
    rank: '12',
    title: 'Unfit For Command: Swift Boat Veterans Speak Out Against John Kerry',
    author: 'John E. O\'Neill'
  },
  {
    asin: '0393326713',
    year: 2004,
    rank: '13',
    title: 'The 9/11 Commission Report: Final Report of the National Commission on Terrorist Attacks Upon the United States (Authorized Edition)',
    author: 'National Commission…'
  },
  {
    asin: '0743201140',
    year: 2004,
    rank: '14',
    title: 'Now, Discover Your Strengths',
    author: 'Marcus Buckingham'
  },
  {
    asin: '1579549586',
    year: 2004,
    rank: '15',
    title: 'The South Beach Diet Good Fats/Good Carbs Guide: The Complete and Easy Reference for All Your Favorite Foods',
    author: 'Arthur Agatston'
  },
  {
    asin: '0399144463',
    year: 2004,
    rank: '16',
    title: 'Who Moved My Cheese?: An Amazing Way to Deal with Change in Your Work and in Your Life',
    author: 'Spencer Johnson'
  },
  {
    asin: '0743260244',
    year: 2004,
    rank: '17',
    title: 'Against All Enemies: Inside America\'s War on Terror',
    author: 'Richard Clarke'
  },
  {
    asin: '0060520612',
    year: 2004,
    rank: '18',
    title: 'The Proper Care and Feeding of Husbands',
    author: 'Laura Schlessinger'
  },
  {
    asin: '1579549578',
    year: 2004,
    rank: '19',
    title: 'The South Beach Diet Cookbook',
    author: 'Arthur Agatston'
  },
  {
    asin: '074325547X',
    year: 2004,
    rank: '20',
    title: 'Plan of Attack',
    author: 'Bob Woodward'
  },
  {
    asin: '0609610570',
    year: 2004,
    rank: '21',
    title: 'Execution: The Discipline of Getting Things Done',
    author: 'Larry Bossidy'
  },
  {
    asin: '0787960756',
    year: 2004,
    rank: '22',
    title: 'The Five Dysfunctions of a Team: A Leadership Fable',
    author: 'Patrick Lencioni'
  },
  {
    asin: '0395389496',
    year: 2004,
    rank: '23',
    title: 'The Polar Express',
    author: 'Chris Van Allsburg'
  },
  {
    asin: '0142001740',
    year: 2004,
    rank: '24',
    title: 'The Secret Life of Bees',
    author: 'Sue Monk Kidd'
  },
  {
    asin: '0156027321',
    year: 2004,
    rank: '25',
    title: 'Life of Pi',
    author: 'Yann Martel'
  },
  {
    asin: '0767914104',
    year: 2004,
    rank: '26',
    title: 'The Automatic Millionaire: A Powerful One-Step Plan to Live and Finish Rich',
    author: 'David Bach'
  },
  {
    asin: '0446677450',
    year: 2004,
    rank: '27',
    title: 'Rich Dad, Poor Dad: What the Rich Teach Their Kids About Money--That the Poor and Middle Class Do Not!',
    author: 'Robert T. Kiyosaki'
  },
  {
    asin: '0385337116',
    year: 2004,
    rank: '28',
    title: 'The Rule of Four',
    author: 'Ian Caldwell'
  },
  {
    asin: '0671027387',
    year: 2004,
    rank: '29',
    title: 'Deception Point',
    author: 'Dan Brown'
  },
  {
    asin: '0743236742',
    year: 2004,
    rank: '30',
    title: 'The Ultimate Weight Solution: The 7 Keys to Weight Loss Freedom',
    author: 'Dr. Phil McGraw'
  },
  {
    asin: '1594480001',
    year: 2004,
    rank: '31',
    title: 'The Kite Runner',
    author: 'Khaled Hosseini'
  },
  {
    asin: '0743228154',
    year: 2004,
    rank: '32',
    title: 'Chronicles, Vol. 1',
    author: 'Bob Dylan'
  },
  {
    asin: '0671708635',
    year: 2004,
    rank: '33',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey'
  },
  {
    asin: '1400032717',
    year: 2004,
    rank: '34',
    title: 'The Curious Incident of the Dog in the Night-Time',
    author: 'Mark Haddon'
  },
  {
    asin: '0743490398',
    year: 2004,
    rank: '35',
    title: 'The Ultimate Weight Solution Food Guide',
    author: 'Dr. Phil McGraw'
  },
  {
    asin: '0385510438',
    year: 2004,
    rank: '36',
    title: 'The Last Juror (Grisham, John)',
    author: 'John Grisham'
  },
  {
    asin: '0618509283',
    year: 2004,
    rank: '37',
    title: 'The Plot Against America: A Novel',
    author: 'Philip Roth'
  },
  {
    asin: '0786866020',
    year: 2004,
    rank: '38',
    title: 'Fish: A Proven Way to Boost Morale and Improve Results',
    author: 'Stephen C. Lundin'
  },
  {
    asin: '0761104844',
    year: 2004,
    rank: '39',
    title: '1,000 Places to See Before You Die: A Traveler\'s Life List',
    author: 'Patricia Schultz'
  },
  {
    asin: '081297106X',
    year: 2004,
    rank: '40',
    title: 'Reading Lolita in Tehran: A Memoir in Books',
    author: 'Azar Nafisi'
  },
  {
    asin: '1880418592',
    year: 2004,
    rank: '41',
    title: 'Song of Susannah (The Dark Tower, Book 6)',
    author: 'Stephen King'
  },
  {
    asin: '1401902154',
    year: 2004,
    rank: '42',
    title: 'The Power of Intention',
    author: 'Dr. Wayne W. Dyer'
  },
  {
    asin: '0316143464',
    year: 2004,
    rank: '43',
    title: 'Dress Your Family in Corduroy and Denim',
    author: 'David Sedaris'
  },
  {
    asin: '0312422156',
    year: 2004,
    rank: '44',
    title: 'Middlesex: A Novel',
    author: 'Jeffrey Eugenides'
  },
  {
    asin: '044650016X',
    year: 2004,
    rank: '45',
    title: 'The Perricone Promise: Look Younger Live Longer in Three Easy Steps',
    author: 'Nicholas Perricone'
  },
  {
    asin: '020530902X',
    year: 2004,
    rank: '46',
    title: 'The Elements of Style, Fourth Edition',
    author: 'William Strunk Jr.'
  },
  {
    asin: '1880418622',
    year: 2004,
    rank: '47',
    title: 'The Dark Tower (The Dark Tower, Book 7)',
    author: 'Stephen King'
  },
  {
    asin: '1582344167',
    year: 2004,
    rank: '48',
    title: 'Jonathan Strange & Mr. Norrell',
    author: 'Susanna Clarke'
  },
  {
    asin: '0064410145',
    year: 2004,
    rank: '49',
    title: 'The Grim Grotto (A Series of Unfortunate Events, Book 11)',
    author: 'Lemony Snicket'
  },
  {
    asin: '0671723650',
    year: 2004,
    rank: '50',
    title: 'How to Win Friends & Influence People',
    author: 'Dale Carnegie'
  },
  {
    asin: '0684852861',
    year: 2004,
    rank: '51',
    title: 'First, Break All the Rules: What the World\'s Greatest Managers Do Differently',
    author: 'Marcus Buckingham'
  },
  {
    asin: '0140157352',
    year: 2004,
    rank: '52',
    title: 'Getting to Yes: Negotiating Agreement Without Giving In',
    author: 'Roger Fisher'
  },
  {
    asin: '0743255453',
    year: 2004,
    rank: '53',
    title: 'The Price of Loyalty: George W. Bush, the White House, and the Education of Paul O\'Neill',
    author: 'Ron Suskind'
  },
  {
    asin: '0689835604',
    year: 2004,
    rank: '54',
    title: 'Where Is Baby\'s Belly Button? A Lift-the-Flap Book',
    author: 'Karen Katz'
  },
  {
    asin: '1594200092',
    year: 2004,
    rank: '55',
    title: 'Alexander Hamilton',
    author: 'Ron Chernow'
  },
  {
    asin: '0060731583',
    year: 2004,
    rank: '56',
    title: 'AMERICAN SOLDIER',
    author: 'Tommy Franks'
  },
  {
    asin: '0743264932',
    year: 2004,
    rank: '57',
    title: 'Family First: Your Step-by-Step Plan for Creating a Phenomenal Family',
    author: 'Dr. Phil McGraw'
  },
  {
    asin: '0316346624',
    year: 2004,
    rank: '58',
    title: 'The Tipping Point: How Little Things Can Make a Big Difference',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0767908171',
    year: 2004,
    rank: '59',
    title: 'A Short History of Nearly Everything',
    author: 'Bill Bryson'
  },
  {
    asin: '0060740450',
    year: 2004,
    rank: '60',
    title: 'One Hundred Years of Solitude (Oprah\'s Book Club)',
    author: 'Gabriel Garcia…'
  },
  {
    asin: '1595620036',
    year: 2004,
    rank: '61',
    title: 'How Full Is Your Bucket?',
    author: 'Tom Rath'
  },
  {
    asin: '0743486226',
    year: 2004,
    rank: '62',
    title: 'Angels & Demons',
    author: 'Dan Brown'
  },
  {
    asin: '0374281580',
    year: 2004,
    rank: '63',
    title: 'I Am Charlotte Simmons: A Novel',
    author: 'Tom Wolfe'
  },
  {
    asin: '0375508589',
    year: 2004,
    rank: '64',
    title: 'Shadow Divers: The True Adventure of Two Americans Who Risked Everything to Solve One of the Last Mysteries of World War II',
    author: 'Robert Kurson'
  },
  {
    asin: '015602943X',
    year: 2004,
    rank: '65',
    title: 'The Time Traveler\'s Wife',
    author: 'Audrey Niffenegger'
  },
  {
    asin: '0805073396',
    year: 2004,
    rank: '66',
    title: 'What\'s the Matter with Kansas? How Conservatives Won the Heart of America',
    author: 'Thomas Frank'
  },
  {
    asin: '0440136482',
    year: 2004,
    rank: '67',
    title: 'Holy Blood, Holy Grail',
    author: 'Michael Baigent'
  },
  {
    asin: '0375411089',
    year: 2004,
    rank: '68',
    title: 'Skinny Dip',
    author: 'Carl Hiaasen'
  },
  {
    asin: '1580420818',
    year: 2004,
    rank: '69',
    title: 'Doyle Brunson\'s Super System',
    author: 'Doyle \'Texas Dolly\'…'
  },
  {
    asin: '0066214130',
    year: 2004,
    rank: '70',
    title: 'State of Fear',
    author: 'Michael Crichton'
  },
  {
    asin: '0688123163',
    year: 2004,
    rank: '71',
    title: 'Raving Fans: A Revolutionary Approach To Customer Service',
    author: 'Ken Blanchard'
  },
  {
    asin: '1574888498',
    year: 2004,
    rank: '72',
    title: 'Imperial Hubris: Why the West is Losing the War on Terror',
    author: 'Michael Scheuer'
  },
  {
    asin: '031600023X',
    year: 2004,
    rank: '73',
    title: 'Worse Than Watergate: The Secret Presidency of George W. Bush',
    author: 'John W. Dean'
  },
  {
    asin: '0874477050',
    year: 2004,
    rank: '74',
    title: '10 Real SATs, Third Edition',
    author: 'The College Board'
  },
  {
    asin: '0060582510',
    year: 2004,
    rank: '75',
    title: 'Deliver Us from Evil: Defeating Terrorism, Despotism, and Liberalism',
    author: 'Sean Hannity'
  },
  {
    asin: '0312289723',
    year: 2004,
    rank: '76',
    title: 'Ten Big Ones (Stephanie Plum Novels)',
    author: 'Janet Evanovich'
  },
  {
    asin: '1400054184',
    year: 2004,
    rank: '77',
    title: 'How to Talk to a Liberal (If You Must): The World According to Ann Coulter',
    author: 'Ann Coulter'
  },
  {
    asin: '0375412883',
    year: 2004,
    rank: '78',
    title: 'The Fabric of the Cosmos: Space, Time, and the Texture of Reality',
    author: 'Brian Greene'
  },
  {
    asin: '1881273156',
    year: 2004,
    rank: '79',
    title: 'The Five Love Languages: How to Express Heartfelt Commitment to Your Mate',
    author: 'Gary Chapman'
  },
  {
    asin: '0670032646',
    year: 2004,
    rank: '80',
    title: 'American Dynasty: Aristocracy, Fortune, and the Politics of Deceit in the House of Bush',
    author: 'Kevin Phillips'
  },
  {
    asin: '1400040310',
    year: 2004,
    rank: '81',
    title: 'His Excellency: George Washington',
    author: 'Joseph J. Ellis'
  },
  {
    asin: '043935806X',
    year: 2004,
    rank: '82',
    title: 'Harry Potter and the Order of the Phoenix (Book 5)',
    author: 'J. K. Rowling'
  },
  {
    asin: '0761121323',
    year: 2004,
    rank: '83',
    title: 'What to Expect When You\'re Expecting',
    author: 'Heidi Murkoff'
  },
  {
    asin: '0525947647',
    year: 2004,
    rank: '84',
    title: 'Lies and the Lying Liars Who Tell Them',
    author: 'Al Franken'
  },
  {
    asin: '0609607219',
    year: 2004,
    rank: '85',
    title: 'The Sexy Years: Discover the Hormone Connection--The Secret to Fabulous Sex, Great Health, and Vitality, for Women and Men',
    author: 'Suzanne Somers'
  },
  {
    asin: '1401352081',
    year: 2004,
    rank: '86',
    title: 'Big Russ and Me, Father and Son: Lessons of Life',
    author: 'Tim Russert'
  },
  {
    asin: '1878424319',
    year: 2004,
    rank: '87',
    title: 'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
    author: 'Don Miguel Ruiz'
  },
  {
    asin: '068985658X',
    year: 2004,
    rank: '88',
    title: 'Counting Kisses: A Kiss & Read Book',
    author: 'Karen Katz'
  },
  {
    asin: '0618374086',
    year: 2004,
    rank: '89',
    title: 'The Gourmet Cookbook: More than 1000 recipes',
    author: 'Ruth Reichl'
  },
  {
    asin: '0679805273',
    year: 2004,
    rank: '90',
    title: 'Oh, the Places You\'ll Go!  ',
    author: 'Dr. Seuss'
  },
  {
    asin: '0399152199',
    year: 2004,
    rank: '91',
    title: 'Trace: A Scarpetta Novel',
    author: 'Patricia Cornwell'
  },
  {
    asin: '1400061849',
    year: 2004,
    rank: '92',
    title: 'Father Joe: The Man Who Saved My Soul',
    author: 'Tony Hendra'
  },
  {
    asin: '0071401946',
    year: 2004,
    rank: '93',
    title: 'Crucial Conversations: Tools for Talking When Stakes Are High',
    author: 'Kerry Patterson'
  },
  {
    asin: '0446532754',
    year: 2004,
    rank: '94',
    title: 'Your Best Life Now: 7 Steps to Living at Your Full Potential',
    author: 'Joel Osteen'
  },
  {
    asin: '1579549985',
    year: 2004,
    rank: '95',
    title: 'The Abs Diet: The Six-Week Plan to Flatten Your Stomach and Keep You Lean for Life',
    author: 'David Zinczenko'
  },
  {
    asin: '0694003611',
    year: 2004,
    rank: '96',
    title: 'Goodnight Moon',
    author: 'Margaret Wise Brown'
  },
  {
    asin: '1400049350',
    year: 2004,
    rank: '97',
    title: 'Barefoot in Paris: Easy French Food You Can Make at Home',
    author: 'Ina Garten'
  },
  {
    asin: '0842332359',
    year: 2004,
    rank: '98',
    title: 'Glorious Appearing: The End of Days (Left Behind #12)',
    author: 'Jerry B. Jenkins'
  },
  {
    asin: '0316710598',
    year: 2004,
    rank: '99',
    title: 'London Bridges (Alex Cross Novel)',
    author: 'James Patterson'
  },
  {
    asin: '1401301347',
    year: 2004,
    rank: '100',
    title: 'When Will Jesus Bring the Pork Chops?',
    author: 'George Carlin'
  },
  {
    asin: '0439784549',
    year: 2005,
    rank: '1',
    title: 'Harry Potter and the Half-Blood Prince (Book 6)',
    author: 'J. K. Rowling'
  },
  {
    asin: '0374292884',
    year: 2005,
    rank: '2',
    title: 'The World Is Flat: A Brief History of the Twenty-first Century',
    author: 'Thomas L. Friedman'
  },
  {
    asin: '006073132X',
    year: 2005,
    rank: '3',
    title: 'Freakonomics: A Rogue Economist Explores the Hidden Side of Everything',
    author: 'Steven D. Levitt'
  },
  {
    asin: '0066620996',
    year: 2005,
    rank: '4',
    title: 'Good to Great: Why Some Companies Make the Leap and Others Don\'t',
    author: 'Jim Collins'
  },
  {
    asin: '0060765313',
    year: 2005,
    rank: '5',
    title: 'YOU: The Owner\'s Manual',
    author: 'Michael F. Roizen'
  },
  {
    asin: '1594480001',
    year: 2005,
    rank: '6',
    title: 'The Kite Runner',
    author: 'Khaled Hosseini'
  },
  {
    asin: '0307276902',
    year: 2005,
    rank: '7',
    title: 'A Million Little Pieces',
    author: 'James Frey'
  },
  {
    asin: '0316172324',
    year: 2005,
    rank: '8',
    title: 'Blink: The Power of Thinking Without Thinking',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0743226712',
    year: 2005,
    rank: '9',
    title: '1776',
    author: 'David McCullough'
  },
  {
    asin: '0743201140',
    year: 2005,
    rank: '10',
    title: 'Now, Discover Your Strengths',
    author: 'Marcus Buckingham'
  },
  {
    asin: '0064471195',
    year: 2005,
    rank: '11',
    title: 'The Chronicles of Narnia Boxed Set',
    author: 'C. S. Lewis'
  },
  {
    asin: '0316346624',
    year: 2005,
    rank: '12',
    title: 'The Tipping Point: How Little Things Can Make a Big Difference',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0310205719',
    year: 2005,
    rank: '13',
    title: 'The Purpose Driven Life',
    author: 'Rick Warren'
  },
  {
    asin: '0060753943',
    year: 2005,
    rank: '14',
    title: 'Winning',
    author: 'Jack Welch'
  },
  {
    asin: '0385504209',
    year: 2005,
    rank: '15',
    title: 'The Da Vinci Code',
    author: 'Dan Brown'
  },
  {
    asin: '0787960756',
    year: 2005,
    rank: '16',
    title: 'The Five Dysfunctions of a Team: A Leadership Fable',
    author: 'Patrick Lencioni'
  },
  {
    asin: '0874477182',
    year: 2005,
    rank: '17',
    title: 'The Official SAT Study Guide: For the New SAT',
    author: 'The College Board'
  },
  {
    asin: '037582670X',
    year: 2005,
    rank: '18',
    title: 'Eldest (Inheritance, Book 2)',
    author: 'Christopher Paolini'
  },
  {
    asin: '0670033375',
    year: 2005,
    rank: '19',
    title: 'Collapse: How Societies Choose to Fail or Succeed',
    author: 'Jared Diamond'
  },
  {
    asin: '1400032717',
    year: 2005,
    rank: '20',
    title: 'The Curious Incident of the Dog in the Night-Time',
    author: 'Mark Haddon'
  },
  {
    asin: '1400042127',
    year: 2005,
    rank: '21',
    title: 'French Women Don\'t Get Fat: The Secret of Eating for Pleasure',
    author: 'Mireille Guiliano'
  },
  {
    asin: '0399144463',
    year: 2005,
    rank: '22',
    title: 'Who Moved My Cheese?: An Amazing Way to Deal with Change in Your Work and in Your Life',
    author: 'Spencer Johnson'
  },
  {
    asin: '0060763280',
    year: 2005,
    rank: '23',
    title: 'Secrets of the Millionaire Mind: Mastering the Inner Game of Wealth',
    author: 'T. Harv Eker'
  },
  {
    asin: '0446532681',
    year: 2005,
    rank: '24',
    title: 'America (The Book): A Citizen\'s Guide to Democracy Inaction',
    author: 'Jon Stewart'
  },
  {
    asin: '140004314X',
    year: 2005,
    rank: '25',
    title: 'The Year of Magical Thinking',
    author: 'Joan Didion'
  },
  {
    asin: '0691122946',
    year: 2005,
    rank: '26',
    title: 'On Bullshit',
    author: 'Harry G. Frankfurt'
  },
  {
    asin: '1400082315',
    year: 2005,
    rank: '27',
    title: 'Why Do Men Have Nipples? Hundreds of Questions You\'d Only Ask a Doctor After Your Third Martini',
    author: 'Mark Leyner'
  },
  {
    asin: '0684824906',
    year: 2005,
    rank: '28',
    title: 'Team of Rivals: The Political Genius of Abraham Lincoln',
    author: 'Doris Kearns Goodwin'
  },
  {
    asin: '1400052580',
    year: 2005,
    rank: '29',
    title: 'Everyday Italian: 125 Simple and Delicious Recipes',
    author: 'Giada De Laurentiis'
  },
  {
    asin: '0316011770',
    year: 2005,
    rank: '30',
    title: 'The Historian',
    author: 'Elizabeth Kostova'
  },
  {
    asin: '1400082544',
    year: 2005,
    rank: '31',
    title: 'Rachael Ray 365: No Repeats--A Year of Deliciously Different Dinners (A 30-Minute Meal Cookbook)',
    author: 'Rachael Ray'
  },
  {
    asin: '0670033944',
    year: 2005,
    rank: '32',
    title: 'The Mermaid Chair: A Novel',
    author: 'Sue Monk Kidd'
  },
  {
    asin: '0060558288',
    year: 2005,
    rank: '33',
    title: 'God\'s Politics: Why the Right Gets It Wrong and the Left Doesn\'t Get It',
    author: 'Jim Wallis'
  },
  {
    asin: '0446677450',
    year: 2005,
    rank: '34',
    title: 'Rich Dad, Poor Dad: What the Rich Teach Their Kids About Money--That the Poor and Middle Class Do Not!',
    author: 'Robert T. Kiyosaki'
  },
  {
    asin: '0743269519',
    year: 2005,
    rank: '35',
    title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0385510454',
    year: 2005,
    rank: '36',
    title: 'The Broker: A Novel',
    author: 'John Grisham'
  },
  {
    asin: '0609610570',
    year: 2005,
    rank: '37',
    title: 'Execution: The Discipline of Getting Things Done',
    author: 'Larry Bossidy'
  },
  {
    asin: '0671027360',
    year: 2005,
    rank: '38',
    title: 'Angels & Demons',
    author: 'Dan Brown'
  },
  {
    asin: '0975599518',
    year: 2005,
    rank: '39',
    title: 'Natural Cures "They" Don\'t Want You To Know About',
    author: 'Kevin Trudeau'
  },
  {
    asin: '020530902X',
    year: 2005,
    rank: '40',
    title: 'The Elements of Style, Fourth Edition',
    author: 'William Strunk Jr.'
  },
  {
    asin: '015602943X',
    year: 2005,
    rank: '41',
    title: 'The Time Traveler\'s Wife',
    author: 'Audrey Niffenegger'
  },
  {
    asin: '0671723650',
    year: 2005,
    rank: '42',
    title: 'How to Win Friends & Influence People',
    author: 'Dale Carnegie'
  },
  {
    asin: '0446532754',
    year: 2005,
    rank: '43',
    title: 'Your Best Life Now: 7 Steps to Living at Your Full Potential',
    author: 'Joel Osteen'
  },
  {
    asin: '1400082536',
    year: 2005,
    rank: '44',
    title: '30-Minute Get Real Meals',
    author: 'Rachael Ray'
  },
  {
    asin: '1579546463',
    year: 2005,
    rank: '45',
    title: 'THE SOUTH BEACH DIET The Delicious, Doctor-Designed, Foolproof Plan for Fast and Healthy Weight Loss',
    author: 'Arthur Agatston'
  },
  {
    asin: '0142001740',
    year: 2005,
    rank: '46',
    title: 'The Secret Life of Bees',
    author: 'Sue Monk Kidd'
  },
  {
    asin: '0140157352',
    year: 2005,
    rank: '47',
    title: 'Getting to Yes: Negotiating Agreement Without Giving In',
    author: 'Roger Fisher'
  },
  {
    asin: '0439682584',
    year: 2005,
    rank: '48',
    title: 'Harry Potter Boxset Pb 1-5',
    author: 'J.K. Rowling'
  },
  {
    asin: '1595620036',
    year: 2005,
    rank: '49',
    title: 'How Full Is Your Bucket?',
    author: 'Tom Rath'
  },
  {
    asin: '0743284577',
    year: 2005,
    rank: '50',
    title: 'Our Endangered Values: America\'s Moral Crisis',
    author: 'Jimmy Carter'
  },
  {
    asin: '0393317552',
    year: 2005,
    rank: '51',
    title: 'Guns, Germs, and Steel: The Fates of Human Societies',
    author: 'Jared M. Diamond'
  },
  {
    asin: '0714845310',
    year: 2005,
    rank: '52',
    title: 'The Silver Spoon',
    author: 'Phaidon Press'
  },
  {
    asin: '0740748475',
    year: 2005,
    rank: '53',
    title: 'The Complete Calvin and Hobbes [Box Set]',
    author: 'Bill Watterson'
  },
  {
    asin: '0786866020',
    year: 2005,
    rank: '54',
    title: 'Fish: A Proven Way to Boost Morale and Improve Results',
    author: 'Stephen C. Lundin'
  },
  {
    asin: '0060987103',
    year: 2005,
    rank: '55',
    title: 'Wicked: The Life and Times of the Wicked Witch of the West',
    author: 'Gregory Maguire'
  },
  {
    asin: '068987474X',
    year: 2005,
    rank: '56',
    title: 'He\'s Just Not That Into You: The No-Excuses Truth to Understanding Guys',
    author: 'Greg Behrendt'
  },
  {
    asin: '1881273156',
    year: 2005,
    rank: '57',
    title: 'The Five Love Languages: How to Express Heartfelt Commitment to Your Mate',
    author: 'Gary Chapman'
  },
  {
    asin: '0786868716',
    year: 2005,
    rank: '58',
    title: 'The Five People You Meet In Heaven',
    author: 'Mitch Albom'
  },
  {
    asin: '0743243773',
    year: 2005,
    rank: '59',
    title: 'Teacher Man: A Memoir (The Frank McCourt Memoirs)',
    author: 'Frank McCourt'
  },
  {
    asin: '1885167601',
    year: 2005,
    rank: '60',
    title: 'Little Red Book of Selling: 12.5 Principles of Sales Greatness',
    author: 'Jeffrey Gitomer'
  },
  {
    asin: '0743224892',
    year: 2005,
    rank: '61',
    title: 'Jim Cramer\'s Real Money: Sane Investing in an Insane World',
    author: 'James J. Cramer'
  },
  {
    asin: '0684852861',
    year: 2005,
    rank: '62',
    title: 'First, Break All the Rules: What the World\'s Greatest Managers Do Differently',
    author: 'Marcus Buckingham'
  },
  {
    asin: '0374153892',
    year: 2005,
    rank: '63',
    title: 'Gilead: A Novel',
    author: 'Marilynne Robinson'
  },
  {
    asin: '1573222976',
    year: 2005,
    rank: '64',
    title: 'The Money Book for the Young, Fabulous & Broke',
    author: 'Suze Orman'
  },
  {
    asin: '0060875410',
    year: 2005,
    rank: '65',
    title: 'The FairTax Book',
    author: 'Neal Boortz'
  },
  {
    asin: '0312873077',
    year: 2005,
    rank: '66',
    title: 'Knife of Dreams (The Wheel of Time, Book 11)',
    author: 'Robert Jordan'
  },
  {
    asin: '0761104844',
    year: 2005,
    rank: '67',
    title: '1,000 Places to See Before You Die: A Traveler\'s Life List',
    author: 'Patricia Schultz'
  },
  {
    asin: '0142000280',
    year: 2005,
    rank: '68',
    title: 'Getting Things Done: The Art of Stress-Free Productivity',
    author: 'David Allen'
  },
  {
    asin: '0761121323',
    year: 2005,
    rank: '69',
    title: 'What to Expect When You\'re Expecting',
    author: 'Heidi Murkoff'
  },
  {
    asin: '1573223158',
    year: 2005,
    rank: '70',
    title: 'My Friend Leonard',
    author: 'James Frey'
  },
  {
    asin: '0385324162',
    year: 2005,
    rank: '71',
    title: 'A Breath of Snow and Ashes (Outlander)',
    author: 'Diana Gabaldon'
  },
  {
    asin: '0763622281',
    year: 2005,
    rank: '72',
    title: 'Encyclopedia Prehistorica Dinosaurs : The Definitive Pop-Up',
    author: 'Robert Sabuda'
  },
  {
    asin: '1878424319',
    year: 2005,
    rank: '73',
    title: 'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
    author: 'Don Miguel Ruiz'
  },
  {
    asin: '0375725601',
    year: 2005,
    rank: '74',
    title: 'The Devil in the White City: Murder, Magic, and Madness at the Fair That Changed America',
    author: 'Erik Larson'
  },
  {
    asin: '0688123163',
    year: 2005,
    rank: '75',
    title: 'Raving Fans: A Revolutionary Approach To Customer Service',
    author: 'Ken Blanchard'
  },
  {
    asin: '0071401946',
    year: 2005,
    rank: '76',
    title: 'Crucial Conversations: Tools for Talking When Stakes Are High',
    author: 'Kerry Patterson'
  },
  {
    asin: '0785263705',
    year: 2005,
    rank: '77',
    title: 'Blue Like Jazz: Nonreligious Thoughts on Christian Spirituality',
    author: 'Donald Miller'
  },
  {
    asin: '0307283658',
    year: 2005,
    rank: '78',
    title: 'Harry Potter and the Half-Blood Prince (Book 6)',
    author: 'J.K. Rowling'
  },
  {
    asin: '1579549578',
    year: 2005,
    rank: '79',
    title: 'The South Beach Diet Cookbook',
    author: 'Arthur Agatston'
  },
  {
    asin: '1880685337',
    year: 2005,
    rank: '80',
    title: 'Harrington on Hold \'em Expert Strategy for No Limit Tournaments, Vol. 1: Strategic Play',
    author: 'Dan Harrington'
  },
  {
    asin: '0684846659',
    year: 2005,
    rank: '81',
    title: 'The 8th Habit: From Effectiveness to Greatness',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0385729359',
    year: 2005,
    rank: '82',
    title: 'Girls in Pants: The Third Summer of the Sisterhood',
    author: 'Ann Brashares'
  },
  {
    asin: '1931498717',
    year: 2005,
    rank: '83',
    title: 'Don\'t Think of an Elephant!: Know Your Values and Frame the Debate--The Essential Guide for Progressives',
    author: 'George Lakoff'
  },
  {
    asin: '0895260506',
    year: 2005,
    rank: '84',
    title: 'Men in Black: How the Supreme Court Is Destroying America',
    author: 'Mark R. Levin'
  },
  {
    asin: '1557987912',
    year: 2005,
    rank: '85',
    title: 'Publication Manual of the American Psychological Association',
    author: 'American…'
  },
  {
    asin: '0060761288',
    year: 2005,
    rank: '86',
    title: '100 People Who Are Screwing Up America (And Al Franken Is #37)',
    author: 'Bernard Goldberg'
  },
  {
    asin: '097559950X',
    year: 2005,
    rank: '87',
    title: 'Natural Cures "They" Don\'t Want You to Know About',
    author: 'Kevin Trudeau'
  },
  {
    asin: '0312306261',
    year: 2005,
    rank: '88',
    title: 'Eleven on Top',
    author: 'Janet Evanovich'
  },
  {
    asin: '031615976X',
    year: 2005,
    rank: '89',
    title: 'Mary, Mary',
    author: 'James Patterson'
  },
  {
    asin: '0694003611',
    year: 2005,
    rank: '90',
    title: 'Goodnight Moon',
    author: 'Margaret Wise Brown'
  },
  {
    asin: '1579549985',
    year: 2005,
    rank: '91',
    title: 'The Abs Diet: The Six-Week Plan to Flatten Your Stomach and Keep You Lean for Life',
    author: 'David Zinczenko'
  },
  {
    asin: '1592400876',
    year: 2005,
    rank: '92',
    title: 'Eats, Shoots & Leaves: The Zero Tolerance Approach to Punctuation',
    author: 'Lynne Truss'
  },
  {
    asin: '0679805273',
    year: 2005,
    rank: '93',
    title: 'Oh, the Places You\'ll Go!  ',
    author: 'Dr. Seuss'
  },
  {
    asin: '1591396190',
    year: 2005,
    rank: '94',
    title: 'Blue Ocean Strategy: How to Create Uncontested Market Space and Make Competition Irrelevant',
    author: 'W. Chan Kim'
  },
  {
    asin: '0064410153',
    year: 2005,
    rank: '95',
    title: 'The Penultimate Peril (A Series of Unfortunate Events, Book 12)',
    author: 'Lemony Snicket'
  },
  {
    asin: '0156027321',
    year: 2005,
    rank: '96',
    title: 'Life of Pi',
    author: 'Yann Martel'
  },
  {
    asin: '0689853637',
    year: 2005,
    rank: '97',
    title: 'Winter\'s Tale',
    author: 'Robert Sabuda'
  },
  {
    asin: '0385511809',
    year: 2005,
    rank: '98',
    title: 'Saturday: A novel',
    author: 'Ian McEwan'
  },
  {
    asin: '1576753018',
    year: 2005,
    rank: '99',
    title: 'Confessions of an Economic Hit Man',
    author: 'John Perkins'
  },
  {
    asin: '0887307280',
    year: 2005,
    rank: '100',
    title: 'The E-Myth Revisited: Why Most Small Businesses Don\'t Work and What to Do About It',
    author: 'Michael E. Gerber'
  },
  {
    asin: '0066620996',
    year: 2006,
    rank: '1',
    title: 'Good to Great: Why Some Companies Make the Leap and Others Don\'t',
    author: 'Jim Collins'
  },
  {
    asin: '0743201140',
    year: 2006,
    rank: '2',
    title: 'Now, Discover Your Strengths',
    author: 'Marcus Buckingham'
  },
  {
    asin: '0977326403',
    year: 2006,
    rank: '3',
    title: 'Good to Great and the Social Sectors: Why Business Thinking is Not the Answer',
    author: 'Jim Collins'
  },
  {
    asin: '0374292795',
    year: 2006,
    rank: '4',
    title: 'The World Is Flat [Updated and Expanded]: A Brief History of the Twenty-first Century',
    author: 'Thomas L. Friedman'
  },
  {
    asin: '0060817089',
    year: 2006,
    rank: '5',
    title: 'Marley & Me: Life and Love with the World\'s Worst Dog',
    author: 'John Grogan'
  },
  {
    asin: '0787960756',
    year: 2006,
    rank: '6',
    title: 'The Five Dysfunctions of a Team: A Leadership Fable',
    author: 'Patrick Lencioni'
  },
  {
    asin: '0060765313',
    year: 2006,
    rank: '7',
    title: 'YOU: The Owner\'s Manual',
    author: 'Michael F. Roizen'
  },
  {
    asin: '0743292545',
    year: 2006,
    rank: '8',
    title: 'You, on a Diet: The Owner\'s Manual for Waist Management',
    author: 'Michael F. Roizen'
  },
  {
    asin: '0374500010',
    year: 2006,
    rank: '9',
    title: 'Night (Night)',
    author: 'Elie Wiesel'
  },
  {
    asin: '0316346624',
    year: 2006,
    rank: '10',
    title: 'The Tipping Point: How Little Things Can Make a Big Difference',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '006073132X',
    year: 2006,
    rank: '11',
    title: 'Freakonomics: A Rogue Economist Explores the Hidden Side of Everything',
    author: 'Steven D. Levitt'
  },
  {
    asin: '0307237699',
    year: 2006,
    rank: '12',
    title: 'The Audacity of Hope: Thoughts on Reclaiming the American Dream',
    author: 'Barack Obama'
  },
  {
    asin: '0307337332',
    year: 2006,
    rank: '13',
    title: 'Cesar\'s Way: The Natural, Everyday Guide to Understanding and Correcting Common Dog Problems',
    author: 'Cesar Millan'
  },
  {
    asin: '1594480001',
    year: 2006,
    rank: '14',
    title: 'The Kite Runner',
    author: 'Khaled Hosseini'
  },
  {
    asin: '0316172324',
    year: 2006,
    rank: '15',
    title: 'Blink: The Power of Thinking Without Thinking',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0374292884',
    year: 2006,
    rank: '16',
    title: 'The World Is Flat: A Brief History of the Twenty-first Century',
    author: 'Thomas L. Friedman'
  },
  {
    asin: '0743272234',
    year: 2006,
    rank: '17',
    title: 'State of Denial: Bush at War, Part III',
    author: 'Bob Woodward'
  },
  {
    asin: '0874477182',
    year: 2006,
    rank: '18',
    title: 'The Official SAT Study Guide: For the New SAT',
    author: 'The College Board'
  },
  {
    asin: '0743269519',
    year: 2006,
    rank: '19',
    title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0385517238',
    year: 2006,
    rank: '20',
    title: 'The Innocent Man: Murder and Injustice in a Small Town',
    author: 'John Grisham'
  },
  {
    asin: '0399144463',
    year: 2006,
    rank: '21',
    title: 'Who Moved My Cheese?: An Amazing Way to Deal with Change in Your Work and in Your Life',
    author: 'Spencer Johnson'
  },
  {
    asin: '1400082544',
    year: 2006,
    rank: '22',
    title: 'Rachael Ray 365: No Repeats--A Year of Deliciously Different Dinners (A 30-Minute Meal Cookbook)',
    author: 'Rachael Ray'
  },
  {
    asin: '0446677450',
    year: 2006,
    rank: '23',
    title: 'Rich Dad, Poor Dad: What the Rich Teach Their Kids About Money--That the Poor and Middle Class Do Not!',
    author: 'Robert T. Kiyosaki'
  },
  {
    asin: '1401303277',
    year: 2006,
    rank: '24',
    title: 'For One More Day',
    author: 'Mitch Albom'
  },
  {
    asin: '0307264556',
    year: 2006,
    rank: '25',
    title: 'I Feel Bad About My Neck: And Other Thoughts on Being a Woman',
    author: 'Nora Ephron'
  },
  {
    asin: '0618680004',
    year: 2006,
    rank: '26',
    title: 'The God Delusion',
    author: 'Richard Dawkins'
  },
  {
    asin: '0143037145',
    year: 2006,
    rank: '27',
    title: 'The Memory Keeper\'s Daughter: A Novel',
    author: 'Kim Edwards'
  },
  {
    asin: '1594200823',
    year: 2006,
    rank: '28',
    title: 'The Omnivore\'s Dilemma: A Natural History of Four Meals',
    author: 'Michael Pollan'
  },
  {
    asin: '1881273156',
    year: 2006,
    rank: '29',
    title: 'The Five Love Languages: How to Express Heartfelt Commitment to Your Mate',
    author: 'Gary Chapman'
  },
  {
    asin: '0064410161',
    year: 2006,
    rank: '30',
    title: 'The End (A Series of Unfortunate Events, Book 13)',
    author: 'Lemony Snicket'
  },
  {
    asin: '0142000280',
    year: 2006,
    rank: '31',
    title: 'Getting Things Done: The Art of Stress-Free Productivity',
    author: 'David Allen'
  },
  {
    asin: '0307276902',
    year: 2006,
    rank: '32',
    title: 'A Million Little Pieces',
    author: 'James Frey'
  },
  {
    asin: '0743224892',
    year: 2006,
    rank: '33',
    title: 'Jim Cramer\'s Real Money: Sane Investing in an Insane World',
    author: 'James J. Cramer'
  },
  {
    asin: '0743272552',
    year: 2006,
    rank: '34',
    title: 'Ultrametabolism: The Simple Plan for Automatic Weight Loss',
    author: 'Mark Hyman'
  },
  {
    asin: '0446578843',
    year: 2006,
    rank: '35',
    title: 'I Like You: Hospitality Under the Influence',
    author: 'Amy Sedaris'
  },
  {
    asin: '1400044731',
    year: 2006,
    rank: '36',
    title: 'Suite Française',
    author: 'Irene Nemirovsky'
  },
  {
    asin: '0310205719',
    year: 2006,
    rank: '37',
    title: 'The Purpose Driven Life',
    author: 'Rick Warren'
  },
  {
    asin: '0670037605',
    year: 2006,
    rank: '38',
    title: 'Mayflower: A Story of Courage, Community, and War',
    author: 'Nathaniel Philbrick'
  },
  {
    asin: '020530902X',
    year: 2006,
    rank: '39',
    title: 'The Elements of Style, Fourth Edition',
    author: 'William Strunk Jr.'
  },
  {
    asin: '0679745580',
    year: 2006,
    rank: '40',
    title: 'In Cold Blood',
    author: 'Truman Capote'
  },
  {
    asin: '0671723650',
    year: 2006,
    rank: '41',
    title: 'How to Win Friends & Influence People',
    author: 'Dale Carnegie'
  },
  {
    asin: '0609610570',
    year: 2006,
    rank: '42',
    title: 'Execution: The Discipline of Getting Things Done',
    author: 'Larry Bossidy'
  },
  {
    asin: '0316159794',
    year: 2006,
    rank: '43',
    title: 'Cross',
    author: 'James Patterson'
  },
  {
    asin: '0767920929',
    year: 2006,
    rank: '44',
    title: 'Culture Warrior',
    author: 'Bill O\'Reilly'
  },
  {
    asin: '1885167601',
    year: 2006,
    rank: '45',
    title: 'Little Red Book of Selling: 12.5 Principles of Sales Greatness',
    author: 'Jeffrey Gitomer'
  },
  {
    asin: '074324754X',
    year: 2006,
    rank: '46',
    title: 'The Glass Castle: A Memoir',
    author: 'Jeannette Walls'
  },
  {
    asin: '0883782774',
    year: 2006,
    rank: '47',
    title: 'The Covenant with Black America',
    author: 'Various Contributors'
  },
  {
    asin: '0786866020',
    year: 2006,
    rank: '48',
    title: 'Fish: A Proven Way to Boost Morale and Improve Results',
    author: 'Stephen C. Lundin'
  },
  {
    asin: '159420103X',
    year: 2006,
    rank: '49',
    title: 'Fiasco: The American Military Adventure in Iraq',
    author: 'Thomas E. Ricks'
  },
  {
    asin: '0071401946',
    year: 2006,
    rank: '50',
    title: 'Crucial Conversations: Tools for Talking When Stakes Are High',
    author: 'Kerry Patterson'
  },
  {
    asin: '1878424319',
    year: 2006,
    rank: '51',
    title: 'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
    author: 'Don Miguel Ruiz'
  },
  {
    asin: '1594865671',
    year: 2006,
    rank: '52',
    title: 'An Inconvenient Truth: The Planetary Emergency of Global Warming and What We Can Do About It',
    author: 'Al Gore'
  },
  {
    asin: '0140157352',
    year: 2006,
    rank: '53',
    title: 'Getting to Yes: Negotiating Agreement Without Giving In',
    author: 'Roger Fisher'
  },
  {
    asin: '1591396190',
    year: 2006,
    rank: '54',
    title: 'Blue Ocean Strategy: How to Create Uncontested Market Space and Make Competition Irrelevant',
    author: 'W. Chan Kim'
  },
  {
    asin: '193069945X',
    year: 2006,
    rank: '55',
    title: 'A Guide to the Project Management Body of Knowledge, Third Edition (PMBOK Guides)',
    author: 'Project Management…'
  },
  {
    asin: '0761121323',
    year: 2006,
    rank: '56',
    title: 'What to Expect When You\'re Expecting',
    author: 'Heidi Murkoff'
  },
  {
    asin: '140004314X',
    year: 2006,
    rank: '57',
    title: 'The Year of Magical Thinking',
    author: 'Joan Didion'
  },
  {
    asin: '0312349483',
    year: 2006,
    rank: '58',
    title: 'Twelve Sharp (A Stephanie Plum Novel) (Stephanie Plum Novels)',
    author: 'Janet Evanovich'
  },
  {
    asin: '1577315286',
    year: 2006,
    rank: '59',
    title: 'Soul Mind Body Medicine: A Complete Soul Healing System for Optimum Health and Vitality',
    author: 'Dr. Zhi Gang Sha'
  },
  {
    asin: '0812968069',
    year: 2006,
    rank: '60',
    title: 'Snow Flower and the Secret Fan: A Novel',
    author: 'Lisa See'
  },
  {
    asin: '0684856093',
    year: 2006,
    rank: '61',
    title: 'The 7 Habits of Highly Effective Teens: The Ultimate Teenage Success Guide',
    author: 'Sean Covey'
  },
  {
    asin: '0385504209',
    year: 2006,
    rank: '62',
    title: 'The Da Vinci Code',
    author: 'Dan Brown'
  },
  {
    asin: '0517577003',
    year: 2006,
    rank: '63',
    title: 'Martha Stewart\'s Homekeeping Handbook: The Essential Guide to Caring for Everything in Your Home',
    author: 'Martha Stewart'
  },
  {
    asin: '0060899190',
    year: 2006,
    rank: '64',
    title: 'PostSecret: Extraordinary Confessions from Ordinary Lives',
    author: 'Frank Warren'
  },
  {
    asin: '1400054346',
    year: 2006,
    rank: '65',
    title: 'Barefoot Contessa at Home: Everyday Recipes You\'ll Make Over and Over Again',
    author: 'Ina Garten'
  },
  {
    asin: '1401904599',
    year: 2006,
    rank: '66',
    title: 'Ask and It Is Given: Learning to Manifest Your Desires',
    author: 'Esther Hicks'
  },
  {
    asin: '0679805273',
    year: 2006,
    rank: '67',
    title: 'Oh, the Places You\'ll Go!  ',
    author: 'Dr. Seuss'
  },
  {
    asin: '1557987912',
    year: 2006,
    rank: '68',
    title: 'Publication Manual of the American Psychological Association',
    author: 'American…'
  },
  {
    asin: '0684852861',
    year: 2006,
    rank: '69',
    title: 'First, Break All the Rules: What the World\'s Greatest Managers Do Differently',
    author: 'Marcus Buckingham'
  },
  {
    asin: '0743292332',
    year: 2006,
    rank: '70',
    title: 'Cell: A Novel',
    author: 'Stephen King'
  },
  {
    asin: '0446310786',
    year: 2006,
    rank: '71',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    asin: '0694003611',
    year: 2006,
    rank: '72',
    title: 'Goodnight Moon',
    author: 'Margaret Wise Brown'
  },
  {
    asin: '0307265773',
    year: 2006,
    rank: '73',
    title: 'Letter to a Christian Nation',
    author: 'Sam Harris'
  },
  {
    asin: '1400032717',
    year: 2006,
    rank: '74',
    title: 'The Curious Incident of the Dog in the Night-Time',
    author: 'Mark Haddon'
  },
  {
    asin: '0684824906',
    year: 2006,
    rank: '75',
    title: 'Team of Rivals: The Political Genius of Abraham Lincoln',
    author: 'Doris Kearns Goodwin'
  },
  {
    asin: '1400054206',
    year: 2006,
    rank: '76',
    title: 'Godless: The Church of Liberalism',
    author: 'Ann Coulter'
  },
  {
    asin: '1400052580',
    year: 2006,
    rank: '77',
    title: 'Everyday Italian: 125 Simple and Delicious Recipes',
    author: 'Giada De Laurentiis'
  },
  {
    asin: '015602943X',
    year: 2006,
    rank: '78',
    title: 'The Time Traveler\'s Wife',
    author: 'Audrey Niffenegger'
  },
  {
    asin: '0375725601',
    year: 2006,
    rank: '79',
    title: 'The Devil in the White City: Murder, Magic, and Madness at the Fair That Changed America',
    author: 'Erik Larson'
  },
  {
    asin: '1595620036',
    year: 2006,
    rank: '80',
    title: 'How Full Is Your Bucket?',
    author: 'Tom Rath'
  },
  {
    asin: '1565124995',
    year: 2006,
    rank: '81',
    title: 'Water for Elephants: A Novel',
    author: 'Sara Gruen'
  },
  {
    asin: '0743246268',
    year: 2006,
    rank: '82',
    title: 'Joy of Cooking',
    author: 'Irma S. Rombauer'
  },
  {
    asin: '0471733067',
    year: 2006,
    rank: '83',
    title: 'The Little Book That Beats the Market',
    author: 'Joel Greenblatt'
  },
  {
    asin: '044657967X',
    year: 2006,
    rank: '84',
    title: 'Wild Fire',
    author: 'Nelson DeMille'
  },
  {
    asin: '0393327655',
    year: 2006,
    rank: '85',
    title: 'The End of Faith: Religion, Terror, and the Future of Reason',
    author: 'Sam Harris'
  },
  {
    asin: '067003486X',
    year: 2006,
    rank: '86',
    title: 'American Theocracy: The Peril and Politics of Radical Religion, Oil, and Borrowed Money in the 21st Century',
    author: 'Kevin Phillips'
  },
  {
    asin: '0312363133',
    year: 2006,
    rank: '87',
    title: 'The Fat Smash Diet: The Last Diet You\'ll Ever Need',
    author: 'Ian K. Smith M.D.'
  },
  {
    asin: '1400079179',
    year: 2006,
    rank: '88',
    title: 'The Da Vinci Code',
    author: 'Dan Brown'
  },
  {
    asin: '0688123163',
    year: 2006,
    rank: '89',
    title: 'Raving Fans: A Revolutionary Approach To Customer Service',
    author: 'Ken Blanchard'
  },
  {
    asin: '037541486X',
    year: 2006,
    rank: '90',
    title: 'The Looming Tower: Al-Qaeda and the Road to 9/11',
    author: 'Lawrence Wright'
  },
  {
    asin: '0976570904',
    year: 2006,
    rank: '91',
    title: 'The Official Guide for GMAT Review, 11th Edition',
    author: 'Graduate Management…'
  },
  {
    asin: '0060872985',
    year: 2006,
    rank: '92',
    title: 'Next',
    author: 'Michael Crichton'
  },
  {
    asin: '0743454537',
    year: 2006,
    rank: '93',
    title: 'My Sister\'s Keeper: A Novel (Wsp Readers Club)',
    author: 'Jodi Picoult'
  },
  {
    asin: '1400041201',
    year: 2006,
    rank: '94',
    title: 'Heat: An Amateur\'s Adventures as Kitchen Slave, Line Cook, Pasta-Maker, and Apprentice to a Dante-Quoting Butcher in Tuscany',
    author: 'Bill Buford'
  },
  {
    asin: '1400064805',
    year: 2006,
    rank: '95',
    title: 'Wisdom of Our Fathers: Lessons and Letters from Daughters and Sons',
    author: 'Tim Russert'
  },
  {
    asin: '0743289412',
    year: 2006,
    rank: '96',
    title: 'Lisey\'s Story',
    author: 'Stephen King'
  },
  {
    asin: '0060738170',
    year: 2006,
    rank: '97',
    title: 'Misquoting Jesus: The Story Behind Who Changed the Bible and Why',
    author: 'Bart D. Ehrman'
  },
  {
    asin: '037582670X',
    year: 2006,
    rank: '98',
    title: 'Eldest (Inheritance, Book 2)',
    author: 'Christopher Paolini'
  },
  {
    asin: '0060554738',
    year: 2006,
    rank: '99',
    title: 'The Game: Penetrating the Secret Society of Pickup Artists',
    author: 'Neil Strauss'
  },
  {
    asin: '0446528056',
    year: 2006,
    rank: '100',
    title: 'Dear John',
    author: 'Nicholas Sparks'
  },
  {
    asin: '0545010225',
    year: 2007,
    rank: '1',
    title: 'Harry Potter and the Deathly Hallows (Book 7)',
    author: 'J. K. Rowling'
  },
  {
    asin: '1582701709',
    year: 2007,
    rank: '2',
    title: 'The Secret',
    author: 'Rhonda Byrne'
  },
  {
    asin: '0143038419',
    year: 2007,
    rank: '3',
    title: 'Eat, Pray, Love: One Woman\'s Search for Everything Across Italy, India and Indonesia',
    author: 'Elizabeth Gilbert'
  },
  {
    asin: '1594489505',
    year: 2007,
    rank: '4',
    title: 'A Thousand Splendid Suns',
    author: 'Khaled Hosseini'
  },
  {
    asin: '0061243582',
    year: 2007,
    rank: '5',
    title: 'The Dangerous Book for Boys',
    author: 'Conn Iggulden'
  },
  {
    asin: '0061251348',
    year: 2007,
    rank: '6',
    title: 'Deceptively Delicious: Simple Secrets to Get Your Kids Eating Good Food',
    author: 'Jessica Seinfeld'
  },
  {
    asin: '0066620996',
    year: 2007,
    rank: '7',
    title: 'Good to Great: Why Some Companies Make the Leap and Others Don\'t',
    author: 'Jim Collins'
  },
  {
    asin: '1565125606',
    year: 2007,
    rank: '8',
    title: 'Water for Elephants: A Novel',
    author: 'Sara Gruen'
  },
  {
    asin: '159562015X',
    year: 2007,
    rank: '9',
    title: 'StrengthsFinder 2.0',
    author: 'Tom Rath'
  },
  {
    asin: '0743292545',
    year: 2007,
    rank: '10',
    title: 'You, on a Diet: The Owner\'s Manual for Waist Management',
    author: 'Michael F. Roizen'
  },
  {
    asin: '0743201140',
    year: 2007,
    rank: '11',
    title: 'Now, Discover Your Strengths',
    author: 'Marcus Buckingham'
  },
  {
    asin: '0743292561',
    year: 2007,
    rank: '12',
    title: 'You: Staying Young: The Owner\'s Manual for Extending Your Warranty',
    author: 'Michael F. Roizen'
  },
  {
    asin: '0143038257',
    year: 2007,
    rank: '13',
    title: 'Three Cups of Tea: One Man\'s Mission to Promote Peace - One School at a Time',
    author: 'Greg Mortenson'
  },
  {
    asin: '0446580503',
    year: 2007,
    rank: '14',
    title: 'I Am America (And So Can You!)',
    author: 'Stephen Colbert'
  },
  {
    asin: '0787960756',
    year: 2007,
    rank: '15',
    title: 'The Five Dysfunctions of a Team: A Leadership Fable',
    author: 'Patrick Lencioni'
  },
  {
    asin: '0307387895',
    year: 2007,
    rank: '16',
    title: 'The Road',
    author: 'Cormac McCarthy'
  },
  {
    asin: '1594480001',
    year: 2007,
    rank: '17',
    title: 'The Kite Runner',
    author: 'Khaled Hosseini'
  },
  {
    asin: '0874477182',
    year: 2007,
    rank: '18',
    title: 'The Official SAT Study Guide: For the New SAT',
    author: 'The College Board'
  },
  {
    asin: '074324754X',
    year: 2007,
    rank: '19',
    title: 'The Glass Castle: A Memoir',
    author: 'Jeannette Walls'
  },
  {
    asin: '1594201315',
    year: 2007,
    rank: '20',
    title: 'The Age of Turbulence: Adventures in a New World',
    author: 'Alan Greenspan'
  },
  {
    asin: '0316160202',
    year: 2007,
    rank: '21',
    title: 'Eclipse (Twilight)',
    author: 'Stephenie Meyer'
  },
  {
    asin: '0743269519',
    year: 2007,
    rank: '22',
    title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0446579807',
    year: 2007,
    rank: '23',
    title: 'God Is Not Great: How Religion Poisons Everything',
    author: 'Christopher Hitchens'
  },
  {
    asin: '074356619X',
    year: 2007,
    rank: '24',
    title: 'The Secret (Unabridged, 4-CD Set)',
    author: 'Rhonda Byrne'
  },
  {
    asin: '0307353133',
    year: 2007,
    rank: '25',
    title: 'The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich',
    author: 'Timothy Ferriss'
  },
  {
    asin: '0316346624',
    year: 2007,
    rank: '26',
    title: 'The Tipping Point: How Little Things Can Make a Big Difference',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0374105235',
    year: 2007,
    rank: '27',
    title: 'A Long Way Gone: Memoirs of a Boy Soldier',
    author: 'Ishmael Beah'
  },
  {
    asin: '0142000280',
    year: 2007,
    rank: '28',
    title: 'Getting Things Done: The Art of Stress-Free Productivity',
    author: 'David Allen'
  },
  {
    asin: '0812968069',
    year: 2007,
    rank: '29',
    title: 'Snow Flower and the Secret Fan: A Novel',
    author: 'Lisa See'
  },
  {
    asin: '0061472573',
    year: 2007,
    rank: '30',
    title: 'Daring Book for Girls, The',
    author: 'Andrea J. Buchanan'
  },
  {
    asin: '0618894640',
    year: 2007,
    rank: '31',
    title: 'The Children of Hurin',
    author: 'J.R.R. Tolkien'
  },
  {
    asin: '1400063515',
    year: 2007,
    rank: '32',
    title: 'The Black Swan: The Impact of the Highly Improbable (Incerto)',
    author: 'Nassim Nicholas Taleb'
  },
  {
    asin: '0399144463',
    year: 2007,
    rank: '33',
    title: 'Who Moved My Cheese?: An Amazing Way to Deal with Change in Your Work and in Your Life',
    author: 'Spencer Johnson'
  },
  {
    asin: '0316067598',
    year: 2007,
    rank: '34',
    title: 'Lone Survivor: The Eyewitness Account of Operation Redwing and the Lost Heroes of SEAL Team 10',
    author: 'Marcus Luttrell'
  },
  {
    asin: '0739360388',
    year: 2007,
    rank: '35',
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K. Rowling'
  },
  {
    asin: '0440238609',
    year: 2007,
    rank: '36',
    title: 'His Dark Materials (Laurel-Leaf)',
    author: 'Philip Pullman'
  },
  {
    asin: '0061234001',
    year: 2007,
    rank: '37',
    title: 'Freakonomics [Revised and Expanded]: A Rogue Economist Explores the Hidden Side of Everything',
    author: 'Steven D. Levitt'
  },
  {
    asin: '0977326403',
    year: 2007,
    rank: '38',
    title: 'Good to Great and the Social Sectors: Why Business Thinking is Not the Answer',
    author: 'Jim Collins'
  },
  {
    asin: '1881273156',
    year: 2007,
    rank: '39',
    title: 'The Five Love Languages: How to Express Heartfelt Commitment to Your Mate',
    author: 'Gary Chapman'
  },
  {
    asin: '1416540660',
    year: 2007,
    rank: '40',
    title: 'The Best Life Diet',
    author: 'Bob Greene'
  },
  {
    asin: '1400096278',
    year: 2007,
    rank: '41',
    title: 'Suite Française',
    author: 'Irène Némirovsky'
  },
  {
    asin: '0374292795',
    year: 2007,
    rank: '42',
    title: 'The World Is Flat [Updated and Expanded]: A Brief History of the Twenty-first Century',
    author: 'Thomas L. Friedman'
  },
  {
    asin: '1401301304',
    year: 2007,
    rank: '43',
    title: 'What Got You Here Won\'t Get You There: How Successful People Become Even More Successful',
    author: 'Marshall Goldsmith'
  },
  {
    asin: '1400064287',
    year: 2007,
    rank: '44',
    title: 'Made to Stick: Why Some Ideas Survive and Others Die',
    author: 'Chip Heath'
  },
  {
    asin: '1414318014',
    year: 2007,
    rank: '45',
    title: 'Quiet Strength: The Principles, Practices, & Priorities of a Winning Life',
    author: 'Tony Dungy'
  },
  {
    asin: '031236198X',
    year: 2007,
    rank: '46',
    title: 'Our Iceberg Is Melting',
    author: 'John Kotter'
  },
  {
    asin: '038551851X',
    year: 2007,
    rank: '47',
    title: 'Clapton: The Autobiography',
    author: 'Eric Clapton'
  },
  {
    asin: '097878510X',
    year: 2007,
    rank: '48',
    title: 'The Weight Loss Cure They Don\'t Want You to Know About',
    author: 'Kevin Trudeau'
  },
  {
    asin: '0743264738',
    year: 2007,
    rank: '49',
    title: 'Einstein: His Life and Universe',
    author: 'Walter Isaacson'
  },
  {
    asin: '0618680004',
    year: 2007,
    rank: '50',
    title: 'The God Delusion',
    author: 'Richard Dawkins'
  },
  {
    asin: '0385519311',
    year: 2007,
    rank: '51',
    title: 'Women & Money: Owning the Power to Control Your Destiny',
    author: 'Suze Orman'
  },
  {
    asin: '0316160199',
    year: 2007,
    rank: '52',
    title: 'New Moon (Twilight)',
    author: 'Stephenie Meyer'
  },
  {
    asin: '0439887453',
    year: 2007,
    rank: '53',
    title: 'Harry Potter Paperback Box Set (Books 1-6)',
    author: 'J.K. Rowling'
  },
  {
    asin: '1416559132',
    year: 2007,
    rank: '54',
    title: 'Rescuing Sprite: A Dog Lover\'s Story of Joy and Anguish',
    author: 'Mark R. Levin'
  },
  {
    asin: '0525950079',
    year: 2007,
    rank: '55',
    title: 'World Without End (Kingsbridge)',
    author: 'Ken Follett'
  },
  {
    asin: '0060852550',
    year: 2007,
    rank: '56',
    title: 'Animal, Vegetable, Miracle: A Year of Food Life',
    author: 'Barbara Kingsolver'
  },
  {
    asin: '193069945X',
    year: 2007,
    rank: '57',
    title: 'A Guide to the Project Management Body of Knowledge, Third Edition (PMBOK Guides)',
    author: 'Project Management…'
  },
  {
    asin: '0071401946',
    year: 2007,
    rank: '58',
    title: 'Crucial Conversations: Tools for Talking When Stakes Are High',
    author: 'Kerry Patterson'
  },
  {
    asin: '1594201226',
    year: 2007,
    rank: '59',
    title: 'The Assault on Reason',
    author: 'Al Gore'
  },
  {
    asin: '1557987912',
    year: 2007,
    rank: '60',
    title: 'Publication Manual of the American Psychological Association',
    author: 'American…'
  },
  {
    asin: '0316010669',
    year: 2007,
    rank: '61',
    title: 'Blink: The Power of Thinking Without Thinking',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '1416552197',
    year: 2007,
    rank: '62',
    title: 'An Inconvenient Book: Real Solutions to the World\'s Biggest Problems',
    author: 'Glenn Beck'
  },
  {
    asin: '0143037145',
    year: 2007,
    rank: '63',
    title: 'The Memory Keeper\'s Daughter: A Novel',
    author: 'Kim Edwards'
  },
  {
    asin: '0061357901',
    year: 2007,
    rank: '64',
    title: 'The Measure of a Man: A Spiritual Autobiography (Oprah\'s Book Club)',
    author: 'Sidney Poitier'
  },
  {
    asin: '0743289684',
    year: 2007,
    rank: '65',
    title: 'Infidel',
    author: 'Ayaan Hirsi Ali'
  },
  {
    asin: '0312349491',
    year: 2007,
    rank: '66',
    title: 'Lean Mean Thirteen: A Stephanie Plum Novel',
    author: 'Janet Evanovich'
  },
  {
    asin: '1401303277',
    year: 2007,
    rank: '67',
    title: 'For One More Day',
    author: 'Mitch Albom'
  },
  {
    asin: '0451225244',
    year: 2007,
    rank: '68',
    title: 'The Pillars of the Earth (Deluxe Edition) (Oprah\'s Book Club)',
    author: 'Ken Follett'
  },
  {
    asin: '0973224002',
    year: 2007,
    rank: '69',
    title: 'Law of Attraction: The Science of Attracting More of What You Want and Less of What You Don\'t',
    author: 'Michael J. Losier'
  },
  {
    asin: '0312427735',
    year: 2007,
    rank: '70',
    title: 'Middlesex: A Novel (Oprah\'s Book Club)',
    author: 'Jeffrey Eugenides'
  },
  {
    asin: '0385516401',
    year: 2007,
    rank: '71',
    title: 'The Nine: Inside the Secret World of the Supreme Court',
    author: 'Jeffrey Toobin'
  },
  {
    asin: '0307389731',
    year: 2007,
    rank: '72',
    title: 'Love in the Time of Cholera (Oprah\'s Book Club)',
    author: 'Gabriel Garcia…'
  },
  {
    asin: '0800759494',
    year: 2007,
    rank: '73',
    title: '90 Minutes in Heaven: A True Story of Death and Life',
    author: 'Don Piper'
  },
  {
    asin: '0618610030',
    year: 2007,
    rank: '74',
    title: 'How Doctors Think',
    author: 'Jerome Groopman'
  },
  {
    asin: '0761121323',
    year: 2007,
    rank: '75',
    title: 'What to Expect When You\'re Expecting',
    author: 'Heidi Murkoff'
  },
  {
    asin: '0743496728',
    year: 2007,
    rank: '76',
    title: 'Nineteen Minutes: A Novel',
    author: 'Jodi Picoult'
  },
  {
    asin: '0976570904',
    year: 2007,
    rank: '77',
    title: 'The Official Guide for GMAT Review, 11th Edition',
    author: 'Graduate Management…'
  },
  {
    asin: '0553384090',
    year: 2007,
    rank: '78',
    title: 'The Wisdom of Menopause: Creating Physical and Emotional Health and Healing During the Change, Revised Edition',
    author: 'Christiane Northrup'
  },
  {
    asin: '0743296885',
    year: 2007,
    rank: '79',
    title: 'Become a Better You: 7 Keys to Improving Your Life Every Day',
    author: 'Joel Osteen'
  },
  {
    asin: '0312347294',
    year: 2007,
    rank: '80',
    title: 'The World Without Us',
    author: 'Alan Weisman'
  },
  {
    asin: '0786866020',
    year: 2007,
    rank: '81',
    title: 'Fish: A Proven Way to Boost Morale and Improve Results',
    author: 'Stephen C. Lundin'
  },
  {
    asin: '0007149824',
    year: 2007,
    rank: '82',
    title: 'The Yiddish Policemen\'s Union',
    author: 'Michael Chabon'
  },
  {
    asin: '0307237699',
    year: 2007,
    rank: '83',
    title: 'The Audacity of Hope: Thoughts on Reclaiming the American Dream',
    author: 'Barack Obama'
  },
  {
    asin: '038549422X',
    year: 2007,
    rank: '84',
    title: 'The Freedom Writers Diary: How a Teacher and 150 Teens Used Writing to Change Themselves and the World Around Them',
    author: 'The Freedom Writers'
  },
  {
    asin: '047007499X',
    year: 2007,
    rank: '85',
    title: 'The Only Three Questions That Count: Investing by Knowing What Others Don\'t',
    author: 'Ken Fisher'
  },
  {
    asin: '0545029376',
    year: 2007,
    rank: '86',
    title: 'Harry Potter and the Deathly Hallows (Book 7) (Deluxe Edition)',
    author: 'J. K. Rowling'
  },
  {
    asin: '0060765313',
    year: 2007,
    rank: '87',
    title: 'YOU: The Owner\'s Manual',
    author: 'Michael F. Roizen'
  },
  {
    asin: '0609610570',
    year: 2007,
    rank: '88',
    title: 'Execution: The Discipline of Getting Things Done',
    author: 'Larry Bossidy'
  },
  {
    asin: '0762424931',
    year: 2007,
    rank: '89',
    title: 'Skinny Bitch: A No-Nonsense, Tough-Love Guide for Savvy Girls Who Want To Stop Eating Crap and Start Looking Fabulous!',
    author: 'Rory Freedman'
  },
  {
    asin: '0446310786',
    year: 2007,
    rank: '90',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    asin: '0385523416',
    year: 2007,
    rank: '91',
    title: 'Jesus of Nazareth: From the Baptism in the Jordan to the Transfiguration',
    author: 'Pope Benedict XVI'
  },
  {
    asin: '0060565551',
    year: 2007,
    rank: '92',
    title: 'My Grandfather\'s Son: A Memoir',
    author: 'Clarence Thomas'
  },
  {
    asin: '1401911846',
    year: 2007,
    rank: '93',
    title: 'Change Your Thoughts - Change Your Life: Living the Wisdom of the Tao',
    author: 'Dr. Wayne W. Dyer'
  },
  {
    asin: '0307264556',
    year: 2007,
    rank: '94',
    title: 'I Feel Bad About My Neck: And Other Thoughts on Being a Woman',
    author: 'Nora Ephron'
  },
  {
    asin: '0140157352',
    year: 2007,
    rank: '95',
    title: 'Getting to Yes: Negotiating Agreement Without Giving In',
    author: 'Roger Fisher'
  },
  {
    asin: '1400040817',
    year: 2007,
    rank: '96',
    title: 'Musicophilia: Tales of Music and the Brain',
    author: 'Oliver Sacks'
  },
  {
    asin: '0446677450',
    year: 2007,
    rank: '97',
    title: 'Rich Dad, Poor Dad: What the Rich Teach Their Kids About Money--That the Poor and Middle Class Do Not!',
    author: 'Robert T. Kiyosaki'
  },
  {
    asin: '0316015059',
    year: 2007,
    rank: '98',
    title: 'Double Cross (Alex Cross Novels)',
    author: 'James Patterson'
  },
  {
    asin: '0374500010',
    year: 2007,
    rank: '99',
    title: 'Night (Night)',
    author: 'Elie Wiesel'
  },
  {
    asin: '0385520379',
    year: 2007,
    rank: '100',
    title: 'Mother Teresa: Come Be My Light - The Private Writings of the Saint of Calcutta',
    author: 'Mother Teresa'
  },
  {
    asin: '0452289963',
    year: 2008,
    rank: '1',
    title: 'A New Earth: Awakening to Your Life\'s Purpose (Oprah\'s Book Club, Selection 61)',
    author: 'Eckhart Tolle'
  },
  {
    asin: '031606792X',
    year: 2008,
    rank: '2',
    title: 'Breaking Dawn (The Twilight Saga, Book 4)',
    author: 'Stephenie Meyer'
  },
  {
    asin: '0964729237',
    year: 2008,
    rank: '3',
    title: 'The Shack: Where Tragedy Confronts Eternity',
    author: 'William P. Young'
  },
  {
    asin: '1401323251',
    year: 2008,
    rank: '4',
    title: 'The Last Lecture',
    author: 'Randy Pausch'
  },
  {
    asin: '0545128285',
    year: 2008,
    rank: '5',
    title: 'The Tales of Beedle the Bard, Standard Edition (Harry Potter)',
    author: 'J. K. Rowling'
  },
  {
    asin: '0316160202',
    year: 2008,
    rank: '6',
    title: 'Eclipse (Twilight)',
    author: 'Stephenie Meyer'
  },
  {
    asin: '0316015849',
    year: 2008,
    rank: '7',
    title: 'Twilight (The Twilight Saga, Book 1)',
    author: 'Stephenie Meyer'
  },
  {
    asin: '0316024961',
    year: 2008,
    rank: '8',
    title: 'New Moon (The Twilight Saga)',
    author: 'Stephenie Meyer'
  },
  {
    asin: '159562015X',
    year: 2008,
    rank: '9',
    title: 'StrengthsFinder 2.0',
    author: 'Tom Rath'
  },
  {
    asin: '0143038257',
    year: 2008,
    rank: '10',
    title: 'Three Cups of Tea: One Man\'s Mission to Promote Peace - One School at a Time',
    author: 'Greg Mortenson'
  },
  {
    asin: '0375826726',
    year: 2008,
    rank: '11',
    title: 'Brisingr (Inheritance, Book 3) (The Inheritance Cycle)',
    author: 'Christopher Paolini'
  },
  {
    asin: '1594868549',
    year: 2008,
    rank: '12',
    title: 'Eat This, Not That! Thousands of Simple Food Swaps that Can Save You 10, 20, 30 Pounds--or More!',
    author: 'David Zinczenko'
  },
  {
    asin: '0066620996',
    year: 2008,
    rank: '13',
    title: 'Good to Great: Why Some Companies Make the Leap and Others Don\'t',
    author: 'Jim Collins'
  },
  {
    asin: '0143038419',
    year: 2008,
    rank: '14',
    title: 'Eat, Pray, Love: One Woman\'s Search for Everything Across Italy, India and Indonesia',
    author: 'Elizabeth Gilbert'
  },
  {
    asin: '0316160199',
    year: 2008,
    rank: '15',
    title: 'New Moon (Twilight)',
    author: 'Stephenie Meyer'
  },
  {
    asin: '1577314808',
    year: 2008,
    rank: '16',
    title: 'The Power of Now: A Guide to Spiritual Enlightenment',
    author: 'Eckhart Tolle'
  },
  {
    asin: '0316017922',
    year: 2008,
    rank: '17',
    title: 'Outliers: The Story of Success',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0787960756',
    year: 2008,
    rank: '18',
    title: 'The Five Dysfunctions of a Team: A Leadership Fable',
    author: 'Patrick Lencioni'
  },
  {
    asin: '1582701709',
    year: 2008,
    rank: '19',
    title: 'The Secret',
    author: 'Rhonda Byrne'
  },
  {
    asin: '1400082773',
    year: 2008,
    rank: '20',
    title: 'Dreams from My Father: A Story of Race and Inheritance',
    author: 'Barack Obama'
  },
  {
    asin: '0374166854',
    year: 2008,
    rank: '21',
    title: 'Hot, Flat, and Crowded: Why We Need a Green Revolution--and How It Can Renew America',
    author: 'Thomas L. Friedman'
  },
  {
    asin: '0874477182',
    year: 2008,
    rank: '22',
    title: 'The Official SAT Study Guide: For the New SAT',
    author: 'The College Board'
  },
  {
    asin: '0061768065',
    year: 2008,
    rank: '23',
    title: 'The Story of Edgar Sawtelle: A Novel (Oprah Book Club #62)',
    author: 'David Wroblewski'
  },
  {
    asin: '0316031844',
    year: 2008,
    rank: '24',
    title: 'The Twilight Saga Collection',
    author: 'Stephenie Meyer'
  },
  {
    asin: '0743201140',
    year: 2008,
    rank: '25',
    title: 'Now, Discover Your Strengths',
    author: 'Marcus Buckingham'
  },
  {
    asin: '0930289234',
    year: 2008,
    rank: '26',
    title: 'Watchmen',
    author: 'Alan Moore'
  },
  {
    asin: '0316068047',
    year: 2008,
    rank: '27',
    title: 'The Host',
    author: 'Stephenie Meyer'
  },
  {
    asin: '1594489505',
    year: 2008,
    rank: '28',
    title: 'A Thousand Splendid Suns',
    author: 'Khaled Hosseini'
  },
  {
    asin: '0743269519',
    year: 2008,
    rank: '29',
    title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
    author: 'Stephen R. Covey'
  },
  {
    asin: '1565125606',
    year: 2008,
    rank: '30',
    title: 'Water for Elephants: A Novel',
    author: 'Sara Gruen'
  },
  {
    asin: '0307455874',
    year: 2008,
    rank: '31',
    title: 'The Audacity of Hope: Thoughts on Reclaiming the American Dream (Vintage)',
    author: 'Barack Obama'
  },
  {
    asin: '1594201455',
    year: 2008,
    rank: '32',
    title: 'In Defense of Food: An Eater\'s Manifesto',
    author: 'Michael Pollan'
  },
  {
    asin: '0316143472',
    year: 2008,
    rank: '33',
    title: 'When You Are Engulfed in Flames',
    author: 'David Sedaris'
  },
  {
    asin: '0553805096',
    year: 2008,
    rank: '34',
    title: 'The Snowball: Warren Buffett and the Business of Life',
    author: 'Alice Schroeder'
  },
  {
    asin: '0143038583',
    year: 2008,
    rank: '35',
    title: 'The Omnivore\'s Dilemma: A Natural History of Four Meals',
    author: 'Michael Pollan'
  },
  {
    asin: '0316160172',
    year: 2008,
    rank: '36',
    title: 'Twilight',
    author: 'Stephenie Meyer'
  },
  {
    asin: '0812929985',
    year: 2008,
    rank: '37',
    title: 'Change Your Brain, Change Your Life: The Breakthrough Program for Conquering Anxiety, Depression, Obsessiveness, Anger, and Impulsiveness',
    author: 'Daniel G. Amen'
  },
  {
    asin: '0446537519',
    year: 2008,
    rank: '38',
    title: 'The Revolution: A Manifesto',
    author: 'Ron Paul'
  },
  {
    asin: '0142000280',
    year: 2008,
    rank: '39',
    title: 'Getting Things Done: The Art of Stress-Free Productivity',
    author: 'David Allen'
  },
  {
    asin: '0805448853',
    year: 2008,
    rank: '40',
    title: 'The Love Dare',
    author: 'Stephen Kendrick'
  },
  {
    asin: '0385515049',
    year: 2008,
    rank: '41',
    title: 'The Appeal',
    author: 'John Grisham'
  },
  {
    asin: '1881273156',
    year: 2008,
    rank: '42',
    title: 'The Five Love Languages: How to Express Heartfelt Commitment to Your Mate',
    author: 'Gary Chapman'
  },
  {
    asin: '0399144463',
    year: 2008,
    rank: '43',
    title: 'Who Moved My Cheese?: An Amazing Way to Deal with Change in Your Work and in Your Life',
    author: 'Spencer Johnson'
  },
  {
    asin: '0446407410',
    year: 2008,
    rank: '44',
    title: 'Dewey: The Small-Town Library Cat Who Touched the World',
    author: 'Vicki Myron'
  },
  {
    asin: '141659485X',
    year: 2008,
    rank: '45',
    title: 'The Christmas Sweater',
    author: 'Glenn Beck'
  },
  {
    asin: '0312377428',
    year: 2008,
    rank: '46',
    title: 'Hungry Girl: Recipes and Survival Strategies for Guilt-Free Eating in the Real World',
    author: 'Lisa Lillien'
  },
  {
    asin: '039306235X',
    year: 2008,
    rank: '47',
    title: 'The Post-American World',
    author: 'Fareed Zakaria'
  },
  {
    asin: '1400054354',
    year: 2008,
    rank: '48',
    title: 'Barefoot Contessa Back to Basics: Fabulous Flavor from Simple Ingredients',
    author: 'Ina Garten'
  },
  {
    asin: '1557987912',
    year: 2008,
    rank: '49',
    title: 'Publication Manual of the American Psychological Association',
    author: 'American…'
  },
  {
    asin: '1400063256',
    year: 2008,
    rank: '50',
    title: 'American Lion: Andrew Jackson in the White House',
    author: 'Jon Meacham'
  },
  {
    asin: '0307353133',
    year: 2008,
    rank: '51',
    title: 'The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich',
    author: 'Timothy Ferriss'
  },
  {
    asin: '0385340990',
    year: 2008,
    rank: '52',
    title: 'The Guernsey Literary and Potato Peel Pie Society: A Novel',
    author: 'Annie Barrows'
  },
  {
    asin: '0316346624',
    year: 2008,
    rank: '53',
    title: 'The Tipping Point: How Little Things Can Make a Big Difference',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '1594480001',
    year: 2008,
    rank: '54',
    title: 'The Kite Runner',
    author: 'Khaled Hosseini'
  },
  {
    asin: '0956010903',
    year: 2008,
    rank: '55',
    title: 'The Tales of Beedle the Bard, Collector\'s Edition (Offered Exclusively by Amazon)',
    author: 'J. K. Rowling'
  },
  {
    asin: '0743270754',
    year: 2008,
    rank: '56',
    title: 'Team of Rivals: The Political Genius of Abraham Lincoln',
    author: 'Doris Kearns Goodwin'
  },
  {
    asin: '0061374229',
    year: 2008,
    rank: '57',
    title: 'The Story of Edgar Sawtelle: A Novel',
    author: 'David Wroblewski'
  },
  {
    asin: '1594481717',
    year: 2008,
    rank: '58',
    title: 'A Whole New Mind: Why Right-Brainers Will Rule the Future',
    author: 'Daniel H. Pink'
  },
  {
    asin: '0071401946',
    year: 2008,
    rank: '59',
    title: 'Crucial Conversations: Tools for Talking When Stakes Are High',
    author: 'Kerry Patterson'
  },
  {
    asin: '0525950494',
    year: 2008,
    rank: '60',
    title: 'The Reason for God: Belief in an Age of Skepticism',
    author: 'Timothy Keller'
  },
  {
    asin: '0307265730',
    year: 2008,
    rank: '61',
    title: 'Unaccustomed Earth',
    author: 'Jhumpa Lahiri'
  },
  {
    asin: '0385511841',
    year: 2008,
    rank: '62',
    title: 'Liberal Fascism: The Secret History of the American Left, From Mussolini to the Politics of Meaning',
    author: 'Jonah Goldberg'
  },
  {
    asin: '0385526563',
    year: 2008,
    rank: '63',
    title: 'Too Fat to Fish',
    author: 'Artie Lange'
  },
  {
    asin: '0307387895',
    year: 2008,
    rank: '64',
    title: 'The Road',
    author: 'Cormac McCarthy'
  },
  {
    asin: '031236198X',
    year: 2008,
    rank: '65',
    title: 'Our Iceberg Is Melting',
    author: 'John Kotter'
  },
  {
    asin: '0307237702',
    year: 2008,
    rank: '66',
    title: 'The Audacity of Hope: Thoughts on Reclaiming the American Dream',
    author: 'Barack Obama'
  },
  {
    asin: '0312349513',
    year: 2008,
    rank: '67',
    title: 'Fearless Fourteen',
    author: 'Janet Evanovich'
  },
  {
    asin: '193069945X',
    year: 2008,
    rank: '68',
    title: 'A Guide to the Project Management Body of Knowledge, Third Edition (PMBOK Guides)',
    author: 'Project Management…'
  },
  {
    asin: '0761148574',
    year: 2008,
    rank: '69',
    title: 'What to Expect When You\'re Expecting',
    author: 'Heidi Murkoff'
  },
  {
    asin: '0977326403',
    year: 2008,
    rank: '70',
    title: 'Good to Great and the Social Sectors: Why Business Thinking is Not the Answer',
    author: 'Jim Collins'
  },
  {
    asin: '0762424931',
    year: 2008,
    rank: '71',
    title: 'Skinny Bitch: A No-Nonsense, Tough-Love Guide for Savvy Girls Who Want To Stop Eating Crap and Start Looking Fabulous!',
    author: 'Rory Freedman'
  },
  {
    asin: '0061547751',
    year: 2008,
    rank: '72',
    title: 'Fleeced: How Barack Obama, Media Mockery of Terrorist Threats, Liberals Who Want to Kill Talk Radio, the Do-Nothing Congress, Companies That Help Iran, and Washington Lobbyists for Foreign Governments Are Scamming Us ... and What to Do About It',
    author: 'Dick Morris'
  },
  {
    asin: '1416954120',
    year: 2008,
    rank: '73',
    title: 'Are You There, Vodka? It\'s Me, Chelsea',
    author: 'Chelsea Handler'
  },
  {
    asin: '1400063515',
    year: 2008,
    rank: '74',
    title: 'The Black Swan: The Impact of the Highly Improbable (Incerto)',
    author: 'Nassim Nicholas Taleb'
  },
  {
    asin: '006135323X',
    year: 2008,
    rank: '75',
    title: 'Predictably Irrational: The Hidden Forces That Shape Our Decisions',
    author: 'Dan Ariely'
  },
  {
    asin: '030726646X',
    year: 2008,
    rank: '76',
    title: 'Audition: A Memoir',
    author: 'Barbara Walters'
  },
  {
    asin: '1586485563',
    year: 2008,
    rank: '77',
    title: 'What Happened: Inside the Bush White House and Washington\'s Culture of Deception',
    author: 'Scott McClellan'
  },
  {
    asin: '0743292561',
    year: 2008,
    rank: '78',
    title: 'You: Staying Young: The Owner\'s Manual for Extending Your Warranty',
    author: 'Michael F. Roizen'
  },
  {
    asin: '074324754X',
    year: 2008,
    rank: '79',
    title: 'The Glass Castle: A Memoir',
    author: 'Jeannette Walls'
  },
  {
    asin: '0312425074',
    year: 2008,
    rank: '80',
    title: 'The World Is Flat 3.0: A Brief History of the Twenty-first Century',
    author: 'Thomas L. Friedman'
  },
  {
    asin: '0810994739',
    year: 2008,
    rank: '81',
    title: 'Diary of a Wimpy Kid Rodrick Rules',
    author: 'Jeff Kinney'
  },
  {
    asin: '1416950737',
    year: 2008,
    rank: '82',
    title: 'Stori Telling',
    author: 'Tori Spelling'
  },
  {
    asin: '0671027034',
    year: 2008,
    rank: '83',
    title: 'How to Win Friends & Influence People',
    author: 'Dale Carnegie'
  },
  {
    asin: '0670020745',
    year: 2008,
    rank: '84',
    title: 'My Stroke of Insight: A Brain Scientist\'s Personal Journey',
    author: 'Jill Bolte Taylor'
  },
  {
    asin: '0451207149',
    year: 2008,
    rank: '85',
    title: 'The Pillars of the Earth',
    author: 'Ken Follett'
  },
  {
    asin: '0316043133',
    year: 2008,
    rank: '86',
    title: 'Twilight: The Complete Illustrated Movie Companion',
    author: 'Mark Cotta Vaz'
  },
  {
    asin: '0976570904',
    year: 2008,
    rank: '87',
    title: 'The Official Guide for GMAT Review, 11th Edition',
    author: 'Graduate Management…'
  },
  {
    asin: '0307387178',
    year: 2008,
    rank: '88',
    title: 'Into the Wild',
    author: 'Jon Krakauer'
  },
  {
    asin: '0375842209',
    year: 2008,
    rank: '89',
    title: 'The Book Thief',
    author: 'Markus Zusak'
  },
  {
    asin: '1400064287',
    year: 2008,
    rank: '90',
    title: 'Made to Stick: Why Some Ideas Survive and Others Die',
    author: 'Chip Heath'
  },
  {
    asin: '1401301304',
    year: 2008,
    rank: '91',
    title: 'What Got You Here Won\'t Get You There: How Successful People Become Even More Successful',
    author: 'Marshall Goldsmith'
  },
  {
    asin: '1423101464',
    year: 2008,
    rank: '92',
    title: 'The Battle of the Labyrinth (Percy Jackson and the Olympians, Book 4)',
    author: 'Rick Riordan'
  },
  {
    asin: '1416549005',
    year: 2008,
    rank: '93',
    title: 'The SPEED of TRUST: The One Thing That Changes Everything',
    author: 'Stephen M .R. Covey'
  },
  {
    asin: '0061251348',
    year: 2008,
    rank: '94',
    title: 'Deceptively Delicious: Simple Secrets to Get Your Kids Eating Good Food',
    author: 'Jessica Seinfeld'
  },
  {
    asin: '0446579939',
    year: 2008,
    rank: '95',
    title: 'The Lucky One',
    author: 'Nicholas Sparks'
  },
  {
    asin: '0061243582',
    year: 2008,
    rank: '96',
    title: 'The Dangerous Book for Boys',
    author: 'Conn Iggulden'
  },
  {
    asin: '0061122416',
    year: 2008,
    rank: '97',
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    asin: '0061234001',
    year: 2008,
    rank: '98',
    title: 'Freakonomics [Revised and Expanded]: A Rogue Economist Explores the Hidden Side of Everything',
    author: 'Steven D. Levitt'
  },
  {
    asin: '0345495004',
    year: 2008,
    rank: '99',
    title: 'Loving Frank: A Novel',
    author: 'Nancy Horan'
  },
  {
    asin: '0451225244',
    year: 2008,
    rank: '100',
    title: 'The Pillars of the Earth (Deluxe Edition) (Oprah\'s Book Club)',
    author: 'Ken Follett'
  },
  {
    asin: '0385504225',
    year: 2009,
    rank: '1',
    title: 'The Lost Symbol',
    author: 'Dan Brown'
  },
  {
    asin: '0964729237',
    year: 2009,
    rank: '2',
    title: 'The Shack: Where Tragedy Confronts Eternity',
    author: 'William P. Young'
  },
  {
    asin: '1416562850',
    year: 2009,
    rank: '3',
    title: 'Liberty and Tyranny: A Conservative Manifesto',
    author: 'Mark R. Levin'
  },
  {
    asin: '031606792X',
    year: 2009,
    rank: '4',
    title: 'Breaking Dawn (The Twilight Saga, Book 4)',
    author: 'Stephenie Meyer'
  },
  {
    asin: '0061939897',
    year: 2009,
    rank: '5',
    title: 'Going Rogue: An American Life',
    author: 'Sarah Palin'
  },
  {
    asin: '159562015X',
    year: 2009,
    rank: '6',
    title: 'StrengthsFinder 2.0',
    author: 'Tom Rath'
  },
  {
    asin: '0399155341',
    year: 2009,
    rank: '7',
    title: 'The Help',
    author: 'Kathryn Stockett'
  },
  {
    asin: '0316024961',
    year: 2009,
    rank: '8',
    title: 'New Moon (The Twilight Saga)',
    author: 'Stephenie Meyer'
  },
  {
    asin: '0316031844',
    year: 2009,
    rank: '9',
    title: 'The Twilight Saga Collection',
    author: 'Stephenie Meyer'
  },
  {
    asin: '0316017922',
    year: 2009,
    rank: '10',
    title: 'Outliers: The Story of Success',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0316160202',
    year: 2009,
    rank: '11',
    title: 'Eclipse (Twilight)',
    author: 'Stephenie Meyer'
  },
  {
    asin: '0316015849',
    year: 2009,
    rank: '12',
    title: 'Twilight (The Twilight Saga, Book 1)',
    author: 'Stephenie Meyer'
  },
  {
    asin: '1439168571',
    year: 2009,
    rank: '13',
    title: 'Glenn Beck\'s Common Sense: The Case Against an Out-of-Control Government, Inspired by Thomas Paine',
    author: 'Glenn Beck'
  },
  {
    asin: '0143038257',
    year: 2009,
    rank: '14',
    title: 'Three Cups of Tea: One Man\'s Mission to Promote Peace - One School at a Time',
    author: 'Greg Mortenson'
  },
  {
    asin: '0805448853',
    year: 2009,
    rank: '15',
    title: 'The Love Dare',
    author: 'Stephen Kendrick'
  },
  {
    asin: '0061728977',
    year: 2009,
    rank: '16',
    title: 'Act Like a Lady, Think Like a Man: What Men Really Think About Love, Relationships, Intimacy, and Commitment',
    author: 'Steve Harvey'
  },
  {
    asin: '0810983915',
    year: 2009,
    rank: '17',
    title: 'Dog Days  (Diary of a Wimpy Kid, Book 4)',
    author: 'Jeff Kinney'
  },
  {
    asin: '1439148503',
    year: 2009,
    rank: '18',
    title: 'Under the Dome: A Novel',
    author: 'Stephen King'
  },
  {
    asin: '0810970686',
    year: 2009,
    rank: '19',
    title: 'Diary of a Wimpy Kid: The Last Straw (Book 3)',
    author: 'Jeff Kinney'
  },
  {
    asin: '0385341008',
    year: 2009,
    rank: '20',
    title: 'The Guernsey Literary and Potato Peel Pie Society',
    author: 'Annie Barrows'
  },
  {
    asin: '1605298387',
    year: 2009,
    rank: '21',
    title: 'Eat This Not That! Supermarket Survival Guide: The No-Diet Weight Loss Solution',
    author: 'David Zinczenko'
  },
  {
    asin: '1416595015',
    year: 2009,
    rank: '22',
    title: 'Arguing with Idiots: How to Stop Small Minds and Big Government',
    author: 'Glenn Beck'
  },
  {
    asin: '0375413405',
    year: 2009,
    rank: '23',
    title: 'Mastering the Art of French Cooking, Vol. 1',
    author: 'Julia Child'
  },
  {
    asin: '0441017770',
    year: 2009,
    rank: '24',
    title: 'Sookie Stackhouse Dead Until Dark; Living Dead in Dallas; Club Dead; Dead to the World; Dead as a Doornail; Definitely Dead; All Together Dead',
    author: 'Charlaine Harris'
  },
  {
    asin: '015602943X',
    year: 2009,
    rank: '25',
    title: 'The Time Traveler\'s Wife',
    author: 'Audrey Niffenegger'
  },
  {
    asin: '1433805618',
    year: 2009,
    rank: '26',
    title: 'Publication Manual of the American Psychological Association, 6th Edition',
    author: 'American…'
  },
  {
    asin: '0446539252',
    year: 2009,
    rank: '27',
    title: 'True Compass: A Memoir',
    author: 'Edward M. Kennedy'
  },
  {
    asin: '0307454541',
    year: 2009,
    rank: '28',
    title: 'The Girl with the Dragon Tattoo (Millennium Series)',
    author: 'Stieg Larsson'
  },
  {
    asin: '0880801484',
    year: 2009,
    rank: '29',
    title: 'The 5000 Year Leap',
    author: 'W. Cleon Skousen'
  },
  {
    asin: '0066620996',
    year: 2009,
    rank: '30',
    title: 'Good to Great: Why Some Companies Make the Leap and Others Don\'t',
    author: 'Jim Collins'
  },
  {
    asin: '0316027650',
    year: 2009,
    rank: '31',
    title: 'Eclipse (Twilight Sagas)',
    author: 'Stephenie Meyer'
  },
  {
    asin: '0060254920',
    year: 2009,
    rank: '32',
    title: 'Where the Wild Things Are',
    author: 'Maurice Sendak'
  },
  {
    asin: '0787960756',
    year: 2009,
    rank: '33',
    title: 'The Five Dysfunctions of a Team: A Leadership Fable',
    author: 'Patrick Lencioni'
  },
  {
    asin: '0812971833',
    year: 2009,
    rank: '34',
    title: 'Olive Kitteridge',
    author: 'Elizabeth Strout'
  },
  {
    asin: '0441017150',
    year: 2009,
    rank: '35',
    title: 'Dead And Gone: A Sookie Stackhouse Novel (Sookie Stackhouse/True Blood)',
    author: 'Charlaine Harris'
  },
  {
    asin: '1594868549',
    year: 2009,
    rank: '36',
    title: 'Eat This, Not That! Thousands of Simple Food Swaps that Can Save You 10, 20, 30 Pounds--or More!',
    author: 'David Zinczenko'
  },
  {
    asin: '0060889578',
    year: 2009,
    rank: '37',
    title: 'Super Freakonomics: Global Cooling, Patriotic Prostitutes, and Why Suicide Bombers Should Buy Life Insurance',
    author: 'Steven D. Levitt'
  },
  {
    asin: '0316346624',
    year: 2009,
    rank: '38',
    title: 'The Tipping Point: How Little Things Can Make a Big Difference',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '1434768511',
    year: 2009,
    rank: '39',
    title: 'Crazy Love: Overwhelmed by a Relentless God',
    author: 'Francis Chan'
  },
  {
    asin: '1423101472',
    year: 2009,
    rank: '40',
    title: 'The Last Olympian (Percy Jackson and the Olympians, Book 5)',
    author: 'Rick Riordan'
  },
  {
    asin: '1933372605',
    year: 2009,
    rank: '41',
    title: 'The Elegance of the Hedgehog',
    author: 'Muriel Barbery'
  },
  {
    asin: '0316018783',
    year: 2009,
    rank: '42',
    title: 'I, Alex Cross',
    author: 'James Patterson'
  },
  {
    asin: '0307269981',
    year: 2009,
    rank: '43',
    title: 'The Girl Who Played with Fire (Millennium )',
    author: 'Stieg Larsson'
  },
  {
    asin: '1401323251',
    year: 2009,
    rank: '44',
    title: 'The Last Lecture',
    author: 'Randy Pausch'
  },
  {
    asin: '1881273156',
    year: 2009,
    rank: '45',
    title: 'The Five Love Languages: How to Express Heartfelt Commitment to Your Mate',
    author: 'Gary Chapman'
  },
  {
    asin: '0930289234',
    year: 2009,
    rank: '46',
    title: 'Watchmen',
    author: 'Alan Moore'
  },
  {
    asin: '0743269519',
    year: 2009,
    rank: '47',
    title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
    author: 'Stephen R. Covey'
  },
  {
    asin: '034551176X',
    year: 2009,
    rank: '48',
    title: 'The Book of Basketball: The NBA According to The Sports Guy',
    author: 'Bill Simmons'
  },
  {
    asin: '143917766X',
    year: 2009,
    rank: '49',
    title: 'Divine Soul Mind Body Healing and Transmission System: The Divine Way to Heal You, Humanity, Mother Earth, and All Universes',
    author: 'Zhi Gang Sha'
  },
  {
    asin: '0786868724',
    year: 2009,
    rank: '50',
    title: 'Have a Little Faith: A True Story',
    author: 'Mitch Albom'
  },
  {
    asin: '0810979772',
    year: 2009,
    rank: '51',
    title: 'Diary of a Wimpy Kid Do-It-Yourself Book',
    author: 'Jeff Kinney'
  },
  {
    asin: '0307268195',
    year: 2009,
    rank: '52',
    title: 'Open: An Autobiography',
    author: 'Andre Agassi'
  },
  {
    asin: '1594743347',
    year: 2009,
    rank: '53',
    title: 'Pride and Prejudice and Zombies: The Classic Regency Romance - Now with Ultraviolent Zombie Mayhem!',
    author: 'Jane Austen'
  },
  {
    asin: '1401341136',
    year: 2009,
    rank: '54',
    title: 'Cook Yourself Thin: Skinny Meals You Can Make in Minutes',
    author: 'Lifetime Television'
  },
  {
    asin: '0312556179',
    year: 2009,
    rank: '55',
    title: 'Hungry Girl: 200 Under 200: 200 Recipes Under 200 Calories',
    author: 'Lisa Lillien'
  },
  {
    asin: '0307266303',
    year: 2009,
    rank: '56',
    title: 'Born to Run: A Hidden Tribe, Superathletes, and the Greatest Race the World Has Never Seen',
    author: 'Christopher McDougall'
  },
  {
    asin: '0767928822',
    year: 2009,
    rank: '57',
    title: 'A Bold Fresh Piece of Humanity',
    author: 'Bill O\'Reilly'
  },
  {
    asin: '0061658197',
    year: 2009,
    rank: '58',
    title: 'The Pioneer Woman Cooks: Recipes from an Accidental Country Girl',
    author: 'Ree Drummond'
  },
  {
    asin: '0375842209',
    year: 2009,
    rank: '59',
    title: 'The Book Thief',
    author: 'Markus Zusak'
  },
  {
    asin: '038541305X',
    year: 2009,
    rank: '60',
    title: 'South of Broad',
    author: 'Pat Conroy'
  },
  {
    asin: '0810994739',
    year: 2009,
    rank: '61',
    title: 'Diary of a Wimpy Kid Rodrick Rules',
    author: 'Jeff Kinney'
  },
  {
    asin: '0143038583',
    year: 2009,
    rank: '62',
    title: 'The Omnivore\'s Dilemma: A Natural History of Four Meals',
    author: 'Michael Pollan'
  },
  {
    asin: '0316068047',
    year: 2009,
    rank: '63',
    title: 'The Host',
    author: 'Stephenie Meyer'
  },
  {
    asin: '0307450732',
    year: 2009,
    rank: '64',
    title: 'Master Your Metabolism: The 3 Diet Secrets to Naturally Balancing Your Hormones for a Hot and Healthy Body!',
    author: 'Jillian Michaels'
  },
  {
    asin: '0385532458',
    year: 2009,
    rank: '65',
    title: 'Ford County: Stories',
    author: 'John Grisham'
  },
  {
    asin: '1596981091',
    year: 2009,
    rank: '66',
    title: 'Culture of Corruption: Obama and His Team of Tax Cheats, Crooks, and Cronies',
    author: 'Michelle Malkin'
  },
  {
    asin: '0316010669',
    year: 2009,
    rank: '67',
    title: 'Blink: The Power of Thinking Without Thinking',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0810993139',
    year: 2009,
    rank: '68',
    title: 'Diary of a Wimpy Kid, Book 1',
    author: 'Jeff Kinney'
  },
  {
    asin: '0060530928',
    year: 2009,
    rank: '69',
    title: 'The Graveyard Book',
    author: 'Neil Gaiman'
  },
  {
    asin: '0385342454',
    year: 2009,
    rank: '70',
    title: 'An Echo in the Bone (Outlander)',
    author: 'Diana Gabaldon'
  },
  {
    asin: '0765302306',
    year: 2009,
    rank: '71',
    title: 'The Gathering Storm (Wheel of Time, Book 12)',
    author: 'Robert Jordan'
  },
  {
    asin: '1400082773',
    year: 2009,
    rank: '72',
    title: 'Dreams from My Father: A Story of Race and Inheritance',
    author: 'Barack Obama'
  },
  {
    asin: '0061929379',
    year: 2009,
    rank: '73',
    title: 'Pirate Latitudes: A Novel',
    author: 'Michael Crichton'
  },
  {
    asin: '0874477182',
    year: 2009,
    rank: '74',
    title: 'The Official SAT Study Guide: For the New SAT',
    author: 'The College Board'
  },
  {
    asin: '0142000280',
    year: 2009,
    rank: '75',
    title: 'Getting Things Done: The Art of Stress-Free Productivity',
    author: 'David Allen'
  },
  {
    asin: '0671027034',
    year: 2009,
    rank: '76',
    title: 'How to Win Friends & Influence People',
    author: 'Dale Carnegie'
  },
  {
    asin: '0874478529',
    year: 2009,
    rank: '77',
    title: 'The Official SAT Study Guide Second Edition',
    author: 'The College Board'
  },
  {
    asin: '0312383282',
    year: 2009,
    rank: '78',
    title: 'Finger Lickin\' Fifteen (A Stephanie Plum Novel) (Stephanie Plum Novels)',
    author: 'Janet Evanovich'
  },
  {
    asin: '0312370849',
    year: 2009,
    rank: '79',
    title: 'Sarah\'s Key',
    author: 'Tatiana de Rosnay'
  },
  {
    asin: '0441017010',
    year: 2009,
    rank: '80',
    title: 'From Dead to Worse (Sookie Stackhouse/True Blood)',
    author: 'Charlaine Harris'
  },
  {
    asin: '0805080686',
    year: 2009,
    rank: '81',
    title: 'Wolf Hall',
    author: 'Hilary Mantel'
  },
  {
    asin: '0439023483',
    year: 2009,
    rank: '82',
    title: 'The Hunger Games (The Hunger Games, Book 1)',
    author: 'Suzanne Collins'
  },
  {
    asin: '0385527403',
    year: 2009,
    rank: '83',
    title: 'The Yankee Years',
    author: 'Joe Torre'
  },
  {
    asin: '0679766758',
    year: 2009,
    rank: '84',
    title: 'Push: A Novel',
    author: 'Sapphire'
  },
  {
    asin: '1605297852',
    year: 2009,
    rank: '85',
    title: 'The End of Overeating: Taking Control of the Insatiable American Appetite',
    author: 'David Kessler'
  },
  {
    asin: '0060852577',
    year: 2009,
    rank: '86',
    title: 'The Lacuna: A Novel',
    author: 'Barbara Kingsolver'
  },
  {
    asin: '0071401946',
    year: 2009,
    rank: '87',
    title: 'Crucial Conversations: Tools for Talking When Stakes Are High',
    author: 'Kerry Patterson'
  },
  {
    asin: '0307267148',
    year: 2009,
    rank: '88',
    title: 'Half the Sky: Turning Oppression into Opportunity for Women Worldwide',
    author: 'Nicholas D. Kristof'
  },
  {
    asin: '0385517831',
    year: 2009,
    rank: '89',
    title: 'The Associate',
    author: 'John Grisham'
  },
  {
    asin: '0312362919',
    year: 2009,
    rank: '90',
    title: 'Artisan Bread in Five Minutes a Day: The Discovery That Revolutionizes Home Baking',
    author: 'Jeff Hertzberg'
  },
  {
    asin: '0142414123',
    year: 2009,
    rank: '91',
    title: 'Three Cups of Tea: One Man\'s Journey to Change the World... One Child at a Time (Young Reader\'s Edition)',
    author: 'Sarah Thomson'
  },
  {
    asin: '1416595163',
    year: 2009,
    rank: '92',
    title: 'Pursuit of Honor (Mitch Rapp, No. 10)',
    author: 'Vince Flynn'
  },
  {
    asin: '0316075841',
    year: 2009,
    rank: '93',
    title: 'What the Dog Saw: And Other Adventures',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0446547565',
    year: 2009,
    rank: '94',
    title: 'The Last Song',
    author: 'Nicholas Sparks'
  },
  {
    asin: '0452011876',
    year: 2009,
    rank: '95',
    title: 'Atlas Shrugged',
    author: 'Ayn Rand'
  },
  {
    asin: '1416562605',
    year: 2009,
    rank: '96',
    title: 'The White Tiger: A Novel',
    author: 'Aravind Adiga'
  },
  {
    asin: '0743201140',
    year: 2009,
    rank: '97',
    title: 'Now, Discover Your Strengths',
    author: 'Marcus Buckingham'
  },
  {
    asin: '084991910X',
    year: 2009,
    rank: '98',
    title: 'Same Kind of Different As Me',
    author: 'Ron Hall'
  },
  {
    asin: '039915597X',
    year: 2009,
    rank: '99',
    title: 'U is for Undertow: A Kinsey Millhone Novel',
    author: 'Sue Grafton'
  },
  {
    asin: '0439023491',
    year: 2009,
    rank: '100',
    title: 'Catching Fire (The Hunger Games)',
    author: 'Suzanne Collins'
  },
  {
    asin: '030726999X',
    year: 2010,
    rank: '1',
    title: 'The Girl Who Kicked the Hornet\'s Nest (Millennium Trilogy)',
    author: 'Stieg Larsson'
  },
  {
    asin: '0307454541',
    year: 2010,
    rank: '2',
    title: 'The Girl with the Dragon Tattoo (Millennium Series)',
    author: 'Stieg Larsson'
  },
  {
    asin: '0307590615',
    year: 2010,
    rank: '3',
    title: 'Decision Points',
    author: 'George W. Bush'
  },
  {
    asin: '0399155341',
    year: 2010,
    rank: '4',
    title: 'The Help',
    author: 'Kathryn Stockett'
  },
  {
    asin: '030745455X',
    year: 2010,
    rank: '5',
    title: 'The Girl Who Played with Fire (Millennium Series)',
    author: 'Stieg Larsson'
  },
  {
    asin: '0810984911',
    year: 2010,
    rank: '6',
    title: 'The Ugly Truth (Diary of a Wimpy Kid, Book 5)',
    author: 'Jeff Kinney'
  },
  {
    asin: '159562015X',
    year: 2010,
    rank: '7',
    title: 'StrengthsFinder 2.0',
    author: 'Tom Rath'
  },
  {
    asin: '0439023513',
    year: 2010,
    rank: '8',
    title: 'Mockingjay (The Hunger Games)',
    author: 'Suzanne Collins'
  },
  {
    asin: '1416543074',
    year: 2010,
    rank: '9',
    title: 'Women Food and God: An Unexpected Path to Almost Everything',
    author: 'Geneen Roth'
  },
  {
    asin: '1433805618',
    year: 2010,
    rank: '10',
    title: 'Publication Manual of the American Psychological Association, 6th Edition',
    author: 'American…'
  },
  {
    asin: '0520267192',
    year: 2010,
    rank: '11',
    title: 'Autobiography of Mark Twain: The Complete and Authoritative Edition, Vol. 1',
    author: 'Mark Twain'
  },
  {
    asin: '0393072231',
    year: 2010,
    rank: '12',
    title: 'The Big Short: Inside the Doomsday Machine',
    author: 'Michael Lewis'
  },
  {
    asin: '014311638X',
    year: 2010,
    rank: '13',
    title: 'Food Rules: An Eater\'s Manual',
    author: 'Michael Pollan'
  },
  {
    asin: '1400064163',
    year: 2010,
    rank: '14',
    title: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption',
    author: 'Laura Hillenbrand'
  },
  {
    asin: '0441018645',
    year: 2010,
    rank: '15',
    title: 'Dead in the Family (Sookie Stackhouse/True Blood, Book 10)',
    author: 'Charlaine Harris'
  },
  {
    asin: '0061992704',
    year: 2010,
    rank: '16',
    title: 'Sh*t My Dad Says',
    author: 'Justin Halpern'
  },
  {
    asin: '1434768511',
    year: 2010,
    rank: '17',
    title: 'Crazy Love: Overwhelmed by a Relentless God',
    author: 'Francis Chan'
  },
  {
    asin: '031612558X',
    year: 2010,
    rank: '18',
    title: 'The Short Second Life of Bree Tanner: An Eclipse Novella (The Twilight Saga)',
    author: 'Stephenie Meyer'
  },
  {
    asin: '031603438X',
    year: 2010,
    rank: '19',
    title: 'Life',
    author: 'Keith Richards'
  },
  {
    asin: '0375714367',
    year: 2010,
    rank: '20',
    title: 'Cutting for Stone',
    author: 'Abraham Verghese'
  },
  {
    asin: '044657922X',
    year: 2010,
    rank: '21',
    title: 'The Daily Show with Jon Stewart Presents Earth (The Book): A Visitor\'s Guide to the Human Race',
    author: 'Jon Stewart'
  },
  {
    asin: '0874478529',
    year: 2010,
    rank: '22',
    title: 'The Official SAT Study Guide Second Edition',
    author: 'The College Board'
  },
  {
    asin: '0061733636',
    year: 2010,
    rank: '23',
    title: 'Game Change: Obama and the Clintons, McCain and Palin, and the Race of a Lifetime',
    author: 'John Heilemann'
  },
  {
    asin: '1400052173',
    year: 2010,
    rank: '24',
    title: 'The Immortal Life of Henrietta Lacks',
    author: 'Rebecca Skloot'
  },
  {
    asin: '142311339X',
    year: 2010,
    rank: '25',
    title: 'The Lost Hero (Heroes of Olympus, Book 1)',
    author: 'Rick Riordan'
  },
  {
    asin: '0470550473',
    year: 2010,
    rank: '26',
    title: 'Teach Like a Champion: 49 Techniques that Put Students on the Path to College',
    author: 'Doug Lemov'
  },
  {
    asin: '0316017922',
    year: 2010,
    rank: '27',
    title: 'Outliers: The Story of Success',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0439023491',
    year: 2010,
    rank: '28',
    title: 'Catching Fire (The Hunger Games)',
    author: 'Suzanne Collins'
  },
  {
    asin: '0787960756',
    year: 2010,
    rank: '29',
    title: 'The Five Dysfunctions of a Team: A Leadership Fable',
    author: 'Patrick Lencioni'
  },
  {
    asin: '0066620996',
    year: 2010,
    rank: '30',
    title: 'Good to Great: Why Some Companies Make the Leap and Others Don\'t',
    author: 'Jim Collins'
  },
  {
    asin: '0143038257',
    year: 2010,
    rank: '31',
    title: 'Three Cups of Tea: One Man\'s Mission to Promote Peace - One School at a Time',
    author: 'Greg Mortenson'
  },
  {
    asin: '0226320553',
    year: 2010,
    rank: '32',
    title: 'The Road to Serfdom: Text and Documents--The Definitive Edition (The Collected Works of F. A. Hayek, Volume 2)',
    author: 'F. A. Hayek'
  },
  {
    asin: '0385528043',
    year: 2010,
    rank: '33',
    title: 'The Confession: A Novel',
    author: 'John Grisham'
  },
  {
    asin: '0446563048',
    year: 2010,
    rank: '34',
    title: 'Delivering Happiness: A Path to Profits, Passion, and Purpose',
    author: 'Tony Hsieh'
  },
  {
    asin: '1595230327',
    year: 2010,
    rank: '35',
    title: 'A Patriot\'s History of the United States: From Columbus\'s Great Discovery to the War on Terror',
    author: 'Larry Schweikart'
  },
  {
    asin: '1423101472',
    year: 2010,
    rank: '36',
    title: 'The Last Olympian (Percy Jackson and the Olympians, Book 5)',
    author: 'Rick Riordan'
  },
  {
    asin: '0385528752',
    year: 2010,
    rank: '37',
    title: 'Switch: How to Change Things When Change Is Hard',
    author: 'Chip Heath'
  },
  {
    asin: '0061537969',
    year: 2010,
    rank: '38',
    title: 'The Art of Racing in the Rain: A Novel',
    author: 'Garth Stein'
  },
  {
    asin: '0802473156',
    year: 2010,
    rank: '39',
    title: 'The 5 Love Languages: The Secret to Love That Lasts',
    author: 'Gary Chapman'
  },
  {
    asin: '1439187193',
    year: 2010,
    rank: '40',
    title: 'Broke: The Plan to Restore Our Trust, Truth and Treasure',
    author: 'Glenn Beck'
  },
  {
    asin: '1594488843',
    year: 2010,
    rank: '41',
    title: 'Drive: The Surprising Truth About What Motivates Us',
    author: 'Daniel H. Pink'
  },
  {
    asin: '1423113381',
    year: 2010,
    rank: '42',
    title: 'The Red Pyramid (The Kane Chronicles, Book 1)',
    author: 'Rick Riordan'
  },
  {
    asin: '1423113497',
    year: 2010,
    rank: '43',
    title: 'Percy Jackson and the Olympians Paperback Boxed Set (Books 1-3)',
    author: 'Rick Riordan'
  },
  {
    asin: '1416589643',
    year: 2010,
    rank: '44',
    title: 'Little Bee: A Novel',
    author: 'Chris Cleave'
  },
  {
    asin: '0307238768',
    year: 2010,
    rank: '45',
    title: 'Barefoot Contessa, How Easy Is That?: Fabulous Recipes & Easy Tips',
    author: 'Ina Garten'
  },
  {
    asin: '0978605268',
    year: 2010,
    rank: '46',
    title: 'George Washington\'s Sacred Fire',
    author: 'Peter A. Lillback'
  },
  {
    asin: '1601422210',
    year: 2010,
    rank: '47',
    title: 'Radical: Taking Back Your Faith from the American Dream',
    author: 'David Platt'
  },
  {
    asin: '0765325942',
    year: 2010,
    rank: '48',
    title: 'Towers of Midnight (Wheel of Time, Book Thirteen)',
    author: 'Robert Jordan'
  },
  {
    asin: '0312370849',
    year: 2010,
    rank: '49',
    title: 'Sarah\'s Key',
    author: 'Tatiana de Rosnay'
  },
  {
    asin: '0439023483',
    year: 2010,
    rank: '50',
    title: 'The Hunger Games (The Hunger Games, Book 1)',
    author: 'Suzanne Collins'
  },
  {
    asin: '0743269519',
    year: 2010,
    rank: '51',
    title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0316001929',
    year: 2010,
    rank: '52',
    title: 'Cleopatra: A Life',
    author: 'Stacy Schiff'
  },
  {
    asin: '0374158460',
    year: 2010,
    rank: '53',
    title: 'Freedom: A Novel',
    author: 'Jonathan Franzen'
  },
  {
    asin: '0312600844',
    year: 2010,
    rank: '54',
    title: 'Freedom',
    author: 'Jonathan Franzen'
  },
  {
    asin: '0307266303',
    year: 2010,
    rank: '55',
    title: 'Born to Run: A Hidden Tribe, Superathletes, and the Greatest Race the World Has Never Seen',
    author: 'Christopher McDougall'
  },
  {
    asin: '0525951652',
    year: 2010,
    rank: '56',
    title: 'Fall of Giants (The Century Trilogy, Book One)',
    author: 'Ken Follett'
  },
  {
    asin: '0143038419',
    year: 2010,
    rank: '57',
    title: 'Eat, Pray, Love: One Woman\'s Search for Everything Across Italy, India and Indonesia',
    author: 'Elizabeth Gilbert'
  },
  {
    asin: '0143118420',
    year: 2010,
    rank: '58',
    title: 'Eat Pray Love: One Woman\'s Search for Everything Across Italy, India and Indonesia',
    author: 'Elizabeth Gilbert'
  },
  {
    asin: '1439195811',
    year: 2010,
    rank: '59',
    title: 'Tao I: The Way of All Life',
    author: 'Zhi Gang Sha Dr.'
  },
  {
    asin: '0805091742',
    year: 2010,
    rank: '60',
    title: 'The Checklist Manifesto: How to Get Things Right',
    author: 'Atul Gawande'
  },
  {
    asin: '0446552445',
    year: 2010,
    rank: '61',
    title: 'Chelsea Chelsea Bang Bang',
    author: 'Chelsea Handler'
  },
  {
    asin: '0812973992',
    year: 2010,
    rank: '62',
    title: 'Let the Great World Spin: A Novel',
    author: 'Colum McCann'
  },
  {
    asin: '0061658197',
    year: 2010,
    rank: '63',
    title: 'The Pioneer Woman Cooks: Recipes from an Accidental Country Girl',
    author: 'Ree Drummond'
  },
  {
    asin: '0316346624',
    year: 2010,
    rank: '64',
    title: 'The Tipping Point: How Little Things Can Make a Big Difference',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0143038583',
    year: 2010,
    rank: '65',
    title: 'The Omnivore\'s Dilemma: A Natural History of Four Meals',
    author: 'Michael Pollan'
  },
  {
    asin: '1401927181',
    year: 2010,
    rank: '66',
    title: 'The Belly Fat Cure: Discover the New Carb Swap System™ and Lose 4 to 9 lbs. Every Week',
    author: 'Jorge Cruise'
  },
  {
    asin: '1423101499',
    year: 2010,
    rank: '67',
    title: 'The Battle of the Labyrinth (Percy Jackson and the Olympians, Book 4)',
    author: 'Rick Riordan'
  },
  {
    asin: '0307465357',
    year: 2010,
    rank: '68',
    title: 'The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich',
    author: 'Timothy Ferriss'
  },
  {
    asin: '1439192561',
    year: 2010,
    rank: '69',
    title: 'Full Dark, No Stars',
    author: 'Stephen King'
  },
  {
    asin: '0312383304',
    year: 2010,
    rank: '70',
    title: 'Sizzling Sixteen (Stephanie Plum Novels)',
    author: 'Janet Evanovich'
  },
  {
    asin: '0553805371',
    year: 2010,
    rank: '71',
    title: 'The Grand Design',
    author: 'Stephen Hawking'
  },
  {
    asin: '1439184305',
    year: 2010,
    rank: '72',
    title: 'The Overton Window',
    author: 'Glenn Beck'
  },
  {
    asin: '1591451884',
    year: 2010,
    rank: '73',
    title: 'Jesus Calling: Enjoying Peace in His Presence',
    author: 'Sarah Young'
  },
  {
    asin: '1439155208',
    year: 2010,
    rank: '74',
    title: 'Spoken from the Heart',
    author: 'Laura Bush'
  },
  {
    asin: '0810979772',
    year: 2010,
    rank: '75',
    title: 'Diary of a Wimpy Kid Do-It-Yourself Book',
    author: 'Jeff Kinney'
  },
  {
    asin: '1573241172',
    year: 2010,
    rank: '76',
    title: 'The Book of Awakening: Having the Life You Want by Being Present to the Life You Have',
    author: 'Mark Nepo'
  },
  {
    asin: '0375413405',
    year: 2010,
    rank: '77',
    title: 'Mastering the Art of French Cooking, Vol. 1',
    author: 'Julia Child'
  },
  {
    asin: '044654759X',
    year: 2010,
    rank: '78',
    title: 'Safe Haven',
    author: 'Nicholas Sparks'
  },
  {
    asin: '0307463575',
    year: 2010,
    rank: '79',
    title: 'Change Your Brain, Change Your Body: Use Your Brain to Get and Keep the Body You Have Always Wanted',
    author: 'Daniel G. Amen'
  },
  {
    asin: '1605296449',
    year: 2010,
    rank: '80',
    title: 'The Kind Diet: A Simple Guide to Feeling Great, Losing Weight, and Saving the Planet',
    author: 'Alicia Silverstone'
  },
  {
    asin: '1400068924',
    year: 2010,
    rank: '81',
    title: 'Decoded',
    author: 'Jay-Z'
  },
  {
    asin: '074324754X',
    year: 2010,
    rank: '82',
    title: 'The Glass Castle: A Memoir',
    author: 'Jeannette Walls'
  },
  {
    asin: '0964729237',
    year: 2010,
    rank: '83',
    title: 'The Shack: Where Tragedy Confronts Eternity',
    author: 'William P. Young'
  },
  {
    asin: '031606792X',
    year: 2010,
    rank: '84',
    title: 'Breaking Dawn (The Twilight Saga, Book 4)',
    author: 'Stephenie Meyer'
  },
  {
    asin: '0441018238',
    year: 2010,
    rank: '85',
    title: 'Sookie Stackhouse 8-copy Boxed Set (Sookie Stackhouse / Southern Vampire)',
    author: 'Charlaine Harris'
  },
  {
    asin: '0385341008',
    year: 2010,
    rank: '86',
    title: 'The Guernsey Literary and Potato Peel Pie Society',
    author: 'Annie Barrows'
  },
  {
    asin: '0345505344',
    year: 2010,
    rank: '87',
    title: 'Hotel on the Corner of Bitter and Sweet',
    author: 'Jamie Ford'
  },
  {
    asin: '030746363X',
    year: 2010,
    rank: '88',
    title: 'The 4 Hour Body: An Uncommon Guide to Rapid Fat Loss, Incredible Sex and Becoming Superhuman',
    author: 'Timothy Ferriss'
  },
  {
    asin: '0071401946',
    year: 2010,
    rank: '89',
    title: 'Crucial Conversations: Tools for Talking When Stakes Are High',
    author: 'Kerry Patterson'
  },
  {
    asin: '0425236757',
    year: 2010,
    rank: '90',
    title: 'Happy Ever After (Bride Quartet, Book 4)',
    author: 'Nora Roberts'
  },
  {
    asin: '1933890517',
    year: 2010,
    rank: '91',
    title: 'A Guide to the Project Management Body of Knowledge',
    author: 'Project Management…'
  },
  {
    asin: '0425233685',
    year: 2010,
    rank: '92',
    title: 'Savor the Moment (The Bride Quartet, Book 3)',
    author: 'Nora Roberts'
  },
  {
    asin: '0375842209',
    year: 2010,
    rank: '93',
    title: 'The Book Thief',
    author: 'Markus Zusak'
  },
  {
    asin: '0316769177',
    year: 2010,
    rank: '94',
    title: 'The Catcher in the Rye',
    author: 'J. D. Salinger'
  },
  {
    asin: '1932100660',
    year: 2010,
    rank: '95',
    title: 'The China Study: The Most Comprehensive Study of Nutrition Ever Conducted And the Startling Implications for Diet, Weight Loss, And Long-term Health',
    author: 'Thomas Campbell'
  },
  {
    asin: '141659518X',
    year: 2010,
    rank: '96',
    title: 'American Assassin: A Thriller (A Mitch Rapp Novel)',
    author: 'Vince Flynn'
  },
  {
    asin: '0307463745',
    year: 2010,
    rank: '97',
    title: 'Rework',
    author: 'Jason Fried'
  },
  {
    asin: '0143114964',
    year: 2010,
    rank: '98',
    title: 'In Defense of Food: An Eater\'s Manifesto',
    author: 'Michael Pollan'
  },
  {
    asin: '0316038393',
    year: 2010,
    rank: '99',
    title: 'Squirrel Seeks Chipmunk: A Modest Bestiary',
    author: 'David Sedaris'
  },
  {
    asin: '0399144463',
    year: 2010,
    rank: '100',
    title: 'Who Moved My Cheese?: An Amazing Way to Deal with Change in Your Work and in Your Life',
    author: 'Spencer Johnson'
  },
  {
    asin: '1451648537',
    year: 2011,
    rank: '1',
    title: 'Steve Jobs',
    author: 'Walter Isaacson'
  },
  {
    asin: '0849946158',
    year: 2011,
    rank: '2',
    title: 'Heaven is for Real: A Little Boy\'s Astounding Story of His Trip to Heaven and Back',
    author: 'Todd Burpo'
  },
  {
    asin: '1419702238',
    year: 2011,
    rank: '3',
    title: 'Cabin Fever (Diary of a Wimpy Kid, Book 6)',
    author: 'Jeff Kinney'
  },
  {
    asin: '159562015X',
    year: 2011,
    rank: '4',
    title: 'StrengthsFinder 2.0',
    author: 'Tom Rath'
  },
  {
    asin: '0439023521',
    year: 2011,
    rank: '5',
    title: 'The Hunger Games (Book 1)',
    author: 'Suzanne Collins'
  },
  {
    asin: '1400064163',
    year: 2011,
    rank: '6',
    title: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption',
    author: 'Laura Hillenbrand'
  },
  {
    asin: '0375856110',
    year: 2011,
    rank: '7',
    title: 'Inheritance (Inheritance Cycle)',
    author: 'Christopher Paolini'
  },
  {
    asin: '1617750255',
    year: 2011,
    rank: '8',
    title: 'Go the F**k to Sleep',
    author: 'Adam Mansbach'
  },
  {
    asin: '0439023513',
    year: 2011,
    rank: '9',
    title: 'Mockingjay (The Hunger Games)',
    author: 'Suzanne Collins'
  },
  {
    asin: '0345529057',
    year: 2011,
    rank: '10',
    title: 'A Song of Ice and Fire, (4 Vols.): A Game of Thrones / A Clash of Kings / A Storm of Swords / A Feast for Crows',
    author: 'George R.R. Martin'
  },
  {
    asin: '0439023491',
    year: 2011,
    rank: '11',
    title: 'Catching Fire (The Hunger Games)',
    author: 'Suzanne Collins'
  },
  {
    asin: '1451648650',
    year: 2011,
    rank: '12',
    title: 'The 17 Day Diet: A Doctor\'s Plan Designed for Rapid Results',
    author: 'Mike Moreno'
  },
  {
    asin: '0553801473',
    year: 2011,
    rank: '13',
    title: 'A Dance with Dragons (A Song of Ice and Fire)',
    author: 'George R. R. Martin'
  },
  {
    asin: '1423140591',
    year: 2011,
    rank: '14',
    title: 'The Son of Neptune (Heroes of Olympus, Book 2)',
    author: 'Rick Riordan'
  },
  {
    asin: '0805093079',
    year: 2011,
    rank: '15',
    title: 'Killing Lincoln: The Shocking Assassination that Changed America Forever (Bill O\'Reilly\'s Killing Series)',
    author: 'Bill O\'Reilly'
  },
  {
    asin: '1433805618',
    year: 2011,
    rank: '16',
    title: 'Publication Manual of the American Psychological Association, 6th Edition',
    author: 'American…'
  },
  {
    asin: '0425245136',
    year: 2011,
    rank: '17',
    title: 'The Help',
    author: 'Kathryn Stockett'
  },
  {
    asin: '1400052181',
    year: 2011,
    rank: '18',
    title: 'The Immortal Life of Henrietta Lacks',
    author: 'Rebecca Skloot'
  },
  {
    asin: '1451627289',
    year: 2011,
    rank: '19',
    title: '11/22/63: A Novel',
    author: 'Stephen King'
  },
  {
    asin: '0874478529',
    year: 2011,
    rank: '20',
    title: 'The Official SAT Study Guide Second Edition',
    author: 'The College Board'
  },
  {
    asin: '1591451884',
    year: 2011,
    rank: '21',
    title: 'Jesus Calling: Enjoying Peace in His Presence',
    author: 'Sarah Young'
  },
  {
    asin: '0545265355',
    year: 2011,
    rank: '22',
    title: 'The Hunger Games Trilogy Boxed Set',
    author: 'Suzanne Collins'
  },
  {
    asin: '0375714367',
    year: 2011,
    rank: '23',
    title: 'Cutting for Stone',
    author: 'Abraham Verghese'
  },
  {
    asin: '0316056863',
    year: 2011,
    rank: '24',
    title: 'Tina Fey: Bossypants',
    author: 'Tina Fey'
  },
  {
    asin: '030746363X',
    year: 2011,
    rank: '25',
    title: 'The 4 Hour Body: An Uncommon Guide to Rapid Fat Loss, Incredible Sex and Becoming Superhuman',
    author: 'Timothy Ferriss'
  },
  {
    asin: '0307408841',
    year: 2011,
    rank: '26',
    title: 'In the Garden of Beasts: Love, Terror, and an American Family in Hitler\'s Berlin',
    author: 'Erik Larson'
  },
  {
    asin: '0802473156',
    year: 2011,
    rank: '27',
    title: 'The 5 Love Languages: The Secret to Love That Lasts',
    author: 'Gary Chapman'
  },
  {
    asin: '1434768511',
    year: 2011,
    rank: '28',
    title: 'Crazy Love: Overwhelmed by a Relentless God',
    author: 'Francis Chan'
  },
  {
    asin: '1451629184',
    year: 2011,
    rank: '29',
    title: 'A Stolen Life: A Memoir',
    author: 'Jaycee Dugard'
  },
  {
    asin: '030726999X',
    year: 2011,
    rank: '30',
    title: 'The Girl Who Kicked the Hornet\'s Nest (Millennium Trilogy)',
    author: 'Stieg Larsson'
  },
  {
    asin: '1565125606',
    year: 2011,
    rank: '31',
    title: 'Water for Elephants: A Novel',
    author: 'Sara Gruen'
  },
  {
    asin: '0787960756',
    year: 2011,
    rank: '32',
    title: 'The Five Dysfunctions of a Team: A Leadership Fable',
    author: 'Patrick Lencioni'
  },
  {
    asin: '0756686067',
    year: 2011,
    rank: '33',
    title: 'The Lego Ideas Book: Unlock Your Imagination',
    author: 'Daniel Lipkowitz'
  },
  {
    asin: '0310321913',
    year: 2011,
    rank: '34',
    title: 'One Thousand Gifts: A Dare to Live Fully Right Where You Are',
    author: 'Ann Voskamp'
  },
  {
    asin: '0743269519',
    year: 2011,
    rank: '35',
    title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0307887960',
    year: 2011,
    rank: '36',
    title: 'The Dukan Diet: 2 Steps to Lose the Weight, 2 Steps to Keep It Off Forever',
    author: 'Pierre Dukan'
  },
  {
    asin: '1423140567',
    year: 2011,
    rank: '37',
    title: 'The Throne of Fire (The Kane Chronicles, Book 2)',
    author: 'Rick Riordan'
  },
  {
    asin: '0441020313',
    year: 2011,
    rank: '38',
    title: 'Dead Reckoning (Sookie Stackhouse/True Blood, Book 11)',
    author: 'Charlaine Harris'
  },
  {
    asin: '0066620996',
    year: 2011,
    rank: '39',
    title: 'Good to Great: Why Some Companies Make the Leap and Others Don\'t',
    author: 'Jim Collins'
  },
  {
    asin: '0385535139',
    year: 2011,
    rank: '40',
    title: 'The Litigators',
    author: 'John Grisham'
  },
  {
    asin: '006204964X',
    year: 2011,
    rank: '41',
    title: 'Love Wins: A Book About Heaven, Hell, and the Fate of Every Person Who Ever Lived',
    author: 'Rob Bell'
  },
  {
    asin: '0425232204',
    year: 2011,
    rank: '42',
    title: 'The Help',
    author: 'Kathryn Stockett'
  },
  {
    asin: '0374275637',
    year: 2011,
    rank: '43',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman'
  },
  {
    asin: '0345521307',
    year: 2011,
    rank: '44',
    title: 'The Paris Wife: A Novel',
    author: 'Paula McLain'
  },
  {
    asin: '1601422210',
    year: 2011,
    rank: '45',
    title: 'Radical: Taking Back Your Faith from the American Dream',
    author: 'David Platt'
  },
  {
    asin: '0061537969',
    year: 2011,
    rank: '46',
    title: 'The Art of Racing in the Rain: A Novel',
    author: 'Garth Stein'
  },
  {
    asin: '0470550473',
    year: 2011,
    rank: '47',
    title: 'Teach Like a Champion: 49 Techniques that Put Students on the Path to College',
    author: 'Doug Lemov'
  },
  {
    asin: '031612091X',
    year: 2011,
    rank: '48',
    title: 'Eat to Live: The Amazing Nutrient-Rich Program for Fast and Sustained Weight Loss, Revised Edition',
    author: 'Joel Fuhrman'
  },
  {
    asin: '1932100660',
    year: 2011,
    rank: '49',
    title: 'The China Study: The Most Comprehensive Study of Nutrition Ever Conducted And the Startling Implications for Diet, Weight Loss, And Long-term Health',
    author: 'Thomas Campbell'
  },
  {
    asin: '0761148574',
    year: 2011,
    rank: '50',
    title: 'What to Expect When You\'re Expecting',
    author: 'Heidi Murkoff'
  },
  {
    asin: '0446547654',
    year: 2011,
    rank: '51',
    title: 'The Best of Me',
    author: 'Nicholas Sparks'
  },
  {
    asin: '1401324258',
    year: 2011,
    rank: '52',
    title: 'Jacqueline Kennedy: Historic Conversations on Life with John F. Kennedy',
    author: 'Jacqueline Kennedy'
  },
  {
    asin: '0307454541',
    year: 2011,
    rank: '53',
    title: 'The Girl with the Dragon Tattoo (Millennium Series)',
    author: 'Stieg Larsson'
  },
  {
    asin: '1416571760',
    year: 2011,
    rank: '54',
    title: 'The Greater Journey: Americans in Paris',
    author: 'David McCullough'
  },
  {
    asin: '0385528752',
    year: 2011,
    rank: '55',
    title: 'Switch: How to Change Things When Change Is Hard',
    author: 'Chip Heath'
  },
  {
    asin: '0061998168',
    year: 2011,
    rank: '56',
    title: 'Every Thing On It',
    author: 'Shel Silverstein'
  },
  {
    asin: '1594744769',
    year: 2011,
    rank: '57',
    title: 'Miss Peregrine\'s Home for Peculiar Children (Miss Peregrine\'s Peculiar Children)',
    author: 'Ransom Riggs'
  },
  {
    asin: '159420229X',
    year: 2011,
    rank: '58',
    title: 'Moonwalking With Einstein: The Art and Science of Remembering Everything',
    author: 'Joshua Foer'
  },
  {
    asin: '0743273567',
    year: 2011,
    rank: '59',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    asin: '0399155341',
    year: 2011,
    rank: '60',
    title: 'The Help',
    author: 'Kathryn Stockett'
  },
  {
    asin: '0307593312',
    year: 2011,
    rank: '61',
    title: '1Q84',
    author: 'Haruki Murakami'
  },
  {
    asin: '0393081818',
    year: 2011,
    rank: '62',
    title: 'Boomerang: Travels in the New Third World',
    author: 'Michael Lewis'
  },
  {
    asin: '0399144463',
    year: 2011,
    rank: '63',
    title: 'Who Moved My Cheese?: An Amazing Way to Deal with Change in Your Work and in Your Life',
    author: 'Spencer Johnson'
  },
  {
    asin: '1595620257',
    year: 2011,
    rank: '64',
    title: 'Strengths Based Leadership: Great Leaders, Teams, and Why People Follow',
    author: 'Tom Rath'
  },
  {
    asin: '0307891372',
    year: 2011,
    rank: '65',
    title: 'Elder Scrolls V: Skyrim: Prima Official Game Guide',
    author: 'David Hodgson'
  },
  {
    asin: '074324754X',
    year: 2011,
    rank: '66',
    title: 'The Glass Castle: A Memoir',
    author: 'Jeannette Walls'
  },
  {
    asin: '0375842209',
    year: 2011,
    rank: '67',
    title: 'The Book Thief',
    author: 'Markus Zusak'
  },
  {
    asin: '0307465357',
    year: 2011,
    rank: '68',
    title: 'The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich',
    author: 'Timothy Ferriss'
  },
  {
    asin: '0679805273',
    year: 2011,
    rank: '69',
    title: 'Oh, the Places You\'ll Go!  ',
    author: 'Dr. Seuss'
  },
  {
    asin: '0062007289',
    year: 2011,
    rank: '70',
    title: 'Through My Eyes',
    author: 'Tim Tebow'
  },
  {
    asin: '0517580519',
    year: 2011,
    rank: '71',
    title: 'The Land of Painted Caves: A Novel (Earth\'s Children)',
    author: 'Jean M. Auel'
  },
  {
    asin: '140006760X',
    year: 2011,
    rank: '72',
    title: 'The Social Animal: The Hidden Sources of Love, Character, and Achievement',
    author: 'David Brooks'
  },
  {
    asin: '1933890517',
    year: 2011,
    rank: '73',
    title: 'A Guide to the Project Management Body of Knowledge',
    author: 'Project Management…'
  },
  {
    asin: '1904994679',
    year: 2011,
    rank: '74',
    title: 'Guinness World Records 2012',
    author: 'Guinness World…'
  },
  {
    asin: '0062049801',
    year: 2011,
    rank: '75',
    title: 'State of Wonder',
    author: 'Ann Patchett'
  },
  {
    asin: '0307477479',
    year: 2011,
    rank: '76',
    title: 'A Visit from the Goon Squad',
    author: 'Jennifer Egan'
  },
  {
    asin: '1583333002',
    year: 2011,
    rank: '77',
    title: 'Prevent and Reverse Heart Disease: The Revolutionary, Scientifically Proven, Nutrition-Based Cure',
    author: 'Caldwell B. Esselstyn…'
  },
  {
    asin: '0545162076',
    year: 2011,
    rank: '78',
    title: 'Harry Potter Paperback Box Set (Books 1-7)',
    author: 'J. K. Rowling'
  },
  {
    asin: '0345527712',
    year: 2011,
    rank: '79',
    title: 'Explosive Eighteen: A Stephanie Plum Novel (Stephanie Plum Novels)',
    author: 'Janet Evanovich'
  },
  {
    asin: '0684856093',
    year: 2011,
    rank: '80',
    title: 'The 7 Habits of Highly Effective Teens: The Ultimate Teenage Success Guide',
    author: 'Sean Covey'
  },
  {
    asin: '0446563048',
    year: 2011,
    rank: '81',
    title: 'Delivering Happiness: A Path to Profits, Passion, and Purpose',
    author: 'Tony Hsieh'
  },
  {
    asin: '142311339X',
    year: 2011,
    rank: '82',
    title: 'The Lost Hero (Heroes of Olympus, Book 1)',
    author: 'Rick Riordan'
  },
  {
    asin: '0316098329',
    year: 2011,
    rank: '83',
    title: 'Room',
    author: 'Emma Donoghue'
  },
  {
    asin: '0345505344',
    year: 2011,
    rank: '84',
    title: 'Hotel on the Corner of Bitter and Sweet',
    author: 'Jamie Ford'
  },
  {
    asin: '0316346624',
    year: 2011,
    rank: '85',
    title: 'The Tipping Point: How Little Things Can Make a Big Difference',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0974320625',
    year: 2011,
    rank: '86',
    title: 'Emotional Intelligence 2.0',
    author: 'Travis Bradberry'
  },
  {
    asin: '0316017930',
    year: 2011,
    rank: '87',
    title: 'Outliers: The Story of Success',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '1615190457',
    year: 2011,
    rank: '88',
    title: 'Forks Over Knives: The Plant-Based Way to Health',
    author: 'Gene Stone'
  },
  {
    asin: '030745455X',
    year: 2011,
    rank: '89',
    title: 'The Girl Who Played with Fire (Millennium Series)',
    author: 'Stieg Larsson'
  },
  {
    asin: '0312676816',
    year: 2011,
    rank: '90',
    title: 'Hungry Girl 300 Under 300: 300 Breakfast, Lunch & Dinner Dishes Under 300 Calories',
    author: 'Lisa Lillien'
  },
  {
    asin: '0061122416',
    year: 2011,
    rank: '91',
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    asin: '0142000280',
    year: 2011,
    rank: '92',
    title: 'Getting Things Done: The Art of Stress-Free Productivity',
    author: 'David Allen'
  },
  {
    asin: '0439813786',
    year: 2011,
    rank: '93',
    title: 'The Invention of Hugo Cabret',
    author: 'Brian Selznick'
  },
  {
    asin: '0743201140',
    year: 2011,
    rank: '94',
    title: 'Now, Discover Your Strengths',
    author: 'Marcus Buckingham'
  },
  {
    asin: '1594484805',
    year: 2011,
    rank: '95',
    title: 'Drive: The Surprising Truth About What Motivates Us',
    author: 'Daniel H. Pink'
  },
  {
    asin: '0345527682',
    year: 2011,
    rank: '96',
    title: 'Smokin\' Seventeen (Stephanie Plum)',
    author: 'Janet Evanovich'
  },
  {
    asin: '8883701127',
    year: 2011,
    rank: '97',
    title: 'Moleskine Classic Notebook, Large, Ruled, Black, Hard Cover (5 x 8.25) (Classic Notebooks)',
    author: null
  },
  {
    asin: '0393338827',
    year: 2011,
    rank: '98',
    title: 'The Big Short: Inside the Doomsday Machine',
    author: 'Michael Lewis'
  },
  {
    asin: '0307279189',
    year: 2011,
    rank: '99',
    title: 'Born to Run: A Hidden Tribe, Superathletes, and the Greatest Race the World Has Never Seen',
    author: 'Christopher McDougall'
  },
  {
    asin: '0470449748',
    year: 2011,
    rank: '100',
    title: 'The Official Guide for GMAT Review, 12th Edition',
    author: 'GMAC (Graduate…'
  },
  {
    asin: '0345803485',
    year: 2012,
    rank: '1',
    title: 'Fifty Shades of Grey: Book One of the Fifty Shades Trilogy (Fifty Shades of Grey Series)',
    author: 'E L James'
  },
  {
    asin: '0345803493',
    year: 2012,
    rank: '2',
    title: 'Fifty Shades Darker',
    author: 'E. L. James'
  },
  {
    asin: '0345803507',
    year: 2012,
    rank: '3',
    title: 'Fifty Shades Freed: Book Three of the Fifty Shades Trilogy (Fifty Shades of Grey Series) (English Edition)',
    author: 'E L James'
  },
  {
    asin: '0439023521',
    year: 2012,
    rank: '4',
    title: 'The Hunger Games (Book 1)',
    author: 'Suzanne Collins'
  },
  {
    asin: '159562015X',
    year: 2012,
    rank: '5',
    title: 'StrengthsFinder 2.0',
    author: 'Tom Rath'
  },
  {
    asin: '034580404X',
    year: 2012,
    rank: '6',
    title: 'Fifty Shades Trilogy (Fifty Shades of Grey / Fifty Shades Darker / Fifty Shades Freed)',
    author: 'E L James'
  },
  {
    asin: '0439023491',
    year: 2012,
    rank: '7',
    title: 'Catching Fire (The Hunger Games)',
    author: 'Suzanne Collins'
  },
  {
    asin: '0439023513',
    year: 2012,
    rank: '8',
    title: 'Mockingjay (The Hunger Games)',
    author: 'Suzanne Collins'
  },
  {
    asin: '1419705849',
    year: 2012,
    rank: '9',
    title: 'The Third Wheel (Diary of a Wimpy Kid, Book 7)',
    author: 'Jeff Kinney'
  },
  {
    asin: '0525953728',
    year: 2012,
    rank: '10',
    title: 'No Easy Day: The Autobiography of a Navy Seal: The Firsthand Account of the Mission That Killed Osama Bin Laden',
    author: 'Mark Owen'
  },
  {
    asin: '0545265355',
    year: 2012,
    rank: '11',
    title: 'The Hunger Games Trilogy Boxed Set',
    author: 'Suzanne Collins'
  },
  {
    asin: '030758836X',
    year: 2012,
    rank: '12',
    title: 'Gone Girl',
    author: 'Gillian Flynn'
  },
  {
    asin: '1423140605',
    year: 2012,
    rank: '13',
    title: 'The Mark of Athena (Heroes of Olympus, Book 3)',
    author: 'Rick Riordan'
  },
  {
    asin: '0874478529',
    year: 2012,
    rank: '14',
    title: 'The Official SAT Study Guide Second Edition',
    author: 'The College Board'
  },
  {
    asin: '0345529057',
    year: 2012,
    rank: '15',
    title: 'A Song of Ice and Fire, (4 Vols.): A Game of Thrones / A Clash of Kings / A Storm of Swords / A Feast for Crows',
    author: 'George R.R. Martin'
  },
  {
    asin: '0805096663',
    year: 2012,
    rank: '16',
    title: 'Killing Kennedy: The End of Camelot',
    author: 'Bill O\'Reilly'
  },
  {
    asin: '1433805618',
    year: 2012,
    rank: '17',
    title: 'Publication Manual of the American Psychological Association, 6th Edition',
    author: 'American…'
  },
  {
    asin: '0805093079',
    year: 2012,
    rank: '18',
    title: 'Killing Lincoln: The Shocking Assassination that Changed America Forever (Bill O\'Reilly\'s Killing Series)',
    author: 'Bill O\'Reilly'
  },
  {
    asin: '1400064163',
    year: 2012,
    rank: '19',
    title: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption',
    author: 'Laura Hillenbrand'
  },
  {
    asin: '1451695195',
    year: 2012,
    rank: '20',
    title: 'Proof of Heaven: A Neurosurgeon\'s Journey into the Afterlife',
    author: 'Eben Alexander'
  },
  {
    asin: '0802473156',
    year: 2012,
    rank: '21',
    title: 'The 5 Love Languages: The Secret to Love That Lasts',
    author: 'Gary Chapman'
  },
  {
    asin: '0307464873',
    year: 2012,
    rank: '22',
    title: 'Barefoot Contessa Foolproof: Recipes You Can Trust',
    author: 'Ina Garten'
  },
  {
    asin: '0374275637',
    year: 2012,
    rank: '23',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman'
  },
  {
    asin: '0316228532',
    year: 2012,
    rank: '24',
    title: 'The Casual Vacancy',
    author: 'J.K. Rowling'
  },
  {
    asin: '161638610X',
    year: 2012,
    rank: '25',
    title: 'The Harbinger: The Ancient Mystery that Holds the Secret of America\'s Future',
    author: 'Jonathan Cahn'
  },
  {
    asin: '1400069289',
    year: 2012,
    rank: '26',
    title: 'The Power of Habit: Why We Do What We Do in Life and Business',
    author: 'Charles Duhigg'
  },
  {
    asin: '1451648537',
    year: 2012,
    rank: '27',
    title: 'Steve Jobs',
    author: 'Walter Isaacson'
  },
  {
    asin: '1609611543',
    year: 2012,
    rank: '28',
    title: 'Wheat Belly: Lose the Wheat, Lose the Weight, and Find Your Path Back to Health',
    author: 'William Davis'
  },
  {
    asin: '0679805273',
    year: 2012,
    rank: '29',
    title: 'Oh, the Places You\'ll Go!  ',
    author: 'Dr. Seuss'
  },
  {
    asin: '0743269519',
    year: 2012,
    rank: '30',
    title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0787960756',
    year: 2012,
    rank: '31',
    title: 'The Five Dysfunctions of a Team: A Leadership Fable',
    author: 'Patrick Lencioni'
  },
  {
    asin: '0307352145',
    year: 2012,
    rank: '32',
    title: 'Quiet: The Power of Introverts in a World That Can\'t Stop Talking',
    author: 'Susan Cain'
  },
  {
    asin: '0743273567',
    year: 2012,
    rank: '33',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    asin: '0385535147',
    year: 2012,
    rank: '34',
    title: 'The Racketeer',
    author: 'John Grisham'
  },
  {
    asin: '031612737X',
    year: 2012,
    rank: '35',
    title: 'The Blood Sugar Solution: The UltraHealthy Program for Losing Weight, Preventing Disease, and Feeling Great Now!',
    author: 'Mark Hyman M.D.'
  },
  {
    asin: '0811877825',
    year: 2012,
    rank: '36',
    title: 'Goodnight, Goodnight Construction Site',
    author: 'Sherri Duskey Rinker'
  },
  {
    asin: '1400052181',
    year: 2012,
    rank: '37',
    title: 'The Immortal Life of Henrietta Lacks',
    author: 'Rebecca Skloot'
  },
  {
    asin: '0525478817',
    year: 2012,
    rank: '38',
    title: 'The Fault in Our Stars',
    author: 'John Green'
  },
  {
    asin: '1423140575',
    year: 2012,
    rank: '39',
    title: 'The Serpent\'s Shadow (The Kane Chronicles, Book 3)',
    author: 'Rick Riordan'
  },
  {
    asin: '0310321913',
    year: 2012,
    rank: '40',
    title: 'One Thousand Gifts: A Dare to Live Fully Right Where You Are',
    author: 'Ann Voskamp'
  },
  {
    asin: '0307592731',
    year: 2012,
    rank: '41',
    title: 'Wild: From Lost to Found on the Pacific Crest Trail',
    author: 'Cheryl Strayed'
  },
  {
    asin: '0525952926',
    year: 2012,
    rank: '42',
    title: 'Winter of the World: Book Two of the Century Trilogy',
    author: 'Ken Follett'
  },
  {
    asin: '0061997188',
    year: 2012,
    rank: '43',
    title: 'The Pioneer Woman Cooks: Food from My Frontier',
    author: 'Ree Drummond'
  },
  {
    asin: '0756686067',
    year: 2012,
    rank: '44',
    title: 'The Lego Ideas Book: Unlock Your Imagination',
    author: 'Daniel Lipkowitz'
  },
  {
    asin: '0849946158',
    year: 2012,
    rank: '45',
    title: 'Heaven is for Real: A Little Boy\'s Astounding Story of His Trip to Heaven and Back',
    author: 'Todd Burpo'
  },
  {
    asin: '1591451884',
    year: 2012,
    rank: '46',
    title: 'Jesus Calling: Enjoying Peace in His Presence',
    author: 'Sarah Young'
  },
  {
    asin: '031612091X',
    year: 2012,
    rank: '47',
    title: 'Eat to Live: The Amazing Nutrient-Rich Program for Fast and Sustained Weight Loss, Revised Edition',
    author: 'Joel Fuhrman'
  },
  {
    asin: '1400067669',
    year: 2012,
    rank: '48',
    title: 'Thomas Jefferson: The Art of Power',
    author: 'Jon Meacham'
  },
  {
    asin: '0066620996',
    year: 2012,
    rank: '49',
    title: 'Good to Great: Why Some Companies Make the Leap and Others Don\'t',
    author: 'Jim Collins'
  },
  {
    asin: '1596987855',
    year: 2012,
    rank: '50',
    title: 'The Amateur',
    author: 'Edward Klein'
  },
  {
    asin: '030759565X',
    year: 2012,
    rank: '51',
    title: 'The Smitten Kitchen Cookbook: Recipes and Wisdom from an Obsessive Home Cook',
    author: 'Deb Perelman'
  },
  {
    asin: '0761148574',
    year: 2012,
    rank: '52',
    title: 'What to Expect When You\'re Expecting',
    author: 'Heidi Murkoff'
  },
  {
    asin: '1607060760',
    year: 2012,
    rank: '53',
    title: 'The Walking Dead:  Compendium One',
    author: 'Robert Kirkman'
  },
  {
    asin: '159420411X',
    year: 2012,
    rank: '54',
    title: 'The Signal and the Noise: Why So Many Predictions Fail-But Some Don\'t',
    author: 'Nate Silver'
  },
  {
    asin: '1449410243',
    year: 2012,
    rank: '55',
    title: 'How to Tell If Your Cat Is Plotting to Kill You (The Oatmeal)',
    author: 'The Oatmeal'
  },
  {
    asin: '0553801473',
    year: 2012,
    rank: '56',
    title: 'A Dance with Dragons (A Song of Ice and Fire)',
    author: 'George R. R. Martin'
  },
  {
    asin: '0446583979',
    year: 2012,
    rank: '57',
    title: 'America Again: Re-becoming the Greatness We Never Weren\'t',
    author: 'Stephen Colbert'
  },
  {
    asin: '075669812X',
    year: 2012,
    rank: '58',
    title: 'LEGO NINJAGO: Character Encyclopedia',
    author: 'DK Publishing'
  },
  {
    asin: '0062082353',
    year: 2012,
    rank: '59',
    title: 'American Sniper: The Autobiography of the Most Lethal Sniper in U.S. Military History',
    author: 'Chris Kyle'
  },
  {
    asin: '0316017930',
    year: 2012,
    rank: '60',
    title: 'Outliers: The Story of Success',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0470550473',
    year: 2012,
    rank: '61',
    title: 'Teach Like a Champion: 49 Techniques that Put Students on the Path to College',
    author: 'Doug Lemov'
  },
  {
    asin: '0425263908',
    year: 2012,
    rank: '62',
    title: 'Bared to You',
    author: 'Sylvia Day'
  },
  {
    asin: '1878424319',
    year: 2012,
    rank: '63',
    title: 'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
    author: 'Don Miguel Ruiz'
  },
  {
    asin: '1595620257',
    year: 2012,
    rank: '64',
    title: 'Strengths Based Leadership: Great Leaders, Teams, and Why People Follow',
    author: 'Tom Rath'
  },
  {
    asin: '1451648650',
    year: 2012,
    rank: '65',
    title: 'The 17 Day Diet: A Doctor\'s Plan Designed for Rapid Results',
    author: 'Mike Moreno'
  },
  {
    asin: '1434768511',
    year: 2012,
    rank: '66',
    title: 'Crazy Love: Overwhelmed by a Relentless God',
    author: 'Francis Chan'
  },
  {
    asin: '1617750255',
    year: 2012,
    rank: '67',
    title: 'Go the F**k to Sleep',
    author: 'Adam Mansbach'
  },
  {
    asin: '0805090037',
    year: 2012,
    rank: '68',
    title: 'Bring Up the Bodies',
    author: 'Hilary Mantel'
  },
  {
    asin: '0062120999',
    year: 2012,
    rank: '69',
    title: 'Great by Choice: Uncertainty, Chaos, and Luck--Why Some Thrive Despite Them All',
    author: 'Jim Collins'
  },
  {
    asin: '0316206644',
    year: 2012,
    rank: '70',
    title: 'Eat to Live: The Amazing Nutrient-Rich Program for Fast and Sustained Weight Loss, Revised Edition',
    author: 'Joel Fuhrman'
  },
  {
    asin: '0425263916',
    year: 2012,
    rank: '71',
    title: 'Reflected in You (Crossfire)',
    author: 'Sylvia Day'
  },
  {
    asin: '0399144463',
    year: 2012,
    rank: '72',
    title: 'Who Moved My Cheese?: An Amazing Way to Deal with Change in Your Work and in Your Life',
    author: 'Spencer Johnson'
  },
  {
    asin: '0375842209',
    year: 2012,
    rank: '73',
    title: 'The Book Thief',
    author: 'Markus Zusak'
  },
  {
    asin: '1933890517',
    year: 2012,
    rank: '74',
    title: 'A Guide to the Project Management Body of Knowledge',
    author: 'Project Management…'
  },
  {
    asin: '1400067553',
    year: 2012,
    rank: '75',
    title: 'Behind the Beautiful Forevers: Life, Death, and Hope in a Mumbai Undercity',
    author: 'Katherine Boo'
  },
  {
    asin: '1937007448',
    year: 2012,
    rank: '76',
    title: 'Deadlocked (Sookie Stackhouse/True Blood, Book 12)',
    author: 'Charlaine Harris'
  },
  {
    asin: '0071771328',
    year: 2012,
    rank: '77',
    title: 'Crucial Conversations Tools for Talking When Stakes Are High, Second Edition',
    author: 'Kerry Patterson'
  },
  {
    asin: '1615190457',
    year: 2012,
    rank: '78',
    title: 'Forks Over Knives: The Plant-Based Way to Health',
    author: 'Gene Stone'
  },
  {
    asin: '0310708257',
    year: 2012,
    rank: '79',
    title: 'The Jesus Storybook Bible: Every Story Whispers His Name',
    author: 'Sally Lloyd-Jones'
  },
  {
    asin: '0345527747',
    year: 2012,
    rank: '80',
    title: 'Notorious Nineteen: A Stephanie Plum Novel',
    author: 'Janet Evanovich'
  },
  {
    asin: '0547884591',
    year: 2012,
    rank: '81',
    title: 'The 4-Hour Chef: The Simple Path to Cooking Like a Pro, Learning Anything, and Living the Good Life',
    author: 'Timothy Ferriss'
  },
  {
    asin: '0375507256',
    year: 2012,
    rank: '82',
    title: 'Cloud Atlas: A Novel',
    author: 'David Mitchell'
  },
  {
    asin: '0061122416',
    year: 2012,
    rank: '83',
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    asin: '0439023483',
    year: 2012,
    rank: '84',
    title: 'The Hunger Games (The Hunger Games, Book 1)',
    author: 'Suzanne Collins'
  },
  {
    asin: '1594631298',
    year: 2012,
    rank: '85',
    title: 'Help, Thanks, Wow: The Three Essential Prayers',
    author: 'Anne Lamott'
  },
  {
    asin: '0375869026',
    year: 2012,
    rank: '86',
    title: 'Wonder',
    author: 'R. J. Palacio'
  },
  {
    asin: '0984912401',
    year: 2012,
    rank: '87',
    title: 'Stop Living In This Land, Go To The Everlasting World Of Happiness, Live There Forever',
    author: 'Woo Myung'
  },
  {
    asin: '0307731715',
    year: 2012,
    rank: '88',
    title: 'To Heaven and Back: A Doctor\'s Extraordinary Account of Her Death, Heaven, Angels, and Life Again: A True Story',
    author: 'Mary C. Neal'
  },
  {
    asin: '1615190619',
    year: 2012,
    rank: '89',
    title: 'Forks Over Knives - The Cookbook: Over 300 Recipes for Plant-Based Eating All Through the Year',
    author: 'Del Sroufe'
  },
  {
    asin: '1594135851',
    year: 2012,
    rank: '90',
    title: 'Catching Fire (Hunger Games)',
    author: 'Suzanne Collins'
  },
  {
    asin: '0765325950',
    year: 2012,
    rank: '91',
    title: 'A Memory of Light  (Wheel of Time, Book 14)',
    author: 'Robert Jordan'
  },
  {
    asin: '1419702238',
    year: 2012,
    rank: '92',
    title: 'Cabin Fever (Diary of a Wimpy Kid, Book 6)',
    author: 'Jeff Kinney'
  },
  {
    asin: '0684856093',
    year: 2012,
    rank: '93',
    title: 'The 7 Habits of Highly Effective Teens: The Ultimate Teenage Success Guide',
    author: 'Sean Covey'
  },
  {
    asin: '0679405070',
    year: 2012,
    rank: '94',
    title: 'The Passage of Power: The Years of Lyndon Johnson',
    author: 'Robert A. Caro'
  },
  {
    asin: '0061658197',
    year: 2012,
    rank: '95',
    title: 'The Pioneer Woman Cooks: Recipes from an Accidental Country Girl',
    author: 'Ree Drummond'
  },
  {
    asin: '1476714428',
    year: 2012,
    rank: '96',
    title: 'Divine Healing Hands: Experience Divine Power to Heal You, Animals, and Nature, and to Transform All Life (Soul Power)',
    author: 'Zhi Gang Sha Dr.'
  },
  {
    asin: '1932100660',
    year: 2012,
    rank: '97',
    title: 'The China Study: The Most Comprehensive Study of Nutrition Ever Conducted And the Startling Implications for Diet, Weight Loss, And Long-term Health',
    author: 'Thomas Campbell'
  },
  {
    asin: '0525952470',
    year: 2012,
    rank: '99',
    title: 'The Meaning of Marriage: Facing the Complexities of Commitment with the Wisdom of God',
    author: 'Timothy Keller'
  },
  {
    asin: '0374500010',
    year: 2012,
    rank: '100',
    title: 'Night (Night)',
    author: 'Elie Wiesel'
  },
  {
    asin: '159562015X',
    year: 2013,
    rank: '1',
    title: 'StrengthsFinder 2.0',
    author: 'Tom Rath'
  },
  {
    asin: '0385349947',
    year: 2013,
    rank: '2',
    title: 'Lean In: Women, Work, and the Will to Lead',
    author: 'Sheryl Sandberg'
  },
  {
    asin: '1419711326',
    year: 2013,
    rank: '3',
    title: 'Diary of a Wimpy Kid: Hard Luck, Book 8',
    author: 'Jeff Kinney'
  },
  {
    asin: '1476755868',
    year: 2013,
    rank: '4',
    title: 'Rush Revere and the Brave Pilgrims: Time-Travel Adventures with Exceptional Americans',
    author: 'Rush Limbaugh'
  },
  {
    asin: '1591451884',
    year: 2013,
    rank: '5',
    title: 'Jesus Calling: Enjoying Peace in His Presence',
    author: 'Sarah Young'
  },
  {
    asin: '0385537859',
    year: 2013,
    rank: '6',
    title: 'Inferno',
    author: 'Dan Brown'
  },
  {
    asin: '1423146727',
    year: 2013,
    rank: '7',
    title: 'The House of Hades (Heroes of Olympus, Book 4)',
    author: 'Rick Riordan'
  },
  {
    asin: '0385349173',
    year: 2013,
    rank: '8',
    title: 'Things That Matter: Three Decades of Passions, Pastimes and Politics',
    author: 'Charles Krauthammer'
  },
  {
    asin: '0743273567',
    year: 2013,
    rank: '9',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    asin: '0805098542',
    year: 2013,
    rank: '10',
    title: 'Killing Jesus (Bill O\'Reilly\'s Killing Series)',
    author: 'Bill O\'Reilly'
  },
  {
    asin: '1451695195',
    year: 2013,
    rank: '11',
    title: 'Proof of Heaven: A Neurosurgeon\'s Journey into the Afterlife',
    author: 'Eben Alexander'
  },
  {
    asin: '0890425558',
    year: 2013,
    rank: '12',
    title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition: DSM-5',
    author: 'American Psychiatric…'
  },
  {
    asin: '0874478529',
    year: 2013,
    rank: '13',
    title: 'The Official SAT Study Guide Second Edition',
    author: 'The College Board'
  },
  {
    asin: '0525478817',
    year: 2013,
    rank: '14',
    title: 'The Fault in Our Stars',
    author: 'John Green'
  },
  {
    asin: '0375842209',
    year: 2013,
    rank: '15',
    title: 'The Book Thief',
    author: 'Markus Zusak'
  },
  {
    asin: '0375869026',
    year: 2013,
    rank: '16',
    title: 'Wonder',
    author: 'R. J. Palacio'
  },
  {
    asin: '0802473156',
    year: 2013,
    rank: '17',
    title: 'The 5 Love Languages: The Secret to Love That Lasts',
    author: 'Gary Chapman'
  },
  {
    asin: '1433805618',
    year: 2013,
    rank: '18',
    title: 'Publication Manual of the American Psychological Association, 6th Edition',
    author: 'American…'
  },
  {
    asin: '0062024035',
    year: 2013,
    rank: '19',
    title: 'Divergent',
    author: 'Veronica Roth'
  },
  {
    asin: '0800788036',
    year: 2013,
    rank: '20',
    title: 'Laugh-Out-Loud Jokes for Kids',
    author: 'Rob Elliott'
  },
  {
    asin: '0679805273',
    year: 2013,
    rank: '21',
    title: 'Oh, the Places You\'ll Go!  ',
    author: 'Dr. Seuss'
  },
  {
    asin: '0316204366',
    year: 2013,
    rank: '22',
    title: 'David and Goliath: Underdogs, Misfits, and the Art of Battling Giants',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '0345529057',
    year: 2013,
    rank: '23',
    title: 'A Song of Ice and Fire, (4 Vols.): A Game of Thrones / A Clash of Kings / A Storm of Swords / A Feast for Crows',
    author: 'George R.R. Martin'
  },
  {
    asin: '006202406X',
    year: 2013,
    rank: '24',
    title: 'Allegiant (Divergent Series)',
    author: 'Veronica Roth'
  },
  {
    asin: '159463176X',
    year: 2013,
    rank: '25',
    title: 'And the Mountains Echoed',
    author: 'Khaled Hosseini'
  },
  {
    asin: '1250038820',
    year: 2013,
    rank: '26',
    title: 'Humans of New York',
    author: 'Brandon Stanton'
  },
  {
    asin: '1616550414',
    year: 2013,
    rank: '27',
    title: 'The Legend of Zelda: Hyrule Historia',
    author: 'Patrick Thorpe'
  },
  {
    asin: '1476727651',
    year: 2013,
    rank: '28',
    title: 'Doctor Sleep: A Novel',
    author: 'Stephen King'
  },
  {
    asin: '0800788222',
    year: 2013,
    rank: '29',
    title: 'Knock-Knock Jokes for Kids',
    author: 'Rob Elliott'
  },
  {
    asin: '0316055433',
    year: 2013,
    rank: '30',
    title: 'The Goldfinch: A Novel (Pulitzer Prize for Fiction)',
    author: 'Donna Tartt'
  },
  {
    asin: '1878424319',
    year: 2013,
    rank: '31',
    title: 'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
    author: 'Don Miguel Ruiz'
  },
  {
    asin: '030758836X',
    year: 2013,
    rank: '32',
    title: 'Gone Girl',
    author: 'Gillian Flynn'
  },
  {
    asin: '159523103X',
    year: 2013,
    rank: '33',
    title: 'George Washington\'s Secret Six: The Spy Ring That Saved the American Revolution',
    author: 'Brian Kilmeade'
  },
  {
    asin: '0307352153',
    year: 2013,
    rank: '34',
    title: 'Quiet: The Power of Introverts in a World That Can\'t Stop Talking',
    author: 'Susan Cain'
  },
  {
    asin: '0811877825',
    year: 2013,
    rank: '35',
    title: 'Goodnight, Goodnight Construction Site',
    author: 'Sherri Duskey Rinker'
  },
  {
    asin: '0385537131',
    year: 2013,
    rank: '36',
    title: 'Sycamore Row (Jake Brigance)',
    author: 'John Grisham'
  },
  {
    asin: '1609611543',
    year: 2013,
    rank: '37',
    title: 'Wheat Belly: Lose the Wheat, Lose the Weight, and Find Your Path Back to Health',
    author: 'William Davis'
  },
  {
    asin: '0062225227',
    year: 2013,
    rank: '38',
    title: 'The Pioneer Woman Cooks: A Year of Holidays: 140 Step-by-Step Recipes for Simple, Scrumptious Celebrations',
    author: 'Ree Drummond'
  },
  {
    asin: '0399255370',
    year: 2013,
    rank: '39',
    title: 'The Day the Crayons Quit',
    author: 'Drew Daywalt'
  },
  {
    asin: '1476726094',
    year: 2013,
    rank: '40',
    title: 'Happy, Happy, Happy: My Life and Legacy as the Duck Commander',
    author: 'Phil Robertson'
  },
  {
    asin: '0399226907',
    year: 2013,
    rank: '41',
    title: 'The Very Hungry Caterpillar',
    author: null
  },
  {
    asin: '1592407331',
    year: 2013,
    rank: '42',
    title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
    author: 'Brené Brown'
  },
  {
    asin: '0743269519',
    year: 2013,
    rank: '43',
    title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
    author: 'Stephen R. Covey'
  },
  {
    asin: '1781162646',
    year: 2013,
    rank: '44',
    title: 'Joyland (Hard Case Crime Novels)',
    author: 'Stephen King'
  },
  {
    asin: '0345803485',
    year: 2013,
    rank: '45',
    title: 'Fifty Shades of Grey: Book One of the Fifty Shades Trilogy (Fifty Shades of Grey Series)',
    author: 'E L James'
  },
  {
    asin: '1940363071',
    year: 2013,
    rank: '46',
    title: 'Soul Healing Miracles: Ancient and New Sacred Wisdom, Knowledge, and Practical Techniques for Healing the Spiritual, Mental, Emotional, and Physical Bodies',
    author: 'Zhi Gang Sha'
  },
  {
    asin: '1250035864',
    year: 2013,
    rank: '47',
    title: 'Shred: The Revolutionary Diet: 6 Weeks 4 Inches 2 Sizes',
    author: 'Ian K. Smith M.D.'
  },
  {
    asin: '1451666179',
    year: 2013,
    rank: '48',
    title: 'Hyperbole and a Half: Unfortunate Situations, Flawed Coping Mechanisms, Mayhem, and Other Things That Happened',
    author: 'Allie Brosh'
  },
  {
    asin: '0446310786',
    year: 2013,
    rank: '49',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    asin: '0787960756',
    year: 2013,
    rank: '50',
    title: 'The Five Dysfunctions of a Team: A Leadership Fable',
    author: 'Patrick Lencioni'
  },
  {
    asin: '1400064163',
    year: 2013,
    rank: '51',
    title: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption',
    author: 'Laura Hillenbrand'
  },
  {
    asin: '0812550706',
    year: 2013,
    rank: '52',
    title: 'Ender\'s Game (The Ender Quintet)',
    author: 'Orson Scott Card'
  },
  {
    asin: '159285849X',
    year: 2013,
    rank: '53',
    title: 'The Gifts of Imperfection: Let Go of Who You Think You\'re Supposed to Be and Embrace Who You Are',
    author: 'Brené Brown'
  },
  {
    asin: '0316206849',
    year: 2013,
    rank: '54',
    title: 'The Cuckoo\'s Calling (A Cormoran Strike Novel)',
    author: 'Robert Galbraith'
  },
  {
    asin: '0761148574',
    year: 2013,
    rank: '55',
    title: 'What to Expect When You\'re Expecting',
    author: 'Heidi Murkoff'
  },
  {
    asin: '0310330912',
    year: 2013,
    rank: '56',
    title: 'America the Beautiful: Rediscovering What Made This Nation Great',
    author: 'Ben Carson M.D.'
  },
  {
    asin: '1451606273',
    year: 2013,
    rank: '57',
    title: 'The Liberty Amendments: Restoring the American Republic',
    author: 'Mark R. Levin'
  },
  {
    asin: '140006922X',
    year: 2013,
    rank: '58',
    title: 'ZEALOT: The Life and Times of Jesus of Nazareth',
    author: 'Reza Aslan'
  },
  {
    asin: '0061992259',
    year: 2013,
    rank: '59',
    title: 'The One and Only Ivan',
    author: 'Katherine Applegate'
  },
  {
    asin: '0066620996',
    year: 2013,
    rank: '60',
    title: 'Good to Great: Why Some Companies Make the Leap and Others Don\'t',
    author: 'Jim Collins'
  },
  {
    asin: '1476745374',
    year: 2013,
    rank: '61',
    title: 'SI-COLOGY 1: Tales and Wisdom from Duck Dynasty\'s Favorite Uncle',
    author: 'Si Robertson'
  },
  {
    asin: '1455522716',
    year: 2013,
    rank: '62',
    title: 'IT\'S ALL GOOD: Delicious, Easy Recipes That Will Make You Look Good and Feel Great',
    author: 'Gwyneth Paltrow'
  },
  {
    asin: '0316017930',
    year: 2013,
    rank: '63',
    title: 'Outliers: The Story of Success',
    author: 'Malcolm Gladwell'
  },
  {
    asin: '1607743949',
    year: 2013,
    rank: '64',
    title: 'Jerusalem: A Cookbook',
    author: 'Yotam Ottolenghi'
  },
  {
    asin: '1936608588',
    year: 2013,
    rank: '65',
    title: 'Becoming a Supple Leopard: The Ultimate Guide to Resolving Pain, Preventing Injury, and Optimizing Athletic Performance',
    author: 'Kelly Starrett'
  },
  {
    asin: '031623480X',
    year: 2013,
    rank: '66',
    title: 'Grain Brain: The Surprising Truth about Wheat, Carbs,  and Sugar--Your Brain\'s Silent Killers',
    author: 'David Perlmutter'
  },
  {
    asin: '0142402516',
    year: 2013,
    rank: '67',
    title: 'Looking for Alaska',
    author: 'John Green'
  },
  {
    asin: '0316322407',
    year: 2013,
    rank: '68',
    title: 'I Am Malala: The Girl Who Stood Up for Education and Was Shot by the Taliban',
    author: 'Malala Yousafzai'
  },
  {
    asin: '0920668372',
    year: 2013,
    rank: '69',
    title: 'Love You Forever',
    author: 'Robert Munsch'
  },
  {
    asin: '1451696191',
    year: 2013,
    rank: '70',
    title: 'The Perks of Being a Wallflower',
    author: 'Stephen Chbosky'
  },
  {
    asin: '1936608758',
    year: 2013,
    rank: '71',
    title: 'Practical Paleo: A Customized Approach to Health and a Whole-Foods Lifestyle',
    author: 'Diane Sanfilippo'
  },
  {
    asin: '034580404X',
    year: 2013,
    rank: '72',
    title: 'Fifty Shades Trilogy (Fifty Shades of Grey / Fifty Shades Darker / Fifty Shades Freed)',
    author: 'E L James'
  },
  {
    asin: '1476734941',
    year: 2013,
    rank: '73',
    title: 'The FastDiet: Lose Weight, Stay Healthy, and Live Longer with the Simple Secret of Intermittent Fasting',
    author: 'Dr Michael Mosley'
  },
  {
    asin: '0310708257',
    year: 2013,
    rank: '74',
    title: 'The Jesus Storybook Bible: Every Story Whispers His Name',
    author: 'Sally Lloyd-Jones'
  },
  {
    asin: '0062024043',
    year: 2013,
    rank: '75',
    title: 'Divergent / Insurgent',
    author: 'Veronica Roth'
  },
  {
    asin: '0671027034',
    year: 2013,
    rank: '76',
    title: 'How to Win Friends & Influence People',
    author: 'Dale Carnegie'
  },
  {
    asin: '141654786X',
    year: 2013,
    rank: '77',
    title: 'The Bully Pulpit: Theodore Roosevelt, William Howard Taft, and the Golden Age of Journalism',
    author: 'Doris Kearns Goodwin'
  },
  {
    asin: '0439023521',
    year: 2013,
    rank: '78',
    title: 'The Hunger Games (Book 1)',
    author: 'Suzanne Collins'
  },
  {
    asin: '0893348627',
    year: 2013,
    rank: '79',
    title: 'ObamaCare Survival Guide: The Affordable Care Act and What It Means for You and Your Healthcare',
    author: 'Nick J. Tate'
  },
  {
    asin: '161638610X',
    year: 2013,
    rank: '80',
    title: 'The Harbinger: The Ancient Mystery that Holds the Secret of America\'s Future',
    author: 'Jonathan Cahn'
  },
  {
    asin: '1400052181',
    year: 2013,
    rank: '81',
    title: 'The Immortal Life of Henrietta Lacks',
    author: 'Rebecca Skloot'
  },
  {
    asin: '0374500010',
    year: 2013,
    rank: '82',
    title: 'Night (Night)',
    author: 'Elie Wiesel'
  },
  {
    asin: '0345803493',
    year: 2013,
    rank: '83',
    title: 'Fifty Shades Darker',
    author: 'E. L. James'
  },
  {
    asin: '031612091X',
    year: 2013,
    rank: '84',
    title: 'Eat to Live: The Amazing Nutrient-Rich Program for Fast and Sustained Weight Loss, Revised Edition',
    author: 'Joel Fuhrman'
  },
  {
    asin: '1615190619',
    year: 2013,
    rank: '85',
    title: 'Forks Over Knives - The Cookbook: Over 300 Recipes for Plant-Based Eating All Through the Year',
    author: 'Del Sroufe'
  },
  {
    asin: '0345803507',
    year: 2013,
    rank: '86',
    title: 'Fifty Shades Freed: Book Three of the Fifty Shades Trilogy (Fifty Shades of Grey Series) (English Edition)',
    author: 'E L James'
  },
  {
    asin: '0061122416',
    year: 2013,
    rank: '87',
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    asin: '0316769487',
    year: 2013,
    rank: '88',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger'
  },
  {
    asin: '0345472322',
    year: 2013,
    rank: '89',
    title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck'
  },
  {
    asin: '1609619366',
    year: 2013,
    rank: '90',
    title: 'Wheat Belly Cookbook: 150 Recipes to Help You Lose the Wheat, Lose the Weight, and Find Your Path Back to Health',
    author: 'William Davis MD'
  },
  {
    asin: '032119991X',
    year: 2013,
    rank: '91',
    title: 'MyMathLab: Student Access Kit',
    author: 'Hall H Pearson…'
  },
  {
    asin: '1609580834',
    year: 2013,
    rank: '92',
    title: 'The Care and Keeping of You: The Body Book for Younger Girls, Revised Edition',
    author: 'Valorie Schaefer'
  },
  {
    asin: '1400069289',
    year: 2013,
    rank: '93',
    title: 'The Power of Habit: Why We Do What We Do in Life and Business',
    author: 'Charles Duhigg'
  },
  {
    asin: '0812994868',
    year: 2013,
    rank: '94',
    title: 'The Reason I Jump: The Inner Voice of a Thirteen-Year-Old Boy with Autism',
    author: 'Naoki Higashida'
  },
  {
    asin: '1595620257',
    year: 2013,
    rank: '95',
    title: 'Strengths Based Leadership: Great Leaders, Teams, and Why People Follow',
    author: 'Tom Rath'
  },
  {
    asin: '1609789369',
    year: 2013,
    rank: '96',
    title: 'Kaplan GRE Premier 2014 with 6 Practice Tests: book + online + DVD + mobile',
    author: 'Kaplan'
  },
  {
    asin: '1455520659',
    year: 2013,
    rank: '97',
    title: 'The Longest Ride',
    author: 'Nicholas Sparks'
  },
  {
    asin: '0985462736',
    year: 2013,
    rank: '98',
    title: 'Life Code: The New Rules for Winning in the Real World',
    author: 'Phil McGraw'
  },
  {
    asin: '0756686067',
    year: 2013,
    rank: '99',
    title: 'The Lego Ideas Book: Unlock Your Imagination',
    author: 'Daniel Lipkowitz'
  },
  {
    asin: '0765325950',
    year: 2013,
    rank: '100',
    title: 'A Memory of Light  (Wheel of Time, Book 14)',
    author: 'Robert Jordan'
  },
  {
    asin: '159562015X',
    year: 2014,
    rank: '1',
    title: 'StrengthsFinder 2.0',
    author: 'Tom Rath'
  },
  {
    asin: '0736430512',
    year: 2014,
    rank: '2',
    title: 'Frozen Little Golden Book (Disney Frozen)',
    author: 'RH Disney'
  },
  {
    asin: '0800788036',
    year: 2014,
    rank: '3',
    title: 'Laugh-Out-Loud Jokes for Kids',
    author: 'Rob Elliott'
  },
  {
    asin: '014242417X',
    year: 2014,
    rank: '4',
    title: 'The Fault in Our Stars',
    author: 'John Green'
  },
  {
    asin: '141971189X',
    year: 2014,
    rank: '5',
    title: 'Diary of a Wimpy Kid: The Long Haul',
    author: 'Jeff Kinney'
  },
  {
    asin: '080509668X',
    year: 2014,
    rank: '6',
    title: 'Killing Patton: The Strange Death of World War II\'s Most Audacious General (Bill O\'Reilly\'s Killing Series)',
    author: 'Bill O\'Reilly'
  },
  {
    asin: '0544272994',
    year: 2014,
    rank: '7',
    title: 'What If?: Serious Scientific Answers to Absurd Hypothetical Questions',
    author: 'Randall Munroe'
  },
  {
    asin: '1423146735',
    year: 2014,
    rank: '8',
    title: 'The Blood of Olympus (The Heroes of Olympus)',
    author: 'Rick Riordan'
  },
  {
    asin: '1591451884',
    year: 2014,
    rank: '9',
    title: 'Jesus Calling: Enjoying Peace in His Presence',
    author: 'Sarah Young'
  },
  {
    asin: '0812974492',
    year: 2014,
    rank: '10',
    title: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption',
    author: 'Laura Hillenbrand'
  },
  {
    asin: '1465414053',
    year: 2014,
    rank: '11',
    title: 'Ultimate Sticker Book: Frozen (Ultimate Sticker Books)',
    author: 'DK Publishing'
  },
  {
    asin: '0399255370',
    year: 2014,
    rank: '12',
    title: 'The Day the Crayons Quit',
    author: 'Drew Daywalt'
  },
  {
    asin: '0062024035',
    year: 2014,
    rank: '13',
    title: 'Divergent',
    author: 'Veronica Roth'
  },
  {
    asin: '0525478817',
    year: 2014,
    rank: '14',
    title: 'The Fault in Our Stars',
    author: 'John Green'
  },
  {
    asin: '0679805273',
    year: 2014,
    rank: '15',
    title: 'Oh, the Places You\'ll Go!  ',
    author: 'Dr. Seuss'
  },
  {
    asin: '0446310786',
    year: 2014,
    rank: '16',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    asin: '0307588378',
    year: 2014,
    rank: '17',
    title: 'Gone Girl',
    author: 'Gillian Flynn'
  },
  {
    asin: '0375842209',
    year: 2014,
    rank: '18',
    title: 'The Book Thief',
    author: 'Markus Zusak'
  },
  {
    asin: '0874478529',
    year: 2014,
    rank: '19',
    title: 'The Official SAT Study Guide Second Edition',
    author: 'The College Board'
  },
  {
    asin: '1250038820',
    year: 2014,
    rank: '20',
    title: 'Humans of New York',
    author: 'Brandon Stanton'
  },
  {
    asin: '0316055433',
    year: 2014,
    rank: '21',
    title: 'The Goldfinch: A Novel (Pulitzer Prize for Fiction)',
    author: 'Donna Tartt'
  },
  {
    asin: '0890425558',
    year: 2014,
    rank: '22',
    title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition: DSM-5',
    author: 'American Psychiatric…'
  },
  {
    asin: '0375869026',
    year: 2014,
    rank: '23',
    title: 'Wonder',
    author: 'R. J. Palacio'
  },
  {
    asin: '0803741715',
    year: 2014,
    rank: '24',
    title: 'The Book with No Pictures',
    author: 'B. J. Novak'
  },
  {
    asin: '1476755884',
    year: 2014,
    rank: '25',
    title: 'Rush Revere and the First Patriots: Time-Travel Adventures With Exceptional Americans',
    author: 'Rush Limbaugh'
  },
  {
    asin: '0802473156',
    year: 2014,
    rank: '26',
    title: 'The 5 Love Languages: The Secret to Love That Lasts',
    author: 'Gary Chapman'
  },
  {
    asin: '0800788222',
    year: 2014,
    rank: '27',
    title: 'Knock-Knock Jokes for Kids',
    author: 'Rob Elliott'
  },
  {
    asin: '0736431217',
    year: 2014,
    rank: '28',
    title: 'JOURNEY TO THE ICE P',
    author: 'RH Disney'
  },
  {
    asin: '1433805618',
    year: 2014,
    rank: '29',
    title: 'Publication Manual of the American Psychological Association, 6th Edition',
    author: 'American…'
  },
  {
    asin: '0547248288',
    year: 2014,
    rank: '30',
    title: 'Little Blue Truck Board Book',
    author: 'Alice Schertle'
  },
  {
    asin: '0307464881',
    year: 2014,
    rank: '31',
    title: 'Make It Ahead: A Barefoot Contessa Cookbook',
    author: 'Ina Garten'
  },
  {
    asin: '0312510780',
    year: 2014,
    rank: '32',
    title: 'First 100 Words',
    author: 'Roger Priddy'
  },
  {
    asin: '014241543X',
    year: 2014,
    rank: '33',
    title: 'If I Stay',
    author: 'Gayle Forman'
  },
  {
    asin: '0345535529',
    year: 2014,
    rank: '34',
    title: 'A Game of Thrones / A Clash of Kings / A Storm of Swords / A Feast of Crows / A Dance with Dragons',
    author: 'George R R Martin'
  },
  {
    asin: '0062024043',
    year: 2014,
    rank: '35',
    title: 'Divergent / Insurgent',
    author: 'Veronica Roth'
  },
  {
    asin: '067443000X',
    year: 2014,
    rank: '36',
    title: 'Capital in the Twenty First Century',
    author: 'Thomas Piketty'
  },
  {
    asin: '0061950726',
    year: 2014,
    rank: '37',
    title: 'Orphan Train',
    author: 'Christina Baker Kline'
  },
  {
    asin: '0345472322',
    year: 2014,
    rank: '38',
    title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck'
  },
  {
    asin: '0671027034',
    year: 2014,
    rank: '39',
    title: 'How to Win Friends & Influence People',
    author: 'Dale Carnegie'
  },
  {
    asin: '0399226907',
    year: 2014,
    rank: '40',
    title: 'The Very Hungry Caterpillar',
    author: null
  },
  {
    asin: '1476746583',
    year: 2014,
    rank: '41',
    title: 'All the Light We Cannot See',
    author: 'Anthony Doerr'
  },
  {
    asin: '031623480X',
    year: 2014,
    rank: '42',
    title: 'Grain Brain: The Surprising Truth about Wheat, Carbs,  and Sugar--Your Brain\'s Silent Killers',
    author: 'David Perlmutter'
  },
  {
    asin: '1400064163',
    year: 2014,
    rank: '43',
    title: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption',
    author: 'Laura Hillenbrand'
  },
  {
    asin: '1623363586',
    year: 2014,
    rank: '44',
    title: 'Thug Kitchen: The Official Cookbook: Eat Like You Give a F*ck',
    author: 'Thug Kitchen'
  },
  {
    asin: '0061122416',
    year: 2014,
    rank: '45',
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    asin: '0142402516',
    year: 2014,
    rank: '46',
    title: 'Looking for Alaska',
    author: 'John Green'
  },
  {
    asin: '0743273567',
    year: 2014,
    rank: '47',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    asin: '0143125478',
    year: 2014,
    rank: '48',
    title: 'The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics',
    author: 'Daniel James Brown'
  },
  {
    asin: '0920668372',
    year: 2014,
    rank: '49',
    title: 'Love You Forever',
    author: 'Robert Munsch'
  },
  {
    asin: '0385737955',
    year: 2014,
    rank: '50',
    title: 'The Maze Runner (Book 1)',
    author: 'James Dashner'
  },
  {
    asin: '006202406X',
    year: 2014,
    rank: '51',
    title: 'Allegiant (Divergent Series)',
    author: 'Veronica Roth'
  },
  {
    asin: '0062268341',
    year: 2014,
    rank: '52',
    title: 'Yes Please',
    author: 'Amy Poehler'
  },
  {
    asin: '0787960756',
    year: 2014,
    rank: '53',
    title: 'The Five Dysfunctions of a Team: A Leadership Fable',
    author: 'Patrick Lencioni'
  },
  {
    asin: '1878424319',
    year: 2014,
    rank: '54',
    title: 'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
    author: 'Don Miguel Ruiz'
  },
  {
    asin: '1451639619',
    year: 2014,
    rank: '55',
    title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0553447785',
    year: 2014,
    rank: '56',
    title: '41: A Portrait of My Father',
    author: 'George W. Bush'
  },
  {
    asin: '0545685192',
    year: 2014,
    rank: '57',
    title: 'Minecraft: The Complete Handbook Collection',
    author: 'Stephanie Milton'
  },
  {
    asin: '0736431209',
    year: 2014,
    rank: '58',
    title: 'A Tale of Two Sisters (Disney Frozen) (Step into Reading)',
    author: 'Melissa Lagonegro'
  },
  {
    asin: '1476755868',
    year: 2014,
    rank: '59',
    title: 'Rush Revere and the Brave Pilgrims: Time-Travel Adventures with Exceptional Americans',
    author: 'Rush Limbaugh'
  },
  {
    asin: '159285849X',
    year: 2014,
    rank: '60',
    title: 'The Gifts of Imperfection: Let Go of Who You Think You\'re Supposed to Be and Embrace Who You Are',
    author: 'Brené Brown'
  },
  {
    asin: '0062278789',
    year: 2014,
    rank: '61',
    title: 'Divergent / Insurgent / Allegiant',
    author: 'Veronica Roth'
  },
  {
    asin: '0849946158',
    year: 2014,
    rank: '62',
    title: 'Heaven is for Real: A Little Boy\'s Astounding Story of His Trip to Heaven and Back',
    author: 'Todd Burpo'
  },
  {
    asin: '0393244660',
    year: 2014,
    rank: '63',
    title: 'Flash Boys',
    author: 'Michael Lewis'
  },
  {
    asin: '1476789878',
    year: 2014,
    rank: '64',
    title: 'Rush Revere and the American Revolution: Time-Travel Adventures With Exceptional Americans',
    author: 'Rush Limbaugh'
  },
  {
    asin: '141694737X',
    year: 2014,
    rank: '65',
    title: 'Dear Zoo: A Lift-the-Flap Book',
    author: 'Rod Campbell'
  },
  {
    asin: '0671449028',
    year: 2014,
    rank: '66',
    title: 'The Going-To-Bed Book',
    author: 'Sandra Boynton'
  },
  {
    asin: '0553805444',
    year: 2014,
    rank: '67',
    title: 'The World of Ice & Fire: The Untold History of Westeros and the Game of Thrones',
    author: 'George R. R. Martin'
  },
  {
    asin: '0768934400',
    year: 2014,
    rank: '68',
    title: 'The Real ACT (CD) 3rd Edition (Official Act Prep Guide)',
    author: 'ACT'
  },
  {
    asin: '038553714X',
    year: 2014,
    rank: '69',
    title: 'Gray Mountain: A Novel',
    author: 'John Grisham'
  },
  {
    asin: '0761148574',
    year: 2014,
    rank: '70',
    title: 'What to Expect When You\'re Expecting',
    author: 'Heidi Murkoff'
  },
  {
    asin: '0310708257',
    year: 2014,
    rank: '71',
    title: 'The Jesus Storybook Bible: Every Story Whispers His Name',
    author: 'Sally Lloyd-Jones'
  },
  {
    asin: '0385349947',
    year: 2014,
    rank: '72',
    title: 'Lean In: Women, Work, and the Will to Lead',
    author: 'Sheryl Sandberg'
  },
  {
    asin: '0670024783',
    year: 2014,
    rank: '73',
    title: 'The Invention of Wings',
    author: 'Sue Monk Kidd'
  },
  {
    asin: '0399501487',
    year: 2014,
    rank: '74',
    title: 'Lord of the Flies',
    author: 'William Golding'
  },
  {
    asin: '0374500010',
    year: 2014,
    rank: '75',
    title: 'Night (Night)',
    author: 'Elie Wiesel'
  },
  {
    asin: '0316769487',
    year: 2014,
    rank: '76',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger'
  },
  {
    asin: '1940363071',
    year: 2014,
    rank: '77',
    title: 'Soul Healing Miracles: Ancient and New Sacred Wisdom, Knowledge, and Practical Techniques for Healing the Spiritual, Mental, Emotional, and Physical Bodies',
    author: 'Zhi Gang Sha'
  },
  {
    asin: '1609580834',
    year: 2014,
    rank: '78',
    title: 'The Care and Keeping of You: The Body Book for Younger Girls, Revised Edition',
    author: 'Valorie Schaefer'
  },
  {
    asin: '0385345623',
    year: 2014,
    rank: '79',
    title: 'The Skinnytaste Cookbook: Light on Calories, Big on Flavor',
    author: 'Gina Homolka'
  },
  {
    asin: '1451673310',
    year: 2014,
    rank: '80',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury'
  },
  {
    asin: '0811877825',
    year: 2014,
    rank: '81',
    title: 'Goodnight, Goodnight Construction Site',
    author: 'Sherri Duskey Rinker'
  },
  {
    asin: '014241493X',
    year: 2014,
    rank: '82',
    title: 'Paper Towns',
    author: 'John Green'
  },
  {
    asin: '1580625576',
    year: 2014,
    rank: '83',
    title: 'The Everything Kids\' Science Experiments Book: Boil Ice, Float Water, Measure Gravity-Challenge the World Around You!',
    author: 'Tom Robinson'
  },
  {
    asin: '0451524934',
    year: 2014,
    rank: '84',
    title: '1984 (Signet Classics)',
    author: 'George Orwell'
  },
  {
    asin: '014240733X',
    year: 2014,
    rank: '85',
    title: 'The Outsiders',
    author: 'S. E. Hinton'
  },
  {
    asin: '1476757801',
    year: 2014,
    rank: '86',
    title: 'MONEY Master the Game: 7 Simple Steps to Financial Freedom',
    author: 'Tony Robbins'
  },
  {
    asin: '0694003611',
    year: 2014,
    rank: '87',
    title: 'Goodnight Moon',
    author: 'Margaret Wise Brown'
  },
  {
    asin: '0307352153',
    year: 2014,
    rank: '88',
    title: 'Quiet: The Power of Introverts in a World That Can\'t Stop Talking',
    author: 'Susan Cain'
  },
  {
    asin: '1476770387',
    year: 2014,
    rank: '89',
    title: 'Revival: A Novel',
    author: 'Stephen King'
  },
  {
    asin: '0545392551',
    year: 2014,
    rank: '90',
    title: 'Giraffes Can\'t Dance',
    author: 'Giles Andreae'
  },
  {
    asin: '054568515X',
    year: 2014,
    rank: '91',
    title: 'Minecraft: Redstone Handbook: An Official Mojang Book',
    author: 'Scholastic'
  },
  {
    asin: '0140177396',
    year: 2014,
    rank: '92',
    title: 'Of Mice and Men',
    author: 'John Steinbeck'
  },
  {
    asin: '0982301820',
    year: 2014,
    rank: '93',
    title: '10-Day Green Smoothie Cleanse: Lose Up to 15 Pounds in 10 Days!',
    author: 'JJ Smith'
  },
  {
    asin: '0071771328',
    year: 2014,
    rank: '94',
    title: 'Crucial Conversations Tools for Talking When Stakes Are High, Second Edition',
    author: 'Kerry Patterson'
  },
  {
    asin: '0736430881',
    year: 2014,
    rank: '95',
    title: 'A Day in the Sun (Disney Frozen) (Pictureback(R))',
    author: 'Frank Berrios'
  },
  {
    asin: '0440237688',
    year: 2014,
    rank: '96',
    title: 'The Giver (Giver Quartet)',
    author: 'Lois Lowry'
  },
  {
    asin: '1442450703',
    year: 2014,
    rank: '97',
    title: 'Chicka Chicka Boom Boom (Board Book)',
    author: 'Bill Martin Jr.'
  },
  {
    asin: '1936608367',
    year: 2014,
    rank: '98',
    title: 'Against All Grain: Delectable Paleo Recipes to Eat Well & Feel Great',
    author: 'Danielle Walker'
  },
  {
    asin: '0545669936',
    year: 2014,
    rank: '99',
    title: 'Minecraft: Essential Handbook: An Official Mojang Book',
    author: 'Stephanie Milton'
  },
  {
    asin: '0066620996',
    year: 2014,
    rank: '100',
    title: 'Good to Great: Why Some Companies Make the Leap and Others Don\'t',
    author: 'Jim Collins'
  },
  {
    asin: '0312510780',
    year: 2015,
    rank: '1',
    title: 'First 100 Words',
    author: 'Roger Priddy'
  },
  {
    asin: '1607747308',
    year: 2015,
    rank: '2',
    title: 'The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing',
    author: 'Marie Kondō'
  },
  {
    asin: '0800788036',
    year: 2015,
    rank: '3',
    title: 'Laugh-Out-Loud Jokes for Kids',
    author: 'Rob Elliott'
  },
  {
    asin: '1780671067',
    year: 2015,
    rank: '4',
    title: 'Secret Garden: An Inky Treasure Hunt and Coloring Book',
    author: 'Johanna Basford'
  },
  {
    asin: '159562015X',
    year: 2015,
    rank: '5',
    title: 'StrengthsFinder 2.0',
    author: 'Tom Rath'
  },
  {
    asin: '0062409859',
    year: 2015,
    rank: '6',
    title: 'Go Set a Watchman: A Novel',
    author: 'Harper Lee'
  },
  {
    asin: '1780674880',
    year: 2015,
    rank: '7',
    title: 'Enchanted Forest: An Inky Quest & Coloring Book',
    author: 'Johanna Basford'
  },
  {
    asin: '1476746583',
    year: 2015,
    rank: '8',
    title: 'All the Light We Cannot See',
    author: 'Anthony Doerr'
  },
  {
    asin: '1594633665',
    year: 2015,
    rank: '9',
    title: 'The Girl on the Train',
    author: 'Paula Hawkins'
  },
  {
    asin: '1941325122',
    year: 2015,
    rank: '10',
    title: 'Adult Coloring Book: Stress Relieving Patterns',
    author: 'Blue Star Coloring'
  },
  {
    asin: '1419717014',
    year: 2015,
    rank: '11',
    title: 'Old School (Diary of a Wimpy Kid #10)',
    author: 'Jeff Kinney'
  },
  {
    asin: '0446310786',
    year: 2015,
    rank: '12',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    asin: '1941325114',
    year: 2015,
    rank: '13',
    title: 'Adult Coloring Book: Stress Relieving Animal Designs',
    author: 'Blue Star Coloring'
  },
  {
    asin: '0996275460',
    year: 2015,
    rank: '14',
    title: 'Adult Coloring Books: A Coloring Book for Adults Featuring Mandalas and Henna Inspired Flowers, Animals, and Paisley Patterns',
    author: null
  },
  {
    asin: '1250058902',
    year: 2015,
    rank: '15',
    title: 'Humans of New York : Stories',
    author: 'Brandon Stanton'
  },
  {
    asin: '0553418025',
    year: 2015,
    rank: '16',
    title: 'The Martian',
    author: 'Andy Weir'
  },
  {
    asin: '0679805273',
    year: 2015,
    rank: '17',
    title: 'Oh, the Places You\'ll Go!  ',
    author: 'Dr. Seuss'
  },
  {
    asin: '0800788222',
    year: 2015,
    rank: '18',
    title: 'Knock-Knock Jokes for Kids',
    author: 'Rob Elliott'
  },
  {
    asin: '141694737X',
    year: 2015,
    rank: '19',
    title: 'Dear Zoo: A Lift-the-Flap Book',
    author: 'Rod Campbell'
  },
  {
    asin: '0399255370',
    year: 2015,
    rank: '20',
    title: 'The Day the Crayons Quit',
    author: 'Drew Daywalt'
  },
  {
    asin: '0143125478',
    year: 2015,
    rank: '21',
    title: 'The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics',
    author: 'Daniel James Brown'
  },
  {
    asin: '1591451884',
    year: 2015,
    rank: '22',
    title: 'Jesus Calling: Enjoying Peace in His Presence',
    author: 'Sarah Young'
  },
  {
    asin: '0345472322',
    year: 2015,
    rank: '23',
    title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck'
  },
  {
    asin: '1101946342',
    year: 2015,
    rank: '24',
    title: 'Grey: Fifty Shades of Grey as Told by Christian (Fifty Shades of Grey Series)',
    author: 'E L James'
  },
  {
    asin: '0486789640',
    year: 2015,
    rank: '25',
    title: 'Creative Haven Creative Cats Coloring Book (Adult Coloring)',
    author: null
  },
  {
    asin: '0671027034',
    year: 2015,
    rank: '26',
    title: 'How to Win Friends & Influence People',
    author: 'Dale Carnegie'
  },
  {
    asin: '080241270X',
    year: 2015,
    rank: '27',
    title: 'The 5 Love Languages: The Secret to Love that Lasts',
    author: 'Gary Chapman'
  },
  {
    asin: '1508582211',
    year: 2015,
    rank: '28',
    title: 'Balance (Angie\'s Extreme Stress Menders Volume 1)',
    author: 'Angie Grace'
  },
  {
    asin: '0486796647',
    year: 2015,
    rank: '29',
    title: 'Creative Haven Owls Coloring Book (Adult Coloring)',
    author: 'Marjorie Sarnat'
  },
  {
    asin: '1623363586',
    year: 2015,
    rank: '30',
    title: 'Thug Kitchen: The Official Cookbook: Eat Like You Give a F*ck',
    author: 'Thug Kitchen'
  },
  {
    asin: '0545392551',
    year: 2015,
    rank: '31',
    title: 'Giraffes Can\'t Dance',
    author: 'Giles Andreae'
  },
  {
    asin: '0375869026',
    year: 2015,
    rank: '32',
    title: 'Wonder',
    author: 'R. J. Palacio'
  },
  {
    asin: '1451639619',
    year: 2015,
    rank: '33',
    title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
    author: 'Stephen R. Covey'
  },
  {
    asin: '1878424319',
    year: 2015,
    rank: '34',
    title: 'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
    author: 'Don Miguel Ruiz'
  },
  {
    asin: '0805095152',
    year: 2015,
    rank: '35',
    title: 'Being Mortal: Medicine and What Matters in the End',
    author: 'Atul Gawande'
  },
  {
    asin: '0920668372',
    year: 2015,
    rank: '36',
    title: 'Love You Forever',
    author: 'Robert Munsch'
  },
  {
    asin: '0399226907',
    year: 2015,
    rank: '37',
    title: 'The Very Hungry Caterpillar',
    author: null
  },
  {
    asin: '1433805618',
    year: 2015,
    rank: '38',
    title: 'Publication Manual of the American Psychological Association, 6th Edition',
    author: 'American…'
  },
  {
    asin: '0812993543',
    year: 2015,
    rank: '39',
    title: 'Between the World and Me',
    author: 'Ta-Nehisi Coates'
  },
  {
    asin: '0756634687',
    year: 2015,
    rank: '40',
    title: 'Baby Touch and Feel: Animals',
    author: 'DK'
  },
  {
    asin: '0803741715',
    year: 2015,
    rank: '41',
    title: 'The Book with No Pictures',
    author: 'B. J. Novak'
  },
  {
    asin: '1476728747',
    year: 2015,
    rank: '42',
    title: 'The Wright Brothers',
    author: 'David McCullough'
  },
  {
    asin: '0486493105',
    year: 2015,
    rank: '43',
    title: 'Dover Creative Haven Art Nouveau Animal Designs Coloring Book (Adult Coloring)',
    author: null
  },
  {
    asin: '0312577222',
    year: 2015,
    rank: '44',
    title: 'The Nightingale: A Novel',
    author: 'Kristin Hannah'
  },
  {
    asin: '0062225243',
    year: 2015,
    rank: '45',
    title: 'The Pioneer Woman Cooks: Dinnertime - Comfort Classics, Freezer Food, 16-minute Meals, and Other Delicious Ways to Solve Supper',
    author: 'Ree Drummond'
  },
  {
    asin: '0553524267',
    year: 2015,
    rank: '46',
    title: 'What Pet Should I Get? (Classic Seuss)',
    author: 'Dr. Seuss'
  },
  {
    asin: '1627792414',
    year: 2015,
    rank: '47',
    title: 'Killing Reagan: The Violent Assault That Changed a Presidency (Bill O\'Reilly\'s Killing Series)',
    author: 'Bill O\'Reilly'
  },
  {
    asin: '1338029991',
    year: 2015,
    rank: '48',
    title: 'Harry Potter Coloring Book',
    author: 'Scholastic'
  },
  {
    asin: '0062238868',
    year: 2015,
    rank: '49',
    title: 'American Sniper: The Autobiography of the Most Lethal Sniper in U.S. Military History',
    author: 'Chris Kyle'
  },
  {
    asin: '0544609719',
    year: 2015,
    rank: '50',
    title: 'The Whole30: The 30-Day Guide to Total Health and Food Freedom',
    author: 'Melissa Hartwig'
  },
  {
    asin: '0986444138',
    year: 2015,
    rank: '51',
    title: 'Diary of a Minecraft Zombie Book 1: A Scare of A Dare (Volume 1)',
    author: 'Zack Zombie'
  },
  {
    asin: '0743273567',
    year: 2015,
    rank: '52',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    asin: '0143108999',
    year: 2015,
    rank: '53',
    title: 'Lost Ocean: An Inky Adventure and Coloring Book for Adults',
    author: 'Johanna Basford'
  },
  {
    asin: '0787960756',
    year: 2015,
    rank: '54',
    title: 'The Five Dysfunctions of a Team: A Leadership Fable',
    author: 'Patrick Lencioni'
  },
  {
    asin: '0874478529',
    year: 2015,
    rank: '55',
    title: 'The Official SAT Study Guide Second Edition',
    author: 'The College Board'
  },
  {
    asin: '1501100106',
    year: 2015,
    rank: '56',
    title: '10-Day Green Smoothie Cleanse',
    author: 'JJ Smith'
  },
  {
    asin: '159285849X',
    year: 2015,
    rank: '57',
    title: 'The Gifts of Imperfection: Let Go of Who You Think You\'re Supposed to Be and Embrace Who You Are',
    author: 'Brené Brown'
  },
  {
    asin: '1442450703',
    year: 2015,
    rank: '58',
    title: 'Chicka Chicka Boom Boom (Board Book)',
    author: 'Bill Martin Jr.'
  },
  {
    asin: '0399172750',
    year: 2015,
    rank: '59',
    title: 'The Day the Crayons Came Home',
    author: 'Drew Daywalt'
  },
  {
    asin: '0544272994',
    year: 2015,
    rank: '60',
    title: 'What If?: Serious Scientific Answers to Absurd Hypothetical Questions',
    author: 'Randall Munroe'
  },
  {
    asin: '014241493X',
    year: 2015,
    rank: '61',
    title: 'Paper Towns',
    author: 'John Green'
  },
  {
    asin: '0812974492',
    year: 2015,
    rank: '62',
    title: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption',
    author: 'Laura Hillenbrand'
  },
  {
    asin: '1476772290',
    year: 2015,
    rank: '63',
    title: 'Get What\'s Yours: The Secrets to Maxing Out Your Social Security (The Get What\'s Yours Series)',
    author: 'Laurence J. Kotlikoff'
  },
  {
    asin: '1423160916',
    year: 2015,
    rank: '64',
    title: 'Magnus Chase and the Gods of Asgard, Book 1: The Sword of Summer',
    author: 'Rick Riordan'
  },
  {
    asin: '0803736800',
    year: 2015,
    rank: '65',
    title: 'Dragons Love Tacos',
    author: 'Adam Rubin'
  },
  {
    asin: '1451673310',
    year: 2015,
    rank: '66',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury'
  },
  {
    asin: '1609580834',
    year: 2015,
    rank: '67',
    title: 'The Care and Keeping of You: The Body Book for Younger Girls, Revised Edition',
    author: 'Valorie Schaefer'
  },
  {
    asin: '0763644765',
    year: 2015,
    rank: '68',
    title: 'Potty (Leslie Patricelli board books)',
    author: 'Leslie Patricelli'
  },
  {
    asin: '0544668251',
    year: 2015,
    rank: '69',
    title: 'Thing Explainer: Complicated Stuff in Simple Words',
    author: 'Randall Munroe'
  },
  {
    asin: '0307408868',
    year: 2015,
    rank: '70',
    title: 'Dead Wake: The Last Crossing of the Lusitania',
    author: 'Erik Larson'
  },
  {
    asin: '0671449028',
    year: 2015,
    rank: '71',
    title: 'The Going-To-Bed Book',
    author: 'Sandra Boynton'
  },
  {
    asin: '0804186839',
    year: 2015,
    rank: '72',
    title: 'Inspiralized: Turn Vegetables into Healthy, Creative, Satisfying Meals',
    author: 'Ali Maffucci'
  },
  {
    asin: '0486456943',
    year: 2015,
    rank: '73',
    title: 'Mystical Mandala Coloring Book (Dover Design Coloring Books)',
    author: 'Alberta Hutchinson'
  },
  {
    asin: '0890425558',
    year: 2015,
    rank: '74',
    title: 'Diagnostic and Statistical Manual of Mental Disorders, 5th Edition: DSM-5',
    author: 'American Psychiatric…'
  },
  {
    asin: '1465414053',
    year: 2015,
    rank: '75',
    title: 'Ultimate Sticker Book: Frozen (Ultimate Sticker Books)',
    author: 'DK Publishing'
  },
  {
    asin: '1939457319',
    year: 2015,
    rank: '76',
    title: 'The 20/20 Diet: Turn Your Weight Loss Vision Into Reality',
    author: 'Phil McGraw'
  },
  {
    asin: '0374500010',
    year: 2015,
    rank: '77',
    title: 'Night (Night)',
    author: 'Elie Wiesel'
  },
  {
    asin: '0761148574',
    year: 2015,
    rank: '78',
    title: 'What to Expect When You\'re Expecting',
    author: 'Heidi Murkoff'
  },
  {
    asin: '0310708257',
    year: 2015,
    rank: '79',
    title: 'The Jesus Storybook Bible: Every Story Whispers His Name',
    author: 'Sally Lloyd-Jones'
  },
  {
    asin: '081299325X',
    year: 2015,
    rank: '80',
    title: 'The Road to Character',
    author: 'David Brooks'
  },
  {
    asin: '0689835604',
    year: 2015,
    rank: '81',
    title: 'Where Is Baby\'s Belly Button? A Lift-the-Flap Book',
    author: 'Karen Katz'
  },
  {
    asin: '0062315005',
    year: 2015,
    rank: '82',
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    asin: '0763642649',
    year: 2015,
    rank: '83',
    title: 'Guess How Much I Love You',
    author: 'Sam McBratney'
  },
  {
    asin: '1574219723',
    year: 2015,
    rank: '84',
    title: 'Creative Coloring Inspirations: Art Activity Pages to Relax and Enjoy! (Design Originals) 30 Motivating & Creative Art Activities on High-Quality, Extra-Thick Perforated Pages that Won\'t Bleed Through',
    author: 'Valentina Harper'
  },
  {
    asin: '0547248288',
    year: 2015,
    rank: '85',
    title: 'Little Blue Truck Board Book',
    author: 'Alice Schertle'
  },
  {
    asin: '014240733X',
    year: 2015,
    rank: '86',
    title: 'The Outsiders',
    author: 'S. E. Hinton'
  },
  {
    asin: '0374533555',
    year: 2015,
    rank: '87',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman'
  },
  {
    asin: '1580625576',
    year: 2015,
    rank: '88',
    title: 'The Everything Kids\' Science Experiments Book: Boil Ice, Float Water, Measure Gravity-Challenge the World Around You!',
    author: 'Tom Robinson'
  },
  {
    asin: '0451524934',
    year: 2015,
    rank: '89',
    title: '1984 (Signet Classics)',
    author: 'George Orwell'
  },
  {
    asin: '0071771328',
    year: 2015,
    rank: '90',
    title: 'Crucial Conversations Tools for Talking When Stakes Are High, Second Edition',
    author: 'Kerry Patterson'
  },
  {
    asin: '0974320625',
    year: 2015,
    rank: '91',
    title: 'Emotional Intelligence 2.0',
    author: 'Travis Bradberry'
  },
  {
    asin: '0718031822',
    year: 2015,
    rank: '92',
    title: 'For the Love: Fighting for Grace in a World of Impossible Standards',
    author: 'Jen Hatmaker'
  },
  {
    asin: '0811879542',
    year: 2015,
    rank: '93',
    title: 'Press Here',
    author: 'Herve Tullet'
  },
  {
    asin: '0544568036',
    year: 2015,
    rank: '94',
    title: 'Little Blue Truck board book',
    author: 'Alice Schertle'
  },
  {
    asin: '0805047905',
    year: 2015,
    rank: '95',
    title: 'Brown Bear, Brown Bear, What Do You See?',
    author: 'Bill Martin Jr.'
  },
  {
    asin: '0547577311',
    year: 2015,
    rank: '96',
    title: 'A Long Walk to Water: Based on a True Story',
    author: 'Linda Sue Park'
  },
  {
    asin: '0345535529',
    year: 2015,
    rank: '97',
    title: 'A Game of Thrones / A Clash of Kings / A Storm of Swords / A Feast of Crows / A Dance with Dragons',
    author: 'George R R Martin'
  },
  {
    asin: '0385539436',
    year: 2015,
    rank: '98',
    title: 'Rogue Lawyer',
    author: 'John Grisham'
  },
  {
    asin: '1502406896',
    year: 2015,
    rank: '99',
    title: 'Detailed Designs and Beautiful Patterns (Sacred Mandala Designs and Patterns Coloring Books for Adults) (Volume 28)',
    author: 'Lilt Kids Coloring…'
  },
  {
    asin: '0399501487',
    year: 2015,
    rank: '100',
    title: 'Lord of the Flies',
    author: 'William Golding'
  },
  {
    asin: '1338099132',
    year: 2016,
    rank: '1',
    title: 'Harry Potter and the Cursed Child, Parts 1 & 2, Special Rehearsal Edition Script',
    author: 'J.K. Rowling'
  },
  {
    asin: '159562015X',
    year: 2016,
    rank: '2',
    title: 'StrengthsFinder 2.0',
    author: 'Tom Rath'
  },
  {
    asin: '0312510780',
    year: 2016,
    rank: '3',
    title: 'First 100 Words',
    author: 'Roger Priddy'
  },
  {
    asin: '1607747308',
    year: 2016,
    rank: '4',
    title: 'The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing',
    author: 'Marie Kondō'
  },
  {
    asin: '0679805273',
    year: 2016,
    rank: '5',
    title: 'Oh, the Places You\'ll Go!  ',
    author: 'Dr. Seuss'
  },
  {
    asin: '1419723448',
    year: 2016,
    rank: '6',
    title: 'Diary of a Wimpy Kid # 11: Double Down',
    author: 'Jeff Kinney'
  },
  {
    asin: '081298840X',
    year: 2016,
    rank: '7',
    title: 'When Breath Becomes Air',
    author: 'Paul Kalanithi'
  },
  {
    asin: '0545392551',
    year: 2016,
    rank: '8',
    title: 'Giraffes Can\'t Dance',
    author: 'Giles Andreae'
  },
  {
    asin: '080241270X',
    year: 2016,
    rank: '9',
    title: 'The 5 Love Languages: The Secret to Love that Lasts',
    author: 'Gary Chapman'
  },
  {
    asin: '0544609719',
    year: 2016,
    rank: '10',
    title: 'The Whole30: The 30-Day Guide to Total Health and Food Freedom',
    author: 'Melissa Hartwig'
  },
  {
    asin: '1476738025',
    year: 2016,
    rank: '11',
    title: 'A Man Called Ove: A Novel',
    author: 'Fredrik Backman'
  },
  {
    asin: '1627790624',
    year: 2016,
    rank: '12',
    title: 'Killing the Rising Sun: How America Vanquished World War II Japan (Bill O\'Reilly\'s Killing Series)',
    author: 'Bill O\'Reilly'
  },
  {
    asin: '0671027034',
    year: 2016,
    rank: '13',
    title: 'How to Win Friends & Influence People',
    author: 'Dale Carnegie'
  },
  {
    asin: '0718079183',
    year: 2016,
    rank: '14',
    title: 'The Magnolia Story',
    author: 'Chip Gaines'
  },
  {
    asin: '0800788036',
    year: 2016,
    rank: '15',
    title: 'Laugh-Out-Loud Jokes for Kids',
    author: 'Rob Elliott'
  },
  {
    asin: '0446310786',
    year: 2016,
    rank: '16',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    asin: '0062300547',
    year: 2016,
    rank: '17',
    title: 'Hillbilly Elegy: A Memoir of a Family and Culture in Crisis',
    author: 'J. D. Vance'
  },
  {
    asin: '1338109065',
    year: 2016,
    rank: '18',
    title: 'Fantastic Beasts and Where to Find Them: The Original Screenplay',
    author: 'J.K. Rowling'
  },
  {
    asin: '1455539740',
    year: 2016,
    rank: '19',
    title: 'Hamilton: The Revolution',
    author: 'Lin-Manuel Miranda'
  },
  {
    asin: '1594634025',
    year: 2016,
    rank: '20',
    title: 'The Girl on the Train',
    author: 'Paula Hawkins'
  },
  {
    asin: '0345472322',
    year: 2016,
    rank: '21',
    title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck'
  },
  {
    asin: '1457304309',
    year: 2016,
    rank: '22',
    title: 'The Official SAT Study Guide, 2016 Edition (Official Study Guide for the New Sat)',
    author: 'The College Board'
  },
  {
    asin: '0692597832',
    year: 2016,
    rank: '23',
    title: 'Adult Coloring Book Designs: Stress Relief Coloring Book: Garden Designs, Mandalas, Animals, and Paisley Patterns',
    author: null
  },
  {
    asin: '1878424319',
    year: 2016,
    rank: '24',
    title: 'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
    author: 'Don Miguel Ruiz'
  },
  {
    asin: '144947425X',
    year: 2016,
    rank: '25',
    title: 'Milk and Honey',
    author: 'Rupi Kaur'
  },
  {
    asin: '0671449028',
    year: 2016,
    rank: '26',
    title: 'The Going-To-Bed Book',
    author: 'Sandra Boynton'
  },
  {
    asin: '1501141511',
    year: 2016,
    rank: '27',
    title: 'Born to Run',
    author: 'Bruce Springsteen'
  },
  {
    asin: '0143034758',
    year: 2016,
    rank: '28',
    title: 'Alexander Hamilton',
    author: 'Ron Chernow'
  },
  {
    asin: '0399226907',
    year: 2016,
    rank: '29',
    title: 'The Very Hungry Caterpillar',
    author: null
  },
  {
    asin: '1451639619',
    year: 2016,
    rank: '30',
    title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0880801441',
    year: 2016,
    rank: '31',
    title: 'The Constitution of the United States',
    author: 'Delegates of the…'
  },
  {
    asin: '0375869026',
    year: 2016,
    rank: '32',
    title: 'Wonder',
    author: 'R. J. Palacio'
  },
  {
    asin: '0385376715',
    year: 2016,
    rank: '33',
    title: 'The Wonderful Things You Will Be',
    author: 'Emily Winfield Martin'
  },
  {
    asin: '0762447699',
    year: 2016,
    rank: '34',
    title: 'You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life',
    author: 'Jen Sincero'
  },
  {
    asin: '1623363586',
    year: 2016,
    rank: '35',
    title: 'Thug Kitchen: The Official Cookbook: Eat Like You Give a F*ck',
    author: 'Thug Kitchen'
  },
  {
    asin: '0545795664',
    year: 2016,
    rank: '36',
    title: 'Pokémon Deluxe Essential Handbook: The Need-to-Know Stats and Facts on Over 700 Pokémon',
    author: 'Scholastic'
  },
  {
    asin: '1433805618',
    year: 2016,
    rank: '37',
    title: 'Publication Manual of the American Psychological Association, 6th Edition',
    author: 'American…'
  },
  {
    asin: '1101903910',
    year: 2016,
    rank: '38',
    title: 'Cravings: Recipes for All the Food You Want to Eat',
    author: 'Chrissy Teigen'
  },
  {
    asin: '0812993543',
    year: 2016,
    rank: '39',
    title: 'Between the World and Me',
    author: 'Ta-Nehisi Coates'
  },
  {
    asin: '1522864741',
    year: 2016,
    rank: '40',
    title: 'Calm the F*ck Down: An Irreverent Adult Coloring Book',
    author: 'Sasha O\'Hara'
  },
  {
    asin: '141694737X',
    year: 2016,
    rank: '41',
    title: 'Dear Zoo: A Lift-the-Flap Book',
    author: 'Rod Campbell'
  },
  {
    asin: '1591451884',
    year: 2016,
    rank: '42',
    title: 'Jesus Calling: Enjoying Peace in His Presence',
    author: 'Sarah Young'
  },
  {
    asin: '0374500010',
    year: 2016,
    rank: '43',
    title: 'Night (Night)',
    author: 'Elie Wiesel'
  },
  {
    asin: '0545162076',
    year: 2016,
    rank: '45',
    title: 'Harry Potter Paperback Box Set (Books 1-7)',
    author: 'J. K. Rowling'
  },
  {
    asin: '0545790352',
    year: 2016,
    rank: '46',
    title: 'Harry Potter and the Sorcerer\'s Stone: The Illustrated Edition (Harry Potter, Book 1)',
    author: 'J.K. Rowling'
  },
  {
    asin: '1501100106',
    year: 2016,
    rank: '47',
    title: '10-Day Green Smoothie Cleanse',
    author: 'JJ Smith'
  },
  {
    asin: '1400205875',
    year: 2016,
    rank: '48',
    title: 'Uninvited: Living Loved When You Feel Less Than, Left Out, and Lonely',
    author: 'Lysa TerKeurst'
  },
  {
    asin: '0312577222',
    year: 2016,
    rank: '49',
    title: 'The Nightingale: A Novel',
    author: 'Kristin Hannah'
  },
  {
    asin: '0545791324',
    year: 2016,
    rank: '50',
    title: 'Harry Potter and the Chamber of Secrets: The Illustrated Edition (Harry Potter, Book 2)',
    author: 'J.K. Rowling'
  },
  {
    asin: '1451673310',
    year: 2016,
    rank: '51',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury'
  },
  {
    asin: '0920668372',
    year: 2016,
    rank: '52',
    title: 'Love You Forever',
    author: 'Robert Munsch'
  },
  {
    asin: '0743273567',
    year: 2016,
    rank: '53',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    asin: '0787960756',
    year: 2016,
    rank: '54',
    title: 'The Five Dysfunctions of a Team: A Leadership Fable',
    author: 'Patrick Lencioni'
  },
  {
    asin: '1476746583',
    year: 2016,
    rank: '55',
    title: 'All the Light We Cannot See',
    author: 'Anthony Doerr'
  },
  {
    asin: '0805047905',
    year: 2016,
    rank: '56',
    title: 'Brown Bear, Brown Bear, What Do You See?',
    author: 'Bill Martin Jr.'
  },
  {
    asin: '0062315005',
    year: 2016,
    rank: '57',
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    asin: '1433688670',
    year: 2016,
    rank: '58',
    title: 'Fervent: A Woman\'s Battle Plan to Serious, Specific and Strategic Prayer',
    author: 'Priscilla Shirer'
  },
  {
    asin: '0385541198',
    year: 2016,
    rank: '59',
    title: 'The Whistler',
    author: 'John Grisham'
  },
  {
    asin: '0374300216',
    year: 2016,
    rank: '60',
    title: 'If Animals Kissed Good Night',
    author: 'Ann Whitford Paul'
  },
  {
    asin: '030746489X',
    year: 2016,
    rank: '61',
    title: 'Cooking for Jeffrey: A Barefoot Contessa Cookbook',
    author: 'Ina Garten'
  },
  {
    asin: '148473274X',
    year: 2016,
    rank: '62',
    title: 'The Trials of Apollo, Book 1: The Hidden Oracle',
    author: 'Rick Riordan'
  },
  {
    asin: '0800788222',
    year: 2016,
    rank: '63',
    title: 'Knock-Knock Jokes for Kids',
    author: 'Rob Elliott'
  },
  {
    asin: '0553522779',
    year: 2016,
    rank: '64',
    title: 'Puppy Birthday to You! (Paw Patrol) (Little Golden Book)',
    author: 'Golden Books'
  },
  {
    asin: '159285849X',
    year: 2016,
    rank: '65',
    title: 'The Gifts of Imperfection: Let Go of Who You Think You\'re Supposed to Be and Embrace Who You Are',
    author: 'Brené Brown'
  },
  {
    asin: '1455568872',
    year: 2016,
    rank: '66',
    title: 'Crisis of Character: A White House Secret Service Officer Discloses His Firsthand Experience with Hillary, Bill, and How They Operate',
    author: 'Gary J. Byrne'
  },
  {
    asin: '0312510799',
    year: 2016,
    rank: '67',
    title: 'First 100 Animals',
    author: 'Roger Priddy'
  },
  {
    asin: '0996275460',
    year: 2016,
    rank: '68',
    title: 'Adult Coloring Books: A Coloring Book for Adults Featuring Mandalas and Henna Inspired Flowers, Animals, and Paisley Patterns',
    author: null
  },
  {
    asin: '0694003611',
    year: 2016,
    rank: '69',
    title: 'Goodnight Moon',
    author: 'Margaret Wise Brown'
  },
  {
    asin: '1592408419',
    year: 2016,
    rank: '70',
    title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
    author: 'Brené Brown'
  },
  {
    asin: '1594746036',
    year: 2016,
    rank: '71',
    title: 'Miss Peregrine\'s Home for Peculiar Children (Miss Peregrine\'s Peculiar Children)',
    author: 'Ransom Riggs'
  },
  {
    asin: '1501111108',
    year: 2016,
    rank: '72',
    title: 'Grit: The Power of Passion and Perseverance',
    author: 'Angela Duckworth'
  },
  {
    asin: '0974320625',
    year: 2016,
    rank: '73',
    title: 'Emotional Intelligence 2.0',
    author: 'Travis Bradberry'
  },
  {
    asin: '0385542364',
    year: 2016,
    rank: '74',
    title: 'The Underground Railroad (Pulitzer Prize Winner) (National Book Award Winner) (Oprah\'s Book Club): A Novel',
    author: 'Colson Whitehead'
  },
  {
    asin: '014240733X',
    year: 2016,
    rank: '75',
    title: 'The Outsiders',
    author: 'S. E. Hinton'
  },
  {
    asin: '0393081087',
    year: 2016,
    rank: '76',
    title: 'The Food Lab: Better Home Cooking Through Science',
    author: 'J. Kenji López-Alt'
  },
  {
    asin: '0143130153',
    year: 2016,
    rank: '77',
    title: 'Me Before You: A Novel (Movie Tie-In)',
    author: 'Jojo Moyes'
  },
  {
    asin: '1442450703',
    year: 2016,
    rank: '78',
    title: 'Chicka Chicka Boom Boom (Board Book)',
    author: 'Bill Martin Jr.'
  },
  {
    asin: '1609580834',
    year: 2016,
    rank: '79',
    title: 'The Care and Keeping of You: The Body Book for Younger Girls, Revised Edition',
    author: 'Valorie Schaefer'
  },
  {
    asin: '0763644765',
    year: 2016,
    rank: '80',
    title: 'Potty (Leslie Patricelli board books)',
    author: 'Leslie Patricelli'
  },
  {
    asin: '1328683788',
    year: 2016,
    rank: '81',
    title: 'Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers',
    author: 'Timothy Ferriss'
  },
  {
    asin: '0312510810',
    year: 2016,
    rank: '82',
    title: 'Numbers Colors Shapes (First 100)',
    author: 'Roger Priddy'
  },
  {
    asin: '1574219952',
    year: 2016,
    rank: '83',
    title: 'Good Vibes Coloring Book (Coloring is Fun) (Design Originals): 30 Beginner-Friendly Relaxing & Creative Art Activities on High-Quality Extra-Thick Perforated Paper that Resists Bleed Through',
    author: 'Thaneeya McArdle'
  },
  {
    asin: '1623156122',
    year: 2016,
    rank: '84',
    title: 'The Instant Pot® Electric Pressure Cooker Cookbook: Easy Recipes for Fast & Healthy Meals',
    author: 'Laurel Randolph'
  },
  {
    asin: '0995056706',
    year: 2016,
    rank: '85',
    title: 'Quieting Your Heart: 6-Month Bible-Study Journal',
    author: 'Darlene Schacht'
  },
  {
    asin: '0803741715',
    year: 2016,
    rank: '86',
    title: 'The Book with No Pictures',
    author: 'B. J. Novak'
  },
  {
    asin: '0486796647',
    year: 2016,
    rank: '87',
    title: 'Creative Haven Owls Coloring Book (Adult Coloring)',
    author: 'Marjorie Sarnat'
  },
  {
    asin: '1423160924',
    year: 2016,
    rank: '88',
    title: 'Magnus Chase and the Gods of Asgard, Book 2 The Hammer of Thor',
    author: 'Rick Riordan'
  },
  {
    asin: '1780671067',
    year: 2016,
    rank: '89',
    title: 'Secret Garden: An Inky Treasure Hunt and Coloring Book',
    author: 'Johanna Basford'
  },
  {
    asin: '059035342X',
    year: 2016,
    rank: '90',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    asin: '0803736800',
    year: 2016,
    rank: '91',
    title: 'Dragons Love Tacos',
    author: 'Adam Rubin'
  },
  {
    asin: '0786965606',
    year: 2016,
    rank: '92',
    title: 'Player\'s Handbook (Dungeons & Dragons)',
    author: 'Wizards RPG Team'
  },
  {
    asin: '1580625576',
    year: 2016,
    rank: '93',
    title: 'The Everything Kids\' Science Experiments Book: Boil Ice, Float Water, Measure Gravity-Challenge the World Around You!',
    author: 'Tom Robinson'
  },
  {
    asin: '0451524934',
    year: 2016,
    rank: '94',
    title: '1984 (Signet Classics)',
    author: 'George Orwell'
  },
  {
    asin: '0544336267',
    year: 2016,
    rank: '95',
    title: 'The Giver (Giver Quartet)',
    author: 'Lois Lowry'
  },
  {
    asin: '0374533555',
    year: 2016,
    rank: '97',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman'
  },
  {
    asin: '0544568036',
    year: 2016,
    rank: '98',
    title: 'Little Blue Truck board book',
    author: 'Alice Schertle'
  },
  {
    asin: '1338029991',
    year: 2016,
    rank: '99',
    title: 'Harry Potter Coloring Book',
    author: 'Scholastic'
  },
  {
    asin: '0399255370',
    year: 2016,
    rank: '100',
    title: 'The Day the Crayons Quit',
    author: 'Drew Daywalt'
  },
  {
    asin: '144947425X',
    year: 2017,
    rank: '1',
    title: 'Milk and Honey',
    author: 'Rupi Kaur'
  },
  {
    asin: '0062300547',
    year: 2017,
    rank: '2',
    title: 'Hillbilly Elegy: A Memoir of a Family and Culture in Crisis',
    author: 'J. D. Vance'
  },
  {
    asin: '0375869026',
    year: 2017,
    rank: '3',
    title: 'Wonder',
    author: 'R. J. Palacio'
  },
  {
    asin: '0062457713',
    year: 2017,
    rank: '4',
    title: 'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life',
    author: 'Mark Manson'
  },
  {
    asin: '038549081X',
    year: 2017,
    rank: '5',
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood'
  },
  {
    asin: '0544609719',
    year: 2017,
    rank: '6',
    title: 'The Whole30: The 30-Day Guide to Total Health and Food Freedom',
    author: 'Melissa Hartwig'
  },
  {
    asin: '080241270X',
    year: 2017,
    rank: '7',
    title: 'The 5 Love Languages: The Secret to Love that Lasts',
    author: 'Gary Chapman'
  },
  {
    asin: '0393609391',
    year: 2017,
    rank: '8',
    title: 'Astrophysics for People in a Hurry',
    author: 'Neil deGrasse Tyson'
  },
  {
    asin: '0679805273',
    year: 2017,
    rank: '9',
    title: 'Oh, the Places You\'ll Go!  ',
    author: 'Dr. Seuss'
  },
  {
    asin: '0545392551',
    year: 2017,
    rank: '10',
    title: 'Giraffes Can\'t Dance',
    author: 'Giles Andreae'
  },
  {
    asin: '0312510780',
    year: 2017,
    rank: '11',
    title: 'First 100 Words',
    author: 'Roger Priddy'
  },
  {
    asin: '0762447699',
    year: 2017,
    rank: '12',
    title: 'You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life',
    author: 'Jen Sincero'
  },
  {
    asin: '1501175564',
    year: 2017,
    rank: '13',
    title: 'What Happened',
    author: 'Hillary Rodham…'
  },
  {
    asin: '0451524934',
    year: 2017,
    rank: '14',
    title: '1984 (Signet Classics)',
    author: 'George Orwell'
  },
  {
    asin: '1455570249',
    year: 2017,
    rank: '15',
    title: 'Make Your Bed: Little Things That Can Change Your Life...And Maybe the World',
    author: 'William H. McRaven'
  },
  {
    asin: '1476738025',
    year: 2017,
    rank: '16',
    title: 'A Man Called Ove: A Novel',
    author: 'Fredrik Backman'
  },
  {
    asin: '0671027034',
    year: 2017,
    rank: '17',
    title: 'How to Win Friends & Influence People',
    author: 'Dale Carnegie'
  },
  {
    asin: '159562015X',
    year: 2017,
    rank: '18',
    title: 'StrengthsFinder 2.0',
    author: 'Tom Rath'
  },
  {
    asin: '1524732680',
    year: 2017,
    rank: '19',
    title: 'Option B: Facing Adversity, Building Resilience, and Finding Joy',
    author: 'Sheryl Sandberg'
  },
  {
    asin: '1878424319',
    year: 2017,
    rank: '20',
    title: 'The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)',
    author: 'Don Miguel Ruiz'
  },
  {
    asin: '0964729237',
    year: 2017,
    rank: '21',
    title: 'The Shack: Where Tragedy Confronts Eternity',
    author: 'William P. Young'
  },
  {
    asin: '1623156122',
    year: 2017,
    rank: '22',
    title: 'The Instant Pot® Electric Pressure Cooker Cookbook: Easy Recipes for Fast & Healthy Meals',
    author: 'Laurel Randolph'
  },
  {
    asin: '159514188X',
    year: 2017,
    rank: '23',
    title: 'Thirteen Reasons Why',
    author: 'Jay Asher'
  },
  {
    asin: '1607747308',
    year: 2017,
    rank: '24',
    title: 'The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing',
    author: 'Marie Kondō'
  },
  {
    asin: '0385376715',
    year: 2017,
    rank: '25',
    title: 'The Wonderful Things You Will Be',
    author: 'Emily Winfield Martin'
  },
  {
    asin: '0671449028',
    year: 2017,
    rank: '26',
    title: 'The Going-To-Bed Book',
    author: 'Sandra Boynton'
  },
  {
    asin: '1433805618',
    year: 2017,
    rank: '27',
    title: 'Publication Manual of the American Psychological Association, 6th Edition',
    author: 'American…'
  },
  {
    asin: '0670026190',
    year: 2017,
    rank: '28',
    title: 'A Gentleman in Moscow: A Novel',
    author: 'Amor Towles'
  },
  {
    asin: '1419725459',
    year: 2017,
    rank: '29',
    title: 'Getaway (Diary of a Wimpy Kid Book 12)',
    author: 'Jeff Kinney'
  },
  {
    asin: '0694003611',
    year: 2017,
    rank: '30',
    title: 'Goodnight Moon',
    author: 'Margaret Wise Brown'
  },
  {
    asin: '0553522779',
    year: 2017,
    rank: '31',
    title: 'Puppy Birthday to You! (Paw Patrol) (Little Golden Book)',
    author: 'Golden Books'
  },
  {
    asin: '1328683788',
    year: 2017,
    rank: '32',
    title: 'Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers',
    author: 'Timothy Ferriss'
  },
  {
    asin: '1623363586',
    year: 2017,
    rank: '33',
    title: 'Thug Kitchen: The Official Cookbook: Eat Like You Give a F*ck',
    author: 'Thug Kitchen'
  },
  {
    asin: '0425274861',
    year: 2017,
    rank: '34',
    title: 'Big Little Lies',
    author: 'Liane Moriarty'
  },
  {
    asin: '141694737X',
    year: 2017,
    rank: '35',
    title: 'Dear Zoo: A Lift-the-Flap Book',
    author: 'Rod Campbell'
  },
  {
    asin: '1451639619',
    year: 2017,
    rank: '36',
    title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
    author: 'Stephen R. Covey'
  },
  {
    asin: '0786965606',
    year: 2017,
    rank: '37',
    title: 'Player\'s Handbook (Dungeons & Dragons)',
    author: 'Wizards RPG Team'
  },
  {
    asin: '0544854411',
    year: 2017,
    rank: '38',
    title: 'The Whole30 Cookbook: 150 Delicious and Totally Compliant Recipes to Help You Succeed with the Whole30 and Beyond',
    author: 'Melissa Hartwig'
  },
  {
    asin: '1400205875',
    year: 2017,
    rank: '39',
    title: 'Uninvited: Living Loved When You Feel Less Than, Left Out, and Lonely',
    author: 'Lysa TerKeurst'
  },
  {
    asin: '0374300216',
    year: 2017,
    rank: '40',
    title: 'If Animals Kissed Good Night',
    author: 'Ann Whitford Paul'
  },
  {
    asin: '0399226907',
    year: 2017,
    rank: '41',
    title: 'The Very Hungry Caterpillar',
    author: null
  },
  {
    asin: '0743273567',
    year: 2017,
    rank: '42',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    asin: '1457309289',
    year: 2017,
    rank: '43',
    title: 'The Official SAT Study Guide, 2018 Edition (Official Study Guide for the New Sat)',
    author: 'The College Board'
  },
  {
    asin: '074324754X',
    year: 2017,
    rank: '44',
    title: 'The Glass Castle: A Memoir',
    author: 'Jeannette Walls'
  },
  {
    asin: 'B06XTL5M5T',
    year: 2017,
    rank: '45',
    title: '4-Pack Premium ISO and CE Certified Lunt Solar Kid Size Eclipse Viewing Glasses',
    author: null
  },
  {
    asin: '0385514239',
    year: 2017,
    rank: '46',
    title: 'Origin: A Novel',
    author: 'Dan Brown'
  },
  {
    asin: '0804190119',
    year: 2017,
    rank: '47',
    title: 'On Tyranny: Twenty Lessons from the Twentieth Century',
    author: 'Timothy Snyder'
  },
  {
    asin: '0805047905',
    year: 2017,
    rank: '48',
    title: 'Brown Bear, Brown Bear, What Do You See?',
    author: 'Bill Martin Jr.'
  },
  {
    asin: '1609580834',
    year: 2017,
    rank: '49',
    title: 'The Care and Keeping of You: The Body Book for Younger Girls, Revised Edition',
    author: 'Valorie Schaefer'
  },
  {
    asin: '0374533555',
    year: 2017,
    rank: '50',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman'
  },
  {
    asin: '0761187480',
    year: 2017,
    rank: '51',
    title: 'What to Expect When You\'re Expecting',
    author: 'Heidi Murkoff'
  },
  {
    asin: '1451673310',
    year: 2017,
    rank: '52',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury'
  },
  {
    asin: '0385543026',
    year: 2017,
    rank: '53',
    title: 'Camino Island: A Novel',
    author: 'John Grisham'
  },
  {
    asin: '0545935210',
    year: 2017,
    rank: '54',
    title: 'Dog Man: A Tale of Two Kitties: From the Creator of Captain Underpants (Dog Man #3)',
    author: 'Dav Pilkey'
  },
  {
    asin: '0345472322',
    year: 2017,
    rank: '55',
    title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck'
  },
  {
    asin: '1455540412',
    year: 2017,
    rank: '56',
    title: 'Al Franken, Giant of the Senate',
    author: 'Al Franken'
  },
  {
    asin: '0062315005',
    year: 2017,
    rank: '57',
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    asin: '1449486797',
    year: 2017,
    rank: '58',
    title: 'The Sun and Her Flowers',
    author: 'Rupi Kaur'
  },
  {
    asin: '1591451884',
    year: 2017,
    rank: '59',
    title: 'Jesus Calling: Enjoying Peace in His Presence',
    author: 'Sarah Young'
  },
  {
    asin: '1939457599',
    year: 2017,
    rank: '60',
    title: 'The Lose Your Belly Diet: Change Your Gut, Change Your Life',
    author: 'Travis Stork'
  },
  {
    asin: '0307887448',
    year: 2017,
    rank: '61',
    title: 'Ready Player One: A Novel',
    author: 'Ernest Cline'
  },
  {
    asin: '159285849X',
    year: 2017,
    rank: '62',
    title: 'The Gifts of Imperfection: Let Go of Who You Think You\'re Supposed to Be and Embrace Who You Are',
    author: 'Brené Brown'
  },
  {
    asin: '0553496670',
    year: 2017,
    rank: '63',
    title: 'Everything, Everything',
    author: 'Nicola Yoon'
  },
  {
    asin: '0545791340',
    year: 2017,
    rank: '64',
    title: 'Harry Potter and the Prisoner of Azkaban: The Illustrated Edition (Harry Potter, Book 3)',
    author: 'J.K. Rowling'
  },
  {
    asin: '006242713X',
    year: 2017,
    rank: '65',
    title: 'The Plant Paradox: The Hidden Dangers in "Healthy" Foods That Cause Disease and Weight Gain',
    author: 'Steven R.'
  },
  {
    asin: '0062363603',
    year: 2017,
    rank: '66',
    title: 'Hidden Figures: The American Dream and the Untold Story of the Black Women Mathematicians Who Helped Win the Space Race',
    author: 'Margot Lee Shetterly'
  },
  {
    asin: '1524741728',
    year: 2017,
    rank: '67',
    title: 'She Persisted: 13 American Women Who Changed the World',
    author: 'Chelsea Clinton'
  },
  {
    asin: '1591846447',
    year: 2017,
    rank: '68',
    title: 'Start with Why: How Great Leaders Inspire Everyone to Take Action',
    author: 'Simon Sinek'
  },
  {
    asin: '1484746422',
    year: 2017,
    rank: '69',
    title: 'The Trials of Apollo Book Two The Dark Prophecy',
    author: 'Rick Riordan'
  },
  {
    asin: '1501100106',
    year: 2017,
    rank: '70',
    title: '10-Day Green Smoothie Cleanse',
    author: 'JJ Smith'
  },
  {
    asin: '0920668372',
    year: 2017,
    rank: '71',
    title: 'Love You Forever',
    author: 'Robert Munsch'
  },
  {
    asin: '039360909X',
    year: 2017,
    rank: '72',
    title: 'Norse Mythology',
    author: 'Neil Gaiman'
  },
  {
    asin: '1101883081',
    year: 2017,
    rank: '73',
    title: 'Lilac Girls: A Novel',
    author: 'Martha Hall Kelly'
  },
  {
    asin: '1592408419',
    year: 2017,
    rank: '74',
    title: 'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
    author: 'Brené Brown'
  },
  {
    asin: '0060256656',
    year: 2017,
    rank: '75',
    title: 'The Giving Tree',
    author: 'Shel Silverstein'
  },
  {
    asin: '0374360979',
    year: 2017,
    rank: '76',
    title: 'The Pout-Pout Fish',
    author: 'Deborah Diesen'
  },
  {
    asin: '0374500010',
    year: 2017,
    rank: '77',
    title: 'Night (Night)',
    author: 'Elie Wiesel'
  },
  {
    asin: '1623158087',
    year: 2017,
    rank: '78',
    title: 'The Complete Ketogenic Diet for Beginners: Your Essential Guide to Living the Keto Lifestyle',
    author: 'Amy Ramos'
  },
  {
    asin: '0062316095',
    year: 2017,
    rank: '79',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari'
  },
  {
    asin: '081298840X',
    year: 2017,
    rank: '80',
    title: 'When Breath Becomes Air',
    author: 'Paul Kalanithi'
  },
  {
    asin: '1595555277',
    year: 2017,
    rank: '81',
    title: 'The Total Money Makeover: Classic Edition: A Proven Plan for Financial Fitness',
    author: 'Dave Ramsey'
  },
  {
    asin: '0689835604',
    year: 2017,
    rank: '82',
    title: 'Where Is Baby\'s Belly Button? A Lift-the-Flap Book',
    author: 'Karen Katz'
  },
  {
    asin: '0385534248',
    year: 2017,
    rank: '83',
    title: 'Killers of the Flower Moon: The Osage Murders and the Birth of the FBI',
    author: 'David Grann'
  },
  {
    asin: '0545935202',
    year: 2017,
    rank: '84',
    title: 'Dog Man Unleashed: From the Creator of Captain Underpants (Dog Man #2)',
    author: 'Dav Pilkey'
  },
  {
    asin: '0060555661',
    year: 2017,
    rank: '85',
    title: 'The Intelligent Investor: The Definitive Book on Value Investing. A Book of Practical Counsel (Revised Edition) (Collins Business Essentials)',
    author: 'Benjamin Graham'
  },
  {
    asin: '1911015222',
    year: 2017,
    rank: '86',
    title: 'The Legend of Zelda: Breath of the Wild: The Complete Official Guide Collector\'s Edition',
    author: 'Piggyback'
  },
  {
    asin: '014240733X',
    year: 2017,
    rank: '87',
    title: 'The Outsiders',
    author: 'S. E. Hinton'
  },
  {
    asin: '1401953778',
    year: 2017,
    rank: '88',
    title: 'Fat for Fuel: A Revolutionary Diet to Combat Cancer, Boost Brain Power, and Increase Your Energy',
    author: 'Dr. Joseph Mercola'
  },
  {
    asin: '1577314808',
    year: 2017,
    rank: '89',
    title: 'The Power of Now: A Guide to Spiritual Enlightenment',
    author: 'Eckhart Tolle'
  },
  {
    asin: '0679890475',
    year: 2017,
    rank: '90',
    title: 'Are You My Mother? (Bright & Early Board Books(TM))',
    author: 'P.D. Eastman'
  },
  {
    asin: '0143127748',
    year: 2017,
    rank: '91',
    title: 'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
    author: 'Bessel van der Kolk…'
  },
  {
    asin: '1250066115',
    year: 2017,
    rank: '92',
    title: 'How Not to Die: Discover the Foods Scientifically Proven to Prevent and Reverse Disease',
    author: 'Michael Greger M.D.…'
  },
  {
    asin: '038538369X',
    year: 2017,
    rank: '93',
    title: 'P is for Potty! (Sesame Street) (Lift-the-Flap)',
    author: 'Random House'
  },
  {
    asin: '0718079183',
    year: 2017,
    rank: '94',
    title: 'The Magnolia Story',
    author: 'Chip Gaines'
  },
  {
    asin: '0399185046',
    year: 2017,
    rank: '95',
    title: 'The Book of Joy: Lasting Happiness in a Changing World',
    author: 'Dalai Lama'
  },
  {
    asin: '0804189765',
    year: 2017,
    rank: '96',
    title: 'Portraits of Courage: A Commander in Chief\'s Tribute to America\'s Warriors',
    author: 'George W. Bush'
  },
  {
    asin: '0812995848',
    year: 2017,
    rank: '97',
    title: 'Braving the Wilderness: The Quest for True Belonging and the Courage to Stand Alone',
    author: 'Brené Brown'
  },
  {
    asin: '1442450703',
    year: 2017,
    rank: '98',
    title: 'Chicka Chicka Boom Boom (Board Book)',
    author: 'Bill Martin Jr.'
  },
  {
    asin: '1501164589',
    year: 2017,
    rank: '99',
    title: 'Unshakeable: Your Financial Freedom Playbook',
    author: 'Tony Robbins'
  },
  {
    asin: '0812993543',
    year: 2017,
    rank: '100',
    title: 'Between the World and Me',
    author: 'Ta-Nehisi Coates'
  }
];