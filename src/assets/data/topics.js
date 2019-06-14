import { getObjById } from '@/utils/helpers'
import main from './htmlstrings/nationalEmissions'
import data from './htmlstrings/data'
import indicators from './htmlstrings/indicators'
import briefing from './htmlstrings/briefing'
import report from './htmlstrings/report'


const charts = [
    {
        id: 1,
        data: []
    }
]

const subtopics = [
    {
        id: 1,
        name: "EU and national targets",
        introduction: [
            'Reprehenderit nisi in occaecat officia eiusmod eiusmod id laborum consectetur culpa laboris qui enim ad. Aute quis laborum in cillum incididunt enim eiusmod est reprehenderit cupidatat do cillum enim proident. Esse irure eiusmod dolor labore id commodo elit fugiat aute enim. Dolore nisi Lorem sit eiusmod. Nostrud commodo exercitation officia Lorem adipisicing.'
        ],
         description: [
             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
         ],
         main,
         data,
         indicators,
         briefing,
         report
    },
    {
        id: 2,
        name: "National emissions",
        introduction: [
           `A new National Emissions Ceilings (NEC) Directive (2016/2284/EU) entered into force on 31 December 2016. Replacing earlier legislation, (Directive 2001/81/EC), the new NEC Directive sets 2020 and 2030 emission reduction commitments for five main air pollutants. It also ensures that the emission ceilings for 2010 set in the earlier directive remain applicable for Member States until the end of 2019.

           The new directive transposes the reduction commitments for 2020 agreed by the EU and its Member States under the 2012 revised Gothenburg Protocol under the Convention on Long-range Transboundary Air Pollution (LRTAP Convention). The more ambitious reduction commitments agreed for 2030 are designed to reduce the health impacts of air pollution by half compared with 2005.
           
           Further, the Directive requires that the Member States draw up National Air Pollution Control Programmes that should contribute to the successful implementation of air quality plans established under the EU’s Air Quality Directive.`
        ],
        description: [
            "The National Emission Ceilings Directive sets national emission reduction commitments for Member States and the EU for five important air pollutants: nitrogen oxides (NOx), non-methane volatile organic compounds (NMVOCs), sulphur dioxide (SO2), ammonia (NH3) and fine particulate matter (PM2.5). These pollutants contribute to poor air quality, leading to significant negative impacts on human health and the environment."
        ],
        main,
        data: data,
        indicators: indicators,
        briefing,
        report
    },
    {
        id: 3,
        name: "Policies and measures to reduce emissions",
        introduction: [
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        ],
        description: [
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        ],
        main,
        data,
        indicators,
        briefing,
        report
    },
    {
        id: 4,
        name: "Emissions in the EU ETS",
        introduction: [
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        ],
        description: [
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        ],
        main,
        data,
        indicators,
        briefing,
        report
    }
]

export default [
    {
        id: 1,
        name: "Greenhouse gas emissions and projections",
        subtopics: [
            getObjById(1, subtopics),
            getObjById(2, subtopics),
            getObjById(3, subtopics),
            getObjById(4, subtopics)
        ]
    },
    {
        id: 2,
        name: "Renewable energy",
        subtopics: [
            getObjById(1, subtopics),
            getObjById(2, subtopics),
            getObjById(3, subtopics),
            getObjById(4, subtopics)
        ]
    },
    {
        id: 3,
        name: "Energy efficiency",
        subtopics: [
            getObjById(1, subtopics),
            getObjById(2, subtopics),
            getObjById(3, subtopics),
            getObjById(4, subtopics)
        ]
    },
    {
        id: 4,
        name: "Transport",
        subtopics: [
            getObjById(1, subtopics),
            getObjById(2, subtopics),
            getObjById(3, subtopics),
            getObjById(4, subtopics)
        ]
    },
    {
        id: 5,
        name: "Ozone-depleting substances",
        subtopics: [
            getObjById(1, subtopics),
            getObjById(2, subtopics),
            getObjById(3, subtopics),
            getObjById(4, subtopics)
        ]
    },
    {
        id: 6,
        name: "Fluorinated greenhouse gases",
        subtopics: [
            getObjById(1, subtopics),
            getObjById(2, subtopics),
            getObjById(3, subtopics),
            getObjById(4, subtopics)
        ]
    },
    {
        id: 7,
        name: "Land and forests",
        subtopics: [
            getObjById(1, subtopics),
            getObjById(2, subtopics),
            getObjById(3, subtopics),
            getObjById(4, subtopics)
        ]
    },
    {
        id: 8,
        name: "Adaptation to climate change",
        subtopics: [
            getObjById(1, subtopics),
            getObjById(2, subtopics),
            getObjById(3, subtopics),
            getObjById(4, subtopics)
        ]
    },
]