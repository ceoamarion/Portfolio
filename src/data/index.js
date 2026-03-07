import { Gamepad2, Cpu, TestTube, Network, Sword, Code2, BrainCircuit, Box, Workflow, MonitorPlay } from 'lucide-react';

export const HERO_DATA = {
    headline: "Technical Designer Building Interactive Systems",
    subheadline: "I bridge design and engineering to prototype mechanics, build gameplay systems, and explore future-facing interactions.",
    tags: ["Unreal Engine 5", "Gameplay Systems", "XR", "BCI", "Prototyping"],
};

export const ABOUT_DATA = {
    title: "About Me",
    paragraphs: [
        "I am a Technical Designer and Systems Builder focused on the intersection of gameplay design, technical prototyping, and experimental interfaces. I don't just design mechanics—I build the underlying systems that make them systemic, scalable, and player-driven.",
        "My work spans across tactical combat systems, immersive XR environments, and emerging technologies like BCI (Brain-Computer Interfaces). Whether it's scripting a robust traversal system in Unreal Engine or prototyping an EEG-responsive experience, my goal is to create ambitious, testable, and deeply interactive experiences.",
        "I thrive in the gray area between creative design and technical implementation, ensuring that high-level concepts can be proven and polished in-engine."
    ]
};

export const SKILL_CATEGORIES = [
    {
        title: "Gameplay Design",
        icon: Gamepad2,
        skills: ["Combat Design", "Traversal Systems", "Level-driven Gameplay", "Encounters & AI", "Player Feedback"]
    },
    {
        title: "Technical Development",
        icon: Code2,
        skills: ["Unreal Engine 5", "Blueprints", "C++", "System Implementation", "Performance Debugging"]
    },
    {
        title: "Experimental / XR",
        icon: BrainCircuit,
        skills: ["XR Concepts", "BCI / EEG Integration", "Sensor-driven Interactions", "Immersive Systems", "Future Interfaces"]
    },
    {
        title: "Tools & Workflow",
        icon: Workflow,
        skills: ["Prototyping", "GitHub", "Supabase", "Documentation", "Rapid Iteration"]
    }
];

export const PROJECTS = [
    {
        id: "top-down-shooter",
        title: "Top-Down Action Shooter",
        hook: "A high-octane tactical combat prototype driven by systemic interactions.",
        description: "Developed a core combat loop focusing on fluid player abilities, dynamic traps, and structured encounter design within Unreal Engine.",
        role: "Gameplay Prototyper & Systems Designer",
        tools: ["Unreal Engine 5", "Blueprints", "C++", "Gameplay Ability System"],
        tags: ["Combat", "Systems", "AI Encounters"],
        image: "/placeholder-shooter.jpg", // TODO: Replace with real screenshot
        video: null, // TODO: Replace with real demo video url
        caseStudy: {
            overview: "The primary design goal was to build a highly responsive top-down combat system that rewards positioning and tactical use of abilities.",
            goal: "Prove out a systemic combat loop where abilities interact with environment hazards (traps).",
            systems: "Implemented a modular ability component allowing quick iteration of combat powers, integrated with an aggro-based AI director.",
            technical: "Built completely in Unreal Engine using Data Assets for rapid balancing of damage, cooldowns, and status effects.",
            challenge: "Balancing the visual noise of traps and abilities. Solved by standardizing color coding and establishing a clear hierarchy of visual FX.",
            learned: "Learned the value of decoupling logic from presentation early on to allow faster iteration on the 'feel' of combat."
        }
    },
    {
        id: "zipline-escape",
        title: "Zipline Prison Escape",
        hook: "Momentum-based traversal mechanics applied to a high-stakes escape loop.",
        description: "A level-driven prototype emphasizing fluid movement, verticality, and environmental interactions. Players string together jumps and ziplines to evade capture.",
        role: "Technical Level Designer",
        tools: ["Unreal Engine 5", "Animation Blueprints", "Splines"],
        tags: ["Traversal", "Level Design", "Movement Systems"],
        image: "/placeholder-zipline.jpg", // TODO: Replace
        caseStudy: {
            overview: "Designed an escape sequence centered around a specialized zipline traversal system, blending standard platforming with momentum conservation.",
            goal: "Create a movement loop that feels frictionless but requires high player execution and spatial awareness.",
            systems: "Built a dynamic spline-based zipline system that auto-aligns the player and calculates exit velocity based on entry speed and angle.",
            technical: "Utilized customized Character Movement components and root motion blending to handle seamless transitions between running, jumping, and attaching to ziplines.",
            challenge: "Handling edge cases where players attempt to attach to splines at extreme angles. Implemented an IK anticipation system to smooth the attachment phase.",
            learned: "Refined my approach to player state machines, recognizing that robust transition logic is as important as the mechanics themselves."
        }
    },
    {
        id: "sr-smart-agriculture",
        title: "AR Smart Agriculture Sim",
        hook: "Real-world data simulation wrapped in a future-facing AR interface.",
        description: "An applied interactive design project translating complex agricultural data into tangible, actionable AR simulations.",
        role: "XR Prototyper",
        tools: ["Unity / Unreal XR", "AR Foundation", "Data Visualization"],
        tags: ["AR", "Simulation", "Applied Design"],
        image: "/placeholder-ar.jpg", // TODO: Replace
    },
    {
        id: "sin-infection",
        title: "Sin – Free-Roam Infection",
        hook: "Emergent, world-state-altering gameplay driven by a systemic infection spread.",
        description: "A concept prototype testing how systemic player actions can permanently alter the environment and NPC behaviors through an 'infection' mechanic.",
        role: "Systems Designer",
        tools: ["Unreal Engine 5", "Behavior Trees", "Environmental States"],
        tags: ["Emergent Design", "AI", "Systemic"],
        image: "/placeholder-sin.jpg", // TODO: Replace
    }
];

export const EXPERIMENTAL_PROJECTS = [
    {
        id: "bci-eeg",
        title: "Consciousness Interface Experiments",
        hook: "Mental-state-responsive systems using EEG technology.",
        description: "Explored future interfaces using the Emotiv headset, building interactive systems that physically respond to raw physiological data and focus levels.",
        tags: ["BCI", "Experimental", "Emotiv EEG", "Future Tech"],
        image: "/placeholder-eeg.jpg" // TODO: Replace
    }
];

export const PHILOSOPHY = [
    {
        title: "Player-First, Systems-Driven",
        description: "I believe mechanics should be born from systems that allow emergence, rather than rigidly scripted setpieces. The player creates the narrative through interaction."
    },
    {
        title: "Prototyping as Design",
        description: "Documents only go so far. I heavily rely on rapid in-engine prototyping to find the 'fun' quickly, validating assumptions through playable iterations."
    },
    {
        title: "Future-Facing Interaction",
        description: "I am fascinated by what happens outside traditional screens. Exploring XR and BCI allows me to push the boundaries of how human intent translates into digital reality."
    }
];
