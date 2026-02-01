'use client'

import { useState } from 'react'

function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      onClick={handleCopy}
      className="flex items-center gap-3 bg-vr-darker border border-white/20 px-5 py-4 cursor-pointer hover:border-vr-cyan/50 transition-colors group"
    >
      <span className="text-gray-500 select-none">$</span>
      <code className="font-mono text-sm md:text-base text-vr-cyan flex-1 overflow-x-auto whitespace-nowrap">
        {command}
      </code>
      <button className="text-gray-400 hover:text-white transition-colors flex-shrink-0">
        {copied ? (
          <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
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
            <span className="text-vr-cyan">rails</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Centered like LimaCharlie */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-24">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="font-mono text-sm uppercase tracking-widest text-vr-cyan">
            Secure Your AI Agents
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
            <span className="text-white">vibe</span>
            <span className="text-gradient">rails</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Secure OpenClaw and other agentic systems by intercepting, auditing and validating
            tool calls before they execute. Be the guardrail between your AI and
            the world. For you and your team.
          </p>
          <div className="pt-6 w-full max-w-xl">
            <CopyCommand command="curl -fsSL https://get.viberails.io/install.sh | bash" />
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
                  OpenClaw & Claude Code
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
