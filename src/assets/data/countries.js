import { getObjById } from '@/utils/helpers'

const charts = [
	{
		id: 1,
		data: []
	}
]

export default [
	{ 
		id: '1',
		country: 'Austria',
		code: 'AT',
		introduction: [
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        ],
		description: [
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
		],
		main: {
			content: [
				{ 
						text: [
								"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
						],
						chartId: false
				},
				{ 
						text: [
								"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
						],
						text_below_chart: [
								"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
						],
						chart: getObjById(1, charts),
				}
			],
		},
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