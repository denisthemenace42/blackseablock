import React, { useState } from 'react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import './App.css';
import logoImage from './assets/blackseablock-logo.png';
import profileImage from './assets/myprofile.png';
import nftImage from './assets/player1nft.jpg';

function App() {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

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

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projectIdeas.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projectIdeas.length) % projectIdeas.length);
  };

  const goToProject = (index: number) => {
    setCurrentProjectIndex(index);
  };

  // Team carousel data
  const teamMembers = [
    {
      id: 'founder',
      type: 'founder',
      name: 'DENIS',
      title: 'Founder / Developer / Designer',
      description: 'Computer Science student at TU-Varna. Building the future of Web3 education',
      profileImage: profileImage,
      nftImage: nftImage,
      nftTitle: 'Play Solana',
      nftSubtitle: '<Player 1> NFT',
      nftDescription: 'My NFT identity in the Solana ecosystem'
    },
    {
      id: 'placeholder-1',
      type: 'placeholder',
      name: 'You Could Be Here',
      description: 'Join our community and become a core team member'
    },
    {
      id: 'placeholder-2',
      type: 'placeholder',
      name: 'You Could Be Here',
      description: 'Join our community and become a core team member'
    },
    {
      id: 'placeholder-3',
      type: 'placeholder',
      name: 'You Could Be Here',
      description: 'Join our community and become a core team member'
    }
  ];

  const nextTeamMember = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevTeamMember = () => {
    setCurrentTeamIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToTeamMember = (index: number) => {
    setCurrentTeamIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-blue via-sea-blue to-dark-blue water-pattern relative">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-16">


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
            <button className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-cyan text-black font-bold text-lg font-ari pixel-border pixel-button">
              Join Discord
            </button>
          </a>
        </div>

      </section>

      {/* About / Mission Section */}
      <section id="mission" className="py-20 px-4 bg-gradient-to-r from-dark-blue/50 to-sea-blue/50 isometric-section">
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
      <section id="why-join" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-binarywaters-force text-white pixel-text text-center" style={{ marginBottom: '1rem' }}>
            Why Join
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🚀', title: 'Build Real Projects', desc: 'Create actual Web3 applications that matter' },
              { icon: '🧑‍💻', title: 'Learn by Doing', desc: 'Hands-on experience with cutting-edge tech' },
              { icon: '🤝', title: 'Meet Like-Minded Students', desc: 'Connect with fellow builders and innovators' }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-sea-blue/30 to-dark-blue/50 p-6 pixel-border isometric-card">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold font-ari text-neon-cyan pixel-text mb-3">{item.title}</h3>
                <p className="text-gray-300 font-ari">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-r from-sea-blue/30 to-dark-blue/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-binarywaters-force text-white pixel-text text-center" style={{ marginBottom: '1rem' }}>
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Join Discord', desc: 'Connect with the community' },
              { step: '02', title: 'Pick Role', desc: 'Choose your specialization' },
              { step: '03', title: 'Join Sprint', desc: 'Jump into active projects' },
              { step: '04', title: 'Build & Grow', desc: 'Create and learn together' }
            ].map((item, index) => (
              <div key={index} className="text-center isometric-card">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-cyan text-black font-bold text-xl font-ari rounded-lg flex items-center justify-center mx-auto mb-4 pixel-border isometric-card">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold font-ari text-neon-cyan pixel-text mb-3">{item.title}</h3>
                <p className="text-gray-300 font-ari">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Ideas Carousel Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-binarywaters-force text-white pixel-text text-center" style={{ marginBottom: '1rem' }}>
            Project Ideas
          </h2>
          <p className="text-lg text-neon-cyan font-ari text-center mb-12">
            Explore different Web3 project concepts you can build with our community
          </p>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Main Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
              >
                {projectIdeas.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-sea-blue/50 to-dark-blue/50 p-8 pixel-border isometric-card">
                      <div className="text-center">
                        {/* Project Info */}
                        <div className="flex items-center justify-center mb-6">
                          <div className="text-5xl mr-4">{project.icon}</div>
                          <h3 className="text-3xl font-bold font-blox text-neon-cyan pixel-text">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 font-ari mb-8 leading-relaxed text-lg max-w-3xl mx-auto">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                          {project.tools.map((tool, toolIndex) => (
                            <span 
                              key={toolIndex} 
                              className={`px-4 py-2 text-sm font-ari pixel-border isometric-card ${
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
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevProject}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-neon-cyan to-neon-cyan text-black p-3 pixel-border isometric-card hover:from-neon-cyan/80 hover:to-neon-cyan/80 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextProject}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gradient-to-r from-neon-cyan to-neon-cyan text-black p-3 pixel-border isometric-card hover:from-neon-cyan/80 hover:to-neon-cyan/80 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Carousel Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {projectIdeas.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 transition-all duration-200 ${
                  currentProjectIndex === index 
                    ? 'bg-neon-cyan' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Carousel Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-binarywaters-force text-white pixel-text text-center" style={{ marginBottom: '1rem' }}>
            Meet the Team
          </h2>
          <p className="text-lg text-neon-cyan font-ari text-center mb-12">
            The visionaries building the future of Web3 education at TU-Varna
          </p>
          
          {/* Team Carousel Container */}
          <div className="relative">
            {/* Main Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTeamIndex * 100}%)` }}
              >
                {teamMembers.map((member, index) => (
                  <div key={member.id} className="w-full flex-shrink-0 flex justify-center px-2 sm:px-4 py-6 sm:py-10">
                    {member.type === 'founder' ? (
                      /* Founder Card with Flip Animation */
                      <div className="card-flip-container">
                        <div className="card-flip">
                          {/* Front - Profile */}
                          <div className="card-front">
                            <img 
                              src={member.profileImage} 
                              alt="Denis Profile" 
                              className="profile-image"
                            />
                            <h3 className="text-xl sm:text-2xl font-bold font-ari text-neon-cyan pixel-text mb-1">{member.name}</h3>
                            <h4 className="text-xs sm:text-sm font-bold font-ari text-white pixel-text mb-3">{member.title}</h4>
                            <p className="text-xs sm:text-sm text-gray-300 font-ari text-center px-2">
                              {member.description}
                            </p>
                          </div>
                          
                          {/* Back - NFT */}
                          <div className="card-back">
                            <img 
                              src={member.nftImage} 
                              alt="Denis NFT" 
                              className="nft-image"
                            />
                            <h3 className="text-lg sm:text-xl font-bold font-ari text-yellow-400 pixel-text mb-1">{member.nftTitle}</h3>
                            <h4 className="text-sm sm:text-lg font-bold font-ari text-purple-400 pixel-text mb-3">{member.nftSubtitle}</h4>
                            <p className="text-xs sm:text-sm text-gray-300 font-ari text-center px-2">
                              {member.nftDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Placeholder Card */
                      <div className="card-flip-container">
                        <div className="placeholder-card rounded-lg flex flex-col justify-center items-center h-full">
                          <div className="text-4xl sm:text-6xl mb-4 opacity-50">❓</div>
                          <h3 className="text-lg sm:text-xl font-bold font-ari text-gray-400 pixel-text mb-2">{member.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-500 font-ari text-center px-4">
                            {member.description}
                          </p>
                          <div className="mt-6">
                            <a href="https://discord.gg/ujpUU9T3Vc" target="_blank" rel="noopener noreferrer">
                              <button className="px-6 py-2 bg-gradient-to-r from-neon-cyan/20 to-neon-cyan/20 text-neon-cyan font-bold text-sm font-ari pixel-border hover:from-neon-cyan/30 hover:to-neon-cyan/30 transition-all duration-200">
                                Join Us
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows - Responsive positioning */}
            <button 
              onClick={prevTeamMember}
              className="absolute left-2 md:left-8 lg:left-16 xl:left-32 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-neon-cyan to-neon-cyan text-black p-2 md:p-3 pixel-border isometric-card hover:from-neon-cyan/80 hover:to-neon-cyan/80 transition-all duration-200 z-20"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextTeamMember}
              className="absolute right-2 md:right-8 lg:right-16 xl:right-32 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-neon-cyan to-neon-cyan text-black p-2 md:p-3 pixel-border isometric-card hover:from-neon-cyan/80 hover:to-neon-cyan/80 transition-all duration-200 z-20"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Carousel Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTeamMember(index)}
                className={`w-3 h-3 transition-all duration-200 ${
                  currentTeamIndex === index 
                    ? 'bg-neon-cyan' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-neon-cyan/10 to-neon-cyan/10 relative">
        {/* Background logo watermark */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Logo size="lg" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold font-binarywaters-force text-white pixel-text" style={{ marginBottom: '1rem' }}>
            Be a Founding Member
          </h2>
          <p className="text-xl text-neon-cyan font-ari mb-12">
            Join the first Web3 student collective at TU-Varna and help shape the future of blockchain education.
          </p>
          
          <a href="https://discord.gg/ujpUU9T3Vc" target="_blank" rel="noopener noreferrer">
            <button className="px-12 py-6 bg-gradient-to-r from-neon-cyan to-neon-cyan text-black font-bold text-xl font-ari pixel-border pixel-button mb-8">
              Join the Discord
            </button>
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-r from-dark-blue to-sea-blue">
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