import React, { useState, useEffect, useRef } from 'react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import './App.css';
import logoImage from './assets/blackseablock-logo.png';
import profileImage from './assets/myprofile.png';
import nftImage from './assets/player1nft.jpg';

function App() {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [flippedWhyJoinCards, setFlippedWhyJoinCards] = useState<Set<number>>(new Set());
  const [flippedStepsCards, setFlippedStepsCards] = useState<Set<number>>(new Set());
  const [flippedProjectCards, setFlippedProjectCards] = useState<Set<number>>(new Set());
  // Simple smooth scroll function - replaces locomotive scroll
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const projectIdeas = [
    {
      id: 1,
      title: "NFT Collection",
      description: "Create and mint unique digital art collections with smart contract royalties and marketplace integration.",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500",
      tools: ["Solana", "Metaplex", "React", "IPFS", "Phantom"]
    },
    {
      id: 2,
      title: "Trading Card Game",
      description: "Build a blockchain-based trading card game with NFT cards, battles, and crypto rewards.",
      icon: "🃏",
      gradient: "from-blue-500 to-cyan-500",
      tools: ["Ethereum", "Solidity", "Unity", "OpenZeppelin", "Web3.js"]
    },
    {
      id: 3,
      title: "DAO Governance",
      description: "Develop a decentralized autonomous organization for student decision-making and fund allocation.",
      icon: "🏛️",
      gradient: "from-green-500 to-emerald-500",
      tools: ["Aragon", "Snapshot", "Gnosis Safe", "IPFS", "Ethereum"]
    },
    {
      id: 4,
      title: "Tokenomics Platform",
      description: "Design and launch utility tokens with staking, rewards, and governance mechanisms.",
      icon: "🪙",
      gradient: "from-yellow-500 to-orange-500",
      tools: ["Solidity", "Chainlink", "Uniswap", "OpenZeppelin", "Hardhat"]
    },
    {
      id: 5,
      title: "DeFi Protocol",
      description: "Create decentralized finance solutions like lending, borrowing, or yield farming platforms.",
      icon: "💰",
      gradient: "from-indigo-500 to-purple-500",
      tools: ["Compound", "Aave", "Solidity", "Web3.py", "TheGraph"]
    },
    {
      id: 6,
      title: "Web3 Social Network",
      description: "Build a decentralized social platform where users own their data and content.",
      icon: "🌐",
      gradient: "from-teal-500 to-blue-500",
      tools: ["IPFS", "Lens Protocol", "React", "Ceramic", "ENS"]
    }
  ];


  // Toggle functions for flip cards
  const toggleWhyJoinCard = (index: number) => {
    setFlippedWhyJoinCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const toggleStepsCard = (index: number) => {
    setFlippedStepsCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const toggleProjectCard = (index: number) => {
    setFlippedProjectCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };



  // Function to render role titles with different colors
  const renderRoleTitle = (title: string) => {
    const roles = title.split(' / ');
    return roles.map((role, index) => {
      let roleClass = '';
      if (role.toLowerCase().includes('founder')) {
        roleClass = 'role-founder';
      } else if (role.toLowerCase().includes('developer')) {
        roleClass = 'role-developer';
      } else if (role.toLowerCase().includes('designer')) {
        roleClass = 'role-designer';
      }
      
      return (
        <span key={index} className={roleClass}>
          {role}
          {index < roles.length - 1 && <span className="text-white"> / </span>}
        </span>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-blue via-sea-blue to-dark-blue water-pattern relative">
      {/* Navbar */}
      <Navbar scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section id="hero" data-scroll-section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-16">


        {/* Main hero content */}
        <div className="text-center z-10 max-w-4xl mx-auto">
          {/* Large logo display */}
          <div className="mb-8 flex justify-center">
            <div className="relative isometric-container">
              {/* Loading placeholder */}
              {!logoLoaded && (
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-neon-cyan/20 to-sea-blue/20 rounded-lg animate-pulse flex items-center justify-center">
                  <div className="text-neon-cyan text-xl font-ari">Loading...</div>
                </div>
              )}
              
              {/* Main logo */}
              <img 
                src={logoImage} 
                alt="Black Sea Block Logo" 
                className={`w-80 h-80 md:w-96 md:h-96 object-contain isometric-float transition-opacity duration-300 ${
                  logoLoaded ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
                onLoad={() => setLogoLoaded(true)}
                onError={() => setLogoLoaded(true)} // Show even if there's an error
                loading="eager" // Load immediately
                decoding="async" // Decode asynchronously
              />
              
              {/* Isometric shadow */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 bg-black/20 transform translate-x-2 translate-y-2 -z-10 isometric-shadow"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-neon-cyan mb-8 font-ari pixel-text">
            From Varna to Web3 — Student Builders Collective
          </p>
          
          <a href="https://discord.gg/ujpUU9T3Vc" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-cyan text-black font-bold text-lg font-ari pixel-border pixel-button chrome-button">
              Join Discord
            </button>
          </a>
        </div>

      </section>

      {/* About / Mission Section */}
      <section id="mission" data-scroll-section className="py-20 px-4 bg-gradient-to-r from-dark-blue/50 to-sea-blue/50 isometric-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-binarywaters-force text-white pixel-text" style={{ marginBottom: '1rem' }}>
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-neon-cyan font-ari leading-relaxed">
            We are a student-led collective at TU-Varna building games, apps, and projects on Web3. 
            Our mission: connect students, learn blockchain together, and launch real projects.
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section id="why-join" data-scroll-section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-binarywaters-force text-white pixel-text text-center" style={{ marginBottom: '1rem' }}>
            Why Join
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {[
              { icon: '🚀', title: 'Build Real Projects', desc: 'Turn ideas into working Web3 apps. You\'ll create projects that matter, build your portfolio, and leave with real results—not just theory.', id: 'build' },
              { icon: '🧑‍💻', title: 'Learn by Doing', desc: 'Skip the endless lectures. Gain hands-on experience with blockchain by building, testing, and deploying real applications.', id: 'learn' },
              { icon: '🤝', title: 'Meet Like-Minded Students', desc: 'Join a community of passionate builders. Collaborate, share ideas, and connect with future partners and friends.', id: 'meet' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="why-join-flip-container"
                onClick={() => toggleWhyJoinCard(index)}
              >
                <div className={`why-join-flip ${flippedWhyJoinCards.has(index) ? 'flipped' : ''}`}>
                  {/* Front - "Why Join?" with Icon */}
                  <div className="why-join-front">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold font-ari text-white pixel-text text-center">
                      Why Join?
                    </h3>
                  </div>
                  
                  {/* Back - Title and Description */}
                  <div className="why-join-back">
                    <div className="mb-4 text-center">
                      {item.id === 'build' && (
                        <h3 className="text-xl font-bold font-ari pixel-text drop-shadow-lg">
                          <span>🛠️</span>
                          <span className="text-yellow-200">Build</span>
                          <span className="text-orange-200">Real</span>
                          <span className="text-white">Projects</span>
                          <span>🚀</span>
                        </h3>
                      )}
                      {item.id === 'learn' && (
                        <h3 className="text-xl font-bold font-ari pixel-text drop-shadow-lg">
                          <span>📚</span>
                          <span className="text-green-200">Learn</span>
                          <span className="text-blue-200">by</span>
                          <span className="text-white">Doing</span>
                          <span>⚡</span>
                        </h3>
                      )}
                      {item.id === 'meet' && (
                        <h3 className="text-xl font-bold font-ari pixel-text drop-shadow-lg">
                          <span>👥</span>
                          <span className="text-pink-200">Meet</span>
                          <span className="text-cyan-200">Like-Minded</span>
                          <span className="text-white">Students</span>
                          <span>🌟</span>
                        </h3>
                      )}
                    </div>
                    <div className="text-center text-sm leading-relaxed font-ari drop-shadow-md">
                      {item.id === 'build' && (
                        <p>
                          Turn 💡 <span className="text-yellow-100 font-semibold">ideas</span> into working{' '}
                          <span className="text-neon-cyan font-semibold">Web3 apps</span>. You'll create{' '}
                          <span className="text-orange-100 font-semibold">projects that matter</span> 🎯, build your{' '}
                          <span className="text-green-100 font-semibold">portfolio</span> 📁, and leave with{' '}
                          <span className="text-red-100 font-semibold">real results</span> ✅—not just theory.
                        </p>
                      )}
                      {item.id === 'learn' && (
                        <p>
                          Skip the 🚫 <span className="text-red-100 font-semibold line-through">endless lectures</span>.{' '}
                          Gain <span className="text-green-100 font-semibold">hands-on experience</span> 🛠️ with{' '}
                          <span className="text-blue-100 font-semibold">blockchain</span> ⛓️ by{' '}
                          <span className="text-purple-100 font-semibold">building</span>,{' '}
                          <span className="text-yellow-100 font-semibold">testing</span> 🧪, and{' '}
                          <span className="text-cyan-100 font-semibold">deploying</span> 🚀 real applications.
                        </p>
                      )}
                      {item.id === 'meet' && (
                        <p>
                          Join a community of <span className="text-pink-100 font-semibold">passionate builders</span> 🔥.{' '}
                          <span className="text-cyan-100 font-semibold">Collaborate</span> 🤝, share{' '}
                          <span className="text-yellow-100 font-semibold">ideas</span> 💭, and connect with future{' '}
                          <span className="text-green-100 font-semibold">partners</span> 🤝 and{' '}
                          <span className="text-blue-100 font-semibold">friends</span> 👫.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" data-scroll-section className="py-20 px-4 bg-gradient-to-r from-sea-blue/30 to-dark-blue/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-binarywaters-force text-white pixel-text text-center" style={{ marginBottom: '1rem' }}>
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {[
              { step: '1', title: 'Join Discord', desc: 'Connect with the community', id: 'discord', emoji: '💬', actionEmoji: '🚪' },
              { step: '2', title: 'Pick Role', desc: 'Choose your specialization', id: 'role', emoji: '🎯', actionEmoji: '⚡' },
              { step: '3', title: 'Join Sprint', desc: 'Jump into active projects', id: 'sprint', emoji: '🏃‍♂️', actionEmoji: '🚀' },
              { step: '4', title: 'Build & Grow', desc: 'Create and learn together', id: 'build', emoji: '🛠️', actionEmoji: '🌱' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="steps-flip-container"
                onClick={() => toggleStepsCard(index)}
              >
                <div className={`steps-flip ${flippedStepsCards.has(index) ? 'flipped' : ''}`}>
                  {/* Front - Step Number */}
                  <div className="steps-front">
                    <div className="text-4xl mb-2">{item.emoji}</div>
                    <div className="text-5xl font-bold font-ari text-white pixel-text mb-2">
                      {item.step}
                    </div>
                    <div className="text-sm font-ari text-purple-200">Step</div>
                  </div>
                  
                  {/* Back - Title and Description */}
                  <div className="steps-back">
                    <div className="mb-4 text-center">
                      {item.id === 'discord' && (
                        <h3 className="text-lg font-bold font-ari pixel-text drop-shadow-lg">
                          <span>💬</span>
                          <span className="text-blue-200">Join</span>
                          <span className="text-purple-200">Discord</span>
                          <span>🚪</span>
                        </h3>
                      )}
                      {item.id === 'role' && (
                        <h3 className="text-lg font-bold font-ari pixel-text drop-shadow-lg">
                          <span>🎯</span>
                          <span className="text-green-200">Pick</span>
                          <span className="text-blue-200">Role</span>
                          <span>⚡</span>
                        </h3>
                      )}
                      {item.id === 'sprint' && (
                        <h3 className="text-lg font-bold font-ari pixel-text drop-shadow-lg">
                          <span>🏃‍♂️</span>
                          <span className="text-orange-200">Join</span>
                          <span className="text-red-200">Sprint</span>
                          <span>🚀</span>
                        </h3>
                      )}
                      {item.id === 'build' && (
                        <h3 className="text-lg font-bold font-ari pixel-text drop-shadow-lg">
                          <span>🛠️</span>
                          <span className="text-yellow-200">Build</span>
                          <span className="text-green-200">&</span>
                          <span className="text-cyan-200">Grow</span>
                          <span>🌱</span>
                        </h3>
                      )}
                    </div>
                    <div className="text-center text-xs leading-relaxed font-ari drop-shadow-md">
                      {item.id === 'discord' && (
                        <p>
                          <span className="text-blue-100 font-semibold">Connect</span> with the{' '}
                          <span className="text-purple-100 font-semibold">community</span> 🌐 and start your{' '}
                          <span className="text-cyan-100 font-semibold">Web3 journey</span> today!
                        </p>
                      )}
                      {item.id === 'role' && (
                        <p>
                          <span className="text-green-100 font-semibold">Choose</span> your{' '}
                          <span className="text-blue-100 font-semibold">specialization</span> 💼:{' '}
                          <span className="text-green-100 font-semibold">Developer</span> 💻,{' '}
                          <span className="text-purple-100 font-semibold">Designer</span> 🎨, or{' '}
                          <span className="text-blue-100 font-semibold">Marketing</span> 📈!
                        </p>
                      )}
                      {item.id === 'sprint' && (
                        <p>
                          <span className="text-orange-100 font-semibold">Jump</span> into{' '}
                          <span className="text-red-100 font-semibold">active projects</span> 🎯 and{' '}
                          <span className="text-purple-100 font-semibold">collaborate</span> with other builders!
                        </p>
                      )}
                      {item.id === 'build' && (
                        <p>
                          <span className="text-yellow-100 font-semibold">Create</span> amazing things 🎨 and{' '}
                          <span className="text-green-100 font-semibold">learn</span> together with your{' '}
                          <span className="text-cyan-100 font-semibold">team</span>! 👥
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Ideas Grid Section */}
      <section id="projects" data-scroll-section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-binarywaters-force text-white pixel-text text-center" style={{ marginBottom: '1rem' }}>
            Project Ideas
          </h2>
          <p className="text-lg text-neon-cyan font-ari text-center mb-12">
            Explore different Web3 project concepts you can build with our community
          </p>
          
          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projectIdeas.map((project, index) => (
              <div 
                key={project.id} 
                className="project-flip-container"
                onClick={() => toggleProjectCard(index)}
              >
                <div className={`project-flip ${flippedProjectCards.has(index) ? 'flipped' : ''}`}>
                  {/* Front - Title and Icon */}
                  <div className={`project-front project-front-${index}`}>
                    <div className="text-6xl mb-6">{project.icon}</div>
                    <h3 className="text-2xl font-bold font-blox text-white pixel-text text-center">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Back - Description and Tools */}
                  <div className={`project-back project-back-${index}`}>
                    <div className="mb-4 text-center">
                      {index === 0 && (
                        <h3 className="text-xl font-bold font-blox pixel-text">
                          <span className="text-purple-200">NFT</span>{' '}
                          <span className="text-white">Collection</span> 🎨
                        </h3>
                      )}
                      {index === 1 && (
                        <h3 className="text-xl font-bold font-blox pixel-text">
                          <span className="text-blue-200">Trading Card</span>{' '}
                          <span className="text-white">Game</span> ⚔️
                        </h3>
                      )}
                      {index === 2 && (
                        <h3 className="text-xl font-bold font-blox pixel-text">
                          <span className="text-green-200">DAO</span>{' '}
                          <span className="text-white">Governance</span> 🏛️
                        </h3>
                      )}
                      {index === 3 && (
                        <h3 className="text-xl font-bold font-blox pixel-text">
                          <span className="text-orange-200">Tokenomics</span>{' '}
                          <span className="text-white">Platform</span> 💰
                        </h3>
                      )}
                      {index === 4 && (
                        <h3 className="text-xl font-bold font-blox pixel-text">
                          <span className="text-indigo-200">DeFi</span>{' '}
                          <span className="text-white">Protocol</span> ⚡
                        </h3>
                      )}
                      {index === 5 && (
                        <h3 className="text-xl font-bold font-blox pixel-text">
                          <span className="text-teal-200">Web3 Social</span>{' '}
                          <span className="text-white">Network</span> 🌐
                        </h3>
                      )}
                    </div>
                    <div className="text-center text-sm leading-relaxed font-ari mb-6">
                      {index === 0 && (
                        <p className="text-gray-200">
                          Create and mint <span className="text-purple-100 font-medium">unique digital art</span> collections with{' '}
                          <span className="text-white font-medium">smart contract royalties</span> and{' '}
                          <span className="text-purple-100 font-medium">marketplace integration</span>.
                        </p>
                      )}
                      {index === 1 && (
                        <p className="text-gray-200">
                          Build a <span className="text-blue-100 font-medium">blockchain-based</span> trading card game with{' '}
                          <span className="text-white font-medium">NFT cards</span>, battles, and{' '}
                          <span className="text-blue-100 font-medium">crypto rewards</span>.
                        </p>
                      )}
                      {index === 2 && (
                        <p className="text-gray-200">
                          Develop a <span className="text-green-100 font-medium">decentralized autonomous organization</span> for{' '}
                          <span className="text-white font-medium">student decision-making</span> and{' '}
                          <span className="text-green-100 font-medium">fund allocation</span>.
                        </p>
                      )}
                      {index === 3 && (
                        <p className="text-gray-200">
                          Design and launch <span className="text-orange-100 font-medium">utility tokens</span> with{' '}
                          <span className="text-white font-medium">staking</span>, rewards, and{' '}
                          <span className="text-orange-100 font-medium">governance mechanisms</span>.
                        </p>
                      )}
                      {index === 4 && (
                        <p className="text-gray-200">
                          Create <span className="text-indigo-100 font-medium">decentralized finance</span> solutions like{' '}
                          <span className="text-white font-medium">lending</span>, borrowing, or{' '}
                          <span className="text-indigo-100 font-medium">yield farming</span> platforms.
                        </p>
                      )}
                      {index === 5 && (
                        <p className="text-gray-200">
                          Build a <span className="text-teal-100 font-medium">decentralized social platform</span> where users{' '}
                          <span className="text-white font-medium">own their data</span> and{' '}
                          <span className="text-teal-100 font-medium">content</span>.
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex} 
                          className={`px-3 py-1 text-xs font-ari pixel-border tool-tag ${
                            toolIndex % 2 === 0 
                              ? 'bg-neon-cyan/20 text-neon-cyan' 
                              : 'bg-teal-300/20 text-teal-300'
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section id="team" data-scroll-section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-binarywaters-force text-white pixel-text text-center" style={{ marginBottom: '1rem' }}>
            Meet the Team
          </h2>
          <p className="text-lg text-neon-cyan font-ari text-center mb-12">
            The visionaries building the future of Web3 education at TU-Varna
          </p>
          
          {/* Team Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {/* Left Placeholder */}
            <div className="card-flip-container">
              <div className="card-flip">
                {/* Front - Question Mark Only */}
                <div className="placeholder-front">
                  <div className="text-6xl sm:text-8xl text-white opacity-90 drop-shadow-lg">❓</div>
                </div>
                
                {/* Back - Join Message */}
                <div className="placeholder-back">
                  <h3 className="text-lg sm:text-xl font-bold font-ari pixel-text mb-4 text-center drop-shadow-lg">
                    <span className="text-neon-cyan">You</span>{' '}
                    <span className="text-yellow-200">Could</span>{' '}
                    <span className="text-white">Be</span>{' '}
                    <span className="text-green-200">Here</span> ✨
                  </h3>
                  <p className="text-gray-200 font-ari text-center text-sm mb-6 drop-shadow-md">
                    <span className="text-cyan-100 font-medium">Join our community</span> and become a{' '}
                    <span className="text-yellow-100 font-medium">core team member</span>! 🚀
                  </p>
                  <div className="mt-4">
                    <a href="https://discord.gg/ujpUU9T3Vc" target="_blank" rel="noopener noreferrer">
                      <button className="px-6 py-2 bg-gradient-to-r from-neon-cyan/20 to-neon-cyan/20 text-black font-bold text-sm font-ari pixel-border chrome-button hover:from-neon-cyan/30 hover:to-neon-cyan/30 transition-all duration-200">
                        Join Us
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Center - Founder Card */}
            <div className="card-flip-container">
              <div className="card-flip">
                {/* Front - Profile */}
                <div className="card-front">
                  <img 
                    src={profileImage} 
                    alt="Denis Profile" 
                    className="profile-image"
                  />
                  <h3 className="text-xl sm:text-2xl font-bold font-ari text-neon-cyan pixel-text mb-1">DENIS</h3>
                  <h4 className="text-xs sm:text-sm font-bold font-ari pixel-text mb-3">{renderRoleTitle('Designer / Founder / Developer')}</h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-ari text-center px-2 whitespace-pre-line">
                    Computer Science student at TU-Varna. Building the future of Web3 education
                  </p>
                </div>
                
                {/* Back - NFT */}
                <div className="card-back">
                  <img 
                    src={nftImage} 
                    alt="Denis NFT" 
                    className="nft-image"
                  />
                  <h3 className="text-lg sm:text-xl font-bold font-ari nft-title pixel-text mb-1">Play Solana</h3>
                  <h4 className="text-sm sm:text-lg font-bold font-ari nft-subtitle pixel-text mb-3">&lt;Player 1&gt; NFT</h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-ari text-center px-2">
                    My NFT identity in the Solana ecosystem
                  </p>
                </div>
              </div>
            </div>

            {/* Right Placeholder */}
            <div className="card-flip-container">
              <div className="card-flip">
                {/* Front - Question Mark Only */}
                <div className="placeholder-front">
                  <div className="text-6xl sm:text-8xl text-white opacity-90 drop-shadow-lg">❓</div>
                </div>
                
                {/* Back - Join Message */}
                <div className="placeholder-back">
                  <h3 className="text-lg sm:text-xl font-bold font-ari pixel-text mb-4 text-center drop-shadow-lg">
                    <span className="text-neon-cyan">You</span>{' '}
                    <span className="text-yellow-200">Could</span>{' '}
                    <span className="text-white">Be</span>{' '}
                    <span className="text-green-200">Here</span> ✨
                  </h3>
                  <p className="text-gray-200 font-ari text-center text-sm mb-6 drop-shadow-md">
                    <span className="text-cyan-100 font-medium">Join our community</span> and become a{' '}
                    <span className="text-yellow-100 font-medium">core team member</span>! 🚀
                  </p>
                  <div className="mt-4">
                    <a href="https://discord.gg/ujpUU9T3Vc" target="_blank" rel="noopener noreferrer">
                      <button className="px-6 py-2 bg-gradient-to-r from-neon-cyan/20 to-neon-cyan/20 text-black font-bold text-sm font-ari pixel-border chrome-button hover:from-neon-cyan/30 hover:to-neon-cyan/30 transition-all duration-200">
                        Join Us
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section data-scroll-section className="py-20 px-4 bg-gradient-to-r from-neon-cyan/10 to-neon-cyan/10 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold font-binarywaters-force text-white pixel-text" style={{ marginBottom: '1rem' }}>
            Be a Founding Member
          </h2>
          <p className="text-xl text-neon-cyan font-ari mb-12">
            Join the first Web3 student collective at TU-Varna and help shape the future of blockchain education.
          </p>
          
          <a href="https://discord.gg/ujpUU9T3Vc" target="_blank" rel="noopener noreferrer">
            <button className="px-12 py-6 bg-gradient-to-r from-neon-cyan to-neon-cyan text-black font-bold text-xl font-ari pixel-border pixel-button chrome-button mb-8">
              Join the Discord
            </button>
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer data-scroll-section className="py-12 px-4 bg-gradient-to-r from-dark-blue to-sea-blue">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Logo size="sm" noGlow={true} />
              <div className="ml-4">
                <h3 className="text-xl font-bold font-blox text-white pixel-text">Black Sea Block</h3>
                <p className="text-neon-cyan font-ari text-sm">Future Web3 Developers</p>
              </div>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="https://discord.gg/ujpUU9T3Vc" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:text-neon-cyan transition-colors font-ari">Discord</a>
            </div>
          </div>
          
          <div className="border-t border-neon-cyan/30 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-ari text-sm">
              © 2025 Black Sea Block. Built by students, for students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;