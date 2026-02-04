'use client'

import { useState } from 'react'

// Local Assets
const imgIsolationMode = "/assets/isolation-mode.svg"
const imgIsolationMode1 = "/assets/isolation-mode-1.svg"
const imgLine8 = "/assets/line-8.svg"
const imgLine7 = "/assets/line-7.svg"
const imgStacks = "/assets/stacks.svg"
const imgGroup1728 = "/assets/group-1728.svg"
const imgSavings = "/assets/savings.svg"
const imgDesignServices = "/assets/design-services.svg"
const imgEllipse4 = "/assets/ellipse-4.svg"
const imgLayer1 = "/assets/layer-1.svg"
const imgGroup1947 = "/assets/group-1947.svg"

function CopyCommand() {
  const [copied, setCopied] = useState(false)
  const [platform, setPlatform] = useState<'unix' | 'windows'>('unix')

  const commands = {
    unix: 'bash <(curl -fsSL https://get.viberails.io/install.sh)',
    windows: 'irm https://get.viberails.io/install.ps1 | iex',
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(commands[platform])
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="w-full max-w-[765px] shadow-[0px_4px_12px_0px_rgba(39,120,198,0.15)]">
      <div className="backdrop-blur-[3px] bg-[rgba(18,60,120,0.5)] flex flex-col gap-[18px] items-center justify-center pb-[18px] pt-[24px] px-[24px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.25)] w-full">
        {/* Command line */}
        <div className="w-full">
          <div
            onClick={handleCopy}
            className="border-[rgba(255,255,255,0.4)] border-b border-solid flex h-[54px] items-center pb-[18px] w-full cursor-pointer"
          >
            <div className="flex items-center w-full">
              <div className="font-['IBM_Plex_Mono'] font-medium text-[12px] sm:text-[14px] md:text-[18px] text-white flex-1 overflow-hidden">
                <span className="text-[rgba(255,255,255,0.4)]">{platform === 'unix' ? '$' : '>'}</span>
                <span className="break-all"> {commands[platform]}</span>
              </div>
              <div className="relative size-[30px] flex-shrink-0">
                <svg className="absolute inset-0" width="30" height="30" viewBox="0 0 30 30">
                  <circle cx="15" cy="15" r="14" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  {copied ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Platform icons and sign up */}
        <div className="flex items-center justify-between w-full h-[20px]">
          <div className="flex gap-[16px] items-center h-full">
            {/* Apple + Linux (Unix) */}
            <button
              onClick={() => setPlatform('unix')}
              className={`flex items-center gap-4 transition-opacity h-full ${platform === 'unix' ? 'opacity-100' : 'opacity-40'}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139z"/>
              </svg>
            </button>
            {/* Windows */}
            <button
              onClick={() => setPlatform('windows')}
              className={`flex items-center transition-opacity h-full ${platform === 'windows' ? 'opacity-100' : 'opacity-40'}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
              </svg>
            </button>
          </div>
          <a href="#" className="flex gap-[6px] items-center">
            <span className="font-['IBM_Plex_Mono'] font-medium text-[#3ca8de] text-[12px] tracking-[1.8px] uppercase">
              sign up for free
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3ca8de" strokeWidth="2" className="-rotate-90">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-[#00030c] relative min-h-screen w-full overflow-hidden">
      {/* Background Pattern - Top Left */}
      <div className="hidden lg:flex absolute h-[953px] items-center justify-center left-[98px] top-[-62.5px] w-[597px] pointer-events-none">
        <div className="flex-none rotate-90">
          <div className="h-[597px] relative w-[953px]">
            <img alt="" className="block max-w-none size-full opacity-60" src={imgIsolationMode} />
          </div>
        </div>
      </div>

      {/* Background Pattern - Middle Right */}
      <div className="hidden lg:block absolute h-[597px] left-[538px] top-[1886px] w-[953px] pointer-events-none">
        <img alt="" className="block max-w-none size-full opacity-40" src={imgIsolationMode1} />
      </div>

      {/* Logo */}
      <div className="absolute h-[18px] left-[48px] top-[48px] w-[202px] z-10">
        <img alt="VibeRails" className="block max-w-none size-full" src={imgLayer1} />
      </div>

      {/* Hero Section */}
      <div className="relative pt-[140px] lg:pt-[259px] pb-[60px] lg:pb-[100px]">
        {/* Ellipse glow behind hero */}
        <div className="hidden md:flex absolute h-[293px] items-center justify-center left-1/2 -translate-x-1/2 top-[42px] w-[613px] pointer-events-none">
          <div className="-scale-y-100 rotate-[-179deg]">
            <div className="h-[287px] relative w-[610px]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse4} />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-[1164px] mx-auto px-6">
          {/* Decorative Lines - anchored to hero content */}
          <div className="hidden lg:block absolute left-[40px] top-[-40px] w-[575px] h-[231px] pointer-events-none" style={{ transform: 'scaleX(-1) translateX(60%)' }}>
            <img alt="" className="block max-w-none size-full" src={imgGroup1947} />
          </div>
          {/* Surhead */}
          <p className="font-['IBM_Plex_Mono'] font-medium text-[#3ca8de] text-[18px] tracking-[2.7px] uppercase mb-[18px]">
            Guardrails for agentic AI operations
          </p>
          {/* Main Title */}
          <h1
            className="font-['Syne'] font-bold text-[36px] md:text-[48px] lg:text-[60px] leading-[42px] md:leading-[56px] lg:leading-[72px] tracking-[-0.6px] text-center mb-[18px] bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(185deg, #FFFFFF 0%, #3CA8DE 50%, #FF487B 100%)',
              backgroundPosition: '0 5px',
              filter: 'drop-shadow(0px 0px 36px rgba(90,222,249,0.5))',
              fontFeatureSettings: "'lnum' 1, 'pnum' 1"
            }}
          >
            Intercept and control<br />AI agent activity
          </h1>
          {/* Description */}
          <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white text-center max-w-[960px] mb-[48px]" style={{ textShadow: '0px 6px 36px rgba(0,24,60,0.25)' }}>
            Viberails intercepts, audits and validates tool calls from OpenClaw and other agentic systems before execution. The guardrail between your AI and the world for individual developers and security teams.
          </p>
          {/* Command Box */}
          <CopyCommand />
        </div>
      </div>

      {/* Feature highlights */}
      <div className="hidden xl:block pt-0 pb-[60px] xl:pt-[20px] xl:pb-[80px] max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[138px]">
        <div className="flex justify-between font-['IBM_Plex_Mono'] text-[14px] tracking-[2px] uppercase">
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(185deg, #FFFFFF 0%, #FFFFFF 15%, #3CA8DE 45%, #FF487B 100%)', backgroundSize: '100% 120%', backgroundPosition: '0 0' }}
          >
            Free, no credit card required
          </span>
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(185deg, #FFFFFF 0%, #FFFFFF 15%, #3CA8DE 45%, #FF487B 100%)', backgroundSize: '100% 120%', backgroundPosition: '0 0' }}
          >
            &lt;50ms Latency
          </span>
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(185deg, #FFFFFF 0%, #FFFFFF 15%, #3CA8DE 45%, #FF487B 100%)', backgroundSize: '100% 120%', backgroundPosition: '0 0' }}
          >
            5 minute setup
          </span>
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(185deg, #FFFFFF 0%, #FFFFFF 15%, #3CA8DE 45%, #FF487B 100%)', backgroundSize: '100% 120%', backgroundPosition: '0 0' }}
          >
            No sales demo required
          </span>
        </div>
      </div>

      {/* Why Viberails Section */}
      <div className="relative pt-[60px] pb-[60px] lg:pt-[100px] lg:pb-[100px] max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[138px]">
        {/* Section Header */}
        <p className="font-['IBM_Plex_Mono'] font-medium text-[#3ca8de] text-[18px] tracking-[2.7px] uppercase mb-[12px]">
          why viberails
        </p>
        <h2
          className="font-['Syne'] font-semibold text-[30px] md:text-[36px] leading-[36px] md:leading-[39px] tracking-[-0.36px] mb-[6px] bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(185deg, #FFFFFF 0%, #3CA8DE 50%, #FF487B 100%)',
            backgroundPosition: '0 5px',
            filter: 'drop-shadow(0px 0px 24px rgba(90,222,249,0.35))',
            fontFeatureSettings: "'lnum' 1, 'pnum' 1"
          }}
        >
          Say goodbye to ungoverned AI performing risky operations
        </h2>
        <p className="font-['Inter'] font-light text-[18px] md:text-[24px] leading-[24px] md:leading-[30px] tracking-[-0.24px] text-white mb-[36px] lg:mb-[60px]">
          And say hello to transparency, control, and accountability for your agentic operators
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {/* Inline Security */}
          <div className="flex flex-col gap-[12px]">
            <div className="size-[90px]">
              <img alt="" className="block max-w-none size-full" src={imgStacks} />
            </div>
            <h3 className="font-['Syne'] font-semibold text-[24px] leading-[27px] tracking-[-0.24px] text-white" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              Inline Security
            </h3>
            <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white">
              Configure which operations require approval, are AI-accessible, or remain manual.
            </p>
          </div>

          {/* Full Visibility */}
          <div className="flex flex-col gap-[12px]">
            <div className="size-[90px] overflow-clip relative">
              <div className="absolute flex inset-[-2%_-9%_2%_-8%] items-center justify-center">
                <div className="-rotate-[30deg] flex-none h-[50px] w-[93px]">
                  <div className="relative size-full">
                    <div className="absolute inset-[-6%_-3%]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup1728} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="font-['Syne'] font-semibold text-[24px] leading-[27px] tracking-[-0.24px] text-white" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              Full Visibility
            </h3>
            <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white">
              Inspect every tool call's parameters and responses. Query historical execution data.
            </p>
          </div>

          {/* Policy Enforcement */}
          <div className="flex flex-col gap-[12px]">
            <div className="size-[90px]">
              <img alt="" className="block max-w-none size-full" src={imgSavings} />
            </div>
            <h3 className="font-['Syne'] font-semibold text-[24px] leading-[27px] tracking-[-0.24px] text-white" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              Policy Enforcement
            </h3>
            <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white">
              Write rules to block file deletions, restrict endpoints, or require human approval.
            </p>
          </div>

          {/* Complete Audit Trail */}
          <div className="flex flex-col gap-[12px]">
            <div className="size-[90px]">
              <img alt="" className="block max-w-none size-full" src={imgDesignServices} />
            </div>
            <h3 className="font-['Syne'] font-semibold text-[24px] leading-[27px] tracking-[-0.24px] text-white" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              Complete Audit Trail
            </h3>
            <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white">
              See execution logs showing which agents called which tools, when, and how.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative pt-[60px] pb-[60px] lg:pt-[100px] lg:pb-[100px] max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[138px]">
        {/* Section Header */}
        <p className="font-['IBM_Plex_Mono'] font-medium text-[#3ca8de] text-[18px] tracking-[2.7px] uppercase mb-[12px]">
          how it works
        </p>
        <h2
          className="font-['Syne'] font-bold text-[30px] md:text-[38px] lg:text-[45px] leading-[36px] md:leading-[42px] lg:leading-[48px] tracking-[-0.45px] mb-[6px] bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(185deg, #FFFFFF 0%, #FFFFFF 20%, #3CA8DE 60%, #FF487B 100%)',
            backgroundPosition: '0 5px',
            filter: 'drop-shadow(0px 0px 24px rgba(90,222,249,0.35))',
            fontFeatureSettings: "'lnum' 1, 'pnum' 1"
          }}
        >
          Security in the critical path
        </h2>
        <p className="font-['Inter'] font-light text-[18px] md:text-[24px] leading-[24px] md:leading-[30px] tracking-[-0.24px] text-white mb-[36px] lg:mb-[60px]">
          Viberails intercepts specified tool calls before they execute, giving you control over what your AI agents can do. With latency under 50ms, you get security without the slowdown.
        </p>

        {/* Steps */}
        <div className="flex flex-col gap-[48px] max-w-[580px]">
          <div>
            <h3 className="font-['Syne'] font-semibold text-[27px] md:text-[36px] leading-[30px] md:leading-[39px] tracking-[-0.36px] text-white mb-[12px]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              Intercept
            </h3>
            <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white">
              Sit in the execution path between agent and tools. No tool call reaches your infrastructure without passing through Viberails first.
            </p>
          </div>
          <div>
            <h3 className="font-['Syne'] font-semibold text-[27px] md:text-[36px] leading-[30px] md:leading-[39px] tracking-[-0.36px] text-white mb-[12px]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              Validate
            </h3>
            <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white">
              Write policies as code to check file paths, verify API endpoints, or flag suspicious parameters before execution.
            </p>
          </div>
          <div>
            <h3 className="font-['Syne'] font-semibold text-[27px] md:text-[36px] leading-[30px] md:leading-[39px] tracking-[-0.36px] text-white mb-[12px]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              Control
            </h3>
            <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white">
              Auto-approve safe operations, block dangerous ones, or route sensitive calls to human approval queues.
            </p>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="relative pt-[60px] pb-[60px] lg:pt-[100px] lg:pb-[100px] max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[138px]">
        {/* Header */}
        <div className="flex flex-col gap-[12px] mb-[35px]">
          <p className="font-['IBM_Plex_Mono'] font-medium text-[#3ca8de] text-[18px] tracking-[2.7px] uppercase">
            use cases
          </p>
          <h2
            className="font-['Syne'] font-bold text-[30px] md:text-[38px] lg:text-[45px] leading-[36px] md:leading-[42px] lg:leading-[48px] tracking-[-0.45px] bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(185deg, #FFFFFF 0%, #FFFFFF 20%, #3CA8DE 60%, #FF487B 100%)',
              backgroundPosition: '0 5px',
              filter: 'drop-shadow(0px 0px 24px rgba(90,222,249,0.35))',
              fontFeatureSettings: "'lnum' 1, 'pnum' 1"
            }}
          >
            Built for agentic security
          </h2>
          <p className="font-['Inter'] font-light text-[18px] md:text-[24px] leading-[24px] md:leading-[30px] tracking-[-0.24px] text-white max-w-[864px]">
            Secure any system where AI agents interact with tools, APIs, or infrastructure.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[35px]">
          {/* Use Case 1 */}
          <div className="flex flex-col gap-[12px]">
            <p
              className="font-['Syne'] font-bold text-[72px] leading-[72px] tracking-[-0.72px] text-[#00030c]"
              style={{ textShadow: '0 0 30px #3ca8de', fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
            >
              1
            </p>
            <h3 className="font-['Syne'] font-semibold text-[24px] leading-[27px] tracking-[-0.24px] text-white" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              Claude Code & Coding Agents
            </h3>
            <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white">
              Prevent unauthorized file access, command execution, and data exfiltration.
            </p>
          </div>

          {/* Use Case 2 */}
          <div className="flex flex-col gap-[12px]">
            <p
              className="font-['Syne'] font-bold text-[72px] leading-[72px] tracking-[-0.72px] text-[#00030c]"
              style={{ textShadow: '0 0 30px #3ca8de', fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
            >
              2
            </p>
            <h3 className="font-['Syne'] font-semibold text-[24px] leading-[27px] tracking-[-0.24px] text-white" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              Autonomous Agents
            </h3>
            <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white">
              Add guardrails to AutoGPT, BabyAGI, and other autonomous systems.
            </p>
          </div>

          {/* Use Case 3 */}
          <div className="flex flex-col gap-[12px]">
            <p
              className="font-['Syne'] font-bold text-[72px] leading-[72px] tracking-[-0.72px] text-[#00030c]"
              style={{ textShadow: '0 0 30px #3ca8de', fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
            >
              3
            </p>
            <h3 className="font-['Syne'] font-semibold text-[24px] leading-[27px] tracking-[-0.24px] text-white" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              Enterprise AI Deployments
            </h3>
            <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white">
              Implement organization-wide policies for AI tool usage.
            </p>
          </div>

          {/* Use Case 4 */}
          <div className="flex flex-col gap-[12px]">
            <p
              className="font-['Syne'] font-bold text-[72px] leading-[72px] tracking-[-0.72px] text-[#00030c]"
              style={{ textShadow: '0 0 30px #3ca8de', fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}
            >
              4
            </p>
            <h3 className="font-['Syne'] font-semibold text-[24px] leading-[27px] tracking-[-0.24px] text-white" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              MCP Server Security
            </h3>
            <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white">
              Validate requests and enforce access controls on MCP servers.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative pt-[60px] pb-[100px] lg:pt-[100px] lg:pb-[150px]">
        <div className="flex flex-col gap-[12px] items-center text-center max-w-[962px] mx-auto px-6">
          <h2
            className="font-['Syne'] font-bold text-[30px] md:text-[38px] lg:text-[45px] leading-[36px] md:leading-[42px] lg:leading-[48px] tracking-[-0.45px] bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(185deg, #FFFFFF 0%, #3CA8DE 50%, #FF487B 100%)',
              backgroundPosition: '0 5px',
              filter: 'drop-shadow(0px 0px 24px rgba(90,222,249,0.35))',
              fontFeatureSettings: "'lnum' 1, 'pnum' 1"
            }}
          >
            Put agent execution under control
          </h2>
          <p className="font-['Inter'] font-light text-[18px] md:text-[24px] leading-[24px] md:leading-[30px] tracking-[-0.24px] text-white mb-[36px]">
            Intercept and govern every action before it reaches production.
          </p>
          <a
            href="#"
            className="relative flex items-center justify-center h-[60px] w-[208px] p-[2px] hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(205deg, #FFFFFF 0%, #3CA8DE 50%, #FF487B 100%)' }}
          >
            <span className="flex items-center justify-center w-full h-full bg-[#00030c]">
              <span className="font-['Syne'] font-bold text-[18px] leading-[18px] tracking-[0.9px] uppercase text-white" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                free install
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mt-[60px] lg:mt-[100px]">
        {/* Horizontal line */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[138px]">
          <div className="w-full h-[1px] bg-white/20" />
        </div>

        {/* Footer content */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[138px] py-[24px] flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="font-['IBM_Plex_Mono'] text-[12px] text-white/40 tracking-[0.5px]">
            Copyright © LimaCharlie 2026
          </p>

          {/* Powered by */}
          <a
            href="https://limacharlie.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            {/* LimaCharlie icon */}
            <svg width="24" height="17" viewBox="0 0 43 30" fill="currentColor">
              <path d="M20.472 5.51634L14.9676 0L0 15L14.9676 30L20.472 24.4902L11.0023 15L20.472 5.51634Z"/>
              <path d="M29.1168 19.9869C26.358 19.9869 24.121 17.7451 24.121 14.9804C24.121 12.2157 26.358 9.97386 29.1168 9.97386C31.4451 9.97386 33.4081 11.5752 33.956 13.7386H42.8191L29.1037 0L14.1361 15L29.1037 30L42.8257 16.2484H33.9494C33.3886 18.3987 31.4385 19.9869 29.1168 19.9869Z"/>
            </svg>
            <span className="font-['Inter'] text-[15px] leading-[18px]">
              <span className="font-light">Powered by </span>
              <span className="font-bold">LimaCharlie</span>
            </span>
          </a>
        </div>
      </footer>
    </div>
  )
}
