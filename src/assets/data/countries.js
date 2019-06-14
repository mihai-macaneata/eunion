import { getObjById } from '@/utils/helpers'
import main from './htmlstrings/nationalEmissions'
import topics from './topics'

const randomStrings = [`Reprehenderit sit qui aliquip pariatur ea amet nostrud duis. Irure pariatur cupidatat fugiat est eiusmod do laborum. Incididunt Lorem est duis nisi excepteur culpa in laborum. Quis adipisicing ut mollit fugiat officia nisi do ea voluptate. Eu culpa irure consectetur ut adipisicing tempor ad. Lorem ad non id fugiat veniam fugiat ad. Ipsum reprehenderit eu commodo aliquip incididunt labore.`,
`Irure irure aute sunt duis cillum veniam est non do magna deserunt ea esse. Consequat sit ad esse elit sit voluptate sunt tempor elit elit labore sint cupidatat officia. Anim aliqua adipisicing qui incididunt velit non duis ullamco sunt culpa reprehenderit.

Mollit non adipisicing proident dolore adipisicing ut ex labore aliquip ea dolor. Sunt proident officia irure commodo pariatur est excepteur cillum et aliqua sit quis esse. Ex in eiusmod voluptate eiusmod ullamco reprehenderit.

Adipisicing eu velit quis esse fugiat non laboris elit. Esse ad aliqua nostrud velit. Consequat ipsum ipsum culpa adipisicing velit nisi excepteur. Ad do ut do irure laboris culpa adipisicing exercitation id ipsum et sit. Eiusmod esse proident irure minim nostrud voluptate aliqua excepteur amet. Ut culpa sint labore ipsum esse cillum Lorem cillum velit ut ipsum consequat irure reprehenderit. Lorem consequat cillum occaecat velit exercitation ex dolore aute.

Deserunt cillum dolore ad consectetur quis fugiat. Elit esse exercitation irure eiusmod incididunt sunt pariatur duis aliqua ullamco id irure culpa. Tempor veniam nisi proident ad nostrud in laborum ipsum irure sunt aute tempor id. Incididunt laborum officia laboris cupidatat ex ea sunt tempor mollit nulla cillum. Laboris enim occaecat anim pariatur laborum laboris exercitation. Lorem incididunt ex tempor incididunt aliquip cupidatat magna proident consequat laboris.`,
`Dolor mollit eu est aliqua elit et mollit deserunt. Proident do nisi elit eu nulla nulla ullamco mollit excepteur. Laboris amet exercitation officia commodo.`,
`Aute ex cupidatat occaecat sunt officia officia Lorem sunt eiusmod duis enim aute. Ea nisi commodo magna ex eiusmod labore sunt. Minim sunt adipisicing ullamco magna cupidatat. Occaecat magna amet nostrud ad laborum.`,
`Id elit ad ullamco aliqua deserunt tempor ea ex esse magna enim nisi consequat. Culpa cupidatat nulla incididunt commodo quis velit amet laborum nulla dolore nulla ipsum consequat. Nostrud do est culpa consequat sit et est id sint consequat quis sint. Proident aute aliqua proident in Lorem veniam dolor aliqua exercitation veniam mollit nisi aute. Anim velit Lorem non sit dolore excepteur magna non. Labore labore velit elit minim veniam voluptate et. Ad commodo dolor duis adipisicing deserunt irure.

Sunt dolor ea ut consectetur. Irure exercitation eiusmod adipisicing aliquip duis et do. Mollit laboris irure est et eiusmod incididunt voluptate do ad qui qui duis. Ullamco tempor occaecat laborum proident amet id in ex id. Dolor incididunt nostrud minim excepteur irure tempor cillum aute ipsum aliquip ea.`,
`Pariatur qui amet officia aliquip ex ipsum voluptate aute consequat nostrud tempor cillum mollit quis. Dolore nostrud aute ipsum do aliquip pariatur dolore. Est officia dolore in anim laboris esse cupidatat anim nostrud. Culpa eiusmod tempor et veniam irure labore nulla quis amet anim. Id velit laborum fugiat excepteur id duis ad nulla nostrud amet ex excepteur id ea. Velit esse Lorem pariatur proident. Id pariatur amet cupidatat reprehenderit.`,
`Pariatur excepteur sint exercitation dolore commodo ipsum in aliquip irure consequat nostrud do est. Eiusmod minim sint et sint est do reprehenderit nisi aute deserunt dolore ad ad excepteur. Ipsum aliquip irure amet minim labore excepteur qui commodo veniam adipisicing veniam esse mollit duis.`,
`Ipsum pariatur laborum occaecat cupidatat sunt commodo nostrud magna. Lorem ex reprehenderit proident est id cillum qui quis. Do dolore est irure et tempor nostrud quis tempor laboris incididunt. Dolor nulla reprehenderit laborum velit ut exercitation enim non sint id anim. Deserunt in culpa nulla veniam culpa quis non. Duis eu adipisicing quis amet ipsum fugiat reprehenderit officia aliqua labore ut.

Veniam velit do veniam qui elit veniam deserunt anim minim enim officia et. Et ea et est mollit eu sunt esse consequat magna duis amet do. Et elit tempor laborum excepteur labore Lorem cupidatat aliquip consequat reprehenderit excepteur eu. Cillum deserunt ea enim consequat laborum. Qui duis ex non cillum excepteur ipsum consectetur excepteur ex sit voluptate veniam. Nostrud mollit reprehenderit quis enim culpa commodo aliquip aliquip aliqua consequat cillum eu incididunt in.

Labore ipsum id in incididunt. Amet officia mollit sit reprehenderit ea. Reprehenderit minim duis amet qui minim laborum non do esse fugiat elit reprehenderit aliquip cupidatat. Ad ad laborum et ad irure in mollit consectetur id consectetur reprehenderit est dolore. Duis deserunt occaecat non mollit quis cupidatat.`,
`Exercitation tempor quis elit qui veniam. Reprehenderit ut commodo sint tempor labore est aute officia consequat. Magna dolor pariatur pariatur sit enim ea fugiat. Ut ut occaecat culpa irure ipsum. Aliqua proident veniam do dolore tempor et. Pariatur sit sunt ullamco esse labore laborum est amet. Mollit dolor aliqua aliqua et.`,
`Sint culpa commodo pariatur qui veniam enim officia elit aute exercitation. Deserunt dolore anim minim fugiat cillum reprehenderit ex. Ipsum sit veniam tempor commodo elit fugiat amet occaecat aliqua aute. Ea ea esse minim eu veniam excepteur dolore.`,
`Eu nostrud aliqua id aliquip veniam mollit reprehenderit proident nulla eiusmod. Ea reprehenderit magna adipisicing minim esse non amet qui cillum. Duis quis elit commodo nostrud et incididunt. Fugiat et in magna dolore aliqua velit veniam officia. Magna voluptate magna enim id laboris cillum reprehenderit fugiat nulla in et magna. Dolor ad cupidatat reprehenderit occaecat et mollit aute incididunt Lorem id. Et commodo ex ad non sint est minim nisi aute in.`
]

