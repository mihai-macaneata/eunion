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
            `Consequat et veniam anim cillum id occaecat dolore in ipsum ea ullamco sint. Culpa consectetur id consectetur eiusmod consectetur dolor id duis veniam et. Sint non officia proident quis. Labore incididunt commodo ut sit sit ex ullamco aliqua consectetur quis quis do incididunt ut. Laboris cillum quis aute pariatur eiusmod qui et laborum ipsum occaecat sint dolor aute cupidatat.
Reprehenderit est elit labore dolore. Pariatur ea id sunt ut nostrud reprehenderit nostrud cillum est dolor magna sunt. Qui labore aliqua nostrud officia nostrud consectetur consectetur.`
        ],
         description: [
             `Enim exercitation cillum ipsum anim qui consectetur incididunt sit Lorem duis. Ad dolor anim ut aliquip pariatur consequat fugiat mollit tempor id. Mollit non ipsum deserunt ullamco. Eiusmod veniam dolor magna exercitation et. Id labore in minim deserunt laborum fugiat. Commodo ad eu esse enim ex et.

Culpa labore occaecat non incididunt velit reprehenderit ut occaecat aute. Laboris dolore consectetur laboris anim ea. Anim aliqua et elit anim ex nulla deserunt nulla sunt veniam Lorem veniam labore quis. Adipisicing eiusmod id exercitation id sint amet nostrud aliquip officia cillum non nostrud anim qui. Excepteur laboris Lorem dolore eu est.`
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
           `Amet culpa culpa tempor id excepteur amet. Eu aute labore minim in ipsum laborum tempor reprehenderit. Labore deserunt ex ea tempor exercitation ipsum sunt cupidatat amet ea duis. Lorem ad amet veniam laborum.`
        ],
        description: [
           `Dolore tempor ut eu reprehenderit ut quis dolore tempor aute dolor qui. Dolore sunt velit id sint exercitation quis mollit aliqua sint velit labore occaecat ad aute. Exercitation est qui magna ex magna laborum officia ad laborum occaecat.

Minim ea est Lorem aute qui. Non cillum et voluptate amet aute ex nostrud esse aliquip irure commodo in. Minim veniam qui commodo quis labore ullamco qui aliqua nulla mollit fugiat labore cillum. Minim excepteur pariatur consectetur pariatur est est dolore minim quis id nulla eiusmod et non. Esse aliqua deserunt sunt mollit nostrud ullamco.

Occaecat excepteur enim duis nostrud aute ullamco eiusmod adipisicing minim. Magna ex labore eiusmod id anim. Eiusmod Lorem Lorem est incididunt eu. Quis ad ex sunt minim ipsum. Duis ad ea ex nulla ipsum sint Lorem laboris duis. Adipisicing nulla quis Lorem consequat deserunt cupidatat ea Lorem minim anim. Reprehenderit sunt nisi et nostrud ex irure adipisicing sunt est.`
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