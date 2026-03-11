import { Gamepad2, Cpu, Network, Code2, BrainCircuit, Workflow } from 'lucide-react';

export const HERO_DATA = {
    headline: "Technical Designer & XR Systems Builder",
    subheadline: "I bridge gameplay design and engineering to prototype combat mechanics, construct complex interaction systems, and explore future-facing spatial interfaces.",
    tags: ["Unreal Engine 5", "Gameplay Systems", "XR Architecture", "BCI Technology", "C++ & Blueprints"],
};

export const ABOUT_DATA = {
    title: "About Me",
    paragraphs: [
        "I am a Technical Designer and XR Developer working at the intersection of systems design, technical implementation, and experimental interfaces.",
        "Rather than just drafting static design documents, I architect the scalable logic and high-fidelity prototypes that make core mechanics deeply interactive and ready for production.",
        "My work ranges from robust tactical combat systems—balancing melee, ranged, and defensive states—to seamless traversal mechanics. Beyond traditional screens, I explore emerging technologies like Augmented Reality and Brain-Computer Interfaces.",
        "Whether I am scripting a momentum-based zipline system in Unreal Engine or prototyping an EEG-driven reactive web interface, my goal is to deliver ambitious and technically grounded experiences."
    ]
};

export const SKILL_CATEGORIES = [
    {
        title: "Gameplay & Systems",
        icon: Gamepad2,
        skills: ["Combat System Design", "Traversal & Movement", "AI Encounter Logic", "Systemic Interactions", "Rapid Prototyping"]
    },
    {
        title: "Technical Implementation",
        icon: Code2,
        skills: ["Unreal Engine (UE5)", "Blueprint Visual Scripting", "Gameplay Ability System (GAS)", "C++ Fundamentals", "State Machines"]
    },
    {
        title: "XR & Experimental Tech",
        icon: BrainCircuit,
        skills: ["Immersive AR/VR", "Spatial Computing", "BCI / EEG (Emotiv)", "Sensor-Driven Input", "Future Interfaces"]
    },
    {
        title: "Architecture & Workflow",
        icon: Workflow,
        skills: ["Iterative Systems Architecture", "Version Control (Perforce/Git)", "Agile Development", "Cross-Discipline Pipelines", "Technical Documentation"]
    }
];

