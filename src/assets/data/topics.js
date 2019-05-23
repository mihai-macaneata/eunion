import { getObjById } from '@/utils/helpers'

const charts = [
    {
        id: 1,
        data: []
    }
]

const subtopics = [
    {
        id: 1,
        name: "EU and national targets"
    },
    {
        id: 2,
        name: "National emissions",
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
        indicators: [],
        briefing: [],
        report: [],
    },
    {
        id: 3,
        name: "Policies and measures to reduce emissions"
    },
    {
        id: 4,
        name: "Emissions in the EU ETS"
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