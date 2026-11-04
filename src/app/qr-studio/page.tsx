"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type QRCodeStylingType from "qr-code-styling";
import type { DotType } from "qr-code-styling";
import {
  QrCode,
  Download,
  Upload,
  Trash2,
  Link2,
  Palette,
  Sliders,
  ShieldCheck,
  RefreshCw,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Layers,
  Image as ImageIcon,
} from "lucide-react";
import { SoftiloLogo } from "@/components/ui/softilo-logo";

const DOT_STYLES: { value: DotType; label: string; desc: string }[] = [
  { value: "rounded", label: "Rounded", desc: "Smooth modern edges" },
  { value: "dots", label: "Dots", desc: "Circular matrix nodes" },
  { value: "classy", label: "Classy", desc: "Sharp luxury corners" },
  {
    value: "classy-rounded",
    label: "Classy Rounded",
    desc: "Balanced agency look",
  },
  { value: "square", label: "Square", desc: "Classic high-contrast" },
  {
    value: "extra-rounded",
    label: "Extra Rounded",
    desc: "Fluid organic curves",
  },
];

export default function QRStudioPage() {
  const qrContainerRef = useRef<HTMLDivElement | null>(null);
  const qrInstanceRef = useRef<QRCodeStylingType | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [qrUrl, setQrUrl] = useState<string>("https://softilo.vercel.app/go");
  const [originUrl, setOriginUrl] = useState<string>("https://softilo.vercel.app");
  const [dotStyle, setDotStyle] = useState<DotType>("rounded");
  const [primaryColor, setPrimaryColor] = useState<string>("#080D1A");
  const [cornerColor, setCornerColor] = useState<string>("#2563EB");
  const [bgColor, setBgColor] = useState<string>("#FFFFFF");
  const [isTransparentBg, setIsTransparentBg] = useState<boolean>(false);
  const [logoDataUrl, setLogoDataUrl] = useState<string | undefined>(undefined);
  const [logoFileName, setLogoFileName] = useState<string>("");
  const [logoSize, setLogoSize] = useState<number>(0.35);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [hasLoadedSavedState, setHasLoadedSavedState] = useState<boolean>(false);

  // Load saved customization from localStorage (or default to ${window.location.origin}/go)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const origin = window.location.origin;
      setOriginUrl(origin);

      try {
        const rawSaved = window.localStorage.getItem(
          "softilo_qr_studio_settings_v1"
        );
        if (rawSaved) {
          const parsed = JSON.parse(rawSaved);
          setQrUrl(parsed.qrUrl || `${origin}/go`);
          if (parsed.dotStyle) setDotStyle(parsed.dotStyle);
          if (parsed.primaryColor) setPrimaryColor(parsed.primaryColor);
          if (parsed.cornerColor) setCornerColor(parsed.cornerColor);
          if (parsed.bgColor) setBgColor(parsed.bgColor);
          if (typeof parsed.isTransparentBg === "boolean") {
            setIsTransparentBg(parsed.isTransparentBg);
          }
          if (parsed.logoDataUrl) setLogoDataUrl(parsed.logoDataUrl);
          if (parsed.logoFileName) setLogoFileName(parsed.logoFileName);
          if (typeof parsed.logoSize === "number") {
            setLogoSize(parsed.logoSize);
          }
        } else {
          setQrUrl(`${origin}/go`);
        }
      } catch {
        setQrUrl(`${origin}/go`);
      } finally {
        setHasLoadedSavedState(true);
      }
    }
  }, []);

  // Automatically persist customization changes to localStorage
  useEffect(() => {
    if (!hasLoadedSavedState || typeof window === "undefined") return;
    try {
      window.localStorage.setItem(
        "softilo_qr_studio_settings_v1",
        JSON.stringify({
          qrUrl,
          dotStyle,
          primaryColor,
          cornerColor,
          bgColor,
          isTransparentBg,
          logoDataUrl,
          logoFileName,
          logoSize,
        })
      );
    } catch {
      // Ignore storage quota errors for large custom images
    }
  }, [
    hasLoadedSavedState,
    qrUrl,
    dotStyle,
    primaryColor,
    cornerColor,
    bgColor,
    isTransparentBg,
    logoDataUrl,
    logoFileName,
    logoSize,
  ]);

  // Initialize QRCodeStyling safely on the client
  useEffect(() => {
    let isMounted = true;

    async function initQrCode() {
      const QRCodeStylingModule = await import("qr-code-styling");
      const QRCodeStyling = QRCodeStylingModule.default;

      if (!isMounted) return;

      const qr = new QRCodeStyling({
        width: 1000,
        height: 1000,
        type: "svg",
        data: qrUrl || `${window.location.origin}/go`,
        image: logoDataUrl,
        margin: 24,
        qrOptions: {
          typeNumber: 0,
          mode: "Byte",
          errorCorrectionLevel: "H",
        },
        imageOptions: {
          hideBackgroundDots: true,
          imageSize: logoSize,
          margin: 14,
          crossOrigin: "anonymous",
        },
        dotsOptions: {
          color: primaryColor,
          type: dotStyle,
        },
        backgroundOptions: {
          color: isTransparentBg ? "transparent" : bgColor,
        },
        cornersSquareOptions: {
          color: cornerColor,
          type: dotStyle === "dots" ? "dot" : "extra-rounded",
        },
        cornersDotOptions: {
          color: cornerColor,
          type: dotStyle === "dots" ? "dot" : "dot",
        },
      });

      qrInstanceRef.current = qr;

      if (qrContainerRef.current) {
        qrContainerRef.current.innerHTML = "";
        qr.append(qrContainerRef.current);
      }

      setIsReady(true);
    }

    initQrCode();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reactive updates whenever customization options change
  useEffect(() => {
    if (!qrInstanceRef.current) return;

    qrInstanceRef.current.update({
      data: qrUrl.trim() || `${originUrl}/go`,
      image: logoDataUrl || undefined,
      qrOptions: {
        errorCorrectionLevel: "H",
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: logoSize,
        margin: 14,
        crossOrigin: "anonymous",
      },
      dotsOptions: {
        color: primaryColor,
        type: dotStyle,
      },
      backgroundOptions: {
        color: isTransparentBg ? "transparent" : bgColor,
      },
      cornersSquareOptions: {
        color: cornerColor,
        type:
          dotStyle === "square"
            ? "square"
            : dotStyle === "dots"
              ? "dot"
              : "extra-rounded",
      },
      cornersDotOptions: {
        color: cornerColor,
        type: dotStyle === "square" ? "square" : "dot",
      },
    });
  }, [
    qrUrl,
    originUrl,
    dotStyle,
    primaryColor,
    cornerColor,
    bgColor,
    isTransparentBg,
    logoDataUrl,
    logoSize,
  ]);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setLogoDataUrl(reader.result);
        setLogoFileName(file.name);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUseSoftiloLogo = async () => {
    try {
      const response = await fetch("/logo.svg");
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setLogoDataUrl(reader.result);
          setLogoFileName("softilo-logo.svg");
        }
      };
      reader.readAsDataURL(blob);
    } catch {
      setLogoDataUrl("/logo.jpg");
      setLogoFileName("logo.jpg");
    }
  };

  const handleRemoveLogo = () => {
    setLogoDataUrl(undefined);
    setLogoFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDownload = (extension: "svg" | "png") => {
    if (!qrInstanceRef.current) return;
    qrInstanceRef.current.download({
      name: "softilo-lifetime-qr",
      extension,
    });
  };

  const handleResetToLifetimeRedirect = () => {
    setQrUrl(`${originUrl}/go`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white selection:bg-accent-blue/30 selection:text-white">
      {/* Subtle Top Ambient Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -top-40 left-1/2 h-96 w-[760px] -translate-x-1/2 rounded-full bg-accent-blue/10 blur-[130px]" />
      </div>

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0a0a0f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <SoftiloLogo size="sm" />
            <span className="hidden h-5 w-px bg-white/10 sm:inline-block" />
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3 py-1 text-xs font-semibold text-accent-cyan">
              <QrCode className="h-3.5 w-3.5" />
              Lifetime Print QR Studio
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/go"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-accent-cyan/40 hover:text-white"
            >
              Test <code className="text-accent-cyan">/go</code> Redirect
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-white transition hover:bg-white/[0.08]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header Intro */}
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-cyan">
              <ShieldCheck className="h-3.5 w-3.5" />
              Dynamic 307 Redirect Engine • Error Correction Level H (30%)
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Lifetime Business Card{" "}
              <span className="bg-gradient-to-r from-white via-accent-cyan to-accent-purple bg-clip-text text-transparent">
                QR Code Studio
              </span>
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 sm:text-base">
              Generate ultra-crisp 1000×1000 print vectors linked to your dynamic{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-accent-cyan">
                /go
              </code>{" "}
              endpoint. Change your destination URL anytime via{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-slate-300">
                NEXT_PUBLIC_QR_TARGET_URL
              </code>{" "}
              without ever reprinting your cards.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111118] px-3.5 py-2.5">
              <CheckCircle2 className="h-4 w-4 text-accent-cyan" />
              <span>1000×1000 Print Resolution</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111118] px-3.5 py-2.5">
              <CheckCircle2 className="h-4 w-4 text-accent-purple" />
              <span>No-Cache 307 Redirect</span>
            </div>
          </div>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Left Column: Customization Controls (7 Cols) */}
          <div className="space-y-6 lg:col-span-7">
            {/* 1. Destination / Dynamic URL Card */}
            <section className="rounded-2xl border border-white/10 bg-[#111118]/90 p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-blue/15 text-accent-cyan">
                    <Link2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">
                      1. Encoded QR Destination URL
                    </h2>
                    <p className="text-xs text-slate-400">
                      Point to <code className="text-accent-cyan">/go</code> for
                      lifetime dynamic redirection or enter any custom URL
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleResetToLifetimeRedirect}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-accent-blue/30 bg-accent-blue/10 px-3 py-1.5 text-xs font-semibold text-accent-cyan transition hover:bg-accent-blue/20"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Use Dynamic /go
                </button>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="qr-url-input"
                  className="block text-xs font-medium text-slate-300"
                >
                  Target URL encoded inside QR
                </label>
                <input
                  id="qr-url-input"
                  type="url"
                  value={qrUrl}
                  onChange={(e) => setQrUrl(e.target.value)}
                  placeholder={`${originUrl}/go`}
                  className="w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20"
                />
                <p className="text-xs text-slate-400">
                  Current redirect route{" "}
                  <span className="font-mono text-slate-300">
                    {originUrl}/go
                  </span>{" "}
                  forwards visitors with a{" "}
                  <span className="text-accent-cyan font-medium">
                    307 Temporary Redirect
                  </span>{" "}
                  to{" "}
                  <span className="font-mono text-slate-300">
                    {process.env.NEXT_PUBLIC_QR_TARGET_URL ||
                      "https://softilo.vercel.app"}
                  </span>
                  .
                </p>
              </div>
            </section>

            {/* 2. Dot Pattern Style Selector */}
            <section className="rounded-2xl border border-white/10 bg-[#111118]/90 p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-purple/15 text-accent-purple">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">
                    2. Matrix Dot Style
                  </h2>
                  <p className="text-xs text-slate-400">
                    Select the geometric pattern for your business card print
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {DOT_STYLES.map((style) => {
                  const active = dotStyle === style.value;
                  return (
                    <button
                      key={style.value}
                      type="button"
                      onClick={() => setDotStyle(style.value)}
                      className={`flex flex-col items-start rounded-xl border p-3.5 text-left transition ${
                        active
                          ? "border-accent-cyan bg-accent-blue/15 text-white shadow-[0_0_20px_rgba(0,212,255,0.12)]"
                          : "border-white/10 bg-[#0a0a0f]/70 text-slate-300 hover:border-white/20 hover:bg-white/[0.03]"
                      }`}
                    >
                      <div className="flex w-full items-center justify-between">
                        <span className="text-sm font-bold">{style.label}</span>
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            active ? "bg-accent-cyan" : "bg-white/15"
                          }`}
                        />
                      </div>
                      <span className="mt-1 text-[11px] text-slate-400">
                        {style.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* 3. Color & Background Customization */}
            <section className="rounded-2xl border border-white/10 bg-[#111118]/90 p-6 shadow-xl">
              <div className="mb-5 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-blue/15 text-accent-cyan">
                  <Palette className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">
                    3. Brand Colors & Surface Background
                  </h2>
                  <p className="text-xs text-slate-400">
                    Customize primary matrix dots, corner eyes, and print background
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {/* Primary Color */}
                <div className="rounded-xl border border-white/10 bg-[#0a0a0f] p-3.5">
                  <label
                    htmlFor="primary-color"
                    className="block text-xs font-semibold text-slate-300"
                  >
                    Primary Dot Color
                  </label>
                  <div className="mt-2 flex items-center gap-2.5">
                    <input
                      id="primary-color"
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="h-9 w-11 cursor-pointer rounded-lg border border-white/15 bg-transparent p-0.5"
                    />
                    <input
                      type="text"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#111118] px-2.5 py-1.5 font-mono text-xs uppercase text-white outline-none focus:border-accent-cyan"
                    />
                  </div>
                </div>

                {/* Corner Accent Color */}
                <div className="rounded-xl border border-white/10 bg-[#0a0a0f] p-3.5">
                  <label
                    htmlFor="corner-color"
                    className="block text-xs font-semibold text-slate-300"
                  >
                    Corner Accent Color
                  </label>
                  <div className="mt-2 flex items-center gap-2.5">
                    <input
                      id="corner-color"
                      type="color"
                      value={cornerColor}
                      onChange={(e) => setCornerColor(e.target.value)}
                      className="h-9 w-11 cursor-pointer rounded-lg border border-white/15 bg-transparent p-0.5"
                    />
                    <input
                      type="text"
                      value={cornerColor}
                      onChange={(e) => setCornerColor(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#111118] px-2.5 py-1.5 font-mono text-xs uppercase text-white outline-none focus:border-accent-cyan"
                    />
                  </div>
                </div>

                {/* Background Color */}
                <div className="rounded-xl border border-white/10 bg-[#0a0a0f] p-3.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="bg-color"
                      className="block text-xs font-semibold text-slate-300"
                    >
                      Background
                    </label>
                    <label className="inline-flex cursor-pointer items-center gap-1.5 text-[11px] font-medium text-accent-cyan">
                      <input
                        type="checkbox"
                        checked={isTransparentBg}
                        onChange={(e) => setIsTransparentBg(e.target.checked)}
                        className="h-3.5 w-3.5 rounded border-white/20 bg-transparent accent-accent-cyan"
                      />
                      Transparent
                    </label>
                  </div>
                  <div
                    className={`mt-2 flex items-center gap-2.5 transition ${
                      isTransparentBg ? "pointer-events-none opacity-40" : ""
                    }`}
                  >
                    <input
                      id="bg-color"
                      type="color"
                      value={bgColor}
                      disabled={isTransparentBg}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="h-9 w-11 cursor-pointer rounded-lg border border-white/15 bg-transparent p-0.5"
                    />
                    <input
                      type="text"
                      value={isTransparentBg ? "TRANSPARENT" : bgColor}
                      disabled={isTransparentBg}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#111118] px-2.5 py-1.5 font-mono text-xs uppercase text-white outline-none focus:border-accent-cyan"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Center Logo Upload & Scaling */}
            <section className="rounded-2xl border border-white/10 bg-[#111118]/90 p-6 shadow-xl">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-purple/15 text-accent-purple">
                    <ImageIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">
                      4. Center Brand Logo & Size
                    </h2>
                    <p className="text-xs text-slate-400">
                      Upload any PNG/SVG/JPG logo or apply the official Softilo mark
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleUseSoftiloLogo}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-accent-blue/30 bg-accent-blue/10 px-3 py-1.5 text-xs font-semibold text-accent-cyan transition hover:bg-accent-blue/20"
                  >
                    Apply Softilo Logo
                  </button>
                  {logoDataUrl && (
                    <button
                      type="button"
                      onClick={handleRemoveLogo}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-300 transition hover:bg-red-500/20"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Remove Logo
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 items-center">
                {/* File Upload Dropzone */}
                <div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/svg+xml,image/jpeg,image/webp"
                    onChange={handleLogoUpload}
                    className="hidden"
                    id="qr-logo-upload"
                  />
                  <label
                    htmlFor="qr-logo-upload"
                    className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-[#0a0a0f] px-4 py-5 text-center transition hover:border-accent-cyan/60 hover:bg-white/[0.02]"
                  >
                    <Upload className="mb-2 h-6 w-6 text-accent-cyan" />
                    <span className="text-xs font-semibold text-white">
                      {logoFileName
                        ? `Loaded: ${logoFileName}`
                        : "Click to upload PNG / SVG Logo"}
                    </span>
                    <span className="mt-1 text-[11px] text-slate-400">
                      Converted locally via FileReader Data URL
                    </span>
                  </label>
                </div>

                {/* Logo Size Slider */}
                <div className="rounded-xl border border-white/10 bg-[#0a0a0f] p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="logo-size-slider"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-300"
                    >
                      <Sliders className="h-3.5 w-3.5 text-accent-cyan" />
                      Center Logo Scale
                    </label>
                    <span className="rounded bg-accent-blue/15 px-2 py-0.5 font-mono text-xs font-bold text-accent-cyan">
                      {Math.round(logoSize * 100)}% ({logoSize.toFixed(2)})
                    </span>
                  </div>
                  <input
                    id="logo-size-slider"
                    type="range"
                    min={0.2}
                    max={0.45}
                    step={0.01}
                    value={logoSize}
                    onChange={(e) => setLogoSize(parseFloat(e.target.value))}
                    className="w-full cursor-pointer accent-accent-cyan"
                  />
                  <div className="mt-1.5 flex justify-between text-[10px] font-mono text-slate-500">
                    <span>0.20 (Compact)</span>
                    <span>0.35 (Optimal)</span>
                    <span>0.45 (Max H-Level)</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Live Preview & Export Studio (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-white/10 bg-[#111118] p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-cyan">
                    Live Print Preview
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    1000 × 1000 px Master Canvas
                  </h3>
                </div>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-400">
                  ECC: Level H (30%)
                </span>
              </div>

              {/* QR Canvas Container */}
              <div
                className="relative mx-auto flex aspect-square w-full max-w-[340px] items-center justify-center overflow-hidden rounded-2xl border border-white/15 p-4 shadow-inner transition"
                style={{
                  backgroundColor: isTransparentBg ? "#181824" : bgColor,
                  backgroundImage: isTransparentBg
                    ? "linear-gradient(45deg, #222230 25%, transparent 25%), linear-gradient(-45deg, #222230 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #222230 75%), linear-gradient(-45deg, transparent 75%, #222230 75%)"
                    : "none",
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                }}
              >
                {!isReady && (
                  <div className="flex flex-col items-center gap-2 text-xs text-slate-400">
                    <div className="h-7 w-7 animate-spin rounded-full border-2 border-accent-cyan border-t-transparent" />
                    <span>Rendering High-Precision Vector...</span>
                  </div>
                )}
                <div
                  ref={qrContainerRef}
                  className="flex h-full w-full items-center justify-center [&_canvas]:h-full! [&_canvas]:w-full! [&_svg]:h-full! [&_svg]:w-full!"
                />
              </div>

              {/* Encoded Target Pill */}
              <div className="mt-4 rounded-xl border border-white/10 bg-[#0a0a0f] px-3.5 py-2.5">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Encoded URL:</span>
                  <span className="font-mono text-accent-cyan truncate max-w-[220px]">
                    {qrUrl || `${originUrl}/go`}
                  </span>
                </div>
              </div>

              {/* Export Buttons */}
              <div className="mt-5 space-y-3">
                <button
                  type="button"
                  onClick={() => handleDownload("svg")}
                  disabled={!isReady}
                  className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent-blue/20 transition hover:opacity-95 disabled:opacity-50 cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  Download SVG (Vector for Print)
                </button>

                <button
                  type="button"
                  onClick={() => handleDownload("png")}
                  disabled={!isReady}
                  className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition hover:border-accent-cyan/40 hover:bg-white/[0.08] disabled:opacity-50 cursor-pointer"
                >
                  <Download className="h-4 w-4 text-accent-cyan" />
                  Download High-Res PNG (1000×1000)
                </button>
              </div>

              {/* Print Tip Footer */}
              <div className="mt-5 border-t border-white/10 pt-4 text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-200">Print Shop Tip:</strong> Use{" "}
                <span className="text-accent-cyan">SVG Vector</span> when
                sending your business card layout to Adobe Illustrator / CorelDRAW
                for razor-sharp CMYK/spot-UV embossing at any physical size.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

