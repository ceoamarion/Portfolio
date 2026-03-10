import { Gamepad2, Cpu, Network, Code2, BrainCircuit, Workflow } from 'lucide-react';

export const HERO_DATA = {
    headline: "Technical Designer & XR Systems Builder",
    subheadline: "I bridge gameplay design and engineering to prototype combat mechanics, construct complex interaction systems, and explore future-facing spatial interfaces.",
    tags: ["Unreal Engine 5", "Gameplay Systems", "XR Architecture", "BCI Technology", "C++ & Blueprints"],
};

export const ABOUT_DATA = {
    title: "About Me",
    paragraphs: [
        "I am a Technical Designer and XR Developer working at the intersection of systems design, technical implementation, and experimental interfaces. I don't just draft design documents—I architect the scalable logic and prototypes that make mechanics deeply interactive and ready for production.",
        "My work spans robust tactical combat systems (mixing melee, ranged, and defensive states), seamless traversal mechanics, and emerging technologies like Augmented Reality and Brain-Computer Interfaces (BCI). Whether scripting a momentum-based zipline system in Unreal Engine or prototyping an EEG-driven reactive web interface, my goal is to deliver ambitious and testable experiences.",
        "I thrive in the gray area between creative vision and engineering. By communicating effectively across disciplines and leveraging deep prototyping knowledge, I ensure high-level concepts are proven quickly, scalable, and polished to a professional standard."
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
        title: "Organik",
        hook: "A high-octane top-down action shooter driven by systemic combat and environmental traps.",
        description: "An Unreal Engine combat prototype focusing on fluid player abilities, dynamic environmental hazards, and structured encounter flow.",
        role: "Systems Prototyper & Technical Designer",
        tools: ["Unreal Engine 5", "Blueprints", "C++", "Data Assets"],
        tags: ["Action Shooter", "Combat Systems", "Systems-Driven"],
        image: "/placeholder-shooter.jpg", // TODO [PLACEHOLDER]: Replace with Organik screenshot
        video: null,
        caseStudy: {
            overview: "Building a highly responsive top-down combat framework that easily allows testing of complex weapon dynamics (like rocket launchers and grenades) and environmental traps.",
            goal: "Validate a systemic action loop where modular combat abilities cleanly interact with AI behaviors and level hazards.",
            systems: "Architected a scalable ability setup handling diverse weapon outputs, integrated alongside a unified damage and state management system.",
            technical: "Constructed utilizing Data Assets for rapid balancing. Built reliable trap and encounter trigger volumes to shape level flow without hardcoding scenarios.",
            challenge: "Maintaining clear visual feedback amidst chaotic overlapping abilities. Solved by standardizing collision layers and prioritizing distinct, high-contrast VFX logic.",
            learned: "Deepened my understanding of decoupling presentation from underlying ability logic, proving that robust architecture drastically speeds up encounter tuning."
        }
    },
    {
        id: "control-alt-delete",
        title: "Control Alt Delete",
        hook: "Wave survival combat demanding precise melee, ranged, dash, and blocking execution.",
        description: "A polished gameplay systems prototype challenging players to survive intricate custom enemy behaviors and escalating arena progression.",
        role: "Gameplay Systems Designer",
        tools: ["Unreal Engine 5", "Blueprint Visual Scripting", "Animation Montages", "Behavior Trees"],
        tags: ["Wave Survival", "Melee/Ranged Hybrid", "AI Combat"],
        image: "/placeholder-sin.jpg", // TODO [PLACEHOLDER]: Replace with Control Alt Delete screenshot
        caseStudy: {
            overview: "A combat arena designed to pressure players into utilizing a complete suite of integrated defensive and offensive mechanics.",
            goal: "Develop a tight, reactive combat loop balancing varied mechanics (melee, ranged, dash, block) within an escalating progression system.",
            systems: "Implemented a complex player state machine mapping distinct interruptions, invincibility frames during dashes, and block mitigation math.",
            technical: "Utilized animation notifies and multi-casting to precisely sync hitboxes and damage calculation windows to visual impact frames.",
            challenge: "Ensuring custom enemy behaviors felt fair but punishing. Mitigated by designing clear telegraphing states in the AI behavior trees before attack execution.",
            learned: "Mastered the nuances of frame-perfect combat state management and the exact balance of offensive risk vs. defensive reward."
        }
    },
    {
        id: "new-zipline",
        title: "New Zipline 5.5",
        hook: "Momentum-conserving traversal mechanics driving environmental gameplay flow.",
        description: "A specialized technical prototype emphasizing fluid spatial movement, vertical character navigation, and seamless spline interactions.",
        role: "Technical Designer",
        tools: ["Unreal Engine 5.5", "Spline Components", "Math & Vectors", "Character Movement Component"],
        tags: ["Traversal Mechanics", "Environment Interaction", "Player Flow"],
        image: "/placeholder-zipline.jpg", // TODO [PLACEHOLDER]: Replace with Zipline screenshot
    },
    {
        id: "myproject5-ar",
        title: "AR Smart Agriculture Simulation",
        hook: "An applied interface translating environmental data into spatial visualizations.",
        description: "An interactive prototype moving beyond traditional games to filter high-density agricultural data into an intuitive Augmented Reality environment.",
        role: "XR / Simulation Prototyper",
        tools: ["Unreal Engine XR / Unity", "AR Foundation", "Spatial Logic"],
        tags: ["AR Simulation", "Applied Interface", "Interactive Systems"],
        image: "/placeholder-ar.jpg", // TODO [PLACEHOLDER]: Replace with AR plant screenshot
    }
];

export const EXPERIMENTAL_PROJECTS = [
    {
        id: "bci-eeg",
        title: "Web App Emotiv Demo",
        hook: "Mental-state-aware interface utilizing raw EEG telemetry streams.",
        description: "Pushed the boundaries of HCI by utilizing an Emotiv headset. Built an experimental web interface that dynamically reacts to the physiological focus and mental states of the user.",
        tags: ["Brain-Computer Interface", "Emotiv EEG", "Future Paradigms", "Systems Builder"],
        image: "/placeholder-eeg.jpg" // TODO [PLACEHOLDER]: Replace with Emotiv Web App screenshot
    },
    {
        id: "sin-concept",
        title: "Project 'Sin' (In Development)",
        hook: "R&D concept exploring systemic emergent behavior.",
        description: "An early technical prototype testing how localized world-state alterations and 'infections' dynamically mutate level topology and AI behavior trees.",
        tags: ["Emergent Systems", "R&D", "Coming Soon"],
        image: "/placeholder-shooter.jpg" // TODO [PLACEHOLDER]: Update when Sin is ready
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
