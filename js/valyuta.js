document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        USD: {
            home_ticket_1_price_skidka: '$17',
            home_ticket_1_price: '$15',

            home_ticket_2_price_skidka: '$6',
            home_ticket_2_price: '$4',

            home_ticket_3_price_skidka: '$11',
            home_ticket_3_price: '$9',

            home_ticket_4_price: '$4',

            home_ticket_5_price: '$7',

            home_ticket_6_price_skidka: '$47',
            home_ticket_6_price: '$27',

            home_ticket_7_price_skidka: '$13',
            home_ticket_7_price: '$11',

            home_ticket_8_price_skidka: '$16',
            home_ticket_8_price: '$15',

            home_ticket_9_price: '$2',

            home_ticket_10_price_skidka: '$8',
            home_ticket_10_price: '$7',

            home_ticket_11_price_skidka: '$16',
            home_ticket_11_price: '$13',

            home_ticket_12_price_skidka: '$28',
            home_ticket_12_price: '$19',

            home_ticket_13_price_skidka: '$23',
            home_ticket_13_price: '$20',

            home_ticket_14_price: '$19',

            home_ticket_15_price: '$2',

            home_ticket_16_price_skidka: '$9',
            home_ticket_16_price: '$8',

            home_ticket_17_price_skidka: '$12',
            home_ticket_17_price: '$9',

            home_ticket_18_price_skidka: '$4',
            home_ticket_18_price: '$3',

            home_ticket_19_price_skidka: '$6',
            home_ticket_19_price: '$5',

            home_ticket_20_price: '$8',

            home_ticket_21_price: '$21',

            home_ticket_22_price_skidka: '$5',
            home_ticket_22_price: '$4',

            home_ticket_23_price: '$5',

            home_ticket_24_price: '$9',

            home_ticket_25_price: '$10',

            home_ticket_26_price: ' ',

            home_ticket_27_price: '$25',

            home_ticket_28_price: '$8',

            home_ticket_29_price: '$4',

            home_ticket_30_price_skidka: '$9',
            home_ticket_30_price: '$8',

            home_ticket_31_price: '$9',

            home_ticket_32_price: '$9',

            home_ticket_33_price_skidka: '',
            home_ticket_33_price: '',

            home_ticket_34_price_skidka: '$8',
            home_ticket_34_price: '$7',

            home_ticket_35_price_skidka: '$8',
            home_ticket_35_price: '$7',

            home_ticket_36_price: '$10',

            home_ticket_37_price_skidka: '$10',
            home_ticket_37_price: '$9',

            home_ticket_38_price_skidka: '$13',
            home_ticket_38_price: '$12',

            home_ticket_39_price: '$3',

            home_ticket_40_price_skidka: ' ',
            home_ticket_40_price: '$2',

            home_ticket_41_price_skidka: '$53',
            home_ticket_41_price: '$42',

            home_ticket_42_price_skidka: '$6',
            home_ticket_42_price: '$4',

            home_ticket_43_price_skidka: '',
            home_ticket_43_price: '',

            home_ticket_44_price_skidka: '$15',
            home_ticket_44_price: '$14',

            home_ticket_45_price_skidka: '',
            home_ticket_45_price: '',

            home_ticket_46_price: '$38',

            home_ticket_47_price_skidka: '$19',
            home_ticket_47_price: '$15',

            home_ticket_48_price_skidka: '$8',
            home_ticket_48_price: '$5',

            home_ticket_49_price_skidka: '',
            home_ticket_49_price: '',

            home_ticket_50_price_skidka: '$16',
            home_ticket_50_price: '$13',

            home_ticket_51_price_skidka: '$16',
            home_ticket_51_price: '$5',

            home_ticket_52_price_skidka: '$4',
            home_ticket_52_price: '$3',

            home_ticket_53_price_skidka: '$7',
            home_ticket_53_price: '$6',

            home_ticket_54_price_skidka: '$4',
            home_ticket_54_price: '$3',

            home_ticket_55_price_skidka: '',
            home_ticket_55_price: '',

            home_ticket_56_price_skidka: '$6',
            home_ticket_56_price: '$5',

            home_ticket_57_price: '$7',

            home_ticket_58_price_skidka: '$8',
            home_ticket_58_price: '$6',

            home_ticket_59_price_skidka: '$7',
            home_ticket_59_price: '$6',

            home_ticket_60_price: '$22',

            home_ticket_61_price: '$18',

            home_ticket_62_price: '$9',

            home_ticket_63_price: '$38',

            home_ticket_64_price: '$8',

            home_ticket_65_price: '$18',

            home_ticket_66_price: '$39',

            home_ticket_67_price: '$11',

            home_ticket_68_price: '',

            home_ticket_69_price: '$16',




            sunway_ticket_1_skidkas: '$17',
            sunway_ticket_1: '$15',

            sunway_ticket_2_skidkas: '$16.99',
            sunway_ticket_2: '$14.87',

            sunway_ticket_3_skidkas: '$46',
            sunway_ticket_3: '$41',

            sunway_ticket_4_skidkas: '$65',
            sunway_ticket_4: '$57',

            sunway_ticket_5_skidkas: '$46',
            sunway_ticket_5: '$38',

            sunway_ticket_6: '$39',

            sunway_ticket_7_skidkas: '$41',
            sunway_ticket_7: '$35',


            bookAquaria_1_skidkas: '$11',
            bookAquaria_1: '$9',

            bookAquaria_2_skidkas: '$46',
            bookAquaria_2: '$41',

            bookAquaria_3_skidkas: '$45.97',
            bookAquaria_3: '$41.10',

            bookAquaria_4_skidkas: '$17',
            bookAquaria_4: '$15',

            bookAquaria_5_skidkas: '$31',
            bookAquaria_5: '$22',

            bookAquaria_6_skidkas: '$57',
            bookAquaria_6: '$36',

            bookAquaria_7_skidkas: '$23',
            bookAquaria_7: '$22',

            bookAquaria_8_skidkas: '$42',
            bookAquaria_8: '$40',

            bookAquaria_9_skidkas: '$15',
            bookAquaria_9: '$13',

            bookAquaria_10_skidkas: '$18',
            bookAquaria_10: '$16',


            bookGamuda_1_skidkas: ' ',
            bookGamuda_1: '$23',

            bookGamuda_2_skidkas: '$42',
            bookGamuda_2: '$36',

            bookGamuda_3: '$10',


            gentingskyworlds_1_skidkas: '$47',
            gentingskyworlds_1: '$27',

            gentingskyworlds_2: '$16',

            gentingskyworlds_3_skidkas: '$63',
            gentingskyworlds_3: '$47',

            gentingskyworlds_4: '$16',

            gentingskyworlds_5_skidkas: '$57',
            gentingskyworlds_5: '$36',



            bookafamosa_1_skidkas: '$15',
            bookafamosa_1: '$13',

            bookafamosa_2_skidkas: '$15',
            bookafamosa_2: '$13',

            bookafamosa_3_skidkas: '$30',
            bookafamosa_3: '$24',

            bookafamosa_4_skidkas: '$23',
            bookafamosa_4: '$20',

            bookafamosa_5_skidkas: '$19',
            bookafamosa_5: '$15',



            bookthetop_1_skidkas: '$16',
            bookthetop_1: '$15',

            bookthetop_2_skidkas: '$18',
            bookthetop_2: '$16',

            bookthetop_3_skidkas: '$25',
            bookthetop_3: '$22',

            bookthetop_4_skidkas: '$59',
            bookthetop_4: '$52',



            bookgentinghighlands_1: '$2',

            bookgentinghighlands_2: '$16',

            bookgentinghighlands_3_skidkas: '$49',
            bookgentinghighlands_3: '$31',



            buywetworld_1_skidkas: '$8',
            buywetworld_1: '$7',



            bookskytropolis_1_skidkas: '$16',
            bookskytropolis_1: '$13',

            bookskytropolis_2: '$16',

            bookskytropolis_3_skidkas: '$63',
            bookskytropolis_3: '$47',

            bookskytropolis_4_skidkas: '$57',
            bookskytropolis_4: '$36',



            booklostworld_1_skidkas: '$28',
            booklostworld_1: '$19',

            booklostworld_2_skidkas: '$20',
            booklostworld_2: '$15',



            bookthebestguide_1_skidkas: '$23',
            bookthebestguide_1: '$20',

            bookthebestguide_2: '$47',



            atmospheretickets_1: '$42',

            atmospheretickets_2: '$19',

            atmospheretickets_3: '$36',

            atmospheretickets_4: '$42',

            atmospheretickets_5: '$46',

            atmospheretickets_6_skidkas: '$57',
            atmospheretickets_6: '$55',



            bookcablecar_1: '$2',

            bookcablecar_2: '$16',

            bookcablecar_3_skidkas: '$49',
            bookcablecar_3: '$31',

            hello_chan: '$31',



            booklangkawi_1_skidkas: '$9',
            booklangkawi_1: '$8',

            booklangkawi_2_skidkas: '',
            booklangkawi_2: '$17',

            booklangkawi_3_skidkas: '$23',
            booklangkawi_3: '$22',

            booklangkawi_4_skidkas: '',
            booklangkawi_4: '$20',

            booklangkawi_5: '$112',

            booklangkawi_6_skidkas: '',
            booklangkawi_6: '$12',

            booklangkawi_7_skidkas: '$19',
            booklangkawi_7: '$18',

            booklangkawi_8_skidkas: '$70',
            booklangkawi_8: '$63 ',



            buybatu_1_skidkas: '$12',
            buybatu_1: '$9',

            buybatu_2_skidkas: '$23',
            buybatu_2: '$18',

            buybatu_3_skidkas: '$12',
            buybatu_3: '$8',

            buybatu_4: '$17',

            buybatu_5_skidkas: '$67',
            buybatu_5: '$57',

            buybatu_6: '$53',

            buybatu_7: '$31.84',

            buybatu_8_skidkas: '$83',
            buybatu_8: '$74',



            upsidedown_1_skidkas: '$4',
            upsidedown_1: '$3',

            upsidedown_2_skidkas: '$11.04',
            upsidedown_2: '$9.87',



            bookkualaselangor_1: '$8',

            bookkualaselangor_2: '$50',



            bookskymirror_1: '$21',

            bookskymirror_2: '$8',

            bookskymirror_3: '$10',

            bookskymirror_4: '$8',



            booktaming_1_skidkas: '$5',
            booktaming_1: '$4',

            booktaming_2_skidkas: '$15',
            booktaming_2: '$13',

            booktaming_3_skidkas: '$17',
            booktaming_3: '$15',

            booktaming_4_skidkas: '$19',
            booktaming_4: '$15',



            bookshore_1: '$5',

            bookshore_2_skidas: '$12',
            bookshore_2: '$11',



            getdeals_1: '$17',

            getdeals_2_skidkas: '$82.79',
            getdeals_2: '$73.24',

            getdeals_3: '$31.84',

            getdeals_4_skidkas: '$',
            getdeals_4: '$',

            getdeals_5_skidkas: '$',
            getdeals_5: '$',



            bookcolmartropicale_1: '$31.84',



            getdealsonlangkawi_1: '$171',

            getdealsonlangkawi_2: '$42',

            getdealsonlangkawi_3: '$25',

            getdealsonlangkawi_4: '$214',

            getdealsonlangkawi_5: '$320',

            getdealsonlangkawi_6: '$10',

            getdealsonlangkawi_7: '$72',

            getdealsonlangkawi_8: '$16',



            bookpetrosains_1: '$2',

            bookpetrosains_2_skidkas: '$12',
            bookpetrosains_2: '$11',

            bookpetrosains_3_skidkas: '$42',
            bookpetrosains_3: '$40',

            bookpetrosains_4_skidkas: '$12',
            bookpetrosains_4: '$10',

            bookpetrosains_5: '$7',




            q1: "$20.80",
            q2: "$24.49",
            q3: "$14",
            q4: "$14",
            q5: "$36",
            q6: "$49",
            q7: "$8",
            q8: "$7",
            q9: "$11",
            q10: "$9",
            q11: "$14",
            q12: "$13",
            q13: "$18",
            q14: "$16",
            q15: "$8.25",
            q16: "$7.81",
            q17: "$12.31",
            q18: "$12.06",
            q19: "$11.88",
            q20: "$12.31",
            q21: "$42.46",
            q22: "$10",
            q23: "$9",
            q24: "$13",
            q25: "$12",
            q26: "$13",
            q27: "$12",
            q28: "$16",
            q29: "$13",
            q30: "$4.67",
            q31: "$50.95",
            q32: "$12.74",
            q33: "$11.44",
            q34: "$16",
            q35: "$16.12",
            q36: "$3",
            jallod_1: "$16",
            q37: "$6",
            q38: "$12",
            q39: "$12",
            q40: "$25",
            q41: "$13.52",
            q42: "$19.74",
            q43: "$10",
            q44: "$19",
            q45: "$7",
            q46: "$20",
            q47: "$25",
            q48: "$38",
            q49: "$8",
            q50: "$20",
            q51: "$57",
            q52: "$69",
            q53: "$85",
            q54: "$115",
            q55: "$73.24",
            q56: "$77.49",
            q57: "$99.78",
            q58: "$15",
            q59: "$11",
            q60: "$21",
            q61: "$15",
            q62: "$25",
            q63: "$20",
            q64: "$19.26",
            q65: "$25.23",
            q66: "$18",
            q67: "$20",
            q68: "$21",
            q69: "$40",
            q70: "$9.72",
            q71: "$8",
            q72: "$42.46",
            q73: "$10",
            q74: "$20",
            q75: "$15",
            q76: "$17",
            q77: "$15",
            q78: "$13",
            q79: "$25",
            q80: "$4",
            q81: "$5",
            q82: "$11",
            q83: "$16.74",
            q84: "$16",
            q85: "$10",
            q86: "$45",
            q87: "$68",
            q88: "$320",
            q89: "$748",
            q90: "$214",
            q91: "$256",
            q92: "$2",
            q93: "$3",
            q94: "$1.66",
            q95: "$8.52",
            q96: "$9",
            qq1: "$13",
            q97: "$12",
            q98: "$17",
            q99: "$19.74",
            q100: "$18.47",
            q101: "$21.23",
            q102: "$19.96",
            q103: "$23",
            q104: "$22",
            q105: "$29.29",
            q106: "$27.59",
            q107: "$23",
            q108: "$22",
            q109: "$28",
            q110: "$26",
            q111: "$29",
            q112: "$27",
            q113: "$23.34",
            q114: "$20",
            q115: "$40.32",
            q116: "$32",



            a1: "$42",
            a2: "$34",
            a3: "$9",
            a4: "$13",
            a5: "$14",
            a6: "$12",
            a7: "$23",
            a8: "$20",
            a9: "$15",
            a10: "$11",
            a11: "$31",
            a12: "$22",
            a13: "$17",
            a14: "$14",
            a15: "$43",
            a16: "$36",
            a17: "$8",
            a18: "$7",
            a19: "$10.19",
            a20: "$10",
            a21: "$9",
            a22: "$13",
            a23: "$12",
            a24: "$3",
            a25: "$13",
            a26: "$12",
            a27: "$13",
            a28: "$12",

            home_price_1: "$19",
            home_price_133: "$11",
            
            from_price_1: "$16",  
            home_price_2: "$15",  

            from_price_2: "$17",  
            home_price_3: "$14",  

            from_price_3: "$7",  
            home_price_4: "$5",  

            home_price_5: "$8", 

            home_price_6: "$118",  

            home_price_7: "$24",  
            
            home_price_8: "$38",

            from_price_6: "$11",  
            home_price_9: "$10",  

            home_price_10: "$24",  
            
            home_price_11: "$9",  

            home_price_12: "$18",

            home_price_13: "$22",

            home_price_14: "$6",  

            home_price_15: "$6",   

            from_price_7: "$8",  
            home_price_16: "$7",   

            from_price_8: "$6",  
            home_price_17: "$5",   

            from_price_9: "$4",  
            home_price_18: "$3",   

            from_price_10: "$7",  
            home_price_19: "$6",   

            from_price_11: "$11",  
            home_price_20: "$9",  
            
            home_price_21: "$7",

            from_price_12: "$4",  
            home_price_22: "$3", 

            from_price_13: "$16",  
            home_price_23: "$5",   

            from_price_14: "$16",  
            home_price_24: "$13",   

            home_price_25: "$46",   

            from_price_15: "$11",  
            home_price_26: "$8", 

            from_price_16: "$26",  
            home_price_27: "$13",   

            from_price_17: "$42",  
            home_price_28: "$36",   

            home_price_29: "$10",   

            from_price_18: "$8",  
            home_price_30: "$5",
            
            home_price_31: "$5", 
            
            from_price_19: "$19",  
            home_price_32: "$15",

            home_price_33: "$38",

            from_price_20: "$54",
            home_price_34: "$49",

            from_price_21: "$59", 
            home_price_35: "$52", 

            from_price_22: "$46", 
            home_price_36: "$44", 

            home_price_37: "$14", 
            
            from_price_23: "$5", 
            home_price_38: "$4", 

            home_price_39: "$14", 

            from_price_24: "$11", 
            home_price_40: "$8", 

            home_price_41: "$13", 

            from_price_26: "$6", 
            home_price_42: "$4", 

            home_price_43: "$5", 

            from_price_27: "$10", 
            home_price_44: "$6", 

            from_price_28: "$4", 
            home_price_45: "$2", 

            from_price_34: "$52.86", 
            
            from_price_29: "$53", 
            home_price_46: "$42", 

            from_price_30: "$79", 
            home_price_47: "$67", 

            from_price_31: "$22", 
            home_price_48: "$18", 

            from_price_32: "$22", 
            home_price_49: "$18", 

            from_price_33: "$72", 
            home_price_50: "$53", 

            home_price_51: "$44",

            from_price_34: "$15", 
            home_price_52: "$2", 
            
            home_price_53: "$36",

            home_price_54: "$60", 

            from_price_35: "$19", 
            
            home_price_55: "$18",
            
            home_price_10002: "$30",

            home_price_1001: "$21",

            from_price_36: "$31.42", 
            home_price_56: "$20.97", 

           
            w1: "$17",
            w2: "$15",
            w3: "$48",
            w4: "$41",
            w5: "$67",
            w6: "$42",
            w7: "$67",
            w8: "$58",
            w9: "$16",
            w10: "$14",
            w11: "$16",
            w12: "$14",
            w13: "$41",
            w14: "$51",
            w15: "$57",
            w16: "$62",
            w17: "$38",
            w18: "$53",
            w19: "$39",
            w20: "$42",
            w21: "$35",
            w22: "$41",
            w23: "$11",
            w24: "$9",
            w25: "$11.01",
            w26: "$9.54",
            w27: "$39.87",
            w28: "$33.97",
            w29: "$59.44",
            w30: "$44.55",
            w31: "$41.16",
            w32: "$51.56",
            w33: "$19.51",
            w34: "$22.27",
            w35: "$17",
            w36: "$15",
            w37: "$26",
            w38: "$24",
            w39: "$17.35",
            w40: "$15.88",
            w41: "$26.52",
            w42: "$24.18",
            w43: "$20.80",
            w44: "$23.51",
            w45: "$36",
            w46: "$40",
            w47: "$22",
            w48: "$26",
            w49: "$40",
            w50: "$53",
            w51: "$23.75",
            w52: "$21.41",
            w53: "$31.81",
            w54: "$27.38",
            w55: "$24.37",
            w56: "$22.46",
            w57: "$32.67",
            w58: "$28.61",
            w59: "$16",
            w60: "$33.29",
            w61: "$42.46",
            w62: "$36.06",
            w63: "$46.70",
            w64: "$40.30",
            w65: "$57.29",
            w66: "$48.79",
            w67: "$10",
            w68: "$7.38",
            w69: "$20.80",
            w70: "$42",
            w71: "$42.21",
            w72: "$60.49",
            w73: "$79.56",
            w74: "$11",
            w75: "$27",
            w76: "$14",
            w77: "$32",
            w78: "$17",
            w79: "$30",
            w80: "$66.82",
            w81: "$78.51",
            w82: "$95.50",
            w83: "$123.12",
            w84: "$38",
            w85: "$59",
            w86: "$36",
            w87: "$50",
            w88: "$74",
            w89: "$78",
            w90: "$100",
            w91: "$16",
            w92: "$33",
            w93: "$47",
            w94: "$27",
            w95: "$50",
            w96: "$32",
            w97: "$54",
            w98: "$35",
            w99: "$63",
            w100: "$47",
            w101: "$36.24",
            w102: "$39.26",
            w103: "$13",
            w104: "$15",
            w105: "$15.69",
            w106: "$16.74",
            w107: "$16",
            w108: "$19.26",
            w109: "$20.80",
            w110: "$13.11",
            w111: "$25.23",
            w112: "$12.31",

            l4_sk: "$15",
            l5: "$14",
            l6_sk: "$18",
            l6: "$17",
            bookAquaria_6_skidkas: "$57",
            bookAquaria_6_skidkas1: "$67",
            l7: "$57",
            l8: "$38",
            l9: "$36",
            l10: "$83",
            l10_sk: "$74",

            bookAquaria_bilet_3: "$16",
            bookAquaria_bilet_3_skidka: "$20",
            aquaria_tickets_100: "$16",
            aquaria_tickets_101: "$25",
            
            aquaria_tickets_1001: "$14.95",
            aquaria_tickets_1010: '$17.41',

            aquaria_tickets_2000: "$20",
            aquaria_tickets_2001: '$22',

            aquaria_tickets_2002: "$15",
            aquaria_tickets_2003: '$17',

            bookgenting_tic_1: '$2',
            bookgenting_tic_2: '$3',

            bookgenting_tic_2_skidka: '$4',

            bookskytropolis_2000: '$13',

            booklostworlds_1: '$19',
            booklostworlds_1_skidkas: '$28',

            booklostworlds_2: '$24',
            booklostworlds_2_skidkas: '$28',

            booklostworlds_3: '$20',
            booklostworlds_3_skidkas: '$15',

            booklostworlds_4: '$20',
            booklostworlds_4_skidkas: '$17',

            booklostworlds_5: '$20',
            booklostworlds_5_skidkas: '$23',

            booklostworlds_6: '$24',
            booklostworlds_6_skidkas: '$30',

            atmosphereticket_valyut_1: '$46',


            booklangkawas_1: '$8',
            booklangkawas_2: '$18',

            booklangkawas_3: '$112',
            booklangkawas_4: '$115',

            booklangkawas_5: '$12',
            booklangkawas_6: '$13',

            booklangkawas_7: '$8.49',
            booklangkawas_8: '$17.40',

            upsidedowns_1: '$9.87',
            

            p1: '$20',
            p2: '$24',
            p3: '$14',
            p4: '$14',
            p5: '$15',
            p_skidka: '$7',
            p6: '$5',
            p7: '$5',
            p8: '$8',
            p9: '$8',
            p10: '$73',
            p11: '$85',
            p12: '$111',
            p13: '$117.79',
            p14: '$128.49',
            p15: '$24.63',
            p16: '$26',
            p17: '$29',
            p18: '$118',
            p19: '$128',
            p20: '$24',
            p21: '$26',
            p22: '$29',
            p23: '$38',
            p24: '$45',
            p25: '$11',
            p26: '$10',
            p27: '$19',
            p28: '$18',
            p29: '$24',
            p30: '$23',
            p31: '$44',
            p32: '$42',
            p33: '$19',
            p34: '$20',
            p35: '$21',
            p36: '$32',
            p37: '$22',
            p38: '$7',
            p39: '$6',
            p40: '$16.62',
            p41: '$6',
            p42: '$15',
            p43: '$15',
            p44: '$6.61',
            p45: '$7',
            p46: '$5',
            p47: '$11',
            p48: '$4',
            p49: '$3',
            p50: '$5',
            p51: '$7',
            p52: '$6',
            p53: '$10',
            p54: '$9',
            p55: '$10.66',
            p56: '$7.25',
            p57: '$3',
            p58: '$5',
            p59: '$10',
            p60: '$5',
            p61: '$5',
            p62: '$21',
            p63: '$5',
            p64: '$6',
            p65: '$5',
            p66: '$8',
            p67: '$19',
            p68: '$15',
            p69: '$29',
            p70: '$25',
            p71: '$36',
            p7111: '$60',
            p72: '$49',
            p73: '$50',
            p74: '$44',
            p75: '$48',
            p76: '$4',
            p77: '$10',
            p78: '$10.02',
            p79: '$67',
            p80: '$84',
            p81: '$18',
            p82: '$30',
            p83: '$68',
            p100: '$42',
            p101: '$54',
            p102: '$68',
            p998: '$53',
            p999: '$60',
            p84: "$44",
            p85: "$44",
            p1000: "$15.92",
            p1001: "$2",
            p10011: "$9",
            p10012: "$37",
            p10013: "$50",
            p1002: "$16",
            p1003: "$15",
            p10033: "$20",


            klbirds_1: '$34.46',
            klbirds_1_skidkas: '$42.82',

            klbirds_2: '$39.61',
            klbirds_2_skidkas: '$47.10',

            klbirds_3: '$44.97',
            klbirds_3_skidkas: '$53.53',

            zoomelakas_1: '$9.63',

            zoomelakas_2: '$20',

            zoomelakas_3: '$25',

            zoomelakas_4: '$12',

            zoomelakas_5: '$25.63',

            zoomelakas_6: '$22',

            buy_langkawi_1: '$21.16',

            buy_langkawi_2: '$23.79',

            booklangkawi_11: '$17 ',

            booklangkawi_12: '$18',

            booklangkawi_13: '$21',

            booklangkawi_14: '$26',


            getdealsonlangkawis_1: '$16.84',

            getdealsonlangkawis_2: '$21.10',

            buy_langkawi_111 : '$24',

            home_price_10003: "$31",

            bookripleys_1: '$8', 

            bookripleys_2: '$7', 

            bookripleys_3: '$5', 

            bookripleys_4: '$39', 

            bookripleys_5: '$5', 

            jallod_11: '$36',

            jallod_11_skidka: '$42',

            jallod_12: '$40',

            jallod_12_skidka: '$46',

            jallod_13: '$49',

            jallod_13_skidka: '$57',

            waterworls: '$10',

            l3:"$11",
            l3_sk: "$12",

            gg: "$31",
            gg1: "$22",
            gg2: "$22",
            gg3: "$25",
            gg4: "$20.91",
            gg5: "$9",
            gg6: "$8",
            gg7: "$11.95",
            gg8: "$9.81",
            gg9: "$45",
            gg10: "$37",
            gg11: "$8",
            gg12: "$16",
            gg13: "$20",
            gg14: "$23",
            gg15: "$9.81",
            gg16: "$18.95",
            gg17: "$37",
            gg18: "$50.54",

            gg19: "$7",
            gg20: "$42",
            gg21: "$7.47",
            gg22: "$20.92",
            gg24: "$662.75",
            gg25: "$42.49",
            gg26: "$60.85",
            gg27: "$9.31",
            gg28: "$23.42",

            bookkliaa11_1_skidkas: '$22',
            bookkliaa11_1: '$20',
        },
        IDR: {

            gg19:"MYR 32",
            gg20:"MYR 195",
            gg19:"MYR 32",

            bookkliaa11_1_skidkas: 'MYR 102',
            bookkliaa11_1: 'MYR 93',
            
            qq1: "MYR 60",

            l11: "MYR 121.245",
            l2: "MYR 689.363",
            l3: "MYR 51",
            l3_sk: "MYR 55",
            l4_sk: "MYR 69",
            l5: "MYR 65",
            l6_sk: "MYR 83",
            l6: "MYR 79",
            l7: "MYR 266",
            l8: "MYR 177",
            l9: "MYR 167",
            l10: "MYR 386",
            l10_sk: "MYR 344",




            gg: "MYR 144",
            gg1: "MYR 102",
            gg2: "MYR 102",
            gg3: "MYR 116",
            gg4: "RP338,424",
            gg5: "MYR 41",
            gg6: "MYR 37",
            gg7: "MYR 193",
            gg8: "MYR 159",
            gg9: "MYR 209",
            gg10: "MYR 172",
            gg11: "MYR 37",
            gg12: "MYR 74",
            gg13: "MYR 93",
            gg14: "MYR 107",
            gg15: "MYR 159",
            gg16: "MYR 307",
            gg17: "MYR 600",
            gg18: "MYR 819",
            
            getdeals_1: 'MYR 79',

            waterworls: 'MYR 46',
            
            jallod_11: 'MYR 167',

            jallod_11_skidka: 'MYR 195',

            jallod_12: 'MYR 186',

            jallod_12_skidka: 'MYR 214',

            jallod_13: 'MYR 228',

            jallod_13_skidka: 'MYR 265',
            
            bookripleys_1: 'MYR 37', 
            
            bookripleys_2: 'MYR 32', 
            
            bookripleys_3: 'MYR 23', 
            
            bookripleys_4: 'MYR 174', 
            
            bookripleys_5: 'MYR 22', 

            buy_langkawi_111: 'MYR 111',

            getdealsonlangkawis_1: 'MYR 271.323',

            getdealsonlangkawis_2: 'MYR 340.013',

            p1000: "RP258.051",
            p1001: "MYR 9",
            p10011: "MYR 41",
            p10012: "MYR 172",
            p10013: "MYR 233",
            p1002: "MYR 74",
            p1003: "MYR 69",
            p10033: "MYR 93",
            p84: "MYR 204",
            p85: "MYR 204",
            p81: 'MYR 83',
            p82: 'MYR 139',
            p83: 'MYR 316',
            p79: 'MYR 312',
            p80: 'MYR 391',

            p998: 'MYR 246',
            p999: 'MYR 279',
            p76: 'MYR 18',
            p77: 'MYR 46',
            p78: 'RP161.420',
            p100: 'MYR 195',
            p101: 'MYR 251',
            p102: 'MYR 316',
            p74: 'MYR 204',
            p75: 'MYR 223',
            p72: 'MYR 228',
            p73: 'MYR 233',
            p71: 'MYR 167',
            p7111: 'MYR 279',
            p67: 'MYR 88',
            p68: 'MYR 69',
            p69: 'MYR 135',
            p70: 'MYR 116',
            booklangkawi_11: 'MYR 79 ',

            booklangkawi_12: 'MYR 83 ',

            booklangkawi_13: 'MYR 97 ',

            booklangkawi_14: 'MYR 121 ',

            bookgenting_tic_1: 'MYR 9',
            bookgenting_tic_2: 'MYR 13',
            
            bookgenting_tic_2_skidka: 'MYR 18',
            p33: 'MYR 88',
            p34: 'MYR 93',
            p35: 'MYR 97',
            p36: 'MYR 149',
            p37: 'MYR 102',
            p38: 'MYR 32',
            p39: 'MYR 27',
            p40: 'RP267,889',
            p41: 'MYR 27',
            p42: 'MYR 69',
            p43: 'MYR 69',
            p44: 'RP106,468',
            p45: 'MYR 32',
            p46: 'MYR 23',
            p47: 'MYR 51',
            p48: 'MYR 18',
            p49: 'MYR 13',
            p50: 'MYR 23',
            p51: 'MYR 32',
            p52: 'MYR 27',
            p53: 'MYR 46',
            p54: 'MYR 41',
            p55: 'RP171,724',
            p56: 'RP116,772',
            p57: 'MYR 13',
            p58: 'MYR 23',
            p59: 'MYR 46',
            p60: 'MYR 23',
            p61: 'MYR 23',
            p62: 'MYR 97',

            p63: 'MYR 23',
            p64: 'MYR 27',
            p65: 'MYR 23',
            p66: 'MYR 37',

            p23: 'MYR 177',
            p24: 'MYR 209',
            p20: 'MYR 111',
            p21: 'MYR 121',
            p22: 'MYR 135',
            p25: "MYR 51",
            p26: "MYR 46",
            p27: "MYR 88",
            p28: "MYR 83",
            p29: "MYR 111",
            p30: "MYR 107",
            p31: "MYR 205",
            p32: "MYR 195",

            p9: 'MYR 37',
            p10: 'MYR 340',
            p11: 'MYR 396',
            p12: 'MYR 517',
            p13: 'RP1,896,147',
            p14: 'RP2,068,524',
            p15: 'RP396,467',
            p16: 'RP430,942',
            p17: 'RP482,656',
            p18: 'MYR 549',
            p19: 'MYR 596',
            
            zoomelakas_3: 'MYR 116',
            
            zoomelakas_1: 'MYR 155.588',

            zoomelakas_2: 'MYR 93',
            
            zoomelakas_4: 'MYR 55',

            zoomelakas_5: 'MYR 413.864',
            
            zoomelakas_6: 'MYR 102',
            
            klbirds_1: 'MYR 553.202',
            klbirds_1_skidkas: 'MYR 691.502',

            klbirds_2: 'MYR 639.639',
            klbirds_2_skidkas: 'MYR 760.652',

            klbirds_3: 'MYR 726.077',
            klbirds_3_skidkas: 'MYR 864.377',

            upsidedowns_1: 'MYR 160.431',

            booklangkawas_1: 'MYR 37',
            booklangkawas_2: 'MYR 84',

            p7: 'MYR 22',
            p8: 'MYR 35',

            booklangkawas_3: 'MYR 521',
            booklangkawas_4: 'MYR 535',
            
            booklangkawas_5: 'MYR 55',
            booklangkawas_6: 'MYR 60',
            
            booklangkawas_7: 'MYR 138.005',
            booklangkawas_8: 'MYR 282.910',

            atmosphereticket_valyut_1: 'MYR 214',

            booklostworlds_1: 'MYR 88',
            booklostworlds_1_skidkas: 'MYR 130',

            booklostworlds_2: 'MYR 111',
            booklostworlds_2_skidkas: 'MYR 130',

            booklostworlds_3_skidkas: 'MYR 69',
            booklostworlds_3: 'MYR 93',

            booklostworlds_4_skidkas: 'MYR 79',
            booklostworlds_4: 'MYR 93',

            booklostworlds_5: 'MYR 93',
            booklostworlds_5_skidkas: 'MYR 107',

            booklostworlds_6: 'MYR 111',
            booklostworlds_6_skidkas: 'MYR 139',

            bookskytropolis_2000: 'MYR 60',

            aquaria_tickets_2000: "MYR 93",
            aquaria_tickets_2001: 'MYR 102',
        
            aquaria_tickets_2002: "MYR 69",
            aquaria_tickets_2003: 'MYR 79',

            aquaria_tickets_1001: "MYR 242.120",
            aquaria_tickets_1010: 'MYR 281.840',

            bookAquaria_bilet_3: "MYR 74",
            bookAquaria_bilet_3_skidka: "MYR 88",
            aquaria_tickets_100: "MYR 74",
            aquaria_tickets_101: "MYR 116",            
            
            home_ticket_1_price_skidka: 'MYR 79',
            home_ticket_1_price: 'MYR 69',

            home_ticket_2_price_skidka: 'MYR 69',
            home_ticket_2_price: 'MYR 51',

            home_ticket_3_price_skidka: 'MYR 51',
            home_ticket_3_price: 'MYR 41',

            home_ticket_4_price: 'MYR 107',

            home_ticket_5_price: 'MYR 32',

            home_ticket_6_price_skidka: 'MYR 218',
            home_ticket_6_price: 'MYR 125',

            home_ticket_7_price_skidka: 'MYR 69',
            home_ticket_7_price: 'MYR 60',

            home_ticket_8_price_skidka: 'MYR 74',
            home_ticket_8_price: 'MYR 69',

            home_ticket_9_price: 'MYR 9',

            home_ticket_10_price_skidka: 'MYR 37',
            home_ticket_10_price: 'MYR 32',

            home_ticket_11_price_skidka: 'MYR 74',
            home_ticket_11_price: 'MYR 60',

            home_ticket_12_price_skidka: 'MYR 130',
            home_ticket_12_price: 'MYR 88',

            home_ticket_13_price_skidka: 'MYR 107',
            home_ticket_13_price: 'MYR 93',

            home_ticket_14_price: 'MYR 195',

            home_ticket_15_price: 'MYR 9',

            home_ticket_16_price_skidka: 'MYR 42',
            home_ticket_16_price: 'MYR 37',

            home_ticket_17_price_skidka: 'MYR 55',
            home_ticket_17_price: 'MYR 41',

            home_ticket_18_price_skidka: 'MYR 18',
            home_ticket_18_price: 'MYR 13',

            home_ticket_19_price_skidka: 'MYR 25',
            home_ticket_19_price: 'MYR 24',

            home_ticket_20_price: 'MYR 37',

            home_ticket_21_price: 'MYR 97',

            home_ticket_22_price_skidka: 'MYR 23',
            home_ticket_22_price: 'MYR 18',

            home_ticket_23_price: 'MYR 23',

            home_ticket_24_price: 'MYR 79',

            home_ticket_25_price: 'MYR 50',

            home_ticket_26_price: ' ',

            home_ticket_27_price: 'MYR 796',

            home_ticket_28_price: 'MYR 40',

            home_ticket_29_price: 'MYR 18',

            home_ticket_30_price_skidka: 'MYR 41',
            home_ticket_30_price: 'MYR 37',

            home_ticket_31_price: 'MYR 158',

            home_ticket_32_price: 'MYR 41',

            home_ticket_33_price_skidka: '',
            home_ticket_33_price: '',

            home_ticket_34_price_skidka: 'MYR 37',
            home_ticket_34_price: 'MYR 32',

            home_ticket_35_price_skidka: 'MYR 39',
            home_ticket_35_price: 'MYR 37',

            home_ticket_36_price: 'MYR 48',

            home_ticket_37_price_skidka: 'MYR 46',
            home_ticket_37_price: 'MYR 41',

            home_ticket_38_price_skidka: 'MYR 60',
            home_ticket_38_price: 'MYR 55',

            home_ticket_39_price: 'MYR 9',

            home_ticket_40_price_skidka: ' ',
            home_ticket_40_price: 'MYR 9',

            home_ticket_41_price_skidka: 'MYR 247',
            home_ticket_41_price: 'MYR 195',

            home_ticket_42_price_skidka: 'MYR 27',
            home_ticket_42_price: 'MYR 18',

            home_ticket_43_price_skidka: '',
            home_ticket_43_price: '',

            home_ticket_44_price_skidka: ' ',
            home_ticket_44_price: 'MYR 65',

            home_ticket_45_price_skidka: '',
            home_ticket_45_price: '',

            home_ticket_46_price: 'MYR 177',

            home_ticket_47_price_skidka: 'MYR 88',
            home_ticket_47_price: 'MYR 69',

            home_ticket_48_price_skidka: 'MYR 37',
            home_ticket_48_price: 'MYR 23',

            home_ticket_49_price_skidka: '',
            home_ticket_49_price: '',

            home_ticket_50_price_skidka: 'MYR 74',
            home_ticket_50_price: 'MYR 60',

            home_ticket_51_price_skidka: 'MYR 74',
            home_ticket_51_price: 'MYR 23',

            home_ticket_52_price_skidka: 'MYR 18',
            home_ticket_52_price: 'MYR 13',

            home_ticket_53_price_skidka: 'MYR 32',
            home_ticket_53_price: 'MYR 27',

            home_ticket_54_price_skidka: 'MYR 18',
            home_ticket_54_price: 'MYR 13',

            home_ticket_55_price_skidka: '',
            home_ticket_55_price: '',

            home_ticket_56_price_skidka: 'MYR 27',
            home_ticket_56_price: 'MYR 23',

            home_ticket_57_price: 'MYR 32',

            home_ticket_58_price_skidka: 'MYR 37',
            home_ticket_58_price: 'MYR 27',

            home_ticket_59_price_skidka: 'MYR 32',
            home_ticket_59_price: 'MYR 27',

            home_ticket_60_price: 'MYR 102',

            home_ticket_61_price: 'MYR 88',

            home_ticket_62_price: 'MYR 41',

            home_ticket_63_price: 'MYR 177',

            home_ticket_64_price: 'MYR 37',

            home_ticket_65_price: 'MYR 88',

            home_ticket_66_price: 'MYR 182',

            home_ticket_67_price: 'MYR 51',

            home_ticket_68_price: '',

            home_ticket_69_price: 'MYR 76',



            sunway_ticket_1_skidkas: 'MYR 79',
            sunway_ticket_1: 'MYR 69',

            sunway_ticket_2_skidkas: 'MYR 276.597',
            sunway_ticket_2: 'MYR 242.022',

            sunway_ticket_3_skidkas: 'MYR 214',
            sunway_ticket_3: 'MYR 190',

            sunway_ticket_4_skidkas: 'MYR 302',
            sunway_ticket_4: 'MYR 265',

            sunway_ticket_5_skidkas: 'MYR 214',
            sunway_ticket_5: 'MYR 177',

            sunway_ticket_6: 'MYR 181',

            sunway_ticket_7_skidkas: 'MYR 191',
            sunway_ticket_7: 'MYR 163',


            bookAquaria_1_skidkas: 'MYR 51',
            bookAquaria_1: 'MYR 41',

            bookAquaria_2_skidkas: 'MYR 210',
            bookAquaria_2: 'MYR 190',

            bookAquaria_3_skidkas: 'MYR 748.760',
            bookAquaria_3: 'MYR 669.398',

            bookAquaria_4_skidkas: 'MYR 79',
            bookAquaria_4: 'MYR 69',

            bookAquaria_5_skidkas: 'MYR 144',
            bookAquaria_5: 'MYR 102',

            bookAquaria_6_skidkas: "MYR 266",
            bookAquaria_6_skidkas1: "MYR 311",
            bookAquaria_6: "MYR 168",
            
            bookAquaria_7_skidkas: "MYR 103",
            bookAquaria_7: "MYR 99",
            
            bookAquaria_8_skidkas: "MYR 211",
            bookAquaria_8: "MYR 180",            

            bookAquaria_9_skidkas: 'MYR 255.338',
            bookAquaria_9: 'MYR 219.797',

            bookAquaria_10_skidkas: 'MYR 83',
            bookAquaria_10: 'MYR 74',



            bookGamuda_1_skidkas: ' ',
            bookGamuda_1: 'MYR 107',

            bookGamuda_2_skidkas: 'MYR 195',
            bookGamuda_2: 'MYR 167',

            bookGamuda_3: 'MYR 46',



            gentingskyworlds_1_skidkas: 'MYR 218',
            gentingskyworlds_1: 'MYR 125',

            gentingskyworlds_2: 'MYR 74',

            gentingskyworlds_3_skidkas: 'MYR 293',
            gentingskyworlds_3: 'MYR 218',

            gentingskyworlds_4: 'MYR 74',

            gentingskyworlds_5_skidkas: 'MYR 266',
            gentingskyworlds_5: 'MYR 168',



            bookafamosa_1_skidkas: 'MYR 69',
            bookafamosa_1: 'MYR 60',

            bookafamosa_2_skidkas: 'MYR 69',
            bookafamosa_2: 'MYR 60',

            bookafamosa_3_skidkas: 'MYR 139',
            bookafamosa_3: 'MYR 111',

            bookafamosa_4_skidkas: 'MYR 107',
            bookafamosa_4: 'MYR 93',

            bookafamosa_5_skidkas: 'MYR 88',
            bookafamosa_5: 'MYR 69',



            bookthetop_1_skidkas: 'MYR 74',
            bookthetop_1: 'MYR 69',

            bookthetop_2_skidkas: 'MYR 84',
            bookthetop_2: 'MYR 74',

            bookthetop_3_skidkas: 'MYR 116',
            bookthetop_3: 'MYR 102',

            bookthetop_4_skidkas: 'MYR 274',
            bookthetop_4: 'MYR 242',



            bookgentinghighlands_1: 'MYR 9',

            bookgentinghighlands_2: 'MYR 74',

            bookgentinghighlands_3_skidkas: 'MYR 228',
            bookgentinghighlands_3: 'MYR 144',



            buywetworld_1_skidkas: 'MYR 37',
            buywetworld_1: 'MYR 32',



            bookskytropolis_1_skidkas: 'MYR 74',
            bookskytropolis_1: 'MYR 60',

            bookskytropolis_2: 'MYR 74',

            bookskytropolis_3_skidkas: 'MYR 293',
            bookskytropolis_3: 'MYR 218',

            bookskytropolis_4_skidkas: 'MYR 266',
            bookskytropolis_4: 'MYR 168',



            booklostworld_1_skidkas: 'MYR 130',
            booklostworld_1: 'MYR 88',

            booklostworld_2_skidkas: 'MYR 93',
            booklostworld_2: 'MYR 69',



            bookthebestguide_1_skidkas: 'MYR 107',
            bookthebestguide_1: 'MYR 93',

            bookthebestguide_2: 'MYR 219',



            atmospheretickets_1: 'MYR 195',

            atmospheretickets_2: 'MYR 88',

            atmospheretickets_3: 'MYR 167',

            atmospheretickets_4: 'MYR 195',

            atmospheretickets_5: 'MYR 214',

            atmospheretickets_6_skidkas: 'MYR 265',
            atmospheretickets_6: 'MYR 256',



            bookcablecar_1: 'MYR 9',

            bookcablecar_2: 'MYR 74',

            bookcablecar_3_skidkas: 'MYR 228',
            bookcablecar_3: 'MYR 144',

            hello_chan: 'MYR 144',



            booklangkawi_1_skidkas: 'MYR 42',
            booklangkawi_1: 'MYR 37',

            booklangkawi_2_skidkas: '',
            booklangkawi_2: 'MYR 79',

            booklangkawi_3_skidkas: 'MYR 107',
            booklangkawi_3: 'MYR 102',

            booklangkawi_4_skidkas: '',
            booklangkawi_4: 'MYR 93',

            booklangkawi_5: 'MYR 521',

            booklangkawi_6_skidkas: '',
            booklangkawi_6: 'MYR 55',

            booklangkawi_7_skidkas: 'MYR 93',
            booklangkawi_7: 'MYR 88',

            booklangkawi_8_skidkas: 'MYR 326',
            booklangkawi_8: 'MYR 293 ',



            buybatu_1_skidkas: 'MYR 55',
            buybatu_1: 'MYR 41',

            buybatu_2_skidkas: 'MYR 107',
            buybatu_2: 'MYR 84',

            buybatu_3_skidkas: 'MYR 55',
            buybatu_3: 'MYR 37',

            buybatu_4: 'MYR 79',

            buybatu_5_skidkas: 'MYR 311',
            buybatu_5: 'MYR 266',

            buybatu_6: 'MYR 246',

            buybatu_7: 'MYR 517.518',

            buybatu_8_skidkas: 'MYR 386',
            buybatu_8: 'MYR 344',



            upsidedown_1_skidkas: 'MYR 18',
            upsidedown_1: 'MYR 13',

            upsidedown_2_skidkas: 'MYR 179.406',
            upsidedown_2: 'MYR 160.431',



            bookkualaselangor_1: 'MYR 37',

            bookkualaselangor_2: 'MYR 233',



            bookskymirror_1: 'MYR 97',

            bookskymirror_2: 'MYR 37',

            bookskymirror_3: 'MYR 46',

            bookskymirror_4: 'MYR 37',



            booktaming_1_skidkas: 'MYR 23',
            booktaming_1: 'MYR 18',

            booktaming_2_skidkas: 'MYR 65',
            booktaming_2: 'MYR 60',

            booktaming_3_skidkas: 'MYR 79',
            booktaming_3: 'MYR 69',

            booktaming_4_skidkas: 'MYR 88',
            booktaming_4: 'MYR 69',



            bookshore_1: 'MYR 23',

            bookshore_2_skidas: 'MYR 55',
            bookshore_2: 'MYR 51',



            bookcolmartropicale_1: 'MYR 517.518',



            getdealsonlangkawi_1: 'MYR 796',

            getdealsonlangkawi_2: 'MYR 195',

            getdealsonlangkawi_3: 'MYR 116',

            getdealsonlangkawi_4: 'MYR 997',

            getdealsonlangkawi_5: 'MYR 1491',

            getdealsonlangkawi_6: 'MYR 46',

            getdealsonlangkawi_7: 'MYR 335',

            getdealsonlangkawi_8: 'MYR 74',



            bookpetrosains_1: 'MYR 18',

            bookpetrosains_2_skidkas: 'MYR 55',
            bookpetrosains_2: 'MYR 51',

            bookpetrosains_3_skidkas: 'MYR 211',
            bookpetrosains_3: 'MYR 180',

            bookpetrosains_4_skidkas: 'MYR 55',
            bookpetrosains_4: 'MYR 46',

            bookpetrosains_5: 'MYR 32',


            q1: "MYR 338",
            q2: "MYR 398",
            q3: "MYR 65",
            q4: "MYR 65",
            q5: "MYR 167",
            q6: "MYR 228",
            q7: "MYR 37",
            q8: "MYR 32",
            q9: "MYR 51",
            q10: "MYR 41",
            q11: "MYR 65",
            q12: "MYR 60",
            q13: "MYR 83",
            q14: "MYR 74",
            q15: "MYR 134",
            q16: "MYR 127",
            q17: "MYR 200",
            q18: "MYR 196",
            q19: "MYR 193",
            q20: "MYR 200",
            q21: "MYR 690",
            q22: "MYR 46",
            q23: "MYR 41",
            q24: "MYR 60",
            q25: "MYR 55",
            q26: "MYR 60",
            q27: "MYR 55",
            q28: "MYR 74",
            q29: "MYR 60",
            q30: "MYR 862",
            q31: "MYR 828",
            q32: "MYR 207",
            q33: "MYR 186",
            q34: "MYR 276",
            q35: "MYR 262",
            q36: "MYR 9",
            q37: "MYR 23",
            q38: "MYR 55",
            jallod_1: "MYR 74",
            q39: "MYR 55",
            q40: "MYR 116",
            q41: "MYR 219.871",
            q42: "MYR 321.004",
            q43: "MYR 46",
            q44: "MYR 88",
            q45: "MYR 32",
            q46: "MYR 93",
            q47: "MYR 116",
            q48: "MYR 177",
            q49: "MYR 37",
            q50: "MYR 93",
            q51: "MYR 266",
            q52: "MYR 322",
            q53: "MYR 396",
            q54: "MYR 536",
            q55: "MYR 1190.835",
            q56: "MYR 1259.868",
            q57: "MYR 1622.297",
            q58: "MYR 69",
            q59: "MYR 51",
            q60: "MYR 97",
            q61: "MYR 69",
            q62: "MYR 116",
            q63: "MYR 93",
            q64: "MYR 313",
            q65: "MYR 410",
            q66: "MYR 84",
            q67: "MYR 93",
            q68: "MYR 97",
            q69: "MYR 186",
            q70: "MYR 158",
            q71: "MYR 37",
            q72: "MYR 690",
            q73: "MYR 46",
            q74: "MYR 93",
            q75: "MYR 69",
            q76: "MYR 79",
            q77: "MYR 69",
            q78: "MYR 60",
            q79: "MYR 116",
            q80: "MYR 18",
            q81: "MYR 23",
            q82: "MYR 51",
            q83: "MYR 272",
            q84: "MYR 74",
            q85: "MYR 46",
            q86: "MYR 209",
            q87: "MYR 316",
            q88: "MYR 1491",
            q89: "MYR 3485",
            q90: "MYR 997",
            q91: "MYR 1192",
            q92: "MYR 18",
            q93: "MYR 27",
            q94: "MYR 27",
            q95: "MYR 148.571",
            q96: "MYR 42",
            q97: "MYR 55",
            q98: "MYR 79",
            q99: "MYR 65",
            q100: "MYR 62",
            q101: "MYR 724",
            q102: "MYR 655",
            q103: "MYR 793",
            q104: "MYR 759",
            q105: "MYR 100",
            q106: "MYR 93",
            q107: "MYR 107",
            q108: "MYR 102",
            q109: "MYR 130",
            q110: "MYR 121",
            q111: "MYR 135",
            q112: "MYR 125",
            q113: "MYR 380.148",
            q114: "MYR 93",
            q115: "MYR 656.620",
            q116: "MYR 149",

            p1: 'MYR 93',
            p2: 'MYR 111',
            p3: 'MYR 65',
            p4: 'MYR 65',
            p5: 'MYR 69',
            p_skidka: 'MYR 32',
            p6: 'MYR 23',
            
            a1: "MYR 195",
            a2: "MYR 158",
            a3: "MYR 41",
            a4: "MYR 223",
            a5: "MYR 65",
            a6: "MYR 55",
            a7: "MYR 107",
            a8: "MYR 93",
            a9: "MYR 69",
            a10: "MYR 51",
            a11: "MYR 144",
            a12: "MYR 102",
            a13: "MYR 79",
            a14: "MYR 65",
            a15: "MYR 200",
            a16: "MYR 167",
            a17: "MYR 37",
            a18: "MYR 32",
            a19: "MYR 165",
            a20: "MYR 46",
            a21: "MYR 41",
            a22: "MYR 60",
            a23: "MYR 55",
            a24: "MYR 9",
            a25: "MYR 60",
            a26: "MYR 55",
            a27: "MYR 60",
            a28: "MYR 55",

            from_price_3: "MYR 120,768",
            home_price_1: "MYR 88",
            home_price_133: "MYR 51",
            
            from_price_1: "MYR 74",  
            home_price_2: "MYR 69",  

            from_price_2: "MYR 79",  
            home_price_3: "MYR 65",  

            home_price_4: "MYR 93.164",  

            home_price_5: "MYR 37", 

            home_price_6: "MYR 549",  

            home_price_7: "MYR 111",  

            home_price_8: "MYR 177",

            from_price_6: "MYR 51",  
            home_price_9: "MYR 46",  

            home_price_10: "MYR 111",  

            home_price_11: "MYR 41",  

            home_price_12: "MYR 307.095",

            home_price_13: "MYR 102",

            home_price_14: "MYR 27",  

            home_price_15: "MYR 27",   

            from_price_7: "MYR 27",  
            home_price_16: "MYR 32",  

            from_price_8: "MYR 27",  
            home_price_17: "MYR 23", 

            from_price_9: "MYR 18",  
            home_price_18: "MYR 13",   

            from_price_10: "MYR 32",  
            home_price_19: "MYR 27",   

            from_price_11: "MYR 179.426",  
            home_price_20: "MYR 160.449",  

            home_price_21: "MYR 117.317",

            from_price_12: "MYR 18",  
            home_price_22: "MYR 13", 

            from_price_13: "MYR 74",  
            home_price_23: "MYR 23",  
            
            from_price_14: "MYR 74",  
            home_price_24: "MYR 60",   

            home_price_25: "MYR 214",   

            from_price_15: "MYR 51",  
            home_price_26: "MYR 37", 

            from_price_16: "MYR 74",  
            home_price_27: "MYR 60",   

            from_price_17: "MYR 195",  
            home_price_28: "MYR 167",   

            home_price_29: "MYR 46",   

            from_price_18: "MYR 37",  
            home_price_30: "MYR 23",   

            home_price_31: "MYR 23", 

            from_price_19: "MYR 88",  
            home_price_32: "MYR 69",   

            home_price_33: "MYR 177",

            from_price_20: "MYR 251",
            home_price_34: "MYR 228",

            from_price_21: "MYR 274", 
            home_price_35: "MYR 242", 

            from_price_22: "MYR 214", 
            home_price_36: "MYR 204", 

            home_price_37: "MYR 65", 
            
            from_price_23: "MYR 23", 
            home_price_38: "MYR 18", 

            home_price_39: "MYR 65", 

            from_price_24: "MYR 51", 
            home_price_40: "MYR 37", 

            from_price_25: " ", 
            home_price_41: "MYR 60", 

            from_price_26: "MYR 27", 
            home_price_42: "MYR 18", 

            home_price_43: "MYR 23", 

            from_price_27: "MYR 46", 
            home_price_44: "MYR 27", 

            from_price_28: "MYR 18", 
            home_price_45: "MYR 9", 

            from_price_29: "MYR 247", 
            home_price_46: "MYR 195", 

            from_price_30: "MYR 368", 
            home_price_47: "MYR 312", 

            from_price_31: "MYR 102", 
            home_price_48: "MYR 83", 

            from_price_32: "MYR 102",
            home_price_49: "MYR 83",
            
            from_price_33: "MYR 335",
            home_price_50: "MYR 246",
            
            home_price_51: "MYR 204",
            
            from_price_34: "MYR 258.759",
            home_price_52: "MYR 9",
            
            home_price_53: "MYR 167",
            
            from_price_35: "MYR 93",

            home_price_54: "MYR 279",
            
            from_price_36: "MYR 509.177",

            home_price_55: "MYR 88",

            home_price_1001: "MYR 97",

            home_price_10002: "MYR 139",

            home_price_10003: "MYR 144",
            



            w1: "MYR 79",
            w2: "MYR 69",
            w3: "MYR 223",
            w4: "MYR 190",
            w5: "MYR 195",
            w6: "MYR 195",
            w7: "MYR 312",
            w8: "MYR 270",
            w9: "MYR 74",
            w10: "MYR 65",
            w11: "MYR 74",
            w12: "MYR 65",
            w13: "MYR 190",
            w14: "MYR 237",
            w15: "MYR 265",
            w16: "MYR 288",
            w17: "MYR 177",
            w18: "MYR 247",
            w19: "MYR 181",
            w20: "MYR 195",
            w21: "MYR 163",
            w22: "MYR 191",
            w23: "MYR 51",
            w24: "MYR 41",
            w25: "MYR 179",
            w26: "MYR 155",
            w27: "MYR 648",
            w28: "MYR 552",
            w29: "MYR 966",
            w30: "MYR 724",
            w31: "MYR 669",
            w32: "MYR 838",
            w33: "MYR 317",
            w34: "MYR 362",
            w35: "MYR 79",
            w36: "MYR 69",
            w37: "MYR 121",
            w38: "MYR 111",
            w39: "MYR 282",
            w40: "MYR 258",
            w41: "MYR 431",
            w42: "MYR 393",
            w43: "MYR 338",
            w44: "MYR 382",
            w45: "MYR 168",
            w46: "MYR 190",
            w47: "MYR 99",
            w48: "MYR 117",
            w49: "MYR 180",
            w50: "MYR 238",
            w51: "MYR 386",
            w52: "MYR 348",
            w53: "MYR 517",
            w54: "MYR 445",
            w55: "MYR 396",
            w56: "MYR 365",
            w57: "MYR 531",
            w58: "MYR 465",
            w59: "MYR 276",
            w60: "MYR 541",
            w61: "MYR 690",
            w62: "MYR 586",
            w63: "MYR 759",
            w64: "MYR 655",
            w65: "MYR 931",
            w66: "MYR 793",
            w67: "MYR 46",
            w68: "MYR 120",
            w69: "MYR 338",
            w70: "MYR 195",
            w71: "MYR 686",
            w72: "MYR 983",
            w73: "MYR 1293",
            w74: "MYR 51",
            w75: "MYR 125",
            w76: "MYR 65",
            w77: "MYR 163",
            w78: "MYR 79",
            w79: "MYR 139",
            w80: "MYR 1086",
            w81: "MYR 1276",
            w82: "MYR 1552",
            w83: "MYR 2001",
            w84: "MYR 177",
            w85: "MYR 274",
            w86: "MYR 167",
            w87: "MYR 233",
            w88: "MYR 344",
            w89: "MYR 363",
            w90: "MYR 466",
            w91: "MYR 74",
            w92: "MYR 153",
            w93: "MYR 218",
            w94: "MYR 125",
            w95: "MYR 233",
            w96: "MYR 142",
            w97: "MYR 251",
            w98: "MYR 162",
            w99: "MYR 1014",
            w100: "MYR 765",
            w101: "MYR 589",
            w102: "MYR 638",
            w103: "MYR 60",
            w104: "MYR 69",
            w105: "MYR 255",
            w106: "MYR 223",
            w107: "MYR 74",
            w108: "MYR 313",
            w109: "MYR 338",
            w110: "MYR 213",
            w111: "MYR 410",
            w112: "MYR 200"
            
      


        }
    }

    function translatePage(valyuta) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[valyuta] && translations[valyuta][key]) {
                element.textContent = translations[valyuta][key];
            }
        });
        sessionStorage.setItem('selectedValyut', valyuta);
    }

    document.querySelectorAll('.for_valyutas1 a').forEach(element => {
        element.addEventListener('click', () => {
            const valyuta = element.getAttribute('data-lang');
            translatePage(valyuta);
        });
    });

    const savedValyut = sessionStorage.getItem('selectedValyut');
    if (savedValyut) {
        translatePage(savedValyut);
    } else {
        const defaultValyut = 'USD'; // Default valyuta
        translatePage(defaultValyut);
    }
});
