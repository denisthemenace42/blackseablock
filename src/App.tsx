import React from 'react';
import Logo from './components/Logo';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-blue via-sea-blue to-dark-blue water-pattern">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background wave animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-transparent via-neon-cyan to-transparent transform -skew-y-1 animate-wave"></div>
          <div className="absolute top-1/2 right-0 w-full h-24 bg-gradient-to-l from-transparent via-neon-cyan to-transparent transform skew-y-1 animate-wave" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-0 w-full h-28 bg-gradient-to-r from-transparent via-neon-cyan to-transparent transform -skew-y-2 animate-wave" style={{ animationDelay: '2s' }}></div>
        </div>


        {/* Main hero content */}
        <div className="text-center z-10 max-w-4xl mx-auto">
          {/* Large logo display */}
          <div className="mb-8 flex justify-center">
            <div className="relative isometric-container">
              <img 
                src="/blackseablocklgoo.png" 
                alt="Black Sea Block Logo" 
                className="w-80 h-80 md:w-96 md:h-96 object-contain isometric-float"
              />
              {/* Isometric shadow */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 bg-black/20 transform translate-x-2 translate-y-2 -z-10 isometric-shadow"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-neon-cyan mb-8 font-ari pixel-text">
            From Varna to Web3 — Student Builders Collective
          </p>
          
          <button className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-cyan text-black font-bold text-lg font-ari pixel-border pixel-button">
            Join Discord
          </button>
        </div>

        {/* Floating pixel elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-neon-cyan animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-neon-cyan animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-neon-cyan animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-dark-blue/50 to-sea-blue/50 isometric-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-binarywaters-force text-white pixel-text" style={{ marginBottom: '1rem' }}>
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-neon-cyan font-ari leading-relaxed">
            We are a student-led collective at TU Varna building games, apps, and projects on Web3. 
            Our mission: connect students, learn blockchain together, and launch real projects.
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-binarywaters-force text-white pixel-text text-center" style={{ marginBottom: '1rem' }}>
            Why Join
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🚀', title: 'Build Real Projects', desc: 'Create actual Web3 applications that matter' },
              { icon: '🧑‍💻', title: 'Learn by Doing', desc: 'Hands-on experience with cutting-edge tech' },
              { icon: '🤝', title: 'Meet Like-Minded Students', desc: 'Connect with fellow builders and innovators' },
              { icon: '🌍', title: 'Be Part of Something Bigger', desc: 'Join a global movement of student developers' },
              { icon: '🏆', title: 'Gain Recognition & Rewards', desc: 'Showcase your work and earn recognition' }
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
      <section className="py-20 px-4 bg-gradient-to-r from-sea-blue/30 to-dark-blue/30">
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

      {/* Community / First Project Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-binarywaters-force text-white pixel-text text-center" style={{ marginBottom: '1rem' }}>
            Our First Project
          </h2>
          
          <div className="bg-gradient-to-br from-sea-blue/50 to-dark-blue/50 p-8 pixel-border isometric-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold font-blox text-neon-cyan pixel-text mb-4">
                  Blockchain Student Portfolio
                </h3>
                <p className="text-gray-300 font-ari mb-6">
                  A decentralized platform where TU Varna students can showcase their Web3 projects, 
                  connect with peers, and discover collaboration opportunities. Built on Polygon with 
                  smart contracts for project verification and community voting.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-sm font-ari pixel-border isometric-card">React</span>
                  <span className="px-3 py-1 bg-neon-cyan/20 text-teal-300 text-sm font-ari pixel-border isometric-card">Solidity</span>
                  <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-sm font-ari pixel-border isometric-card">Polygon</span>
                  <span className="px-3 py-1 bg-neon-cyan/20 text-teal-300 text-sm font-ari pixel-border isometric-card">IPFS</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-dark-blue to-sea-blue p-8 pixel-border isometric-card">
                <div className="aspect-video bg-gradient-to-br from-neon-cyan/20 to-neon-cyan/20 flex items-center justify-center relative">
                  {/* Logo as background element */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Logo size="sm" noGlow={true} />
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <p className="text-neon-cyan font-ari">Project Mockup</p>
                    <p className="text-sm text-gray-400 font-ari">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
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
            Join the first Web3 student collective at TU Varna and help shape the future of blockchain education.
          </p>
          
          <button className="px-12 py-6 bg-gradient-to-r from-neon-cyan to-neon-cyan text-black font-bold text-xl font-ari pixel-border pixel-button mb-8">
            Join the Discord
          </button>
          
          {/* QR Code placeholder */}
          <div className="mt-12">
            <div className="w-32 h-32 bg-white mx-auto pixel-border flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl mb-2">📱</div>
                <p className="text-xs font-ari text-black">QR Code</p>
                <p className="text-xs font-ari text-gray-600">Coming Soon</p>
              </div>
            </div>
          </div>
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
                <p className="text-neon-cyan font-ari text-sm">TU Varna Student Collective</p>
              </div>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="https://discord.gg/blackseablock" className="text-neon-cyan hover:text-neon-cyan transition-colors font-ari">Discord</a>
              <a href="https://t.me/blackseablock" className="text-neon-cyan hover:text-neon-cyan transition-colors font-ari">Telegram</a>
              <a href="https://twitter.com/blackseablock" className="text-neon-cyan hover:text-neon-cyan transition-colors font-ari">Twitter</a>
              <a href="mailto:contact@blackseablock.com" className="text-neon-cyan hover:text-neon-cyan transition-colors font-ari">Email</a>
            </div>
          </div>
          
          <div className="border-t border-neon-cyan/30 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-ari text-sm">
              © 2024 Black Sea Block. Built by students, for students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;