const countries = [
	{ 
		id: '1',
		country: 'Austria',
		code: 'AT',
		introduction: [
            `The European River Prize is given by the International River Foundation in partnership with the international association of water companies in the Danube river catchment and other partners from a wider area. An expert from the European Environment Agency (EEA) participated in the Judging Panel. Many of the discussions at the ERRC event underlined the importance of integrated management which considers all sectors in the river basin, such as agriculture, energy or spatial planning. Moreover, the conference emphasised that the objectives of the Water Framework Directive should be coordinated with other related legislation. This integrated approach requires intense coordination, transparency and effective dialogue on the very practical level of implementation at the river basin level.`
        ],
		description: [
				`The River Mur rises in the Radstädter Tauern and flows into the Drava in Croatia after a length of 453 km, 298 km of which are located in the Styria region of Austria. Systematic river regulation since the late 19th Century has separated the river loops, branches and floodplain forests which are important for the health of natural systems. Modifications including hydro-power stations and embankments have also degraded habitats.

				Nonetheless the Upper Mur is considered one of the most ecologically valuable rivers in Austria, not least because it is the natural breeding site of the Danube salmon. It also has the second largest alluvial forest in Austria, one of Europe´s most species-rich habitats.
				
				River management on the Mur has largely focused on restoring old structures and recovering natural river habitats by reconnecting them with the dynamic river-system. Besides environmental benefits, these measures have other advantages including better passive flood protection and new natural park areas for the residents.
				
				Looking ahead, a section of the river will be designated where hydropower plants will be prohibited. Such measures show that management of the Mur is a good example of policy integration and stakeholder dialogue, two elements which are vitally important in successful river basin management.
				
				`
		],
	},
	{ 
		id: '2',
		country: 'Belgium',
		code: 'BE'
	},
	{ 
		id: '3',
		country: 'Bulgaria',
		code: 'BG'
	},
	{ 
		id: '4',
		country: 'Croatia',
		code: 'HR'
	},
	{ 
		id: '5',
		country: 'Cyprus',
		code: 'CY'
	},
	{ 
		id: '6',
		country: 'Czech Republic',
		code: 'CZ'
	},
	{ 
		id: '7',
		country: 'Denmark',
		code: 'DK'
	},
	{ 
		id: '8',
		country: 'Estonia',
		code: 'EE'
	},
	{ 
		id: '9',
		country: 'Finland',
		code: 'FI'
	},
	{ 
		id: '10',
		country: 'France',
		code: 'FR'
	},
	{ 
		id: '11',
		country: 'Germany',
		code: 'DE'
	},
	{ 
		id: '12',
		country: 'Greece',
		code: 'GR'
	},
	{ 
		id: '13',
		country: 'Hungary',
		code: 'HU'
	},
	{ 
		id: '14',
		country: 'Ireland',
		code: 'IE'
	},
	{ 
		id: '15',
		country: 'Italy',
		code: 'IT'
	},
	{ 
		id: '16',
		country: 'Latvia',
		code: 'LV'
	},
	{ 
		id: '17',
		country: 'Lithuania',
		code: 'LT'
	},
	{ 
		id: '18',
		country: 'Luxembourg',
		code: 'LU'
	},
	{ 
		id: '19',
		country: 'Malta',
		code: 'MT'
	},
	{ 
		id: '20',
		country: 'Netherlands',
		code: 'NL'
	},
	{ 
		id: '21',
		country: 'Poland',
		code: 'PL'
	},
	{ 
		id: '22',
		country: 'Portugal',
		code: 'PT'
	},
	{ 
		id: '23',
		country: 'Romania',
		code: 'RO'
	},
	{ 
		id: '24',
		country: 'Slovakia',
		code: 'SK'
	},
	{ 
		id: '25',
		country: 'Slovenia',
		code: 'SI'
	},
	{ 
		id: '26',
		country: 'Spain',
		code: 'ES'
	},
	{ 
		id: '27',
		country: 'Sweden',
		code: 'SE'
	},
	{ 
		id: '28',
		country: 'United Kingdom',
		code: 'GB'
	},
]

countries.forEach(country => {
	topics.forEach(topic => {
		country[topic.id] = topic.name 
		country.introduction = [randomStrings[Math.floor(Math.random() * randomStrings.length-1) + 1]]
		country.description = [randomStrings[Math.floor(Math.random() * randomStrings.length-1) + 1]]
		country.main = main
	})
})

export default countries