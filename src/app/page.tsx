'use client'

import { useState } from 'react'

function CopyCommand() {
  const [copied, setCopied] = useState(false)
  const [platform, setPlatform] = useState<'unix' | 'windows'>('unix')

  const commands = {
    unix: 'bash <(curl -fsSL https://get.viberails.io/install.sh)',
    windows: 'irm https://get.viberails.io/install.ps1 | iex',
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(commands[platform])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ maxWidth: '620px', width: '100%' }}>
      <div
        onClick={handleCopy}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: '#060a12',
          border: '1px solid rgba(255,255,255,0.2)',
          padding: '16px 20px',
          cursor: 'pointer',
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.4)', userSelect: 'none' }}>
          {platform === 'unix' ? '$' : '>'}
        </span>
        <code style={{
          fontFamily: 'monospace',
          fontSize: '0.95rem',
          color: '#22d3ee',
          flex: 1,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }}>
          {commands[platform]}
        </code>
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            outline: 'none',
          }}
        >
          {copied ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
          )}
        </button>
      </div>
      {/* Platform switcher */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
        <button
          onClick={() => setPlatform('unix')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            opacity: platform === 'unix' ? 1 : 0.4,
            transition: 'opacity 0.2s',
          }}
        >
          {/* Apple icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: platform === 'unix' ? '#fff' : 'rgba(255,255,255,0.5)' }}>
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          {/* Linux icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: platform === 'unix' ? '#fff' : 'rgba(255,255,255,0.5)' }}>
            <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.002c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.574-.63.328-1.559.597-2.136 1.35-.577.752-1.263 1.17-1.89 1.22-.441.029-.876-.133-1.133-.664-.257-.53-.256-1.333.11-2.512.078-.261.155-.5.236-.723.098-.32.212-.63.3-.928.147-.534.262-.99.282-1.372l.003-.06c.016-.134.01-.202.005-.267-.063.053-.12.096-.18.138z"/>
          </svg>
        </button>
        <button
          onClick={() => setPlatform('windows')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            opacity: platform === 'windows' ? 1 : 0.4,
            transition: 'opacity 0.2s',
          }}
        >
          {/* Windows icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: platform === 'windows' ? '#fff' : 'rgba(255,255,255,0.5)' }}>
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-vr-dark relative overflow-hidden">
      {/* Background Effects - Hero Only */}
      <div className="absolute top-0 left-0 right-0 h-[700px] overflow-hidden pointer-events-none">
        <div className="absolute -left-64 top-32 w-[600px] h-[600px] bg-vr-blue-4/20 rounded-full blur-[128px]" />
        <div className="absolute -right-64 top-48 w-[500px] h-[500px] bg-vr-pink-2/20 rounded-full blur-[128px]" />

        {/* Tron Grid */}
        <div
          className="absolute left-0 right-0 overflow-hidden"
          style={{
            perspective: '500px',
            perspectiveOrigin: '50% 0%',
            top: '350px',
            height: '400px'
          }}
        >
          {/* Grid surface */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to right, rgba(34, 211, 238, 0.12) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(34, 211, 238, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: 'rotateX(70deg)',
              transformOrigin: 'top center',
              height: '300%',
              top: '0',
            }}
          />
        </div>

        {/* Horizon glow */}
        <div
          className="absolute left-0 right-0 h-[2px]"
          style={{
            top: '350px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(34, 211, 238, 0.8) 30%, rgba(190, 24, 93, 0.8) 70%, transparent 100%)',
            boxShadow: '0 0 30px rgba(34, 211, 238, 0.5), 0 0 60px rgba(34, 211, 238, 0.3), 0 10px 40px rgba(190, 24, 93, 0.3)'
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{ background: 'linear-gradient(to top, #0a0f1a 0%, transparent 100%)' }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-display font-bold text-2xl tracking-tight">
            <span className="text-white">vibe</span>
            <span className="text-gradient">rails</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Centered like LimaCharlie */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-[155px] pb-24">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="font-mono text-sm uppercase tracking-widest text-vr-cyan">
            Secure Your AI Agents
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
            <span className="text-white">vibe</span>
            <span className="text-gradient">rails</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Secure agentic systems by intercepting, auditing and validating
            tool calls before they execute. Be the guardrail between your AI and
            the world. For you and your team.
          </p>
          <div className="pt-6 w-full max-w-3xl flex justify-center">
            <CopyCommand />
          </div>
        </div>
      </section>

      {/* Why Viberails Section */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-12">
            <p className="font-mono text-sm uppercase tracking-widest text-vr-cyan mb-3">
              Why Viberails
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Say goodbye to <span className="text-vr-pink-3">uncontrolled AI agents</span>
            </h2>
            <p className="text-lg text-gray-300">
              And say hello to visibility, control, and security for your agentic systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded flex items-center justify-center">
                <svg className="w-12 h-12 text-vr-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg text-white">Inline Security</h3>
              <p className="text-gray-400">
                Sits in the blocking path of tool calls, giving you real-time control.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 rounded flex items-center justify-center">
                <svg className="w-12 h-12 text-vr-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg text-white">Full Visibility</h3>
              <p className="text-gray-400">
                See every tool call, every parameter, and every response.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 rounded flex items-center justify-center">
                <svg className="w-12 h-12 text-vr-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg text-white">Policy Enforcement</h3>
              <p className="text-gray-400">
                Define what's allowed. Block dangerous operations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 rounded flex items-center justify-center">
                <svg className="w-12 h-12 text-vr-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg text-white">Complete Audit Trail</h3>
              <p className="text-gray-400">
                Log and audit all agentic operations at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 border-t border-white/10 bg-vr-darker/50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-12">
            <p className="font-mono text-sm uppercase tracking-widest text-vr-cyan mb-3">
              How it works
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Security in the critical path
            </h2>
            <p className="text-lg text-gray-300">
              Viberails intercepts tool calls before they execute, giving you control over what your AI agents can do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-t border-white/20 pt-8">
              <span className="font-display font-bold text-4xl text-vr-pink-3/50">01</span>
              <h3 className="font-display font-semibold text-xl text-white mt-4 mb-3">Intercept</h3>
              <p className="text-gray-400">
                Viberails sits between your AI agent and its tools. Every tool call passes through our security layer first.
              </p>
            </div>

            <div className="border-t border-white/20 pt-8">
              <span className="font-display font-bold text-4xl text-vr-pink-3/50">02</span>
              <h3 className="font-display font-semibold text-xl text-white mt-4 mb-3">Validate</h3>
              <p className="text-gray-400">
                Apply your security policies in real-time. Check parameters, verify permissions, and assess risk before execution.
              </p>
            </div>

            <div className="border-t border-white/20 pt-8">
              <span className="font-display font-bold text-4xl text-vr-pink-3/50">03</span>
              <h3 className="font-display font-semibold text-xl text-white mt-4 mb-3">Control</h3>
              <p className="text-gray-400">
                Allow, block, or modify tool calls based on your policies. Maintain full control over what your agents can do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-vr-cyan mb-3">
                Use Cases
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                Built for agentic security
              </h2>
              <p className="text-lg text-gray-300">
                Secure any system where AI agents interact with tools, APIs, or infrastructure.
              </p>
            </div>
            <div className="space-y-0">
              <div className="border-t border-white/20 py-5 group">
                <h3 className="font-display font-semibold text-lg text-white group-hover:text-vr-cyan transition-colors">
                  Claude Code & Coding Agents
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Prevent unauthorized file access, command execution, and data exfiltration.
                </p>
              </div>
              <div className="border-t border-white/20 py-5 group">
                <h3 className="font-display font-semibold text-lg text-white group-hover:text-vr-cyan transition-colors">
                  Autonomous Agents
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Add guardrails to AutoGPT, BabyAGI, and other autonomous systems.
                </p>
              </div>
              <div className="border-t border-white/20 py-5 group">
                <h3 className="font-display font-semibold text-lg text-white group-hover:text-vr-cyan transition-colors">
                  Enterprise AI Deployments
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Implement organization-wide policies for AI tool usage.
                </p>
              </div>
              <div className="border-t border-b border-white/20 py-5 group">
                <h3 className="font-display font-semibold text-lg text-white group-hover:text-vr-cyan transition-colors">
                  MCP Server Security
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Validate requests and enforce access controls on MCP servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-display font-bold text-xl">
              <span className="text-white">vibe</span>
              <span className="text-vr-cyan">rails</span>
            </div>
            <a href="https://limacharlie.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <span className="text-sm">Powered by</span>
              <img
                src="/text_logo-white.svg"
                alt="LimaCharlie"
                className="h-6"
              />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
