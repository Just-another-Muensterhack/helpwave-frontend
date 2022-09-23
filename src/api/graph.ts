import type { Graph } from '../utils/graph';

const graph: Graph = {
    language: {
        de: {
            start_emergency: 'Gibt es einen Notfall?',
            consciousness:
                'Ist jemand bewusstlos und/oder antwortet nicht mehr auf Ansprache?',
            breathing: 'Atmet die bewusstlose Person noch?',
            consciousness_number:
                'Wie viele Personen sind bewusstlos und/oder antworten nicht mehr auf Ansprache?',
            es_called: 'Wurde bereits der Rettungsdienst gerufen?',
            yes: 'Ja',
            no: 'Nein',
            es_call_request:
                'Bitte rufen Sie sofort den Rettungsdienst unter der 112 an!',
            single: 'Eine Person',
            multiple: 'Mehrere Personen',
            airway: 'Prüfe ob die Atemwege der Person frei sind?',
            stable_position: 'Bringe die Person in die stabile Seitenlage.',
            initiate_cpr: 'Beginne mit der Herz-Lungen-Wiederbelebung.',
            other_people_conscious:
                'Gibt es noch andere Personen, die betroffen und nicht bewusstlos sind?',
            calming_statement:
                'Bleib ruhig, beruhige die Anwesenden und warte auf Hilfe.',
            urgency_info:
                'Wenn du den Eindruck hast, dass jemand ernsthaft verletzt oder krank ist, oder starke Schmerzen hat, rufe sofort den Rettungsdienst unter der 112 an.',
            situation: 'Was ist passiert?',
            accident: 'Es gab einen Unfall.',
            sickness: 'Es geht jemandem nicht gut.',
            number_affected: 'Wie viele Personen sind betroffen?',
            me: 'Ich',
            someone_else: 'Jemand anderes',
            several_others: 'Mehrere andere Personen',
            bleeding: 'Blutet jemand sehr stark aus einer offenen Wunde?',
            bleeding_location:
                'Blut der Patient an den Extremitäten (Arme oder Beine) oder am Körperstamm (Bauch, Kopf, Hals, Brustkorb)?.',
            stop_bleeding_limb:
                'Stille die Blutung indem du den Arm oder das Bein über Herzhöhe lagerst und herznah abbindest.',
            stop_bleeding_trunk:
                'Stille die Blutung indem du ein Tuch oder Stoff auf die blutende Stelle drückst.',
            proceed: 'Weiter',
        },
        en: {
            start_emergency: 'Are you in an emergency situation?',
            consciousness:
                'Is someone unconscious and/or not responding to calls?',
            breating: 'Is the unconscious person still breathing?',
            consciousness_number:
                'How many people are unconscious and/or not responding to calls?',
            es_called: 'Did someone call emergency services already?',
            yes: 'Yes',
            no: 'No',
            es_call_request:
                'Please immediately call emergency services under 112!',
        },
    },
    questions: {
        start_emergency: {
            txt_id: 'start_emergency',
            responses: [
                {
                    txt_id: 'yes',
                    next: 'consciousness',
                    class: 'positive',
                },
                {
                    txt_id: 'no',
                    next: 'end',
                    class: 'negative',
                },
            ],
        },
        consciousness: {
            txt_id: 'consciousness',
            responses: [
                {
                    txt_id: 'yes',
                    next: 'es_called_unconscious',
                    class: 'neutral',
                },
                {
                    txt_id: 'no',
                    next: 'urgency_info',
                    class: 'neutral',
                },
            ],
        },
        es_called_unconscious: {
            txt_id: 'es_called',
            responses: [
                {
                    txt_id: 'yes',
                    next: 'unconsciousness_number',
                    class: 'positive',
                },
                {
                    txt_id: 'no',
                    next: 'es_call_request',
                    class: 'negative',
                },
            ],
        },
        es_call_request: {
            txt_id: 'es_call_request',
            responses: [
                {
                    txt_id: 'yes',
                    next: 'unconsciousness_number',
                    class: 'positive',
                },
                {
                    txt_id: 'no',
                    next: 'end',
                    class: 'negative',
                },
            ],
        },
        unconsciousness_number: {
            txt_id: 'unconsciousness_number',
            responses: [
                {
                    txt_id: 'single',
                    next: 'airway',
                    class: 'neutral',
                },
                {
                    txt_id: 'multiple',
                    next: 'airway',
                    class: 'neutral',
                },
            ],
        },
        airway: {
            txt_id: 'airway',
            responses: [
                {
                    txt_id: 'yes',
                    next: 'stable_position',
                    class: 'positive',
                },
            ],
        },
    },
};

export default graph;
