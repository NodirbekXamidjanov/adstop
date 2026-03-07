"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Link2, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "@/context/authContext/registerContext";

type Platform = "instagram" | "tiktok";

const platforms: {
    id: Platform;
    label: string;
    placeholder: string;
    icon: React.ReactNode;
}[] = [
        {
            id: "instagram",
            label: "Instagram",
            placeholder: "https://instagram.com/username",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
            ),
        },
        {
            id: "tiktok",
            label: "TikTok",
            placeholder: "https://tiktok.com/@username",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                </svg>
            ),
        },
    ];

export function CreateInfAccount() {
    const [selected, setSelected] = useState<Platform>("instagram");
    const [profileUrl, setProfileUrl] = useState("");

    const { updateRegisterData } = useAuth()
    const selectedPlatform = platforms.find((p) => p.id === selected)!;
    const navigate = useNavigate();

    const handlePlatformSelect = (id: Platform) => {
        setSelected(id);
        setProfileUrl("");
    };

    const handlePlatformData = () => {
        updateRegisterData({
            platform: selected,
            platformUrl: profileUrl
        })
        navigate("/register/influncer/finish-setup")
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center border border-b justify-center px-4 font-sans">
            <div className="flex items-center justify-between w-full bg-white absolute top-0 px-[2%]">
                <div className="w-30"> <img src="/image.png" alt="" /></div>
                <a href="#" className="text-[#8d8d91] hover:underline text-[12px] font-normal">Need help?</a>
            </div>
            {/* Step indicator */}
            <div className="mb-6 flex flex-col items-center mt-15 gap-1">
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                    Step 2 of 2
                </p>
                <div className="flex gap-2 mt-1">
                    <div className="h-0.75 w-24 rounded-full bg-black" />
                </div>
            </div>

            {/* Card */}
            <Card className="w-full max-w-sm rounded-2xl shadow-sm border border-gray-200 bg-white">
                <CardContent className="pt-8 pb-8 px-8 flex flex-col items-center gap-6">
                    {/* Title */}
                    <div className="text-center space-y-1">
                        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                            Connect your platform
                        </h1>
                        <p className="text-sm text-gray-500">
                            Select the primary platform you want to monetize.
                        </p>
                    </div>

                    {/* Platform selector */}
                    <div className="grid grid-cols-2 gap-3 w-full">
                        {platforms.map((platform) => {
                            const isSelected = selected === platform.id;
                            return (
                                <button
                                    key={platform.id}
                                    onClick={() => handlePlatformSelect(platform.id)}
                                    className={cn(
                                        "relative flex flex-col items-center justify-center gap-2 rounded-xl border-2 py-5 px-4 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-black",
                                        isSelected
                                            ? "border-black bg-white shadow-sm"
                                            : "border-gray-200 bg-white hover:border-gray-300"
                                    )}
                                >
                                    {isSelected && (
                                        <span className="absolute top-2 right-2 text-black">
                                            <CheckCircle2 size={16} strokeWidth={2.5} />
                                        </span>
                                    )}
                                    <span className="text-gray-800">{platform.icon}</span>
                                    <span className="text-sm font-semibold text-gray-800">
                                        {platform.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Profile URL Input */}
                    <div className="w-full space-y-1.5">
                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                            {selectedPlatform.label} Profile Link
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <Link2 size={15} />
                            </span>
                            <Input
                                type="url"
                                value={profileUrl}
                                onChange={(e) => setProfileUrl(e.target.value)}
                                placeholder={selectedPlatform.placeholder}
                                className="pl-9 rounded-xl border-gray-200 focus:border-black focus:ring-black text-sm h-11"
                            />
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                        className="w-full rounded-full bg-black text-white hover:bg-gray-800 transition-colors h-12 text-sm font-semibold gap-2 disabled:opacity-40"
                        disabled={!profileUrl.trim()}
                        onClick={() => handlePlatformData()}
                    >
                        <Link2 size={16} />
                        Continue with {selectedPlatform.label}
                    </Button>

                    {/* Disclaimer */}
                    <p className="text-[11px] text-center text-gray-400 leading-relaxed">
                        By connecting, you agree to share your public profile data. We never
                        post on your behalf.{" "}
                        <a href="#" className="underline underline-offset-2 text-gray-500">
                            Learn more about our data usage.
                        </a>
                    </p>
                </CardContent>
            </Card>

            {/* Back link */}
            <button
                className="mt-5 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                onClick={() => navigate("/register")}
            >
                <ChevronLeft size={15} />
                Back to Step 1
            </button>

            <span className="mt-25 mb-5 text-[11px] text-center text-gray-400 leading-relaxed">© 2024 AdsTop Inc. All rights reserved.</span>
        </div>
    );
}