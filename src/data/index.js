import { Gamepad2, Cpu, Network, Code2, BrainCircuit, Workflow } from 'lucide-react';

export const HERO_DATA = {
    headline: "Technical Designer & XR Systems Builder",
    subheadline: "I bridge design and engineering to prototype complex mechanics, construct scalable gameplay systems, and explore future-facing immersive interactions.",
    tags: ["Unreal Engine 5", "Gameplay Prototypes", "XR Architecture", "BCI Technology", "C++ & Blueprints"],
};

export const ABOUT_DATA = {
    title: "About Me",
    paragraphs: [
        "I am a Technical Designer focused on the intersection of systemic gameplay, rapid technical prototyping, and experimental interfaces. I don't just draft design documents—I architect the underlying logic that makes mechanics scalable, performant, and deeply interactive for the player.",
        "My portfolio spans robust tactical combat systems, immersive XR environments, and emerging technologies like Brain-Computer Interfaces (BCI). Whether I'm scripting a momentum-based traversal system in Unreal Engine or prototyping an EEG-driven reactive environment, my goal is to deliver ambitious and testable experiences.",
        "I thrive in the gray area between creative vision and technical execution. By communicating effectively across disciplines and leveraging deep engine knowledge, I ensure high-level concepts are proven quickly, iterated upon safely, and polished to a professional standard."
    ]
};

export const SKILL_CATEGORIES = [
    {
        title: "Gameplay & Systems",
        icon: Gamepad2,
        skills: ["Combat System Design", "AI & Encounter Logic", "Traversal Mechanics", "Player Feedback Tuning", "Data-Driven Balancing"]
    },
    {
        title: "Technical Implementation",
        icon: Code2,
        skills: ["Unreal Engine 5 (UE5)", "Blueprint Visual Scripting", "C++ Fundamentals", "Gameplay Ability System (GAS)", "Performance Profiling"]
    },
    {
        title: "XR & Experimental Tech",
        icon: BrainCircuit,
        skills: ["Immersive AR/VR Systems", "BCI / EEG Integration (Emotiv)", "Sensor-Driven Input", "Spatial Computing", "HCI Prototyping"]
    },
    {
        title: "Architecture & Workflow",
        icon: Workflow,
        skills: ["Rapid Prototyping Pipelines", "Version Control (Git/GitHub)", "Agile Iteration", "Technical Documentation", "Cross-Discipline Communication"]
    }
];

export const PROJECTS = [
    {
        id: "top-down-shooter",
        title: "Systemic Action Prototyping",
        hook: "A high-octane tactical combat environment driven by scalable, data-driven interactions.",
        description: "Engineered a core combat loop focusing on fluid player abilities, dynamic environmental hazards, and structured AI encounters within Unreal Engine 5.",
        role: "Systems Prototyper & Technical Designer",
        tools: ["Unreal Engine 5", "Blueprints", "C++ Component Architecture", "Data Assets"],
        tags: ["Combat Systems", "AI Director", "Emergent Gameplay"],
        image: "/placeholder-shooter.jpg", // TODO [PLACEHOLDER]: Replace with high-res gameplay screenshot
        video: null, // TODO [PLACEHOLDER]: Replace with YouTube/Vimeo embed URL of gameplay loop
        caseStudy: {
            overview: "The primary engineering constraint was building a highly responsive top-down combat framework that easily allows designers to tune damage values, cooldowns, and status effects without touching core logic.",
            goal: "Validate a systemic combat loop where modular abilities reliably interact with both AI behaviors and environmental hazards.",
            systems: "Architected a modular action component system, allowing rapid iteration of combat powers. Integrated this alongside an aggro-based AI director prioritizing threat levels.",
            technical: "Constructed entirely in UE5 utilizing Data Assets for rapid balancing. Decoupled input mapping from execution logic to support multiple control schemes natively.",
            challenge: "Balancing the visual hierarchy of traps, projectiles, and AoE abilities. Solved by standardizing color coding and implementing an event-dispatch system for prioritizing critical VFX.",
            learned: "Deepened my understanding of decoupling presentation from logic, proving that robust architecture results in significantly faster iterational design phases."
        }
    },
    {
        id: "zipline-escape",
        title: "Momentum Traversal System",
        hook: "Physics-based movement mechanics applied to a high-stakes, level-driven escape sequence.",
        description: "A specialized prototype emphasizing fluid spatial movement, verticality, and environmental contextual interactions. Players string together jumps and spline-based ziplines.",
        role: "Technical Level Designer",
        tools: ["Unreal Engine 5", "Animation Blueprints", "Spline Components", "Math & Vectors"],
        tags: ["Traversal Mechanics", "Level Flow", "State Machines"],
        image: "/placeholder-zipline.jpg", // TODO [PLACEHOLDER]: Replace with strong visual of player on a spline
        caseStudy: {
            overview: "Designed an escape sequence centered around a specialized zipline traversal state, carefully blending standard CharacterMovement collision with custom momentum conservation logic.",
            goal: "Deliver a traversal loop that feels frictionless but demands high player execution, spatial awareness, and precise timing.",
            systems: "Built a dynamic spline-attachment system that auto-aligns the player character and calculates launch velocity based on entry speed, angle, and curvature.",
            technical: "Utilized customized Character Movement configurations and root motion blending to handle seamless, frame-perfect transitions between running, falling, and attaching to splines.",
            challenge: "Handling severe edge cases where players attempt attachment at extreme angles or high velocities. Mitigated via an IK anticipation system and dot-product validation checks.",
            learned: "Refined my approach to complex player state machines, recognizing that robust transition validation is as critical as the core mechanic execution itself."
        }
    },
    {
        id: "sr-smart-agriculture",
        title: "AR Smart Agriculture Vis",
        hook: "Translating complex datasets into tangible, actionable spatial simulations.",
        description: "An applied interactive design prototype filtering high-density agricultural data into an intuitive, future-facing Augmented Reality interface.",
        role: "XR Prototyper",
        tools: ["Unity 3D / Unreal XR", "AR Foundation", "Data Visualization Pipelines"],
        tags: ["Spatial Computing", "Simulation", "Applied HCI"],
        image: "/placeholder-ar.jpg", // TODO [PLACEHOLDER]: Replace with AR interface mockup
    },
    {
        id: "sin-infection",
        title: "Project 'Sin' – Systemic Infection",
        hook: "Emergent, world-altering gameplay driven by a reactive simulation layer.",
        description: "A technical prototype testing how systemic player actions can permanently alter level topology and NPC behavior trees through a localized 'infection' mechanic.",
        role: "Systems Designer",
        tools: ["Unreal Engine 5", "Behavior Trees", "Environmental State Tracking"],
        tags: ["Emergent AI", "World State", "Simulation logic"],
        image: "/placeholder-sin.jpg", // TODO [PLACEHOLDER]: Replace with in-engine debug view or gameplay still
    }
];

export const EXPERIMENTAL_PROJECTS = [
    {
        id: "bci-eeg",
        title: "Unconventional Interfaces: BCI",
        hook: "Mental-state-responsive systems utilizing raw EEG telemetry.",
        description: "Pushed the boundaries of standard input by utilizing an Emotiv headset. Built an interactive application that structurally shifts in real-time based on the user's focus levels and physiological data streams.",
        tags: ["Brain-Computer Interface", "Emotiv EEG", "Hardware Integration", "R&D"],
        image: "/placeholder-eeg.jpg" // TODO [PLACEHOLDER]: Replace with hardware setup or application screenshot
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