export const PROJECTS = [
    {
        id: "organik",
        title: "Organik: Systems-Driven Shooter",
        hook: "A top-down action prototype driven by systemic combat and level hazard interactions.",
        description: "An Unreal Engine combat prototype focusing on fluid player abilities, dynamic environmental hazards, and structured encounter flow. The system emphasizes clear feedback loops and modular ability design.",
        role: "Gameplay Systems Prototyper",
        tools: ["Unreal Engine 5", "Blueprint Visual Scripting", "Data Assets"],
        tags: ["Action Shooter", "Systemic Combat", "Encounter Flow"],
        image: "./placeholder-shooter.jpg",
        youtubeId: "yKxTGoN3qD8",
        youtubeStart: 5,
        repoLink: null,
        caseStudy: {
            goal: "Validate a systemic action loop where modular combat abilities cleanly interact with AI behaviors and level hazards.",
            systems: "Architected a scalable ability setup handling diverse weapon outputs, integrated alongside a unified damage and state management system.",
            technical: "Constructed utilizing Data Assets for rapid balancing. Built reliable trap and encounter trigger volumes to shape level flow.",
            challenge: "Maintaining clear visual feedback amidst chaotic overlapping abilities, solved by prioritizing distinct, high-contrast VFX logic.",
            outcome: "Proved out a highly responsive top-down combat framework that easily allows testing of complex weapon dynamics."
        }
    },
    {
        id: "control-alt-delete",
        title: "Control Alt Delete: Arena Survival",
        hook: "Wave survival combat demanding precise melee, ranged, dash, and blocking execution.",
        description: "A polished combat systems prototype challenging players to survive intricate custom enemy behaviors and an escalating arena progression loop.",
        role: "Technical Designer",
        tools: ["Unreal Engine 5", "Blueprints", "Animation Montages", "Behavior Trees"],
        tags: ["Wave Survival", "Melee & Ranged", "AI Combat"],
        image: "./placeholder-sin.jpg",
        youtubeId: "5o1HAEtpIXc",
        youtubeStart: 13,
        repoLink: null,
        caseStudy: {
            goal: "Develop a tight, reactive combat loop balancing varied mechanics (melee, ranged, dash, block) within an escalating progression system.",
            systems: "Implemented a complex player state machine mapping distinct interruptions, invincibility frames, and block mitigation math.",
            technical: "Utilized animation notifies to precisely sync hitboxes and damage calculation windows to visual impact frames.",
            challenge: "Ensuring custom enemy behaviors felt fair but punishing, mitigated by designing clear telegraphing states in the AI behavior trees.",
            outcome: "Demonstrated mastery over frame-perfect combat state management and the exact balance of offensive risk versus defensive reward."
        }
    },
    {
        id: "new-zipline",
        title: "Traversal Mechanics Prototype",
        hook: "Momentum-conserving zipline mechanics driving environmental gameplay flow.",
        description: "A specialized technical prototype emphasizing fluid spatial movement, vertical character navigation, and seamless spline-based environmental interactions.",
        role: "Technical Designer",
        tools: ["Unreal Engine 5", "Spline Components", "Vector Math", "Character Movement"],
        tags: ["Traversal Flow", "Level Interaction", "Spline Systems"],
        image: "./placeholder-zipline.jpg", 
        youtubeId: "2uI2VVSTVso",
        youtubeStart: 2,
        repoLink: null,
        caseStudy: {
            goal: "Create a physically grounded, highly readable movement system that maintains momentum traversing complex 3D environments.",
            systems: "Custom spline-following logic extending the base Character Movement Component to handle rapid acceleration and directional dismounts.",
            technical: "Applied vector math to project player velocity onto spline tangents, ensuring momentum conservation across varying angles.",
            challenge: "Preventing jitter during high-speed spline attachment and transitioning smoothly back to standard falling states.",
            outcome: "Delivered a robust, highly extensible traversal mechanic ready for integration into larger level design workflows."
        }
    },
    {
        id: "myproject5-ar",
        title: "AR Smart Agriculture Concept",
        hook: "An applied interface translating environmental data into spatial visualizations.",
        description: "An interactive prototype moving beyond traditional games to filter high-density agricultural data into an intuitive Augmented Reality environment.",
        role: "XR Prototyper",
        tools: ["Unreal Engine XR", "AR Foundation", "Spatial Logic"],
        tags: ["AR Simulation", "Applied Interface", "Interactive Systems"],
        image: "./placeholder-ar.jpg",
        youtubeId: "5i-N-pocw00",
        youtubeStart: 10,
        repoLink: null,
        caseStudy: {
            goal: "Visualize abstract, high-density sensor data dynamically onto physical environments using spatial computing.",
            systems: "Real-time spatial mapping and anchored data visualization floating above real-world targets.",
            technical: "Leveraged AR plane detection to accurately position interactive 3D UI elements and environmental indicators.",
            challenge: "Ensuring data readability and interface stability while the user is physically moving around the space.",
            outcome: "A functional proof-of-concept demonstrating how game engine technology can solve real-world interface problems."
        }
    }
];

export const EXPERIMENTAL_PROJECTS = [
    {
        id: "bci-eeg",
        title: "Emotiv EEG / BCI Interface",
        hook: "Mental-state-aware interface utilizing raw EEG telemetry streams.",
        description: "Pushed the boundaries of HCI by utilizing an Emotiv headset. Built an experimental web interface that dynamically reacts to the physiological focus and mental states of the user, filtering raw biometric signal data into readable UI feedback.",
        tags: ["Brain-Computer Interface", "Signal Visualization", "Future Paradigms"],
        image: "./placeholder-eeg.jpg",
        localVideo: "./webapp-demo.mp4",
        youtubeId: null
    },
    {
        id: "sin-concept",
        title: "Project 'Sin' (Concept)",
        hook: "R&D concept exploring systemic emergent behavior.",
        description: "An early technical prototype testing how localized world-state alterations and 'infections' dynamically mutate level topology and AI behavior trees.",
        tags: ["Emergent Systems", "R&D", "Coming Soon"],
        image: "./placeholder-shooter.jpg"
    }
];

export const PHILOSOPHY = [
    {
        title: "Player-Driven Systems",
        description: "I prioritize building robust underlying systems that generate emergent gameplay, rather than relying strictly on linear, scripted setpieces. The best moments arise when mechanics interact predictably yet surprisingly."
    },
    {
        title: "Prototyping Validates Design",
        description: "Design documents alone are insufficient. I rely heavily on rapid in-engine prototyping to answer the 'is it fun?' question immediately, validating technical assumptions and mechanical feel before committing to production."
    },
    {
        title: "Exploring New Paradigms",
        description: "I am driven by what happens when we move beyond the traditional controller. Researching Spatial Computing (XR) and physiological inputs (BCI) allows me to define the edge of how human intent dictates digital reality."
    }
];
