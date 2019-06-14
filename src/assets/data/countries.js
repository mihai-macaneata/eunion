import { getObjById } from '@/utils/helpers'
import main from './htmlstrings/nationalEmissions'
import topics from './topics'

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
		main
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
	})
})

export default countries