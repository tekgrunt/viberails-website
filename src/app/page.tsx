'use client'

import { useState } from 'react'

// Figma Assets
const imgAndrew1 = "https://www.figma.com/api/mcp/asset/431a7524-a618-4263-9200-0073c6bbc7f7"
const imgPaulIhme1 = "https://www.figma.com/api/mcp/asset/6c184022-1818-40c7-89e9-7b3f38f98c38"
const img15498986553551 = "https://www.figma.com/api/mcp/asset/e8cd9b9b-582a-4ed9-99bd-34bd5b89fd18"
const imgIsolationMode = "https://www.figma.com/api/mcp/asset/44f5f164-365d-4b8e-adb4-5f42b8927513"
const imgIsolationMode1 = "https://www.figma.com/api/mcp/asset/dab52bc7-c903-4140-b552-1569416f2747"
const imgLine3 = "https://www.figma.com/api/mcp/asset/9b6c3834-14c7-41d4-b696-553ed7bab8a7"
const imgLine4 = "https://www.figma.com/api/mcp/asset/b2095cc5-fcae-4d27-93c2-7aa8e6d279f5"
const imgLine8 = "https://www.figma.com/api/mcp/asset/fa7332fd-b2a6-40b0-9ee2-f656ec75ea44"
const imgArrowForward = "https://www.figma.com/api/mcp/asset/67f9bd5e-9c46-467c-9cee-6969b36ff562"
const imgLine7 = "https://www.figma.com/api/mcp/asset/fe830f09-f3cb-43ce-a623-e7783551a74d"
const imgStacks = "https://www.figma.com/api/mcp/asset/56abbcfd-e885-43c1-b7d3-71c29c43a1a6"
const imgGroup1728 = "https://www.figma.com/api/mcp/asset/59664af7-7aaf-4acc-9957-ed3fedbb5c11"
const imgSavings = "https://www.figma.com/api/mcp/asset/cb2c8dbb-3369-4b2d-ade7-5b5772e90207"
const imgDesignServices = "https://www.figma.com/api/mcp/asset/114d8540-0c9d-403e-930d-4043bf9f0b50"
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/0bbcdf60-49b8-4e1d-8cd4-1391e7b16100"
const imgEllipse19 = "https://www.figma.com/api/mcp/asset/5c28f7fe-02dd-4837-bdf4-d1c9a34b687d"
const imgContentCopy = "https://www.figma.com/api/mcp/asset/71123bcd-cd80-4ecd-afac-2507eda97c59"
const imgAppleSensor = "https://www.figma.com/api/mcp/asset/56d63940-352f-47e1-b10d-8df9683de8ff"
const imgWindowsSensor = "https://www.figma.com/api/mcp/asset/afcf1c15-1a37-42d0-9180-66755528eb73"
const imgIsolationMode2 = "https://www.figma.com/api/mcp/asset/0dbffb93-a0df-456a-9109-48ffc0bcea38"
const imgStatMinus1 = "https://www.figma.com/api/mcp/asset/f0f1826a-c947-4037-93d5-50d3a14d298b"
const imgLayer1 = "https://www.figma.com/api/mcp/asset/88970f67-8753-4851-8794-5851305f9407"
const imgGroup1947 = "https://www.figma.com/api/mcp/asset/47fa091d-37d9-4a08-b3c2-30617fdcb4f7"

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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
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
      <div className="hidden lg:block absolute h-[597px] left-[538px] top-[1396px] w-[953px] pointer-events-none">
        <img alt="" className="block max-w-none size-full opacity-40" src={imgIsolationMode1} />
      </div>

      {/* Decorative Lines - Upper Left */}
      <div className="hidden lg:block absolute left-[-130px] top-[230px] w-[575px] h-[231px] pointer-events-none" style={{ transform: 'scaleX(-1)' }}>
        <img alt="" className="block max-w-none size-full" src={imgGroup1947} />
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
          {/* Surhead */}
          <p className="font-['IBM_Plex_Mono'] font-medium text-[#3ca8de] text-[18px] tracking-[2.7px] uppercase mb-[18px]">
            operational guardrails for teams
          </p>
          {/* Main Title */}
          <h1
            className="font-['Syne'] font-bold text-[36px] md:text-[48px] lg:text-[60px] leading-[42px] md:leading-[56px] lg:leading-[72px] tracking-[-0.6px] text-center mb-[18px] bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(185deg, #FFFFFF 0%, #3CA8DE 50%, #FF487B 100%)',
              backgroundPosition: '0 10px',
              filter: 'drop-shadow(0px 0px 36px rgba(90,222,249,0.5))',
              fontFeatureSettings: "'lnum' 1, 'pnum' 1"
            }}
          >
            Secure your AI agents.
          </h1>
          {/* Description */}
          <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white text-center max-w-[960px] mb-[48px]" style={{ textShadow: '0px 6px 36px rgba(0,24,60,0.25)' }}>
            VibeRails allows you to secure agentic systems by intercepting, auditing and validating tool calls<br />
            before they execute. Be the guardrail between your AI and the world. For you and your team.
          </p>
          {/* Command Box */}
          <CopyCommand />
        </div>
      </div>

      {/* Why Viberails Section */}
      <div className="relative pt-[60px] pb-[60px] lg:pt-[100px] lg:pb-[100px] max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[138px]">
        {/* Section Header */}
        <p className="font-['IBM_Plex_Mono'] font-medium text-[#3ca8de] text-[18px] tracking-[2.7px] uppercase mb-[12px]">
          why viberails
        </p>
        <h2
          className="font-['Syne'] font-bold text-[30px] md:text-[38px] lg:text-[45px] leading-[36px] md:leading-[42px] lg:leading-[48px] tracking-[-0.45px] mb-[6px] bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(185deg, #FFFFFF 0%, #3CA8DE 50%, #FF487B 100%)',
            backgroundSize: '100% 200%',
            backgroundPosition: '0 0',
            filter: 'drop-shadow(0px 0px 24px rgba(90,222,249,0.35))',
            fontFeatureSettings: "'lnum' 1, 'pnum' 1"
          }}
        >
          Say goodbye to uncontrolled AI agents
        </h2>
        <p className="font-['Inter'] font-light text-[18px] md:text-[24px] leading-[24px] md:leading-[30px] tracking-[-0.24px] text-white mb-[36px] lg:mb-[60px]">
          And say hello to visibility, control, and security for your agentic systems
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
              Sits in the blocking path of tool calls, giving you real-time control.
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
              See every tool call, every parameter, and every response.
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
              Define what's allowed. Block dangerous operations.
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
              Log and audit all agentic operations at scale.
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
            backgroundImage: 'linear-gradient(185deg, #FFFFFF 0%, #3CA8DE 50%, #FF487B 100%)',
            backgroundSize: '100% 200%',
            backgroundPosition: '0 0',
            filter: 'drop-shadow(0px 0px 24px rgba(90,222,249,0.35))',
            fontFeatureSettings: "'lnum' 1, 'pnum' 1"
          }}
        >
          Security in the critical path
        </h2>
        <p className="font-['Inter'] font-light text-[18px] md:text-[24px] leading-[24px] md:leading-[30px] tracking-[-0.24px] text-white mb-[36px] lg:mb-[60px]">
          Viberails intercepts tool calls before they execute, giving you control over what your AI agents can do. With total roundtrip time under 50ms, you get security without the slowdown.
        </p>

        {/* Steps */}
        <div className="flex flex-col gap-[48px] max-w-[580px]">
          <div>
            <h3 className="font-['Syne'] font-semibold text-[27px] leading-[30px] tracking-[-0.27px] text-white mb-[12px]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              Intercept
            </h3>
            <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white">
              VibeRails sits between your AI agent and its tools. Every tool call passes through our security layer first.
            </p>
          </div>
          <div>
            <h3 className="font-['Syne'] font-semibold text-[27px] leading-[30px] tracking-[-0.27px] text-white mb-[12px]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              Validate
            </h3>
            <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white">
              Apply your security policies in real-time. Check parameters, verify permissions, and assess risk before execution.
            </p>
          </div>
          <div>
            <h3 className="font-['Syne'] font-semibold text-[27px] leading-[30px] tracking-[-0.27px] text-white mb-[12px]" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              Control
            </h3>
            <p className="font-['Inter'] font-light text-[18px] leading-[24px] text-white">
              Allow, block, or modify tool calls based on your policies. Maintain full control over what your agents can do.
            </p>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="relative pt-[60px] pb-[60px] lg:pt-[100px] lg:pb-[100px] max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[138px]">
        <div className="flex flex-col lg:flex-row gap-[35px] items-start">
          {/* Left Column */}
          <div className="w-full lg:w-[565px] flex-shrink-0 flex flex-col gap-[18px]">
            <div className="flex flex-col gap-[12px]">
              <p className="font-['IBM_Plex_Mono'] font-medium text-[#3ca8de] text-[18px] tracking-[2.7px] uppercase">
                use cases
              </p>
              <h2
                className="font-['Syne'] font-bold text-[30px] md:text-[38px] lg:text-[45px] tracking-[-0.45px]"
                style={{
                  filter: 'drop-shadow(0px 0px 24px rgba(90,222,249,0.35))',
                  fontFeatureSettings: "'lnum' 1, 'pnum' 1"
                }}
              >
                <span
                  className="block leading-[36px] md:leading-[42px] lg:leading-[48px] bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(185deg, #FFFFFF 0%, #3CA8DE 50%, #FF487B 100%)',
                    backgroundSize: '100% 130%',
                    backgroundPosition: '0 0',
                  }}
                >
                  Built for
                </span>
                <span
                  className="block leading-[36px] md:leading-[42px] lg:leading-[48px] bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(185deg, #FFFFFF 0%, #3CA8DE 50%, #FF487B 100%)',
                    backgroundSize: '100% 130%',
                    backgroundPosition: '0 0',
                  }}
                >
                  agentic security
                </span>
              </h2>
            </div>
            <p className="font-['Inter'] font-light text-[18px] md:text-[24px] leading-[24px] md:leading-[30px] tracking-[-0.24px] text-white">
              Secure any system where AI agents interact with tools, APIs, or infrastructure.
            </p>
          </div>

          {/* Right Column - Use Cases List */}
          <div className="flex-1 flex flex-col gap-[12px]">
            {/* Top border */}
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-6px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine8} />
              </div>
            </div>

            {/* Use Case Items */}
            {[
              'Claude Code & Coding Agents',
              'Autonomous Agents',
              'Enterprise AI Deployments',
              'MCP Server Security'
            ].map((item) => (
              <div key={item} className="flex flex-col gap-[12px]">
                <a href="#" className="flex gap-[6px] items-center group">
                  <p className="font-['Syne'] font-bold text-[18px] leading-[18px] tracking-[0.9px] uppercase text-[#3ca8de] group-hover:text-[#5adef9] transition-colors" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
                    {item}
                  </p>
                </a>
                <div className="h-0 relative w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <img alt="" className="block max-w-none size-full" src={imgLine7} />
                  </div>
                </div>
              </div>
            ))}
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
              backgroundPosition: '0 15px',
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
            className="flex items-center justify-center h-[60px] w-[208px] border-2 border-[#ff487b] hover:bg-[#ff487b]/10 transition-colors"
          >
            <span className="font-['Syne'] font-bold text-[18px] leading-[18px] tracking-[0.9px] uppercase text-white" style={{ fontFeatureSettings: "'lnum' 1, 'pnum' 1" }}>
              start free
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
